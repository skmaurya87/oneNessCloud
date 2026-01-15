import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, of, catchError, switchMap } from 'rxjs';

export interface Course {
  id: number;
  level: string;
  badge?: string;
  title: string;
  description: string;
  duration_weeks: number;
  students_enrolled: number;
  rating: number;
  reviews: number;
  img: string;
  fees: number;
  heading1: string;
  features: string[];
  heading2: string;
  Overview: string[];
  cta: string;
  category?: string;
}

export interface CourseCategory {
  name: string;
  file: string;
  displayOrder: number;
  courses: Course[];
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private readonly COURSES_BASE_PATH = 'assets/courses/';
  
  // Cache for category index to avoid multiple HTTP calls
  private categoryIndexCache: any = null;

  constructor(private http: HttpClient) { }

  /**
   * Load the category index from courses-index.json
   * This is the single source of truth for all categories
   */
  getCategoryIndex(): Observable<any> {
    if (this.categoryIndexCache) {
      return of(this.categoryIndexCache);
    }
    return this.http.get<any>(`${this.COURSES_BASE_PATH}courses-index.json`).pipe(
      map(data => {
        this.categoryIndexCache = data;
        return data;
      })
    );
  }

  /**
   * Get category name by filename from the index
   */
  private getCategoryNameByFile(fileName: string): Observable<string> {
    return this.getCategoryIndex().pipe(
      map(data => {
        const category = data.categories.find((cat: any) => cat.file === fileName);
        return category ? category.name : this.fileNameToCategory(fileName);
      })
    );
  }

  /**
   * Converts filename to readable category name (fallback)
   * Example: 'cyber-security.json' -> 'Cyber Security'
   */
  private fileNameToCategory(fileName: string): string {
    return fileName
      .replace('.json', '')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  /**
   * Dynamically loads all course categories from courses-index.json
   * This ensures category names always match across the application
   */
  getAllCourses(limitPerCategory?: number): Observable<CourseCategory[]> {
    return this.getCategoryIndex().pipe(
      switchMap((indexData: any) => {
        const categories = indexData.categories;
        const requests: Observable<CourseCategory>[] = categories.map((category: any) =>
          this.http.get<Course[]>(`${this.COURSES_BASE_PATH}${category.file}`).pipe(
            map(courses => {
              const processedCourses = courses.map(course => ({
                ...course,
                category: category.name
              }));
              return {
                name: category.name,
                file: category.file,
                displayOrder: category.displayOrder,
                courses: limitPerCategory 
                  ? processedCourses.slice(0, limitPerCategory) 
                  : processedCourses
              } as CourseCategory;
            }),
            catchError(error => {
              console.error(`Error loading ${category.file}:`, error);
              return of({
                name: category.name,
                file: category.file,
                displayOrder: category.displayOrder,
                courses: []
              } as CourseCategory);
            })
          )
        );
        return forkJoin(requests) as Observable<CourseCategory[]>;
      }),
      map((categories: CourseCategory[]) => 
        categories.sort((a: CourseCategory, b: CourseCategory) => a.displayOrder - b.displayOrder)
      )
    );
  }

  /**
   * Get courses for a specific category by name
   */
  getCoursesByCategory(categoryName: string, limit?: number): Observable<Course[]> {
    return this.getAllCourses().pipe(
      map(categories => {
        const category = categories.find(c => 
          c.name.toLowerCase() === categoryName.toLowerCase()
        );
        
        if (!category) {
          console.warn(`Category ${categoryName} not found`);
          return [];
        }

        return limit ? category.courses.slice(0, limit) : category.courses;
      })
    );
  }

  /**
   * Get all available category names
   */
  getCategories(): Observable<string[]> {
    return this.getAllCourses().pipe(
      map(categories => categories.map(cat => cat.name))
    );
  }

  /**
   * Search courses across all categories
   */
  searchCourses(searchTerm: string): Observable<CourseCategory[]> {
    return this.getAllCourses().pipe(
      map(categories => {
        const lowerSearchTerm = searchTerm.toLowerCase();
        return categories.map(category => ({
          ...category,
          courses: category.courses.filter(course =>
            course.title.toLowerCase().includes(lowerSearchTerm) ||
            course.description.toLowerCase().includes(lowerSearchTerm) ||
            course.level.toLowerCase().includes(lowerSearchTerm)
          )
        })).filter(category => category.courses.length > 0);
      })
    );
  }

  /**
   * Load clients and partners data from the unified JSON file
   */
  getClientsAndPartners(): Observable<any> {
    return this.http.get('assets/courses/clients-partners.json').pipe(
      catchError(error => {
        console.error('Error loading clients-partners data:', error);
        return of({ clients: [], partners: [] });
      })
    );
  }

  /**
   * Get only clients data
   */
  getClients(): Observable<any[]> {
    return this.getClientsAndPartners().pipe(
      map(data => data.clients || [])
    );
  }
  /**
   * Get only partners data
   */
  getPartners(): Observable<any[]> {
    return this.getClientsAndPartners().pipe(
      map(data => data.partners || [])
    );
  }

  getLeadershipData(): Observable<any[]> {
    return this.http.get<any[]>('assets/courses/leadership.json').pipe(
      catchError(error => {
        console.error('Error loading leadership data:', error);
        return of([]);
      })
    );
  }

  getLeadership(): Observable<any[]> {
    return this.getLeadershipData();
  }
}

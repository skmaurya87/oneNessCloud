import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map, of, catchError } from 'rxjs';

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
  
  // List of course category files to auto-discover
  // Add new files here to automatically include them
  private readonly COURSE_FILES = [
    'cyber-security.json',
    'access-management.json',
    'identity.json',
    'it-courses.json'
  ];

  constructor(private http: HttpClient) { }

  /**
   * Converts filename to readable category name
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
   * Dynamically loads all course categories from JSON files.
   * Each JSON file name becomes the category name.
   * No code changes needed when adding new categories - just add filename to COURSE_FILES array.
   */
  getAllCourses(limitPerCategory?: number): Observable<CourseCategory[]> {
    const requests = this.COURSE_FILES.map((file, index) =>
      this.http.get<Course[]>(`${this.COURSES_BASE_PATH}${file}`).pipe(
        map(courses => {
          const categoryName = this.fileNameToCategory(file);
          const processedCourses = courses.map(course => ({
            ...course,
            category: categoryName
          }));
          return {
            name: categoryName,
            file: file,
            displayOrder: index + 1,
            courses: limitPerCategory 
              ? processedCourses.slice(0, limitPerCategory) 
              : processedCourses
          } as CourseCategory;
        }),
        catchError(error => {
          console.error(`Error loading ${file}:`, error);
          return of({
            name: this.fileNameToCategory(file),
            file: file,
            displayOrder: index + 1,
            courses: []
          } as CourseCategory);
        })
      )
    );

    return forkJoin(requests);
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
}

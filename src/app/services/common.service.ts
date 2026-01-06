import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, map } from 'rxjs';

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
  courses: Course[];
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private courseCategories: CourseCategory[] = [
    { name: 'Cyber Security', file: 'assets/courses/cyber-security.json', courses: [] },
    { name: 'Access Management', file: 'assets/courses/access-management.json', courses: [] },
    { name: 'Identity Management', file: 'assets/courses/identity.json', courses: [] }
  ];

  constructor(private http: HttpClient) { }

  getAllCourses(limitPerCategory?: number): Observable<CourseCategory[]> {
    const requests = this.courseCategories.map(category =>
      this.http.get<Course[]>(category.file).pipe(
        map(courses => {
          const processedCourses = courses.map(course => ({
            ...course,
            category: category.name
          }));
          return {
            ...category,
            courses: limitPerCategory 
              ? processedCourses.slice(0, limitPerCategory) 
              : processedCourses
          };
        })
      )
    );

    return forkJoin(requests);
  }

  getCoursesByCategory(categoryName: string, limit?: number): Observable<Course[]> {
    const category = this.courseCategories.find(c => c.name === categoryName);
    if (!category) {
      throw new Error(`Category ${categoryName} not found`);
    }

    return this.http.get<Course[]>(category.file).pipe(
      map(courses => {
        const processedCourses = courses.map(course => ({
          ...course,
          category: category.name
        }));
        return limit ? processedCourses.slice(0, limit) : processedCourses;
      })
    );
  }
}

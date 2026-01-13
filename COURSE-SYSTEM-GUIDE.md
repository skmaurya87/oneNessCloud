# JSON-Driven Course Listing System - Complete Guide

## 🎯 Overview

This application uses a **fully JSON-driven architecture** for managing courses and categories. Adding new courses or categories requires **ZERO code changes** - only JSON file updates!

---

## 📁 System Architecture

### File Structure
```
src/assets/courses/
├── courses-index.json          ← Master index file (lists all categories)
├── cyber-security.json         ← Category: Cyber Security courses
├── access-management.json      ← Category: Access Management courses
├── identity.json              ← Category: Identity Management courses
├── it-courses.json            ← Category: IT Courses
└── [your-new-category].json   ← Add new categories here!
```

---

## 🚀 How to Add a New Course Category

### Step 1: Create the JSON File

Create a new JSON file in `src/assets/courses/` (e.g., `cloud-computing.json`):

```json
[
  {
    "id": 1,
    "level": "Beginner",
    "badge": "Popular",
    "title": "AWS Cloud Practitioner",
    "description": "Learn AWS fundamentals and cloud computing basics",
    "duration_weeks": 8,
    "students_enrolled": 1500,
    "rating": 4.7,
    "reviews": 250,
    "img": "assets/images/aws-cloud.jpg",
    "fees": 299,
    "heading1": "Key Features",
    "features": [
      "Hands-on AWS Labs",
      "Certification Preparation",
      "Expert Instructors",
      "24/7 Support"
    ],
    "heading2": "Course Overview",
    "Overview": [
      "This course covers AWS cloud fundamentals.",
      "Perfect for beginners starting their cloud journey."
    ],
    "cta": "Learn More"
  }
]
```

### Step 2: Register in courses-index.json

Add your category to `src/assets/courses/courses-index.json`:

```json
{
  "categories": [
    {
      "name": "Cloud Computing",
      "file": "cloud-computing.json",
      "displayOrder": 5,
      "description": "Master cloud platforms and technologies"
    }
  ]
}
```

### Step 3: Done! ✅

That's it! The application will automatically:
- Discover the new category
- Load courses from the file
- Display them with filtering and search
- No restart or rebuild needed (in development mode)

---

## 📝 JSON Schema Reference

### courses-index.json Structure

```json
{
  "categories": [
    {
      "name": "string",           // Display name (e.g., "Cyber Security")
      "file": "string",           // Filename (e.g., "cyber-security.json")
      "displayOrder": number,     // Sort order (lower = appears first)
      "description": "string"     // Category description (optional)
    }
  ]
}
```

### Course Object Schema

```json
{
  "id": number,                    // Unique course ID
  "level": "string",               // "Beginner" | "Intermediate" | "Advanced"
  "badge": "string",               // Optional badge text (e.g., "Popular")
  "title": "string",               // Course title
  "description": "string",         // Short description
  "duration_weeks": number,        // Course duration
  "students_enrolled": number,     // Enrollment count
  "rating": number,                // Rating (0-5)
  "reviews": number,               // Number of reviews
  "img": "string",                 // Image path
  "fees": number,                  // Course price
  "heading1": "string",            // Features section heading
  "features": ["string"],          // Array of feature items
  "heading2": "string",            // Overview section heading
  "Overview": ["string"],          // Array of overview paragraphs
  "cta": "string"                  // Call-to-action text
}
```

---

## 🔧 Component Usage

### Basic Usage (Show All Courses)

```html
<app-course-list></app-course-list>
```

### With Category Filter

```html
<app-course-list [filterCategory]="'Cyber Security'"></app-course-list>
```

### With Search and Filters UI

```html
<app-course-list 
  [showFilters]="true" 
  [showSearch]="true"
  [showCategoryHeadings]="true">
</app-course-list>
```

### Limited Courses Per Category

```html
<app-course-list 
  [limitPerCategory]="3"
  [showHeading]="true">
</app-course-list>
```

### All Configuration Options

```html
<app-course-list
  [limitPerCategory]="number"           <!-- Limit courses per category -->
  [grid]="boolean"                      <!-- Use 3-column grid vs 4-column -->
  [showHeading]="boolean"               <!-- Show section heading -->
  [showCategoryHeadings]="boolean"      <!-- Show category headings -->
  [showFilters]="boolean"               <!-- Show category filter dropdown -->
  [showSearch]="boolean"                <!-- Show search bar -->
  [filterCategory]="'Category Name'">   <!-- Pre-filter by category -->
</app-course-list>
```

---

## 🎨 Features

### 1. **Automatic Discovery**
- All JSON files in `courses-index.json` are loaded automatically
- No hardcoded categories in TypeScript

### 2. **Dynamic Filtering**
- Filter by category using dropdown
- Search across titles, descriptions, and levels
- Real-time results with course count

### 3. **Flexible Display**
- Configurable grid layouts (3 or 4 columns)
- Optional category headings with descriptions
- Responsive design for all screen sizes

### 4. **Scalability**
- Add unlimited categories and courses
- Maintain clean separation of data and code
- Easy content management for non-developers

---

## 🔍 Service API Reference

### CommonService Methods

#### `getAllCourses(limitPerCategory?: number): Observable<CourseCategory[]>`
Load all courses from all categories.

```typescript
this.commonService.getAllCourses().subscribe(categories => {
  console.log(categories);
});
```

#### `getCoursesByCategory(categoryName: string, limit?: number): Observable<Course[]>`
Load courses from a specific category.

```typescript
this.commonService.getCoursesByCategory('Cyber Security').subscribe(courses => {
  console.log(courses);
});
```

#### `getCategories(): Observable<CategoryConfig[]>`
Get all available categories.

```typescript
this.commonService.getCategories().subscribe(categories => {
  console.log(categories);
});
```

#### `searchCourses(searchTerm: string): Observable<CourseCategory[]>`
Search courses across all categories.

```typescript
this.commonService.searchCourses('AWS').subscribe(results => {
  console.log(results);
});
```

---

## 🎯 Example: Adding a New "DevOps" Category

### 1. Create `devops.json`

```json
[
  {
    "id": 1,
    "level": "Intermediate",
    "badge": "Trending",
    "title": "Docker & Kubernetes Masterclass",
    "description": "Master containerization and orchestration",
    "duration_weeks": 12,
    "students_enrolled": 2000,
    "rating": 4.9,
    "reviews": 400,
    "img": "assets/images/docker-k8s.jpg",
    "fees": 599,
    "heading1": "What You'll Learn",
    "features": [
      "Docker Fundamentals",
      "Kubernetes Architecture",
      "CI/CD Pipelines",
      "Production Deployment"
    ],
    "heading2": "Course Description",
    "Overview": [
      "Learn containerization with Docker and orchestration with Kubernetes.",
      "Build and deploy scalable applications in production environments."
    ],
    "cta": "Enroll Now"
  }
]
```

### 2. Update `courses-index.json`

```json
{
  "categories": [
    {
      "name": "Cyber Security",
      "file": "cyber-security.json",
      "displayOrder": 1,
      "description": "Advanced cybersecurity and ethical hacking courses"
    },
    {
      "name": "DevOps",
      "file": "devops.json",
      "displayOrder": 5,
      "description": "Master DevOps tools and practices"
    }
  ]
}
```

### 3. Result 🎉

The DevOps category automatically appears:
- In the course listing
- In the category filter dropdown
- In search results
- With proper sorting based on `displayOrder`

---

## 🚨 Important Notes

### File Naming
- Use lowercase with hyphens: `cloud-computing.json` ✅
- Avoid spaces: `Cloud Computing.json` ❌
- Keep it simple and descriptive

### Category Names
- Can include spaces and capitals in the index file
- Use clear, descriptive names
- Example: "Cloud Computing" (not "cloud_comp")

### Display Order
- Lower numbers appear first
- Use increments of 10 for easy reordering (10, 20, 30...)
- Can be any positive number

### Course IDs
- Must be unique within each category file
- Can be sequential (1, 2, 3...) within the file
- Not required to be globally unique across files

---

## ✅ Benefits

1. **Zero Code Changes**: Add courses by editing JSON only
2. **Content Management**: Non-developers can manage courses
3. **Scalable**: Support unlimited categories and courses
4. **Maintainable**: Clean separation of data and logic
5. **Flexible**: Easy filtering, searching, and display options
6. **Future-Proof**: Add fields without breaking existing code

---

## 🐛 Troubleshooting

### Courses Not Appearing?
1. Check `courses-index.json` syntax is valid
2. Verify file path matches exactly
3. Ensure JSON file exists in `src/assets/courses/`
4. Check browser console for errors

### Category Filter Not Working?
1. Verify category name matches exactly (case-sensitive)
2. Check `displayOrder` is a valid number
3. Ensure `showFilters="true"` is set in component

### Search Not Working?
1. Verify `showSearch="true"` is set
2. Check that FormsModule is imported in app.module.ts
3. Clear browser cache and reload

---

## 📚 Additional Resources

- Angular HTTP Client: https://angular.io/guide/http
- RxJS Observables: https://rxjs.dev/guide/overview
- JSON Syntax: https://www.json.org/

---

**Need Help?** Check the console for errors or review the CommonService implementation in `src/app/services/common.service.ts`.

# Fully JSON-Driven Course System - Complete Guide

## 🎯 System Overview

This application uses a **fully JSON-driven architecture** where course data is loaded dynamically from JSON files. The system requires **ZERO code changes** when adding new courses or categories.

### Key Principle
**JSON file names = Course categories**

Each JSON file in `src/assets/courses/` automatically becomes a course category, and the system renders all courses based solely on JSON content.

---

## 📁 Architecture

### File Structure
```
src/assets/courses/
├── cyber-security.json         ← Category: Cyber Security
├── access-management.json      ← Category: Access Management
├── identity.json               ← Category: Identity Management
└── it-courses.json             ← Category: IT Courses
```

### How It Works
1. **Filename → Category Name**: `cyber-security.json` becomes "Cyber Security"
2. **Automatic Discovery**: All files listed in `COURSE_FILES` array are loaded
3. **Dynamic Rendering**: Courses displayed automatically in category groups
4. **No Code Changes**: Add new JSON files without touching TypeScript/HTML

---

## 🚀 Adding a New Course Category

### Step 1: Create JSON File

Create a new file in `src/assets/courses/` (e.g., `cloud-computing.json`):

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

### Step 2: Register in Service

Open `src/app/services/common.service.ts` and add your filename to `COURSE_FILES`:

```typescript
private readonly COURSE_FILES = [
  'cyber-security.json',
  'access-management.json',
  'identity.json',
  'it-courses.json',
  'cloud-computing.json'  // ← Add your new file here
];
```

### Step 3: Done! ✅

The category "Cloud Computing" will automatically appear with all its courses.

---

## 📝 Course JSON Schema

### Complete Structure

```json
[
  {
    "id": number,                    // Unique within file
    "level": string,                 // "Beginner" | "Intermediate" | "Advanced"
    "badge": string,                 // Optional: "Popular", "Trending", etc.
    "title": string,                 // Course title
    "description": string,           // Short description
    "duration_weeks": number,        // Duration in weeks
    "students_enrolled": number,     // Number of students
    "rating": number,                // Rating (0-5)
    "reviews": number,               // Number of reviews
    "img": string,                   // Image path
    "fees": number,                  // Price
    "heading1": string,              // Features section heading
    "features": [string],            // Array of feature items
    "heading2": string,              // Overview section heading
    "Overview": [string],            // Array of overview paragraphs
    "cta": string                    // Call-to-action button text
  }
]
```

### Required Fields

All fields except `badge` are required for proper display.

---

## 🔧 Adding Courses to Existing Category

Simply edit the JSON file and add more course objects to the array:

```json
[
  {
    "id": 1,
    "title": "First Course",
    ...
  },
  {
    "id": 2,
    "title": "Second Course",
    ...
  },
  {
    "id": 3,
    "title": "Third Course",
    ...
  }
]
```

**Important**: Ensure each course has a unique `id` within the file.

---

## 🎨 Naming Conventions

### File Naming Rules

✅ **Good**:
- `cyber-security.json` → "Cyber Security"
- `cloud-computing.json` → "Cloud Computing"
- `it-courses.json` → "It Courses"
- `devops-tools.json` → "Devops Tools"

❌ **Avoid**:
- `CyberSecurity.json` (camelCase)
- `cyber_security.json` (underscores)
- `cyber security.json` (spaces)

### How Conversion Works

```typescript
// File: cloud-computing.json
// Step 1: Remove .json → cloud-computing
// Step 2: Split by hyphen → ['cloud', 'computing']
// Step 3: Capitalize each word → ['Cloud', 'Computing']
// Step 4: Join with space → "Cloud Computing"
```

---

## 📱 Component Usage

### Home Page (Limited Courses)

```html
<app-course-list 
  [limitPerCategory]="4"
  [showCategoryHeadings]="true">
</app-course-list>
```

### Courses Page (All Courses with Filters)

```html
<app-course-list 
  [showSearch]="true"
  [showCategoryHeadings]="true"
  [grid]="true">
</app-course-list>
```

### All Configuration Options

```html
<app-course-list
  [limitPerCategory]="number"           <!-- Limit courses per category -->
  [grid]="boolean"                      <!-- 3-column vs 4-column grid -->
  [showHeading]="boolean"               <!-- Show section heading -->
  [showCategoryHeadings]="boolean"      <!-- Show category headings -->
  [showFilters]="boolean"               <!-- Show category filter dropdown -->
  [showSearch]="boolean"                <!-- Show search bar -->
  [filterCategory]="'Category Name'">   <!-- Pre-filter by category -->
</app-course-list>
```

---

## 🔍 Service API

### CommonService Methods

#### `getAllCourses(limitPerCategory?: number)`

Load all courses from all categories.

```typescript
this.commonService.getAllCourses().subscribe(categories => {
  console.log(categories);
  // Returns: CourseCategory[]
});
```

#### `getCoursesByCategory(categoryName: string, limit?: number)`

Load courses from a specific category.

```typescript
this.commonService.getCoursesByCategory('Cyber Security').subscribe(courses => {
  console.log(courses);
  // Returns: Course[]
});
```

#### `getCategories()`

Get all category names.

```typescript
this.commonService.getCategories().subscribe(categories => {
  console.log(categories);
  // Returns: string[] - ['Cyber Security', 'Access Management', ...]
});
```

#### `searchCourses(searchTerm: string)`

Search across all courses.

```typescript
this.commonService.searchCourses('AWS').subscribe(results => {
  console.log(results);
  // Returns: CourseCategory[] with matching courses
});
```

---

## ✨ Features

### 1. Automatic Category Discovery
- JSON file names automatically become categories
- No hardcoded category lists
- Scales infinitely

### 2. Dynamic Filtering
- Filter by category
- Search by title, description, or level
- Real-time results

### 3. Flexible Display
- Card grid (3 or 4 columns)
- Category headings
- Responsive design

### 4. Error Handling
- Graceful handling of missing files
- Continues loading even if one file fails
- Console warnings for debugging

---

## 🎯 Example: Complete Workflow

### Scenario: Add "DevOps" Category

**1. Create devops.json**
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
      "CI/CD Pipelines"
    ],
    "heading2": "Course Description",
    "Overview": [
      "Learn containerization with Docker.",
      "Deploy with Kubernetes."
    ],
    "cta": "Enroll Now"
  }
]
```

**2. Update common.service.ts**
```typescript
private readonly COURSE_FILES = [
  'cyber-security.json',
  'access-management.json',
  'identity.json',
  'it-courses.json',
  'devops.json'  // ← Added
];
```

**3. Result** 🎉
- Category "Devops" appears in sidebar
- Course "Docker & Kubernetes Masterclass" displays
- Searchable and filterable
- No other code changes needed

---

## 🚨 Important Notes

### File Order Matters

The order in `COURSE_FILES` determines display order:

```typescript
private readonly COURSE_FILES = [
  'cyber-security.json',      // Display Order: 1
  'access-management.json',   // Display Order: 2
  'identity.json',            // Display Order: 3
  'it-courses.json'           // Display Order: 4
];
```

### Course IDs

- Must be unique **within each JSON file**
- Can be sequential (1, 2, 3...)
- Not required to be globally unique

### Image Paths

Place images in `src/assets/images/` and reference as:
```json
"img": "assets/images/your-image.jpg"
```

---

## 🐛 Troubleshooting

### Category Not Appearing?

1. ✅ Check filename is in `COURSE_FILES` array
2. ✅ Verify JSON syntax is valid
3. ✅ Ensure file exists in `src/assets/courses/`
4. ✅ Check browser console for errors

### Courses Not Loading?

1. ✅ Validate JSON structure matches schema
2. ✅ Check all required fields are present
3. ✅ Verify image paths are correct
4. ✅ Clear browser cache

### Category Name Wrong?

- Check filename uses hyphens (not underscores or spaces)
- Remember: `file-name.json` → "File Name"

---

## ✅ Best Practices

1. **Consistent Naming**: Use lowercase-with-hyphens for filenames
2. **Image Optimization**: Keep images under 200KB
3. **Course IDs**: Use sequential IDs (1, 2, 3...)
4. **Descriptions**: Keep under 150 characters
5. **Features**: List 4-6 key features
6. **Overview**: Use 2-3 paragraphs
7. **Testing**: Test after adding new files

---

## 📊 Benefits Summary

✅ **Zero Code Changes** - Add courses via JSON only  
✅ **Auto-Discovery** - Filename becomes category  
✅ **Scalable** - Support unlimited courses/categories  
✅ **Maintainable** - Clear separation of data/code  
✅ **Error Tolerant** - Graceful handling of failures  
✅ **Type Safe** - Full TypeScript support  
✅ **Search & Filter** - Built-in functionality  
✅ **Responsive** - Works on all devices  

---

## 🔗 Quick Links

- **Add Course**: Edit existing JSON file
- **Add Category**: Create new JSON + update COURSE_FILES
- **Test Changes**: Save and refresh browser
- **Validate JSON**: Use [JSONLint](https://jsonlint.com/)

---

**Need Help?** Check browser console for detailed error messages or review the code comments in [common.service.ts](src/app/services/common.service.ts).

# JSON-Driven Course System - Architecture

## 🏗️ System Architecture Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                        APPLICATION FLOW                          │
└─────────────────────────────────────────────────────────────────┘

1. Application Startup
   │
   └──> CommonService reads courses-index.json
        │
        ├──> Discovers all category configurations
        │    ├── Name: "Cyber Security"
        │    ├── File: "cyber-security.json"
        │    ├── Display Order: 1
        │    └── Description: "..."
        │
        └──> For each category:
             │
             ├──> Fetches category JSON file
             │    └──> GET assets/courses/cyber-security.json
             │
             ├──> Loads course data
             │    └──> Array of course objects
             │
             └──> Attaches category name to each course


2. User Interaction
   │
   ├──> Category Filter
   │    └──> Filters courseCategories array by category.name
   │
   ├──> Search Bar
   │    └──> Searches across title, description, level
   │
   └──> Course Card Click
        └──> Navigate to course-description with course data


┌─────────────────────────────────────────────────────────────────┐
│                        FILE STRUCTURE                            │
└─────────────────────────────────────────────────────────────────┘

src/assets/courses/
│
├── courses-index.json          ← MASTER INDEX (reads this first)
│   └── Lists all categories and their files
│
├── cyber-security.json         ← CATEGORY FILE
│   └── Array of cyber security courses
│
├── access-management.json      ← CATEGORY FILE
│   └── Array of access management courses
│
├── identity.json               ← CATEGORY FILE
│   └── Array of identity management courses
│
└── [new-category].json         ← ADD NEW CATEGORIES HERE
    └── Array of new courses


┌─────────────────────────────────────────────────────────────────┐
│                        DATA FLOW                                 │
└─────────────────────────────────────────────────────────────────┘

courses-index.json
    │
    │ HTTP GET
    ▼
CommonService.getCategories()
    │
    │ Returns: CategoryConfig[]
    ▼
Component receives category list
    │
    ├──> Display in sidebar
    ├──> Show in filter dropdown
    └──> Enable category selection

courses-index.json
    │
    │ HTTP GET
    ▼
CommonService.getAllCourses()
    │
    │ For each category in index:
    │   HTTP GET assets/courses/{filename}
    ▼
CourseCategory[] with all courses
    │
    ├──> Filter by category (optional)
    ├──> Search by term (optional)
    ├──> Limit per category (optional)
    └──> Render in HTML template


┌─────────────────────────────────────────────────────────────────┐
│                    COMPONENT HIERARCHY                           │
└─────────────────────────────────────────────────────────────────┘

app-component
    │
    ├── app-home
    │   └── app-course-list
    │       [limitPerCategory]="4"
    │       [showCategoryHeadings]="true"
    │
    └── app-courses
        ├── Category Sidebar
        │   └── Loads categories dynamically
        │
        └── app-course-list
            [filterCategory]="selectedCategory"
            [showSearch]="true"
            [grid]="true"


┌─────────────────────────────────────────────────────────────────┐
│                    ADDING NEW CONTENT                            │
└─────────────────────────────────────────────────────────────────┘

Step 1: Create JSON File
┌──────────────────────────┐
│  cloud-computing.json    │
│  [                       │
│    { course 1 },         │
│    { course 2 }          │
│  ]                       │
└──────────────────────────┘
            │
            │ Place in assets/courses/
            ▼

Step 2: Register in Index
┌──────────────────────────┐
│  courses-index.json      │
│  {                       │
│    "categories": [       │
│      {                   │
│        "name": "Cloud",  │
│        "file": "cloud-   │
│         computing.json"  │
│      }                   │
│    ]                     │
│  }                       │
└──────────────────────────┘
            │
            │ Automatic Discovery
            ▼

Step 3: Result
┌──────────────────────────┐
│  ✅ Category appears in  │
│     sidebar              │
│  ✅ Courses displayed    │
│  ✅ Filter works         │
│  ✅ Search works         │
│  ✅ No code changes!     │
└──────────────────────────┘


┌─────────────────────────────────────────────────────────────────┐
│                    SERVICE METHODS                               │
└─────────────────────────────────────────────────────────────────┘

CommonService
│
├── getAllCourses(limit?: number)
│   └── Returns: Observable<CourseCategory[]>
│   └── Use: Load all courses from all categories
│
├── getCoursesByCategory(name: string, limit?: number)
│   └── Returns: Observable<Course[]>
│   └── Use: Load courses from specific category
│
├── getCategories()
│   └── Returns: Observable<CategoryConfig[]>
│   └── Use: Load category list only (fast)
│
└── searchCourses(term: string)
    └── Returns: Observable<CourseCategory[]>
    └── Use: Search across all courses


┌─────────────────────────────────────────────────────────────────┐
│                    KEY FEATURES                                  │
└─────────────────────────────────────────────────────────────────┘

✅ Zero-Code Updates
   └── Add courses by editing JSON only

✅ Dynamic Discovery
   └── Automatically reads all categories from index

✅ Flexible Filtering
   └── Filter by category, search by keyword

✅ Scalable Design
   └── Support unlimited categories and courses

✅ Type-Safe
   └── Full TypeScript interfaces for all data

✅ Observable-Based
   └── Reactive data loading with RxJS

✅ Performance Optimized
   └── Lazy loading, efficient HTTP requests

✅ Future-Proof
   └── Easy to extend with new fields


┌─────────────────────────────────────────────────────────────────┐
│                    CONFIGURATION OPTIONS                         │
└─────────────────────────────────────────────────────────────────┘

<app-course-list> Input Properties:

├── [limitPerCategory]="number"
│   └── Show only N courses per category
│
├── [grid]="boolean"
│   └── true: 3 columns | false: 4 columns
│
├── [showHeading]="boolean"
│   └── Display section heading
│
├── [showCategoryHeadings]="boolean"
│   └── Show category names above each group
│
├── [showFilters]="boolean"
│   └── Enable category filter dropdown
│
├── [showSearch]="boolean"
│   └── Enable search input field
│
└── [filterCategory]="string"
    └── Pre-filter to specific category


┌─────────────────────────────────────────────────────────────────┐
│                    ERROR HANDLING                                │
└─────────────────────────────────────────────────────────────────┘

HTTP Errors
    │
    ├── File not found
    │   └── Check file path in courses-index.json
    │
    ├── Invalid JSON
    │   └── Validate JSON syntax
    │
    └── Network error
        └── Check console for details

Component Errors
    │
    ├── No courses displayed
    │   └── Verify courses-index.json exists
    │
    ├── Filter not working
    │   └── Check category names match exactly
    │
    └── Search not working
        └── Ensure FormsModule is imported


┌─────────────────────────────────────────────────────────────────┐
│                    BEST PRACTICES                                │
└─────────────────────────────────────────────────────────────────┘

✅ Use lowercase-with-hyphens for file names
✅ Keep displayOrder increments of 10 (easy reordering)
✅ Validate JSON before committing
✅ Use descriptive category names
✅ Maintain consistent course ID schemes
✅ Keep image sizes optimized
✅ Include all required fields
✅ Use meaningful descriptions
✅ Test after adding new content
✅ Backup files before major changes

```

## 🎯 Summary

This JSON-driven system provides a **scalable, maintainable, and zero-code** solution for managing course content. By separating data from code, content updates become simple JSON edits, enabling non-developers to manage courses efficiently while maintaining type safety and performance.

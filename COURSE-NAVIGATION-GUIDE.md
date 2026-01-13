# JSON-Driven Course Navigation System - Complete Guide

## 🎯 System Overview

The application now uses a **centralized JSON-based navigation system** where all courses are listed in a single master index file (`courses-index.json`). This enables:

- **Clean clickable course list** in the sidebar
- **Active state highlighting** for selected courses
- **Visibility control** via JSON (show/hide courses)
- **Icon support** for visual identification
- **Zero-code updates** when adding new courses

---

## 📁 New Architecture

### File Structure

```
src/assets/courses/
├── courses-index.json          ← MASTER INDEX (all courses listed here)
├── cyber-security.json         ← Detailed course content
├── access-management.json      ← Detailed course content
├── identity.json               ← Detailed course content
└── it-courses.json             ← Detailed course content
```

### Key Concept

**Two-Level Data Structure:**

1. **courses-index.json** - Master list with metadata (title, icon, visibility, category)
2. **Individual JSON files** - Full course details (description, features, pricing, etc.)

---

## 🔧 courses-index.json Structure

### Complete Schema

```json
{
  "courses": [
    {
      "id": "unique-course-id",           // Unique identifier
      "title": "Course Name",              // Display name
      "category": "Category Name",         // Grouping category
      "icon": "fas fa-shield-alt",        // Font Awesome icon class
      "visible": true,                     // Show/hide course
      "displayOrder": 1,                   // Sort order
      "file": "category-file.json",       // Source file name
      "courseId": 1,                       // ID within source file
      "description": "Short description"   // Brief summary
    }
  ]
}
```

### Field Descriptions

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string | ✅ Yes | Unique identifier across all courses |
| `title` | string | ✅ Yes | Course name displayed in UI |
| `category` | string | ✅ Yes | Category for grouping/filtering |
| `icon` | string | ✅ Yes | Font Awesome icon class |
| `visible` | boolean | ✅ Yes | Controls visibility in UI |
| `displayOrder` | number | ✅ Yes | Sort order (lower = first) |
| `file` | string | ✅ Yes | JSON file containing full details |
| `courseId` | number | ✅ Yes | Course ID within the JSON file |
| `description` | string | ✅ Yes | Short description for list view |

---

## 🚀 Adding a New Course

### Step 1: Add to courses-index.json

```json
{
  "id": "new-course-2026",
  "title": "Kubernetes Administration",
  "category": "DevOps",
  "icon": "fas fa-dharmachakra",
  "visible": true,
  "displayOrder": 11,
  "file": "devops.json",
  "courseId": 1,
  "description": "Master Kubernetes container orchestration"
}
```

### Step 2: Ensure Course Exists in Source File

Make sure `devops.json` contains a course object with `id: 1`:

```json
[
  {
    "id": 1,
    "title": "Kubernetes Administration",
    "level": "Advanced",
    "description": "Full description here...",
    "duration_weeks": 12,
    "students_enrolled": 1500,
    "rating": 4.9,
    "reviews": 300,
    "img": "assets/images/k8s.jpg",
    "fees": 699,
    "features": [...],
    "Overview": [...]
  }
]
```

### Step 3: Done! ✅

The course will automatically appear in:
- Course navigation sidebar
- Category filters
- Search results
- Active state highlighting will work

---

## 🎨 Icon Options

### Font Awesome Icons

Use any Font Awesome 5 icon class:

```json
"icon": "fas fa-shield-alt"      // Security
"icon": "fas fa-key"              // Access/Keys
"icon": "fas fa-id-card"          // Identity
"icon": "fas fa-cloud"            // Cloud
"icon": "fas fa-code-branch"      // DevOps
"icon": "fab fa-aws"              // AWS
"icon": "fab fa-docker"           // Docker
"icon": "fas fa-dharmachakra"     // Kubernetes
"icon": "fas fa-network-wired"    // Networking
"icon": "fas fa-database"         // Database
```

### Finding Icons

Visit [Font Awesome Icons](https://fontawesome.com/icons) and copy the class name.

---

## 👁️ Visibility Control

### Show/Hide Courses Without Deleting

```json
{
  "id": "old-course",
  "title": "Deprecated Course",
  "visible": false,    // ← Course won't appear in UI
  ...
}
```

**Benefits:**
- Keep historical data
- Temporarily disable courses
- Easy to re-enable later
- No code changes needed

### Use Cases

- **Launch Preparation**: Set `visible: false` until course is ready
- **Seasonal Courses**: Hide/show based on schedule
- **A/B Testing**: Show different courses to different users
- **Maintenance**: Temporarily hide courses being updated

---

## 🔄 Navigation Flow

### User Journey

```
1. User visits /courses
   ↓
2. Sidebar shows all visible courses grouped by category
   ↓
3. User clicks on a course name
   ↓
4. URL updates: /courses?courseId=cyber-security-1
   ↓
5. Course details load in main content area
   ↓
6. Selected course highlighted in sidebar (active state)
   ↓
7. User can click another course to navigate
```

### Technical Flow

```
CourseComponent.ngOnInit()
   ↓
CommonService.getCoursesIndex()
   ↓
Load courses-index.json
   ↓
Filter: visible = true
   ↓
Sort by displayOrder
   ↓
Group by category
   ↓
Render in sidebar
   
User clicks course
   ↓
Router.navigate(['/courses'], { queryParams: { courseId: 'xxx' }})
   ↓
Route param change detected
   ↓
CommonService.getCourseDetails(courseId)
   ↓
1. Find course in courses-index.json
2. Load file specified in "file" field
3. Find course with matching "courseId"
   ↓
Display course details
   ↓
Update active state in sidebar
```

---

## 🎯 Active State Highlighting

### How It Works

The system tracks the selected course via URL query parameters:

```typescript
// In courses.component.ts
this.route.queryParams.subscribe(params => {
  this.selectedCourseId = params['courseId'];
  // Load course details and update active state
});
```

### Visual Indicators

When a course is selected:
- ✅ Background color changes to primary/accent
- ✅ Left border appears
- ✅ Icon background color changes
- ✅ Check icon appears
- ✅ Text color changes to primary

---

## 📱 Component Usage

### Courses Page (Default)

**courses.component.html** - Automatic navigation with sidebar

```html
<app-courses></app-courses>
```

Features:
- Left sidebar with clickable course list
- Main content area for course details
- Active state highlighting
- Category filtering

### Home Page (Card View)

**home.component.html** - Show course cards

```html
<app-course-list 
  [limitPerCategory]="4" 
  [showCategoryHeadings]="true"
  [displayMode]="'cards'">
</app-course-list>
```

### Course List (List View)

Show clean clickable list of courses:

```html
<app-course-list 
  [displayMode]="'list'"
  [showCategoryHeadings]="true"
  [showSearch]="true">
</app-course-list>
```

---

## 🔍 Display Modes

### Cards Mode (Default)

Full course cards with details, ratings, pricing, etc.

```html
<app-course-list [displayMode]="'cards'"></app-course-list>
```

**Use for:**
- Home page featured courses
- Marketing/landing pages
- Detailed course browsing

### List Mode (New)

Clean clickable course names with icons.

```html
<app-course-list [displayMode]="'list'"></app-course-list>
```

**Use for:**
- Navigation menus
- Course selection interfaces
- Compact course browsers

---

## 🛠️ API Reference

### CommonService Methods

#### `getCoursesIndex(): Observable<CourseIndexItem[]>`

Load all courses from master index (visible only).

```typescript
this.commonService.getCoursesIndex().subscribe(courses => {
  console.log(courses); // Array of course index items
});
```

#### `getCourseDetails(courseId: string): Observable<Course | null>`

Load full details for a specific course.

```typescript
this.commonService.getCourseDetails('cyber-security-1').subscribe(course => {
  console.log(course); // Full course object
});
```

#### `getAllCourses(limitPerCategory?: number): Observable<CourseCategory[]>`

Load courses grouped by category (backward compatible).

```typescript
this.commonService.getAllCourses().subscribe(categories => {
  console.log(categories); // Array of categories with courses
});
```

---

## 📋 Migration Guide

### From Old System to New System

**Old System:**
- Categories defined in courses-index.json
- Each category file contained all courses
- No visibility control
- No individual course routing

**New System:**
- Individual courses defined in courses-index.json
- Category files still contain detailed content
- Visibility control via `visible` field
- Direct course navigation with active states

### What Changed

1. ✅ **courses-index.json structure** - Now lists individual courses
2. ✅ **CommonService methods** - New methods added, old ones still work
3. ✅ **Courses component** - New sidebar navigation with active states
4. ✅ **Course-list component** - New list display mode added
5. ✅ **No breaking changes** - All existing functionality preserved

---

## ✅ Checklist for Adding Courses

- [ ] Create unique course ID (format: `category-name-number`)
- [ ] Choose appropriate Font Awesome icon
- [ ] Set visibility to `true`
- [ ] Assign display order (use increments of 10)
- [ ] Specify category name
- [ ] Reference correct source file
- [ ] Match courseId with file content
- [ ] Write short description (1-2 sentences)
- [ ] Validate JSON syntax
- [ ] Test in browser

---

## 🐛 Troubleshooting

### Course Not Appearing

1. Check `visible: true` in courses-index.json
2. Verify JSON syntax is valid
3. Ensure course exists in source file with matching ID
4. Clear browser cache

### Active State Not Working

1. Check URL has `?courseId=xxx` parameter
2. Verify course ID matches exactly
3. Refresh the page

### Icon Not Showing

1. Verify Font Awesome class is correct
2. Check for typos in icon name
3. Ensure Font Awesome is loaded in index.html

---

## 🎨 Customization

### Change Active State Color

Edit in **courses.component.html**:

```html
[ngClass]="{
  'bg-primary/10 border-l-4 border-l-primary': isActiveCourse(course.id)
}"
```

### Adjust Sidebar Width

Edit in **courses.component.html**:

```html
<!-- Change lg:col-span-3 to lg:col-span-4 for wider sidebar -->
<div class="lg:col-span-3">
```

### Custom Icons

Replace Font Awesome with custom images:

```json
"icon": "assets/images/custom-icon.svg"
```

Then update template to use `<img>` instead of `<i>`.

---

## 📊 Example: Complete Course Entry

```json
{
  "id": "ceh-v13-ai",
  "title": "CEH v13 AI Certification Training",
  "category": "Cyber Security",
  "icon": "fas fa-shield-alt",
  "visible": true,
  "displayOrder": 1,
  "file": "cyber-security.json",
  "courseId": 1,
  "description": "Learn ethical hacking with AI-powered cybersecurity tools"
}
```

**Corresponding entry in cyber-security.json:**

```json
{
  "id": 1,
  "level": "Intermediate",
  "badge": "Popular",
  "title": "CEH v13 AI Certification Training",
  "description": "Learn ethical hacking with AI-powered cybersecurity tools to identify vulnerabilities and secure modern IT infrastructures.",
  "duration_weeks": 10,
  "students_enrolled": 3200,
  "rating": 4.8,
  "reviews": 520,
  "img": "assets/images/ceh-v13-ai.jpg",
  "fees": 499,
  "heading1": "CEH v13 AI Key Features",
  "features": [...],
  "heading2": "CEH v13 AI Course Overview",
  "Overview": [...],
  "cta": "Learn More"
}
```

---

## 🚀 Benefits

✅ **Zero-Code Updates** - Add/remove courses via JSON only  
✅ **Visibility Control** - Hide courses without deleting data  
✅ **Active State** - Clear visual feedback for selected course  
✅ **Icon Support** - Visual identification for courses  
✅ **Scalable** - Support unlimited courses and categories  
✅ **SEO Friendly** - Unique URLs for each course  
✅ **Type Safe** - Full TypeScript support  
✅ **Backward Compatible** - All existing features still work  

---

**Need Help?** Check the browser console for detailed error messages or refer to SYSTEM-ARCHITECTURE.md for technical details.

# Dynamic Categories System - Complete Guide

## 🎯 Overview

The system now uses **courses-index.json** as the single source of truth for all categories. This ensures:
- ✅ Category names are consistent across the entire application
- ✅ Support for unlimited number of categories (5, 10, 50+ categories)
- ✅ Easy to add/remove categories without code changes
- ✅ Icons, descriptions, and display order all managed in one file

---

## 📁 How It Works

### Single Source of Truth
All category information comes from [src/assets/courses/courses-index.json](src/assets/courses/courses-index.json):

```json
{
  "categories": [
    {
      "icon": "fa-solid fa-user-shield",
      "name": "Cyber Security",
      "file": "cyber-security.json",
      "displayOrder": 1,
      "description": "Advanced cybersecurity and ethical hacking courses"
    },
    {
      "icon": "fa-solid fa-universal-access",
      "name": "Access Management",
      "file": "access-management.json",
      "displayOrder": 2,
      "description": "Learn access control and management strategies"
    }
  ]
}
```

### Data Flow
1. **Category Cards** → Load from `courses-index.json`
2. **Navigation** → Pass category name via query param
3. **Courses Page** → Receives category name and filters courses
4. **Course List** → Loads courses using category names from index

---

## ➕ Adding New Categories

### Step 1: Create Course JSON File

Create your course data file in `src/assets/courses/`:

**Example: `src/assets/courses/devops.json`**
```json
[
  {
    "id": 1,
    "level": "Intermediate",
    "badge": "Hot",
    "title": "Docker & Kubernetes Masterclass",
    "description": "Master containerization and orchestration with Docker and Kubernetes",
    "duration_weeks": 10,
    "students_enrolled": 3500,
    "rating": 4.9,
    "reviews": 580,
    "img": "assets/images/docker-k8s.jpg",
    "fees": 499,
    "heading1": "What You'll Learn",
    "features": [
      "Docker fundamentals and best practices",
      "Kubernetes architecture and deployment",
      "CI/CD pipeline integration",
      "Container orchestration at scale"
    ],
    "heading2": "Course Overview",
    "Overview": [
      "This comprehensive course covers Docker and Kubernetes from basics to advanced topics.",
      "Learn to build, deploy, and manage containerized applications at scale."
    ],
    "cta": "Enroll Now"
  }
]
```

### Step 2: Add to courses-index.json

Update `src/assets/courses/courses-index.json` by adding your category to the array:

```json
{
  "categories": [
    {
      "icon": "fa-solid fa-user-shield",
      "name": "Cyber Security",
      "file": "cyber-security.json",
      "displayOrder": 1,
      "description": "Advanced cybersecurity and ethical hacking courses"
    },
    {
      "icon": "fa-solid fa-universal-access",
      "name": "Access Management",
      "file": "access-management.json",
      "displayOrder": 2,
      "description": "Learn access control and management strategies"
    },
    {
      "icon": "fa-solid fa-id-badge",
      "name": "Identity Management",
      "file": "identity.json",
      "displayOrder": 3,
      "description": "Identity and access management fundamentals"
    },
    {
      "icon": "fa-solid fa-laptop-code",
      "name": "IT Courses",
      "file": "it-courses.json",
      "displayOrder": 4,
      "description": "General IT and technology training courses"
    },
    {
      "icon": "fa-brands fa-docker",
      "name": "DevOps",
      "file": "devops.json",
      "displayOrder": 5,
      "description": "Master DevOps tools and practices"
    }
  ]
}
```

### Step 3: Done! ✅

That's it! The new category will automatically appear:
- On the home page category cards
- In the courses page sidebar
- In filter dropdowns
- In search results

**No code changes needed!**

---

## 📋 Category Schema

Each category in `courses-index.json` requires these fields:

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `icon` | string | Yes | Font Awesome icon class (e.g., `fa-solid fa-shield`) |
| `name` | string | Yes | Display name (must match exactly everywhere) |
| `file` | string | Yes | JSON filename in `src/assets/courses/` |
| `displayOrder` | number | Yes | Sort order (lower numbers appear first) |
| `description` | string | Yes | Short description for category card |

---

## 🎨 Icon Options

Use any [Font Awesome 6](https://fontawesome.com/icons) icon:

### Popular Choices
- **Security**: `fa-solid fa-shield-halved`, `fa-solid fa-lock`, `fa-solid fa-user-shield`
- **Cloud**: `fa-solid fa-cloud`, `fa-brands fa-aws`, `fa-brands fa-google`
- **Development**: `fa-solid fa-code`, `fa-solid fa-laptop-code`, `fa-brands fa-github`
- **DevOps**: `fa-brands fa-docker`, `fa-brands fa-jenkins`, `fa-solid fa-infinity`
- **Data**: `fa-solid fa-database`, `fa-solid fa-chart-line`, `fa-solid fa-brain`
- **Network**: `fa-solid fa-network-wired`, `fa-solid fa-server`, `fa-solid fa-wifi`

---

## 🔢 Supporting Many Categories

### 5-6 Categories Example

```json
{
  "categories": [
    {
      "icon": "fa-solid fa-shield-halved",
      "name": "Cybersecurity",
      "file": "cybersecurity.json",
      "displayOrder": 1,
      "description": "Protect systems from cyber threats"
    },
    {
      "icon": "fa-brands fa-aws",
      "name": "Cloud Computing",
      "file": "cloud-computing.json",
      "displayOrder": 2,
      "description": "Master AWS, Azure, and GCP"
    },
    {
      "icon": "fa-brands fa-docker",
      "name": "DevOps",
      "file": "devops.json",
      "displayOrder": 3,
      "description": "CI/CD and automation tools"
    },
    {
      "icon": "fa-solid fa-database",
      "name": "Data Science",
      "file": "data-science.json",
      "displayOrder": 4,
      "description": "Analytics and machine learning"
    },
    {
      "icon": "fa-solid fa-code",
      "name": "Web Development",
      "file": "web-development.json",
      "displayOrder": 5,
      "description": "Build modern web applications"
    },
    {
      "icon": "fa-solid fa-mobile-screen",
      "name": "Mobile Development",
      "file": "mobile-development.json",
      "displayOrder": 6,
      "description": "iOS and Android app development"
    }
  ]
}
```

### 10+ Categories

The system scales to any number! Just keep adding to the array:

```json
{
  "categories": [
    // ... existing categories 1-6 ...
    {
      "icon": "fa-solid fa-brain",
      "name": "Artificial Intelligence",
      "file": "ai.json",
      "displayOrder": 7,
      "description": "AI and deep learning fundamentals"
    },
    {
      "icon": "fa-solid fa-lock",
      "name": "Blockchain",
      "file": "blockchain.json",
      "displayOrder": 8,
      "description": "Cryptocurrency and smart contracts"
    },
    {
      "icon": "fa-solid fa-gamepad",
      "name": "Game Development",
      "file": "game-dev.json",
      "displayOrder": 9,
      "description": "Create interactive games"
    },
    {
      "icon": "fa-solid fa-microchip",
      "name": "IoT",
      "file": "iot.json",
      "displayOrder": 10,
      "description": "Internet of Things and embedded systems"
    }
  ]
}
```

---

## 🔄 Updating Existing Categories

### Change Category Name

Update the `name` field in `courses-index.json`:

```json
{
  "icon": "fa-solid fa-user-shield",
  "name": "Cybersecurity & Ethical Hacking",  // ← Changed
  "file": "cyber-security.json",
  "displayOrder": 1,
  "description": "Advanced cybersecurity and ethical hacking courses"
}
```

### Change Icon

Update the `icon` field:

```json
{
  "icon": "fa-solid fa-shield-halved",  // ← Changed
  "name": "Cyber Security",
  "file": "cyber-security.json",
  "displayOrder": 1,
  "description": "Advanced cybersecurity and ethical hacking courses"
}
```

### Reorder Categories

Change the `displayOrder` values:

```json
{
  "categories": [
    {
      "name": "DevOps",
      "displayOrder": 1  // ← Now first
    },
    {
      "name": "Cyber Security",
      "displayOrder": 2  // ← Now second
    }
  ]
}
```

---

## ❌ Removing Categories

Simply delete the category object from the `categories` array in `courses-index.json`.

**Before:**
```json
{
  "categories": [
    { "name": "Cyber Security", ... },
    { "name": "Access Management", ... },
    { "name": "IT Courses", ... }
  ]
}
```

**After (removing "Access Management"):**
```json
{
  "categories": [
    { "name": "Cyber Security", ... },
    { "name": "IT Courses", ... }
  ]
}
```

---

## ✅ Benefits

### 1. **Unlimited Scalability**
- Add 5, 10, 50, or 100+ categories
- No code changes required
- No performance impact

### 2. **Consistent Naming**
- Category name defined once in `courses-index.json`
- Used everywhere automatically
- No more "Identity" vs "Identity Management" mismatches

### 3. **Easy Maintenance**
- One file to update: `courses-index.json`
- Changes reflect immediately
- No rebuild needed (just refresh browser in dev mode)

### 4. **Rich Metadata**
- Icons for visual appeal
- Descriptions for category cards
- Display order control
- File mapping

---

## 🐛 Troubleshooting

### Category not appearing?

1. ✅ Check JSON syntax is valid (use [JSONLint](https://jsonlint.com/))
2. ✅ Verify the course file exists in `src/assets/courses/`
3. ✅ Ensure `name` field is unique
4. ✅ Check browser console for errors

### Wrong category showing on click?

1. ✅ Verify `name` in `courses-index.json` matches the name in the file
2. ✅ Clear browser cache
3. ✅ Check console for navigation errors

### Icon not displaying?

1. ✅ Verify Font Awesome icon class is correct
2. ✅ Check if Font Awesome is loaded in your app
3. ✅ Try a different icon to test

---

## 📊 Example: Complete 6-Category Setup

### courses-index.json
```json
{
  "categories": [
    {
      "icon": "fa-solid fa-shield-halved",
      "name": "Cybersecurity",
      "file": "cybersecurity.json",
      "displayOrder": 1,
      "description": "Protect systems from cyber threats"
    },
    {
      "icon": "fa-brands fa-aws",
      "name": "Cloud Computing",
      "file": "cloud-computing.json",
      "displayOrder": 2,
      "description": "Master AWS, Azure, and GCP"
    },
    {
      "icon": "fa-brands fa-docker",
      "name": "DevOps",
      "file": "devops.json",
      "displayOrder": 3,
      "description": "CI/CD and automation tools"
    },
    {
      "icon": "fa-solid fa-database",
      "name": "Data Science",
      "file": "data-science.json",
      "displayOrder": 4,
      "description": "Analytics and machine learning"
    },
    {
      "icon": "fa-solid fa-code",
      "name": "Web Development",
      "file": "web-development.json",
      "displayOrder": 5,
      "description": "Build modern web applications"
    },
    {
      "icon": "fa-solid fa-mobile-screen",
      "name": "Mobile Development",
      "file": "mobile-development.json",
      "displayOrder": 6,
      "description": "iOS and Android app development"
    }
  ]
}
```

### Result
- ✅ 6 category cards on home page
- ✅ 6 options in sidebar
- ✅ All clickable and navigable
- ✅ Each opens correct courses

---

**Questions?** Check the browser console for detailed error messages or review [common.service.ts](src/app/services/common.service.ts) for implementation details.

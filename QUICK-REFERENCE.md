# Quick Reference: Course Navigation System

## 🎯 At a Glance

**Master Index:** `src/assets/courses/courses-index.json`  
**Course Details:** Individual JSON files (cyber-security.json, etc.)  
**Route:** `/courses?courseId=xxx`

---

## ⚡ Quick Tasks

### Add New Course

1. **Edit courses-index.json:**
```json
{
  "id": "new-course-id",
  "title": "Course Name",
  "category": "Category",
  "icon": "fas fa-icon-name",
  "visible": true,
  "displayOrder": 10,
  "file": "source-file.json",
  "courseId": 1,
  "description": "Short description"
}
```

2. **Ensure course exists in source-file.json with matching id: 1**

3. **Save and refresh browser** ✅

---

### Hide Course

Change `visible` field:
```json
"visible": false
```

---

### Change Icon

Update `icon` field:
```json
"icon": "fas fa-new-icon"
```

[Find icons here](https://fontawesome.com/icons)

---

## 🔑 Required Fields

| Field | Example | Notes |
|-------|---------|-------|
| id | `"cyber-1"` | Must be unique |
| title | `"CEH v13"` | Display name |
| category | `"Cyber Security"` | Grouping |
| icon | `"fas fa-shield"` | Font Awesome |
| visible | `true` | Show/hide |
| displayOrder | `1` | Sort order |
| file | `"cyber-security.json"` | Source file |
| courseId | `1` | ID in file |
| description | `"Learn..."` | Brief text |

---

## 📊 Display Modes

### Sidebar Navigation (Default)
```html
<app-courses></app-courses>
```
Shows: Clickable list with active states

### Card Grid
```html
<app-course-list [displayMode]="'cards'"></app-course-list>
```
Shows: Full course cards

### Simple List
```html
<app-course-list [displayMode]="'list'"></app-course-list>
```
Shows: Clean clickable names

---

## 🎨 Common Icons

```
Security:     fas fa-shield-alt, fas fa-lock, fas fa-user-shield
Cloud:        fas fa-cloud, fab fa-aws, fab fa-microsoft
DevOps:       fas fa-code-branch, fab fa-docker, fas fa-dharmachakra
Identity:     fas fa-id-card, fas fa-key, fas fa-fingerprint
Network:      fas fa-network-wired, fas fa-server
Database:     fas fa-database, fas fa-table
Development:  fas fa-code, fas fa-laptop-code
Certification: fas fa-certificate, fas fa-award
```

---

## ✅ Quick Checklist

New Course:
- [ ] Unique ID
- [ ] Icon chosen
- [ ] Category assigned
- [ ] Display order set
- [ ] Source file exists
- [ ] CourseId matches
- [ ] Visible = true
- [ ] Description added
- [ ] JSON valid
- [ ] Tested in browser

---

## 🔗 Navigation URLs

| Action | URL |
|--------|-----|
| All courses | `/courses` |
| Specific course | `/courses?courseId=xxx` |
| Home page | `/` or `/home` |
| Course list | `/course-list` |

---

## 🐛 Quick Fixes

**Course not showing?**
- Check `visible: true`
- Validate JSON syntax
- Clear cache

**Icon missing?**
- Verify class name
- Check Font Awesome loaded

**Active state broken?**
- Check URL has `?courseId=`
- Verify ID matches exactly

---

## 📞 Need More Info?

- **Complete Guide:** COURSE-NAVIGATION-GUIDE.md
- **System Design:** SYSTEM-ARCHITECTURE.md
- **Original Docs:** COURSE-SYSTEM-GUIDE.md

---

## 💡 Pro Tips

1. Use displayOrder increments of 10 (10, 20, 30) for easy reordering
2. Keep course IDs descriptive: `cyber-ceh-v13` not `course-1`
3. Test visibility changes immediately - no rebuild needed
4. Group related courses with similar displayOrder ranges
5. Use consistent icon styles within categories
6. Keep descriptions under 100 characters for better display

---

**Last Updated:** January 2026

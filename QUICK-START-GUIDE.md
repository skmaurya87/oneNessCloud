# Quick Start: Adding New Courses

## ⚡ Fast Track Guide

### Option 1: Add to Existing Category

1. Open the category JSON file (e.g., `cyber-security.json`)
2. Copy an existing course object
3. Paste at the end of the array
4. Update the details
5. Save the file
6. Done! ✅

### Option 2: Create New Category

1. **Copy the template**
   ```bash
   Copy: src/assets/courses/TEMPLATE-new-category.json
   Rename to: your-category-name.json
   ```

2. **Edit your new JSON file**
   - Change course details
   - Add multiple courses (each in array)

3. **Register in courses-index.json**
   ```json
   {
     "name": "Your Category Name",
     "file": "your-category-name.json",
     "displayOrder": 5,
     "description": "Brief category description"
   }
   ```

4. **Save and refresh** - That's it! 🎉

---

## 📋 Field Reference

### Required Fields
- `id` - Unique number within the file
- `title` - Course name
- `description` - Short summary
- `level` - "Beginner" | "Intermediate" | "Advanced"
- `duration_weeks` - Number
- `students_enrolled` - Number
- `rating` - 0-5 (decimals OK)
- `reviews` - Number
- `img` - Image path
- `fees` - Price in dollars
- `features` - Array of strings
- `Overview` - Array of paragraphs

### Optional Fields
- `badge` - Shows label like "Popular", "Trending"
- `cta` - Button text (default: "Learn More")

---

## 🎨 Level Options

```json
"level": "Beginner"      // Green badge
"level": "Intermediate"  // Blue badge
"level": "Advanced"      // Purple badge
```

## 🏷️ Popular Badges

```json
"badge": "Popular"
"badge": "Trending"
"badge": "New"
"badge": "Best Seller"
"badge": "Hot"
```

---

## ✅ Checklist

- [ ] JSON syntax is valid (use JSON validator)
- [ ] All required fields are present
- [ ] Image file exists in assets/images/
- [ ] Category added to courses-index.json
- [ ] File saved in assets/courses/ folder
- [ ] displayOrder is unique number

---

## 🔍 Validation Tips

### Check JSON Syntax
Use [JSONLint](https://jsonlint.com/) to validate your JSON

### Common Mistakes
- ❌ Missing commas between objects
- ❌ Extra comma after last item
- ❌ Missing quotes around strings
- ❌ Using single quotes instead of double quotes

### Correct Format
```json
[
  {
    "id": 1,
    "title": "First Course"
  },
  {
    "id": 2,
    "title": "Second Course"
  }
]
```

---

## 🚀 Testing

1. Save your JSON file
2. Refresh the browser (Ctrl+F5)
3. Check the course list
4. Open browser console (F12) for any errors

---

## 📞 Need Help?

- Check COURSE-SYSTEM-GUIDE.md for detailed documentation
- Review existing JSON files for examples
- Validate JSON syntax before saving
- Check browser console for error messages

---

**Pro Tip:** Keep a backup of your JSON files before making changes!

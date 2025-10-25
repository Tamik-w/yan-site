# Image Files Checklist

## Required Images

Make sure you have these files in your `public` folder:

### ✅ Main Images
- [ ] `logo.jpeg` - Your logo file (used in navigation and footer)
- [ ] `fa1-main.jpeg` - Main homepage background image

### 📁 Directory Structure
Your `public` folder should look like this:
```
public/
├── logo.jpeg          # Your logo
├── fa1-main.jpeg      # Main homepage image
└── images/
    ├── hero/
    ├── team/
    ├── facility/
    ├── workshops/
    ├── programs/
    ├── testimonials/
    ├── logos/
    └── icons/
```

## How to Add Your Images

1. **Place your logo**: Copy `logo.jpeg` to the `public` folder
2. **Place your main image**: Copy `fa1-main.jpeg` to the `public` folder
3. **Test the website**: Run `npm run dev` and check that:
   - Logo appears in navigation and footer
   - Main page shows your background image
   - No broken image icons

## Image Optimization Tips

- **Logo**: Should be square (1:1 aspect ratio), recommended 200x200px
- **Main image**: Should be landscape (16:9 aspect ratio), recommended 1920x1080px
- **File size**: Keep under 500KB for fast loading
- **Format**: JPEG is fine, but WebP is better for web

## Troubleshooting

If images don't appear:
1. Check file names match exactly (case-sensitive)
2. Ensure files are in the `public` folder (not in `src`)
3. Clear browser cache (Ctrl+F5)
4. Check browser console for 404 errors

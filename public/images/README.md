# Images Directory Structure

This directory contains all static images for the Grassroots Lifting website.

## Directory Structure

```
public/images/
├── hero/              # Hero section background images
├── team/              # Team member photos
├── facility/          # Facility and gym photos
├── workshops/         # Workshop and training images
├── programs/          # Program-related images
├── testimonials/      # Testimonial photos
├── logos/             # Logo files and branding
└── icons/             # Icon files
```

## Image Guidelines

### Hero Images (`/hero/`)
- **Purpose**: Background images for main page sections
- **Recommended size**: 1920x1080px or higher
- **Format**: JPG, PNG, WebP
- **Naming**: `hero-[page-name].jpg` (e.g., `hero-homepage.jpg`, `hero-coaching.jpg`)

### Team Photos (`/team/`)
- **Purpose**: Team member profile photos
- **Recommended size**: 400x400px (square)
- **Format**: JPG, PNG
- **Naming**: `[first-name]-[last-name].jpg` (e.g., `alex-thompson.jpg`)

### Facility Images (`/facility/`)
- **Purpose**: Gym and facility photos
- **Recommended size**: 800x600px or higher
- **Format**: JPG, PNG
- **Naming**: `facility-[description].jpg` (e.g., `facility-main-gym.jpg`)

### Workshop Images (`/workshops/`)
- **Purpose**: Workshop and training session photos
- **Recommended size**: 600x400px or higher
- **Format**: JPG, PNG
- **Naming**: `workshop-[type].jpg` (e.g., `workshop-snatch-technique.jpg`)

### Program Images (`/programs/`)
- **Purpose**: Program-related images and graphics
- **Recommended size**: 600x400px or higher
- **Format**: JPG, PNG
- **Naming**: `program-[name].jpg` (e.g., `program-beginners-foundation.jpg`)

### Testimonial Photos (`/testimonials/`)
- **Purpose**: Customer testimonial photos
- **Recommended size**: 150x150px (square)
- **Format**: JPG, PNG
- **Naming**: `testimonial-[name].jpg` (e.g., `testimonial-sarah-johnson.jpg`)

### Logos (`/logos/`)
- **Purpose**: Logo files and branding assets
- **Recommended formats**: SVG, PNG, JPG
- **Naming**: `logo-[variant].[ext]` (e.g., `logo-main.svg`, `logo-white.png`)

### Icons (`/icons/`)
- **Purpose**: Icon files and small graphics
- **Recommended size**: 24x24px, 32x32px, 64x64px
- **Format**: SVG, PNG
- **Naming**: `icon-[name].[ext]` (e.g., `icon-dumbbell.svg`)

## Usage in Code

Images in the `public` directory can be referenced directly in your code:

```jsx
// Example usage in React components
<img src="/images/hero/hero-homepage.jpg" alt="Hero image" />
<img src="/images/team/alex-thompson.jpg" alt="Alex Thompson" />
<img src="/images/logos/logo-main.svg" alt="Grassroots Lifting Logo" />
```

## Optimization Tips

1. **Compress images** before uploading to reduce file size
2. **Use WebP format** when possible for better compression
3. **Provide multiple sizes** for responsive images
4. **Add alt text** for accessibility
5. **Use descriptive filenames** for better organization

## Current Placeholder Images

The website currently uses Unsplash images as placeholders. Replace these with your own images:

- Homepage hero: Replace with your main gym/training photo
- Team photos: Add actual team member photos
- Facility photos: Add photos of your actual gym/facility
- Workshop photos: Add photos from actual workshops
- Testimonial photos: Add photos of actual customers (with permission)

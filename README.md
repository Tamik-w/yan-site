# Grassroots Lifting

A comprehensive web application for Olympic weightlifting coaching, workshops, and programs built with Next.js 14.

## Features

- **Homepage**: Two-section layout with left content area and scrollable testimonials on the right
- **Coaching/Consultation**: Personal coaching options and expert coaches
- **Workshops**: Intensive technique workshops and specialized training
- **Programs**: Comprehensive training programs for all levels
- **Contact**: Contact form, facility information, and FAQ
- **About**: Company story, team information, and values

## Design

- **Minimalistic green color scheme** using Tailwind CSS v4
- **Responsive design** for all device sizes
- **Modern UI/UX** with smooth animations and transitions
- **Accessibility focused** with proper semantic HTML
- **Standard green colors** (green-50, green-100, green-600, etc.) for consistency
- **Full-screen hero design** with background images and floating animations
- **Page load animations** with fade-in and slide-up effects
- **Glass-morphism design** with backdrop blur effects
- **Staggered animations** with custom delays for each element
- **Hover effects** with scale and shadow transitions
- **Background images** with parallax effects** for each page

## Technology Stack

- **Next.js 14** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Responsive design** with mobile-first approach

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── coaching/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── programs/
│   │   └── page.tsx
│   ├── workshops/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Footer.tsx
    ├── Navigation.tsx
    └── Testimonials.tsx
```

## Key Features

### Homepage
- Hero section with compelling messaging
- Interactive testimonials carousel
- Feature highlights
- Call-to-action sections

### Navigation
- Responsive navigation with mobile menu
- Logo and branding
- Smooth scrolling navigation

### Pages
- **Coaching**: Personal coaching options, coach profiles, and process
- **Workshops**: Intensive training sessions with detailed information
- **Programs**: Comprehensive training programs for all levels
- **Contact**: Contact form, facility info, and quick contact options
- **About**: Company story, team, values, and facility information

### Components
- **Navigation**: Responsive header with mobile menu
- **Footer**: Contact information and quick links
- **Testimonials**: Interactive carousel with athlete reviews

## Styling

The application uses a minimalistic green color scheme with:
- Primary green colors for branding
- Clean, modern typography
- Consistent spacing and layout
- Hover effects and transitions
- Mobile-responsive design

## Deployment

The application is ready for deployment on platforms like Vercel, Netlify, or any Node.js hosting service.

```bash
npm run build
npm start
```

## License

This project is created for demonstration purposes.

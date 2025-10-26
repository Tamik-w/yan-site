# Email Configuration Setup

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Gmail Setup Instructions

### Step 1: Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to Security
3. Enable 2-Step Verification

### Step 2: Generate App Password
1. Go to Google Account settings
2. Navigate to Security
3. Under "2-Step Verification", click "App passwords"
4. Select "Mail" and "Other (custom name)"
5. Enter "Grassroots Lifting Website"
6. Copy the generated 16-character password

### Step 3: Update Environment Variables
Replace the values in your `.env.local` file:
- `EMAIL_USER`: Your Gmail address (e.g., tamurovdm@gmail.com)
- `EMAIL_PASS`: The 16-character app password from Step 2

## Testing the Email Functionality

1. Start your development server: `npm run dev`
2. Go to the contact page
3. Fill out and submit the form
4. Check your email (tamurovdm@gmail.com) for the message

## Troubleshooting

- **Authentication failed**: Make sure you're using the App Password, not your regular Gmail password
- **Less secure app access**: This is not needed when using App Passwords
- **Rate limiting**: Gmail has daily sending limits for free accounts

## Production Deployment

For production deployment (Vercel, Netlify, etc.):
1. Add the environment variables in your hosting platform's settings
2. Never commit `.env.local` to version control
3. Use the same environment variable names in production

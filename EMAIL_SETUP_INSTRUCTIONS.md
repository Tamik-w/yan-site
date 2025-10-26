# Email Setup Instructions

The contact form is currently failing because the email service is not configured. Here's how to fix it:

## Step 1: Create Environment Variables

Create a `.env.local` file in your project root with the following content:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
```

## Step 2: Gmail Setup

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate an App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this app password (not your regular password) in `EMAIL_PASS`

## Step 3: Update the .env.local file

Replace the placeholder values:
- `your-email@gmail.com` with your actual Gmail address
- `your-app-password` with the generated app password

## Step 4: Restart the Development Server

After creating the `.env.local` file, restart your development server:

```bash
npm run dev
```

## Testing

Once configured, try submitting the contact form. You should see:
- A loading spinner while sending
- Success message if email is sent
- Specific error messages if there are issues

## Common Issues

1. **"Email service not configured"** - Environment variables are missing
2. **"Email authentication failed"** - Wrong credentials or need app password
3. **"Network error"** - Check internet connection

## Alternative Email Services

If Gmail doesn't work, you can modify the transporter configuration in `src/app/api/send-email/route.ts` to use other services like:
- SendGrid
- Mailgun
- AWS SES
- Outlook/Hotmail

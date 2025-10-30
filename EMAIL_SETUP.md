# Email Setup Guide

This application uses Nodemailer to send emails via Gmail SMTP when users submit forms.

## Setup Instructions

### 1. Create `.env.local` file

Create a file named `.env.local` in the root directory of your project with the following content:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
RECEIVER_EMAIL=your-email@gmail.com
```

### 2. Get Gmail App Password

For Gmail, you need to create an App Password instead of using your regular password:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Enable **2-Step Verification** if you haven't already
4. Scroll down and click on **App passwords** (under "Signing in to Google")
5. Select **Mail** as the app and **Other** as the device
6. Enter "Sahayak Website" as the device name
7. Click **Generate**
8. Copy the 16-character password shown
9. Use this password in the `SMTP_PASS` variable in `.env.local`

### 3. Update Environment Variables

Replace the placeholder values in `.env.local`:

- `SMTP_USER`: Your Gmail address
- `SMTP_PASS`: The 16-character App Password from step 2
- `RECEIVER_EMAIL`: The email address where you want to receive form submissions (can be the same as SMTP_USER)

### 4. Test the Forms

After setting up the environment variables:

1. Start your development server: `npm run dev`
2. Navigate to the Contact page and submit the form
3. Navigate to the Volunteer page and submit the form
4. Check your email inbox for the form submissions

## Forms

### Contact Form (`/contact`)
- Collects: Name, Email, Phone (optional), Subject, Message
- Sends email with all details to RECEIVER_EMAIL

### Volunteer Form (`/volunteer`)
- Collects: Name, Email, Phone, Interest Area
- Sends email with all details to RECEIVER_EMAIL

## API Routes

- `/api/send-contact` - Handles contact form submissions
- `/api/send-volunteer` - Handles volunteer registration submissions

## Troubleshooting

### Email not sending?

1. Make sure you're using an App Password, not your regular Gmail password
2. Verify that 2-Step Verification is enabled on your Google account
3. Check the console/terminal for error messages
4. Verify all environment variables are set correctly
5. Make sure `.env.local` is in `.gitignore` (should be by default)

### Still having issues?

- Check that Gmail SMTP is not blocked by your firewall
- Verify that you're using the correct Gmail address
- Try using port 465 with `secure: true` instead of 587


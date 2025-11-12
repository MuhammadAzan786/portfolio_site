# Contact Section Documentation

## Overview

A fully functional contact section with form validation, email integration, and smooth animations.

## Features

### Contact Form
- ✅ **React Hook Form** - Efficient form state management
- ✅ **Zod Validation** - Type-safe schema validation
- ✅ **Real-time Validation** - Instant error messages
- ✅ **Loading States** - Visual feedback during submission
- ✅ **Success/Error Messages** - Animated notifications
- ✅ **Field Animations** - Smooth focus states
- ✅ **Responsive Design** - Mobile-optimized layout

### Contact Information
- ✅ **Email Address** - With mailto link
- ✅ **Location** - Optional location display
- ✅ **Social Links** - GitHub, LinkedIn, Twitter, Email
- ✅ **Animated Cards** - Hover effects and transitions
- ✅ **Availability Status** - Decorative banner

### API Integration
- ✅ **Resend Email Service** - Professional email delivery
- ✅ **HTML Email Template** - Beautifully formatted emails
- ✅ **Error Handling** - Comprehensive error management
- ✅ **Validation** - Server-side data validation

## Setup Instructions

### 1. Install Dependencies

Already installed:
```bash
npm install react-hook-form @hookform/resolvers zod resend
```

### 2. Configure Environment Variables

Create a `.env.local` file in the project root:

```env
# Resend API Key
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_api_key_here

# Contact Email
# Email address where form submissions will be sent
CONTACT_EMAIL=your.email@example.com
```

### 3. Set Up Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Create a free account
3. Verify your domain (or use the test domain for development)
4. Get your API key from the dashboard
5. Add the API key to `.env.local`

### 4. Update Contact Information

Edit `components/ui/contact-info.tsx` to update:
- Email address
- Location
- Social media links

```tsx
// Line 71: Update email
value="your.email@example.com"

// Line 78: Update location
value="Your City, State"

// Lines 89-124: Update social media URLs
href="https://github.com/yourusername"
href="https://linkedin.com/in/yourusername"
href="https://twitter.com/yourusername"
```

### 5. Customize Email Template

Edit `app/api/contact/route.ts` to customize:
- Sender name (line 18)
- Email styling
- Template content

```tsx
from: "Your Name <noreply@yourdomain.com>",
to: [process.env.CONTACT_EMAIL || "your.email@example.com"],
```

## Form Validation Rules

### Name Field
- **Min Length:** 2 characters
- **Max Length:** 50 characters
- **Required:** Yes

### Email Field
- **Format:** Valid email address
- **Required:** Yes

### Subject Field
- **Min Length:** 5 characters
- **Max Length:** 100 characters
- **Required:** Yes

### Message Field
- **Min Length:** 10 characters
- **Max Length:** 1000 characters
- **Required:** Yes

## API Endpoint

**URL:** `/api/contact`
**Method:** `POST`
**Content-Type:** `application/json`

### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I would like to discuss a project..."
}
```

### Success Response (200)
```json
{
  "message": "Email sent successfully",
  "id": "email_id"
}
```

### Error Response (400/500)
```json
{
  "error": "Error message"
}
```

## Components Structure

```
components/
├── sections/
│   └── contact-section.tsx      # Main section layout
└── ui/
    ├── contact-form.tsx         # Form component with validation
    └── contact-info.tsx         # Contact information display

lib/
└── validations/
    └── contact.ts               # Zod validation schema

app/
└── api/
    └── contact/
        └── route.ts             # API endpoint for form submission
```

## Animations

### Form Fields
- Fade in and slide up on view
- Staggered entrance (0.1s delays)
- Error messages slide in from top

### Submit Button
- Loading spinner during submission
- Icon transitions (Send → Loader)

### Success/Error Messages
- Scale and fade animation
- Auto-dismiss after 5 seconds
- Slide exit animation

### Contact Info
- Items slide in from left
- Icon rotation on hover (360°)
- Card lift and scale on hover

## Customization

### Change Color Scheme
Update the gradient classes in the email template:
```tsx
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Modify Validation Rules
Edit `lib/validations/contact.ts`:
```tsx
export const contactFormSchema = z.object({
  name: z.string().min(2).max(50),
  // Add custom validation rules
});
```

### Add Additional Fields
1. Update schema in `lib/validations/contact.ts`
2. Add form field in `components/ui/contact-form.tsx`
3. Update API handler in `app/api/contact/route.ts`
4. Include field in email template

## Testing

### Development Mode
Use Resend's test domain:
```env
RESEND_API_KEY=re_test_key
```

### Test Form Validation
1. Try submitting with empty fields
2. Test invalid email format
3. Test character limits
4. Verify error messages appear

### Test Email Delivery
1. Fill out the form completely
2. Submit and check for success message
3. Verify email received at contact address
4. Check reply-to functionality

## Production Deployment

### Verify Domain with Resend
1. Add your domain in Resend dashboard
2. Add DNS records (SPF, DKIM, DMARC)
3. Wait for verification
4. Update `from` address in API route

### Environment Variables
Ensure `.env.local` is added to `.gitignore` and set environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables

### Update Sender Address
Replace test sender with your verified domain:
```tsx
from: "Contact Form <contact@yourdomain.com>",
```

## Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## Accessibility

- ✅ Proper label associations
- ✅ ARIA labels on buttons
- ✅ Keyboard navigation
- ✅ Focus indicators
- ✅ Error announcements
- ✅ Semantic HTML

## Security Features

- ✅ Server-side validation
- ✅ CSRF protection (Next.js built-in)
- ✅ Rate limiting (via Resend)
- ✅ Input sanitization
- ✅ Environment variable protection

## Troubleshooting

### Email Not Sending
1. Check API key is correct
2. Verify domain is verified (production)
3. Check environment variables are set
4. Review Resend dashboard for errors

### Validation Errors
1. Check schema matches form fields
2. Verify error messages are displayed
3. Test with browser console open

### Styling Issues
1. Ensure Tailwind classes are correct
2. Check glassmorphism support
3. Verify backdrop-filter compatibility

## Future Enhancements

- [ ] File upload support
- [ ] reCAPTCHA integration
- [ ] Message templates
- [ ] Auto-reply functionality
- [ ] Admin notification preferences
- [ ] Form analytics tracking

## Support

For issues or questions:
1. Check Resend documentation: https://resend.com/docs
2. Review React Hook Form docs: https://react-hook-form.com
3. Check Zod documentation: https://zod.dev

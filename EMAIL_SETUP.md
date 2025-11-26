# Email Setup Guide for Contact Form

## Setting Up EmailJS (Free - 200 emails/month)

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

### Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Follow the authorization process
5. Copy the **Service ID** (e.g., `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Set up your template like this:

**Subject:**
```
New Portfolio Contact from {{from_name}}
```

**Content:**
```
You have a new message from your portfolio website!

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save and copy the **Template ID** (e.g., `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to "Account" > "General"
2. Copy your **Public Key**

### Step 5: Update Your Portfolio

Open `src/components/Contact.tsx` and replace the placeholder values:

```typescript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Your Service ID
const EMAILJS_TEMPLATE_ID = 'template_xxxxxxx'; // Your Template ID  
const EMAILJS_PUBLIC_KEY = 'your_public_key'; // Your Public Key
```

### Alternative: Use Environment Variables (Recommended for Production)

1. Create a `.env` file in your project root:
```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

2. Update Contact.tsx to use environment variables:
```typescript
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

## Testing
1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox for the message

## Troubleshooting
- Make sure all three values (Service ID, Template ID, Public Key) are correct
- Check that your email service is properly connected
- Verify your template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Check browser console for any errors

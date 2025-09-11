# Machvanta India Pvt Ltd - Company Website

A modern, responsive company website built with Next.js, TailwindCSS, and Framer Motion for Machvanta India Pvt Ltd - an industrial automation solutions company.

## Features

- **Multi-page Website**: Home, About, Services, Projects, and Contact pages
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with TailwindCSS and Framer Motion animations
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Contact Form**: MongoDB integration for inquiry submissions
- **SEO Optimized**: Proper meta tags and structured content

## Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Database**: MongoDB with Mongoose
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB (local or cloud)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project_mach_cursor
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory:
```bash
MONGODB_URI=mongodb://localhost:27017/machvanta
```

For MongoDB Atlas (cloud):
```bash
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/machvanta?retryWrites=true&w=majority
```

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   │   └── inquiry/       # Contact form API
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Navbar.tsx         # Navigation component
│   └── Footer.tsx         # Footer component
├── lib/                   # Utility functions
│   └── mongodb.ts         # Database connection
└── models/                # Database models
    └── Inquiry.ts         # Contact form model
```

## Pages Overview

### Home Page (`/`)
- Hero section with company branding
- Animated gradient background
- Call-to-action buttons
- Floating elements and scroll indicator

### About Page (`/about`)
- Company mission and description
- Interactive timeline with milestones
- Company values section

### Services Page (`/services`)
- Three main service categories
- Animated service cards with hover effects
- Process workflow section
- Call-to-action section

### Projects Page (`/projects`)
- Project showcase with grid layout
- Project details with technologies used
- Success metrics section
- Interactive project cards

### Contact Page (`/contact`)
- Contact information display
- Google Maps integration
- Inquiry form with MongoDB backend
- FAQ section

## API Endpoints

### POST `/api/inquiry`
Submit a contact form inquiry
- **Body**: `{ name, email, phone?, company?, message }`
- **Response**: Success/error message

### GET `/api/inquiry`
Fetch submitted inquiries (for admin use)
- **Response**: Array of inquiry objects

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `MONGODB_URI` | MongoDB connection string | Yes |

## Customization

### Colors and Branding
- Update gradient colors in TailwindCSS classes
- Modify company logo and branding in components
- Change color scheme in `globals.css`

### Content
- Update company information in respective page components
- Modify service descriptions and project details
- Update contact information in Footer and Contact page

### Animations
- Adjust Framer Motion animation parameters
- Add new animation variants
- Modify transition durations and delays

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support or questions, please contact:
- Email: info@machvanta.in
- Phone: +91 98765 43210

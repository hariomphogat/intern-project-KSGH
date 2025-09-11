
# 3E8 Kingsukh Guest House

<div align="center">

![Kingsukh Guest House Banner](./public/images/hero-section.png)

**Your Gateway to Tranquil Beauty in Purulia**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20Site-blue?style=for-the-badge&logo=vercel)](https://intern-project-ksgh.vercel.app/)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/hariomphogat/intern-project-KSGH.git)
[![Next.js](https://img.shields.io/badge/Next.js-13+-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-blue?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

</div>

---

## 4D6 **Internship Project Overview**

Kingsukh Guest House is a modern, responsive website showcasing a serene hospitality experience in the heart of Purulia, West Bengal. This project demonstrates advanced web development techniques with smooth animations, modern UI/UX design, and optimal performance.

### 31F **Key Highlights**

- **Location**: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal - 723156
- **Surrounded by**: Biharinath Hill, Baranti Hill, Susunia Hill, Joychandi Hill, Garhpanchkot, Baranti Dam, Maithon Dam, and Panchat Dam
- **Experience**: Tranquil retreat with modern amenities and heartfelt hospitality

---

## 680 **Live Demo & Repository**

<div align="center">

### 310 **[Visit Live Website](https://intern-project-ksgh.vercel.app/)**

</div>

---

## 4AB **Features**

### 3A8 **Design & User Experience**
-  Modern UI/UX with gradient backgrounds and card-based layouts
-  Smooth Animations powered by Framer Motion
-  Parallax Scrolling effects for immersive experience
-  Responsive Design optimized for all devices
-  Interactive Elements with hover effects and micro-interactions
-  Loading States and skeleton screens for better UX

### 4F1 **Core Functionality**
-  Hero Section with animated content and virtual tour button
-  Room Showcase with detailed cards and booking options
-  Services Display highlighting guest house amenities
-  About Section featuring location and nearby attractions
-  Contact Form with validation and Google Maps integration
-  Animated Counters showing guest satisfaction metrics

### 680 **Performance & SEO**
-  Next.js 13+ with App Router for optimal performance
-  Image Optimization with WebP format and lazy loading
-  SEO Optimized with proper meta tags and structured data
-  PWA Ready with manifest and service worker support
-  ast Loading with code splitting and caching strategies

---

## 6E0 **Tech Stack**

<div align="center">

| Frontend | Styling | Animation | Backend | Deployment |
|----------|---------|-----------|---------|------------|
| ![Next.js](https://img.shields.io/badge/Next.js-13+-black?logo=next.js) | ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-blue?logo=tailwindcss) | ![Framer Motion](https://img.shields.io/badge/Framer-Motion-pink?logo=framer) | ![React Hook Form](https://img.shields.io/badge/React-Hook%20Form-blue?logo=react) | ![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?logo=vercel) |

</div>

### **Detailed Tech Stack**

```json
{
  "frontend": {
    "framework": "Next.js 13+ (App Router)",
    "language": "JavaScript/JSX",
    "styling": "Tailwind CSS",
    "animations": "Framer Motion",
    "icons": "Lucide React Icons"
  },
  "forms": {
    "validation": "React Hook Form + Yup",
    "components": "Custom form components"
  },
  "performance": {
    "images": "Next.js Image Optimization",
    "fonts": "Next.js Font Optimization",
    "caching": "Static Generation + ISR"
  },
  "deployment": {
    "platform": "Vercel",
    "domain": "Custom domain support",
    "analytics": "Vercel Analytics ready"
  }
}
```

---

## 4C1 **Project Structure**

```
intern-project-KSGH/
├──  README.md
├──  package.json
├──  next.config.js
├──  tailwind.config.js
├──  public/
│   ├──  images/
│   ├──  favicon.ico
│   └──  site.webmanifest
├──  src/
│   ├──  app/
│   │   ├──  layout.js
│   │   ├──  page.js
│   │   └──  globals.css
│   ├──  components/
│   │   ├──  sections/
│   │   │   ├──  HeroSection.jsx
│   │   │   ├──  RoomsSection.jsx
│   │   │   ├──  ServicesSection.jsx
│   │   │   ├──  AboutSection.jsx
│   │   │   └──  ContactSection.jsx
│   │   └──  ui/
│   └──  utils/
│       ├──  ButtonCTA.jsx
│       ├──  RoomCard.jsx
│       ├──  ServiceCard.jsx
│       ├──  Counter.jsx
│       └──  SectionHeading.jsx
├──  constants/
│   └──  index.js
└──  styles/
    └──  globals.css
```

---

## 680 **Quick Start**

### **Prerequisites**
- Node.js 18+ installed
- Git installed
- Code editor (VS Code recommended)

### **Installation Steps**

```bash
# 1449 Clone the repository
git clone https://github.com/hariomphogat/intern-project-KSGH.git
cd intern-project-KSGH

# 2449 Install dependencies
npm install
# or
yarn install

# 3449 Start development server
npm run dev
# or
yarn dev

# 4449 Open in browser
# Visit http://localhost:3000
```

### **Environment Setup**

Create a `.env.local` file in the root directory:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME="Kingsukh Guest House"

# Contact Form (Optional - for production)
NEXT_PUBLIC_CONTACT_EMAIL=kkghosh0099@gmail.com
NEXT_PUBLIC_PHONE_NUMBER=+919007062180

# Analytics (Optional)
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

---


### 3E0 **Hero Section**
![Hero Section](./public/images/hero-section.png)
*Immersive hero section with parallax background, animated text, and smooth scroll indicators*

**Features:**
- Parallax scrolling background
- Staggered text animations
- Interactive CTA buttons
- Smooth scroll to sections
- Mobile-optimized layout

### 3E8 **Rooms Showcase**
![Rooms Section](./public/images/rooms-section.png)
*Elegant room cards with hover effects and detailed information*

**Features:**
- Interactive room cards
- Image lazy loading
- Price displays
- Booking CTAs
- Responsive grid layout

### 6CE️ **Services Display**
![Services Section](./public/images/services-section.png)
*Comprehensive services with animated icons and descriptions*

**Features:**
- Animated service cards
- Icon animations
- Feature highlights
- Statistics counters
- Progressive disclosure

### 4DE **Contact & Location**
![Contact Section](./public/images/contact-section.png)
*Professional contact form with Google Maps integration*

**Features:**
- Form validation
- Google Maps embed
- Contact information cards
- Loading states
- Success/error messaging

---

## 3A8 **Component Documentation**

### **HeroSection.jsx**
```jsx
// Main landing section with parallax effects
<HeroSection />

Props: None
Features:
- Parallax background animation
- Staggered text entrance
- Scroll indicators
- Mobile responsive
```

### **RoomCard.jsx**
```jsx
// Individual room showcase component
<RoomCard 
  imageUrl="/images/room1.jpg"
  title="Deluxe Room"
  description="Spacious room with city view"
  price={120}
/>

Props:
- imageUrl: string (required)
- title: string (required)
- description: string (required)
- price: number (required)
```

### **Counter.jsx**
```jsx
// Animated counting component
<Counter to={500} title="Happy Guests" />

Props:
- to: number (target count)
- title: string (counter label)

Features:
- Intersection observer trigger
- Smooth counting animation
- Customizable duration and easing
```

---

## 680 **Performance Optimization**

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: < 2.5s
- **FID (First Input Delay)**: < 100ms
- **CLS (Cumulative Layout Shift)**: < 0.1

### **Optimization Techniques**

```javascript
// Image Optimization
<Image
  src="/hero-bg.jpg"
  alt="Guest house"
  width={1920}
  height={1080}
  priority
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>

// Code Splitting
const LazyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <Skeleton />,
  ssr: false
});

// Intersection Observer
const { ref, inView } = useInView({
  threshold: 0.1,
  triggerOnce: true
});
```

---

## 680 **Deployment**

### **Deploy to Vercel (Recommended)**

```bash
# 1449 Install Vercel CLI
npm i -g vercel

# 2449 Login to Vercel
vercel login

# 3449 Deploy
vercel

# 4449 Set up custom domain (optional)
vercel domains add yourdomain.com
```

### **Deploy to Netlify**

```bash
# 1449 Build the project
npm run build

# 2449 Deploy to Netlify
# Drag and drop the 'out' folder to Netlify
```

### **Deploy to GitHub Pages**

```bash
# 1449 Install gh-pages
npm install --save-dev gh-pages

# 2449 Add to package.json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d out"
}

# 3449 Deploy
npm run deploy
```

---

## 🔧 **Configuration**

### **Next.js Configuration**

```javascript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
```

### **Tailwind Configuration**

```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fffbeb',
          500: '#f59e0b',
          600: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.8s ease-out',
      }
    },
  },
  plugins: [],
};
```

---

## 📊 **Analytics & Monitoring**

### **Performance Monitoring**
```javascript
// Track Core Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### **User Analytics**
```javascript
// Google Analytics integration
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
```

---



### **Development Workflow**

```bash
# 1449 Fork the repository
git clone https://github.com/yourusername/intern-project-KSGH.git

# 2449 Create feature branch
git checkout -b feature/amazing-feature

# 3449 Make changes and commit
git commit -m "Add amazing feature"

# 4449 Push to branch
git push origin feature/amazing-feature

# 5449 Open Pull Request
```

### **Code Style Guidelines**

```javascript
// Use consistent naming
const ComponentName = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <motion.div
      className="component-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Component content */}
    </motion.div>
  );
};

export default ComponentName;
```

---

## 📋 **Work Done**

- [x] Responsive design implementation
- [x] Core animations with Framer Motion
- [x] Contact form with validation
- [x] Google Maps integration
- [x] Performance optimization


## 📞 **Contact Information**

<div align="center">

### 3E8 **Kingsukh Guest House**

📍 **Address**: Beside Barshal Water Tank, Manpur, Barhanti, West Bengal - 723156

📞 **Phone**: [+91 9007062180](tel:+919007062180)

📧 **Email**: [kkghosh0099@gmail.com](mailto:kkghosh0099@gmail.com)

🌐 **Website**: [https://intern-project-ksgh.vercel.app/](https://intern-project-ksgh.vercel.app/)

---

### 👩‍💻 **Developer**

**Hariom**  
*Full Stack Developer & Data Science Enthusiast*

🎓 **Education**: MSc in Data Science and Machine Learning  
🏆 **Specialization**: Full Stack WebApp Development  

**Technical Expertise:**
- **Frontend**: React.js, Next.js, React Native, Tailwind CSS, javascript/typescript
- **Backend**: Node.js, Express.js, RESTful APIs
- **Mobile**: React Native, Expo, Native Development
- **Data Science**: Python, Machine Learning Algorithms, Statistical Analysis
- **Tools**: Git, Figma, Adobe XD, Canva, 
- **Databases**: MongoDB, PostgreSQL, Firebase



[![Portfolio](https://img.shields.io/badge/Portfolio-Visit-blue?style=flat&logo=vercel)](https://hariomphogat.vercel.app)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/hariomphogat)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=flat&logo=github)](https://github.com/hariomphogat)

*"Bridging the gap between technology and user experience..."*

</div>

---

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Hariom

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 **Acknowledgments**


- **Design Inspiration**: Modern hospitality websites and booking platforms
- **Technical Resources**: Next.js documentation, Framer Motion guides, Tailwind CSS
- **Icons**: Lucide React icon library
- **Fonts**: Inter font family for modern typography
- **Special Thanks**: To the **Innobyte Services** for this internship Opportunity

---

<div align="center">

### 31F **Thank you for visiting Kingsukh Guest House!**

**Made with ❤️ by Hariom**

[![Live Demo](https://img.shields.io/badge/310%20Live%20Demo-Visit%20Now-blue?style=for-the-badge)](https://intern-project-ksgh.vercel.app/)
[![GitHub Stars](https://img.shields.io/badge/31F%20Star%20This%20Repo-GitHub-yellow?style=for-the-badge&logo=github)](https://github.com/hariomphogat/intern-project-KSGH)

</div>

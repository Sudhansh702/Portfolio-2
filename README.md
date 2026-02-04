# Portfolio Website

A modern, animated portfolio website built with Next.js 14, featuring scroll-triggered animations and a beautiful teal/amber color scheme with dark/light mode support.

## Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 Tailwind CSS for styling
- 🌙 Dark/Light mode toggle
- 🎭 Framer Motion animations
- 📜 GSAP scroll-triggered animations
- 📱 Fully responsive design
- ♿ Accessible components
- 🚀 Optimized for performance

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Fonts**: Inter + JetBrains Mono
- **Theme**: next-themes

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd "Portfolio 2"
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
portfolio/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with theme provider
│   ├── page.tsx             # Main page
│   └── globals.css          # Global styles
├── components/
│   ├── animations/          # Animation wrapper components
│   ├── layout/              # Layout components (Navbar, Footer)
│   ├── sections/            # Page sections
│   └── ui/                  # Reusable UI components
├── data/
│   └── portfolio.ts         # Portfolio content data
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions and configs
└── public/                  # Static assets
```

## Customization

### Update Your Information

Edit `data/portfolio.ts` to update:
- Personal information
- About section content
- Skills and technologies
- Projects
- Work experience
- Testimonials

### Change Colors

Update the color palette in `tailwind.config.ts`:
- Primary colors (teal)
- Accent colors (amber)
- Background and text colors

### Add Images

Place your images in the `public` folder and reference them in `data/portfolio.ts`.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with one click

## Performance Optimizations

- Code splitting with Next.js App Router
- Optimized animations with will-change CSS
- Lazy loading for off-screen components
- Image optimization ready (add next/image when needed)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Credits

- Design inspired by [macmousefix.com](https://macmousefix.com)
- Built with modern web technologies

---

Made with ❤️ by [Your Name]

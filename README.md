# Portfolio Website

A modern, animated portfolio website built with Next.js 14, featuring scroll-triggered animations, **3 stunning theme options**, and dark/light mode support.

## Features

- ⚡ Built with Next.js 14 (App Router)
- 🎨 **3 Professional Theme Options** (switchable via .env)
- 🌈 Teal & Amber, Slate & Coral, or Navy & Mint color schemes
- 🌙 Dark/Light mode toggle for all themes
- 🎭 Framer Motion animations
- 📜 GSAP scroll-triggered animations (4x zoom hero effect!)
- 🔁 Repeating scroll animations on all sections
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

### ✏️ Edit Your Content (Super Easy!)

**Everything is in ONE file:** `data/portfolio.ts`

Just open it and edit:
- Personal information (name, email, social links)
- About section and highlights
- Skills and proficiency levels
- Projects (title, description, tech stack, links)
- Work experience
- Testimonials

**No complex configuration - just edit that file and save!** 🎉

See `HOW_TO_EDIT.md` for a complete guide with examples.

### 🎨 Choose Your Theme

The portfolio comes with **3 professional themes**:

1. **Teal & Amber** (Default) - Professional yet vibrant
2. **Slate & Coral** - Modern and bold  
3. **Navy & Mint** - Tech-forward and clean

**To switch themes:**
1. Open `.env.local`
2. Change `NEXT_PUBLIC_THEME` to: `teal_amber`, `slate_coral`, or `navy_mint`
3. Restart the dev server

See `THEMES_GUIDE.md` for detailed theme information!

### 🖼️ Add Images

Place your images in the `public` folder and reference them in `data/portfolio.ts`:
```typescript
image: "/my-project.jpg"
```

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

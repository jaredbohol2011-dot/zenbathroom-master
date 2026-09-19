# Zen Bathroom

A modern, professional website for a bathroom renovation and design company. Built with Next.js 15, React 19, TypeScript, and Tailwind CSS.

## 📋 Project Overview

Zen Bathroom is a full-service bathroom renovation company website that showcases:
- **Services**: Tiling, plumbing, electrical works, modern finishes, and cabinet design
- **Project Gallery**: Completed renovation projects with before/after images
- **Blog**: Educational content about bathroom design, fixtures, materials, and maintenance
- **Quote System**: Online consultation and quote request forms
- **Financing Information**: Payment options for customers

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/OsaidZaher/zenbathroom.git
cd zenbathroom
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🏗️ Project Structure

```
zenbathroom/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                 # Homepage
│   ├── layout.tsx               # Root layout
│   ├── globals.css              # Global styles
│   ├── bathroom-cabinet-design/ # Service page
│   ├── electrical-works/        # Service page
│   ├── plumbing/                # Service page
│   ├── tiling/                  # Service page
│   ├── modern-floor-and-wall-finishes/ # Service page
│   ├── financing/               # Financing information
│   ├── contact/                 # Contact page
│   ├── free-consultation-and-quote/ # Quote form
│   └── blog/                    # Blog articles
├── components/                   # React components
│   ├── HeroSection.tsx          # Homepage hero
│   ├── ServicesSection.tsx      # Services showcase
│   ├── ProjectsGallery.tsx      # Project portfolio
│   ├── BlogSection.tsx          # Blog preview
│   ├── ReviewsSection.tsx       # Customer reviews
│   ├── QuoteForm.tsx            # Quote request form
│   ├── NavigationBar.tsx        # Site navigation
│   ├── Footer.tsx               # Site footer
│   └── ui/                      # Shadcn UI components
├── lib/                          # Utilities
│   ├── services.ts              # Service definitions
│   └── utils.ts                 # Helper functions
├── public/                       # Static assets
│   ├── galleryImages/           # Project photos
│   ├── bathroom_cabinet_design/ # Service images
│   ├── electrical_works/        # Service images
│   └── ...                      # Other service images
└── hooks/                        # Custom React hooks

```

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **UI Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/) with Radix UI primitives
- **Icons**: [Lucide React](https://lucide.dev/)
- **Themes**: [next-themes](https://github.com/pacocoursey/next-themes)

## 📄 Key Features

### Service Pages
Each service has a dedicated page with:
- Detailed service descriptions
- Image galleries
- Call-to-action buttons
- Related blog articles

### Blog System
Educational content covering:
- Bathroom design styles
- Fixture selection guides
- Material guides (tiles, microcement, etc.)
- Maintenance tips (mould prevention, waterproofing)
- Smart bathroom technology

### Quote System
- Free consultation booking
- Multi-step quote form
- WhatsApp integration for quick contact

### Project Gallery
- Showcases completed renovations
- Organized by project type
- Before/after comparisons

## 🎨 UI Components

The project uses **Shadcn UI** component library with extensive Radix UI primitives including:
- Forms, inputs, and validation
- Dialogs, modals, and popovers
- Navigation menus and breadcrumbs
- Carousels and accordions
- Cards and badges
- And more...

## 📱 Responsive Design

Fully responsive design optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)


```bash
npm run build
npm start
```

## 📝 License

All rights to Zen bathrooms

## 👤 Author

**OsaidZaher**
- GitHub: [@OsaidZaher](https://github.com/OsaidZaher)

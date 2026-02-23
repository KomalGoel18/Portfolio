## Personal Portfolio ✨

A modern developer portfolio built with **Next.js**, **TypeScript**, **Tailwind CSS**, and **Framer Motion** to showcase skills, projects, experience, and education with smooth, responsive UI.

## Live Demo

- **URL**: `https://komalgoel.vercel.app/`

## Features

- **Modern responsive design**: Looks great on desktop, tablet, and mobile.
- **Smooth animations**: Section transitions and interactions powered by Framer Motion.
- **Clear information architecture**:
  - `About`
  - `Education`
  - `Experience`
  - `Skills`
  - `Projects`
  - `Contact` (Get in Touch)
- **Sticky animated navbar** with smooth scrolling to sections.
- **Downloadable resume** directly from the navbar (`KomalGoel.pdf`).
- **Contact form** powered by **Formspree** for easy communication.

## Tech Stack

- **Framework**: Next.js 13 (App Router) & React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **UI primitives**: Radix UI-based components (`@radix-ui/react-*`)
- **Icons**: Lucide React
- **Tooling**: ESLint, TypeScript, PostCSS, Autoprefixer
- **Deployment**: Vercel

## Project Structure

- `app/` – Next.js app router pages and routes (home page composition).
- `components/` – Reusable UI components (navbar, hero, sections, CTA, footer, etc.).
- `components/ui/` – Base UI elements (buttons and other primitives).
- `hooks/` – Custom React hooks.
- `lib/` – Utility and helper functions.
- `public/` – Static assets (images, icons, PDFs like the resume).
- `.eslintrc.json` – ESLint configuration.
- `next.config.js` – Next.js configuration.
- `tailwind.config.ts` – Tailwind CSS configuration.
- `tsconfig.json` – TypeScript configuration.
- `package.json` – Project metadata, scripts, and dependencies.

## Getting Started

### Prerequisites

- **Node.js**: v18 or higher recommended.
- **npm** (comes with Node) or an alternative package manager like pnpm/yarn.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/KomalGoel18/Portfolio.git
cd Portfolio
npm install
```

### Running the development server

```bash
npm run dev
```

Then open `http://localhost:3000` in your browser.

### Production build & scripts

- `npm run build` – Build the app for production.
- `npm run start` – Start the production server (after `npm run build`).
- `npm run lint` – Run ESLint.
- `npm run typecheck` – Run TypeScript type checking.

## Customization

- **Content**:
  - Update section content in components like `Hero`, `About`, `Education`, `Experience`, `Skills`, `Projects`, `CTA`, and `Footer` under `components/`.
- **Resume**:
  - Replace `public/KomalGoel.pdf` with your own resume file while keeping the same name to preserve the download links in the navbar.
- **Contact form**:
  - The contact form uses **Formspree** (`components/CTA.tsx`). Update the `action` URL if you want to use a different Formspree project or another form backend.

## Deployment

This project is optimized for deployment on **Vercel**:

1. Push the repository to GitHub (or another git provider).
2. Import the project into Vercel.
3. Select the framework preset **Next.js** and use the default build settings (`npm run build`).
4. Deploy – Vercel will handle builds and previews on new commits.

No environment variables are required for the default setup.

## About Me

I'm a passionate AI/ML Engineer & Full-Stack Developer building scalable systems, modern web apps, and engaging user experiences.

## Connect With Me

- **LinkedIn**: `https://www.linkedin.com/in/komal-goel-b9bb4a291/`

# Portfolio Showcase

This project is a Vite + React + TypeScript application that showcases a cinematic marketing portfolio experience. It integrates reusable UI primitives, Tailwind CSS (v3), Radix UI utilities, and Framer Motion animations.

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Build for production:

   ```bash
   npm run build
   ```

4. Preview the production build locally:

   ```bash
   npm run preview
   ```

## Tech Stack

- [Vite](https://vite.dev) with React and TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with container query plugin
- [Framer Motion](https://www.framer.com/motion/) for scroll/hover animations
- [Radix UI](https://www.radix-ui.com/primitives/docs/overview/introduction) primitives (`@radix-ui/react-slot`, `@radix-ui/react-separator`)
- [lucide-react](https://lucide.dev/) icon set
- Utility helpers from `class-variance-authority`, `clsx`, and `tailwind-merge`

## Styling

Global theme tokens and custom utilities live in `src/index.css`. Tailwind is extended in `tailwind.config.js` to consume those CSS variables, ensuring consistent color and radius usage across components. Cinematic utility classes such as `perspective-1000`, `cinematic-glow`, and `text-glow` power the 3D showcase sections.

## Project Structure

```
src/
├── components/
│   └── ui/
│       ├── badge.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── feature-carousel.tsx
│       └── separator.tsx
├── lib/
│   └── utils.ts
├── App.tsx
├── index.css
└── main.tsx
```

`App.tsx` renders the complete portfolio experience and demonstrates how to combine the reusable UI primitives with Tailwind utilities and Framer Motion.

## Tailwind Configuration

Key theme tokens are defined as CSS variables and mapped in `tailwind.config.js`. The configuration also enables container queries via `@tailwindcss/container-queries`, and exposes extended shadows and border radius presets required by the UI kit.

## License

This codebase is provided for integration tasks and example purposes. Adapt and extend it to suit your own portfolio needs.

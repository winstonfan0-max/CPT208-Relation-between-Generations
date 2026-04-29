# TimeLens Prototype (System)

This folder contains the functional **web-based prototype** for the CPT208 B4 project  
("Relation between Generations").

The goal is to keep a stable, mobile-first interactive demo that can be deployed to a public URL.

## Tech Stack

- **Framework**: React 19
- **Bundler**: Vite 8
- **3D Rendering**: Three.js + `@react-three/fiber` + `@react-three/drei`
- **UI / Icons**: Tailwind-style utility classes + `lucide-react`
- **State Handling**: React hooks (`useState`, `useEffect`, `useRef`) + `localStorage`
- **Deployment Target**: GitHub Pages (static build)

## Setup

### 1) Install dependencies

```bash
npm install
```

### 2) Run local development server

```bash
npm run dev
```

Default local URL:

- `http://localhost:5173/`

### 3) Build production assets

```bash
npm run build
```

Build output:

- `timelens/dist/`

### 4) Sync built prototype to portfolio hosting path

This repository serves the public prototype from:

- `portfolio/prototype/`

After building, copy `timelens/dist/*` into `portfolio/prototype/`.

## NPM Scripts

- `npm run dev` - local development
- `npm run build` - production build
- `npm run preview` - preview built output
- `npm run lint` - linting
- `npm run deploy` - optional gh-pages deploy for standalone usage

## Project Structure

- `src/App.jsx` - main interaction flow and screen state
- `src/main.jsx` - React entry point
- `public/tangible/` - NFC/tag related printable assets
- `ai-logs/` - AI coding prompt records for core components

## Stability and Mobile Notes

- The prototype is optimized for mobile interaction (B4 track requirement).
- NFC Tools tap-area handling includes anti-mis-tap protection to prevent accidental reveal jumps.
- Scan flow includes in-flight lock to avoid duplicate scan transitions during rapid taps.
- Safe-area bottom padding is applied for in-app browsers and gesture-bar devices.


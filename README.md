# Nayomi Portfolio

A small React portfolio built with Vite showcasing a polished hero scene and a project board.

## Overview

This app renders two main sections:

- `HeroScene` — a fullscreen introduction with a desk background, animated steam, and clickable hotspots.
- `ProjectsSection` — a polished project area with three portfolio cards and descriptive notes.

All layout and styling live in `src/App.css`, keeping the visual design centralized and simple.

## Features

- React + Vite app structure
- Interactive hero screen click state
- Audio feedback on cup click
- Responsive layout for desktop and mobile
- Project cards with external links

## Getting Started

### Install dependencies

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open the local Vite URL shown in the terminal to view the site.

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Project Structure

- `src/App.jsx` — root component that renders `HeroScene` and `ProjectsSection`
- `src/HeroScene.jsx` — top landing section with background, steam animation, and hotspots
- `src/ProjectsSection.jsx` — projects section with polaroid-style cards
- `src/App.css` — all application styling
- `public/images` — image assets used in the portfolio
- `public/sounds` — audio asset for the cup interaction

## Dependencies

- `react`
- `react-dom`
- `vite`
- `@vitejs/plugin-react`

## Notes

This project keeps the UI styling unchanged and avoids additional UI libraries. It is intended as a portfolio landing page with simple interactivity and responsive design.

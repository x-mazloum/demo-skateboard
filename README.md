# Demo Skateboard — Interactive 3D Product Experience

An interactive 3D skateboard product website built with **Next.js**, **TypeScript**, **Three.js**, **React Three Fiber**, **Drei**, **GSAP**, **Matter.js**, **Tailwind CSS**, and **Prismic**.

The project demonstrates how React can be used to build rich product experiences that combine 3D models, animation, CMS-driven content, and interactive UI sections.

## Live Demo

Add your live demo here if available.

```txt
https://your-demo-link.com
```

## Tech Stack

- **Framework:** Next.js, React, TypeScript
- **3D:** Three.js, React Three Fiber, Drei
- **Animation:** GSAP
- **Physics:** Matter.js
- **Styling:** Tailwind CSS
- **CMS:** Prismic, Slice Machine
- **Assets:** GLTF model, textures, image/video assets

## Main Features

- 3D skateboard model rendered with React Three Fiber
- Custom deck and wheel textures
- Configurable truck and bolt colors
- Wheel spin animation
- Product-focused landing page sections
- Prismic Slice Machine integration
- Physics-based footer interaction using Matter.js
- Lazy video block section
- Reusable UI components for headings, buttons, layout, and animations

## Project Architecture

```txt
app/
  layout.tsx
  globals.css
  api/
  slice-simulator/
slices/
  Hero/
  ProductGrid/
  TeamGrid/
  TextAndImage/
  VideoBlock/
src/components/
  Bounded.tsx
  ButtonLink.tsx
  Footer.tsx
  FooterPhysics.tsx
  Header.tsx
  Heading.tsx
  SkateBoards.tsx
  SlideIn.tsx
public/
  skateboard.gltf
  skateboard.bin
  skateboard/
  hdr/
  textures and media assets
```

## 3D Implementation

The `SkateBoards.tsx` component loads a GLTF skateboard model and applies custom materials/textures for:

- Deck
- Wheels
- Grip tape
- Trucks
- Bolts

It uses:

- `useGLTF` for loading the model
- `useTexture` for loading image textures
- `MeshStandardMaterial` for realistic materials
- `useFrame` for continuous wheel animation
- `GSAP` for animated wheel transitions
- `useMemo` to optimize material creation

## Interactive Physics

The footer uses **Matter.js** to create a physics-based interaction where skateboard images behave like physical objects. The implementation includes:

- Physics engine setup
- Canvas rendering
- Gravity
- Collision boundaries
- Mouse dragging
- Responsive resizing
- Reduced-motion handling
- Cleanup logic for performance

## CMS / Content Structure

The project uses Prismic slices for a modular content-driven page structure:

- Hero
- Product Grid
- Team Grid
- Text and Image
- Video Block

This shows how the same frontend can support editable marketing/product content through a headless CMS.

## What I Learned

This project helped me strengthen:

- Loading and rendering GLTF models in React
- Applying textures and materials in Three.js
- Building animated 3D product experiences
- Integrating Prismic slices into a Next.js app
- Combining animation, physics, and responsive UI
- Organizing creative frontend projects with reusable components

## Future Improvements

- Add screenshots and video demo to the README
- Improve performance notes for 3D assets
- Add loading and fallback states for 3D content
- Add more detailed Prismic setup instructions
- Optimize assets for production
- Add accessibility notes for animations and reduced motion

## Running Locally

```bash
git clone https://github.com/x-mazloum/demo-skateboard.git
cd demo-skateboard
npm install
npm run dev
```

For Prismic/Slice Machine:

```bash
npm run slicemachine
```

## Project Status

This is a portfolio project built to demonstrate interactive frontend development, React Three Fiber, Three.js, animation, and CMS-driven product pages.

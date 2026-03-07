# My Portfolio

A personal portfolio site built with **React**, **JavaScript**, and **Node.js** (Vite). It showcases coding projects, video/photo work, and your resume.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## What’s included

- **Hero** – Name and tagline
- **About** – Bio and skills
- **Coding projects** – Cards with image, description, tags, live/code links
- **Video & photo** – Grid of videos (click to play) and photos
- **Resume** – Experience, education, and a link to your PDF
- **Contact** – Email and social links

## Customize your content

Edit **`src/data/portfolio.js`**:

- `site` – Name, tagline, email, GitHub, LinkedIn, resume PDF URL
- `about` – Headline, bio, skills list
- `codingProjects` – Array of projects (title, description, image path, tags, liveUrl, repoUrl)
- `mediaWork` – Array of items with `type: 'video'` or `type: 'photo'`, thumbnail/image/video URLs, description
- `resume` – `experience` and `education` arrays

## Where to put assets

- **Project images:** `public/projects/` (e.g. `public/projects/project1.jpg`)
- **Videos & photos:** `public/media/` (e.g. `public/media/video1.mp4`, `public/media/photo1.jpg`)
- **Resume PDF:** `public/resume.pdf` (and set `resumePdfUrl: '/resume.pdf'` in `portfolio.js`)

Reference them in `portfolio.js` with paths like `/projects/project1.jpg` and `/media/video1.mp4`.

## Build for production

```bash
npm run build
```

Output is in `dist/`. Deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Tech stack

- React 18
- JavaScript (no TypeScript)
- Vite 5
- CSS (no framework)

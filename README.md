# Boitumedia — Developer Portfolio & Digital Solutions

**Boitumedia** is the personal developer portfolio and software showcase for **Boitumelo Tubabwene**—a self-taught software developer based in Botswana 🇧🇼.

The platform showcases real-world mobile applications, web platforms, and backend software built with **Flutter**, **Python**, the **Svelte ecosystem (Svelte 5 & SvelteKit)**, and **SQL**, alongside ongoing education in the **Google IT Support Professional Certificate**.

---

## 🌟 Key Features & Design System

- **⚡ Real-Time Circuit Canvas Animation**: Interactive HTML5 Canvas electronic circuit traces with traveling current signals, glowing junction nodes, and ambient spot glow overlays.
- **🎨 Giant Outline Typography & Editorial Accents**: Outlined stroke watermark text (`BOITUMELO`, `/SELECTED WORK`, `/ABOUT`) layered behind bold headlines, paired with editorial italic greetings.
- **🖼️ Developer Portrait & Social Matrix**: Central developer portrait frame wrapped in a glowing circuit ring border, accompanied by floating glassmorphic social pills (`GitHub`, `LinkedIn`, `Email`, `WhatsApp`).
- **📁 /SELECTED WORK Showcase**: Filterable project gallery with category tabs (`All Work`, `Flutter Apps`, `Svelte Web`, `Python & SQL`), hover zoom cards, and circular action buttons (`↗`).
- **☀️ Light & Dark Mode System**: High-contrast theme engine defaulting to **Light Mode** out of the box with instant single-click toggle and anti-FOUC initialization.
- **♿ Accessible & Performant**: Accessible focus rings, `prefers-reduced-motion` static SVG fallbacks, and 100/100 Lighthouse performance optimization.

---

## 🛠️ Technology Stack

| Layer             | Technology                                                                     |
| :---------------- | :----------------------------------------------------------------------------- |
| **Framework**     | [SvelteKit](https://kit.svelte.dev/) & [Svelte 5 (Runes)](https://svelte.dev/) |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                                  |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/), DaisyUI, Custom OKLCH Tokens         |
| **Composables**   | Melt UI, `@ariefsn/svelte-use`                                                 |
| **Icons**         | Lucide Svelte, `@icons-pack/svelte-simple-icons`                               |
| **Build Tooling** | Vite, Prettier, ESLint, Svelte Check                                           |

---

## 👨‍💻 Developer Profile

- **Name**: Boitumelo Tubabwene
- **Location**: Gaborone, Botswana 🇧🇼
- **Role**: Self-Taught Software Developer & Tech Specialist
- **Core Skills**:
  - **Flutter & Dart**: Cross-platform native iOS & Android mobile applications.
  - **Svelte Ecosystem**: Svelte 5, SvelteKit, TypeScript, & Tailwind CSS web apps.
  - **Python**: Backend RESTful APIs, automation scripts, & microservices.
  - **SQL**: Database design, query optimization, & schema modeling across PostgreSQL, MySQL, & SQLite.
- **Certifications**: Currently Enrolled in **Google IT Support Professional Certificate** (Coursera/Google).

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Blackytuvavwene/boitumedia.git
   cd boitumedia
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

---

## 📜 Available Scripts

- `npm run dev`: Launch the local Vite dev server.
- `npm run build`: Build the production bundle for deployment.
- `npm run preview`: Preview the production build locally.
- `npm run check`: Run Svelte and TypeScript type diagnostics via `svelte-check`.
- `npm run format`: Format code files using Prettier.
- `npm run lint`: Check code formatting and ESLint rules.

---

## 🚢 Deployment on Dokploy (dokploy.com)

The application is fully configured for deployment on [**Dokploy**](https://dokploy.com)—an open-source, self-hosted PaaS powered by Docker and Traefik.

### Deployment Configuration:

- **Build Type**: **Nixpacks** (or **Dockerfile**)
  - Fully configured with `nixpacks.toml` using Node.js 24 and npm.
  - Multi-stage `Dockerfile` is also provided as an alternative build method.
- **Start Command**: `npm run start` / `node build`
- **Port**: `3000`
- **Health Check Path**: `/health` (Configured for Traefik health checks and zero-downtime rolling deploys)
- **Automatic SSL**: Managed automatically via Dokploy's Let's Encrypt Traefik integration.

### Environment Variables:

Set the following environment variables in your **Dokploy Application Dashboard**:

| Variable   | Default Value            | Description                                      |
| :--------- | :----------------------- | :----------------------------------------------- |
| `NODE_ENV` | `production`             | Node environment                                 |
| `PORT`     | `3000`                   | Port for the application server                  |
| `HOST`     | `0.0.0.0`                | Network binding address                          |
| `ORIGIN`   | `https://boitumedia.com` | Canonical site origin for SvelteKit adapter-node |

### How to Deploy on Dokploy:

1. In Dokploy, create a new **Application** and connect your GitHub repository (`boitumedia`).
2. Select **Nixpacks** (default) or **Dockerfile** as your **Build Type**.
3. Under **Domains**, add your domain (e.g., `boitumedia.com` and `www.boitumedia.com`) with container port `3000` and HTTPS enabled.
4. Under **Health Checks**, set the health path to `/health`.
5. Click **Deploy**. Dokploy will build the application, verify `/health`, and route traffic seamlessly via Traefik.

---

## 📄 License

Created by **Boitumelo Tubabwene**. All rights reserved.

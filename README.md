# PT Nusantara Global Export

Indonesian premium commodities exporter — company website & Store Connect admin dashboard.

## Tech Stack

- **Vite** — build tooling
- **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** — styling & component library
- **Supabase** — auth, database, storage
- **React Router** — client-side routing
- **TanStack Query** — data fetching & caching
- **Framer Motion** — animations

## Getting Started

```sh
# Install dependencies
npm install

# Copy env template and fill in your Supabase credentials
cp .env.example .env

# Start dev server (http://localhost:8080)
npm run dev
```

## Project Structure

```
src/
├── components/   # Reusable UI components
├── contexts/     # React contexts (auth, theme, etc.)
├── data/         # Static data / constants
├── hooks/        # Custom React hooks
├── integrations/ # Supabase client & third-party configs
├── lib/          # Utility functions
├── pages/        # Route-level page components
└── utils/        # Helper utilities
```

## Scripts

| Command         | Description                   |
| --------------- | ----------------------------- |
| `npm run dev`   | Start dev server              |
| `npm run build` | Production build              |
| `npm run lint`  | Run ESLint                    |
| `npm run preview` | Preview production build    |

## License

Proprietary — PT Nusantara Global Export.

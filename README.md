# kieranglover.com

Personal portfolio site for Kieran Glover.

## Stack

- **Next.js 16** — App Router, React 19
- **TypeScript**
- **Tailwind CSS v4**
- **shadcn/ui** — Card, Button, Item, Separator components
- **Biome** — linting and formatting

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  app/
    client.tsx      # Main app shell — intro, flash, and page state
    layout.tsx      # Root layout, fonts, metadata
    globals.css     # Tailwind + keyframe animations
  components/
    hero.tsx        # Hero section with Toronto skyline
    about.tsx       # About Me card
    projects.tsx    # Projects grid with pagination
    contact.tsx     # Contact card
    Avatar.tsx      # Luffy avatar component
    ui/             # shadcn components
```

## Linting

```bash
pnpm biome check --write
```

## Deploy

Hosted on an AWS EC2 (Ubuntu, t2.micro) behind nginx, served with PM2.

To deploy after pulling changes:

```bash
git pull && pnpm build && pm2 restart kieranglover.com
```

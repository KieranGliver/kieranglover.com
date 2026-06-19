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

### EC2 setup

1. Launch a **t2.micro** Ubuntu 24.04 instance on AWS
2. Open ports **22**, **80**, and **443** in the security group
3. Allocate an **Elastic IP** and associate it with the instance (keeps the IP static on reboot)
4. In your DNS provider, set two **A records** pointing to the Elastic IP:
   - `@` → Elastic IP
   - `www` → Elastic IP

### Fresh instance setup

SSH into a new Ubuntu instance and run:

```bash
curl -fsSL https://raw.githubusercontent.com/KieranGliver/kieranglover.com/main/install.sh | bash
```

This installs Node.js, pnpm, PM2, nginx, configures everything, and starts the app.

### Update after a push

```bash
git pull && pnpm build && pm2 restart kieranglover.com
```

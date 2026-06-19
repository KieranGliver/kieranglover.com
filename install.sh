#!/bin/bash
set -e

# ── config ────────────────────────────────────────────────────────────────────
REPO="https://github.com/KieranGliver/kieranglover.com.git"
DOMAIN="kieranglover.com"
APP_DIR="$HOME/kieranglover.com"
# ─────────────────────────────────────────────────────────────────────────────

echo ">>> Updating packages"
sudo apt update && sudo apt upgrade -y

echo ">>> Creating swap (2GB)"
if [ ! -f /swapfile ]; then
    sudo fallocate -l 2G /swapfile
    sudo chmod 600 /swapfile
    sudo mkswap /swapfile
    sudo swapon /swapfile
    echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
else
    echo "    Swap already exists, skipping"
fi

echo ">>> Installing Node.js 22"
curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash -
sudo apt install -y nodejs

echo ">>> Installing pnpm, PM2, git, nginx, certbot"
sudo npm install -g pnpm pm2
sudo apt install -y git nginx certbot python3-certbot-nginx

echo ">>> Cloning repo"
if [ -d "$APP_DIR" ]; then
    echo "    Directory exists, pulling latest"
    cd "$APP_DIR" && git pull
else
    git clone "$REPO" "$APP_DIR"
    cd "$APP_DIR"
fi

echo ">>> Installing dependencies"
cd "$APP_DIR"
pnpm approve-builds || true
pnpm install

echo ">>> Building"
pnpm build

echo ">>> Starting app with PM2"
pm2 delete "$DOMAIN" 2>/dev/null || true
pm2 start pnpm --name "$DOMAIN" -- start
pm2 save
pm2 startup | tail -1 | sudo bash

echo ">>> Configuring nginx"
sudo tee /etc/nginx/sites-available/"$DOMAIN" > /dev/null <<EOF
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOF

sudo ln -sf /etc/nginx/sites-available/"$DOMAIN" /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl restart nginx

echo ""
echo "✓ Done. Site running at http://$DOMAIN"
echo "  Next: set up SSL with 'sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN'"

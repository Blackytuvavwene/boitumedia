# ==========================================
# Multi-stage Dockerfile for Boitumedia on Dokploy (dokploy.com)
# Node.js 24 Alpine with SvelteKit Node Adapter
# ==========================================

# 1. Build Stage
FROM node:24-alpine AS builder
WORKDIR /app

# Install dependencies (cached if package files don't change)
COPY package*.json ./
RUN npm ci

# Copy project source and compile production build
COPY . .
RUN npm run build
RUN npm prune --omit=dev

# 2. Production Runner Stage
FROM node:24-alpine AS runner
WORKDIR /app

# Runtime configuration
ENV NODE_ENV=production \
    PORT=3000 \
    HOST=0.0.0.0

# Copy built application and production dependencies from builder
COPY --from=builder /app/build ./build
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./

EXPOSE 3000

# Health check configuration for Dokploy uptime & Traefik routing
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/health || exit 1

# Start the SvelteKit production server
CMD ["node", "build"]

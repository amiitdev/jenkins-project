# ---------- Builder Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

COPY app/package*.json ./
RUN npm install --omit=dev

COPY app/ .

# ---------- Runtime Stage ----------
FROM node:20-alpine

# create non-root user
RUN addgroup appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY --from=builder /app /app

USER appuser

EXPOSE 5000

HEALTHCHECK --interval=30s --timeout=3s \
  CMD wget -qO- http://localhost:5000/health || exit 1

CMD ["node", "server.js"]

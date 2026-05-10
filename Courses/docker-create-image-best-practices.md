## Docker Image Best Practices

### 1. Use Official & Minimal Base Images
- Start with official images from Docker Hub (`node:alpine`, `python:slim`)
- Prefer `alpine` or `slim` variants to reduce attack surface and image size
- Pin specific versions: `node:20.11-alpine` not `node:latest`

### 2. Leverage Layer Caching Effectively
Order instructions from **least** to **most** frequently changed:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./      # Changes rarely → cache hit
RUN npm ci                 # Expensive, cached when package.json unchanged
COPY . .                   # Changes often → cache miss only here
```

### 3. Use Multi-Stage Builds
Separate build-time dependencies from the runtime image:
```dockerfile
# Stage 1: Build
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# Stage 2: Runtime (lean final image)
FROM node:20-alpine AS runtime
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
CMD ["node", "dist/index.js"]
```

### 4. Minimize Layers & Combine RUN Commands
```dockerfile
# ❌ Bad — 3 layers, leaves apt cache behind
RUN apt-get update
RUN apt-get install -y curl git
RUN rm -rf /var/lib/apt/lists/*

# ✅ Good — 1 layer, cache cleaned in same step
RUN apt-get update && apt-get install -y \
    curl \
    git \
  && rm -rf /var/lib/apt/lists/*
```

### 5. Use .dockerignore
Prevent unnecessary files from entering the build context:
```
node_modules/
.git/
*.log
.env
dist/
coverage/
```

### 6. Don't Run as Root
```dockerfile
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser
```

### 7. Set Explicit WORKDIR
```dockerfile
WORKDIR /app   # Always use an explicit path, never rely on default
```

### 8. Use COPY Over ADD
`ADD` has implicit magic (auto-extracts tarballs, fetches URLs). Use `COPY` unless you specifically need `ADD`'s features.

### 9. Define HEALTHCHECK
```dockerfile
HEALTHCHECK --interval=30s --timeout=5s --retries=3 \
  CMD curl -f http://localhost:8080/health || exit 1
```

### 10. Externalize Configuration
- Never bake secrets into images
- Use environment variables or secret managers at runtime
- Use `ARG` for build-time values, `ENV` for runtime values

```dockerfile
ARG APP_VERSION
ENV NODE_ENV=production
```

### 11. Use ENTRYPOINT + CMD Together
```dockerfile
ENTRYPOINT ["node"]          # Fixed executable
CMD ["dist/index.js"]        # Overridable default argument
```

### 12. Scan Images for Vulnerabilities
```bash
docker scout cves my-image:latest   # Built into Docker
# or
trivy image my-image:latest
```

---

### Quick Reference Checklist

| Practice | Why |
|---|---|
| Pin base image versions | Reproducible builds |
| Multi-stage builds | Smaller final image |
| Non-root user | Security |
| `.dockerignore` | Faster builds, smaller context |
| Combine `RUN` commands | Fewer layers |
| No secrets in image | Security |
| `HEALTHCHECK` | Orchestrator awareness |
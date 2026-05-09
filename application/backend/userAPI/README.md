use type ORM  or sequelize to manage sql query
use express validator as a middleware
use logger as a middleware
---
Here’s a production-ready `Dockerfile` for an Express.js app using the latest Node.js LTS version, running as a non-root user, and supporting database credentials through environment variables.

```dockerfile
# Use the latest Node.js LTS image
FROM node:lts-alpine

# Create app directory
WORKDIR /app

# Create a non-root user and group
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Copy package files first for better layer caching
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application source
COPY . .

# Change ownership of the app files
RUN chown -R appuser:appgroup /app

# Switch to non-root user
USER appuser

# Expose application port
EXPOSE 3000

# Environment variables (can be overridden at runtime)
ENV NODE_ENV=production
ENV DB_HOST=localhost
ENV DB_PORT=5432
ENV DB_USER=myuser
ENV DB_PASSWORD=mypassword
ENV DB_NAME=mydatabase

# Start the application
CMD ["node", "server.js"]
```

Example Express.js database config:

```javascript
const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};

console.log(dbConfig);
```

Build the image:

```bash
docker build -t my-express-app .
```

Run the container with environment variables:

```bash
docker run -d \
  -p 3000:3000 \
  -e DB_HOST=mydbhost \
  -e DB_PORT=5432 \
  -e DB_USER=myuser \
  -e DB_PASSWORD=secret \
  -e DB_NAME=mydatabase \
  my-express-app
```

You can also use a `.env` file:

`.env`

```env
DB_HOST=mydbhost
DB_PORT=5432
DB_USER=myuser
DB_PASSWORD=secret
DB_NAME=mydatabase
```

Run with:

```bash
docker run --env-file .env -p 3000:3000 my-express-app
```

Recommended `.dockerignore`:

```gitignore
node_modules
npm-debug.log
Dockerfile
.dockerignore
.git
.gitignore
.env
```

If you want, I can also provide:

* a multi-stage optimized Dockerfile
* a Docker Compose setup with PostgreSQL/MySQL
* a Kubernetes deployment manifest
* a NestJS-specific version
* a distroless secure image version

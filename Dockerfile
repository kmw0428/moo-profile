# Build stage
FROM node:18 AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies,
RUN npm ci

# Copy the rest of the code
COPY . .

# Build the app
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy the build output to replace the default nginx contents
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/templates/default.conf.template

# Set default PORT
ENV PORT=8080

# Use environment variables in nginx config and start nginx
CMD ["sh", "-c", "envsubst '$PORT' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"]
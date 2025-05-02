# Dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files first
COPY package*.json ./

# Clean install dependencies
RUN npm ci --verbose

# Copy the rest of the application
COPY . .

# Build the application
RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]
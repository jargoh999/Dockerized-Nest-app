# Dockerfile
FROM node:latest

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

# Ensure initialization scripts are executable
RUN if [ -d "postgres-init" ]; then \
    chmod +x postgres-init/*.sh; \
    fi

EXPOSE 3000

CMD ["npm", "run", "start:dev"]
FROM node:14.3.0

WORKDIR /app

# Dependencies
COPY package*.json ./
RUN npm install

# Source Code
COPY . .
ENTRYPOINT npm run serve
FROM node:14.3.0

WORKDIR /data

# Dependencies
COPY package*.json ./
RUN npm install

COPY . .

ENTRYPOINT npm run serve
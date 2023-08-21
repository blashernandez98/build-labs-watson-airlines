# Import NodeJS image
FROM --platform=linux/amd64 node:current-alpine as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the files to the working directory
COPY . .

# Vite build
RUN npm run build

# Command to start your Express server
CMD [ "node", "server.js" ]

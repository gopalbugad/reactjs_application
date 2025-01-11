# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy files
COPY package.json ./
RUN npm install
COPY . .

# Expose port and start the React app
EXPOSE 3000
CMD ["npm", "start"]

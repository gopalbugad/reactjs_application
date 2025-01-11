# Base image
FROM node:16

# Set working directory
WORKDIR /app

# Copy files
COPY package.json ./
RUN npm install
COPY . .

# Expose port and start server
EXPOSE 5000
CMD ["npm", "start"]

FROM node:20.9.0
WORKDIR /app

# Copy package.json and package-lock.json (ensures correct dependency versions)
COPY package.json package-lock.json ./

# Use `npm ci` instead of `npm install` for more predictable builds
RUN npm ci

# Copy all files AFTER dependencies are installed (optimizes caching)
COPY . .

# Expose the API port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]

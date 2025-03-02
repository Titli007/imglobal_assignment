FROM node:20.9.0
WORKDIR /app
COPY package.json ./
RUN yarn
COPY . .
RUN yarn run build
EXPOSE 3000
CMD ["yarn", "dev"]

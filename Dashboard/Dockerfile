FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
# This line ensures the built React files are moved to where Nginx looks for them
COPY --from=build /app/build /usr/share/nginx/html
# Standard Nginx port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN node -v
RUN npm -v
RUN ls -la node_modules/.bin || true
RUN npx tsc --version || true

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
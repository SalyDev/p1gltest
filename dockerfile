FROM node:20 AS build

WORKDIR /app

COPY package*.json ./

RUN npm cache clean --force
RUN npm install --verbose

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
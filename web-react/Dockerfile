FROM node:16.8.0 AS build

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:latest

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=build /usr/src/app/build/* ./

ENTRYPOINT ["nginx", "-g", "daemon off;"]
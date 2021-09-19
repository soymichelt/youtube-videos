FROM node:16.8.0 AS empaquetador

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

RUN npm run build

FROM nginx:latest AS servidorweb

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=empaquetador /usr/src/app/build/* ./

ENTRYPOINT ["nginx", "-g", "daemon off;"]
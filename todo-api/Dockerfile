FROM node:16.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

ENV API_PORT=9000

EXPOSE 9000

CMD ["npm", "run", "start"]
FROM node:16.8.0

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./ ./

EXPOSE 8000

CMD ["npm", "run", "index.js"]
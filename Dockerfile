FROM node:alpine3.24

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run test:ci

CMD [ "npm", "start" ]
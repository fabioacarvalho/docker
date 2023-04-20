FROM node:alpine

WORKDIR /usr/docker-app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","run","dev"]
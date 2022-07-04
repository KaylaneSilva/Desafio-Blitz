FROM node:16-alpine

WORKDIR /app/front

COPY package.json /app/front

RUN npm install

COPY . /app/front

EXPOSE 3001

CMD [ "npm", "start"]
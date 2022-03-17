FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

# RUN npm install --only=development

COPY . .

CMD yarn start:dev
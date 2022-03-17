FROM node:16-alpine

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

# RUN npm install --only=development

COPY . .

USER node

CMD yarn start:dev
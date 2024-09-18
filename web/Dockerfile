# develop stage
FROM node:lts-alpine as develop-stage
RUN npm install -g http-server
WORKDIR /usr/src/web
COPY package*.json ./

RUN ls

RUN npm install

RUN npm install -g @vue/cli

RUN npm rebuild node-sass

COPY . .

EXPOSE 8080

# # build stage
# FROM develop-stage as build-stage
# CMD ["npm", "run", "build"]

# production stage
# TODO
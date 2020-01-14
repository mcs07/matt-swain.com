FROM node:13.6.0 AS build

WORKDIR /matt-swain

RUN npm install -g gatsby-cli

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN gatsby build

FROM nginx:1.17.7

COPY --from=build /matt-swain/public /usr/share/nginx/html

FROM node:8.9.4-alpine

RUN mkdir /web

WORKDIR /web

COPY ./app /web/app
COPY ./.babelrc /web
COPY ./.eslintrc /web
COPY ./package.json /web
COPY ./yarn.lock /web

RUN yarn install

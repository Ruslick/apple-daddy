FROM node:18-alpine3.15

COPY ./package*.json /front-end/

WORKDIR /front-end

RUN npm i

COPY . /front-end

EXPOSE 3000

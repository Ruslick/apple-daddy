FROM node:18-alpine3.15

COPY package*.json /back-end/

WORKDIR /back-end

RUN npm install

COPY . ./

EXPOSE 4100

ARG PORT

ENV PORT=${PORT}

# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /
COPY . .

RUN npm install

run npm run build

EXPOSE 3000

CMD ["npm","run","start"]
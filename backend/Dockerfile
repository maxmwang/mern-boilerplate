FROM node:lts-buster-slim

WORKDIR /backend

COPY package.json .
COPY package-lock.json .

RUN ["npm", "ci"]

COPY . .

CMD ["npm", "run", "dev"]

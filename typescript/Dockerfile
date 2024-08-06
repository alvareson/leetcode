FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json /app/

RUN pnpm install
RUN npm install -g typescript
RUN npm install -g ts-node

COPY . /app

CMD ["/bin/sh"]
FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

COPY package*.json /app/

RUN pnpm install
RUN npm install -g typescript
RUN npm install -g ts-node

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

RUN echo "alias ll='ls -l'" >> ~/.bashrc
COPY . /app

CMD ["/bin/sh"]
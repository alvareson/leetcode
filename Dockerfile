FROM node:18-alpine

WORKDIR /app

RUN npm install -g pnpm

RUN mkdir -p /usr/local/pnpm-global /usr/local/pnpm-store
ENV PNPM_HOME=/usr/local/pnpm-global
ENV PNPM_STORE_DIR=/usr/local/pnpm-store
ENV PATH=$PNPM_HOME:$PATH

COPY package*.json pnpm-lock.yaml ./

RUN pnpm install --frozen-lockfile
RUN pnpm add -g typescript ts-node

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]

COPY . .

CMD ["/bin/ash", "-l"]

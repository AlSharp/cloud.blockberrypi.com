FROM node:16-alpine AS deps
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
COPY ./package.json ./yarn.lock ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install

FROM node:16-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /opt/node_modules ./node_modules
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn build

FROM node:16-alpine AS runner
RUN apk add vips-dev
RUN rm -rf /var/cache/apk/*
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/app
RUN addgroup -g 1001 -S nodejs
RUN adduser -S strapi -u 1001
COPY --from=builder --chown=strapi:nodejs /app ./

ENV PATH /opt/node_modules/.bin:$PATH

USER strapi

EXPOSE 1337

CMD [ "yarn", "start" ]

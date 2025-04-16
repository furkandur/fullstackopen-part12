FROM node:20.19.0-bullseye-slim AS build

WORKDIR /usr/src/app

USER node

COPY --chown=node:node . .

RUN npm ci

ENV NODE_ENV=production

RUN npm run build

FROM nginx:1.25-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html
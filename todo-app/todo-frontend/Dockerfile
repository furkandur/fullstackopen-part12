FROM node:20 AS base

WORKDIR /usr/src/app

COPY --chown=node:node . .

USER node

ENV VITE_BACKEND_URL=//localhost:3000

RUN npm ci

RUN npm run build


FROM base AS test-stage

ENV NODE_ENV=test

USER node

RUN npm run test


FROM nginx:1.25-alpine

COPY --from=test-stage /usr/src/app/dist /usr/share/nginx/html
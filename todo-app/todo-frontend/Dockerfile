#BASE
FROM node:20 AS base
WORKDIR /usr/src/app
COPY --chown=node:node . .
USER node
RUN npm ci

#TEST
FROM base AS test
ENV NODE_ENV=test
RUN npm run test

#BUILD
FROM base AS build
ENV NODE_ENV=production
RUN npm run build

# SERVE
FROM nginx:1.25-alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
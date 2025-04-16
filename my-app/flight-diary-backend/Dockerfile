FROM node:20.19.0-bullseye-slim

WORKDIR /usr/src/app

USER node

COPY --chown=node:node . .

RUN npm ci --only=production

ENV NODE_ENV=production

CMD [ "npm", "run", "start" ]
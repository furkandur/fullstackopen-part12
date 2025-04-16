FROM node:20.9.0-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

ENV NODE_ENV=production
ENV DEBUG=playground:*
ENV MONGO_URL=mongodb://root:example@localhost:3456/the_database?authSource=admin
ENV REDIS_URL=//localhost:6379

USER node

CMD ["npm", "start"]

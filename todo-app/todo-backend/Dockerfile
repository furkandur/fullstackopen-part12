FROM node:20.9.0-bullseye-slim

WORKDIR /usr/src/app

COPY --chown=node:node . .

RUN npm ci --only=production

ENV NODE_ENV=production
ENV DEBUG=playground:*

USER node

CMD ["npm", "start"]

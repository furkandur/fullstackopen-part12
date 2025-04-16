FROM node:20.19.0-bullseye-slim

WORKDIR /usr/src/app

COPY . .

ENV NODE_ENV=development

RUN npm install

CMD ["npm", "run", "dev", "--", "--host"]

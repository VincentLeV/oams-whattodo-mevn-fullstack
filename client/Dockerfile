FROM node:16@sha256:c33a8221330d87a2113fb6cdbb8fbb243592c62f89de923e9ef5bb8b627c2b9d as builder

WORKDIR /usr/src/app/

COPY --chown=node:node . .

RUN yarn install --frozen-lockfile

ENV BACKEND_URL=/api/

RUN yarn build

RUN npm install -g serve

USER node

CMD serve -s dist

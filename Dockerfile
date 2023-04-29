FROM node:14.3-alpine

WORKDIR /usr/src/app

COPY package.json bower.json .bowerrc .npmrc ./

RUN apk add git curl && \
    yarn install -q

ENV PORT 8000
EXPOSE 8000

ARG VERSION
ENV VERSION $VERSION

COPY . ./

CMD [ "node", "server" ]

FROM node:26-alpine

WORKDIR /usr/src/app

COPY package.json bower.json .bowerrc .npmrc ./

# node:26 images no longer ship yarn
RUN apk add --no-cache git curl && \
    npm install -g --ignore-scripts yarn@1.22.22 && \
    yarn install -q

ENV PORT=8000
EXPOSE 8000

ARG VERSION
ENV VERSION=$VERSION

COPY . ./

CMD [ "node", "server" ]

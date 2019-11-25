FROM node:10.15-slim

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user

ENV TZ=Asia/Taipei
WORKDIR /usr/src/react

RUN set -x \
    && apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates graphicsmagick imagemagick\
    && rm -rf /var/lib/apt/lists/*

# Copy source files
COPY . .
RUN mv config-for-docker-build.js config.js

# Set time zone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3000 3030
CMD NODE_ENV=production SOCKETIO_PORT=3030 node keystone.js

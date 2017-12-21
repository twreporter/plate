FROM node:4.4-slim

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user

ENV REACT_SOURCE /usr/src/react/
ENV TZ=Asia/Taipei
WORKDIR $REACT_SOURCE

RUN set -x \
    && apt-get update \
    && apt-get install -y vim \
    && apt-get install -y build-essential \
    && apt-get install -y apt-transport-https \
    && apt-get install -y --no-install-recommends curl ca-certificates \
    && apt-get install -y git \
    && apt-get install -y graphicsmagick \
    && apt-get install -y imagemagick \
    && rm -rf /var/lib/apt/lists/*

RUN buildDeps=' \
    gcc \
    make \
    python \
    ' \
    && set -x \
    && apt-get update && apt-get install -y $buildDeps --no-install-recommends && rm -rf /var/lib/apt/lists/*  

# Install PM2
RUN npm install -g pm2
RUN pm2 install pm2-logrotate
RUN pm2 set pm2-logrotate:retain 7
RUN pm2 set pm2-logrotate:compress true
RUN pm2 set pm2-logrotate:rotateInterval '0 3 * * *'

# Copy source files
COPY . $REACT_SOURCE
RUN cd $REACT_SOURCE
RUN npm install 

# Set time zone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3000
CMD pm2 start --no-daemon keystone.js

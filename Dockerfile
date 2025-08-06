FROM node:10.15-slim

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user

ENV TZ=Asia/Taipei
WORKDIR /usr/src/react

# 使用 archive.debian.org + 忽略過期簽章
RUN set -x \
    && echo 'deb http://archive.debian.org/debian stretch main contrib non-free' > /etc/apt/sources.list \
    && echo 'deb http://archive.debian.org/debian-security stretch/updates main contrib non-free' >> /etc/apt/sources.list \
    && echo 'Acquire::Check-Valid-Until "false";' > /etc/apt/apt.conf.d/99ignore-check-valid-until \
    && echo 'Acquire::AllowInsecureRepositories "true";' > /etc/apt/apt.conf.d/99allow-insecure \
    && echo 'APT::Get::AllowUnauthenticated "true";' > /etc/apt/apt.conf.d/99allow-unauthenticated \
    && apt-get -o Acquire::AllowInsecureRepositories=true \
               -o APT::Get::AllowUnauthenticated=true update \
    && apt-get install -y --no-install-recommends \
       ca-certificates \
       graphicsmagick \
       imagemagick \
    && rm -rf /var/lib/apt/lists/*

# Copy source files
COPY . .
RUN mv config-for-docker-build.js config.js

# Set time zone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3000 3030
CMD NODE_ENV=production SOCKETIO_PORT=3030 node keystone.js

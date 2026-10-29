FROM node:10.15.3-slim AS base

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

# Install from the lockfile; never copy a developer's node_modules.
FROM base AS build
RUN npm install --global --force yarn@1.22.22
COPY package.json yarn.lock ./
RUN yarn install --production --frozen-lockfile --non-interactive
COPY scripts/check-admin-bundles.js scripts/check-admin-bundles.js
RUN node scripts/check-admin-bundles.js

FROM base AS runtime
ENV NODE_ENV=production PORT=3000
COPY --from=build /usr/src/react/node_modules ./node_modules
COPY package.json keystone.js config-for-docker-build.js ./
COPY client ./client
COPY lib ./lib
COPY models ./models
COPY public ./public
COPY routes ./routes
COPY templates ./templates
RUN mv config-for-docker-build.js config.js \
    && chown -R user:user /usr/src/react \
    && ln -snf /usr/share/zoneinfo/$TZ /etc/localtime \
    && echo $TZ > /etc/timezone
USER user
EXPOSE 3000
CMD ["node", "keystone.js"]

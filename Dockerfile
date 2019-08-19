FROM thereporter/keystone-base-image:1.0.0

RUN groupadd user && useradd --create-home --home-dir /home/user -g user user

ENV TZ=Asia/Taipei
WORKDIR /usr/src/react

RUN set -x \
    && apt-get update \
    && apt-get install -y --no-install-recommends ca-certificates graphicsmagick imagemagick\
    && rm -rf /var/lib/apt/lists/*

# Install PM2
RUN yarn global add --ignore-engines pm2@3.2.2
RUN pm2 install pm2-logrotate@2.2.0
RUN pm2 set pm2-logrotate:retain 7
RUN pm2 set pm2-logrotate:compress true
RUN pm2 set pm2-logrotate:rotateInterval '0 3 * * *'

# Copy source files
COPY . .
RUN yarn install --ignore-engines --frozen-lockfile

# Set time zone
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

EXPOSE 3000
CMD pm2 start --no-daemon keystone.js

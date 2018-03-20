# Set default image base
FROM node:8.10.0

MAINTAINER Dominic Lee <dominiclee0512@gmail.com>

ADD . /app

WORKDIR /app

RUN yarn --pure-lockfile

# expose port 8081
EXPOSE 8081

CMD ["yarn", "dev"]

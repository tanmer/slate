FROM alpine:3.7
RUN echo https://mirrors.aliyun.com/alpine/v3.7/main/ > /etc/apk/repositories
RUN apk --update --virtual sdk add ruby-dev alpine-sdk libffi-dev libxml2-dev
RUN apk --update add ruby nodejs git ruby-io-console ruby-bundler ruby-json
WORKDIR /app/
ADD Gemfile* /app/
RUN bundle install --without=development
RUN apk del sdk
CMD middleman
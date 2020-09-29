#!/bin/bash
/bin/echo "$1 배포시작"

cp .env .env.temp
cp .env.$1 .env

/bin/echo "$1 composer install.."

composer install

echo "$1 람다 업로드 시작"

serverless deploy -s "$1"

rm .env
mv .env.temp .env

/bin/echo "$1 람다 업로드 완료"

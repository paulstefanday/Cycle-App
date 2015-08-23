# Cycle Vote

## About
App to submit reports on bike accidents

## Run
1. rethinkdb
2. npm start
3. npm server

## Server
test: 54.153.229.210 -i funkey.pem
NODE_ENV=prod PORT=3000 pm2 start server.js --node-args="--harmony"

## Todo
0. prepopulate database
1. get map working
2. get auto find location working
3. get basic feed loading into map
4. get report form working
5. get feed from within a location
6. add nav directive
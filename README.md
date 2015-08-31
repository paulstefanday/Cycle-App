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
- combine server/client config?
- get feed from within a location
- get working on mobile
- make gradient radial
- make animations more smooth
- prepopulate database
- clean our unused deps
- seperate client/server into 2 distinct packages?

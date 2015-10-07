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
- get feed from within a location
- mouse over pointer and see: time, headline(what happened)
- click on pointer and it goes to full report
- view reports page to edit/add more info
- two buttons, one for current locatino, other for another location
- add custom location form
- update branding

- get it working on mobile (iOS 6)
- combine server/client config?
- make gradient radial
- clean our unused deps
- seperate client/server into 2 distinct packages?

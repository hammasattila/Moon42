# Moon42 - Application assigment

THe applications were written using NodeJS 16.

## Run the applications

First clone the repository then use the following command.

```bash
npm i -g typescript
(cd server; npm i; npm start &) && (cd client; npm i; npm run serve)
```

You can configure the api port by using .env files.

server/.env:

```
PORT=8000
```

client/.env:

```
VUE_APP_API_URL=http://localhost:8000
```

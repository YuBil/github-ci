# API sample endpoint + swagger + Dredd

## Local usage
Install dependencies `npm i`  
Run server in background `node index.js &`  
Run Dredd against schema from `swagger-build` folder:
```Docker
docker run --rm -v ${PWD}:/api -w /api --network host apiaryio/dredd \
    dredd swagger-build/openapi-2.yml http://localhost:3000
```   

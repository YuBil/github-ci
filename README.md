# API sample endpoint + swagger + Dredd

## Local usage
1. Install dependencies `npm i`  
2. Run server in background `node index.js &`  
3. Run Dredd against schema from `swagger-build` folder:
```bash
docker run --rm -v ${PWD}:/api -w /api --network host apiaryio/dredd \
    dredd swagger-build/openapi-2.yml http://localhost:3000
```   
4. (Optional) Convert OA-3 => OA-2
```bash
node_modules/.bin/api-spec-converter \
    --from=openapi_3 --to=swagger_2 --syntax=yaml --order=alpha \
    swagger-build/openapi-3-new.yml > swagger-build/openapi-3-parsed.yml
```
5. (Optional) Run Dredd on parsed schema
```bash
docker run --rm -v ${PWD}:/api -w /api --network host apiaryio/dredd \
    dredd swagger-build/openapi-3-parsed.yml http://localhost:3000
```  

## Schemas in swagger-build
`openapi-2.yml` - contains schema compatible with OA-2  

`openapi-3.yml` - contains schema OA-3 syntax compatible with OA-2

`openapi-3-new.yml` - contains schema OA-3 syntax that **breaks** backward compatibility with OA-2

`openapi-3-parsed.yml` - OA-3 schema converted to OA-2 (Dredd won't process it)

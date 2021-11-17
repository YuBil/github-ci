const { Fury } = require('fury');
const openapi3Adapter = require('@apielements/openapi3-parser');

const fury = new Fury();

// Add the OpenAPI 3 Adapter to Fury
fury.use(openapi3Adapter);

fury.parse({source: '../swagger-build/openapi-3.yml'}, (err, parseResult) => {
    if (err) console.error(err)
    // console.log(parseResult);
});
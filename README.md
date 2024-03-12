# security-search-node

This is a simple Node.js express app to index sample JSON data and provide a search endpoint.

The sample JSON data can be found [here](app/static/samples)

The index is created at startup and found in this file: [here](app/components/security/security-repository.js)

The route file for loading and searching is here: [here](app/components/security/security-router.js)

To run this app:
```bash
cd app
npm start
```

or you can use the docker-compose file, which I don't have working quite yet
```bash
docker-compose up -d
```

By default, the server is listening for requests on port 8080 and expects a Redis server with JSON and Search enabled at port 6379.

You can change all that in the `.env` file or set external environment variables. See this [file](.env.example) for an example.

To load data use this endpoint: http://localhost:8080/security/load

To search data use this endpoint: http://localhost:8080/security/search?term=t where `t` is the search term. It searches cusip, name, id, symbol, and isin

To reset use this endpoint: http://localhost:8080/reset

Have fun.
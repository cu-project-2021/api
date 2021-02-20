const {ApolloServer} = require("apollo-server");
const path = require('path');
const fs = require('fs');
const resolvers = require('./resolvers');


const server  = new ApolloServer({
    typeDefs: fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf-8'),
    resolvers
});

server.listen(process.env.PORT || 3000)
    .then(({url}) => {
        console.log(`Server started at url ${url}`)
    })
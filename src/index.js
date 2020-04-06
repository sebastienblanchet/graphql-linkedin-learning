import express from 'express';
import graphqlHTTP from 'express-graphql';
import schema from './schema';

const app = express();

app.get('/', (req, res) => {
  res.send('GraphQL is amazing!');
});

// resolver for grapgql, fxn that returns data
const root = {
  hello: () => "Hi, I'm Manny"
};

// use similar to express
app.use('/graphql', graphqlHTTP({
  // import from buildScheme
  schema: schema,
  // resolver
  rootValue: root,
  graphiql: true,
}))

app.listen(8080, () => console.log('Running server on port localhost:8080/graphql'));
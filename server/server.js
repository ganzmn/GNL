const Koa = require('./node_modules/koa');

const mount = require('./node_modules/koa-mount');
const graphqlHTTP = require('./node_modules/koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');

initDB();

const app = new Koa();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

app.use(mount('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
})))

app.on('error', err => {
  log.error('server error', err)
});
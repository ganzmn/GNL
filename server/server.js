const Koa = require('./node_modules/koa');
const cors = require('@koa/cors');
const mount = require('./node_modules/koa-mount');
const graphqlHTTP = require('./node_modules/koa-graphql');
const schema = require('./graphql/schema');
const initDB = require('./database');

initDB();

const app = new Koa();

const PORT = process.env.PORT || 3000;

const whitelist = ['http://localhost:8080'];

function checkOriginAgainstWhitelist(ctx) {
    const requestOrigin = ctx.accept.headers.origin;
    if (!whitelist.includes(requestOrigin)) {
        return ctx.throw(`${requestOrigin} is not a valid origin`);
    }
    return requestOrigin;
 }
app.use(cors({ origin: checkOriginAgainstWhitelist }));

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


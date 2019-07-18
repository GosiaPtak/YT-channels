const path = require('path');
const mount = require('koa-mount');
const Koa = require('koa');
const koaStatic = require('koa-static');
const getPort = require('get-port');

async function runServer() {
    const port = await getPort({ port: 3000 });

    const app = new Koa();
    app.use(koaStatic('src/static'));
    app.use(mount('/src/', koaStatic('src/'), {defer: true}));
    app.use(mount('/src/styles', koaStatic('src/styles')));
    app.use(mount('/src/scripts', koaStatic('src/scripts')));
    app.use(mount('/src/components', koaStatic('src/components')));
    app.use(mount('/src/shared', koaStatic('src/shared')));

    app.listen(port);

    console.log(`server started at http://localhost:${port}/`);
}

runServer().catch(console.error);
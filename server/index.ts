import Koa from "koa";
import Router from "koa-router";
import next from "next";
const bodyPaser = require('koa-bodyparser')
/** Router */
import Background from './routes/background.routes';

const port = parseInt((process as any).env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const server = new Koa();
const router = new Router();
/** middleware */
server
.use(bodyPaser());

app.prepare().then(() => {
  server.use(Background.routes());
  router.get("*", async ctx => {
    await handle(ctx.req, ctx.res);
    ctx.respond = false;
    ctx.res.statusCode = 200;
  });

  server
    .use(router.routes())
    .use(router.allowedMethods());

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});

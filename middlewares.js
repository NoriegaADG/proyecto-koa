export async function setFinalResponseMdw(ctx, next) {
  await next();
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
}

export async function setFinalResponseTimeMdw(ctx, next) {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
}

//Exportar mis middlewares con commonjs
//module.exports = {
//  setFinalResponseMdw,
//  setFinalResponseTimeMdw,
//}
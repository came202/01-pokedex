import * as Router from 'koa-router';
import { POKEMON } from '../shared/constant/router.constant';
import { Context } from "koa";

const router = new Router();

router.get(POKEMON.URL, async (ctx: Context) => {
  ctx.set('Cache-Control', 'no-cache');
  ctx.status = 200;
  ctx.body = {
    status: 'UP'
  };
});

export const pokemonRoutes = router.routes();
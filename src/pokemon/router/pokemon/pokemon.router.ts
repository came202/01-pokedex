import * as Router from 'koa-router';
import { POKEMON_ROUTE } from '../../shared/constant/router.constant';
import { pokemonMiddleware } from '../../core/middleware/pokemon/pokemon.middleware';

const router = new Router();

router.get(POKEMON_ROUTE.URL, pokemonMiddleware);

export const pokemonRouter = router.routes();
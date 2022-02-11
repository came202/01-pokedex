import { Context } from 'Koa';
import { HTTP_200 } from '../../../../shared/constant/http.constant';
import { Pokemon } from '../../../shared/model/pokemon/pokemon.model';
import { pokemonController } from '../../controller/pokemon/pokemon.controller';


export const pokemonMiddleware = async (ctx: Context) => {
  try {
    const { params } = ctx;
    const pokemonName: string = params.pokemonName.toString();
    const response: Pokemon = await pokemonController(pokemonName);
    ctx.status = HTTP_200.code;
    ctx.body = response;
  } catch (error) {
    ctx.status = error.status;
    ctx.body = error.message;
  }
}
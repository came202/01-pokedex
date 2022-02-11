import axios from 'axios';
import { POKEMON_SERVICE } from '../../../shared/constant/external-service.constant';
import { Pokemon } from '../../../shared/model/pokemon/pokemon.model';

const getAxios = async (url: string): Promise<any> => {
  const response = await axios.get(url);
  return response.data;
}

export const pokemonController = async (pokemonName: string): Promise<Pokemon> => {
  const response = await getAxios(`${POKEMON_SERVICE.URL}${pokemonName}`);
  const pokemon: Pokemon = { ...response };
  return pokemon;
}
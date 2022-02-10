import { Router } from "../model/router/router.model"

export const POKEMON: Router = {
  URL: 'https://pokeapi.co/api/v2/pokemon/:pokemonName/'
}

export const ABILITY: Router = {
  URL: 'https://pokeapi.co/api/v2/ability/:pokemonName/'
}
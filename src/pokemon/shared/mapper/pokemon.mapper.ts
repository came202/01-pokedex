import { Pokemon } from '../model/pokemon/pokemon.model';

export const pokemonMapper = (data: any): Pokemon => {
  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    base_experience: data.base_experience,
    height: data.height,
    is_default: data.is_default,
    order: data.order,
    weight: data.weight,
    abilities: data.abilities,
    forms: data.forms,
    game_indices: data.game_indices,
    held_items: data.held_items,
    location_area_encounters: data.location_area_encounters,
    moves: data.moves,
    past_types: data.past_types,
    sprites: data.sprites,
    species: data.species,
    stats: data.stats,
    types: data.types
  };

  return pokemon;
}
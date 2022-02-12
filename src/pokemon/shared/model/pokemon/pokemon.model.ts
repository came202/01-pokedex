import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';
import { VersionGameIndex } from '../../../../shared/model/version-game-index.model';
import { PokemonAbility } from './pokemon-ability.model';
import { PokemonHeldItem } from './pokemon-hield-item.model';
import { PokemonMove } from './pokemon-move.model';
import { PokemonSprites } from './pokemon-sprites.model';
import { PokemonStat } from './pokemon-stat.model';
import { PokemonTypePast } from './pokemon-type-past.model';
import { PokemonType } from './pokemon-type.model';

export interface Pokemon {
  id: number; name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<PokemonAbility>;
  forms: NamedAPIResource;
  game_indices: Array<VersionGameIndex>;
  held_items: Array<PokemonHeldItem>;
  location_area_encounters: string;
  moves: Array<PokemonMove>;
  past_types: Array<PokemonTypePast>;
  sprites: PokemonSprites;
  species: NamedAPIResource;
  stats: Array<PokemonStat>;
  types: Array<PokemonType>;
}

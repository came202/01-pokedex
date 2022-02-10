import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';
import { PokemonType } from './pokemon-type.model';

export interface PokemonTypePast {
  generation: NamedAPIResource;
  types: Array<PokemonType>;
}
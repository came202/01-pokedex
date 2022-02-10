import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';
import { PokemonMoveVersion } from './pokemon-move-version.model';

export interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: Array<PokemonMoveVersion>;
}
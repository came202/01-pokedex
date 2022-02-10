import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';
import { PokemonHeldItemVersion } from './pokemon-held-item-version.model';

export interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion;
}
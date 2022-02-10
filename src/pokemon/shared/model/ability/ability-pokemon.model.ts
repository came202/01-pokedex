import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: NamedAPIResource;
}
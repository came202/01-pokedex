import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}
import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';

export interface PokemonStat {
  PokemonStat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

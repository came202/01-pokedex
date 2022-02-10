import { Name } from '../../../../shared/model/name.model';
import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';
import { VerboseEffect } from '../../../../shared/model/verbose-effect.model';
import { AbilityEffectChange } from './ability-effect-change.model';
import { AbilityFlavorText } from './ability-flavor-text.model';
import { AbilityPokemon } from './ability-pokemon.model';

export interface Ability {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: NamedAPIResource;
  names: Array<Name>;
  effect_entries: Array<VerboseEffect>;
  effect_changes: Array<AbilityEffectChange>;
  flavor_text_entries: Array<AbilityFlavorText>;
  pokemon: Array<AbilityPokemon>;
}
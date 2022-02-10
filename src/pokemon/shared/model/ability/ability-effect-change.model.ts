import { Effect } from '../../../../shared/model/effect.model';
import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';

export interface AbilityEffectChange {
  effect_entries: Array<Effect>;
  version_group: NamedAPIResource;
}
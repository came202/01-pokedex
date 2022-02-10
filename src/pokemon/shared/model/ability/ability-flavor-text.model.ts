import { NamedAPIResource } from '../../../../shared/model/named-api-resource.model';

export interface AbilityFlavorText {
  flavor_text: string;
  language: NamedAPIResource;
  version_group: NamedAPIResource;
}
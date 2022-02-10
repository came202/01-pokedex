import { NamedAPIResource } from './named-api-resource.model';

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: NamedAPIResource;
}
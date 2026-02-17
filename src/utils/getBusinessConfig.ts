import type { BusinessConfig } from '../types/business';
import { emithramConfig } from '../config/businesses/emithram';
import { universalTaxConfig } from '../config/businesses/universal-tax';
import { insuranceConfig } from '../config/businesses/insurance';
import { emithramConfigMl } from '../config/businesses/emithram.ml';
import { universalTaxConfigMl } from '../config/businesses/universal-tax.ml';
import { insuranceConfigMl } from '../config/businesses/insurance.ml';

const businessConfigs: Record<string, BusinessConfig> = {
  'emithram': emithramConfig,
  'universal-tax': universalTaxConfig,
  'insurance': insuranceConfig
};

const businessConfigsMl: Record<string, BusinessConfig> = {
  'emithram': emithramConfigMl,
  'universal-tax': universalTaxConfigMl,
  'insurance': insuranceConfigMl
};

export function getBusinessConfig(slug: string, locale: string = 'en'): BusinessConfig | undefined {
  if (locale === 'ml') {
    return businessConfigsMl[slug];
  }
  return businessConfigs[slug];
}

export function getAllBusinessSlugs(): string[] {
  return Object.keys(businessConfigs);
}

export function getAllBusinessConfigs(locale: string = 'en'): BusinessConfig[] {
  if (locale === 'ml') {
    return Object.values(businessConfigsMl);
  }
  return Object.values(businessConfigs);
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  icon?: string;
  detailContent?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  whatsapp?: string;
  mapUrl?: string;
  workingHours?: string;
  facebook?: string;
}

export interface BusinessSection {
  type: 'hero' | 'facebook' | 'services' | 'contact' | 'custom';
  enabled: boolean;
  order: number;
  config?: Record<string, any>;
}

export interface BusinessConfig {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  logo?: string;
  heroImage?: string;
  services: Service[];
  contact: ContactInfo;
  social?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
  sections: BusinessSection[];
}

export interface PersonInfo {
  name: string;
  title: string;
  bio: string;
  photo?: string;
  contact: ContactInfo;
  social?: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}

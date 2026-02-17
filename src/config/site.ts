import type { PersonInfo } from '../types/business';

export const siteConfig = {
  name: 'Nijo Johny',
  url: 'https://nijojo.com',
  description: 'Personal brand and business hub for Nijo Johny',
  defaultLocale: 'en',
  locales: ['en', 'ml'],
};

export const personInfo: PersonInfo = {
  name: 'Nijo Johny',
  title: 'E-Governance, Tax, and Insurance Solutions',
  bio: 'I help individuals and businesses navigate e-governance, taxation, and insurance with clarity, trust, and professionalism.',
  photo: '/images/nijo-johny.jpg',
  contact: {
    phone: '+91 9847461054',
    email: 'emithramthankalam@gmail.com',
    address: 'Kothamangalam, Kerala, India',
    whatsapp: '+91 9847461054',
  },
  social: {
    linkedin: '',
    facebook: 'https://www.facebook.com/profile.php?id=61578747995052',
    twitter: '',
  },
};

export const businesses = [
  {
    slug: 'emithram',
    name: 'e-Mithram',
    shortDescription: 'Fast, reliable access to essential government services — made simple and hassle-free.',
  },
  {
    slug: 'universal-tax',
    name: 'Universal Tax',
    shortDescription: 'Accurate compliance, smart accounting, and stress-free tax management for individuals and businesses.',
  },
  {
    slug: 'insurance',
    name: 'Insurance Services',
    shortDescription: 'Secure your life, health, and assets with trusted insurance guidance and complete coverage solutions.',
  },
];

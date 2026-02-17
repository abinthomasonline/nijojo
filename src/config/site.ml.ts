import type { PersonInfo } from '../types/business';

export const siteConfig = {
  name: 'നിജോ ജോണി',
  url: 'https://nijojo.com',
  description: 'നിജോ ജോണിയുടെ പേഴ്സണൽ ബ്രാൻഡും ബിസിനസ്സ് ഹബും',
  defaultLocale: 'en',
  locales: ['en', 'ml'],
};

export const personInfoMl: PersonInfo = {
  name: 'നിജോ ജോണി',
  title: 'ഇ-ഗവേണൻസ്, നികുതി & ഇൻഷുറൻസ് സേവനങ്ങൾ',
  bio: 'ഇ-ഗവേണൻസ്, നികുതി, ഇൻഷുറൻസ് മേഖലകളിൽ വ്യക്തികൾക്കും സ്ഥാപനങ്ങൾക്കും വ്യക്തതയോടും വിശ്വാസത്തോടും കൂടിയ സേവനം നൽകുന്നു.',
  photo: '/images/nijo-johny.jpg',
  contact: {
    phone: '+91 9847461054',
    email: 'emithramthankalam@gmail.com',
    address: 'കോതമംഗലം, കേരളം, ഇന്ത്യ',
    whatsapp: '+91 9847461054',
  },
  social: {
    linkedin: '',
    facebook: 'https://www.facebook.com/profile.php?id=61578747995052',
    twitter: '',
  },
};

export const businessesMl = [
  {
    slug: 'emithram',
    name: 'ഇ-മിത്രം',
    shortDescription: 'പ്രധാന സർക്കാർ സേവനങ്ങൾ വേഗത്തിലും വിശ്വസനീയമായും — ലളിതവും ബുദ്ധിമുട്ടില്ലാത്ത രീതിയിൽ.',
  },
  {
    slug: 'universal-tax',
    name: 'യൂണിവേഴ്സൽ ടാക്സ്',
    shortDescription: 'കൃത്യമായ അനുസരണം, സ്മാർട്ട് അക്കൗണ്ടിംഗ്, വ്യക്തികൾക്കും സ്ഥാപനങ്ങൾക്കും ലളിതമായ നികുതി മാനേജ്മെന്റ്.',
  },
  {
    slug: 'insurance',
    name: 'ഇൻഷുറൻസ് സേവനങ്ങൾ',
    shortDescription: 'വിശ്വസനീയമായ മാർഗ്ഗനിർദ്ദേശത്തോടെ നിങ്ങളുടെ ജീവനും ആരോഗ്യവും സ്വത്തുക്കളും സംരക്ഷിക്കുക.',
  },
];

import type { BusinessConfig } from '../../types/business';

export const emithramConfigMl: BusinessConfig = {
  slug: 'emithram',
  name: 'ഇ-മിത്രം',
  tagline: 'നിങ്ങളുടെ വിശ്വസനീയ ഡിജിറ്റൽ സേവന പങ്കാളി',
  description: 'കോതമംഗലത്ത് വിശ്വസനീയവും കാര്യക്ഷമവുമായ ഡിജിറ്റൽ സേവനങ്ങൾ. സർക്കാർ മുതൽ സ്വകാര്യ സേവനങ്ങൾ വരെ ശ്രദ്ധയോടും പ്രൊഫഷണലിസത്തോടും കൂടി കൈകാര്യം ചെയ്യുന്നു.',
  logo: '/images/emithram-logo.png',
  heroImage: '/images/emithram-hero.jpg',
  ogImage: '/images/og-emithram.jpg',
  services: [
    {
      slug: 'passport-services',
      title: 'പാസ്പോർട്ട് സേവനങ്ങൾ',
      description: 'പുതിയ പാസ്പോർട്ട് അപേക്ഷ, പുതുക്കൽ, തിരുത്തൽ എന്നിവയ്ക്ക് സമഗ്ര മാർഗ്ഗനിർദേശം.',
      icon: '🛂',
      detailContent: 'പുതിയ അപേക്ഷ, പുതുക്കൽ, തിരുത്തൽ, വിലാസമാറ്റം എന്നിവ ഉൾപ്പെടെ എല്ലാ പാസ്പോർട്ട് സേവനങ്ങൾക്കും പൂർണ്ണ സഹായം നൽകുന്നു.'
    },
    {
      slug: 'ration-card-services',
      title: 'റേഷൻ കാർഡ് സേവനങ്ങൾ',
      description: 'പുതിയ റേഷൻ കാർഡ് അപേക്ഷയും കുടുംബ വിവരങ്ങൾ പുതുക്കലും.',
      icon: '🛒',
      detailContent: 'പുതിയ അപേക്ഷ, അംഗങ്ങൾ ചേർക്കൽ/നീക്കം, വിലാസമാറ്റം എന്നിവ ഉൾപ്പെടെയുള്ള എല്ലാ റേഷൻ കാർഡ് സേവനങ്ങൾക്കും സഹായം.'
    },
    {
      slug: 'pan-card-services',
      title: 'പാൻ കാർഡ് സേവനങ്ങൾ',
      description: 'പാൻ കാർഡ് അപേക്ഷ, തിരുത്തൽ, ആധാറുമായി ബന്ധിപ്പിക്കൽ.',
      icon: '💳',
      detailContent: 'പുതിയ പാൻ കാർഡ് അപേക്ഷ, നിലവിലെ കാർഡിൽ തിരുത്തൽ, ആധാർ ലിങ്ക് ചെയ്യൽ, ഇ-പാൻ ഡൗൺലോഡ് എന്നിവയിൽ സഹായം.'
    },
    {
      slug: 'caste-certificate-services',
      title: 'ജാതി സർട്ടിഫിക്കറ്റ് സേവനങ്ങൾ',
      description: 'വിദ്യാഭ്യാസവും തൊഴിൽ ആവശ്യങ്ങൾക്കും ജാതി സർട്ടിഫിക്കറ്റ് അപേക്ഷ.',
      icon: '📋',
      detailContent: 'ജാതി സർട്ടിഫിക്കറ്റ് അപേക്ഷ, പുതുക്കൽ, തിരുത്തൽ, സ്ഥിരീകരണം എന്നിവയ്ക്ക് സഹായം നൽകുന്നു.'
    },
    {
      slug: 'income-certificate-services',
      title: 'വരുമാന സർട്ടിഫിക്കറ്റ് സേവനങ്ങൾ',
      description: 'വിദ്യാഭ്യാസവും സർക്കാർ പദ്ധതികൾക്കുമായി വരുമാന സർട്ടിഫിക്കറ്റ്.',
      icon: '💰',
      detailContent: 'സ്കോളർഷിപ്പ്, സർക്കാർ ആനുകൂല്യങ്ങൾ തുടങ്ങിയ ആവശ്യങ്ങൾക്കായി വരുമാന സർട്ടിഫിക്കറ്റ് ലഭ്യമാക്കുന്നു.'
    },
    {
      slug: 'one-and-same-certificate-services',
      title: 'ഒൺ ആൻഡ് സെയിം സർട്ടിഫിക്കറ്റ്',
      description: 'പേരിലെ വ്യത്യാസങ്ങൾ ഒരേ വ്യക്തിയുടേതാണെന്ന് സ്ഥിരീകരിക്കുന്ന സർട്ടിഫിക്കറ്റ്.',
      icon: '🆔',
      detailContent: 'നിയമപരവും ഔദ്യോഗികവുമായ ആവശ്യങ്ങൾക്കായി പേരിലെ വ്യത്യാസങ്ങൾ ഒരേ വ്യക്തിയുടേതാണെന്ന് തെളിയിക്കുന്ന സർട്ടിഫിക്കറ്റ് നേടാൻ സഹായം.'
    },
    {
      slug: 'encumbrance-certificate-services',
      title: 'എൻകമ്പ്രൻസ് സർട്ടിഫിക്കറ്റ്',
      description: 'സ്വത്ത് ഇടപാടുകൾക്കായുള്ള EC സർട്ടിഫിക്കറ്റ് സേവനങ്ങൾ.',
      icon: '📜',
      detailContent: 'സ്വത്ത് ഇടപാടുകളുടെ ചരിത്രം കാണിക്കുന്ന എൻകമ്പ്രൻസ് സർട്ടിഫിക്കറ്റ് ലഭ്യമാക്കുന്നു.'
    },
    {
      slug: 'possession-certificate-services',
      title: 'കൈയേറ്റ സർട്ടിഫിക്കറ്റ്',
      description: 'ഭൂമിയുടെ ഉടമസ്ഥാവകാശം സ്ഥിരീകരിക്കുന്ന സർട്ടിഫിക്കറ്റ്.',
      icon: '🏡',
      detailContent: 'ഭൂമിയുടെ ഉടമസ്ഥാവകാശം തെളിയിക്കുന്നതിനും നിയമപരമായ രേഖകൾക്കുമായി അപേക്ഷ സഹായം.'
    },
    {
      slug: 'property-tax-services',
      title: 'സ്വത്ത് നികുതി സേവനങ്ങൾ',
      description: 'സ്വത്ത് നികുതി നിർണ്ണയം, അടവ്, സർട്ടിഫിക്കറ്റ്.',
      icon: '🏢',
      detailContent: 'സ്വത്ത് നികുതി വിലയിരുത്തൽ, ഓൺലൈൻ പേയ്മെന്റ്, അടവിന്റെ സർട്ടിഫിക്കറ്റ് എന്നിവയ്ക്ക് സഹായം.'
    },
    {
      slug: 'land-tax-services',
      title: 'ഭൂനികുതി സേവനങ്ങൾ',
      description: 'കൃഷിയിടവും മറ്റു ഭൂമികളും സംബന്ധിച്ച നികുതി സേവനങ്ങൾ.',
      icon: '🌾',
      detailContent: 'ഭൂനികുതി നിർണ്ണയം, അടവ്, സർട്ടിഫിക്കറ്റ് ലഭ്യമാക്കൽ എന്നിവയിൽ സഹായം.'
    },
    {
      slug: 'mini-atm-services',
      title: 'മിനി എ.ടി.എം സേവനങ്ങൾ',
      description: 'പണം പിൻവലിക്കൽ, ബാലൻസ് പരിശോധിക്കൽ, പണമാറ്റം.',
      icon: '🏧',
      detailContent: 'ബാങ്കിൽ പോകാതെ തന്നെ പണം പിൻവലിക്കൽ, ബാലൻസ് പരിശോധിക്കൽ, പണമാറ്റം എന്നിവ.'
    },
    {
      slug: 'insurance-services',
      title: 'ഇൻഷുറൻസ് സേവനങ്ങൾ',
      description: 'ജീവൻ, ആരോഗ്യ, വാഹന ഇൻഷുറൻസ് പോളിസികൾ.',
      icon: '🛡️',
      detailContent: 'വിവിധ ഇൻഷുറൻസ് ഓപ്ഷനുകൾക്കായി വ്യക്തിഗത മാർഗ്ഗനിർദേശം നൽകുന്നു.'
    },
    {
      slug: 'bill-payment-services',
      title: 'ബിൽ പേയ്‌മെന്റ് സേവനങ്ങൾ',
      description: 'വൈദ്യുതി, വെള്ളം, ഗ്യാസ്, മൊബൈൽ റീചാർജ് എന്നിവ.',
      icon: '💸',
      detailContent: 'എല്ലാ പ്രധാന യൂട്ടിലിറ്റി ബില്ലുകളും ഞങ്ങളുടെ കേന്ദ്രത്തിൽ അടയ്ക്കാം.'
    }
  ],
  contact: {
    phone: '+91 9847461054',
    email: 'emithramthankalam@gmail.com',
    address: 'യൂണിവേഴ്സൽ ടാക്സ് സൊല്യൂഷൻ, കോളേജ് ജംഗ്ഷൻ, എം എ കോളേജ് റോഡിന് എതിർവശം, കോതമംഗലം, എറണാകുളം, കേരളം 686691',
    whatsapp: '+91 9847461054',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245.5315363594831!2d76.61586535882225!3d10.057677665409173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1771388163148!5m2!1sen!2sin',
    workingHours: 'തിങ്കൾ - ശനി: രാവിലെ 9:00 മുതൽ വൈകിട്ട് 6:00 വരെ',
    facebook: 'https://www.facebook.com/profile.php?id=61578747995052'
  },
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61578747995052'
  },
  sections: [
    {
      type: 'hero',
      enabled: true,
      order: 1
    },
    {
      type: 'facebook',
      enabled: true,
      order: 2,
      config: {
        pageUrl: 'https://www.facebook.com/profile.php?id=61576044371328',
        showTimeline: true
      }
    },
    {
      type: 'services',
      enabled: true,
      order: 3
    },
    {
      type: 'contact',
      enabled: true,
      order: 4,
      config: {
        showMap: true
      }
    }
  ]
};

import type { BusinessConfig } from '../../types/business';

export const insuranceConfigMl: BusinessConfig = {
  slug: 'insurance',
  name: 'ഇൻഷുറൻസ് സേവനങ്ങൾ',
  tagline: 'നിങ്ങൾക്കു പ്രധാനപ്പെട്ടതെല്ലാം സംരക്ഷിക്കുന്ന സമഗ്ര ഇൻഷുറൻസ് പരിഹാരങ്ങൾ',
  description: 'ജീവൻ, ആരോഗ്യവും സ്വത്തുക്കളും സുരക്ഷിതമാക്കാൻ വിശ്വസനീയ ഇൻഷുറൻസ് മാർഗ്ഗനിർദേശം. നിങ്ങളുടെ ആവശ്യങ്ങൾക്കനുസരിച്ച് ശരിയായ പോളിസി തിരഞ്ഞെടുക്കാൻ സഹായിക്കുന്നു.',
  logo: '/images/insurance-logo.png',
  heroImage: '/images/insurance-hero.jpg',
  ogImage: '/images/og-insurance.jpg',
  services: [
    {
      slug: 'life-insurance-lic',
      title: 'ലൈഫ് ഇൻഷുറൻസ് - LIC',
      description: 'കുടുംബത്തിന്റെ ഭാവി സുരക്ഷിതമാക്കാൻ വിശ്വസനീയ LIC പോളിസികൾ.',
      icon: '🛡️',
      detailContent: 'സാമ്പത്തിക ലക്ഷ്യങ്ങളും കുടുംബ ആവശ്യങ്ങളും പരിഗണിച്ച് അനുയോജ്യമായ ലൈഫ് ഇൻഷുറൻസ് തിരഞ്ഞെടുക്കാൻ സഹായം.'
    },
    {
      slug: 'motor-insurance',
      title: 'മോട്ടോർ ഇൻഷുറൻസ്',
      description: 'വാഹനത്തെ അപകടങ്ങളിൽ നിന്നും നാശനഷ്ടങ്ങളിൽ നിന്നും സംരക്ഷിക്കുക.',
      icon: '🚗',
      detailContent: 'പുതിയ പോളിസിയും പുതുക്കലും ക്ലെയിം സഹായവും ഉൾപ്പെടെ സമഗ്ര സേവനം.'
    },
    {
      slug: 'health-insurance',
      title: 'ഹെൽത്ത് ഇൻഷുറൻസ്',
      description: 'ആരോഗ്യച്ചെലവുകളിൽ നിന്നും സാമ്പത്തിക സുരക്ഷ.',
      icon: '🏥',
      detailContent: 'മെഡിക്കൽ അടിയന്തരാവസ്ഥകളിൽ സാമ്പത്തിക സംരക്ഷണം നൽകുന്ന അനുയോജ്യമായ ഹെൽത്ത് പോളിസി തിരഞ്ഞെടുക്കാൻ മാർഗ്ഗനിർദേശം.'
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
  social: {},
  sections: [
    {
      type: 'hero',
      enabled: true,
      order: 1
    },
    {
      type: 'services',
      enabled: true,
      order: 2
    },
    {
      type: 'contact',
      enabled: true,
      order: 3,
      config: {
        showMap: true
      }
    }
  ]
};

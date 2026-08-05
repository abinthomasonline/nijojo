import type { BusinessConfig } from '../../types/business';

export const universalTaxConfigMl: BusinessConfig = {
  slug: 'universal-tax',
  name: 'യൂണിവേഴ്സൽ ടാക്സ്',
  tagline: 'വ്യക്തികൾക്കും സ്ഥാപനങ്ങൾക്കും സമഗ്ര നികുതി & സാമ്പത്തിക പരിഹാരങ്ങൾ',
  description: 'നികുതി ഫയലിംഗ്, നിയമാനുസരണം, അക്കൗണ്ടിംഗ്, ബിസിനസ് രജിസ്ട്രേഷൻ എന്നിവയിൽ സമഗ്ര സേവനം. നിയമങ്ങൾ ലളിതമാക്കി സമയബന്ധിതമായ അനുസരണം ഉറപ്പാക്കുന്നു.',
  logo: '/images/universal-tax-logo.png',
  heroImage: '/images/universal-tax-hero.jpg',
  ogImage: '/images/og-universal-tax.jpg',
  services: [
    {
      slug: 'gst-registration',
      title: 'GST രജിസ്ട്രേഷൻ',
      description: 'നിങ്ങളുടെ ബിസിനസ് എളുപ്പത്തിൽ GSTയിൽ രജിസ്റ്റർ ചെയ്യുക.',
      icon: '📋',
      detailContent: 'ഡോക്യുമെന്റേഷൻ മുതൽ അപേക്ഷ സമർപ്പണം വരെ സമഗ്ര സഹായം നൽകി ബിസിനസ് നിയമാനുസൃതമാക്കുന്നു.'
    },
    {
      slug: 'gst-filing',
      title: 'GST റിട്ടേൺ ഫയലിംഗ്',
      description: 'പിഴ ഒഴിവാക്കാൻ കൃത്യവും സമയബന്ധിതവുമായ GST ഫയലിംഗ്.',
      icon: '📊',
      detailContent: 'മാസ, ത്രൈമാസ, വാർഷിക റിട്ടേണുകൾ കൃത്യമായി കൈകാര്യം ചെയ്ത് പിഴകളും നോട്ടീസുകളും ഒഴിവാക്കുന്നു.'
    },
    {
      slug: 'income-tax-filing',
      title: 'ഇൻകം ടാക്സ് ഫയലിംഗ്',
      description: 'ശ്രദ്ധാപൂർവ്വമായ നികുതി പ്ലാനിംഗോടെ ഇൻകം ടാക്സ് റിട്ടേൺ.',
      icon: '💰',
      detailContent: 'വ്യക്തികൾക്കും സ്ഥാപനങ്ങൾക്കും നികുതി ലാഭം ഉറപ്പാക്കുന്ന രീതിയിൽ ഫയലിംഗ് സേവനം.'
    },
    {
      slug: 'tds-tcs',
      title: 'TDS/TCS',
      description: 'TDS/TCS കണക്കാക്കൽ, ഫയലിംഗ്, അനുസരണം.',
      icon: '📑',
      detailContent: 'കുറവുകൾ കണക്കാക്കി സമയബന്ധിതമായി റിട്ടേൺ സമർപ്പിച്ച് പിഴ ഒഴിവാക്കുന്നു.'
    },
    {
      slug: 'digital-signature',
      title: 'ഡിജിറ്റൽ സിഗ്നേച്ചർ',
      description: 'നിയമപരമായി സാധുവായ ഡിജിറ്റൽ സിഗ്നേച്ചർ സർട്ടിഫിക്കറ്റ്.',
      icon: '🔐',
      detailContent: 'GST, MCA, ഇൻകം ടാക്സ് ഫയലിംഗിനായി ആവശ്യമായ DSC ലഭ്യമാക്കുന്നു.'
    },
    {
      slug: 'accounting',
      title: 'അക്കൗണ്ടിംഗ്',
      description: 'കൃത്യമായ സാമ്പത്തിക രേഖകൾ.',
      icon: '📚',
      detailContent: 'ഫിനാൻഷ്യൽ സ്റ്റേറ്റ്മെന്റുകൾ തയ്യാറാക്കി ബിസിനസ് തീരുമാനങ്ങൾക്കായി വ്യക്തത നൽകുന്നു.'
    },
    {
      slug: 'book-keeping',
      title: 'ബുക്ക് കീപ്പിംഗ്',
      description: 'ദൈനംദിന ഇടപാടുകളുടെ ക്രമബദ്ധ രേഖപ്പെടുത്തൽ.',
      icon: '📖',
      detailContent: 'ഓഡിറ്റിനും നികുതി ഫയലിംഗിനും എളുപ്പമാക്കുന്ന രീതിയിൽ ഇടപാടുകൾ രേഖപ്പെടുത്തുന്നു.'
    },
    {
      slug: 'partnership-deed',
      title: 'പാർട്ണർഷിപ്പ് ഡീഡ്',
      description: 'നിയമപരമായി ശക്തമായ പാർട്ണർഷിപ്പ് കരാർ തയ്യാറാക്കൽ.',
      icon: '🤝',
      detailContent: 'ലാഭവിഹിതം, ഉത്തരവാദിത്വങ്ങൾ എന്നിവ വ്യക്തമാക്കുന്ന കരാർ തയ്യാറാക്കുന്നു.'
    },
    {
      slug: 'tan-registration',
      title: 'TAN രജിസ്ട്രേഷൻ',
      description: 'TDS ആവശ്യങ്ങൾക്കായി TAN രജിസ്ട്രേഷൻ.',
      icon: '🆔',
      detailContent: 'സമയബന്ധിതമായി TAN ലഭ്യമാക്കി നിയമാനുസരണം ഉറപ്പാക്കുന്നു.'
    },
    {
      slug: 'internal-auditing',
      title: 'ഇന്റേണൽ ഓഡിറ്റിംഗ്',
      description: 'സാമ്പത്തിക നിയന്ത്രണവും സുതാര്യതയും മെച്ചപ്പെടുത്തൽ.',
      icon: '🔍',
      detailContent: 'റിസ്കുകളും അനുസരണ പ്രശ്നങ്ങളും കണ്ടെത്തി പരിഹാര നിർദ്ദേശങ്ങൾ നൽകുന്നു.'
    },
    {
      slug: 'ie-code-registration',
      title: 'IE കോഡ് രജിസ്ട്രേഷൻ',
      description: 'ഇറക്കുമതി-കയറ്റുമതി ബിസിനസ് ആരംഭിക്കാൻ രജിസ്ട്രേഷൻ.',
      icon: '🌐',
      detailContent: 'IEC രജിസ്ട്രേഷൻ സമഗ്ര സഹായത്തോടെ പൂർത്തിയാക്കുന്നു.'
    },
    {
      slug: 'esi-pf',
      title: 'ESI/PF',
      description: 'ESI, PF രജിസ്ട്രേഷൻ & അനുസരണം.',
      icon: '👥',
      detailContent: 'തൊഴിലാളി നിയമങ്ങൾ പാലിക്കാൻ ആവശ്യമായ രജിസ്ട്രേഷൻ, മാസ ഫയലിംഗ് സേവനം.'
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

export const languages = {
  en: 'English',
  ml: 'മലയാളം'
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'button.learnMore': 'Learn More',
    'button.viewAll': 'View All Services',
    'button.contactWhatsApp': 'Contact on WhatsApp',
    'button.call': 'Call Now',
    'button.email': 'Send Email',
    'footer.copyright': '© 2026 Nijo Johny. All rights reserved.',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.address': 'Address',
    'contact.workingHours': 'Working Hours',
  },
  ml: {
    'nav.home': 'മുഖ്യപേജ്',
    'nav.about': 'ഞങ്ങളേക്കുറിച്ച്',
    'nav.contact': 'ബന്ധപ്പെടുക',
    'button.learnMore': 'കൂടുതൽ അറിയുക',
    'button.viewAll': 'എല്ലാ സേവനങ്ങളും കാണുക',
    'button.contactWhatsApp': 'വാട്ട്‌സ്ആപ്പിൽ ബന്ധപ്പെടുക',
    'button.call': 'ഇപ്പോൾ വിളിക്കുക',
    'button.email': 'ഇമെയിൽ അയയ്ക്കുക',
    'footer.copyright': '© 2026 നിജോ ജോണി. എല്ലാ അവകാശങ്ങളും സംരക്ഷിച്ചിരിക്കുന്നു.',
    'contact.phone': 'ഫോൺ',
    'contact.email': 'ഇമെയിൽ',
    'contact.address': 'വിലാസം',
    'contact.workingHours': 'പ്രവർത്തന സമയം',
  }
} as const;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui = defaultLang) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

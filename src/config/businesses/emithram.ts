import type { BusinessConfig } from '../../types/business';

export const emithramConfig: BusinessConfig = {
  slug: 'emithram',
  name: 'e-Mithram',
  tagline: 'Your Trusted Digital Service Partner',
  description: 'Reliable and efficient digital services in Kothamangalam. From government to private, we take care of everything with attention and professionalism.',
  logo: '/images/emithram-logo.png',
  heroImage: '/images/emithram-hero.jpg',
  services: [
    {
      slug: 'passport-services',
      title: 'Passport Services',
      description: 'New passport applications, renewals, and corrections with expert guidance through the entire process.',
      icon: '🛂',
      detailContent: 'We provide complete assistance for all passport-related services including new applications, renewals, corrections, and address changes. Our experienced team guides you through the entire process.'
    },
    {
      slug: 'ration-card-services',
      title: 'Ration Card Services',
      description: 'Apply for new ration cards, update family details, and manage your food security entitlements.',
      icon: '🛒',
      detailContent: 'Get help with new ration card applications, adding or removing family members, address changes, and all other ration card related services.'
    },
    {
      slug: 'pan-card-services',
      title: 'Pan Card Services',
      description: 'PAN card applications, corrections, and linking with Aadhaar for seamless financial transactions.',
      icon: '💳',
      detailContent: 'Apply for new PAN cards, make corrections to existing cards, link with Aadhaar, and download e-PAN cards with our assistance.'
    },
    {
      slug: 'caste-certificate-services',
      title: 'Caste Certificate Services',
      description: 'Apply for caste certificates, corrections, and verifications for educational and employment benefits.',
      icon: '📋',
      detailContent: 'We assist with caste certificate applications, corrections, renewals, and verifications required for educational institutions and government schemes.'
    },
    {
      slug: 'income-certificate-services',
      title: 'Income Certificate Services',
      description: 'Income certificates for educational institutions, government schemes, and financial assistance.',
      icon: '💰',
      detailContent: 'Get income certificates for educational purposes, government schemes, scholarships, and other official requirements.'
    },
    {
      slug: 'one-and-same-certificate-services',
      title: 'One and Same Certificate Services',
      description: 'Identity verification certificates confirming different name variations belong to the same person.',
      icon: '🆔',
      detailContent: 'Obtain certificates that verify different variations of your name refer to the same person, essential for legal and official purposes.'
    },
    {
      slug: 'encumbrance-certificate-services',
      title: 'Encumbrance Certificate Services',
      description: 'Property encumbrance certificates for real estate transactions and legal verifications.',
      icon: '📜',
      detailContent: 'Get encumbrance certificates (EC) for property transactions, showing the history of transactions on a property.'
    },
    {
      slug: 'possession-certificate-services',
      title: 'Possession Certificate Services',
      description: 'Land possession certificates for property ownership verification and legal documentation.',
      icon: '🏡',
      detailContent: 'Apply for possession certificates to verify land ownership and establish legal documentation.'
    },
    {
      slug: 'property-tax-services',
      title: 'Property Tax Services',
      description: 'Property tax assessment, payment, and certificate services for all types of properties.',
      icon: '🏢',
      detailContent: 'We help with property tax assessment, online payment, and obtaining tax payment certificates.'
    },
    {
      slug: 'land-tax-services',
      title: 'Land Tax Services',
      description: 'Land tax assessment, payment, and certificate services for agricultural and non-agricultural land.',
      icon: '🌾',
      detailContent: 'Get assistance with land tax assessment, payment, and certificates for agricultural and non-agricultural properties.'
    },
    {
      slug: 'mini-atm-services',
      title: 'Mini ATM Services',
      description: 'Cash withdrawal, balance inquiry, and money transfer services at your convenience.',
      icon: '🏧',
      detailContent: 'Access mini ATM services for cash withdrawal, balance inquiry, and fund transfers without visiting a bank.'
    },
    {
      slug: 'insurance-services',
      title: 'Insurance Services',
      description: 'Life, health, and vehicle insurance policies with personalized coverage recommendations.',
      icon: '🛡️',
      detailContent: 'Explore various insurance options including life, health, and vehicle insurance with expert guidance.'
    },
    {
      slug: 'bill-payment-services',
      title: 'Bill Payment Services',
      description: 'Utility bill payments including electricity, water, gas, and mobile recharge services.',
      icon: '💸',
      detailContent: 'Pay your utility bills including electricity, water, gas, mobile recharge, and DTH services at our center.'
    }
  ],
  contact: {
    phone: '+91 9847461054',
    email: 'emithramthankalam@gmail.com',
    address: 'Thottyil Building, Near Auto Stand, Thankalam, Kothamangalam, Ernakulam, Kerala 686692',
    whatsapp: '+91 9847461054',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.360576988547!2d76.6129526!3d10.0695122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e67404c26b6f%3A0xf3d10bb70076eaff!2sThottiyil%20Plaza%2C%20Thankalam%20Thrikkariyoor%20Road%2C%20Thankalam%2C%20Kothamangalam%2C%20Kerala%20686666!5e0!3m2!1sen!2sin!4v1750848348597!5m2!1sen!2sin',
    workingHours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
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

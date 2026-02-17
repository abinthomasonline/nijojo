import type { BusinessConfig } from '../../types/business';

export const universalTaxConfig: BusinessConfig = {
  slug: 'universal-tax',
  name: 'Universal Tax',
  tagline: 'Comprehensive Tax, Compliance, and Financial Solutions for Individuals and Businesses',
  description: 'At Universal Tax Solutions, we provide end-to-end support for tax filing, statutory compliance, accounting, and business registrations. Our goal is to simplify complex regulations, ensure timely compliance, and help you focus on growing your business with confidence.',
  logo: '/images/universal-tax-logo.png',
  heroImage: '/images/universal-tax-hero.jpg',
  services: [
    {
      slug: 'gst-registration',
      title: 'GST Registration',
      description: 'Get your business registered under GST smoothly and without unnecessary delays.',
      icon: '📋',
      detailContent: 'We assist startups, traders, and service providers with complete GST registration support. From documentation to application filing and follow-ups, we ensure a hassle-free process so your business becomes fully compliant and ready to operate legally.'
    },
    {
      slug: 'gst-filing',
      title: 'GST Filing',
      description: 'Ensure accurate and timely GST return filing to avoid penalties and compliance issues.',
      icon: '📊',
      detailContent: 'Our team manages monthly, quarterly, and annual GST returns with precision and consistency. We reconcile sales and purchase data, identify mismatches, and ensure your filings are accurate, helping you stay compliant and stress-free.'
    },
    {
      slug: 'income-tax-filing',
      title: 'Income Tax Filing',
      description: 'Professional income tax return filing with proper tax planning and compliance.',
      icon: '💰',
      detailContent: 'We provide income tax filing services for salaried individuals, professionals, and businesses. Our approach focuses on maximizing eligible deductions, minimizing tax liability, and ensuring complete compliance with current regulations.'
    },
    {
      slug: 'tds-tcs',
      title: 'TDS/TCS',
      description: 'Complete assistance for TDS and TCS calculation, filing, and statutory compliance.',
      icon: '📑',
      detailContent: 'We handle end-to-end TDS and TCS services including deduction calculation, return filing, and compliance management. Our structured process ensures timely submissions and helps you avoid penalties or notices.'
    },
    {
      slug: 'digital-signature',
      title: 'Digital Signature',
      description: 'Obtain a secure and legally valid Digital Signature Certificate with ease.',
      icon: '🔐',
      detailContent: 'We facilitate quick issuance of Digital Signature Certificates (DSC) required for GST, MCA, income tax, and other official filings. Our team guides you through documentation and verification to ensure a smooth and secure process.'
    },
    {
      slug: 'accounting',
      title: 'Accounting',
      description: 'Maintain accurate financial records to support better business decisions.',
      icon: '📚',
      detailContent: 'Our accounting services ensure systematic recording, classification, and reporting of financial transactions. We help businesses generate clear financial statements, monitor cash flow, and maintain transparency for long-term growth.'
    },
    {
      slug: 'book-keeping',
      title: 'Book Keeping',
      description: 'Keep your financial transactions organized and audit-ready at all times.',
      icon: '📖',
      detailContent: 'We provide structured bookkeeping services to record daily transactions accurately and consistently. Proper bookkeeping ensures smooth tax filing, simplified audits, and better financial control for your business.'
    },
    {
      slug: 'partnership-deed',
      title: 'Partnership Deed',
      description: 'Draft legally sound partnership deeds that clearly define roles and responsibilities.',
      icon: '🤝',
      detailContent: 'We assist in drafting and registering partnership deeds tailored to your business requirements. Our service ensures clarity in profit sharing, responsibilities, and dispute resolution, providing a strong legal foundation for your partnership.'
    },
    {
      slug: 'tan-registration',
      title: 'TAN Registration',
      description: 'Quick and reliable TAN registration to meet mandatory compliance requirements.',
      icon: '🆔',
      detailContent: 'We help businesses obtain their Tax Deduction and Collection Account Number (TAN) efficiently. Proper TAN registration ensures seamless TDS filing and full compliance with statutory regulations.'
    },
    {
      slug: 'internal-auditing',
      title: 'Internal Auditing',
      description: 'Strengthen financial discipline through structured internal audit processes.',
      icon: '🔍',
      detailContent: 'Our internal audit services help identify financial risks, operational inefficiencies, and compliance gaps. We provide actionable insights and recommendations to improve internal controls and enhance overall business performance.'
    },
    {
      slug: 'ie-code-registration',
      title: 'IE Code Registration',
      description: 'Register your Import Export Code and start expanding your business globally.',
      icon: '🌐',
      detailContent: 'We provide end-to-end assistance for obtaining your Import Export Code (IEC). From documentation to application submission, we ensure a smooth registration process so you can legally conduct international trade.'
    },
    {
      slug: 'esi-pf',
      title: 'ESI/PF',
      description: 'Complete support for ESI and Provident Fund registration and compliance.',
      icon: '👥',
      detailContent: 'We assist employers with ESI and PF registration, monthly filings, and statutory compliance. Our services ensure you meet labor law requirements while maintaining proper employee benefit records.'
    }
  ],
  contact: {
    phone: '+91 9847461054',
    email: 'emithramthankalam@gmail.com',
    address: 'Thottyil Building, Near Auto Stand, Thankalam, Kothamangalam, Ernakulam, Kerala 686692',
    whatsapp: '+91 9847461054',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.360576988547!2d76.6129526!3d10.0695122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b07e67404c26b6f%3A0xf3d10bb70076eaff!2sThottiyil%20Plaza%2C%20Thankalam%20Thrikkariyoor%20Road%2C%20Thankalam%2C%20Kothamangalam%2C%20Kerala%20686666!5e0!3m2!1sen!2sin!4v1750848348597!5m2!1sen!2sin',
    workingHours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
    facebook: 'https://www.facebook.com/people/E-mithram-Online-service-centre-College-Junction-Kothamangalam/61576044371328'
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

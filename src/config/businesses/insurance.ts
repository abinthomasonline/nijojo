import type { BusinessConfig } from '../../types/business';

export const insuranceConfig: BusinessConfig = {
  slug: 'insurance',
  name: 'Insurance Services',
  tagline: 'Comprehensive Insurance Solutions to Protect What Matters Most',
  description: 'We provide trusted insurance guidance and policy support to help you secure your life, health, and assets. With personalized advice and end-to-end assistance, we ensure you choose the right coverage for your needs and long-term financial security.',
  logo: '/images/insurance-logo.png',
  heroImage: '/images/insurance-hero.jpg',
  services: [
    {
      slug: 'life-insurance-lic',
      title: 'Life Insurance - LIC',
      description: 'Secure your family\'s financial future with reliable and trusted LIC life insurance plans.',
      icon: '🛡️',
      detailContent: 'We help you choose the right LIC life insurance policy based on your financial goals, family needs, and long-term planning objectives. From policy selection and premium guidance to renewals and claim assistance, we provide complete support at every stage.'
    },
    {
      slug: 'motor-insurance',
      title: 'Motor Insurance',
      description: 'Protect your vehicle against accidents, damages, and unforeseen risks with comprehensive motor insurance.',
      icon: '🚗',
      detailContent: 'We assist with new motor insurance policies as well as timely renewals for cars and two-wheelers. Our service ensures proper coverage, competitive premiums, and smooth claim support so you can drive with confidence and peace of mind.'
    },
    {
      slug: 'health-insurance',
      title: 'Health Insurance',
      description: 'Safeguard yourself and your family from rising medical expenses with the right health insurance plan.',
      icon: '🏥',
      detailContent: 'We guide you in selecting suitable health insurance coverage tailored to your medical and financial needs. From policy comparison and enrollment to claim support, we ensure you receive dependable protection during medical emergencies.'
    }
  ],
  contact: {
    phone: '+91 9847461054',
    email: 'emithramthankalam@gmail.com',
    address: 'Universal Tax Solution, College Junction, Opposite M A College Road, Kothamangalam, Ernakulam, Kerala 686691',
    whatsapp: '+91 9847461054',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d245.5315363594831!2d76.61586535882225!3d10.057677665409173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1771388163148!5m2!1sen!2sin',
    workingHours: 'Monday - Saturday: 9:00 AM - 6:00 PM',
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

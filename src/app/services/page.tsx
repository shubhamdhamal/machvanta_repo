import { Metadata } from 'next';
import ServicesContent from '@/components/ServicesContent';

export const metadata: Metadata = {
  title: 'Industrial Automation Services | PLC SCADA Integration | MACHVANTA INDIA PVT LTD',
  description: 'Comprehensive industrial automation services including PLC/SCADA integration, custom development, commissioning & support. Expert automation solutions for automotive, FMCG, pharmaceutical industries in Pune, Maharashtra.',
  keywords: [
    'industrial automation services',
    'PLC SCADA integration',
    'custom automation development',
    'automation commissioning',
    'automation support',
    'HMI development',
    'system integration',
    'automation consulting',
    'PLC programming services',
    'SCADA system development',
    'automation maintenance',
    'industrial IoT solutions'
  ],
  openGraph: {
    title: 'Industrial Automation Services | PLC SCADA Integration | MACHVANTA INDIA PVT LTD',
    description: 'Comprehensive industrial automation services including PLC/SCADA integration, custom development, commissioning & support.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'MACHVANTA INDIA PVT LTD',
  },
  twitter: {
    card: 'summary',
    title: 'Industrial Automation Services | PLC SCADA Integration | MACHVANTA INDIA PVT LTD',
    description: 'Comprehensive industrial automation services including PLC/SCADA integration, custom development, commissioning & support.',
  },
  alternates: {
    canonical: 'https://machvanta.com/services',
  },
};

export default function Services() {
  const services = [
    {
      iconName: 'FiSettings',
      title: 'System Integration',
      description: 'Complete PLC/SCADA system integration with seamless connectivity and optimal performance.',
      features: [
        'PLC/SCADA integration',
        'HMI screens development',
        'Field device wiring',
        'System calibration'
      ],
    },
    {
      iconName: 'FiCode',
      title: 'Custom Development',
      description: 'Bespoke automation software tailored to your specific industry requirements and processes.',
      features: [
        'Custom control logic',
        'Data logging & reporting',
        'Industry 4.0 readiness',
        'API integration'
      ],
    },
    {
      iconName: 'FiTool',
      title: 'Commissioning & Support',
      description: 'Comprehensive testing, training, and ongoing maintenance to ensure optimal system performance.',
      features: [
        'On-site testing',
        'Staff training',
        'Long-term maintenance',
        '24/7 technical support'
      ],
    },
  ];

  return <ServicesContent services={services} />;
}
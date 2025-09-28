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

  const serviceImages = [
    {
      id: 1,
      src: 'https://img.freepik.com/free-photo/man-electrical-working-switchboard-with-fuses-uses-tablet_169016-51765.jpg?w=1200&h=600&fit=crop&crop=center',
      alt: 'PLC SCADA System Integration',
      title: 'PLC/SCADA System Integration',
      description: 'Complete automation solutions with seamless PLC/SCADA integration for optimal industrial performance.'
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?w=1200&h=600&fit=crop&crop=center',
      alt: 'Industrial Automation Control Panel',
      title: 'Custom Control Systems',
      description: 'Bespoke control panels and HMI interfaces designed specifically for your industrial requirements.'
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1684695748653-9bf05d69665c?w=1200&h=600&fit=crop&crop=center',
      alt: 'Conveyor Line Automation',
      title: 'Conveyor Line Automation',
      description: 'Advanced conveyor systems with intelligent automation for enhanced productivity and efficiency.'
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1748027869634-fc2e545cfb0c?w=1200&h=600&fit=crop&crop=center',
      alt: 'Manufacturing Process Control',
      title: 'Process Control Solutions',
      description: 'Comprehensive process control systems ensuring precision and reliability in manufacturing operations.'
    },
    {
      id: 5,
      src: 'https://img.freepik.com/free-photo/manufacture-steel-machine-with-control-computer-clear-room_645730-186.jpg?w=1200&h=600&fit=crop&crop=center',
      alt: 'SPM SBM Integration',
      title: 'SPM/SBM Integration',
      description: 'Special Purpose Machine and Special Building Machine integration for enhanced manufacturing efficiency and precision.'
    },
    {
      id: 6,
      src: 'https://img.freepik.com/free-photo/view-tiny-music-boxes-collection_23-2150545652.jpg?w=1200&h=600&fit=crop&crop=center',
      alt: 'Servo System Integration',
      title: 'Servo System',
      description: 'High-precision servo motor systems with advanced control algorithms for accurate positioning and motion control.'
    }
  ];

  return <ServicesContent services={services} serviceImages={serviceImages} />;
}
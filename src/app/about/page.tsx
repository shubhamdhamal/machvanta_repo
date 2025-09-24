import { Metadata } from 'next';
import AboutContent from '@/components/AboutContent';

export const metadata: Metadata = {
  title: 'About Us - Industrial Automation Experts | MACHVANTA INDIA PVT LTD',
  description: 'Learn about MACHVANTA INDIA PVT LTD - Leading industrial automation company in Pune, Maharashtra. Our mission, values, leadership team, and journey in automation excellence since 2020.',
  keywords: [
    'about MACHVANTA',
    'industrial automation company Pune',
    'automation experts Maharashtra',
    'PLC SCADA specialists',
    'automation leadership team',
    'industrial automation mission',
    'automation company values',
    'automation company history',
    'automation directors',
    'automation expertise'
  ],
  openGraph: {
    title: 'About Us - Industrial Automation Experts | MACHVANTA INDIA PVT LTD',
    description: 'Learn about MACHVANTA INDIA PVT LTD - Leading industrial automation company in Pune, Maharashtra.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'MACHVANTA INDIA PVT LTD',
  },
  twitter: {
    card: 'summary',
    title: 'About Us - Industrial Automation Experts | MACHVANTA INDIA PVT LTD',
    description: 'Learn about MACHVANTA INDIA PVT LTD - Leading industrial automation company in Pune, Maharashtra.',
  },
  alternates: {
    canonical: 'https://machvanta.com/about',
  },
};

export default function About() {
  const milestones = [
    {
      iconName: 'FiTarget',
      year: '2022',
      title: 'Company Founded',
      description: 'Machvanta India Pvt Ltd was established with a vision to revolutionize industrial automation.',
    },
    {
      iconName: 'FiTrendingUp',
      year: '2023',
      title: 'First Major Project',
      description: 'Successfully completed our first large-scale PLC/SCADA integration for automotive industry.',
    },
    {
      iconName: 'FiUsers',
      year: '2024',
      title: 'Team Expansion',
      description: 'Expanded our team with skilled engineers and automation specialists.',
    },
    {
      iconName: 'FiAward',
      year: '2025',
      title: 'Industry Recognition',
      description: 'Received recognition for excellence in industrial automation solutions.',
    },
  ];

  return <AboutContent milestones={milestones} />;
}

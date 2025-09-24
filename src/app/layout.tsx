import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://machvanta.com'),
  title: {
    default: "MACHVANTA INDIA PVT LTD - Industrial Automation Solutions | Pune",
    template: "%s | MACHVANTA INDIA PVT LTD"
  },
  description: "Leading industrial automation company in Pune, Maharashtra. Specialized in PLC/SCADA integration, conveyor automation, SPM integration, and custom automation solutions for automotive, FMCG, pharmaceutical industries.",
  keywords: [
    "industrial automation",
    "PLC SCADA integration",
    "conveyor automation",
    "SPM integration",
    "automation solutions Pune",
    "industrial automation Maharashtra",
    "automation company India",
    "PLC programming",
    "SCADA systems",
    "HMI development",
    "automotive automation",
    "FMCG automation",
    "pharmaceutical automation",
    "manufacturing automation",
    "custom automation solutions",
    "automation consulting",
    "industrial IoT",
    "Industry 4.0",
    "automation maintenance",
    "automation support"
  ],
  authors: [{ name: "MACHVANTA INDIA PVT LTD" }],
  creator: "MACHVANTA INDIA PVT LTD",
  publisher: "MACHVANTA INDIA PVT LTD",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://machvanta.com',
    siteName: 'MACHVANTA INDIA PVT LTD',
    title: 'MACHVANTA INDIA PVT LTD - Industrial Automation Solutions',
    description: 'Leading industrial automation company in Pune, Maharashtra. Specialized in PLC/SCADA integration, conveyor automation, and custom automation solutions.',
    images: [
      {
        url: '/Machvanta_symbol.svg',
        width: 1200,
        height: 630,
        alt: 'MACHVANTA INDIA PVT LTD - Industrial Automation Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MACHVANTA INDIA PVT LTD - Industrial Automation Solutions',
    description: 'Leading industrial automation company in Pune, Maharashtra. Specialized in PLC/SCADA integration, conveyor automation, and custom automation solutions.',
    images: ['/Machvanta_symbol.svg'],
  },
  alternates: {
    canonical: 'https://machvanta.com',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual verification code
  },
  category: 'Technology',
  classification: 'Industrial Automation',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/web-app-manifest-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/web-app-manifest-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/Machvanta_symbol.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' }
    ],
    other: [
      { rel: 'mask-icon', url: '/Machvanta_symbol.svg', color: '#132269' }
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "MACHVANTA INDIA PVT LTD",
    "alternateName": "Machvanta India",
    "url": "https://machvanta.com",
    "logo": "https://machvanta.com/Machvanta_symbol.svg",
    "description": "Leading industrial automation company in Pune, Maharashtra. Specialized in PLC/SCADA integration, conveyor automation, SPM integration, and custom automation solutions.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office no -305, 3rd floor, Zen Square, Vitthal Nagar, Kharadi",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411014",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-87882-94925",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["English", "Hindi", "Marathi"]
    },
    "email": "info@machvanta.com",
    "foundingDate": "2020",
    "numberOfEmployees": "10-50",
    "industry": "Industrial Automation",
    "services": [
      "PLC/SCADA Integration",
      "Conveyor Automation",
      "SPM Integration",
      "Custom Automation Solutions",
      "Industrial IoT",
      "Automation Consulting",
      "System Maintenance"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "State",
        "name": "Maharashtra"
      },
      {
        "@type": "City",
        "name": "Pune"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/machvanta-india",
      "https://wa.me/918788294925"
    ]
  };

  return (
    <html lang="en-IN">
      <head>
        {/* Favicon Links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/web-app-manifest-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/web-app-manifest-48x48.png" sizes="48x48" type="image/png" />
        <link rel="icon" href="/Machvanta_symbol.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/web-app-manifest-192x192.png" sizes="192x192" />
        <link rel="mask-icon" href="/Machvanta_symbol.svg" color="#132269" />
        <link rel="manifest" href="/manifest.json" />

        {/* Additional Meta Tags for Search Engines */}
        <meta name="msapplication-TileColor" content="#132269" />
        <meta name="theme-color" content="#132269" />
        <meta name="application-name" content="MACHVANTA INDIA PVT LTD" />
        <meta name="msapplication-tooltip" content="Industrial Automation Solutions" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Pune" />
        <meta name="geo.position" content="18.5204;73.8567" />
        <meta name="ICBM" content="18.5204, 73.8567" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

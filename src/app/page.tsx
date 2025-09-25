
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { FiArrowRight, FiMessageSquare } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useState, useEffect } from 'react';

// Alternating TypewriterText Component
const AlternatingTypewriter = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const texts = ['Machvanta India', 'मॅकवंता इंडिया'];
  const currentText = texts[currentTextIndex];
  const speed = isDeleting ? 100 : 150;

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setDisplayText(currentText.substring(0, currentIndex + 1));
          setCurrentIndex(prev => prev + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(currentText.substring(0, currentIndex - 1));
          setCurrentIndex(prev => prev - 1);
        } else {
          // Finished deleting, switch to next text
          setIsDeleting(false);
          setCurrentTextIndex(prev => (prev + 1) % texts.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, currentText, speed, texts.length]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1"
      >
        |
      </motion.span>
    </span>
  );
};

export default function Home() {
  const homePageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "MACHVANTA INDIA PVT LTD - Industrial Automation Solutions",
    "description": "Leading industrial automation company in Pune, Maharashtra. Specialized in PLC/SCADA integration, conveyor automation, SPM integration, and custom automation solutions.",
    "url": "https://machvanta.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "MACHVANTA INDIA PVT LTD",
      "url": "https://machvanta.com",
      "logo": "https://machvanta.com/Machvanta_symbol.svg",
      "description": "Leading industrial automation company in Pune, Maharashtra",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office no -305, 3rd floor, Zen Square, Vitthal Nagar, Kharadi",
        "addressLocality": "Pune",
        "addressRegion": "Maharashtra",
        "postalCode": "411014",
        "addressCountry": "IN"
      },
      "telephone": "+91-87882-94925",
      "email": "info@machvanta.com"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://machvanta.com"
        }
      ]
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://machvanta.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageStructuredData) }}
      />
      <div className="relative">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center overflow-hidden pt-16">
          {/* Video Background */}
          <div
            className="absolute top-16 left-0 right-0 bottom-0 w-full"
            style={{
              backgroundImage: 'url(https://res.cloudinary.com/dvq0oz6n6/image/upload/v1758616937/Corporate_Drone_Shot_Video_Generation_tpzbih.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: 'calc(100vh - 64px)'
            }}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover z-1"
              poster="https://res.cloudinary.com/dvq0oz6n6/image/upload/v1758616937/Corporate_Drone_Shot_Video_Generation_tpzbih.jpg"
              onLoadStart={() => console.log('Video loading started')}
              onCanPlay={() => console.log('Video can play')}
              onError={(e) => console.error('Video error:', e)}
            >
              {/* Desktop/Landscape Video */}
              <source
                src="https://res.cloudinary.com/dvq0oz6n6/video/upload/v1758736720/machvanta_Building_lxh909.mp4"
                type="video/mp4"
                media="(min-width: 768px)"
              />
              {/* Mobile/Portrait Video */}
              <source
                src="https://res.cloudinary.com/dvq0oz6n6/video/upload/v1758736720/machvanta_Building_lxh909.mp4"
                type="video/mp4"
                media="(max-width: 767px)"
              />
              {/* Fallback for browsers that don't support media queries */}
              <source
                src="https://res.cloudinary.com/dvq0oz6n6/video/upload/v1758736720/machvanta_Building_lxh909.mp4"
                type="video/mp4"
              />
            </video>
            {/* Video Overlay - Temporarily removed for testing */}
            {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
          </div>

          {/* Hero Content */}
          <div className="absolute bottom-4 sm:bottom-0 left-0 z-10 px-4 sm:px-6 lg:px-8 pb-8 pt-16">
            <div className="max-w-3xl text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
                  <span className="block" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 0 0 8px rgba(0, 0, 0, 0.5)' }}>
                    <AlternatingTypewriter />
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" style={{ textShadow: 'none', filter: 'contrast(1.2) brightness(1.1)' }}>
                    Pvt Ltd
                  </span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl text-white mb-8 max-w-2xl leading-relaxed"
                style={{ textShadow: '1px 1px 3px rgba(0, 0, 0, 0.8), 0 0 6px rgba(0, 0, 0, 0.5)' }}
              >
                Automation integration & bespoke development for industrial workflows
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 items-start"
              >
                <Link
                  href="/services"
                  className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold text-base hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-2"
                  style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)' }}
                >
                  Our Services
                  <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>

                {/* <Link
                  href="/contact"
                  className="group bg-white text-gray-900 px-6 py-3 rounded-full font-semibold text-base hover:bg-gray-100 hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                  style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3), 0 0 8px rgba(0, 0, 0, 0.2)' }}
                >
                  <FiMessageSquare className="group-hover:rotate-12 transition-transform" />
                  Get a Quote
                </Link> */}
              </motion.div>
            </div>
          </div>

          {/* Floating Elements - Removed blur effects */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-10 z-0"
          />

          <motion.div
            animate={{
              y: [0, 20, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-10 z-0"
          />

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white" aria-labelledby="why-choose-us">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="why-choose-us" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Machvanta India?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver
                automation solutions that transform your operations.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Rapid Implementation",
                  description: "Fast-track your automation projects with our streamlined implementation process.",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop&crop=center",
                  alt: "Industrial automation implementation"
                },
                {
                  icon: "🔧",
                  title: "Expert Support",
                  description: "24/7 technical support and maintenance from our certified automation engineers.",
                  image: "https://images.unsplash.com/photo-1715635845783-a184542d95e5?w=400&h=300&fit=crop&crop=right",
                  alt: "Technical support team"
                },
                {
                  icon: "📈",
                  title: "Proven Results",
                  description: "Track record of successful projects across diverse industrial sectors.",
                  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
                  alt: "Data analytics dashboard"
                },
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-8 rounded-2xl text-center hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <div className="relative mb-6">
                    <Image
                      src={feature.image}
                      alt={`${feature.title} - ${feature.alt} | MACHVANTA Industrial Automation`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-lg"
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                    <div className="absolute top-4 right-4 text-3xl bg-white/90 rounded-full w-12 h-12 flex items-center justify-center">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries We Serve Section */}
        <section className="py-20 bg-gray-50" aria-labelledby="industries-served">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="industries-served" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Industries We Serve
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our automation solutions span across multiple industries, delivering
                tailored solutions for each sector&apos;s unique requirements.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Automotive",
                  icon: "🚗",
                  color: "from-blue-500 to-blue-600",
                  image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=300&h=200&fit=crop&crop=center",
                  alt: "Automotive manufacturing"
                },
                {
                  name: "FMCG",
                  icon: "📦",
                  color: "from-green-500 to-green-600",
                  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop&crop=center",
                  alt: "FMCG packaging line"
                },
                {
                  name: "Pharmaceuticals",
                  icon: "💊",
                  color: "from-purple-500 to-purple-600",
                  image: "https://images.unsplash.com/photo-1607398027609-fbd1a06fb5d4?w=400&h=300&fit=crop&crop=center",
                  alt: "Pharmaceutical production"
                },
                {
                  name: "Packaging",
                  icon: "📋",
                  color: "from-orange-500 to-orange-600",
                  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop&crop=center",
                  alt: "Packaging automation"
                },
                {
                  name: "Manufacturing",
                  icon: "🏭",
                  color: "from-red-500 to-red-600",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop&crop=center",
                  alt: "Manufacturing facility"
                },
                {
                  name: "Food & Beverage",
                  icon: "🍔",
                  color: "from-yellow-500 to-yellow-600",
                  image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop&crop=center",
                  alt: "Food processing"
                },
                {
                  name: "Textiles",
                  icon: "🧵",
                  color: "from-pink-500 to-pink-600",
                  image: "https://images.unsplash.com/photo-1660980041852-230420b8f99f?w=300&h=200&fit=crop&crop=center",
                  alt: "Textile manufacturing"
                },
                {
                  name: "Chemicals",
                  icon: "🧪",
                  color: "from-indigo-500 to-indigo-600",
                  image: "https://plus.unsplash.com/premium_photo-1661962961247-18a53b72b591?w=300&h=200&fit=crop&crop=right",
                  alt: "Chemical processing"
                },
                {
                  name: "SPM (Special Purpose Machine) & SBM (Special Building Machine)",
                  icon: "🔧",
                  color: "from-cyan-500 to-cyan-600",
                  image: "https://plus.unsplash.com/premium_photo-1661878008007-7a13bf31c14b?w=300&h=200&fit=crop&crop=center",
                  alt: "Special purpose machines"
                },
                {
                  name: "Energy and Power",
                  icon: "⚡",
                  color: "from-yellow-500 to-orange-500",
                  image: "https://images.unsplash.com/photo-1509390144018-eeaf65052242?w=300&h=200&fit=crop&crop=center",
                  alt: "Power generation facility"
                },
                {
                  name: "Material Handling & Logistics",
                  icon: "📦",
                  color: "from-teal-500 to-teal-600",
                  image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=300&h=200&fit=crop&crop=center",
                  alt: "Material handling systems"
                },
                {
                  name: "Oil and Gas",
                  icon: "🛢️",
                  color: "from-gray-600 to-gray-700",
                  image: "https://plus.unsplash.com/premium_photo-1682144333631-eac578433ea1?w=300&h=200&fit=crop&crop=center",
                  alt: "Oil and gas refinery"
                },
                {
                  name: "Boiler: Heating & Cooling",
                  icon: "🔥",
                  color: "from-red-500 to-red-600",
                  image: "https://plus.unsplash.com/premium_photo-1664298589198-b15ff5382648?w=300&h=200&fit=crop&crop=center",
                  alt: "Industrial boiler system"
                },
                {
                  name: "HVAC",
                  icon: "🌡️",
                  color: "from-blue-400 to-blue-500",
                  image: "https://plus.unsplash.com/premium_photo-1661921393343-343742700dd3?w=300&h=200&fit=crop&crop=center",
                  alt: "HVAC system"
                },
                {
                  name: "Distillery",
                  icon: "🍷",
                  color: "from-amber-500 to-amber-600",
                  image: "https://plus.unsplash.com/premium_photo-1661854704184-679405ea7ff8?w=300&h=200&fit=crop&crop=center",
                  alt: "Distillery production"
                },
                {
                  name: "Water and Waste Water Treatment",
                  icon: "💧",
                  color: "from-blue-500 to-blue-600",
                  image: "https://plus.unsplash.com/premium_photo-1694475446818-b0e07dbff684?w=300&h=200&fit=crop&crop=center",
                  alt: "Water treatment facility"
                },
              ].map((industry, index) => (
                <motion.div
                  key={industry.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative mb-4">
                    <Image
                      src={industry.image}
                      alt={`${industry.name} Industry Automation Solutions | MACHVANTA Industrial Automation`}
                      width={300}
                      height={200}
                      className="w-full h-32 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg"></div>
                    <div
                      className={`absolute top-2 right-2 w-10 h-10 bg-gradient-to-r ${industry.color} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-lg">{industry.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-20 bg-white" aria-labelledby="technology-stack">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 id="technology-stack" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Our Technology Stack
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge technologies and industry-standard platforms
                to deliver robust and scalable automation solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: "PLC Systems",
                  technologies: ["Modular PLCs", "Compact Controllers", "High-Performance Processors", "Industrial Controllers"],
                  icon: "🔌",
                  color: "from-blue-500 to-blue-600",
                },
                {
                  category: "SCADA Platforms",
                  technologies: ["WinCC", "FactoryTalk", "Wonderware", "Citect"],
                  icon: "📊",
                  color: "from-green-500 to-green-600",
                },
                {
                  category: "HMI Solutions",
                  technologies: ["Touch Panels", "Operator Interfaces", "Web-based HMIs", "Mobile Dashboards"],
                  icon: "🖥️",
                  color: "from-purple-500 to-purple-600",
                },
                {
                  category: "Safety Systems",
                  technologies: ["Safety PLCs", "Emergency Stop Systems", "Safety Relays", "Guard Monitoring"],
                  icon: "🛡️",
                  color: "from-indigo-500 to-indigo-600",
                },
                {
                  category: "Motion Control",
                  technologies: ["Servo Drives", "Variable Frequency Drives", "Stepper Motors", "Motion Controllers"],
                  icon: "⚙️",
                  color: "from-red-500 to-red-600",
                },
                {
                  category: "Communication Protocols",
                  technologies: ["Ethernet/IP", "Modbus TCP", "Profibus", "DeviceNet"],
                  icon: "📡",
                  color: "from-teal-500 to-teal-600",
                },
              ].map((tech, index) => (
                <motion.div
                  key={tech.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${tech.color} rounded-lg flex items-center justify-center mr-4`}
                    >
                      <span className="text-2xl">{tech.icon}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{tech.category}</h3>
                  </div>
                  <div className="space-y-2">
                    {tech.technologies.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center">
                        <div className={`w-2 h-2 bg-gradient-to-r ${tech.color} rounded-full mr-3`}></div>
                        <span className="text-gray-600">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WhatsApp Floating Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <motion.a
            href="https://wa.me/918788294925"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
          >
            <FaWhatsapp className="text-2xl group-hover:animate-pulse" />
            <span className="ml-2 text-sm font-semibold hidden sm:block">Chat with us</span>
          </motion.a>
        </motion.div>
      </div>
    </>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiSettings, FiCode, FiTool } from 'react-icons/fi';
import ServiceCarousel from './ServiceCarousel';
import ServiceInquiryModal from './ServiceInquiryModal';

interface ServiceImage {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
    slug: string;
}

interface ServicesContentProps {
    services: Array<{
        iconName: string;
        title: string;
        description: string;
        features: string[];
    }>;
    serviceImages: ServiceImage[];
}

export default function ServicesContent({ services, serviceImages }: ServicesContentProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'FiSettings':
                return FiSettings;
            case 'FiCode':
                return FiCode;
            case 'FiTool':
                return FiTool;
            default:
                return FiSettings;
        }
    };
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Industrial Automation Services",
                        "description": "Comprehensive industrial automation services including PLC/SCADA integration, custom development, commissioning & support.",
                        "provider": {
                            "@type": "Organization",
                            "name": "MACHVANTA INDIA PVT LTD",
                            "url": "https://machvanta.com"
                        },
                        "serviceType": "Industrial Automation",
                        "areaServed": {
                            "@type": "Country",
                            "name": "India"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Automation Services",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "PLC/SCADA Integration",
                                        "description": "Complete PLC/SCADA system integration and programming services"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Custom Development",
                                        "description": "Bespoke automation software and HMI development"
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Commissioning & Support",
                                        "description": "System commissioning, testing, and ongoing technical support"
                                    }
                                }
                            ]
                        },
                        "breadcrumb": {
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://machvanta.com"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Services",
                                    "item": "https://machvanta.com/services"
                                }
                            ]
                        }
                    })
                }}
            />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 sm:py-20 pt-24 sm:pt-28">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
                            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
                                Comprehensive automation solutions tailored to your industry needs
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Service Carousel */}
                <ServiceCarousel images={serviceImages} />

                {/* Services Grid */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                What We Offer
                            </h2>
                            <p className="text-lg text-gray-600">
                                From concept to completion, we provide end-to-end automation solutions
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <motion.div
                                    key={service.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                                        {React.createElement(getIcon(service.iconName), { className: "w-8 h-8 text-white" })}
                                    </div>

                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 mb-6">{service.description}</p>

                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center text-gray-600">
                                                <FiArrowRight className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Process
                            </h2>
                            <p className="text-lg text-gray-600">
                                A systematic approach to delivering exceptional automation solutions
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {[
                                {
                                    step: '01',
                                    title: 'Consultation',
                                    description: 'We analyze your requirements and provide expert recommendations.',
                                    icon: '💬',
                                },
                                {
                                    step: '02',
                                    title: 'Design',
                                    description: 'Our team creates detailed technical specifications and system architecture.',
                                    icon: '📋',
                                },
                                {
                                    step: '03',
                                    title: 'Implementation',
                                    description: 'We develop, integrate, and test your automation solution.',
                                    icon: '⚙️',
                                },
                                {
                                    step: '04',
                                    title: 'Support',
                                    description: 'Ongoing maintenance and technical support to ensure optimal performance.',
                                    icon: '🛠️',
                                },
                            ].map((process, index) => (
                                <motion.div
                                    key={process.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="text-center"
                                >
                                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <span className="text-2xl">{process.icon}</span>
                                    </div>
                                    <div className="text-sm font-semibold text-blue-600 mb-2">{process.step}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{process.title}</h3>
                                    <p className="text-gray-600">{process.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                                Ready to Automate Your Operations?
                            </h2>
                            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                                Let&apos;s discuss how our automation solutions can transform your business processes and drive efficiency.
                            </p>
                            <motion.button
                                onClick={() => setIsModalOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-block bg-white text-blue-600 py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300"
                            >
                                Get Started Today
                            </motion.button>
                        </motion.div>
                    </div>
                </section>
            </div>

            {/* Service Inquiry Modal */}
            <ServiceInquiryModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
}

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiTarget, FiUsers, FiAward, FiTrendingUp } from 'react-icons/fi';

interface AboutContentProps {
    milestones: Array<{
        iconName: string;
        year: string;
        title: string;
        description: string;
    }>;
}

export default function AboutContent({ milestones }: AboutContentProps) {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'FiTarget':
                return FiTarget;
            case 'FiUsers':
                return FiUsers;
            case 'FiAward':
                return FiAward;
            case 'FiTrendingUp':
                return FiTrendingUp;
            default:
                return FiTarget;
        }
    };
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "AboutPage",
                        "name": "About MACHVANTA INDIA PVT LTD",
                        "description": "Learn about MACHVANTA INDIA PVT LTD - Leading industrial automation company in Pune, Maharashtra.",
                        "url": "https://machvanta.com/about",
                        "mainEntity": {
                            "@type": "Organization",
                            "name": "MACHVANTA INDIA PVT LTD",
                            "foundingDate": "2020",
                            "description": "Leading industrial automation company specializing in PLC/SCADA integration, conveyor automation, and custom automation solutions.",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Office no -305, 3rd floor, Zen Square, Vitthal Nagar, Kharadi",
                                "addressLocality": "Pune",
                                "addressRegion": "Maharashtra",
                                "postalCode": "411014",
                                "addressCountry": "IN"
                            },
                            "employee": [
                                {
                                    "@type": "Person",
                                    "name": "Rajesh Kumar",
                                    "jobTitle": "Managing Director",
                                    "description": "With over 15 years of experience in industrial automation, Rajesh leads our strategic vision and drives innovation across all projects."
                                },
                                {
                                    "@type": "Person",
                                    "name": "Priyansh Sharma",
                                    "jobTitle": "Technical Director",
                                    "description": "A technical expert with deep knowledge in PLC/SCADA systems, Priya ensures all our solutions meet the highest engineering standards."
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
                                    "name": "About",
                                    "item": "https://machvanta.com/about"
                                }
                            ]
                        }
                    })
                }}
            />
            <div className="min-h-screen bg-gray-50">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center"
                        >
                            <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Machvanta India</h1>
                            <p className="text-xl sm:text-2xl text-blue-100 max-w-3xl mx-auto">
                                Pioneering the future of industrial automation
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Company Description */}
                <section className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="max-w-4xl mx-auto text-center"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                We specialize in industrial automation solutions including PLC/SCADA integration,
                                custom software development, and complete line automation. Our mission is to
                                simplify operations and maximize productivity for modern industries.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                With cutting-edge technology and deep industry expertise, we deliver solutions
                                that transform manufacturing processes, reduce costs, and enhance efficiency.
                                Our commitment to excellence drives us to continuously innovate and provide
                                world-class automation services.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Timeline Section */}
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
                                Our Journey
                            </h2>
                            <p className="text-lg text-gray-600">
                                Key milestones in our company&apos;s growth and development
                            </p>
                        </motion.div>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="relative"
                        >
                            {/* Timeline Line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 hidden md:block"></div>

                            <div className="space-y-16">
                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={milestone.year}
                                        variants={itemVariants}
                                        className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                            } flex-col md:gap-8`}
                                    >
                                        <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                                            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                                                <div className="flex items-center gap-4 mb-4">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                                                        {React.createElement(getIcon(milestone.iconName), { className: "w-6 h-6 text-white" })}
                                                    </div>
                                                    <div>
                                                        <span className="text-2xl font-bold text-blue-600">{milestone.year}</span>
                                                        <h3 className="text-xl font-semibold text-gray-900">{milestone.title}</h3>
                                                    </div>
                                                </div>
                                                <p className="text-gray-600">{milestone.description}</p>
                                            </div>
                                        </div>

                                        {/* Timeline Dot */}
                                        <div className="hidden md:block w-4 h-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                                        <div className="w-full md:w-1/2"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="py-20 bg-gray-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                                Our Values
                            </h2>
                            <p className="text-lg text-gray-600">
                                The principles that guide everything we do
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {[
                                {
                                    title: 'Innovation',
                                    description: 'We continuously push boundaries to deliver cutting-edge automation solutions.',
                                    icon: '🚀',
                                },
                                {
                                    title: 'Quality',
                                    description: 'Every project meets the highest standards of excellence and reliability.',
                                    icon: '⭐',
                                },
                                {
                                    title: 'Partnership',
                                    description: 'We work closely with clients to understand and exceed their expectations.',
                                    icon: '🤝',
                                },
                            ].map((value, index) => (
                                <motion.div
                                    key={value.title}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="text-4xl mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Vision 2025 Section */}
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
                                Vision 2025
                            </h2>
                            <p className="text-lg text-gray-600">
                                Our ambitious goals for the future of industrial automation
                            </p>
                        </motion.div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
                                <div className="space-y-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 font-bold text-sm">1</span>
                                        </div>
                                        <p className="text-lg">
                                            <strong>Be a 1 Billion rupees Sales revenue organisation</strong>
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 font-bold text-sm">2</span>
                                        </div>
                                        <p className="text-lg">
                                            <strong>Be a Leading Industrial Automation products and solution provider</strong>
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 font-bold text-sm">3</span>
                                        </div>
                                        <p className="text-lg">
                                            <strong>Be a Most preferred and trusted partner for principals</strong>
                                        </p>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                            <span className="text-blue-600 font-bold text-sm">4</span>
                                        </div>
                                        <p className="text-lg">
                                            <strong>Be a Dream workplace for growth, pride and joy</strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Directors Section */}
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
                                Our Leadership Team
                            </h2>
                            <p className="text-lg text-gray-600">
                                Meet the visionaries leading Machvanta India towards automation excellence
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {[
                                {
                                    name: 'Laxman Lad',
                                    title: 'Managing Director',
                                    image: 'https://plus.unsplash.com/premium_photo-1689977871600-e755257fb5f8?w=400&h=400&fit=crop&crop=face',
                                    description: 'With over 5+ years of experience in industrial automation, Laxman leads our strategic vision and drives innovation across all projects.',
                                    expertise: ['Strategic Planning', 'Business Development', 'Team Leadership']
                                },
                                {
                                    name: 'Sachin Mohite',
                                    title: 'Technical Director',
                                    image: 'https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=400&h=400&fit=crop&crop=face',
                                    description: 'A technical expert with deep knowledge in PLC/SCADA systems, Sachin ensures all our solutions meet the highest engineering standards.',
                                    expertise: ['PLC Programming', 'SCADA Systems', 'Technical Excellence']
                                }
                            ].map((director, index) => (
                                <motion.div
                                    key={director.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    viewport={{ once: true }}
                                    className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="text-center mb-6">
                                        <div className="relative w-32 h-32 mx-auto mb-4">
                                            <Image
                                                src={director.image}
                                                alt={`${director.name} - ${director.title} at MACHVANTA INDIA PVT LTD`}
                                                width={400}
                                                height={400}
                                                className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                                                loading="lazy"
                                                sizes="(max-width: 768px) 100vw, 50vw"
                                            />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{director.name}</h3>
                                        <p className="text-lg text-blue-600 font-semibold mb-4">{director.title}</p>
                                        <p className="text-gray-600 mb-6">{director.description}</p>
                                    </div>

                                    <div className="border-t border-gray-200 pt-6">
                                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Expertise:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {director.expertise.map((skill, skillIndex) => (
                                                <span
                                                    key={skillIndex}
                                                    className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

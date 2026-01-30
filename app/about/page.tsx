"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Target, Eye, Users, Award, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function AboutPage() {
    const values = [
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Innovation",
            description: "Continuously pushing boundaries to deliver cutting-edge automation solutions"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Quality",
            description: "Every project meets the highest standards of excellence and reliability"
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Partnership",
            description: "Working closely with clients to understand and exceed their expectations"
        }
    ];

    const milestones = [
        {
            year: "2022",
            title: "Company Founded",
            description: "Machvanta India Pvt Ltd was established with a vision to revolutionize industrial automation"
        },
        {
            year: "2023",
            title: "First Major Project",
            description: "Successfully completed our first large-scale PLC/SCADA integration for automotive industry"
        },
        {
            year: "2024",
            title: "Team Expansion",
            description: "Expanded our team with skilled engineers and automation specialists"
        },
        {
            year: "2025",
            title: "Industry Recognition",
            description: "Received recognition for excellence in industrial automation solutions"
        }
    ];

    const stats = [
        { number: "100%", label: "Reliable Solutions" },
        { number: "50+", label: "Successful Projects" },
        { number: "15+", label: "Industry Experts" },
        { number: "5+", label: "Years of Excellence" }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-darkbg">
            {/* Hero Section */}
            <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/40 rounded-full blur-[120px] animate-gradient-move mix-blend-multiply dark:mix-blend-screen" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/40 rounded-full blur-[120px] animate-gradient-move mix-blend-multiply dark:mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto text-center py-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
                            About <span className="text-cyan-500">Machvanta India</span>
                        </h1>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Pioneering the future of industrial automation with cutting-edge solutions and exceptional service
                        </p>
                    </motion.div>
                </div>
                {/* Section Separator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* About Us Section */}
            <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <div className="max-w-5xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-12 text-center">Who We Are</h2>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        <span className="font-semibold text-cyan-500">Machvanta India Pvt Ltd</span> is a leading Industrial Automation and Control Panel solutions provider, committed to delivering 100% reliable, innovative, and cost-effective automation services across all manufacturing sectors.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                        We specialize in designing, engineering, manufacturing, and commissioning advanced automation systems that enhance productivity, safety, and operational efficiency.
                                    </p>
                                    <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                        With a strong foundation of technical expertise, quality workmanship, and customer-first service, Machvanta has rapidly grown into a trusted partner for industries in India and abroad.
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    {stats.map((stat, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
                                            className="bg-gradient-to-br from-cyan-500/10 to-purple-600/10 dark:from-cyan-500/20 dark:to-purple-600/20 p-6 rounded-xl border border-cyan-500/20 dark:border-cyan-500/30"
                                        >
                                            <div className="text-3xl font-bold text-cyan-500 mb-2">{stat.number}</div>
                                            <div className="text-sm text-gray-700 dark:text-gray-300 font-semibold">{stat.label}</div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </SectionWrapper>
                {/* Section Separator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* Mission & Vision Section */}
            <section className="relative bg-slate-50 dark:bg-slate-900/50 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <div className="max-w-5xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Mission */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-slate-800 p-8 rounded-xl border border-gray-200 dark:border-slate-600"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Target className="w-6 h-6 text-cyan-500" />
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Mission</h3>
                                </div>
                                <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                                    To become <span className="font-semibold text-cyan-500">India's most reliable and innovative</span> automation and control panel company, transforming industries with smart engineering and world-class technology.
                                </p>
                            </motion.div>

                            {/* Vision */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-gradient-to-br from-cyan-500 to-blue-500 p-8 rounded-xl text-white"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Eye className="w-6 h-6" />
                                    <h3 className="text-2xl font-bold">Our Vision</h3>
                                </div>
                                <p className="text-base leading-relaxed">
                                    <span className="font-semibold">"Empowering industries with efficient, safe and future-ready automation."</span>
                                </p>
                                <p className="text-sm mt-6 opacity-90">Machvanta India Pvt Ltd</p>
                            </motion.div>
                        </div>
                    </div>
                </SectionWrapper>
                {/* Section Separator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* Core Values Section */}
            <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <div className="max-w-5xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Core Values</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">The principles that guide everything we do</p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((value, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-6 rounded-lg border border-gray-200 dark:border-slate-600 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
                                >
                                    <div className="text-cyan-500 mb-4">{value.icon}</div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{value.title}</h3>
                                    <p className="text-sm text-gray-700 dark:text-gray-300">{value.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
                {/* Section Separator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* Timeline Section */}
            <section className="relative bg-slate-50 dark:bg-slate-900/50 py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <div className="max-w-5xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Journey</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">Key milestones in our company's growth and development</p>
                        </motion.div>

                        <div className="relative">
                            {/* Timeline Line */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 to-blue-500 transform -translate-x-1/2" />

                            <div className="space-y-12">
                                {milestones.map((milestone, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
                                    >
                                        {/* Content */}
                                        <div className="flex-1 bg-white dark:bg-slate-800 p-6 rounded-lg border border-gray-200 dark:border-slate-600">
                                            <div className="text-xs font-bold text-cyan-500 mb-2">{milestone.year}</div>
                                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{milestone.title}</h4>
                                            <p className="text-sm text-gray-700 dark:text-gray-300">{milestone.description}</p>
                                        </div>

                                        {/* Timeline Dot */}
                                        <div className="hidden md:flex items-center justify-center z-10">
                                            <div className="w-4 h-4 bg-cyan-500 rounded-full border-4 border-white dark:border-darkbg" />
                                        </div>

                                        <div className="flex-1" />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </SectionWrapper>
                {/* Section Separator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* Why Choose Us Section */}
            <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <div className="max-w-5xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Machvanta</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">What makes us different</p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                "100% Reliable & Tested Solutions",
                                "Expert Team of 15+ Automation Specialists",
                                "Cost-Effective & Innovative Services",
                                "Customer-First Approach",
                                "End-to-End Support & Commissioning",
                                "Industry Recognition & Awards"
                            ].map((point, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="flex items-start gap-4"
                                >
                                    <CheckCircle className="w-3 h-3 text-cyan-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <p className="text-base font-semibold text-slate-900 dark:text-white">{point}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </SectionWrapper>
                {/* Section Separator */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* Leadership Team Section */}
            <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8">
                <SectionWrapper>
                    <div className="max-w-5xl mx-auto">
                        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-16">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Our Leadership Team</h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300">Meet the visionaries leading Machvanta India towards automation excellence</p>
                        </motion.div>

                        <div className="max-w-md mx-auto">
                            {/* Laxman Lad */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                                className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-600 rounded-lg overflow-hidden hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
                            >
                                <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">Laxman Lad</h3>
                                    <p className="text-cyan-600 dark:text-cyan-400 text-sm font-semibold mb-4">Managing Director</p>
                                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-5 leading-relaxed">
                                        With over 5+ years of experience in industrial automation, Laxman leads our strategic vision and drives innovation across all projects.
                                    </p>
                                    <div>
                                        <p className="text-xs font-bold text-slate-900 dark:text-white mb-3">Key Expertise:</p>
                                        <ul className="space-y-2">
                                            {["Strategic Planning", "Business Development", "Team Leadership"].map((expertise, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-sm">
                                                    <CheckCircle className="w-3 h-3 text-cyan-500 flex-shrink-0" />
                                                    {expertise}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </SectionWrapper>
            </section>
        </div>
    );
}

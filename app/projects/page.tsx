"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Zap, Target, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";

const projects = [
    {
        id: "01",
        title: "SPM Integration",
        subtitle: "Automotive Assembly Line",
        description: "End-to-end automation of precision assembly operations with robotic integration and real-time quality monitoring systems.",
        stats: { efficiency: "+45%", downtime: "-60%", output: "2x" },
        tags: ["PLC", "SCADA", "Robotics", "HMI"],
        image: "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=800&q=80",
        color: "from-cyan-500 to-blue-600"
    },
    {
        id: "02",
        title: "PLC & SCADA Retrofit",
        subtitle: "FMCG Manufacturing",
        description: "Complete modernization of legacy control systems with advanced monitoring capabilities and predictive maintenance.",
        stats: { efficiency: "+35%", downtime: "-50%", output: "1.8x" },
        tags: ["PLC Retrofit", "SCADA", "Data Logging", "HMI"],
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
        color: "from-violet-500 to-purple-600"
    },
    {
        id: "03",
        title: "Conveyor Automation",
        subtitle: "Packaging Industry",
        description: "Intelligent material handling system with automated sorting, vision-based quality control, and IoT connectivity.",
        stats: { efficiency: "+55%", downtime: "-70%", output: "2.5x" },
        tags: ["Conveyor", "Vision Systems", "IoT", "PLC"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
        color: "from-emerald-500 to-teal-600"
    },
    {
        id: "04",
        title: "Process Control",
        subtitle: "Pharmaceutical Batch",
        description: "GMP-compliant batch processing automation with electronic records and full regulatory compliance.",
        stats: { efficiency: "+40%", downtime: "-55%", output: "1.5x" },
        tags: ["Batch Control", "21 CFR Part 11", "SCADA"],
        image: "https://images.unsplash.com/photo-1563770660941-20978e870e26?w=800&q=80",
        color: "from-orange-500 to-red-600"
    }
];

const capabilities = [
    { icon: Zap, label: "Fast Deployment", value: "30% Faster" },
    { icon: Target, label: "Precision Control", value: "99.9% Accuracy" },
    { icon: TrendingUp, label: "ROI Timeline", value: "< 18 Months" },
    { icon: Award, label: "Success Rate", value: "100%" }
];

export default function ProjectsPage() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className="bg-white dark:bg-slate-950 min-h-screen overflow-hidden">
            {/* Hero Section - Editorial Style */}
            <section className="relative h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden -mt-1">
                {/* Animated Background */}
                <div className="absolute inset-0 bg-slate-100 dark:bg-slate-950">
                    <motion.div
                        className="absolute inset-0 opacity-30"
                        style={{ y: backgroundY }}
                    >
                        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />
                        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-[100px]" />
                    </motion.div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="text-center"
                    >
                        {/* Overline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-cyan-500 dark:text-cyan-400 font-mono text-sm tracking-[0.3em] uppercase mb-6"
                        >
                            Portfolio / Case Studies
                        </motion.p>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
                        >
                            Projects That
                            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                                Define Excellence
                            </span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-12 font-light"
                        >
                            Transforming industries through intelligent automation solutions
                        </motion.p>

                        {/* Stats Row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7 }}
                            className="flex flex-wrap justify-center gap-8 md:gap-16"
                        >
                            {[
                                { value: "50+", label: "Projects Delivered" },
                                { value: "15+", label: "Industries" },
                                { value: "98%", label: "Client Retention" }
                            ].map((stat, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">{stat.value}</div>
                                    <div className="text-sm text-slate-500 uppercase tracking-wider mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* Featured Projects - Stacked Cards - COMMENTED OUT FOR NOW
            <section className="relative py-24 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20"
                    >
                        <div>
                            <p className="text-cyan-500 font-mono text-sm tracking-wider uppercase mb-3">Featured Work</p>
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                                Selected Projects
                            </h2>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 max-w-md text-lg">
                            Each project represents our commitment to engineering excellence and client success.
                        </p>
                    </motion.div>

                    <div className="space-y-8">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className="group"
                            >
                                <div className={`relative flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center`}>
                                    <div className="w-full lg:w-1/2 relative">
                                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                                            <div className={`absolute -inset-[1px] bg-gradient-to-br ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                            <div className="absolute inset-0 bg-slate-100 dark:bg-slate-900 rounded-2xl overflow-hidden">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                                    unoptimized
                                                />
                                                <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent`} />

                                                <div className="absolute top-6 left-6">
                                                    <span className={`text-7xl md:text-8xl font-black bg-gradient-to-br ${project.color} bg-clip-text text-transparent opacity-80`}>
                                                        {project.id}
                                                    </span>
                                                </div>

                                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                                    <div className="flex gap-8">
                                                        {Object.entries(project.stats).map(([key, value]) => (
                                                            <div key={key} className="text-center">
                                                                <div className="text-2xl font-bold text-white">{value}</div>
                                                                <div className="text-xs text-white/60 uppercase tracking-wider capitalize">{key}</div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full lg:w-1/2 py-4">
                                        <div className="inline-flex items-center gap-2 mb-4">
                                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.color}`} />
                                            <span className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                                {project.subtitle}
                                            </span>
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                            {project.title}
                                        </h3>

                                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="mb-8">
                                            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">Technologies</p>
                                            <div className="flex flex-wrap gap-3">
                                                {project.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-4 py-2 text-sm font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-cyan-500 dark:hover:border-cyan-500 transition-colors"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <motion.div
                                            whileHover={{ x: 8 }}
                                            className="inline-flex items-center gap-2 text-cyan-500 font-medium cursor-pointer group/link"
                                        >
                                            <span>View Case Study</span>
                                            <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </motion.div>
                                    </div>
                                </div>

                                {index < projects.length - 1 && (
                                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-800 to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>
            */}

            {/* Capabilities Section - Horizontal Scroll Feel */}
            <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="text-cyan-500 font-mono text-sm tracking-wider uppercase mb-3">Why Choose Us</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                            Engineering Excellence
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {capabilities.map((cap, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                                className="group"
                            >
                                <div className="relative p-8 rounded-3xl bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 h-full backdrop-blur-sm">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                        <cap.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                                        {cap.value}
                                    </div>
                                    <div className="text-sm text-slate-500 dark:text-slate-400">
                                        {cap.label}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* Process Section - Timeline Style */}
            <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-4 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <p className="text-cyan-500 font-mono text-sm tracking-wider uppercase mb-3">Our Approach</p>
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
                            How We Deliver
                        </h2>
                    </motion.div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/50 to-violet-500/50" />

                        {[
                            { step: "01", title: "Discovery & Analysis", desc: "Deep dive into your processes, identifying automation opportunities and efficiency gaps." },
                            { step: "02", title: "Solution Design", desc: "Custom engineering solutions tailored to your specific industry requirements and goals." },
                            { step: "03", title: "Implementation", desc: "Precise execution with minimal disruption, ensuring seamless integration with existing systems." },
                            { step: "04", title: "Optimization", desc: "Continuous monitoring and refinement to maximize ROI and system performance." }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className={`relative flex items-center mb-12 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                                    <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
                                        <span className="text-5xl font-bold text-slate-200 dark:text-slate-800">{item.step}</span>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2 mb-3">{item.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 border-4 border-white dark:border-slate-950" />
                            </motion.div>
                        ))}
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
            </section>

            {/* CTA Section - Modern */}
            <section className="relative min-h-[calc(100vh-80px)] flex items-center py-16 overflow-hidden">
                <div className="absolute inset-0 bg-slate-950">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-violet-500/20 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Let's Build Something
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                                Extraordinary
                            </span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
                            Ready to transform your industrial operations? Let's discuss your next project.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 text-base px-8 py-6 rounded-full" asChild>
                                <Link href="/contact">
                                    Start a Project
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-700 text-white hover:bg-white/10 text-base px-8 py-6 rounded-full" asChild>
                                <Link href="/quote">
                                    Get a Quote
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}

"use client";

import SectionWrapper from "../ui/SectionWrapper";
import { GlowingCards, GlowingCard } from "@/components/ui/glowing-cards";
import {
    Factory,
    Car,
    FlaskConical,
    Wheat,
    Cpu,
    Droplets,
    Package,
    ShieldCheck,
    Shirt,
} from "lucide-react";

const industries = [
    {
        icon: Factory,
        title: "Manufacturing & Assembly",
        summary: "End-to-end automation for plant floors, conveyors, and assembly lines.",
        items: ["Conveyor automation", "Line balancing & takt-time control", "OEE & production analytics"],
    },
    {
        icon: Car,
        title: "Automotive & Auto Components",
        summary: "High-reliability control for critical automotive processes and testing.",
        items: ["Powertrain & body systems", "End-of-line testing", "Traceability & quality gates"],
    },
    {
        icon: FlaskConical,
        title: "Pharma & Chemicals",
        summary: "Validated, safe, and compliant process control for batch operations.",
        items: ["Batch & recipe management", "Environmental & safety interlocks", "21 CFR readiness"],
    },
    {
        icon: Wheat,
        title: "Food & Beverage",
        summary: "Hygienic automation with consistent quality and minimized downtime.",
        items: ["Packaging & labeling", "Cleaning-in-place (CIP) support", "Temperature & flow control"],
    },
    {
        icon: Package,
        title: "Packaging & FMCG",
        summary: "High-speed packaging, synchronized motion, and changeovers on demand.",
        items: ["SPM/SBM integration", "Servo/VFD motion", "Auto changeover & recipe"],
    },
    {
        icon: Shirt,
        title: "Textile & Garments",
        summary: "Automated control for weaving, dyeing, and finishing with better quality and uptime.",
        items: ["Loom & knitting automation", "Dyeing/finishing process control", "Energy-efficient drives & VFDs"],
    },
    {
        icon: Cpu,
        title: "Electronics & OEMs",
        summary: "Precise motion and quality checks for electronics production lines.",
        items: ["Pick & place systems", "Vision-assisted inspection", "Energy monitoring"],
    },
    {
        icon: Droplets,
        title: "Water & Utilities",
        summary: "Reliable control and monitoring for utilities and infrastructure.",
        items: ["Pumping & filtration", "Remote SCADA", "Energy-efficient drives"],
    },
    {
        icon: ShieldCheck,
        title: "Safety & Compliance",
        summary: "Integrated safety systems keeping people and assets protected.",
        items: ["Safety relays & PLCs", "Lock-out/tag-out logic", "Alarm & event handling"],
    },
];

const Industries = () => {
    return (
        <section className="relative py-24 bg-white dark:bg-darkbg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
                <SectionWrapper className="text-center mb-12">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Industries</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-3 mb-4">
                        Industries We Serve
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Scalable automation crafted for complex plants, high-speed lines, and compliance-driven environments.
                    </p>
                </SectionWrapper>

                <GlowingCards gap="1.5rem" maxWidth="72rem" padding="1rem 0">
                    {industries.map((industry, index) => {
                        const Icon = industry.icon;
                        return (
                            <GlowingCard key={industry.title} glowColor="#06b6d4" className="min-w-[18rem] max-w-[22rem]">
                                <div className="h-full flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 dark:bg-cyan-500/10 dark:text-cyan-300">
                                            <Icon className="w-6 h-6" />
                                        </span>
                                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{industry.title}</h3>
                                    </div>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{industry.summary}</p>
                                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-200">
                                        {industry.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2">
                                                <span className="mt-1 inline-block w-2 h-2 rounded-full bg-cyan-500" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </GlowingCard>
                        );
                    })}
                </GlowingCards>
            </div>
            {/* Section Separator */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        </section>
    );
};

export default Industries;

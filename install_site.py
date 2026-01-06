import os

# FULL PROJECT CODE MAPPING
# This dictionary contains the exact path and content for every file we designed.

files = {
    # ==========================================
    # CONFIGURATION & GLOBAL STYLES
    # ==========================================
    "tailwind.config.ts": r"""
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#06b6d4", // Electric Cyan
          dark: "#0891b2",
        },
        secondary: {
          DEFAULT: "#7c3aed", // Neon Purple
          dark: "#6d28d9",
        },
        darkbg: "#0f172a", // Deep Navy
      },
      animation: {
        "gradient-move": "gradient 8s linear infinite",
        "fade-in-up": "fadeInUp 0.5s ease-out forwards",
        "marquee": "marquee 20s linear infinite",
      },
      keyframes: {
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
""",

    "app/globals.css": r"""
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: #ffffff;
  --foreground: #0f172a;
}

.dark {
  --background: #0f172a;
  --foreground: #e2e8f0;
}

body {
  color: var(--foreground);
  background: var(--background);
  transition: color 0.3s, background-color 0.3s;
}

/* Custom Scrollbar for Industrial Feel */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 5px;
}
::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

.input-field {
  width: 100%;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  background-color: #f8fafc;
  outline: none;
  transition: all 0.2s;
}
.dark .input-field {
  background-color: #1e293b;
  border-color: #334155;
  color: white;
}
.input-field:focus {
  border-color: #06b6d4;
  box-shadow: 0 0 0 2px rgba(6, 182, 212, 0.2);
}
""",

    "public/grid.svg": r"""<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>""",

    # ==========================================
    # GLOBAL COMPONENTS (Navbar, Footer, UI)
    # ==========================================
    "components/theme-provider.tsx": r"""
"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
""",

    "components/ui/SectionWrapper.tsx": r"""
"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function SectionWrapper({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
""",

    "components/Navbar.tsx": r"""
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-darkbg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-2xl tracking-tight text-slate-800 dark:text-white">
                MACHVANTA
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            )}
            <Link
              href="/quote"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full font-medium transition-all shadow-lg shadow-primary/30"
            >
              Get Quote
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-darkbg border-b border-gray-200 dark:border-gray-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-200 hover:text-primary hover:bg-gray-50 dark:hover:bg-gray-800"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
""",

    "components/Footer.tsx": r"""
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="font-bold text-2xl text-slate-800 dark:text-white">
                MACHVANTA
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Empowering industries with efficient, safe, and future-ready automation solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Products', 'Contact'].map((item) => (
                <li key={item}>
                  <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Services</h3>
            <ul className="space-y-3">
              {['PLC/SCADA', 'Control Panels', 'Conveyor', 'Process Control'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <MapPin className="mt-1 flex-shrink-0 text-primary" size={18} />
                <span>Zen Square, 3rd Floor, Office No-305, Kharadi, Pune, Maharashtra 411014</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Phone className="flex-shrink-0 text-primary" size={18} />
                <span>+91 8788294925</span>
              </li>
              <li className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <Mail className="flex-shrink-0 text-primary" size={18} />
                <span>info@machvanta.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; 2024 Machvanta India Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
""",

    # ==========================================
    # HOMEPAGE COMPONENTS (Hero, Features, etc.)
    # ==========================================
    "components/home/Hero.tsx": r"""
"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-darkbg">
      <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/40 rounded-full blur-[120px] animate-gradient-move mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/40 rounded-full blur-[120px] animate-gradient-move animation-delay-2000 mix-blend-multiply dark:mix-blend-screen" />
      </div>
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary dark:text-cyan-400 font-semibold text-sm mb-6 border border-primary/20">
            Industrial Automation Excellence
          </span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">
          Empowering Industries with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Smart Automation</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-4 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-10">
          We deliver innovative control panels, PLC/SCADA integration, and technical manpower to maximize productivity and ensure future-ready operations.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/services" className="group flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:scale-105">
            Explore Services <ArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link href="/contact" className="flex items-center justify-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-all">
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
""",

    "components/home/Features.tsx": r"""
"use client";
import { CheckCircle2, Users, Clock, Zap } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const features = [
  { icon: Users, title: "Expert Team", desc: "Skilled engineers, PLC programmers, and technicians dedicated to precision.", color: "text-blue-500" },
  { icon: CheckCircle2, title: "Quality Manufacturing", desc: "Top-tier control panels built to international safety and efficiency standards.", color: "text-green-500" },
  { icon: Zap, title: "Cost-Effective", desc: "Smart engineering designs that save costs without compromising quality.", color: "text-yellow-500" },
  { icon: Clock, title: "Fast Response", desc: "24/7 support and rapid service deployment to minimize your downtime.", color: "text-purple-500" },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Why Choose Machvanta?</h2>
        </SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <div className="h-full bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700 group">
                <div className={`mb-6 p-3 rounded-lg bg-gray-50 dark:bg-slate-700/50 w-fit ${feature.color}`}><feature.icon size={32} /></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
""",

    "components/home/Industries.tsx": r"""
"use client";
import { Factory, Package, Droplets, Zap, Truck, Beaker, Flame, Thermometer } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

const industries = [
  { name: "Automotive", icon: Truck },
  { name: "FMCG", icon: Package },
  { name: "Pharmaceuticals", icon: Beaker },
  { name: "Manufacturing", icon: Factory },
  { name: "Water Treatment", icon: Droplets },
  { name: "Energy & Power", icon: Zap },
  { name: "Oil & Gas", icon: Flame },
  { name: "Boiler Systems", icon: Thermometer },
];

export default function Industries() {
  return (
    <section className="py-24 bg-white dark:bg-darkbg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionWrapper className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Industries We Serve</h2>
        </SectionWrapper>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((ind, index) => (
            <SectionWrapper key={index} delay={index * 0.05}>
              <div className="flex flex-col items-center justify-center p-6 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-primary/5 dark:hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20">
                <ind.icon className="w-10 h-10 text-gray-400 group-hover:text-primary transition-colors mb-4" />
                <span className="font-semibold text-slate-700 dark:text-gray-200">{ind.name}</span>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
""",

    "components/home/TechStack.tsx": r"""
"use client";
const technologies = ["PLC Systems", "SCADA Integration", "HMI Design", "Servo Drives", "VFD Control", "IIoT", "Motion Control", "Robotics", "Safety Systems"];
export default function TechStack() {
  return (
    <section className="py-12 bg-slate-900 border-y border-slate-800 overflow-hidden">
      <div className="relative flex overflow-x-hidden">
        <div className="animate-marquee whitespace-nowrap flex space-x-12">
          {[...technologies, ...technologies].map((tech, i) => (
            <span key={i} className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-300 opacity-70">{tech}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
""",

    "components/home/CTA.tsx": r"""
"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionWrapper from "../ui/SectionWrapper";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-secondary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <SectionWrapper>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Operations?</h2>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 hover:scale-105 transition-all shadow-xl">
            Get a Quote <ArrowRight size={20} />
          </Link>
        </SectionWrapper>
      </div>
    </section>
  );
}
""",

    # ==========================================
    # DATA LAYER
    # ==========================================
    "lib/servicesData.ts": r"""
import { Monitor, Settings, Layers, Box, Gauge, Radio } from "lucide-react";

export interface Service {
  id: string; slug: string; title: string; shortDescription: string; fullDescription: string; icon: any; features: string[]; applications: string[];
}

export const servicesData: Service[] = [
  {
    id: "1", slug: "plc-scada-integration", title: "PLC/SCADA System Integration",
    shortDescription: "Real-time monitoring and control systems.",
    fullDescription: "Our PLC/SCADA integration services provide the backbone for modern industrial automation. We design, program, and commission systems that offer real-time visibility into your manufacturing processes.",
    icon: Monitor,
    features: ["Custom PLC Logic Development", "SCADA Screen Design", "Real-time Data Logging", "Legacy System Migration"],
    applications: ["Automotive Assembly", "Water Treatment", "Pharma Batch Processing"]
  },
  {
    id: "2", slug: "custom-control-systems", title: "Custom Control Systems",
    shortDescription: "Tailored control panel solutions engineered for your machinery.",
    fullDescription: "Machvanta designs custom control systems tailored to specific requirements. From concept to commissioning, we ensure your control logic is robust and safety-compliant.",
    icon: Settings,
    features: ["Bespoke Logic Design", "Safety PLC Integration", "Space-optimized Layouts"],
    applications: ["SPM", "Material Handling", "Packaging Machinery"]
  },
  {
    id: "3", slug: "conveyor-line-automation", title: "Conveyor Line Automation",
    shortDescription: "High-speed, intelligent conveyor systems.",
    fullDescription: "Automate the movement of goods with our smart conveyor solutions integrating sensors, VFDs, and motion controllers.",
    icon: Layers,
    features: ["Variable Speed Control", "Traffic Management Logic", "Safety Interlocks"],
    applications: ["Logistics", "Airport Baggage", "Bottling Lines"]
  },
  {
    id: "4", slug: "industrial-control-panels", title: "Industrial Control Panel Mfg",
    shortDescription: "High-quality MCC, PCC, and APFC panels.",
    fullDescription: "We manufacture a wide range of industrial control panels using premium switchgear and rigorous testing protocols.",
    icon: Box,
    features: ["MCC & PCC Panels", "VFD & Servo Drive Panels", "IP54/IP65 Enclosures"],
    applications: ["Sugar Industries", "Steel Plants", "Substations"]
  },
  {
    id: "5", slug: "servo-vfd-systems", title: "Servo & VFD Systems",
    shortDescription: "Precision motion control and energy-efficient drive solutions.",
    fullDescription: "Enhance precision and energy efficiency. We specialize in sizing, installing, and tuning VFDs and Servo systems.",
    icon: Gauge,
    features: ["Energy Saving VFD Logic", "Multi-axis Synchronization", "Regenerative Braking"],
    applications: ["CNC Machines", "Printing Presses", "Robotic Arms"]
  },
  {
    id: "6", slug: "scada-iiot-solutions", title: "SCADA & IIoT Solutions",
    shortDescription: "Industry 4.0 upgrades for smart factories.",
    fullDescription: "Transform your facility into a Smart Factory. Our IIoT solutions connect legacy machines to the cloud for monitoring.",
    icon: Radio,
    features: ["Cloud Connectivity", "OEE Dashboards", "Predictive Maintenance"],
    applications: ["Smart Factories", "Remote Pump Stations", "Solar Plants"]
  }
];
""",

    # ==========================================
    # PAGES (App Router)
    # ==========================================
    "app/page.tsx": r"""
import Hero from "@/components/home/Hero";
import Features from "@/components/home/Features";
import Industries from "@/components/home/Industries";
import TechStack from "@/components/home/TechStack";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <TechStack />
      <Features />
      <Industries />
      <CTA />
    </div>
  );
}
""",

    "app/services/page.tsx": r"""
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/servicesData";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Machvanta India Pvt Ltd",
  description: "Explore our comprehensive industrial automation services including PLC Programming, Control Panels, and SCADA integration.",
};

export default function ServicesPage() {
  return (
    <div className="bg-slate-50 dark:bg-darkbg min-h-screen">
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 bg-[url('/grid.svg')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">End-to-end automation solutions designed to optimize your production lifecycle.</p>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <SectionWrapper key={service.id} delay={index * 0.1}>
              <Link href={`/services/${service.slug}`} className="group block h-full bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700 relative overflow-hidden">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{service.shortDescription}</p>
                <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">Learn More <ArrowRight className="ml-2 w-4 h-4" /></div>
              </Link>
            </SectionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
""",

    "app/services/[slug]/page.tsx": r"""
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/servicesData";
import SectionWrapper from "@/components/ui/SectionWrapper";

export async function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return { title: `${service.title} | Machvanta Services`, description: service.shortDescription };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();

  return (
    <div className="min-h-screen bg-white dark:bg-darkbg">
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <Link href="/services" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Services</Link>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{service.title}</h1>
          <p className="text-xl text-gray-300 max-w-2xl">{service.shortDescription}</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <SectionWrapper>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Overview</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-10">{service.fullDescription}</p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/50 p-4 rounded-lg">
                    <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </SectionWrapper>
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                <h3 className="text-2xl font-bold mb-4 relative z-10">Need this solution?</h3>
                <Link href="/quote" className="block w-full text-center bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded-lg transition-colors relative z-10">Get a Custom Quote</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
""",

    "app/about/page.tsx": r"""
import { Target, Lightbulb, Users } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = { title: "About Us | Machvanta India Pvt Ltd", description: "Learn about our mission, vision, and the expert team." };

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-darkbg min-h-screen">
      <section className="relative py-20 bg-slate-50 dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionWrapper>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">Engineering the Future of Industry</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">Machvanta India Pvt Ltd is dedicated to delivering high-quality control panels and automation solutions.</p>
          </SectionWrapper>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <SectionWrapper className="bg-blue-50 dark:bg-slate-800 p-8 rounded-2xl border border-blue-100 dark:border-slate-700">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-6"><Target size={24} /></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">To deliver high-quality control panels, automation solutions, technical manpower and maintenance services.</p>
          </SectionWrapper>
          <SectionWrapper delay={0.2} className="bg-purple-50 dark:bg-slate-800 p-8 rounded-2xl border border-purple-100 dark:border-slate-700">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white mb-6"><Lightbulb size={24} /></div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">To become India's most reliable and innovative automation and control panel company.</p>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}
""",

    "app/products/page.tsx": r"""
import Link from "next/link";
import { Package, Zap, Cpu, Server, Settings, ArrowRight } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Metadata } from "next";

export const metadata: Metadata = { title: "Products | Machvanta India Pvt Ltd", description: "Supply of industrial automation components." };
const categories = [
  { name: "PLC & Controllers", desc: "Siemens, Allen Bradley, Mitsubishi, Delta, Omron", icon: Cpu },
  { name: "Drives (VFD & Servo)", desc: "Yaskawa, Danfoss, Schneider, Fuji, INVT", icon: Zap },
  { name: "HMI & SCADA", desc: "Touch panels and industrial PC solutions.", icon: Server },
  { name: "Sensors", desc: "Proximity, Photoelectric, Pressure, Flow.", icon: Settings },
  { name: "Switchgear", desc: "Contactors, MCCBs, MCBs, Relays.", icon: Package },
];

export default function ProductsPage() {
  return (
    <div className="bg-white dark:bg-darkbg min-h-screen">
      <section className="bg-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <SectionWrapper>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Automation Materials Supply</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">We supply genuine, multi-brand automation components at competitive prices.</p>
          </SectionWrapper>
        </div>
      </section>
      <section className="py-20 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <SectionWrapper key={index} delay={index * 0.1}>
              <div className="h-full border border-gray-200 dark:border-gray-800 rounded-xl p-8 hover:border-primary/50 transition-colors bg-slate-50 dark:bg-slate-800/50">
                <div className="w-12 h-12 bg-white dark:bg-slate-700 rounded-lg flex items-center justify-center text-primary mb-6 shadow-sm"><cat.icon size={24} /></div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{cat.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{cat.desc}</p>
                <Link href="/quote" className="text-primary font-semibold text-sm flex items-center hover:underline">Request Quote <ArrowRight className="ml-1 w-4 h-4" /></Link>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </section>
    </div>
  );
}
""",

    # ==========================================
    # API ROUTES & CONTACT FORMS
    # ==========================================
    "app/api/contact/route.ts": r"""
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT), secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER, to: 'info@machvanta.com', subject: `Contact: ${data.subject}`,
      html: `<p>Name: ${data.name}</p><p>Email: ${data.email}</p><p>Message: ${data.message}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (error) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
""",

    "app/api/quote/route.ts": r"""
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, port: Number(process.env.SMTP_PORT), secure: true,
      auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
    });
    await transporter.sendMail({
      from: process.env.SMTP_USER, to: 'crm@machvanta.com', subject: `Quote: ${data.company}`,
      html: `<p>Name: ${data.name}</p><p>Project: ${data.projectType}</p><p>Desc: ${data.description}</p>`
    });
    return NextResponse.json({ success: true });
  } catch (error) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
""",

    "app/contact/page.tsx": r"""
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function ContactPage() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
      if (res.ok) { toast.success("Sent!"); reset(); } else { toast.error("Error sending."); }
    } catch { toast.error("Error."); } finally { setIsSubmitting(false); }
  };

  return (
    <div className="bg-white dark:bg-darkbg min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <SectionWrapper>
          <h1 className="text-4xl font-bold mb-8 dark:text-white">Get in Touch</h1>
          <div className="space-y-6 text-gray-600 dark:text-gray-300">
            <div className="flex gap-4"><MapPin className="text-primary" /> <p>Zen Square, Kharadi, Pune</p></div>
            <div className="flex gap-4"><Phone className="text-primary" /> <p>+91 8788294925</p></div>
            <div className="flex gap-4"><Mail className="text-primary" /> <p>info@machvanta.com</p></div>
          </div>
        </SectionWrapper>
        <SectionWrapper delay={0.2}>
          <form onSubmit={handleSubmit(onSubmit)} className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl">
            <div className="mb-4"><input {...register("name", {required:true})} placeholder="Name" className="input-field" /></div>
            <div className="mb-4"><input {...register("email", {required:true})} placeholder="Email" className="input-field" /></div>
            <div className="mb-4"><textarea {...register("message", {required:true})} placeholder="Message" rows={4} className="input-field" /></div>
            <button disabled={isSubmitting} className="w-full bg-primary text-white py-3 rounded-lg font-bold">{isSubmitting ? "Sending..." : "Send Message"}</button>
          </form>
        </SectionWrapper>
      </div>
    </div>
  );
}
""",

    "app/quote/page.tsx": r"""
"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function QuotePage() {
  const { register, handleSubmit, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/quote', { method: 'POST', body: JSON.stringify(data) });
      if (res.ok) { toast.success("Quote Requested!"); reset(); } else { toast.error("Error."); }
    } catch { toast.error("Error."); } finally { setIsSubmitting(false); }
  };

  return (
    <div className="bg-slate-50 dark:bg-darkbg min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4">
        <SectionWrapper className="bg-white dark:bg-slate-900 p-10 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-8 dark:text-white text-center">Request a Quote</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input {...register("name")} placeholder="Name" className="input-field" />
            <input {...register("company")} placeholder="Company" className="input-field" />
            <input {...register("email")} placeholder="Email" className="input-field" />
            <input {...register("phone")} placeholder="Phone" className="input-field" />
            <select {...register("projectType")} className="input-field"><option>New Installation</option><option>Retrofit</option></select>
            <textarea {...register("description")} placeholder="Project Details" className="input-field col-span-full" rows={4} />
            <button disabled={isSubmitting} className="col-span-full bg-primary text-white py-4 rounded-xl font-bold">{isSubmitting ? "Submitting..." : "Submit Request"}</button>
          </form>
        </SectionWrapper>
      </div>
    </div>
  );
}
""",

    "app/not-found.tsx": r"""
import Link from "next/link";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 dark:bg-darkbg text-center px-4">
      <div className="w-24 h-24 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500 mb-6 animate-pulse"><AlertTriangle size={48} /></div>
      <h1 className="text-6xl font-bold text-slate-900 dark:text-white mb-2">404</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mb-10">System Offline. Page not found.</p>
      <Link href="/" className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold shadow-lg"><Home size={20} /> Return Home</Link>
    </div>
  );
}
""",

    "app/layout.tsx": r"""
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: "Machvanta India Pvt Ltd", description: "Industrial Automation Experts" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow pt-20">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
"""
}

# ==========================================
# FILE WRITING LOGIC
# ==========================================
for filepath, content in files.items():
    directory = os.path.dirname(filepath)
    if directory and not os.path.exists(directory):
        os.makedirs(directory)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.strip())
        print(f"✅ Generated: {filepath}")

print("\n🎉 WEBSITE GENERATION COMPLETE!")
print("===================================================")
print("1. Run: npm install framer-motion lucide-react next-themes clsx tailwind-merge sonner react-hook-form nodemailer")
print("2. Run: npm run dev")
print("===================================================")
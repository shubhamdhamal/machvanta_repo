import os
import json

# ==========================================
# 1. CONFIGURATION FILES (package.json, tsconfig, etc.)
# ==========================================

package_json = {
  "name": "machvanta-web",
  "version": "0.1.0",
  "private": True,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "clsx": "^2.1.0",
    "framer-motion": "^11.0.8",
    "lucide-react": "^0.344.0",
    "next": "14.1.0",
    "next-themes": "^0.2.1",
    "nodemailer": "^6.9.10",
    "react": "^18",
    "react-dom": "^18",
    "react-hook-form": "^7.51.0",
    "sonner": "^1.4.3",
    "tailwind-merge": "^2.2.1"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^18",
    "@types/react-dom": "^18",
    "@types/nodemailer": "^6.4.14",
    "autoprefixer": "^10.0.1",
    "eslint": "^8",
    "eslint-config-next": "14.1.0",
    "postcss": "^8",
    "tailwindcss": "^3.3.0",
    "typescript": "^5"
  }
}

tsconfig_json = {
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": True,
    "skipLibCheck": True,
    "strict": True,
    "noEmit": True,
    "esModuleInterop": True,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": True,
    "isolatedModules": True,
    "jsx": "preserve",
    "incremental": True,
    "plugins": [{"name": "next"}],
    "paths": {"@/*": ["./*"]}
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

next_config = """
/** @type {import('next').NextConfig} */
const nextConfig = {};
export default nextConfig;
"""

postcss_config = """
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
"""

# ==========================================
# 2. APP CODE (Pages & Components)
# ==========================================

files = {
    "package.json": json.dumps(package_json, indent=2),
    "tsconfig.json": json.dumps(tsconfig_json, indent=2),
    "next.config.mjs": next_config,
    "postcss.config.js": postcss_config,
    "tailwind.config.ts": r"""
import type { Config } from "tailwindcss";
const config: Config = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", foreground: "var(--foreground)",
        primary: { DEFAULT: "#06b6d4", dark: "#0891b2" },
        secondary: { DEFAULT: "#7c3aed", dark: "#6d28d9" },
        darkbg: "#0f172a",
      },
      animation: { "gradient-move": "gradient 8s linear infinite", "marquee": "marquee 20s linear infinite" },
      keyframes: {
        gradient: { "0%, 100%": { backgroundPosition: "0% 50%" }, "50%": { backgroundPosition: "100% 50%" } },
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } }
      },
    },
  },
  plugins: [],
};
export default config;
""",

    "app/globals.css": r"""
@tailwind base; @tailwind components; @tailwind utilities;
:root { --background: #ffffff; --foreground: #0f172a; }
.dark { --background: #0f172a; --foreground: #e2e8f0; }
body { color: var(--foreground); background: var(--background); transition: color 0.3s, background-color 0.3s; }
.input-field { width: 100%; padding: 12px 16px; border-radius: 8px; border: 1px solid #e2e8f0; background-color: #f8fafc; outline: none; transition: all 0.2s; }
.dark .input-field { background-color: #1e293b; border-color: #334155; color: white; }
""",

    "public/grid.svg": r"""<svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" stroke-width="1" opacity="0.1"/></pattern></defs><rect width="100%" height="100%" fill="url(#grid)" /></svg>""",

    "components/theme-provider.tsx": r"""
"use client"; import * as React from "react"; import { ThemeProvider as NextThemesProvider } from "next-themes"; import { type ThemeProviderProps } from "next-themes/dist/types";
export function ThemeProvider({ children, ...props }: ThemeProviderProps) { return <NextThemesProvider {...props}>{children}</NextThemesProvider>; }
""",

    "components/ui/SectionWrapper.tsx": r"""
"use client"; import { motion } from "framer-motion"; import { ReactNode } from "react";
export default function SectionWrapper({ children, className = "", delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.6, delay, ease: "easeOut" }} className={className}>{children}</motion.div>;
}
""",

    "components/Navbar.tsx": r"""
"use client"; import { useState, useEffect } from "react"; import Link from "next/link"; import { useTheme } from "next-themes"; import { Menu, X, Sun, Moon } from "lucide-react"; import { motion, AnimatePresence } from "framer-motion";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); const { theme, setTheme } = useTheme(); const [mounted, setMounted] = useState(false); useEffect(() => setMounted(true), []);
  const navLinks = [{ name: "Home", href: "/" }, { name: "About", href: "/about" }, { name: "Services", href: "/services" }, { name: "Products", href: "/products" }, { name: "Contact", href: "/contact" }];
  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-darkbg/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl tracking-tight text-slate-800 dark:text-white flex items-center gap-2"><div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white">M</div>MACHVANTA</Link>
        <div className="hidden md:flex space-x-8">{navLinks.map(link => <Link key={link.name} href={link.href} className="text-gray-600 dark:text-gray-300 hover:text-cyan-500">{link.name}</Link>)}</div>
        <div className="hidden md:flex items-center gap-4">{mounted && <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="p-2"><Sun size={20}/></button>}<Link href="/quote" className="bg-cyan-500 text-white px-5 py-2 rounded-full">Get Quote</Link></div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2">{isOpen ? <X /> : <Menu />}</button>
      </div>
      <AnimatePresence>{isOpen && <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden bg-white dark:bg-darkbg overflow-hidden"><div className="px-4 py-4 space-y-2">{navLinks.map(link => <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="block py-2 text-gray-700 dark:text-gray-200">{link.name}</Link>)}</div></motion.div>}</AnimatePresence>
    </nav>
  );
}; export default Navbar;
""",

    "components/Footer.tsx": r"""
import Link from "next/link"; import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => (
  <footer className="bg-slate-50 dark:bg-slate-900 border-t border-gray-200 dark:border-gray-800 pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
      <div><h3 className="text-2xl font-bold dark:text-white mb-4">MACHVANTA</h3><p className="text-gray-600 dark:text-gray-400">Future-ready automation.</p></div>
      <div><h3 className="font-bold dark:text-white mb-4">Contact</h3><ul className="space-y-2 text-gray-600 dark:text-gray-400"><li><MapPin size={16} className="inline mr-2"/>Pune, India</li><li><Phone size={16} className="inline mr-2"/>+91 7822925356</li><li><Mail size={16} className="inline mr-2"/>info@machvanta.com</li></ul></div>
    </div>
  </footer>
); export default Footer;
""",

    "components/home/Hero.tsx": r"""
"use client"; import Link from "next/link"; import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-darkbg">
      <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/40 rounded-full blur-[120px] animate-gradient-move mix-blend-multiply dark:mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/40 rounded-full blur-[120px] animate-gradient-move mix-blend-multiply dark:mix-blend-screen" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6">Empowering Industries with <span className="text-cyan-500">Smart Automation</span></h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link href="/services" className="bg-cyan-500 text-white px-8 py-4 rounded-full font-bold shadow-lg">Explore Services</Link>
            <Link href="/contact" className="bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-gray-200 dark:border-gray-700 px-8 py-4 rounded-full font-bold">Contact Us</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
""",

    "components/home/Features.tsx": r"""
"use client"; import { Users, CheckCircle2, Zap, Clock } from "lucide-react"; import SectionWrapper from "../ui/SectionWrapper";
const features = [{icon:Users,title:"Expert Team",desc:"Skilled engineers."},{icon:CheckCircle2,title:"Quality",desc:"Top-tier panels."},{icon:Zap,title:"Cost-Effective",desc:"Smart designs."},{icon:Clock,title:"Fast Response",desc:"24/7 support."}];
export default function Features() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((f, i) => <SectionWrapper key={i} delay={i*0.1}><div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700"><f.icon className="mb-4 text-cyan-500" size={32}/><h3 className="font-bold text-xl dark:text-white mb-2">{f.title}</h3><p className="text-gray-600 dark:text-gray-400">{f.desc}</p></div></SectionWrapper>)}
      </div>
    </section>
  );
}
""",

    "lib/servicesData.ts": r"""
import { Monitor, Settings, Layers, Box, Gauge, Radio } from "lucide-react";
export const servicesData = [
  { id: "1", slug: "plc-scada-integration", title: "PLC/SCADA System Integration", shortDescription: "Real-time monitoring and control systems.", fullDescription: "Complete PLC and SCADA solutions.", icon: Monitor, features: ["Custom Logic", "HMI Design"], applications: ["Automotive", "Pharma"] },
  { id: "2", slug: "custom-control-systems", title: "Custom Control Systems", shortDescription: "Tailored control panel solutions.", fullDescription: "Bespoke logic design and panels.", icon: Settings, features: ["Safety PLC", "Panel Layouts"], applications: ["SPM", "Packaging"] },
  { id: "3", slug: "conveyor-line-automation", title: "Conveyor Line Automation", shortDescription: "High-speed conveyor systems.", fullDescription: "Automate movement of goods.", icon: Layers, features: ["VFD Control", "Traffic Logic"], applications: ["Logistics", "Bottling"] },
  { id: "4", slug: "industrial-control-panels", title: "Industrial Control Panels", shortDescription: "MCC, PCC, APFC panels.", fullDescription: "High quality switchgear panels.", icon: Box, features: ["IP54/65", "VFD Panels"], applications: ["Steel", "Sugar"] },
  { id: "5", slug: "servo-vfd-systems", title: "Servo & VFD Systems", shortDescription: "Precision motion control.", fullDescription: "Energy efficient drive solutions.", icon: Gauge, features: ["Multi-axis", "Regenerative Braking"], applications: ["CNC", "Robotics"] },
  { id: "6", slug: "scada-iiot", title: "SCADA & IIoT", shortDescription: "Industry 4.0 upgrades.", fullDescription: "Cloud connectivity and dashboards.", icon: Radio, features: ["OEE Dashboards", "Remote Access"], applications: ["Smart Factory", "Solar"] }
];
""",

    "app/page.tsx": r"""
import Hero from "@/components/home/Hero"; import Features from "@/components/home/Features";
export default function Home() { return <div className="flex flex-col gap-0"><Hero /><Features /></div>; }
""",

    "app/services/page.tsx": r"""
import Link from "next/link"; import { servicesData } from "@/lib/servicesData"; import SectionWrapper from "@/components/ui/SectionWrapper";
export default function ServicesPage() {
  return (
    <div className="bg-slate-50 dark:bg-darkbg min-h-screen pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center dark:text-white">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{servicesData.map((s, i) => <SectionWrapper key={s.id} delay={i*0.1}><Link href={`/services/${s.slug}`} className="block h-full bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-sm hover:shadow-xl dark:border-gray-700 border"><s.icon className="w-10 h-10 text-cyan-500 mb-4"/><h2 className="text-xl font-bold mb-2 dark:text-white">{s.title}</h2><p className="text-gray-600 dark:text-gray-400">{s.shortDescription}</p></Link></SectionWrapper>)}</div>
      </div>
    </div>
  );
}
""",

    "app/services/[slug]/page.tsx": r"""
import { notFound } from "next/navigation"; import Link from "next/link"; import { ArrowLeft } from "lucide-react"; import { servicesData } from "@/lib/servicesData";
export async function generateStaticParams() { return servicesData.map((s) => ({ slug: s.slug })); }
export default function Page({ params }: { params: { slug: string } }) {
  const service = servicesData.find((s) => s.slug === params.slug); if (!service) notFound();
  return (
    <div className="min-h-screen bg-white dark:bg-darkbg pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/services" className="text-gray-500 hover:text-cyan-500 flex items-center mb-6"><ArrowLeft className="mr-2" size={16}/> Back</Link>
        <h1 className="text-4xl font-bold mb-6 dark:text-white">{service.title}</h1>
        <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{service.fullDescription}</p>
        <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-xl">
          <h3 className="font-bold mb-4 dark:text-white">Key Features</h3>
          <ul className="list-disc pl-5 space-y-2 dark:text-gray-300">{service.features.map(f => <li key={f}>{f}</li>)}</ul>
        </div>
        <div className="mt-8 text-center"><Link href="/quote" className="bg-cyan-500 text-white px-8 py-3 rounded-lg font-bold">Get a Quote for this Service</Link></div>
      </div>
    </div>
  );
}
""",

    "app/contact/page.tsx": r"""
"use client"; import { useForm } from "react-hook-form"; import { toast } from "sonner";
export default function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => { await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data)}); toast.success("Sent!"); };
  return (
    <div className="min-h-screen bg-white dark:bg-darkbg pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Contact Us</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <input {...register("name")} placeholder="Name" className="input-field" required />
          <input {...register("email")} placeholder="Email" className="input-field" required />
          <textarea {...register("message")} placeholder="Message" rows={5} className="input-field" required />
          <button className="w-full bg-cyan-500 text-white py-3 rounded-lg font-bold">Send Message</button>
        </form>
      </div>
    </div>
  );
}
""",

    "app/quote/page.tsx": r"""
"use client"; import { useForm } from "react-hook-form"; import { toast } from "sonner";
export default function Quote() {
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data: any) => { await fetch('/api/quote', { method: 'POST', body: JSON.stringify(data)}); toast.success("Quote Requested!"); };
  return (
    <div className="min-h-screen bg-white dark:bg-darkbg pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 dark:text-white">Request a Quote</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input {...register("name")} placeholder="Name" className="input-field" required />
          <input {...register("company")} placeholder="Company" className="input-field" required />
          <input {...register("email")} placeholder="Email" className="input-field" required />
          <input {...register("phone")} placeholder="Phone" className="input-field" required />
          <textarea {...register("details")} placeholder="Project Details" rows={5} className="input-field col-span-full" required />
          <button className="col-span-full bg-cyan-500 text-white py-3 rounded-lg font-bold">Submit Request</button>
        </form>
      </div>
    </div>
  );
}
""",

    "app/api/contact/route.ts": r"""
import { NextResponse } from 'next/server'; import nodemailer from 'nodemailer';
export async function POST(req: Request) {
  try { const data = await req.json(); console.log("Contact Data:", data); return NextResponse.json({ success: true }); }
  catch (e) { return NextResponse.json({ error: 'Failed' }, { status: 500 }); }
}
""",

    "app/api/quote/route.ts": r"""
import { NextResponse } from 'next/server';
export async function POST(req: Request) { return NextResponse.json({ success: true }); }
""",

    "app/layout.tsx": r"""
import type { Metadata } from "next"; import { Inter } from "next/font/google"; import "./globals.css"; import { ThemeProvider } from "@/components/theme-provider"; import Navbar from "@/components/Navbar"; import Footer from "@/components/Footer"; import { Toaster } from "sonner";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = { title: "Machvanta India Pvt Ltd", description: "Industrial Automation" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex flex-col min-h-screen"><Navbar /><main className="flex-grow">{children}</main><Footer /></div>
          <Toaster position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
"""
}

# ==========================================
# WRITE FILES
# ==========================================
for filepath, content in files.items():
    directory = os.path.dirname(filepath)
    if directory and not os.path.exists(directory):
        os.makedirs(directory)
    
    with open(filepath, "w", encoding="utf-8") as f:
        f.write(content.strip())
        print(f"✅ Created: {filepath}")

print("\n🎉 RECOVERY COMPLETE!")
print("Run these commands now:")
print("1. npm install")
print("2. npm run dev")
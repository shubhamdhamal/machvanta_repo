"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageSquare, FileText, Settings, Wrench, CheckCircle2, Zap, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Carousel from "@/components/ui/carousel";

const allServices = [
  {
    id: "service-1",
    title: "PLC/SCADA System Integration",
    summary: "Real-time monitoring and control systems. PLC handles field-level automation while SCADA provides central control interface with live monitoring, alarms, and data logging.",
    label: "Automation",
    url: "/services/plc-scada-integration",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    id: "service-2",
    title: "Custom Control Systems",
    summary: "Specially designed automation solutions created to meet unique requirements. Fully customizable logic, interface, and hardware for higher accuracy, efficiency, and safety.",
    label: "Custom Solutions",
    url: "/services/custom-control-systems",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  },
  {
    id: "service-3",
    title: "Conveyor Line Automation",
    summary: "Streamlines material movement, reduces manual handling, and ensures faster, safer production flow. High speed, accuracy with smart sensors and PLC control for auto-sorting and routing.",
    label: "Material Handling",
    url: "/services/conveyor-line-automation",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
  },
  {
    id: "service-4",
    title: "Process Control Solutions",
    summary: "Ensures manufacturing processes run efficiently, safely, and consistently by maintaining critical parameters like temperature, pressure, flow, and level within desired limits.",
    label: "Process Control",
    url: "/services/process-control",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
  },
  {
    id: "service-5",
    title: "SPM & SBM Integration",
    summary: "High speed, accuracy, and fully automated production. Servo motors feed products with precise synchronization. Automatic changeover for different packet sizes and products.",
    label: "Packaging",
    url: "/services/spm-sbm-integration",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  },
  {
    id: "service-6",
    title: "Servo & VFD Systems",
    summary: "Precision motion control and energy-efficient drive solutions. Servo for high-accuracy positioning, VFD for speed control of motors. Ideal for pumps, fans, conveyors, and CNC machines.",
    label: "Motion Control",
    url: "/services/servo-vfd-systems",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
  },
  {
    id: "service-7",
    title: "Industrial Control Panel Manufacturing",
    summary: "High-quality MCC, PCC, APFC, PLC panels, VFD/Servo panels, and Sugar Industry Electrical Panels. Premium switchgear with rigorous testing protocols.",
    label: "Manufacturing",
    url: "/services/industrial-control-panels",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop",
  },
  {
    id: "service-8",
    title: "Drive & Motion Automation",
    summary: "Automates motor-driven processes for precise speed, position, and torque control. VFD and Servo Drives with PLC/Motion Controllers for coordination and automation logic.",
    label: "Drives",
    url: "/services/drive-motion-automation",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
  },
  {
    id: "service-9",
    title: "SCADA & IIoT Solutions",
    summary: "Industry 4.0 upgrades for smart factories. Real-time visualization, production data logging, energy monitoring, and cloud-based analytics for remote monitoring and predictive maintenance.",
    label: "Industry 4.0",
    url: "/services/scada-iiot",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  },
  {
    id: "service-10",
    title: "Control System Integration & Retrofitting",
    summary: "Upgrade old or obsolete PLC/Relay panels to modern automation systems. Replaces outdated relays with modern PLCs, HMIs, and SCADA systems with minimal downtime.",
    label: "Retrofitting",
    url: "/services/retrofitting",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
  },
  {
    id: "service-11",
    title: "Machine Automation & SPM Solutions",
    summary: "Complete automation solutions including assembly automation for faster production, packaging automation for uniform quality, material handling with automated conveyors and lifts, and pick & place systems with high speed and precision.",
    label: "Machine Automation",
    url: "/services/machine-automation-spm",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=400&h=300&fit=crop",
  },
  {
    id: "service-12",
    title: "Electrical & On-Site Services",
    summary: "Comprehensive electrical services including industrial wiring and panel installation, fast electrical troubleshooting, preventive maintenance, commissioning support, and 24/7 onsite/remote support for immediate assistance.",
    label: "Support Services",
    url: "/services/electrical-onsite",
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=300&fit=crop",
  },
];

const whatWeOffer = [
  {
    icon: Layers,
    title: "System Integration",
    description: "Complete PLC/SCADA system integration with seamless connectivity and optimal performance.",
    features: ["PLC/SCADA integration", "HMI screens development", "Field device wiring", "System calibration"],
  },
  {
    icon: Settings,
    title: "Custom Development",
    description: "Bespoke automation software tailored to your specific industry requirements and processes.",
    features: ["Custom control logic", "Data logging & reporting", "Industry 4.0 readiness", "API integration"],
  },
  {
    icon: Wrench,
    title: "Commissioning & Support",
    description: "Comprehensive testing, training, and ongoing maintenance to ensure optimal system performance.",
    features: ["On-site testing", "Staff training", "Long-term maintenance", "24/7 technical support"],
  },
];

const ourProcess = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Consultation",
    description: "We analyze your requirements and provide expert recommendations.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Design",
    description: "Our team creates detailed technical specifications and system architecture.",
  },
  {
    icon: Settings,
    step: "03",
    title: "Implementation",
    description: "We develop, integrate, and test your automation solution.",
  },
  {
    icon: Wrench,
    step: "04",
    title: "Support",
    description: "Ongoing maintenance and technical support to ensure optimal performance.",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-white dark:bg-darkbg min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <SectionWrapper>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive automation solutions tailored to your industry needs
            </p>
          </SectionWrapper>
        </div>
        {/* Section Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* Services Carousel */}
      <section className="relative mx-4 md:mx-8 lg:mx-16 mt-8">
        <Carousel autoSlide={true} autoSlideInterval={5000} className="h-[500px] md:h-[450px]">
          {allServices.map((service) => (
            <div key={service.id} className="relative w-full h-full rounded-xl overflow-hidden">
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative z-10 h-full flex items-end">
                <div className="w-full px-6 md:px-10 pb-8 md:pb-12">
                  <div className="max-w-3xl">
                    <Badge variant="secondary" className="mb-3 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
                      {service.label}
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl mb-4">
                      {service.summary}
                    </p>
                    <Link
                      href={service.url}
                      className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-lg transition-colors"
                    >
                      Learn More
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* What We Offer Section */}
      <section className="relative pt-12 pb-20 bg-white dark:bg-darkbg">
        <div className="max-w-7xl mx-auto px-4">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From concept to completion, we provide end-to-end automation solutions
              </p>
            </div>
          </SectionWrapper>
          <div className="grid md:grid-cols-3 gap-8">
            {whatWeOffer.map((item, index) => (
              <SectionWrapper key={index} delay={index * 0.1}>
                <div className="bg-slate-50 dark:bg-slate-800 p-8 rounded-2xl border border-gray-100 dark:border-slate-600 h-full">
                  <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center text-cyan-500 mb-6">
                    <item.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start text-sm text-gray-600 dark:text-gray-400">
                        <CheckCircle2 className="w-4 h-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
        {/* Section Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* Our Process Section */}
      <section className="relative py-20 bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionWrapper>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                A systematic approach to delivering exceptional automation solutions
              </p>
            </div>
          </SectionWrapper>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ourProcess.map((process, index) => (
              <SectionWrapper key={index} delay={index * 0.1}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-full flex items-center justify-center text-cyan-500 mx-auto mb-4">
                    <process.icon size={32} />
                  </div>
                  <div className="text-cyan-500 font-bold text-sm mb-2">{process.step}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {process.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {process.description}
                  </p>
                </div>
              </SectionWrapper>
            ))}
          </div>
        </div>
        {/* Section Separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionWrapper>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Automate Your Operations?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our automation solutions can transform your business processes and drive efficiency.
            </p>
            <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600 text-white" asChild>
              <Link href="/contact">
                Get Started Today
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </SectionWrapper>
        </div>
      </section>
    </div>
  );
}

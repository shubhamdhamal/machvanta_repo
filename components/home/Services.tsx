"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import SectionWrapper from "../ui/SectionWrapper";

interface Service {
  id: string;
  title: string;
  summary: string;
  label: string;
  url: string;
  image: string;
}

interface ServicesProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  services?: Service[];
}

const defaultServices: Service[] = [
  {
    id: "service-1",
    title: "PLC/SCADA System Integration",
    summary: "Real-time monitoring and control systems. PLC handles field-level automation while SCADA provides central control interface with live monitoring, alarms, and data logging.",
    label: "Automation",
    url: "/services/plc-scada-integration",
    image: "https://res.cloudinary.com/dvq0oz6n6/image/upload/v1769810476/PLC-SCADA_rlo2ey.jpg",
  },
  {
    id: "service-2",
    title: "Custom Control Systems",
    summary: "Specially designed automation solutions created to meet unique requirements. Fully customizable logic, interface, and hardware for higher accuracy, efficiency, and safety.",
    label: "Custom Solutions",
    url: "/services/custom-control-systems",
    image: "https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?w=1200&h=600&fit=crop&crop=center",
  },
  {
    id: "service-3",
    title: "Conveyor Line Automation",
    summary: "Streamlines material movement, reduces manual handling, and ensures faster, safer production flow. High speed, accuracy with smart sensors and PLC control for auto-sorting and routing.",
    label: "Material Handling",
    url: "/services/conveyor-line-automation",
    image: "https://images.unsplash.com/photo-1684695748653-9bf05d69665c?w=1200&h=600&fit=crop&crop=center",
  },
  {
    id: "service-4",
    title: "Process Control Solutions",
    summary: "Ensures manufacturing processes run efficiently, safely, and consistently by maintaining critical parameters like temperature, pressure, flow, and level within desired limits.",
    label: "Process Control",
    url: "/services/process-control",
    image: "https://images.unsplash.com/photo-1748027869634-fc2e545cfb0c?w=1200&h=600&fit=crop&crop=center",
  },
  {
    id: "service-5",
    title: "SPM & SBM Integration",
    summary: "High speed, accuracy, and fully automated production. Servo motors feed products with precise synchronization. Automatic changeover for different packet sizes and products.",
    label: "Packaging",
    url: "/services/spm-sbm-integration",
    image: "https://img.freepik.com/free-photo/manufacture-steel-machine-with-control-computer-clear-room_645730-186.jpg?w=1200&h=600&fit=crop&crop=center",
  },
  {
    id: "service-6",
    title: "Servo & VFD Systems",
    summary: "Precision motion control and energy-efficient drive solutions. Servo for high-accuracy positioning, VFD for speed control of motors. Ideal for pumps, fans, conveyors, and CNC machines.",
    label: "Motion Control",
    url: "/services/servo-vfd-systems",
    image: "https://res.cloudinary.com/dvq0oz6n6/image/upload/VFD_System_mvsoie.jpg",
  },
  {
    id: "service-7",
    title: "Industrial Control Panel Manufacturing",
    summary: "High-quality MCC, PCC, APFC, PLC panels, VFD/Servo panels, and Sugar Industry Electrical Panels. Premium switchgear with rigorous testing protocols.",
    label: "Manufacturing",
    url: "/services/industrial-control-panels",
    image: "https://res.cloudinary.com/dvq0oz6n6/image/upload/v1769808980/Industrial_Control_Panel_Manufacturing_oavk87.jpg",
  },
  {
    id: "service-8",
    title: "Drive & Motion Automation",
    summary: "Automates motor-driven processes for precise speed, position, and torque control. VFD and Servo Drives with PLC/Motion Controllers for coordination and automation logic.",
    label: "Drives",
    url: "/services/drive-motion-automation",
    image: "https://res.cloudinary.com/dvq0oz6n6/image/upload/v1769808975/AdobeStock_1879190942_Preview_mvygwo.jpg",
  },
  {
    id: "service-9",
    title: "SCADA & IIoT Solutions",
    summary: "Industry 4.0 upgrades for smart factories. Real-time visualization, production data logging, energy monitoring, and cloud-based analytics for remote monitoring and predictive maintenance.",
    label: "Industry 4.0",
    url: "/services/scada-iiot",
    image: "https://res.cloudinary.com/dvq0oz6n6/image/upload/v1769808980/SCADA_IIoT_Solutions_ewm8cv.jpg",
  },
  {
    id: "service-10",
    title: "Control System Integration & Retrofitting",
    summary: "Upgrade old or obsolete PLC/Relay panels to modern automation systems. Replaces outdated relays with modern PLCs, HMIs, and SCADA systems with minimal downtime.",
    label: "Retrofitting",
    url: "/services/retrofitting",
    image: "https://res.cloudinary.com/dvq0oz6n6/image/upload/v1769808977/Control_System_Integration_Retrofitting_h2pfig.jpg",
  },
  {
    id: "service-11",
    title: "Machine Automation & SPM Solutions",
    summary: "Complete automation solutions including assembly automation for faster production, packaging automation for uniform quality, material handling with automated conveyors and lifts, and pick & place systems with high speed and precision.",
    label: "Machine Automation",
    url: "/services/machine-automation-spm",
    image: "https://res.cloudinary.com/dvq0oz6n6/image/upload/v1769809708/Machine_Automation_SPM_Solutions_go67lg.jpg",
  },
  {
    id: "service-12",
    title: "Electrical & On-Site Services",
    summary: "Comprehensive electrical services including industrial wiring and panel installation, fast electrical troubleshooting, preventive maintenance, commissioning support, and 24/7 onsite/remote support for immediate assistance.",
    label: "Support Services",
    url: "/services/electrical-onsite",
    image: "https://res.cloudinary.com/dvq0oz6n6/image/upload/v1769808977/Electrical_On-Site_Services_ylesdy.jpg",
  },
];

const Services = ({
  tagline = "What We Offer",
  heading = "Our Services",
  description = "We deliver innovative control panels, PLC/SCADA integration, and technical manpower to maximize productivity and ensure future-ready operations.",
  buttonText = "View all services",
  buttonUrl = "/services",
  services = defaultServices,
}: ServicesProps) => {
  return (
    <section className="relative py-32 bg-slate-50 dark:bg-slate-900/50" style={{ paddingBottom: "50px", paddingTop: "50px" }}>
      <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16 px-4">
        <SectionWrapper>
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              {tagline}
            </Badge>
            <h2 className="mb-3 text-pretty text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl text-slate-900 dark:text-white">
              {heading}
            </h2>
            <p className="mb-8 text-gray-600 dark:text-gray-400 md:text-base lg:max-w-2xl lg:text-lg mx-auto">
              {description}
            </p>
            <Button variant="link" className="w-full sm:w-auto" asChild>
              <Link href={buttonUrl}>
                {buttonText}
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </div>
        </SectionWrapper>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 w-full">
          {services.map((service, index) => (
            <SectionWrapper key={service.id} delay={index * 0.1}>
              <Card className="grid grid-rows-[auto_auto_1fr_auto] bg-white dark:bg-slate-800 border-gray-100 dark:border-slate-600 hover:shadow-xl transition-shadow h-full">
                <div className="aspect-[16/9] w-full relative overflow-hidden">
                  <Link
                    href={service.url}
                    className="transition-opacity duration-200 hover:opacity-70"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center"
                      unoptimized
                    />
                  </Link>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {service.label}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold hover:underline md:text-xl text-slate-900 dark:text-white">
                    <Link href={service.url}>
                      {service.title}
                    </Link>
                  </h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{service.summary}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href={service.url}
                    className="flex items-center text-cyan-500 dark:text-cyan-400 hover:underline font-semibold"
                  >
                    Learn more
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </CardFooter>
              </Card>
            </SectionWrapper>
          ))}
        </div>
      </div>
      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
};

export default Services;


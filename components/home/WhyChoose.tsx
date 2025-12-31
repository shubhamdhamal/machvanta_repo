"use client";
import Image from "next/image";
import SectionWrapper from "../ui/SectionWrapper";
import { Users, CheckCircle2, Zap, Clock } from "lucide-react";

const features = [
  {
    title: "Expert Team",
    desc: "Skilled engineers.",
    // Replace with local image: image: "/images/expert-team.jpg"
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    icon: Users,
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Quality",
    desc: "Top-tier panels.",
    // Replace with local image: image: "/images/quality.jpg"
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
    icon: CheckCircle2,
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    title: "Cost-Effective",
    desc: "Smart designs.",
    // Replace with local image: image: "/images/cost-effective.jpg"
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",
    icon: Zap,
    gradient: "from-yellow-500/20 to-orange-500/20"
  },
  {
    title: "Fast Response",
    desc: "24/7 support.",
    // Replace with local image: image: "/images/fast-response.jpg"
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
    icon: Clock,
    gradient: "from-purple-500/20 to-pink-500/20"
  }
];

export default function WhyChoose() {
  return (
    <section className="relative py-24 bg-white dark:bg-darkbg">
      <div className="max-w-7xl mx-auto px-4">
        <SectionWrapper>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Why Choose Machvanta India?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
              We combine cutting-edge technology with deep industry expertise to deliver automation solutions that transform your operations.
            </p>
          </div>
        </SectionWrapper>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <SectionWrapper key={i} delay={i * 0.1}>
              <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-slate-600 overflow-hidden group h-full">
                <div className="relative h-48 bg-gradient-to-br dark:from-slate-700 dark:to-slate-800">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} dark:opacity-60`} />
                  <div className="absolute top-4 left-4">
                    <div className="w-16 h-16 bg-white/90 dark:bg-slate-800/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <feature.icon className="text-cyan-500 dark:text-cyan-400" size={32} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
                </div>
              </div>
            </SectionWrapper>
          ))}
        </div>
      </div>
      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}


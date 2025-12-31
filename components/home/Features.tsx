"use client"; import { Users, CheckCircle2, Zap, Clock } from "lucide-react"; import SectionWrapper from "../ui/SectionWrapper";
const features = [{ icon: Users, title: "Expert Team", desc: "Skilled engineers." }, { icon: CheckCircle2, title: "Quality", desc: "Top-tier panels." }, { icon: Zap, title: "Cost-Effective", desc: "Smart designs." }, { icon: Clock, title: "Fast Response", desc: "24/7 support." }];
export default function Features() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {features.map((f, i) => <SectionWrapper key={i} delay={i * 0.1}><div className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-600"><f.icon className="mb-4 text-cyan-500" size={32} /><h3 className="font-bold text-xl dark:text-white mb-2">{f.title}</h3><p className="text-gray-600 dark:text-gray-400">{f.desc}</p></div></SectionWrapper>)}
      </div>
      {/* Section Separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}
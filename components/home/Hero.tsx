"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { SplineScene } from "@/components/ui/splite";
import { Spotlight } from "@/components/ui/spotlight";

export default function Hero() {
  return (
    <section className="relative h-auto min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)] flex items-start lg:items-center overflow-hidden bg-white dark:bg-darkbg pt-0 lg:py-0">
      {/* Spotlight Effect */}
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#06b6d4"
      />

      {/* Background gradients */}
      <div className="absolute inset-0 w-full h-full opacity-30 dark:opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/40 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-purple-600/40 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-0 lg:px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center h-full">
          {/* Left content */}
          <motion.div
            className="flex-1 py-4 lg:py-0 flex flex-col justify-center items-center lg:items-start px-4 lg:px-0 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-900 to-slate-600 dark:from-neutral-50 dark:to-neutral-400">
                Empowering Industries with
              </span>
              <br />
              <span className="text-cyan-500">Smart Automation</span>
            </h1>
            <p className="text-slate-600 dark:text-neutral-300 text-lg md:text-xl max-w-xl mb-8">
              Transform your business with cutting-edge industrial automation solutions.
              We bring intelligence to your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Link
                href="/services"
                className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-bold shadow-lg transition-colors text-center"
              >
                Explore Services
              </Link>
              <Link
                href="/Brochure_Final.pdf"
                target="_blank"
                className="bg-slate-100 dark:bg-white/10 backdrop-blur-sm text-slate-900 dark:text-white border border-slate-200 dark:border-white/20 hover:bg-slate-200 dark:hover:bg-white/20 px-8 py-4 rounded-full font-bold transition-colors text-center"
              >
                Download Brochure
              </Link>
            </div>
          </motion.div>

          {/* Right content - 3D Robot */}
          <motion.div
            className="flex-1 relative w-full h-[280px] lg:h-[560px]"
            style={{ minHeight: '280px' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 w-full h-full spline-container lg:scale-110" style={{ minHeight: '280px' }}>
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
                style={{ width: '100%', height: '100%', minHeight: '280px' }}
              />
            </div>
            {/* Bottom blur fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white dark:from-darkbg to-transparent pointer-events-none z-10" />
          </motion.div>
        </div>
      </div>

      {/* Section Separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent z-50" />
    </section>
  );
}
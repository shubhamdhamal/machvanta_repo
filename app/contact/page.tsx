"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Building2,
  User,
  AtSign,
  MessageSquare,
  Clock,
  CheckCircle2,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export default function Contact() {
  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      toast.success("Message sent successfully! We'll get back to you soon.");
      reset();
    } catch {
      toast.error("Failed to send message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Zen Square, 3rd Floor", "Office No – 305, Kharadi", "Pune, Maharashtra 411014"],
      action: "Get Directions",
      href: "https://maps.google.com/?q=MACHVANTA+INDIA+PVT+LTD"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@machvanta.com", "service@machvanta.com"],
      action: "Send Email",
      href: "mailto:info@machvanta.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9975446663", "+91 8788294925"],
      action: "Call Now",
      href: "tel:+919975446663"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Saturday", "9:00 AM - 6:00 PM"],
      action: "Schedule Meeting",
      href: "/quote"
    }
  ];

  const benefits = [
    "Free initial consultation",
    "Response within 24 hours",
    "Expert automation advice",
    "Custom solution design"
  ];

  const faqs = [
    {
      question: "What industries do you serve?",
      answer: "We serve automotive, FMCG, packaging, pharmaceuticals, and manufacturing sectors."
    },
    {
      question: "How long does a typical project take?",
      answer: "Most automation projects range from 2-6 months from design to commissioning."
    },
    {
      question: "Do you provide ongoing support?",
      answer: "Yes, we offer 24/7 technical assistance, preventive maintenance, and system upgrades."
    },
    {
      question: "Can you work with existing systems?",
      answer: "Absolutely! We specialize in retrofitting and upgrading existing systems."
    }
  ];

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-background to-purple-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-cyan-500">Amazing Together</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl mb-8">
              Ready to transform your industrial processes? Our automation experts are here to help you achieve your goals.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-semibold transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                Start a Conversation
                <ArrowRight className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-cyan-500 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section id="contact-form" className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Form - Takes 3 columns */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-0 shadow-xl bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 md:p-10">
                  <div className="mb-8">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">Send us a Message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form and we&apos;ll get back to you within 24 hours.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          {...register("name")}
                          placeholder="Your Name *"
                          className="input-field pl-12 h-14"
                          required
                        />
                      </div>

                      <div className="relative">
                        <AtSign className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="Email Address *"
                          className="input-field pl-12 h-14"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="Phone Number"
                          className="input-field pl-12 h-14"
                        />
                      </div>

                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <input
                          {...register("company")}
                          placeholder="Company Name"
                          className="input-field pl-12 h-14"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                      <textarea
                        {...register("message")}
                        placeholder="Tell us about your project... *"
                        rows={5}
                        className="input-field pl-12 pt-4 resize-none"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 disabled:from-cyan-400 disabled:to-cyan-500 text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
                    >
                      <Send className="w-5 h-5" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </form>

                  {/* Benefits */}
                  <div className="mt-8 pt-8 border-t border-border">
                    <div className="grid grid-cols-2 gap-4">
                      {benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className="w-4 h-4 text-cyan-500 flex-shrink-0" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info - Takes 2 columns */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:bg-card"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="w-6 h-6 text-cyan-500" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-muted-foreground text-sm">{detail}</p>
                        ))}
                        <Link
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          className="inline-flex items-center gap-1 text-cyan-500 text-sm font-medium mt-2 hover:gap-2 transition-all"
                        >
                          {info.action}
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Find Our Office</h2>
            <p className="text-muted-foreground">Visit us at our Pune headquarters</p>
          </motion.div>

          <motion.div
            className="rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15130.024421655644!2d73.9382641031693!3d18.551208103615622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c33e7e16ee8b%3A0x790c3a7a67602f15!2sMACHVANTA%20INDIA%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1767348755093!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Machvanta Office Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </motion.div>

          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">{faq.question}</h4>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

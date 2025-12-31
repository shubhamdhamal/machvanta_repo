import Hero from "@/components/home/Hero";
import WhyChoose from "@/components/home/WhyChoose";
import Services from "@/components/home/Services";
import Industries from "@/components/home/Industries";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <WhyChoose />
      <Services />
      <Industries />
      <WhatsAppButton />
    </div>
  );
}
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
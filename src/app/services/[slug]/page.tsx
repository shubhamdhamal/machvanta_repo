import { Metadata } from 'next';
import Link from 'next/link';

interface CaseStudy {
    title: string;
    result: string;
    metrics?: Array<{ label: string; value: string }>;
}

interface FAQ {
    q: string;
    a: string;
}

interface ServiceDetail {
    slug: string;
    title: string;
    description: string;
    heroImage: string;
    overview: string;
    deliverables: string[];
    technologies: string[];
    industries: string[];
    cases: CaseStudy[];
    faqs: FAQ[];
}

const SERVICES: ServiceDetail[] = [
    {
        slug: 'plc-scada-system-integration',
        title: 'PLC/SCADA System Integration',
        description: 'Complete automation solutions with seamless PLC/SCADA integration for optimal industrial performance.',
        heroImage: 'https://img.freepik.com/free-photo/man-electrical-working-switchboard-with-fuses-uses-tablet_169016-51765.jpg?w=1600&h=800&fit=crop&crop=center',
        overview: 'We design, program, and integrate PLC and SCADA systems that unify your plant operations. From I/O mapping and network architecture to HMI/SCADA visualization and historian setup, our solutions improve visibility, reliability, and throughput.',
        deliverables: [
            'PLC programming (Siemens, Allen‑Bradley, Schneider, Mitsubishi)',
            'SCADA configuration with alarms, trends, and reporting',
            'HMI design and deployment with role‑based access',
            'Protocol gateways (Modbus, Profinet, Ethernet/IP, OPC UA)',
            'Historian and data archiving with OEE dashboards'
        ],
        technologies: ['Siemens TIA Portal', 'Rockwell Studio 5000', 'WinCC/FactoryTalk', 'Ignition', 'OPC UA', 'MQTT'],
        industries: ['Automotive', 'FMCG', 'Pharmaceutical', 'Packaging', 'General Manufacturing'],
        cases: [
            { title: 'SCADA centralization across 3 lines', result: 'Unified monitoring reduced downtime events by 22%', metrics: [{ label: 'MTBF', value: '+15%' }, { label: 'Downtime', value: '-22%' }] }
        ],
        faqs: [
            { q: 'Can you migrate legacy PLCs?', a: 'Yes, we modernize legacy systems and ensure minimal downtime during switchover.' },
            { q: 'Do you provide 24/7 support?', a: 'Yes, we offer tiered SLAs including 24/7 remote support.' }
        ]
    },
    {
        slug: 'custom-control-systems',
        title: 'Custom Control Systems',
        description: 'Bespoke control panels and HMI interfaces designed for your industrial requirements.',
        heroImage: 'https://images.unsplash.com/photo-1714322148068-923f9f9bfc1a?w=1600&h=800&fit=crop&crop=center',
        overview: 'We build tailored control systems and panels to match unique processes, safety requirements, and compliance constraints. Our designs emphasize maintainability, diagnostics, and lifecycle costs.',
        deliverables: [
            'Electrical schematics and enclosure design',
            'Panel build with documented wiring and labeling',
            'HMI/UX tailored to operators and supervisors',
            'Integrated data logging and reporting',
            'Factory Acceptance Test (FAT) and Site Acceptance Test (SAT)'
        ],
        technologies: ['EPLAN', 'AutoCAD Electrical', 'Siemens/AB PLCs', 'Panel components (Schneider, Rittal)', 'Ignition/WinCC'],
        industries: ['Discrete Manufacturing', 'Food & Beverage', 'Energy', 'Packaging'],
        cases: [
            { title: 'Greenfield control system for new line', result: 'Achieved 8-week delivery with zero NCRs at SAT' }
        ],
        faqs: [
            { q: 'Can you retrofit existing panels?', a: 'Yes, we can re-engineer and upgrade panels to current standards.' },
            { q: 'Do you support documentation packs?', a: 'All projects include wiring diagrams, parts lists, and test records.' }
        ]
    },
    {
        slug: 'conveyor-line-automation',
        title: 'Conveyor Line Automation',
        description: 'Advanced conveyor systems with intelligent automation for productivity and efficiency.',
        heroImage: 'https://images.unsplash.com/photo-1684695748653-9bf05d69665c?w=1600&h=800&fit=crop&crop=center',
        overview: 'We engineer conveyor logic, interlocks, and line balancing to ensure smooth product flow and optimized takt time. Integrated sensors and safety bring reliable, scalable operations.',
        deliverables: [
            'Line control logic with start/stop/accumulation',
            'Safety PLC integration and risk assessments',
            'Buffer management and jam handling',
            'OEE and downtime tracking',
            'Commissioning and performance tuning'
        ],
        technologies: ['Safety PLCs', 'VFDs', 'Profinet/EtherNet‑IP', 'Vision sensors', 'Andon systems'],
        industries: ['Automotive', 'E‑commerce & Warehousing', 'FMCG'],
        cases: [
            { title: 'EOL conveyor revamp', result: 'Throughput increased by 18% with fewer micro-stops', metrics: [{ label: 'Throughput', value: '+18%' }] }
        ],
        faqs: [
            { q: 'Do you integrate with WMS/MES?', a: 'Yes, we implement interfaces to WMS/MES/ERP via APIs or OPC.' }
        ]
    },
    {
        slug: 'process-control-solutions',
        title: 'Process Control Solutions',
        description: 'Comprehensive process control systems ensuring precision and reliability in manufacturing operations.',
        heroImage: 'https://images.unsplash.com/photo-1748027869634-fc2e545cfb0c?w=1600&h=800&fit=crop&crop=center',
        overview: 'Closed-loop control solutions for batch and continuous processes. We focus on stability, quality, and energy efficiency through precise control strategies and robust alarm management.',
        deliverables: [
            'PID tuning and model-based control strategies',
            'Batch sequencing (ISA‑88) and recipe management',
            'Alarm rationalization and change control',
            'Data historian and quality reports',
            'Operator training and handover'
        ],
        technologies: ['DCS/PLC', 'VFDs & instrumentation', 'OPC UA', 'Historian', 'Analytics'],
        industries: ['Chemicals', 'Pharma', 'Food & Beverage', 'Utilities'],
        cases: [
            { title: 'Beverage line stability project', result: 'Reduced variability and improved yield by 5%' }
        ],
        faqs: [
            { q: 'Can you comply with GAMP/21 CFR Part 11?', a: 'Yes, we design for regulated industries with audit trails and e-signatures.' }
        ]
    },
    {
        slug: 'spm-sbm-integration',
        title: 'SPM/SBM Integration',
        description: 'Special Purpose Machine and Special Building Machine integration for manufacturing efficiency and precision.',
        heroImage: 'https://img.freepik.com/free-photo/manufacture-steel-machine-with-control-computer-clear-room_645730-186.jpg?w=1600&h=800&fit=crop&crop=center',
        overview: 'We integrate SPM/SBM with upstream and downstream equipment, implementing robust diagnostics, quick changeovers, and cycle time optimization for complex assembly and processing tasks.',
        deliverables: [
            'Machine control and motion sequences',
            'Fixture and tooling interlocks',
            'Error proofing and traceability',
            'Safety validation and documentation',
            'Spare strategy and maintenance guides'
        ],
        technologies: ['Servo motion', 'Pneumatics/hydraulics', 'Barcode/RFID', 'Vision systems'],
        industries: ['Automotive', 'Appliances', 'Electronics'],
        cases: [
            { title: 'Assembly SPM integration', result: 'CT reduced by 12% and changeover time by 30%' }
        ],
        faqs: [
            { q: 'Do you support multi-vendor components?', a: 'Yes, we work with a wide ecosystem to match specs and lead times.' }
        ]
    },
    {
        slug: 'servo-system',
        title: 'Servo System',
        description: 'High-precision servo motor systems with advanced control algorithms for accurate positioning and motion control.',
        heroImage: 'https://img.freepik.com/free-photo/view-tiny-music-boxes-collection_23-2150545652.jpg?w=1600&h=800&fit=crop&crop=center',
        overview: 'Precision motion platforms for pick-and-place, packaging, and coordinated multi-axis control. Turnkey commissioning and tuning for performance and reliability.',
        deliverables: [
            'Axis sizing and selection',
            'Electronic gearing and camming',
            'Homing and safety zones',
            'Vibration & resonance mitigation',
            'Performance diagnostics and KPIs'
        ],
        technologies: ['Servo drives', 'Encoders', 'Motion controllers', 'CIP Motion/Profinet IRT'],
        industries: ['Packaging', 'Pharma', 'Electronics', 'Automotive'],
        cases: [
            { title: 'Carton pick-and-place', result: 'Increased cycle rate by 20% with smoother motion profiles' }
        ],
        faqs: [
            { q: 'Can you integrate with robots?', a: 'Yes, we synchronize motion with industrial robots and cobots.' }
        ]
    },
];

type PageParams = { slug: string };

export async function generateMetadata({ params }: { params: Promise<PageParams> }): Promise<Metadata> {
    const { slug } = await params;
    const svc = SERVICES.find(s => s.slug === slug);
    const title = svc ? `${svc.title} | MACHVANTA INDIA PVT LTD` : 'Service | MACHVANTA INDIA PVT LTD';
    const description = svc?.description ?? 'Industrial automation service details.';
    return {
        title,
        description,
        alternates: { canonical: `https://machvanta.com/services/${slug}` },
        openGraph: { title, description },
        twitter: { card: 'summary', title, description },
    };
}

export default async function ServiceDetailPage({ params }: { params: Promise<PageParams> }) {
    const { slug } = await params;
    const svc = SERVICES.find((s) => s.slug === slug);
    if (!svc) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8">
                <div className="text-center">
                    <h1 className="text-2xl font-semibold mb-4">Service not found</h1>
                    <Link href="/services" className="text-blue-600 underline">Back to Services</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": svc.title,
                        "description": svc.description,
                        "serviceType": "Industrial Automation",
                        "provider": {
                            "@type": "Organization",
                            "name": "MACHVANTA INDIA PVT LTD",
                            "url": "https://machvanta.com"
                        },
                        "areaServed": { "@type": "Country", "name": "India" },
                        "url": `https://machvanta.com/services/${svc.slug}`
                    })
                }}
            />
            <section className="relative h-72 md:h-96 w-full mt-16">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={svc.heroImage} alt={svc.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 max-w-7xl mx-auto h-full flex items-end px-4 sm:px-6 lg:px-8 pb-8">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{svc.title}</h1>
                        <p className="text-blue-100 max-w-3xl">{svc.description}</p>
                    </div>
                </div>
            </section>

            {/* Overview + Deliverables */}
            <section className="py-12 md:py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 md:p-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-blue-700">Overview</h2>
                            <p className="text-gray-700 leading-relaxed">{svc.overview}</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
                            <h3 className="text-lg font-semibold mb-4 text-blue-700">Deliverables</h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                {svc.deliverables.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Technologies & Industries */}
            <section className="py-6 md:py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-2xl shadow p-6 md:p-8">
                        <h3 className="text-lg font-semibold mb-4 text-blue-700">Technologies</h3>
                        <div className="flex flex-wrap gap-2">
                            {svc.technologies.map((t, i) => (
                                <span key={i} className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm">{t}</span>
                            ))}
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl shadow p-6 md:p-8">
                        <h3 className="text-lg font-semibold mb-4 text-blue-700">Industries</h3>
                        <div className="flex flex-wrap gap-2">
                            {svc.industries.map((t, i) => (
                                <span key={i} className="inline-block bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            {svc.cases.length > 0 && (
                <section className="py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-700">Case Studies</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {svc.cases.map((c, idx) => (
                                    <div key={idx} className="border rounded-xl p-5">
                                        <h4 className="font-semibold text-gray-900 mb-1">{c.title}</h4>
                                        <p className="text-gray-700 mb-3">{c.result}</p>
                                        {c.metrics && c.metrics.length > 0 && (
                                            <div className="flex flex-wrap gap-2">
                                                {c.metrics.map((m, i) => (
                                                    <span key={i} className="inline-block bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-sm">{m.label}: {m.value}</span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQs */}
            {svc.faqs.length > 0 && (
                <section className="py-12 md:py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="bg-white rounded-2xl shadow p-6 md:p-8">
                            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-blue-700">FAQs</h2>
                            <div className="space-y-4">
                                {svc.faqs.map((f, i) => (
                                    <details key={i} className="group">
                                        <summary className="cursor-pointer font-medium text-gray-900 group-open:text-blue-700">{f.q}</summary>
                                        <p className="mt-2 text-gray-700">{f.a}</p>
                                    </details>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Link href="/contact" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">Discuss your project</Link>
                </div>
            </section>
        </main>
    );
}



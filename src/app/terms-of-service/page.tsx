import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Terms of Service | MACHVANTA',
    description: 'Terms of Service for MACHVANTA - Read our terms and conditions for using our services.',
};

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                            <p className="text-gray-700 mb-4">
                                By accessing and using MACHVANTA&apos;s website and services, you accept and agree to be bound
                                by the terms and provision of this agreement. If you do not agree to abide by the above,
                                please do not use this service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Use License</h2>
                            <p className="text-gray-700 mb-4">
                                Permission is granted to temporarily download one copy of the materials on MACHVANTA&apos;s
                                website for personal, non-commercial transitory viewing only. This is the grant of a
                                license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose or for any public display</li>
                                <li>Attempt to reverse engineer any software contained on the website</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Service Description</h2>
                            <p className="text-gray-700 mb-4">
                                MACHVANTA provides industrial automation solutions, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Conveyor line automation</li>
                                <li>PLC SCADA retrofit services</li>
                                <li>SPM integration solutions</li>
                                <li>Custom automation consulting</li>
                                <li>Technical support and maintenance</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. User Responsibilities</h2>
                            <p className="text-gray-700 mb-4">
                                As a user of our services, you agree to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Provide accurate and complete information</li>
                                <li>Use our services only for lawful purposes</li>
                                <li>Not interfere with or disrupt our services</li>
                                <li>Respect intellectual property rights</li>
                                <li>Comply with all applicable laws and regulations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Payment Terms</h2>
                            <p className="text-gray-700 mb-4">
                                Payment terms for our services are as follows:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Payment is due according to the terms specified in individual service agreements</li>
                                <li>Late payments may incur additional charges</li>
                                <li>All prices are subject to change with prior notice</li>
                                <li>Refunds are subject to our refund policy</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property</h2>
                            <p className="text-gray-700 mb-4">
                                The content, organization, graphics, design, compilation, magnetic translation, digital
                                conversion, and other matters related to the website are protected under applicable
                                copyrights, trademarks, and other proprietary rights. The copying, redistribution, use,
                                or publication by you of any such matters or any part of the website is strictly prohibited.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
                            <p className="text-gray-700 mb-4">
                                In no event shall MACHVANTA, nor its directors, employees, partners, agents, suppliers,
                                or affiliates, be liable for any indirect, incidental, special, consequential, or punitive
                                damages, including without limitation, loss of profits, data, use, goodwill, or other
                                intangible losses, resulting from your use of the service.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer</h2>
                            <p className="text-gray-700 mb-4">
                                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent
                                permitted by law, MACHVANTA excludes all representations, warranties, conditions, and
                                terms relating to our website and the use of this website.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Termination</h2>
                            <p className="text-gray-700 mb-4">
                                We may terminate or suspend your access immediately, without prior notice or liability,
                                for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Governing Law</h2>
                            <p className="text-gray-700 mb-4">
                                These Terms shall be interpreted and governed by the laws of [Your Jurisdiction], without
                                regard to its conflict of law provisions. Our failure to enforce any right or provision
                                of these Terms will not be considered a waiver of those rights.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
                            <p className="text-gray-700 mb-4">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any
                                time. If a revision is material, we will try to provide at least 30 days notice prior
                                to any new terms taking effect.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
                            <p className="text-gray-700 mb-4">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-700">
                                    <strong>MACHVANTA INDIA PVT LTD</strong><br />
                                    Email: legal@machvanta.com<br />
                                    Phone: +91 9975446663 | +91 7822925356<br />
                                    Office no -305, 3rd floor, Zen Square, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

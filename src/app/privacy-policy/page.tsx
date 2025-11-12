import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Privacy Policy | MACHVANTA',
    description: 'Privacy Policy for MACHVANTA - Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 pt-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-600 mb-6">
                            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                        </p>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
                            <p className="text-gray-700 mb-4">
                                We collect information you provide directly to us, such as when you create an account,
                                make a purchase, or contact us for support. This may include:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Name and contact information (email address, phone number)</li>
                                <li>Company information and job title</li>
                                <li>Payment and billing information</li>
                                <li>Communications with us</li>
                                <li>Any other information you choose to provide</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
                            <p className="text-gray-700 mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices, updates, and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Information Sharing</h2>
                            <p className="text-gray-700 mb-4">
                                We do not sell, trade, or otherwise transfer your personal information to third parties
                                without your consent, except in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>With service providers who assist us in operating our website and conducting our business</li>
                                <li>When required by law or to protect our rights</li>
                                <li>In connection with a merger, acquisition, or sale of assets</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Data Security</h2>
                            <p className="text-gray-700 mb-4">
                                We implement appropriate security measures to protect your personal information against
                                unauthorized access, alteration, disclosure, or destruction. However, no method of
                                transmission over the internet is 100% secure.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies and Tracking</h2>
                            <p className="text-gray-700 mb-4">
                                We use cookies and similar tracking technologies to enhance your experience on our website.
                                You can control cookie settings through your browser preferences.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
                            <p className="text-gray-700 mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                                <li>Access and update your personal information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Opt-out of certain communications</li>
                                <li>Request a copy of your data</li>
                            </ul>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Changes to This Policy</h2>
                            <p className="text-gray-700 mb-4">
                                We may update this Privacy Policy from time to time. We will notify you of any changes
                                by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                            </p>
                        </section>

                        <section className="mb-8">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Contact Us</h2>
                            <p className="text-gray-700 mb-4">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <p className="text-gray-700">
                                    <strong>MACHVANTA INDIA PVT LTD</strong><br />
                                    Email: privacy@machvanta.com<br />
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

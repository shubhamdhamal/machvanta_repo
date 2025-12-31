"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
                <SectionWrapper>
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                            <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                        <p className="text-muted-foreground text-lg">
                            Last updated: 12/6/2025
                        </p>
                    </div>
                </SectionWrapper>
            </section>

            {/* Content Section */}
            <SectionWrapper className="py-16">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Section 1 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                            <p className="text-muted-foreground mb-4">
                                We collect information you provide directly to us, such as when you create an account,
                                make a purchase, or contact us for support. This may include:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>Name and contact information (email address, phone number)</li>
                                <li>Company information and job title</li>
                                <li>Payment and billing information</li>
                                <li>Communications with us</li>
                                <li>Any other information you choose to provide</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 2 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                            <p className="text-muted-foreground mb-4">
                                We use the information we collect to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>Provide, maintain, and improve our services</li>
                                <li>Process transactions and send related information</li>
                                <li>Send technical notices, updates, and support messages</li>
                                <li>Respond to your comments and questions</li>
                                <li>Comply with legal obligations</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 3 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
                            <p className="text-muted-foreground mb-4">
                                We do not sell, trade, or otherwise transfer your personal information to third parties
                                without your consent, except in the following circumstances:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>With service providers who assist us in operating our website and conducting our business</li>
                                <li>When required by law or to protect our rights</li>
                                <li>In connection with a merger, acquisition, or sale of assets</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 4 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
                            <p className="text-muted-foreground">
                                We implement appropriate security measures to protect your personal information against
                                unauthorized access, alteration, disclosure, or destruction. However, no method of
                                transmission over the internet is 100% secure.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 5 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Cookies and Tracking</h2>
                            <p className="text-muted-foreground">
                                We use cookies and similar tracking technologies to enhance your experience on our website.
                                You can control cookie settings through your browser preferences.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 6 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">6. Your Rights</h2>
                            <p className="text-muted-foreground mb-4">
                                You have the right to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>Access and update your personal information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Opt-out of certain communications</li>
                                <li>Request a copy of your data</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 7 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">7. Changes to This Policy</h2>
                            <p className="text-muted-foreground">
                                We may update this Privacy Policy from time to time. We will notify you of any changes
                                by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 8 - Contact */}
                    <Card className="border-primary/20 bg-primary/5">
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">8. Contact Us</h2>
                            <p className="text-muted-foreground mb-6">
                                If you have any questions about this Privacy Policy, please contact us at:
                            </p>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">MACHVANTA INDIA PVT LTD</h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <a
                                                href="mailto:privacy@machvanta.com"
                                                className="text-primary hover:underline"
                                            >
                                                privacy@machvanta.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Phone</p>
                                            <p>
                                                <a href="tel:+919975446663" className="text-primary hover:underline">
                                                    +91 9975446663
                                                </a>
                                                {" | "}
                                                <a href="tel:+917822925356" className="text-primary hover:underline">
                                                    +91 7822925356
                                                </a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-primary mt-0.5" />
                                    <div>
                                        <p className="text-sm text-muted-foreground">Address</p>
                                        <p className="text-foreground">
                                            Office no -305, 3rd floor, Zen Square, Vitthal Nagar, Kharadi, Pune, Maharashtra 411014
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </SectionWrapper>
        </main>
    );
}

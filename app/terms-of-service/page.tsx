"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Mail, Phone, MapPin } from "lucide-react";

export default function TermsOfServicePage() {
    return (
        <main className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-background">
                <SectionWrapper>
                    <div className="text-center max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                            <FileText className="w-8 h-8 text-primary" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
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
                            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
                            <p className="text-muted-foreground">
                                By accessing and using MACHVANTA&apos;s website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 2 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
                            <p className="text-muted-foreground mb-4">
                                Permission is granted to temporarily download one copy of the materials on MACHVANTA&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for any commercial purpose or for any public display</li>
                                <li>Attempt to reverse engineer any software contained on the website</li>
                                <li>Remove any copyright or other proprietary notations from the materials</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 3 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">3. Service Description</h2>
                            <p className="text-muted-foreground mb-4">
                                MACHVANTA provides industrial automation solutions, including but not limited to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>Conveyor line automation</li>
                                <li>PLC SCADA retrofit services</li>
                                <li>SPM integration solutions</li>
                                <li>Custom automation consulting</li>
                                <li>Technical support and maintenance</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 4 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">4. User Responsibilities</h2>
                            <p className="text-muted-foreground mb-4">
                                As a user of our services, you agree to:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>Provide accurate and complete information</li>
                                <li>Use our services only for lawful purposes</li>
                                <li>Not interfere with or disrupt our services</li>
                                <li>Respect intellectual property rights</li>
                                <li>Comply with all applicable laws and regulations</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 5 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">5. Payment Terms</h2>
                            <p className="text-muted-foreground mb-4">
                                Payment terms for our services are as follows:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                                <li>Payment is due according to the terms specified in individual service agreements</li>
                                <li>Late payments may incur additional charges</li>
                                <li>All prices are subject to change with prior notice</li>
                                <li>Refunds are subject to our refund policy</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Section 6 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                            <p className="text-muted-foreground">
                                The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the website are protected under applicable copyrights, trademarks, and other proprietary rights. The copying, redistribution, use, or publication by you of any such matters or any part of the website is strictly prohibited.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 7 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
                            <p className="text-muted-foreground">
                                In no event shall MACHVANTA, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 8 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">8. Disclaimer</h2>
                            <p className="text-muted-foreground">
                                The information on this website is provided on an &quot;as is&quot; basis. To the fullest extent permitted by law, MACHVANTA excludes all representations, warranties, conditions, and terms relating to our website and the use of this website.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 9 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
                            <p className="text-muted-foreground">
                                We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 10 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">10. Governing Law</h2>
                            <p className="text-muted-foreground">
                                These Terms shall be interpreted and governed by the laws of India, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 11 */}
                    <Card>
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">11. Changes to Terms</h2>
                            <p className="text-muted-foreground">
                                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Section 12 - Contact */}
                    <Card className="border-primary/20 bg-primary/5">
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-semibold mb-4">12. Contact Information</h2>
                            <p className="text-muted-foreground mb-6">
                                If you have any questions about these Terms of Service, please contact us at:
                            </p>
                            <div className="space-y-4">
                                <h3 className="font-semibold text-lg">MACHVANTA INDIA PVT LTD</h3>
                                <div className="grid gap-4 md:grid-cols-2">
                                    <div className="flex items-start gap-3">
                                        <Mail className="w-5 h-5 text-primary mt-0.5" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Email</p>
                                            <a
                                                href="mailto:legal@machvanta.com"
                                                className="text-primary hover:underline"
                                            >
                                                legal@machvanta.com
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
                                                <a href="tel:+918788294925" className="text-primary hover:underline">
                                                    +91 8788294925
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

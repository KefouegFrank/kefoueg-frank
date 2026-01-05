"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function DesignSystemPage() {
    return (
        <main className="min-h-screen bg-background p-8 md:p-24 space-y-20">
            <SectionHeading
                title="Design System"
                subtitle="Reusable components for the 3D portfolio project."
                align="center"
            />

            {/* Buttons */}
            <section className="space-y-8">
                <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Buttons</h3>
                <div className="flex flex-wrap gap-4">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                    <Button variant="ghost">Ghost Button</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>
                <div className="flex flex-wrap gap-4">
                    <Button isLoading>Processing</Button>
                    <Button disabled>Disabled</Button>
                </div>
            </section>

            {/* Cards */}
            <section className="space-y-8">
                <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Cards (Glassmorphism)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card>
                        <h4 className="text-xl font-bold mb-2">Standard Card</h4>
                        <p className="text-text-secondary">This card features the glassmorphism effect and a subtle lift on hover.</p>
                    </Card>
                    <Card className="border-accent-cyan/20">
                        <h4 className="text-xl font-bold mb-2 text-accent-cyan">Accent Border</h4>
                        <p className="text-text-secondary">Cards can be customized with Tailwind classes for specific highlights.</p>
                    </Card>
                    <Card hoverEffect={false}>
                        <h4 className="text-xl font-bold mb-2">No Hover Card</h4>
                        <p className="text-text-secondary">The hover lift effect can be disabled for static content.</p>
                    </Card>
                </div>
            </section>

            {/* Badges */}
            <section className="space-y-8">
                <h3 className="text-2xl font-bold border-b border-white/10 pb-2">Badges / Tech Tags</h3>
                <div className="flex flex-wrap gap-3">
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge variant="filled">React Three Fiber</Badge>
                    <Badge variant="filled">Tailwind CSS</Badge>
                    <Badge className="border-accent-purple/30 text-accent-purple">Unique Stylized</Badge>
                </div>
            </section>

            <div className="pt-20 text-center text-text-secondary text-sm">
                <p>© 2026 Frank Parker Design System</p>
            </div>
        </main>
    );
}

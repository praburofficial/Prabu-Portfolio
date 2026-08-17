import { SectionHeading } from '../components/SectionHeading';
import { GlassCard } from '../components/GlassCard';

export function Copyrights() {
    return (
        <section className="section-y relative z-10 pt-32 min-h-screen">
            <div className="shell">
                <SectionHeading
                    eyebrow="Legal"
                    title="Copyrights"
                    highlight="& Policies"
                    description="Intellectual property and usage rights for this portfolio."
                    className="mb-12"
                />
                <GlassCard glow className="p-6 sm:p-10">
                    <div className="prose prose-slate max-w-none text-muted">
                        <h3 className="text-xl font-bold text-ink mb-4">Ownership of Content</h3>
                        <p className="mb-6">
                            All content on this website, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of Prabu or its content suppliers and is protected by international copyright laws.
                        </p>
                        
                        <h3 className="text-xl font-bold text-ink mb-4">Usage Restrictions</h3>
                        <p className="mb-6">
                            You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute any material from this site without express written permission. You may print and download portions of material from the different areas of the site solely for your own non-commercial use provided that you agree not to change or delete any copyright or proprietary notices from the materials.
                        </p>

                        <h3 className="text-xl font-bold text-ink mb-4">Project Assets</h3>
                        <p className="mb-6">
                            The projects showcased in the portfolio section belong to their respective owners and organizations. Any code, screenshots, or assets associated with these projects are displayed here for demonstrative purposes only and may not be reused or repurposed without explicit consent.
                        </p>
                    </div>
                </GlassCard>
            </div>
        </section>
    );
}

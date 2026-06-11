import React from 'react';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import StudioStory from '@/components/about/StudioStory';
import CoreValues from '@/components/about/CoreValues';
import DesignPhilosophy from '@/components/about/DesignPhilosophy';
import Timeline from '@/components/about/Timeline';
import Team from '@/components/about/Team';
import CTASection from '@/components/CTASection';

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <PageHeader 
          title={<>The <br/>Studio.</>}
          subtitle="A multidisciplinary architecture and design firm dedicated to creating timeless spaces."
          imageSrc="/images/statement_bg_1781082710020.png"
        />
        <StudioStory />
        <CoreValues />
        <DesignPhilosophy />
        <Timeline />
        <Team />
        <CTASection />
      </main>
    </PageTransition>
  );
}

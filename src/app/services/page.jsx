import React from 'react';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import ServicesOverview from '@/components/services/ServicesOverview';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import CTASection from '@/components/CTASection';

export default function ServicesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <PageHeader 
          title={<>Design <br/>Services.</>}
          subtitle="Comprehensive architectural and interior design solutions tailored to visionary clients."
          imageSrc="/images/residential_bg_1781082724078.png"
        />
        <ServicesOverview />
        <ProcessTimeline />
        <CTASection />
      </main>
    </PageTransition>
  );
}

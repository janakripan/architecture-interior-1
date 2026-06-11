import React from 'react';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import ProjectsArchive from '@/components/projects/ProjectsArchive';
import CTASection from '@/components/CTASection';

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <PageHeader 
          title={<>Selected <br/>Works.</>}
          subtitle="An archive of our most significant architectural and interior design projects spanning the globe."
        />
        <ProjectsArchive />
        <CTASection />
      </main>
    </PageTransition>
  );
}

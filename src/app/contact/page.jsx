import React from 'react';
import PageTransition from '@/components/PageTransition';
import PageHeader from '@/components/layout/PageHeader';
import ContactInfo from '@/components/contact/ContactInfo';
import ContactForm from '@/components/contact/ContactForm';
import CTASection from '@/components/CTASection';

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <PageHeader 
          title={<>Get In <br/>Touch.</>}
          subtitle="Start a dialogue with our lead architects. We are currently accepting select commissions globally."
        />
        
        <section className="py-24 px-6 md:px-12 lg:px-20 bg-[var(--background)]">
          <div className="max-w-content mx-auto flex flex-col md:flex-row gap-16 md:gap-24">
            <ContactInfo />
            <ContactForm />
          </div>
        </section>

        <CTASection />
      </main>
    </PageTransition>
  );
}

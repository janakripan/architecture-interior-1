"use client";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { m } from 'framer-motion';

const ease = [0.22, 1, 0.36, 1];

// Defaulting to a placeholder WhatsApp number. The user can easily change this.
const WHATSAPP_NUMBER = "1234567890";

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  projectType: Yup.string().required('Required'),
  budget: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
});

const inputClasses = "w-full bg-transparent border-b border-[var(--border-subtle)] text-white placeholder-white/30 px-0 py-4 focus:outline-none focus:border-white transition-colors duration-300 font-sans";

export default function ContactForm() {
  const handleSubmit = (values, { setSubmitting }) => {
    const text = `*New Project Inquiry*\n\n*Name:* ${values.name}\n*Email:* ${values.email}\n*Phone:* ${values.phone}\n*Project Type:* ${values.projectType}\n*Budget:* ${values.budget}\n*Message:* ${values.message}`;
    const encodedText = encodeURIComponent(text);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedText}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitting(false);
  };

  return (
    <div className="md:w-2/3 bg-[var(--surface)] p-8 md:p-16 border border-[var(--border-subtle)]">
      <m.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease }}
      >
        <Formik
          initialValues={{ name: '', email: '', phone: '', projectType: '', budget: '', message: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <Field type="text" name="name" placeholder="Full Name *" className={inputClasses} />
                  <ErrorMessage name="name" component="div" className="absolute -bottom-5 text-red-500 text-xs font-bold" />
                </div>
                <div className="relative group">
                  <Field type="email" name="email" placeholder="Email Address *" className={inputClasses} />
                  <ErrorMessage name="email" component="div" className="absolute -bottom-5 text-red-500 text-xs font-bold" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative group">
                  <Field type="tel" name="phone" placeholder="Phone Number *" className={inputClasses} />
                  <ErrorMessage name="phone" component="div" className="absolute -bottom-5 text-red-500 text-xs font-bold" />
                </div>
                <div className="relative group">
                  <Field as="select" name="projectType" className={`${inputClasses} appearance-none rounded-none`}>
                    <option value="" disabled className="bg-black text-white/50">Project Type *</option>
                    <option value="Residential" className="bg-black">Residential Architecture</option>
                    <option value="Commercial" className="bg-black">Commercial Architecture</option>
                    <option value="Interior" className="bg-black">Interior Design</option>
                    <option value="Consultation" className="bg-black">Consultation</option>
                  </Field>
                  <ErrorMessage name="projectType" component="div" className="absolute -bottom-5 text-red-500 text-xs font-bold" />
                </div>
              </div>

              <div className="relative group">
                <Field as="select" name="budget" className={`${inputClasses} appearance-none rounded-none`}>
                  <option value="" disabled className="bg-black text-white/50">Budget Range *</option>
                  <option value="<$500k" className="bg-black">Under $500k</option>
                  <option value="$500k-$1M" className="bg-black">$500k - $1M</option>
                  <option value="$1M-$5M" className="bg-black">$1M - $5M</option>
                  <option value="$5M+" className="bg-black">$5M+</option>
                </Field>
                <ErrorMessage name="budget" component="div" className="absolute -bottom-5 text-red-500 text-xs font-bold" />
              </div>

              <div className="relative group mt-4">
                <Field as="textarea" name="message" placeholder="Project Details *" rows="4" className={`${inputClasses} resize-none`} />
                <ErrorMessage name="message" component="div" className="absolute -bottom-5 text-red-500 text-xs font-bold" />
              </div>

              <m.button 
                type="submit" 
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 bg-white text-black font-sans font-bold uppercase tracking-widest text-sm py-5 px-12 hover:bg-gray-200 transition-colors self-start disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Inquiry via WhatsApp'}
              </m.button>
            </Form>
          )}
        </Formik>
      </m.div>
    </div>
  );
}

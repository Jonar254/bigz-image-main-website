"use client";

import React, { useState, useRef } from 'react';
import { ArrowUpRight, Phone, MapPin, Mail } from 'lucide-react';
import { useToast } from '../hooks/use-toast';
import { Toaster } from '../components/ui/toaster';
import ImageHeroNav from '../components/ImageHeroNav';
import CustomDatePicker from '../components/CustomDatePicker';
import CompanyNarrative from '../components/CompanyNarrative';
import FAQ from '@/components/FAQ';

const CONTACT_HERO =
  '/images/documentaries/youth-empowerment-webp/UKD  (10).webp';

const SERVICE_TYPES = [
  'Branding',
  'Consultation',
  'Corporate Event',
  'Documentary',
  'Drone Coverage',
  'Other',
];

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  service: '',
  location: '',
  shootDate: '',
  message: '',
};

const INPUT_CLASS =
  'w-full bg-transparent border-0 border-b border-neutral-300 focus:border-black focus:outline-none py-3 text-[16px] placeholder:text-neutral-400 transition-colors';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const getRequiredMissingError = (form) => {
  const requiredFilled =
    form.name.trim() &&
    form.email.trim() &&
    form.phone.trim() &&
    form.service &&
    form.location.trim() &&
    form.message.trim();
  if (!requiredFilled) return 'Please fill in all required fields.';
  return null;
};

const validateForm = (form) => {
  const missing = getRequiredMissingError(form);
  if (missing) return missing;
  if (!EMAIL_REGEX.test(form.email)) {
    return 'Please enter a valid email address.';
  }
  return null;
};

const Field = ({ label, required, children }) => (
  <div className="flex flex-col">
    <label className="text-[13px] md:text-[14px] text-neutral-500 mb-2">
      {label}
      {required && <span className="text-neutral-500">*</span>}
    </label>
    {children}
  </div>
);

const TextInput = ({ value, onChange, placeholder, type = 'text' }) => (
  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={INPUT_CLASS}
  />
);

const SelectField = ({ value, onChange, placeholder, options }) => {
  const isEmpty = !value;
  return (
    <div className="relative">
      <select
        value={value}
        onChange={onChange}
        className={`${INPUT_CLASS} appearance-none pr-8 ${
          isEmpty ? 'text-neutral-400' : 'text-black'
        }`}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="text-black">
            {opt}
          </option>
        ))}
      </select>
      <span className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 text-neutral-500">
        ↓
      </span>
    </div>
  );
};

const Hero = () => {
  const heroRef = useRef(null);
  return (
  <div className="bg-white md:pt-10 md:pb-8 md:px-10 md:-mt-[110px]">
    <section ref={heroRef} className="relative min-h-screen md:min-h-[calc(100vh-1.5rem)] w-full bg-black overflow-hidden flex flex-col">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={CONTACT_HERO}
          alt="Contact BigzImage"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-[0.35]">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-neutral-900 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-neutral-950 blur-[140px]" />
      </div>

      <ImageHeroNav heroRef={heroRef} />

      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-center px-6 md:px-12 pt-32 md:pt-40 pb-20">
        <h1 className="text-white font-medium tracking-[-0.02em] leading-[1.05] max-w-[24ch] text-[32px] sm:text-[42px] md:text-[50px]">
          Let&apos;s create something
          {' '}
          <span className="relative inline-block italic">
            <span className="relative z-10">unforgettable</span>
            <span className="absolute inset-x-[-4px] bottom-1 h-2 bg-[#f6ae2d]/50" aria-hidden="true" />
          </span>
          .
        </h1>
        <p className="mt-8 text-white/90 text-[16px] md:text-[18px] max-w-[58ch] leading-relaxed">
          Reach out to plan your next production—whether it&apos;s documentary storytelling, stakeholder events, or strategic brand visuals tailored for impact.
        </p>
      </div>
    </section>
  </div>
  );
};

const ContactCard = ({ icon: Icon, title, content, href }) => (
  <div className="p-6 md:p-8 bg-[#0b3c5d] rounded-3xl border border-black/5 text-white">
    <div className="h-full p-4 md:p-6 bg-[#0b3c5d] rounded-xl border-l-[6px] border-[#f6ae2d] flex flex-col">
      <div className="flex items-center gap-3 mb-5">
        <Icon className="text-[#f6ae2d]" size={24} />
        <p className="text-white text-[13px] tracking-[0.24em] uppercase">{title}</p>
      </div>
      {href ? (
        <a
          href={href}
          className="text-[18px] md:text-[20px] text-white leading-[1.6] hover:text-[#f6ae2d] transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-[18px] md:text-[20px] text-white leading-[1.6]">
          {content}
        </p>
      )}
    </div>
  </div>
);

const InfoColumn = () => (
  <div className="flex flex-col gap-6 md:gap-8">
    <ContactCard
      icon={Phone}
      title="Office Line"
      content="+254716696672"
      href="tel:+254716696672"
    />
    <ContactCard
      icon={MapPin}
      title="Office Location"
      content="Amani estate, Mombasa Kenya"
      href="https://maps.google.com"
    />
    <ContactCard
      icon={Mail}
      title="Email Contact"
      content="bigzimageevents@gmail.com"
      href="mailto:bigzimageevents@gmail.com"
    />
  </div>
);

const FormHeader = () => (
  <>
    <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-medium tracking-[-0.02em] leading-tight">
      Ready to make things happen?

    </h2>
    <p className="text-black text-[15px] md:text-[16px] mt-4 mb-12 md:mb-14">
      Contact us here to schedule date availability, followed by a meetup consultation to discuss details, rates, and more. 
    </p>
  </>
);

const SubmitButton = ({ submitting }) => (
  <button
    type="submit"
    disabled={submitting}
    className="group inline-flex items-center gap-3 border border-black px-7 py-3.5 text-[15px] md:text-[16px] font-medium hover:bg-black hover:text-white transition-colors duration-300 disabled:opacity-50"
  >
    {submitting ? 'Sending…' : 'Submit Inquiry'}
    <ArrowUpRight
      size={16}
      className="transition-transform duration-300 group-hover:rotate-45"
    />
  </button>
);

const FormFields = ({ form, handle }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
    <Field label="Your Name" required>
      <TextInput value={form.name} onChange={handle('name')} placeholder="Enter your name" />
    </Field>
    <Field label="Email" required>
      <TextInput
        type="email"
        value={form.email}
        onChange={handle('email')}
        placeholder="Enter your email"
      />
    </Field>
    <Field label="Phone Number" required>
      <TextInput
        type="tel"
        value={form.phone}
        onChange={handle('phone')}
        placeholder="Enter your phone number"
      />
    </Field>
    <Field label="Which service are you looking for?" required>
      <SelectField
        value={form.service}
        onChange={handle('service')}
        placeholder="Choose service"
        options={SERVICE_TYPES}
      />
    </Field>
    <Field label="Job Location" required>
      <TextInput
        value={form.location}
        onChange={handle('location')}
        placeholder="eg. Mombasa, Kenya"
      />
    </Field>
    <Field label="Main shoot date">
      <CustomDatePicker
        value={form.shootDate}
        onChange={handle('shootDate')}
        className="border border-neutral-300 bg-white rounded-md px-4 py-3 focus:outline-none focus:border-black"
      />
    </Field>
  </div>
);

const useContactForm = () => {
  const { toast } = useToast();
  const [form, setForm] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);

  const handle = (key) => (valueOrEvent) => {
    const value =
      valueOrEvent && typeof valueOrEvent === 'object' && 'target' in valueOrEvent
        ? valueOrEvent.target.value
        : valueOrEvent;
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const error = validateForm(form);
    if (error) {
      toast({ title: 'Missing details', description: error });
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast({
        title: 'Inquiry sent',
        description: `Thanks ${form.name.split(' ')[0]} — we’ll be in touch shortly.`,
      });
      setForm(INITIAL_FORM);
    }, 700);
  };

  return { form, submitting, handle, handleSubmit };
};

const ContactForm = () => {
  const { form, submitting, handle, handleSubmit } = useContactForm();
  return (
    <form onSubmit={handleSubmit} className="flex flex-col">
      <FormHeader />
      <FormFields form={form} handle={handle} />
      <div className="mt-8">
        <Field label="Enter your message" required>
          <textarea
            rows={4}
            placeholder="Briefly describe what you are looking for."
            value={form.message}
            onChange={handle('message')}
            className={`${INPUT_CLASS} resize-y min-h-[110px]`}
          />
        </Field>
      </div>
      <div className="mt-10">
        <SubmitButton submitting={submitting} />
      </div>
    </form>
  );
};

const Contact = () => (
  <div className="bg-white text-black">
    <Hero />
    <CompanyNarrative />
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 lg:gap-28 items-start">
        <div className="order-2 md:order-2 lg:order-1">
          <InfoColumn />
        </div>
        <div className="order-1 md:order-1 lg:order-2">
          <ContactForm />
        </div>
      </div>
    </section>
    <FAQ />
    <Toaster />
  </div>
);

export default Contact;

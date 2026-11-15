import React, { useState } from 'react';
import { 
  Globe, 
  Cpu, 
  Bot, 
  MessageSquare, 
  Layers, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Send,
  Sparkles,
  ShieldCheck,
  Target,
  Layout,
  Code2,
  TrendingUp,
  Compass
} from 'lucide-react';

interface CorporateHomeViewProps {
  onOpenDiscovery: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const CorporateHomeView: React.FC<CorporateHomeViewProps> = ({
  onOpenDiscovery,
  onNavigateSection,
}) => {
  // Quick contact form state
  const [formState, setFormState] = useState({
    name: '',
    businessName: '',
    email: '',
    phone: '',
    service: 'Website Development',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleScrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim()) return;
    setFormSubmitted(true);
  };

  const services = [
    {
      title: 'Website Development',
      description:
        'Modern, responsive and user-friendly websites designed to present your business professionally and work smoothly across mobile, tablet and desktop.',
      icon: Globe,
    },
    {
      title: 'Custom Software Development',
      description:
        'Business-focused software built around your workflow, helping simplify operations, organize information and improve productivity.',
      icon: Cpu,
    },
    {
      title: 'AI Automation',
      description:
        'Practical AI-powered workflows that reduce repetitive tasks, support faster responses and help teams work more efficiently.',
      icon: Bot,
    },
    {
      title: 'WhatsApp Automation',
      description:
        'Automated WhatsApp communication for customer enquiries, instant replies, lead follow-ups, notifications and business messaging workflows.',
      icon: MessageSquare,
      highlight: true,
    },
    {
      title: 'Web Application Development',
      description:
        'Feature-rich web applications with intuitive frontends, structured backends and database integration to support your requirements.',
      icon: Layers,
    },
    {
      title: 'Business Digital Solutions',
      description:
        'Connected digital tools and tailored technology solutions that help streamline day-to-day business activities.',
      icon: Briefcase,
    },
  ];

  const whatsappFeatures = [
    'Automated welcome and enquiry replies',
    'Customer follow-up message workflows',
    'Appointment and order notifications',
    'Lead capture and enquiry organization',
    'Frequently asked question responses',
    'Business updates and approved message campaigns',
  ];

  const whyChooseUsPillars = [
    {
      title: 'Business-focused',
      description: 'Solutions shaped around your actual requirements.',
      icon: Target,
    },
    {
      title: 'Clean user experience',
      description: 'Simple, clear and responsive interfaces.',
      icon: Layout,
    },
    {
      title: 'Thoughtful development',
      description: 'Organized frontend, backend and database implementation.',
      icon: Code2,
    },
    {
      title: 'Practical automation',
      description: 'Technology that helps reduce repetitive work.',
      icon: ZapIcon,
    },
    {
      title: 'Scalable approach',
      description: 'Solutions planned to support future improvements.',
      icon: TrendingUp,
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We understand your business, goals and project requirements.',
    },
    {
      number: '02',
      title: 'Plan',
      description: 'We define the scope, key features, structure and development approach.',
    },
    {
      number: '03',
      title: 'Design',
      description: 'We create a clear and user-friendly experience for your audience.',
    },
    {
      number: '04',
      title: 'Develop',
      description: 'We build and integrate the required frontend, backend and services.',
    },
    {
      number: '05',
      title: 'Test & Deliver',
      description: 'We review functionality, resolve issues and prepare the solution for launch.',
    },
  ];

  return (
    <div className="bg-white text-slate-900 transition-colors">
      {/* ======================================================== */}
      {/* 01. HOME HERO                                            */}
      {/* ======================================================== */}
      <section id="hero" className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 bg-gradient-to-b from-slate-50/70 via-white to-white border-b border-slate-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-3.5 py-1.5 text-xs font-semibold text-blue-700 mb-8">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            <span>Digital Solutions for Modern Businesses</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
            Smart Digital Solutions for a <span className="text-blue-600">Growing Business.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stuzen Technologies helps businesses build a stronger digital presence through modern websites, custom software, AI-powered automation and connected business solutions. We focus on clear design, reliable development and practical technology that supports your goals.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => handleScrollTo('services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3.5 text-sm font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Explore Our Services</span>
            </button>

            <button
              type="button"
              onClick={onOpenDiscovery}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 text-sm font-semibold shadow-sm hover:shadow transition-all cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Quick Capability Highlights */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-xs">
              <div className="text-sm font-bold text-slate-900">Modern Websites</div>
              <p className="text-xs text-slate-500 mt-1">Mobile-ready & clear design</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-xs">
              <div className="text-sm font-bold text-slate-900">Custom Software</div>
              <p className="text-xs text-slate-500 mt-1">Built around your workflow</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-xs">
              <div className="text-sm font-bold text-slate-900">AI Automation</div>
              <p className="text-xs text-slate-500 mt-1">Practical productivity tools</p>
            </div>
            <div className="p-4 rounded-xl border border-slate-200/80 bg-white shadow-xs">
              <div className="text-sm font-bold text-slate-900">WhatsApp Systems</div>
              <p className="text-xs text-slate-500 mt-1">Instant customer workflows</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 02. ABOUT US & OUR APPROACH                              */}
      {/* ======================================================== */}
      <section id="about" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-block text-xs font-bold text-blue-600 tracking-wider uppercase">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Thoughtful Design Meets Dependable Technology.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Stuzen Technologies is an IT solutions company delivering website development, custom software, AI automation and digital services for businesses. We bring thoughtful design and dependable technology together to create solutions that are easy to use, efficient to manage and ready to grow with your business.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-7 sm:p-9 shadow-xs space-y-4">
              <div className="flex items-center gap-2.5 text-blue-600">
                <Compass size={20} />
                <h3 className="text-lg font-bold text-slate-900">Our Approach</h3>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                We begin by understanding your requirements, then plan, design, develop and refine the solution around your business needs. Our focus is on useful features, clean user experiences, structured development and ongoing support where required.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-3 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Requirement First</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Structured Scope</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Clear Communication</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  <span>Reliable Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 03. OUR SERVICES (Clean 6-Card Grid)                     */}
      {/* ======================================================== */}
      <section id="services" className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              Our Services
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Solutions Designed for Business Needs
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Tailored digital solutions built to elevate your business operations and online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className={`rounded-2xl border p-7 bg-white clean-card transition-all flex flex-col justify-between ${
                    service.highlight
                      ? 'border-blue-300 ring-1 ring-blue-100 shadow-sm'
                      : 'border-slate-200 shadow-xs'
                  }`}
                >
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={onOpenDiscovery}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 cursor-pointer"
                    >
                      <span>Inquire about this service</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 04. WHATSAPP AUTOMATION SPOTLIGHT SECTION                */}
      {/* ======================================================== */}
      <section id="whatsapp" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/50 via-white to-slate-50 p-8 sm:p-12 lg:p-14 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-100/60 px-3.5 py-1 text-xs font-semibold text-emerald-800">
                <MessageSquare size={14} />
                <span>WhatsApp Automation Spotlight</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Make Every Customer Conversation More Efficient.
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                Connect with customers through structured WhatsApp workflows. From enquiry acknowledgement to follow-up messages and important notifications, WhatsApp automation can help your business respond consistently and manage conversations more efficiently.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {whatsappFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <div className="h-5 w-5 rounded-full bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={3} />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-slate-700">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-400 italic pt-2">
                Feature availability depends on the selected WhatsApp platform, provider and applicable messaging policies.
              </p>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenDiscovery}
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                >
                  <span>Discuss WhatsApp Automation</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-slate-800 font-mono">WhatsApp Workflow</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-mono">Instant Reply</span>
                </div>

                {/* Message Mockup Preview */}
                <div className="space-y-3 font-sans text-xs">
                  <div className="p-3 rounded-lg bg-slate-100 text-slate-700 max-w-[85%]">
                    "Hi, I would like to enquire about your services."
                  </div>
                  <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200/80 text-emerald-900 ml-auto max-w-[90%]">
                    "Hello! Thank you for reaching out to Stuzen Technologies. We received your enquiry and our team will get back to you shortly. Can you share what you want to build?"
                  </div>
                  <div className="p-2.5 rounded-md bg-slate-50 border border-slate-200/60 text-[11px] text-slate-500 text-center font-mono">
                    ✓ Notification sent to team in 1.2s
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 05. WHY CHOOSE STUZEN (5 Clean Pillars)                  */}
      {/* ======================================================== */}
      <section id="why-choose-us" className="py-20 sm:py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-block text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
              Why Choose Stuzen
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
              Reliable Delivery Focused on Business Value
            </h2>
            <p className="mt-3 text-base text-slate-600">
              We combine technical capability with clear communication and dependable execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {whyChooseUsPillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-slate-200 bg-white p-6 shadow-xs clean-card text-left flex flex-col justify-between"
                >
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 mb-1.5">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 06. OUR PROCESS (Clean 5-Step Horizontal/Grid Timeline)  */}
      {/* ======================================================== */}
      <section id="process" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-block text-xs font-bold text-blue-600 tracking-wider uppercase mb-2">
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            A Clear, Structured Pathway from Concept to Launch
          </h2>
          <p className="mt-3 text-base text-slate-600">
            A structured, transparent pathway from concept to launch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-2xl font-extrabold text-blue-600 block mb-3">
                  {step.number}
                </span>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < processSteps.length - 1 && (
                <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-300">
                  <ArrowRight size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 07. CALL TO ACTION BANNER                                */}
      {/* ======================================================== */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-blue-600 text-white p-8 sm:p-12 text-center shadow-md">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Have a Project in Mind?
          </h2>
          <p className="mt-3 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Tell us what you want to build. Let's discuss a digital solution that fits your business.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onOpenDiscovery}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-white text-blue-700 hover:bg-blue-50 px-7 py-3.5 text-sm font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/917418672022?text=Hi%20Stuzen%20Technologies%2C%20I%20have%20a%20project%20in%20mind%20and%20would%20like%20to%20discuss%20it."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-blue-400 bg-blue-700/50 hover:bg-blue-700 text-white px-6 py-3.5 text-sm font-semibold transition-colors cursor-pointer"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 08. CONTACT SECTION                                      */}
      {/* ======================================================== */}
      <section id="contact" className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Stuzen Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-block text-xs font-bold text-blue-600 tracking-wider uppercase">
              Get in Touch
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Let's Talk About Your Project.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Have a question or need a digital solution for your business? Send us your requirements and our team will get back to you.
            </p>

            <div className="space-y-4 pt-2">
              <a
                href="mailto:hello@stuzentechnologies.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-blue-300 bg-white shadow-xs transition-all cursor-pointer group"
              >
                <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Email Address</div>
                  <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                    hello@stuzentechnologies.com
                  </div>
                </div>
              </a>

              <a
                href="https://wa.me/917418672022"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 hover:border-emerald-300 bg-white shadow-xs transition-all cursor-pointer group"
              >
                <div className="h-10 w-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Phone & WhatsApp</div>
                  <div className="text-sm font-semibold text-slate-800 group-hover:text-emerald-600 transition-colors">
                    +91 74186 72022
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-xs">
                <div className="h-10 w-10 rounded-lg bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <div className="text-xs font-medium text-slate-400">Location</div>
                  <div className="text-sm font-semibold text-slate-800">
                    Tamil Nadu, India
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <div className="text-sm font-bold text-slate-900 mb-1">
                Need a Detailed Project Blueprint?
              </div>
              <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                Use our 10-section Website Project Requirements Discovery Form to specify your goals, sitemap, features and budget.
              </p>
              <button
                type="button"
                onClick={onOpenDiscovery}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                <span>Launch Interactive Project Discovery Form</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Quick-Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-9 shadow-xs">
              <h3 className="text-xl font-bold text-slate-900 mb-1">
                Send Your Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mb-6">
                Fill in your details and our team will get in touch to discuss your solution.
              </p>

              {formSubmitted ? (
                <div className="py-10 text-center space-y-3">
                  <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 size={32} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    Thank You! We Have Received Your Message.
                  </h4>
                  <p className="text-sm text-slate-600 max-w-sm mx-auto">
                    Our team will review your requirements for <strong>{formState.name}</strong> and contact you via email or WhatsApp shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormState({
                        name: '',
                        businessName: '',
                        email: '',
                        phone: '',
                        service: 'Website Development',
                        message: '',
                      });
                    }}
                    className="mt-4 text-xs font-semibold text-blue-600 hover:underline cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Business / Company Name
                      </label>
                      <input
                        type="text"
                        value={formState.businessName}
                        onChange={(e) => setFormState({ ...formState, businessName: e.target.value })}
                        placeholder="e.g. Acme Enterprises"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="name@company.com"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-700 mb-1">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Service Needed
                    </label>
                    <select
                      value={formState.service}
                      onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none bg-white"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="AI Automation">AI Automation</option>
                      <option value="WhatsApp Automation">WhatsApp Automation</option>
                      <option value="Web Application Development">Web Application Development</option>
                      <option value="Business Digital Solutions">Business Digital Solutions</option>
                      <option value="Other">Other / General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Project Details / Message
                    </label>
                    <textarea
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder="Briefly describe what you want to build or achieve..."
                      className="w-full rounded-lg border border-slate-300 px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white py-3 text-sm font-semibold shadow-xs transition-colors cursor-pointer"
                  >
                    <Send size={15} />
                    <span>Send Requirements</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

function ZapIcon(props: { size?: number; className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={props.size || 20} 
      height={props.size || 20} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={props.className}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

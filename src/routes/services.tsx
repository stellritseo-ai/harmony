import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import { Faq } from "@/components/site/Faq";
import serviceBg from "@/assets/service-hero-bg.png";
import svcWaiverNursing from "@/assets/svc-waiver-nursing.png";
import svcPersonalCare from "@/assets/svc-personal-care.png";
import {
  Baby,
  HandHelping,
  ArrowRight,
  ShieldCheck,
  Phone,
  Heart,
  Clock,
  Sparkles,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home Health & Personal Assistance Services | Harmony Residential Care" },
      { name: "description", content: "Professional in-home clinical care, private duty nursing, and daily personal assistance (PAS/PHC) in Central Texas. Star Kids, Star Plus, and VA accepted." },
      { property: "og:title", content: "Home Health Services | Harmony Residential Care" },
      { property: "og:description", content: "Clinical private duty nursing and senior care programs designed to preserve independence and peace of mind." },
    ],
  }),
  component: ServicesPage,
});

// Animation presets
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

function ServicesPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Page Hero Section */}
      <PageHero
        title="Our Services"
        description="Comprehensive home health care, companionship, and shared living services tailored to your needs."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
        bgImage={serviceBg}
      />

      {/* Intro Subheadline */}
      <section className="py-16 md:py-20 px-4 max-w-7xl mx-auto border-b border-border">
        <motion.div
          className="text-center max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-brand/10 text-brand uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Care Programs
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-brand-deep leading-tight">
            Specialized Care Programs Tailored for <span className="text-brand">Your Loved Ones.</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            We divide our specialized home care into two dedicated areas to ensure absolute focus on clinical excellence and daily personal independence. Select a program below to explore our specific services.
          </p>
        </motion.div>
      </section>

      {/* Side-by-Side Gateway Spotlight Cards */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* 1. Pediatric Care Card */}
          <motion.div 
            className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-soft hover:shadow-glow hover:border-brand/20 transition-all duration-500 flex flex-col justify-between"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Visual Header Image Container */}
            <div className="relative h-[250px] md:h-[300px] overflow-hidden">
              <div className="absolute inset-0 bg-brand-deep/30 group-hover:bg-brand-deep/20 transition-all duration-500 z-10" />
              <img 
                src={svcWaiverNursing} 
                alt="Pediatric Home Health Care" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[10px] font-bold tracking-widest bg-white text-brand-deep uppercase shadow-sm">
                  <Baby className="w-3.5 h-3.5" /> Clinical Duty Nursing
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-10 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-deep leading-tight">
                  Pediatric Care
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  Specialized, high-quality shift nursing (8–24 hours/day) and clinical medical support for infants, children, and teens with complex medical needs. We bring PICU-grade competence straight to your child's bedside.
                </p>

                {/* Checklist */}
                <ul className="space-y-3 pt-2 text-xs font-body text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Ventilator & tracheostomy care (certified day one)
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Gastrostomy tube (G-Tube) & NG-Tube feeding
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Injections, IV therapy & medication administration
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Continuous oximetry, vitals tracking & safety plans
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-border mt-6">
                <Link
                  to="/pediatric-care"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-brand-gradient text-white font-bold hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Pediatric Care Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

          {/* 2. Personal Assistance Card */}
          <motion.div 
            className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card shadow-soft hover:shadow-glow hover:border-brand/20 transition-all duration-500 flex flex-col justify-between"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {/* Visual Header Image Container */}
            <div className="relative h-[250px] md:h-[300px] overflow-hidden">
              <div className="absolute inset-0 bg-brand-deep/30 group-hover:bg-brand-deep/20 transition-all duration-500 z-10" />
              <img 
                src={svcPersonalCare} 
                alt="Personal Assistance Services" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[10px] font-bold tracking-widest bg-white text-brand-deep uppercase shadow-sm">
                  <HandHelping className="w-3.5 h-3.5" /> Non-Medical Support
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-8 md:p-10 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-deep leading-tight">
                  Personal Assistance (PAS / PHC)
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed font-body">
                  Dedicated, compassionate support with non-medical activities of daily living (ADLs) to help adults, seniors, and individuals with chronic conditions protect their independence and age in place.
                </p>

                {/* Checklist */}
                <ul className="space-y-3 pt-2 text-xs font-body text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Dignified help with bathing, toileting, and grooming
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Customized meal preparation, healthy recipes & feeding
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Light housekeeping, dusting, sweeping & laundry
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand" /> Ambulation, safety transfers & self-medication reminders
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 border-t border-border mt-6">
                <Link
                  to="/personal-assistance"
                  className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-brand-gradient text-white font-bold hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Personal Assistance Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Regulatory & Insurance Credentials Highlights */}
      <section className="py-20 bg-muted border-y border-border px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Financing & Quality</span>
            <h3 className="text-3xl font-bold font-display text-brand-deep">
              Affordable, Licensed & Certified Care
            </h3>
            <p className="text-muted-foreground font-body text-sm">We coordinate directly with local health networks and insurances.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Medicaid STAR Kids", desc: "Approved clinical pediatric coverage in Central Texas.", icon: ShieldCheck },
              { title: "Medicaid STAR+PLUS", desc: "Approved non-medical home care coverage for seniors.", icon: ShieldCheck },
              { title: "VA Community Care", desc: "Dedicated home care support plans for eligible veterans.", icon: Award },
              { title: "24/7 Clinical Support", desc: "Every case backed by a supervising nurse available 24/7.", icon: Phone },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-6 text-center space-y-3 shadow-sm">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center mx-auto">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-foreground font-display text-sm leading-snug">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <div className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">FAQ</span>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
            Frequently Asked Questions
          </h3>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>
        <Faq />
      </div>

      {/* Call to Action Assessment Banner */}
      <section className="py-24 bg-brand-gradient text-white relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 opacity-15">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold font-display">
              Ready to Coordinate Your Plan of Care?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-body leading-relaxed">
              We offer free, no-obligation benefits checks and home consultations. Let's start the conversation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="tel:8307437043" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-brand-deep font-bold hover:bg-blue-50 transition-colors shadow-glow"
            >
              <Phone className="w-5 h-5" /> Call (830) 743-7043
            </a>
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand border border-white/30 text-white font-bold hover:bg-brand/90 transition-colors"
            >
              Schedule Free Assessment <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline Helper
function Check(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`w-4 h-4 text-brand flex-shrink-0 mt-0.5`}
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

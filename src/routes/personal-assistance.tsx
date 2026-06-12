import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import svcPersonalCare from "@/assets/svc-personal-care.png";
import {
  Bath,
  Shirt,
  Utensils,
  Smile,
  Sparkles,
  Accessibility,
  Dumbbell,
  Trash2,
  Footprints,
  Soup,
  Pill,
  ShieldCheck,
  Phone,
  Mail,
} from "lucide-react";

export const Route = createFileRoute("/personal-assistance")({
  head: () => ({
    meta: [
      { title: "Personal Assistance Services (PAS & PHC) | Harmony Residential Care" },
      { name: "description", content: "Dignified non-medical home care, housekeeping, and meal support for seniors and adults in Round Rock and Austin. STAR+PLUS Medicaid and VA accepted." },
      { property: "og:title", content: "Personal Assistance Care | Harmony Residential Care" },
      { property: "og:description", content: "Dignity-first help with bathing, dressing, meal preparation, mobility, and medication reminders." },
    ],
  }),
  component: PersonalAssistancePage,
});

const items = [
  {
    title: "Bathing Support",
    detail: "Safe hygiene assistance",
    desc: "Respectful, safe help with bathing or showering to maintain personal hygiene, skin health, and client comfort.",
    icon: Bath,
  },
  {
    title: "Dressing Assistance",
    detail: "Morning and evening prep",
    desc: "Help selecting comfortable, clean clothes and assistance with dressing or undressing to start and end the day right.",
    icon: Shirt,
  },
  {
    title: "Feeding Assistance",
    detail: "Nutritional support",
    desc: "Attentive feeding support, focusing on appropriate meal pacing, safe swallowing, and maintaining a dignified dining experience.",
    icon: Utensils,
  },
  {
    title: "Grooming & Hair Care",
    detail: "Personal styling & care",
    desc: "Assistance with brushing hair, styling, applying lotion, and other grooming needs to keep clients feeling refreshed.",
    icon: Smile,
  },
  {
    title: "Shaving & Oral Care",
    detail: "Dignified grooming support",
    desc: "Gentle help with shaving, brushing teeth, flossing, or denture care to maintain oral health and personal appearance.",
    icon: Sparkles,
  },
  {
    title: "Routine Skin & Hair Care",
    detail: "Basic skin protection",
    desc: "Applying moisturizers, checking for pressure areas, and basic hair maintenance to promote skin health and cleanliness.",
    icon: Sparkles,
  },
  {
    title: "Toileting & Incontinence Care",
    detail: "Private bathroom support",
    desc: "Highly discreet, respectful assistance with toileting, transfer to commodes, and timely changing of incontinence briefs.",
    icon: Accessibility,
  },
  {
    title: "Exercising Support",
    detail: "Range-of-motion & mobility",
    desc: "Assistance with light stretching, walking routines, and active or passive range-of-motion exercises to maintain strength.",
    icon: Dumbbell,
  },
  {
    title: "Light Cleaning",
    detail: "Living area upkeep",
    desc: "Dusting, sweeping, sanitizing key surfaces, and tidying up the client's primary living space to keep it clean and safe.",
    icon: Trash2,
  },
  {
    title: "Laundry Services",
    detail: "Bedding and clothing care",
    desc: "Washing, drying, folding, and putting away client's clothes, pajamas, towels, and bedsheets on a regular basis.",
    icon: Shirt,
  },
  {
    title: "Escort Assistance",
    detail: "Non-driving travel escort",
    desc: "Accompanying the client during walking, transfers, or riding in public transit or third-party vehicles (employee does not drive).",
    icon: Footprints,
  },
  {
    title: "Meal Preparation",
    detail: "Healthy cooking & prepping",
    desc: "Planning, cooking, and serving nutritious meals and snacks tailored to the client's medical dietary restrictions and tastes.",
    icon: Soup,
  },
  {
    title: "Self-Medication Assistance",
    detail: "Medication reminders",
    desc: "Providing timely reminders, opening pill containers, reading labels, and assisting with water to support medication compliance.",
    icon: Pill,
  },
  {
    title: "Ambulation Support",
    detail: "Safe walking & transfers",
    desc: "Help moving safely around the house, transferring from bed to wheelchair, and using walkers or canes effectively.",
    icon: Footprints,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 120, damping: 14 } },
};

function PersonalAssistancePage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      <PageHero
        title="Personal Assistance"
        description="Dedicated support with non-medical activities of daily living to help adults and seniors maintain independence and dignity at home."
        breadcrumbs={[{ label: "Personal Assistance", href: "/personal-assistance" }]}
        bgImage={svcPersonalCare}
      />

      {/* Intro section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Daily Independence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-brand-deep">
              Compassionate Care That Preserves Pride & Independence.
            </h2>
            <p className="text-muted-foreground leading-relaxed font-body">
              At Harmony Residential Care LLC, our Personal Assistance Services (PAS) and Primary Home Care (PHC) programs are built around a simple principle: caring for your parents and loved ones with the exact same dignity we'd give our own.
            </p>
            <p className="text-muted-foreground leading-relaxed font-body">
              Our trained aides assist with daily activities without rushing or judgment, helping seniors and adults with disabilities safely age in place in their own homes.
            </p>
          </div>
          
          <div className="lg:col-span-6 bg-card border border-border shadow-soft rounded-3xl p-8 space-y-6">
            <h3 className="font-display font-bold text-xl text-brand-deep flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand" /> PAS & PHC Highlights
            </h3>
            <ul className="space-y-4 text-sm font-body text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Dignified help with bathing, toileting, and dressing
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Customized meal preparation adhering to dietary needs
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Light housekeeping, primary living space cleaning & laundry
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Timely medication reminders and walking/mobility support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Support programs approved under STAR+PLUS Medicaid & VA Community Care
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-20 md:py-28 bg-muted border-y border-border px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Services Overview</span>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
              Personal Care & Assistance Tasks
            </h3>
            <p className="text-muted-foreground font-body">Discreet and helpful assistance for daily activities.</p>
            <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((item, index) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  className="bg-card hover:bg-brand rounded-2xl p-6 border border-border hover:border-brand hover:shadow-glow transition-all duration-300 flex items-start gap-4 group cursor-pointer"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center shrink-0 group-hover:bg-white group-hover:border-white/50 transition-all duration-300">
                    <ItemIcon className="w-5 h-5 text-brand transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-bold text-brand group-hover:text-white/80 tracking-wider uppercase block mb-0.5 transition-colors duration-300">
                      {item.detail}
                    </span>
                    <h4 className="font-bold text-sm md:text-base text-foreground group-hover:text-white leading-tight transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground group-hover:text-white/95 leading-relaxed mt-2 font-light transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-24 bg-brand-gradient text-white relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 opacity-15">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold font-display">
              Seeking Personal Assistance Services?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-body leading-relaxed">
              We accept VA Community Care and STAR+PLUS Medicaid. Contact our supervisors for a free consultation or benefits evaluation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a 
              href="tel:8307437043" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-brand-deep font-bold hover:bg-blue-50 transition-colors shadow-glow"
            >
              <Phone className="w-5 h-5" /> Call (830) 743-7043
            </a>
            <a 
              href="mailto:harmonyresicaretx@gmail.com" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand border border-white/30 text-white font-bold hover:bg-brand/90 transition-colors"
            >
              <Mail className="w-5 h-5" /> Email Direct
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

// Inline helper components
function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

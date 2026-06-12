import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import svcWaiverNursing from "@/assets/svc-waiver-nursing.png";
import {
  Clock,
  Activity,
  HeartPulse,
  Soup,
  Stethoscope,
  Wind,
  UserCheck,
  ShieldAlert,
  BookOpen,
  Pill,
  Heart,
  CalendarCheck,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

export const Route = createFileRoute("/pediatric-care")({
  head: () => ({
    meta: [
      { title: "Pediatric Home Health Care & Shift Nursing | Harmony Residential Care" },
      { name: "description", content: "Skilled private duty shift nursing (8-24 hours/day) for children with complex clinical needs in Central Texas. Certified in ventilator, trach, and G-tube care." },
      { property: "og:title", content: "Pediatric Care | Harmony Residential Care" },
      { property: "og:description", content: "Airway management, ventilator support, and enteral nutrition (G-Tube) shift nursing by expert pediatric clinical teams." },
    ],
  }),
  component: PediatricCarePage,
});

const items = [
  {
    title: "Extended Hour Nursing Care",
    detail: "8-24 hours a day shift nursing",
    desc: "Continuous, one-on-one medical care from registered (RN) or licensed vocational (LVN) nurses, tailored for complex shift coverage.",
    icon: Clock,
  },
  {
    title: "Monitoring Vitals",
    detail: "Continuous health tracking",
    desc: "Regular assessment of temperature, blood pressure, heart rate, and oxygen saturation to ensure immediate clinical response.",
    icon: Activity,
  },
  {
    title: "Pain Management",
    detail: "Comfort and relief focus",
    desc: "Carefully calibrated pain relief protocols and assessment strategies to maximize your child's comfort and well-being.",
    icon: HeartPulse,
  },
  {
    title: "Gastrostomy Tube Care & Feeding",
    detail: "G-Tube feeding and hygiene",
    desc: "Professional enteral nutrition administration, site cleaning, tube maintenance, and troubleshooting for gastrostomy tubes.",
    icon: Soup,
  },
  {
    title: "Tracheostomy Care & Management",
    detail: "Trach suctioning and hygiene",
    desc: "Critical airway management, including suctioning, cleaning, and tube changes to ensure consistent, safe respiration.",
    icon: Stethoscope,
  },
  {
    title: "Ventilator Management",
    detail: "Mechanical ventilator support",
    desc: "Experienced clinical management of ventilator parameters, tubing, alarms, and emergency procedures for vent-dependent children.",
    icon: Wind,
  },
  {
    title: "Oxygen Management",
    detail: "Supplemental oxygen care",
    desc: "Administration and titration of oxygen, including monitoring pulse oximetry levels and caring for oxygen delivery equipment.",
    icon: Wind,
  },
  {
    title: "Personal Care Support",
    detail: "Bathing, hygiene & ADL help",
    desc: "Gentle assistance with basic activities of daily living, including bathing, hair care, dressing, and hygiene, customized to child needs.",
    icon: UserCheck,
  },
  {
    title: "Catheter Care",
    detail: "Urinary system care",
    desc: "Hygienic care, monitoring, and sanitization of catheter devices to optimize comfort and prevent urinary tract infections.",
    icon: ShieldAlert,
  },
  {
    title: "Disease Management & Education",
    detail: "Family education and training",
    desc: "Comprehensive teaching and supportive resources to help parents and families confidently understand and manage chronic illnesses.",
    icon: BookOpen,
  },
  {
    title: "Medication & IV Administration",
    detail: "Oral, IV, and injections",
    desc: "Precise dosing, tracking, and clinical administration of oral medicines, injections, and complex intravenous (IV) infusions.",
    icon: Pill,
  },
  {
    title: "Advanced Wound Care",
    detail: "Wound vac and dressings",
    desc: "Sterile dressing changes, wound bed hygiene, and active management of wound vacuum-assisted closure (wound vac) systems.",
    icon: Heart,
  },
  {
    title: "Daily Head-To-Toe Assessment",
    detail: "Comprehensive physical check",
    desc: "A systematic daily physical exam to review respiratory, cardiovascular, and neurological stability, detecting early warning signs.",
    icon: Stethoscope,
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

function PediatricCarePage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      <PageHero
        title="Pediatric Care"
        description="Compassionate, high-quality private duty nursing and clinical support for infants, children, and adolescents with complex medical needs."
        breadcrumbs={[{ label: "Pediatric Care", href: "/pediatric-care" }]}
        bgImage={svcWaiverNursing}
      />

      {/* Intro Spot Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Clinical Excellence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-brand-deep">
              Hospital-Quality Medical Care In the Comfort of Home.
            </h2>
            <p className="text-muted-foreground leading-relaxed font-body">
              At Harmony Residential Care LLC, we believe that children with complex clinical needs thrive best when they are at home with their families. We hire specialized registered nurses (RNs) and licensed vocational nurses (LVNs) with deep pediatric and ICU experience to handle complex clinical care, from ventilators to G-tubes.
            </p>
            <div className="p-5 border-l-4 border-brand bg-brand/5 text-brand-deep font-semibold italic">
              "We provide extended hour nursing (8–24 hours/day) so your child can grow, play, and learn where they belong — at home."
            </div>
          </div>
          
          <div className="lg:col-span-6 bg-card border border-border shadow-soft rounded-3xl p-8 space-y-6">
            <h3 className="font-display font-bold text-xl text-brand-deep flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand" /> Pediatric Care Specialties
            </h3>
            <ul className="space-y-4 text-sm font-body text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Airway management (ventilator & tracheostomy)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Enteral nutrition management (G-Tube & NG-Tube)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Seizure monitoring & epilepsy protocols
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Continuous vital tracking & head-to-toe clinical assessments
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-brand flex-shrink-0" /> Caregiver training & support for parents and family members
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sub-Services Grid */}
      <section className="py-20 md:py-28 bg-muted border-y border-border px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Clinical Services</span>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
              Specialized Pediatric Care Details
            </h3>
            <p className="text-muted-foreground font-body">Our qualified nurses arrive prepared for clinical shift care from day one.</p>
            <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {items.map((item) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.title}
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

      {/* Call to Action Assessment Banner */}
      <section className="py-24 bg-brand-gradient text-white relative overflow-hidden isolate">
        <div className="absolute inset-0 -z-10 opacity-15">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-bold font-display">
              Need Pediatric Care Support?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-body leading-relaxed">
              Our clinical nurse supervisors can conduct a free, no-obligation benefits check and construct a safe in-home shift transition plan.
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

function ShieldCheck(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 13c0 5-3.5 7.5-7.66 9.7a1 1 0 0 1-.68 0C7.5 20.5 4 18 4 13V6a1 1 0 0 1 .76-.97l8-2a1 1 0 0 1 .48 0l8 2A1 1 0 0 1 20 6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

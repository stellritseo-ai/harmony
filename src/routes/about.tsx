import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import serviceBg from "@/assets/service-hero-bg.png";
import welcomeImg from "@/assets/welcome-care.jpg";
import whyImg from "@/assets/why-choose.jpg";
import svcWaiverNursing from "@/assets/svc-waiver-nursing.png";
import svcPersonalCare from "@/assets/svc-personal-care.png";
import heroNurse from "@/assets/hero-nurse.jpg";
import {
  Heart,
  ShieldCheck,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Users,
  CheckCircle2,
  Activity,
  Sparkles,
  Stethoscope,
  Baby,
  Accessibility,
  Milestone,
  UserCheck,
  Calendar,
  Building,
  Quote,
  Check,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Harmony Residential Care | Round Rock TX" },
      { name: "description", content: "Learn about our 20+ years of keeping Texas families together at home. Certified pediatric vent/trach care and senior personal assistance." },
      { property: "og:title", content: "About Us | Harmony Residential Care" },
      { property: "og:description", content: "Keeping Texas families together at home for over 20 years. Discover our story, mission, and core values." },
    ],
  }),
  component: AboutPage,
});

// Animation presets
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.15
    }
  },
  viewport: { once: true, margin: "-100px" }
};

function AboutPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Page Hero Section */}
      <PageHero
        title="About Us"
        description="Serving Round Rock, Austin, Georgetown, and surrounding Central Texas cities."
        breadcrumbs={[{ label: "About", href: "/about" }]}
        bgImage={serviceBg}
      />

      {/* Headline & Subheadline Intro */}
      <section className="py-16 md:py-20 px-4 max-w-7xl mx-auto border-b border-border">
        <motion.div 
          className="text-center max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-semibold bg-brand/10 text-brand uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Established 2003
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-display text-brand-deep leading-tight">
            More Than 20 Years of Keeping Texas Families Together — <span className="text-brand">At Home.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            Harmony Residential Care LLC provides skilled pediatric home health and personal assistance services with a simple belief: <strong className="text-foreground font-semibold">Nothing heals like home, and nothing matters like family.</strong>
          </p>
        </motion.div>
      </section>

      {/* Our Story: From One Family to Yours */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Story Content (Left side, occupies 7 cols) */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="space-y-3">
              <span className="text-brand font-semibold uppercase tracking-wider text-sm">Our Story</span>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
                From One Family to Yours.
              </h3>
              <div className="w-16 h-1 bg-brand rounded-full" />
            </div>

            <div className="space-y-6 text-muted-foreground leading-relaxed text-base font-body">
              <p className="text-lg text-foreground/80 font-medium">
                For over two decades, Harmony Residential Care LLC has been a quiet lifeline for Texas families navigating complex health challenges.
              </p>
              <p>
                We started with a simple observation: too many children with tracheostomies, ventilators, or G-tubes were staying in hospitals not because they needed ICU-level care, but because no one was available to help at home.
              </p>
              <p>
                And too many seniors were leaving their homes of 40 years simply because they needed help with bathing, dressing, or a warm meal.
              </p>
              <p className="text-brand-deep font-semibold italic border-l-4 border-brand pl-4 my-6">
                "That didn’t seem right to us."
              </p>
              <p>
                So we built Harmony Residential Care differently. We hired registered nurses with ICU and pediatric ICU (PICU) experience. We trained our personal care aides to treat every adult with the same dignity we’d give our own parents. And we made one non-negotiable promise: a 24/7 on-call nurse would always be available — not an answering service, but a real nurse who knows your case.
              </p>
              <p>
                Today, we’re proud to serve Round Rock, Austin, Georgetown, and surrounding cities. But our real pride comes from the families who finally sleep through the night, the children who celebrate birthdays at home instead of hospital rooms, and the seniors who wake up in their own beds, with their own photos on the wall.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Visual and Highlights (occupies 5 cols) */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
            {/* Visual Image Card */}
            <motion.div
              className="relative rounded-[2rem] overflow-hidden shadow-glow aspect-[4/3] border border-border bg-muted"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={welcomeImg}
                alt="Compassionate Care in Round Rock"
                className="w-full h-full object-cover animate-pulse-slow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass px-4 py-3 rounded-xl flex items-center justify-between text-white border border-white/10">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider block opacity-90 text-blue-200">Our Core Commitment</span>
                  <span className="text-sm font-bold block">Hospital-Quality Care at Home</span>
                </div>
              </div>
            </motion.div>

            {/* Core Highlights Sidebar Card */}
            <motion.div 
              className="bg-card rounded-2xl border border-border shadow-soft p-8 space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold font-display text-brand-deep border-b border-border pb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-brand" /> Quick Highlights
              </h4>
              
              <ul className="space-y-5">
                {[
                  { title: "20+ Years in Central Texas", desc: "Local and trusted family-oriented home care." },
                  { title: "ICU / PICU Nurse Expertise", desc: "Nurses trained in trach, vent, and G-tube management." },
                  { title: "24/7 Direct Nurse Line", desc: "Never speak to an answering service. Speak directly to a supervisor." },
                  { title: "Seniors & Pediatric Care", desc: "Care plans built around dignity for toddlers, adults, and grandparents." }
                ].map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center font-bold text-sm">
                      {index + 1}
                    </div>
                    <div>
                      <h5 className="font-semibold text-foreground">{item.title}</h5>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Core Values Section */}
      <section className="py-20 md:py-28 bg-brand-deep text-white relative isolate">
        {/* Subtle background blob patterns */}
        <div className="absolute inset-0 -z-10 opacity-10 overflow-hidden">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full bg-brand blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-blue-300 blur-3xl animate-blob animation-delay-4000" />
        </div>

        <div className="max-w-7xl mx-auto px-4 space-y-20">
          
          {/* Mission & Vision Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Mission */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 space-y-4 hover:bg-white/15 transition-all duration-300"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center shadow-glow mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold font-display">Our Mission</h4>
              <p className="text-white/80 leading-relaxed font-body">
                To deliver hospital-quality pediatric home health and compassionate personal assistance services that allow Texas families to stay together, at home, with dignity, safety, and peace of mind.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div 
              className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-8 md:p-10 space-y-4 hover:bg-white/15 transition-all duration-300"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand text-white flex items-center justify-center shadow-glow mb-4">
                <Milestone className="w-6 h-6" />
              </div>
              <h4 className="text-2xl font-bold font-display">Our Vision</h4>
              <p className="text-white/80 leading-relaxed font-body">
                A Texas where no child with complex medical needs is institutionalized for lack of home nursing, and no senior loses their independence because they need help with daily tasks.
              </p>
            </motion.div>

          </div>

          {/* Core Values Section */}
          <div className="space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-brand-light font-semibold uppercase tracking-wider text-sm text-blue-200">Our Pillar Principles</span>
              <h3 className="text-3xl md:text-4xl font-bold font-display text-white">Our Core Values</h3>
              <p className="text-white/70">The fundamental beliefs that guide our care every day.</p>
            </div>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              {[
                {
                  title: "Empathy First",
                  desc: "We listen before we treat. Every care plan starts with understanding what your family actually needs.",
                  icon: Heart,
                },
                {
                  title: "Clinical Excellence",
                  desc: "Our nurses don’t 'figure it out on the job.' They arrive trained in trach, vent, G-tube, wound vac, and IV management.",
                  icon: Stethoscope,
                },
                {
                  title: "Reliability You Can Set a Clock To",
                  desc: "We show up on time, answer calls at 2 AM, and never leave a shift unfilled without notice.",
                  icon: Clock,
                },
                {
                  title: "Dignity for All Ages",
                  desc: "Whether we’re feeding a toddler with a G-tube or helping an 80-year-old bathe, we protect your loved one’s privacy and pride.",
                  icon: UserCheck,
                },
              ].map((value, idx) => (
                <motion.div 
                  key={idx}
                  className="bg-white/5 border border-white/5 rounded-xl p-6 space-y-4 hover:bg-white/10 hover:border-white/10 transition-all duration-300 flex flex-col justify-between group"
                  variants={fadeInUp}
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <value.icon className="w-5 h-5 text-blue-300" />
                    </div>
                    <h5 className="text-lg font-semibold font-display text-white">{value.title}</h5>
                    <p className="text-sm text-white/70 font-body leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Compassionate Support</span>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
            From Fragile Infants to Aging Parents — We're Here.
          </h3>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Pediatrics */}
          <motion.div 
            className="group bg-card rounded-2xl border border-border shadow-soft hover:shadow-glow hover:border-brand/20 transition-all duration-500 relative overflow-hidden flex flex-col"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Top Image header */}
            <div className="h-60 relative overflow-hidden bg-muted">
              <img 
                src={svcWaiverNursing} 
                alt="Pediatric Patients" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur text-primary flex items-center justify-center shadow-soft">
                <Baby className="w-6 h-6" />
              </div>
            </div>
            
            <div className="p-8 md:p-10 flex flex-col justify-between flex-1 space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold font-display text-brand-deep">
                  Pediatric Patients <span className="text-brand text-base block font-normal mt-1">(Birth – 21 years)</span>
                </h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Children with complex medical needs including tracheostomy, ventilator dependence, G-tube feeding, seizure disorders, cerebral palsy, muscular dystrophy, and post-surgical recovery. We provide extended hour nursing (8–24 hours/day) so your child can grow, play, and learn at home.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h5 className="font-semibold text-foreground mb-3 font-display text-sm">Key Services:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" /> Vent & Trach Support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" /> G-Tube / NG-Tube
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" /> Seizure Care
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" /> Extended Hours (8-24h)
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Adults & Seniors */}
          <motion.div 
            className="group bg-card rounded-2xl border border-border shadow-soft hover:shadow-glow hover:border-brand/20 transition-all duration-500 relative overflow-hidden flex flex-col"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {/* Top Image header */}
            <div className="h-60 relative overflow-hidden bg-muted">
              <img 
                src={svcPersonalCare} 
                alt="Adults & Seniors" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
              <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/95 backdrop-blur text-primary flex items-center justify-center shadow-soft">
                <Accessibility className="w-6 h-6" />
              </div>
            </div>

            <div className="p-8 md:p-10 flex flex-col justify-between flex-1 space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-bold font-display text-brand-deep">
                  Adults & Seniors <span className="text-brand text-base block font-normal mt-1">(Aging in Place)</span>
                </h4>
                <p className="text-muted-foreground font-body leading-relaxed">
                  Older adults who need help with activities of daily living (ADLs) through Personal Assistance Services (PAS) or Primary Home Care (PHC). This includes bathing, dressing, toileting, meal prep, light cleaning, and medication reminders. We also serve adults with disabilities or chronic conditions.
                </p>
              </div>

              <div className="border-t border-border pt-6">
                <h5 className="font-semibold text-foreground mb-3 font-display text-sm">Key Services:</h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" /> Activities of Daily Living
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" /> Bathing & Grooming
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" /> Meal Prep & Cleaning
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-brand flex-shrink-0" /> Medication Reminders
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Meet Our Care Team Section */}
      <section className="py-20 md:py-28 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Professional Care</span>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
              Not Just Caregivers. Partners in Your Journey.
            </h3>
            <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* RNs & LVNs */}
            <motion.div 
              className="bg-card rounded-xl border border-border shadow-soft p-8 space-y-6 hover:-translate-y-1 transition-transform duration-300"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-display text-brand-deep">RNs & LVNs</h4>
                <p className="text-xs text-brand font-medium uppercase tracking-wider">Average 10+ Years Experience</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Our registered and licensed vocational nurses average 10+ years in pediatrics, NICU, PICU, or med-surg. Fully qualified to handle complex clinical needs.
              </p>
              <div className="border-t border-border pt-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-3">Trained & Verified In:</h5>
                <ul className="space-y-2 text-xs text-muted-foreground font-body">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" /> Tracheostomy & vent management</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" /> G-tube & NG tube feeding</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" /> IV therapy & injection administration</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" /> Wound care (including wound vac)</li>
                </ul>
              </div>
            </motion.div>

            {/* CNAs & Aides */}
            <motion.div 
              className="bg-card rounded-xl border border-border shadow-soft p-8 space-y-6 hover:-translate-y-1 transition-transform duration-300"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-bold font-display text-brand-deep">CNAs & Personal Aides</h4>
                <p className="text-xs text-brand font-medium uppercase tracking-wider">Fully Vetted & Vouched For</p>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Our PAS/PHC aides undergo extensive background checks, receive ongoing training, and are carefully matched to your family’s unique personality.
              </p>
              <div className="border-t border-border pt-4">
                <h5 className="text-xs font-bold uppercase tracking-wider text-foreground/80 mb-3">Assisting Families With:</h5>
                <ul className="space-y-2 text-xs text-muted-foreground font-body">
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" /> Bathing, grooming & dressing</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" /> Toileting & ambulation</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" /> Meal preparation & laundry</li>
                  <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand flex-shrink-0" /> Attentive and warm companionship</li>
                </ul>
              </div>
            </motion.div>

            {/* 24/7 On-Call Supervisor */}
            <motion.div 
              className="bg-brand-deep text-white rounded-xl shadow-soft p-8 space-y-6 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="space-y-6">
                <div className="inline-block py-1 px-2.5 rounded-full text-[10px] font-extrabold uppercase bg-brand tracking-wider">
                  Our Secret Weapon
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-display">24/7 On-Call Nurse Supervisor</h4>
                  <p className="text-xs text-blue-300 font-medium uppercase tracking-wider">Never An Answering Service</p>
                </div>
                <p className="text-sm text-white/80 leading-relaxed font-body">
                  One call, any time of night or weekend, connects you directly to a supervising nurse who already knows your loved one’s history.
                </p>
                <p className="text-sm text-white/80 leading-relaxed font-body">
                  We’ve walked families through trach emergencies, medication questions, and sudden fevers — often avoiding a stressful ER trip.
                </p>
              </div>
              <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-semibold">
                <span>Direct Line Available</span>
                <span className="text-blue-300 font-extrabold">24/7/365</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Why Families Have Trusted Us for 20+ Years */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <motion.div 
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Why Choose Harmony</span>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
              We Don't Just Claim Experience. We Prove It.
            </h3>
            <p className="text-muted-foreground font-body leading-relaxed">
              Choosing a home care agency is one of the most significant decisions a family can make. Here is why Texas families have trusted us for over two decades.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-7 space-y-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {[
              {
                title: "We Answer the Phone at 3 AM",
                desc: "Most agencies close at 5 PM. Our on-call nurse is awake, available, and authorized to make decisions.",
              },
              {
                title: "No “Training Days”",
                desc: "When we send a nurse to your child’s vent or trach, they already know how to use it. Day one, shift one.",
              },
              {
                title: "We Serve the Whole Family",
                desc: "We teach parents how to change a G-tube or suction a trach. We comfort siblings. We call back worried grandparents.",
              },
              {
                title: "Flexible Hours, Urgent Start",
                desc: "Need a nurse tomorrow? We often accommodate. Extended hours (8, 12, 16, or 24-hour shifts) are always available.",
              },
              {
                title: "Local, Not Franchised",
                desc: "We live in Round Rock. We shop at your H-E-B. We’re your neighbors, not a corporate call center.",
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx} 
                className="flex gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-soft transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-brand/10 text-brand flex items-center justify-center mt-1">
                  <Check className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1 font-display">{item.title}</h4>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Timeline: Our History at a Glance */}
      <section className="py-20 md:py-28 bg-brand-deep text-white">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-blue-200 font-semibold uppercase tracking-wider text-sm">Two Decades of Care</span>
            <h3 className="text-3xl md:text-4xl font-bold font-display">
              Our History at a Glance
            </h3>
            <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
          </div>

          {/* Timeline Grid */}
          <div className="relative border-l border-white/20 ml-4 md:ml-0 md:border-l-0 md:grid md:grid-cols-5 md:gap-4 md:before:absolute md:before:top-1/2 md:before:left-0 md:before:right-0 md:before:h-0.5 md:before:bg-white/20 md:before:-translate-y-1/2">
            {[
              { year: "2003", title: "Founded", desc: "Started by a pediatric nurse who saw children stuck in hospitals." },
              { year: "2008", title: "PAS Expansion", desc: "Expanded to include Personal Assistance Services (PAS) for seniors." },
              { year: "2015", title: "Round Rock Office", desc: "Opened our physical location at 1104 S Mays St, Suite 107." },
              { year: "2020", title: "24/7 Support Line", desc: "Launched 24/7 on-call nurse service during the pandemic." },
              { year: "2024+", title: "Serving Texas", desc: "Serving 15+ Central Texas cities with a 98% satisfaction rate." }
            ].map((milestone, idx) => (
              <motion.div 
                key={idx} 
                className="relative pl-8 pb-10 md:pl-0 md:pb-0 text-left md:text-center md:pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Dots */}
                <div className="absolute left-0 top-1.5 w-4 h-4 rounded-full bg-brand border-4 border-brand-deep -translate-x-1/2 md:left-1/2 md:top-0 md:-translate-y-1/2 md:-translate-x-1/2 md:w-6 md:h-6 md:border-4" />
                
                <div className="md:px-4 space-y-2">
                  <span className="text-2xl font-black font-display text-blue-300 block">{milestone.year}</span>
                  <h4 className="font-bold text-lg">{milestone.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed font-body">{milestone.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Compliance Section */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Regulatory Excellence</span>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
            Your Loved One’s Safety Is Non-Negotiable.
          </h3>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            { title: "Licensed & Insured", desc: "Fully compliant with Texas HHSC regulations." },
            { title: "Background-Checked", desc: "Every employee undergoes criminal history and abuse registry checks." },
            { title: "Ongoing Training", desc: "Monthly clinical skills reviews; annual CPR & first aid certification." },
            { title: "Emergency Protocols", desc: "Every care plan includes a customized written emergency backup plan." },
            { title: "HIPAA Compliant", desc: "Your family's privacy is rigorously protected by law and our ethics." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              className="bg-card border border-border rounded-xl p-6 hover:border-brand/30 hover:shadow-soft transition-all duration-300 flex flex-col justify-between"
              variants={fadeInUp}
            >
              <div className="space-y-3">
                <div className="w-8 h-8 rounded-lg bg-brand/10 text-brand flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-foreground font-display text-base leading-snug">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Owner / Leadership Section */}
      <section className="py-20 md:py-28 bg-muted border-t border-border">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Quote visual element (Left side, occupies 4 cols) */}
            <motion.div 
              className="lg:col-span-4 flex flex-col items-center justify-center text-center space-y-6"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative w-48 h-48 rounded-[2rem] overflow-hidden shadow-glow border border-border bg-muted">
                <img 
                  src={heroNurse} 
                  alt="Founder & Owner Nurse" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-brand/10 mix-blend-multiply" />
                <div className="absolute bottom-2 right-2 w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center shadow-soft">
                  <Quote className="w-4 h-4" />
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold font-display text-brand-deep">Led by a Nurse Who Understands</h4>
                <p className="text-xs text-brand font-medium tracking-wider uppercase mt-1">Founder's Vision</p>
              </div>
            </motion.div>

            {/* Note text (Right side, occupies 8 cols) */}
            <motion.div 
              className="lg:col-span-8 bg-card border border-border rounded-2xl p-8 md:p-12 shadow-soft relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-foreground/90 font-medium leading-relaxed font-body mb-6">
                “I started Harmony Residential Care because I was tired of telling families, ‘I’m sorry, there’s no one available.’ As a nurse, I’ve held hands in the ICU and watched parents cry because they couldn’t bring their ventilator-dependent child home. That broke my heart — and it drove me to build something better. Twenty years later, I’m proud to say we’ve helped thousands of Texans come home. And we’re just getting started.”
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm">
                  HN
                </div>
                <div>
                  <h5 className="font-bold text-brand-deep font-display">— Founder/Owner</h5>
                  <p className="text-xs text-muted-foreground font-body">Harmony Residential Care LLC</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Premium Call to Action (CTA) Section */}
      <section className="py-24 bg-brand-gradient text-white relative overflow-hidden isolate">
        {/* Background mesh/effects */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-5xl font-bold font-display">
              Ready to Talk About Your Family’s Needs?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-body leading-relaxed">
              Whether you need a pediatric nurse for a trach/vent child or a kind aide to help mom bathe and eat — we’re here. No obligation. Just a real conversation.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Phone */}
            <a 
              href="tel:8307437043" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-brand-deep font-bold hover:bg-blue-50 transition-colors shadow-glow"
            >
              <Phone className="w-5 h-5" /> Call (830) 743-7043
            </a>

            {/* Email */}
            <a 
              href="mailto:harmonyresicaretx@gmail.com" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand border border-white/30 text-white font-bold hover:bg-brand/90 transition-colors"
            >
              <Mail className="w-5 h-5" /> Email Us
            </a>

            {/* Visit Round Rock Office */}
            <a 
              href="https://maps.google.com/?q=1104+S+Mays+St+Suite+107+Round+Rock+TX" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white/10 border border-white/20 text-white font-bold hover:bg-white/20 transition-colors"
            >
              <MapPin className="w-5 h-5" /> Visit Round Rock Office
            </a>
          </motion.div>

          <p className="text-xs text-blue-200">
            * Office visits are available by appointment. Our physical address is 1104 S Mays St, Suite 107, Round Rock, TX.
          </p>
        </div>
      </section>
    </div>
  );
}

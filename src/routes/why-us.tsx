import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import whyChooseBg from "@/assets/why-choose.jpg";
import heroImg2 from "@/assets/hero2.png";
import svcNursing from "@/assets/svc-nursing.jpg";
import welcomeImg from "@/assets/welcome-care.jpg";
import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Check,
  X,
  Activity,
  Heart,
  Clock,
  Stethoscope,
  Zap,
  Building,
  UserCheck,
  Sparkles,
  MessageSquare,
  Users,
  CreditCard,
  ArrowRight,
  Quote,
  HeartHandshake,
} from "lucide-react";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Texas Families Choose Us | Harmony Residential Care" },
      { name: "description", content: "Explore the Harmony difference: 24/7 on-call nurse lines, experienced ICU/PICU pediatric nurses, urgent same-week starts, and local Texas ownership." },
      { property: "og:title", content: "Why Choose Us | Harmony Residential Care" },
      { property: "og:description", content: "Real pediatric clinical training, direct after-hours nurse lines, and local care matching since 2003." },
    ],
  }),
  component: WhyUsPage,
});

// Animation helper presets
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: "easeOut" },
};

const staggerContainer = {
  initial: {},
  whileInView: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  viewport: { once: true, margin: "-100px" },
};

function WhyUsPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Page Hero Section */}
      <PageHero
        title="Why Choose Us"
        description="Why Texas Families Trust Harmony Residential Care — Especially When It Matters Most."
        breadcrumbs={[{ label: "Why Us", href: "/why-us" }]}
        bgImage={whyChooseBg}
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
            <ShieldCheck className="w-3.5 h-3.5" /> 20+ Years of Dedication
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight font-display text-brand-deep leading-relaxed">
            Choosing home health care is one of the most important decisions your family will ever make.
          </h2>
          <p className="text-base md:text-lg text-muted-foreground font-body leading-relaxed max-w-3xl mx-auto">
            Here’s why thousands of Texas families have made Harmony their choice for over 20 years. We don't just say we are different; we prove it every shift.
          </p>
        </motion.div>
      </section>

      {/* Cinematic Visual Banner Section */}
      <section className="px-4 max-w-7xl mx-auto mt-16 -mb-6">
        <motion.div 
          className="relative h-[250px] md:h-[420px] rounded-[2.5rem] overflow-hidden shadow-glow border border-border bg-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={heroImg2} 
            alt="Harmony residential home care settings" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-deep/50 via-transparent to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white text-left">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-1.5 py-1 px-3 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur border border-white/10 text-white mb-3">
                <Heart className="w-3 h-3 text-red-400 fill-current" /> Trust & Warmth
              </span>
              <h4 className="text-xl md:text-3xl font-bold font-display leading-tight shadow-text">
                Providing Peace of Mind When It Matters Most
              </h4>
            </div>
            <div className="shrink-0 flex gap-4 text-xs font-semibold">
              <div className="glass px-4 py-2.5 rounded-xl border border-white/10">
                <span className="block text-blue-200 text-[10px] uppercase font-bold">Experience</span>
                <span className="text-sm font-bold">20+ Years</span>
              </div>
              <div className="glass px-4 py-2.5 rounded-xl border border-white/10">
                <span className="block text-blue-200 text-[10px] uppercase font-bold">Intake Speed</span>
                <span className="text-sm font-bold">24-48 Hours</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The Harmony Difference Comparison Matrix */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Compare For Yourself</span>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
            The Harmony Difference at a Glance
          </h3>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        {/* Comparison Table */}
        <motion.div 
          className="overflow-x-auto rounded-2xl border border-border shadow-soft bg-card"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <table className="w-full border-collapse text-left min-w-[700px]">
            <thead>
              <tr className="bg-slate-900 text-white font-display text-sm">
                <th className="p-5 font-bold uppercase tracking-wider">Feature / Care Standard</th>
                <th className="p-5 font-bold uppercase tracking-wider bg-brand text-center">Harmony Residential Care</th>
                <th className="p-5 font-bold uppercase tracking-wider text-center">Typical Agencies</th>
              </tr>
            </thead>
            <tbody className="font-body text-sm divide-y divide-border">
              {[
                {
                  feature: "24/7 On-Call Nurse Support",
                  harmony: "Yes – Speak directly to a nurse who knows your case",
                  typical: "Often voicemail or a third-party answering service",
                },
                {
                  feature: "Pediatric Trach/Vent Experience",
                  harmony: "All assigned nurses verified and trained day one",
                  typical: "May require 'training shifts' at your family's expense",
                },
                {
                  feature: "Extended Hours (8–24 hours/day)",
                  harmony: "Fully available, flexible shifts scheduled daily",
                  typical: "Often limited to short 4–6 hour visits",
                },
                {
                  feature: "Same-Day Urgent Starts",
                  harmony: "Accommodated quickly, often within 24 hours",
                  typical: "Usually a 1–2 week wait time for assessment",
                },
                {
                  feature: "Local Ownership & Management",
                  harmony: "Round Rock office, owned and run by neighbors",
                  typical: "Often out-of-state corporate franchise systems",
                },
                {
                  feature: "20+ Years in Central Texas",
                  harmony: "Continuous local service in TX since 2003",
                  typical: "Varies significantly, high turnover rates",
                },
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-muted/40 transition-colors">
                  <td className="p-5 font-semibold text-foreground/90">{row.feature}</td>
                  <td className="p-5 text-center bg-brand/5 font-medium border-x border-border">
                    <div className="flex items-center justify-center gap-2 text-brand-deep">
                      <Check className="w-5 h-5 text-brand flex-shrink-0" />
                      <span>{row.harmony}</span>
                    </div>
                  </td>
                  <td className="p-5 text-center text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <X className="w-4 h-4 text-destructive flex-shrink-0" />
                      <span>{row.typical}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </section>

      {/* 10 Core Pillars of Trust */}
      <section className="py-20 md:py-28 bg-muted border-y border-border">
        <div className="max-w-7xl mx-auto px-4 space-y-20">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Pillars of Trust</span>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
              10 Reasons Families Choose Harmony
            </h3>
            <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* 1. We Answer the Phone at 2 AM */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">01</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">We Answer at 2 AM</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Reach a 24/7 on-call licensed nurse supervisor who knows your loved one's case file. No answering service, no voicemail — a real clinician authorized to guide or dispatch emergency backup.
              </p>
            </motion.div>

            {/* 2. Real Pediatric Experience */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">02</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">Nurses Arrive Ready</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                We hire nurses with 2+ years of pediatric/ICU experience. Certified in trach suctioning, ventilators, G-tubes, and wound vacs before their first shift with your child. No on-the-job learning curves.
              </p>
            </motion.div>

            {/* 3. We Serve the Whole Family */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Heart className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">03</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">We Serve the Whole Family</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                We teach parents how to handle complex care, make sure siblings don't feel left out, and give family caregivers extended, uninterrupted breaks so they can rest, shower, or breathe.
              </p>
            </motion.div>

            {/* 4. Urgent Needs? We Move Fast */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">04</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">Urgent Same-Day Starts</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Falls, hospital discharges, or caregiver emergencies require speed. We offer urgent emergency starts within 24 hours and flexible 8, 12, 16, or 24-hour shifts (including weekends/holidays).
              </p>
            </motion.div>

            {/* 5. 20+ Years of Local Experience */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Building className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">05</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">Founded & Rooted in Texas</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Serving Texas since 2003. We know local hospitals (Dell Children's, St. David's), case managers, and Star Kids / Star Plus Medicaid networks. We make decisions locally, not in out-of-state offices.
              </p>
            </motion.div>

            {/* 6. Dignity for Every Adult */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <UserCheck className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">06</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">Dignity-First Personal Care</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Personal assistance (bathing, dressing, toileting, meals) should never feel rushed or embarrassing. Our aides protect self-respect and treat your parents exactly like their own.
              </p>
            </motion.div>

            {/* 7. Clinical Skills & Compassion */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">07</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">Skills Meet Home Warmth</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                We merge hospital-grade protocols with warm, caring human relationships. Our caregivers monitor clinical parameters while singing to a child or holding an anxious senior's hand.
              </p>
            </motion.div>

            {/* 8. Transparent Communication */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">08</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">Zero-Surprise Updates</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                We provide daily shift notes (paper or digital), weekly nurse supervisor reports, immediate notifications for updates, and monthly satisfaction check-ins so you're never in the dark.
              </p>
            </motion.div>

            {/* 9. We Are Your Backup Plan */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <Users className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">09</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">Always Staffed & Vouched For</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Nurses get sick, but we maintain a robust backup staffing pool so your shift is never abandoned. If regular coverage is out, we prioritize finding active replacements immediately.
              </p>
            </motion.div>

            {/* 10. Affordable & Insurance-Friendly */}
            <motion.div className="bg-card rounded-2xl border border-border p-8 space-y-4 shadow-soft hover:shadow-glow transition-all duration-300 md:col-span-2 lg:col-span-1" variants={fadeInUp}>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-brand/10 text-brand flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="text-2xl font-black text-brand-deep/20 font-display">10</span>
              </div>
              <h4 className="text-lg font-bold text-brand-deep font-display">Insurance & Medicaid Ready</h4>
              <p className="text-sm text-muted-foreground leading-relaxed font-body">
                Quality care must stay affordable. We accept Texas Medicaid (STAR Kids, STAR+PLUS), VA Community Care, private insurances, and offer transparent private pay rates without hidden fees.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hospital-Level Skills vs Home-Like Warmth Component */}
      <section className="py-20 md:py-28 px-4 max-w-5xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Balanced Approach</span>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
            Clinical Excellence Meets Genuine Compassion
          </h3>
          <p className="text-muted-foreground">Some agencies are clinical but cold. Others are warm but incompetent. Harmony gives you both.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Clinical side */}
          <motion.div 
            className="group bg-card border border-border rounded-2xl overflow-hidden shadow-soft hover:border-brand/20 transition-all duration-300 flex flex-col"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {/* Top Image header */}
            <div className="h-48 relative overflow-hidden bg-muted">
              <img 
                src={svcNursing} 
                alt="Hospital-Level Clinical Skills" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <h4 className="text-xl font-bold font-display text-brand-deep flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-brand" /> Hospital-Level Clinical Skills
              </h4>
              <ul className="space-y-4 font-body text-sm text-muted-foreground">
                {[
                  "Ventilator management & safety tracking",
                  "Gastrostomy tube (G-Tube) placement verification",
                  "Wound vac maintenance & dressing changes",
                  "Intravenous (IV) medication administration",
                  "Emergency tracheostomy tube changes"
                ].map((skill, i) => (
                  <li key={i} className="flex gap-3 items-start text-left">
                    <span className="w-5 h-5 rounded-full bg-brand-deep/10 text-brand-deep flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                      {i + 1}
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Compassionate side */}
          <motion.div 
            className="group bg-brand-deep text-white border border-brand-deep rounded-2xl overflow-hidden shadow-glow transition-all duration-300 flex flex-col"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            {/* Top Image header */}
            <div className="h-48 relative overflow-hidden bg-blue-950">
              <img 
                src={welcomeImg} 
                alt="Home-Like Compassionate Care" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-80" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/20 to-transparent" />
            </div>

            <div className="p-8 space-y-6 flex-1 flex flex-col justify-between">
              <h4 className="text-xl font-bold font-display text-white flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-300" /> Home-Like Compassionate Care
              </h4>
              <ul className="space-y-4 font-body text-sm text-white/85">
                {[
                  "Listens to family fears and immediate concerns",
                  "Sings to a scared or uncomfortable child",
                  "Holds an anxious, lonely senior's hand",
                  "Learns and accommodates your unique family routines",
                  "Asks about your day and provides emotional support"
                ].map((skill, i) => (
                  <li key={i} className="flex gap-3 items-start text-left">
                    <span className="w-5 h-5 rounded-full bg-white/20 text-white flex items-center justify-center font-bold text-xs mt-0.5 shrink-0">
                      {i + 1}
                    </span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

        </div>
      </section>

      {/* Testimonial Quote Callout */}
      <section className="py-20 md:py-24 bg-brand-deep text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-10 w-96 h-96 rounded-full bg-white blur-3xl animate-blob" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-white blur-3xl animate-blob" />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-6 relative z-10">
          <Quote className="w-12 h-12 text-blue-300/60 mx-auto" />
          <motion.blockquote
            className="text-xl md:text-2xl font-medium font-body leading-relaxed max-w-3xl mx-auto italic"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            "Harmony Residential Care has been a literal lifesaver for our family. When no one else would take our son's vent case, they said 'yes' and had a nurse here in 48 hours. The on-call nurse has talked me down from panic more times than I can count."
          </motion.blockquote>
          <div className="space-y-1">
            <h5 className="font-bold font-display text-white">— Actual Harmony Family</h5>
            <p className="text-xs text-blue-300/80 uppercase font-semibold tracking-wider">Name available upon request</p>
          </div>
        </div>
      </section>

      {/* Still Have Questions / Contact Segment */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Get Answers Today</span>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
            Still Have Questions? Let's Talk.
          </h3>
          <p className="text-muted-foreground font-body max-w-lg mx-auto">
            Choosing a home care provider is a big decision. We don't take that lightly. No obligation. No pressure. Just honest answers.
          </p>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          
          {/* Phone */}
          <motion.div 
            className="bg-card border border-border rounded-xl p-8 text-center space-y-4 shadow-soft hover:shadow-glow transition-all duration-300"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
              <Phone className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-foreground font-display">Call Us Directly</h4>
            <p className="text-xs text-muted-foreground font-body">Speak directly to a nurse supervisor, not a sales representative.</p>
            <a href="tel:8307437043" className="block text-brand font-extrabold text-lg hover:underline">(830) 743-7043</a>
          </motion.div>

          {/* Email */}
          <motion.div 
            className="bg-card border border-border rounded-xl p-8 text-center space-y-4 shadow-soft hover:shadow-glow transition-all duration-300"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
              <Mail className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-foreground font-display">Send An Email</h4>
            <p className="text-xs text-muted-foreground font-body">We reply with clinical details and support guides within hours.</p>
            <a href="mailto:harmonyresicaretx@gmail.com" className="block text-brand font-extrabold text-sm hover:underline break-all">harmonyresicaretx@gmail.com</a>
          </motion.div>

          {/* Visit */}
          <motion.div 
            className="bg-card border border-border rounded-xl p-8 text-center space-y-4 shadow-soft hover:shadow-glow transition-all duration-300"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="w-12 h-12 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
              <MapPin className="w-5 h-5" />
            </div>
            <h4 className="font-bold text-foreground font-display">Visit Round Rock Office</h4>
            <p className="text-xs text-muted-foreground font-body">See our local training facility and sit down with our care supervisors.</p>
            <span className="block font-bold text-sm text-foreground/80">By Appointment Only</span>
          </motion.div>

        </div>
      </section>

      {/* Quote / care assessment CTA */}
      <section className="py-24 bg-brand-gradient text-white relative overflow-hidden isolate border-t border-white/10">
        <div className="absolute inset-0 -z-10 opacity-10">
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
              Ready to Experience the Harmony Difference?
            </h3>
            <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto font-body leading-relaxed">
              Request your free, no-obligation care assessment today. Our supervisor nurse will sit down with you and construct a custom care plan.
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Phone button */}
            <a 
              href="tel:8307437043" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-white text-brand-deep font-bold hover:bg-blue-50 transition-colors shadow-glow"
            >
              <Phone className="w-5 h-5" /> Call (830) 743-7043
            </a>

            {/* Quote redirect */}
            <a 
              href="tel:8307437043" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand border border-white/30 text-white font-bold hover:bg-brand/90 transition-colors"
            >
              Request a Free Assessment <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

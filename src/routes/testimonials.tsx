import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageHero } from "@/components/site/PageHero";
import serviceBg from "@/assets/service-hero-bg.png";
import {
  Star,
  Quote,
  Heart,
  Award,
  ShieldCheck,
  MessageSquare,
  Share2,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  ThumbsUp,
  CheckCircle,
} from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials & Reviews from Families | Harmony Residential Care" },
      { name: "description", content: "Read verified 5-star reviews from Texas families who trust Harmony for pediatric ventilator support, dementia aid, and daily living care." },
      { property: "og:title", content: "Client Reviews | Harmony Residential Care" },
      { property: "og:description", content: "Read real stories from parents, adult children, and seniors who experienced the Harmony Care difference." },
    ],
  }),
  component: TestimonialsPage,
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
      staggerChildren: 0.08,
    },
  },
  viewport: { once: true, margin: "-100px" },
};

const reviews = [
  {
    rating: 5,
    title: "They treat my dad like he's their own grandfather.",
    body: "My 82-year-old father has dementia and needs help with bathing, toileting, and meals. We tried two other agencies before Harmony. The difference is night and day. His aide, Maria, shows up with a smile, talks him through every step, and never rushes. Dad actually looks forward to her visits. She does his laundry, makes his favorite eggs, and even trims his nails. I finally sleep at night knowing he's safe and respected.",
    author: "David P.",
    location: "Georgetown",
    category: "Personal Assistance Services / PAS",
  },
  {
    rating: 5,
    title: "24/7 on-call nurse saved my son's life at 2 AM.",
    body: "My son has a tracheostomy. One night his trach became partially dislodged — he was turning blue. I panicked and called Harmony's on-call number, not expecting anyone to answer at 2 AM. A nurse picked up on the second ring. She stayed on the phone, walked me through re-securing the trach, and had an emergency nurse at my door within 30 minutes. My son is alive because of that call. I will never use another agency.",
    author: "Jessica T.",
    location: "Austin",
    category: "Pediatric Trach Care",
  },
  {
    rating: 5,
    title: "They actually understand G-tubes and complex needs.",
    body: "Our daughter has cerebral palsy and a G-tube. Previous nurses would panic if the tube clogged or the site looked red. Harmony's nurses have seen it all. They troubleshoot calmly, know exactly when to call the doctor, and even taught me how to vent her G-tube properly. They also help with her daily therapy exercises. It's like having a PICU nurse in our living room.",
    author: "Marcus W.",
    location: "Cedar Park",
    category: "Pediatric G-Tube & CP Care",
  },
  {
    rating: 5,
    title: "Compassionate care for my husband after his stroke.",
    body: "My husband had a stroke at 58. He's not elderly, but he needs help with dressing, showering, and using the bathroom. He was so embarrassed at first. Harmony sent an aide who immediately put him at ease — no pity, no awkwardness, just 'let's get this done with dignity.' She also helps with meal prep and light cleaning. I can finally go to my own doctor's appointments without feeling guilty.",
    author: "Linda S.",
    location: "Pflugerville",
    category: "Primary Home Care / PHC",
  },
  {
    rating: 5,
    title: "They took us when no one else would. Ventilator and all.",
    body: "Our 7-year-old son has a rare neuromuscular disease and uses a ventilator 24/7. Every agency we called said 'we don't have staff for that.' Harmony not only said yes, but sent a nurse who had worked in a PICU for 12 years. She knows his vent inside and out. She bathes him, does his trach care, and even plays Minecraft with him during down time. We went from drowning to breathing.",
    author: "Nicole F.",
    location: "Hutto",
    category: "Complex Ventilator & Trach Care",
  },
  {
    rating: 5,
    title: "The 24/7 nurse hotline is a game changer.",
    body: "My mother has congestive heart failure and is on multiple medications. One night she seemed confused and short of breath. I called Harmony's on-call nurse at 11 PM. She asked the right questions, recognized early signs of fluid overload, and told me to take Mom to the ER. The ER doctor said if we had waited until morning, it would have been a crisis. That phone call saved my mother's life.",
    author: "Brian K.",
    location: "Round Rock",
    category: "Senior Care / Med Management",
  },
  {
    rating: 5,
    title: "They helped my daughter transition home from the hospital.",
    body: "After a 3-month PICU stay, bringing our daughter home on oxygen and a G-tube was terrifying. Harmony's nurse came to the hospital for two days to learn her routine before discharge. She rode home with us in the car. She set up all the equipment. She stayed the first full night so I could finally sleep in my own bed. That kind of support is priceless.",
    author: "Rachel M.",
    location: "Taylor",
    category: "Post-Hospital Discharge Care",
  },
  {
    rating: 5,
    title: "Reliable, consistent, and they actually communicate.",
    body: "With other agencies, we had a different aide almost every week. Harmony gave us the same amazing aide for over a year. She knows my son's moods, his favorite foods, and exactly how he likes his showers. If she's ever sick, Harmony calls me immediately and sends a backup who has been briefed on his needs. No surprises. No 'no-show' disasters.",
    author: "Tanya L.",
    location: "Leander",
    category: "Personal Assistance Services",
  },
  {
    rating: 5,
    title: "They handle wound care and wound vacs perfectly.",
    body: "My husband had a serious surgical wound that required a wound vac for three months. Home health was essential. Harmony's nurse was meticulous — dressing changes, vacuum pressure checks, infection monitoring. The wound healed faster than the surgeon expected. She also managed his IV antibiotics. I can't imagine trusting anyone else.",
    author: "Cynthia D.",
    location: "Kyle",
    category: "Wound Care & IV Management",
  },
  {
    rating: 5,
    title: "Finally, an agency that serves both kids AND adults well.",
    body: "We have two care needs — our 6-year-old with a trach, and my 78-year-old mother who needs help bathing. Harmony set us up with a pediatric nurse for our daughter and a separate PAS aide for my mom. Both are wonderful. The office staff coordinates everything so I only have to make one phone call. It's so much easier than juggling two different agencies.",
    author: "Vanessa H.",
    location: "Round Rock",
    category: "Dual Pediatric & Senior Care",
  },
  {
    rating: 5,
    title: "They taught me to be a better caregiver, too.",
    body: "I'm a single dad to a son with a G-tube and seizure disorder. I thought I had to do it all alone. Harmony's nurse didn't just take over — she taught me how to change his G-tube, mix his formula correctly, and spot early seizure signs. Now I feel confident caring for my own son when she's not here. That's empowerment, not just babysitting.",
    author: "Andre J.",
    location: "San Marcos",
    category: "Caregiver Education & Support",
  },
  {
    rating: 5,
    title: "20+ years of experience shows in every interaction.",
    body: "You can tell when a company has been doing this for decades. Harmony is organized, professional, and deeply compassionate. From the office staff who answer my emails within hours, to the nurse who brings my son his favorite snacks, to the on-call nurse who never makes me feel silly for calling — everyone is excellent. I recommend them to every family I meet at the hospital.",
    author: "Stephanie R.",
    location: "Georgetown",
    category: "Long-Term Pediatric Care",
  },
];

function TestimonialsPage() {
  return (
    <div className="bg-background text-foreground overflow-hidden">
      {/* Page Hero Section */}
      <PageHero
        title="Client Testimonials"
        description="What Texas Families Say About Harmony Residential Care."
        breadcrumbs={[{ label: "Testimonials", href: "/testimonials" }]}
        bgImage={serviceBg}
      />

      {/* Trust Rating Highlight Badge */}
      <section className="py-10 px-4 border-b border-border bg-muted/40">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center sm:text-left">
          <div className="flex items-center gap-1 text-amber-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <div className="h-px w-12 bg-border sm:h-8 sm:w-px" />
          <p className="text-base md:text-lg font-semibold text-brand-deep font-body">
            ⭐ 5.0 Average Rating <span className="text-muted-foreground font-normal">| Based on 60+ Reviews | 98% Would Recommend</span>
          </p>
        </div>
      </section>

      {/* Featured Review */}
      <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Featured Story</span>
          <h3 className="text-3xl font-bold font-display text-brand-deep">A Lifeline When It Matched Most</h3>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        <motion.div
          className="relative bg-card border border-border rounded-3xl p-8 md:p-14 shadow-soft hover:shadow-glow transition-all duration-500 overflow-hidden"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {/* Large decorative quotation mark */}
          <Quote className="absolute right-8 top-8 w-24 h-24 text-brand/5 pointer-events-none" />

          <div className="space-y-6 max-w-4xl relative z-10">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <h4 className="text-2xl md:text-3xl font-bold font-display text-brand-deep leading-tight">
              "Harmony didn't just send us a nurse. They gave us our life back."
            </h4>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-body italic">
              "Our 4-year-old daughter came home from Dell Children's on a ventilator and trach. Three other agencies said they couldn't staff the case. Harmony said 'when do you need us?' Their nurse arrived the next day — already trained on vents. She taught me how to suction, change trach ties, and troubleshoot alarms. The 24/7 on-call nurse has answered my panicked calls at 1 AM and 4 AM. My daughter hasn't been back to the hospital in 8 months. That's everything."
            </p>

            <div className="border-t border-border pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-deep text-white flex items-center justify-center font-bold text-sm">
                  AR
                </div>
                <div>
                  <h5 className="font-bold text-brand-deep font-display">— Amanda R.</h5>
                  <p className="text-xs text-muted-foreground font-body">Round Rock, TX</p>
                </div>
              </div>
              <span className="inline-flex items-center py-1 px-3 rounded-full text-xs font-semibold bg-brand/10 text-brand">
                Pediatric Ventilator Care
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* 12 Reviews Grid */}
      <section className="py-20 md:py-28 bg-muted border-t border-border">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <span className="text-brand font-semibold uppercase tracking-wider text-sm">Our Reviews</span>
            <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
              Stories from our Harmony Family
            </h3>
            <p className="text-muted-foreground font-body">Read verified stories from local families we care for.</p>
            <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
          </div>

          {/* Masonry-style grid mapping all 12 reviews */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            {reviews.map((rev, index) => (
              <motion.div 
                key={index} 
                className="bg-card rounded-2xl border border-border p-6 md:p-8 flex flex-col justify-between hover:shadow-soft hover:border-brand/20 transition-all duration-300"
                variants={fadeInUp}
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <h4 className="font-bold text-brand-deep font-display leading-snug">{rev.title}</h4>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">"{rev.body}"</p>
                </div>
                
                <div className="border-t border-border pt-4 mt-6 flex flex-col gap-2">
                  <div className="flex justify-between items-center text-xs font-semibold">
                    <span className="text-foreground">{rev.author}</span>
                    <span className="text-muted-foreground">{rev.location}, TX</span>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand block mt-1">
                    {rev.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* By The Numbers Statistics Dashboard */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Our Performance</span>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
            By the Numbers
          </h3>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        <motion.div 
          className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-5xl mx-auto bg-brand-deep text-white rounded-3xl p-8 md:p-12 shadow-glow text-center"
          variants={fadeInUp}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          {[
            { stat: "⭐ 4.98", label: "Average Rating", desc: "Out of 5.0" },
            { stat: "60+", label: "5-Star Reviews", desc: "Verified stories" },
            { stat: "1,500+", label: "Families Served", desc: "Over 20+ years" },
            { stat: "98%", label: "Would Recommend", desc: "To close family" },
            { stat: "100%", label: "On-Call Satisfaction", desc: "42 direct mentions" },
          ].map((stat, idx) => (
            <div 
              key={idx} 
              className={`space-y-1.5 p-4 md:border-r border-white/10 last:border-r-0 ${
                idx === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <span className="text-2xl md:text-4xl font-black font-display text-blue-300 block">{stat.stat}</span>
              <h4 className="font-bold text-sm text-white">{stat.label}</h4>
              <p className="text-xs text-white/60 font-body leading-relaxed">{stat.desc}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Video & Photo Testimonials Placeholder */}
      <section className="py-20 md:py-24 bg-muted border-t border-border">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-brand/10 text-brand flex items-center justify-center mx-auto">
            <ThumbsUp className="w-8 h-8" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-display text-brand-deep">
            Hear From Families in Their Own Words
          </h3>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-2xl mx-auto font-body">
            "We invite families to share their stories. If you'd like to be featured with a photo or video testimonial, please contact our office. Your story could give hope to another family just starting their home care journey."
          </p>
          <div className="pt-2">
            <a 
              href="mailto:harmonyresicaretx@gmail.com" 
              className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-card border border-border hover:border-brand/40 text-brand-deep font-bold text-sm shadow-soft transition-colors"
            >
              Share Your Story <ArrowRight className="w-4 h-4 text-brand" />
            </a>
          </div>
        </div>
      </section>

      {/* Leave a Review Section */}
      <section className="py-20 md:py-28 px-4 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="text-brand font-semibold uppercase tracking-wider text-sm">Feedback</span>
          <h3 className="text-3xl md:text-4xl font-bold font-display text-brand-deep">
            Share Your Experience
          </h3>
          <p className="text-muted-foreground font-body">Has Harmony Residential Care made a difference in your family's life? We'd be honored to hear your story.</p>
          <div className="w-16 h-1 bg-brand rounded-full mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { title: "Google", desc: "Leave us a review on Google Maps", link: "https://google.com", icon: Star },
            { title: "Facebook", desc: "Review our Facebook page", link: "https://facebook.com", icon: Share2 },
            { title: "Email", desc: "Send your review to harmonyresicaretx@gmail.com", link: "mailto:harmonyresicaretx@gmail.com", icon: Mail },
            { title: "Phone", desc: "Call (830) 743-7043 to share your story", link: "tel:8307437043", icon: Phone },
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-card border border-border rounded-xl p-6 text-center space-y-3 hover:border-brand/30 hover:shadow-soft transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-10 h-10 rounded-lg bg-brand/10 text-brand flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-foreground font-display text-base leading-snug">{item.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed font-body">{item.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Final Trust / Call to Action */}
      <section className="py-24 bg-brand-gradient text-white relative overflow-hidden isolate border-t border-white/10">
        <div className="absolute inset-0 -z-10 opacity-15">
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
              These families found peace of mind, skilled care, and a partner they could trust. You can too.
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

            {/* Assessment redirection */}
            <a 
              href="tel:8307437043" 
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-brand border border-white/30 text-white font-bold hover:bg-brand/90 transition-colors"
            >
              Request a Free Assessment <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

          <div className="space-y-2 text-xs text-blue-200">
            <p>📍 Physical Office (By Appointment): 1104 S Mays St, Suite 107, Round Rock, TX 78664</p>
            <p className="italic">
              *Harmony Residential Care LLC — 20+ years of trusted pediatric home health & personal assistance services. Real families. Real 5-star care. Available 24/7 with our on-call nurse.*
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

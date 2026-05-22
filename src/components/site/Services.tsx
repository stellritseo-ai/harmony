import { Stethoscope, Activity, MessageSquare, HandHelping, HeartHandshake, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import svcNursing from "@/assets/svc-nursing.jpg";
import svcPhysical from "@/assets/svc-physical.jpg";
import svcSpeech from "@/assets/svc-speech.jpg";
import svcOccupational from "@/assets/svc-occupational.jpg";
import svcSocial from "@/assets/svc-social.jpg";

const services = [
  {
    icon: Stethoscope,
    image: svcNursing,
    title: "Nursing Services",
    desc: "Skilled in-home nursing — wound care, medication management, and post-hospital recovery by licensed RNs.",
  },
  {
    icon: Activity,
    image: svcPhysical,
    title: "Physical Therapy",
    desc: "Personalized therapy plans to restore mobility, reduce pain, and rebuild strength after surgery or injury.",
  },
  {
    icon: MessageSquare,
    image: svcSpeech,
    title: "Speech Therapy",
    desc: "Regain communication and swallowing function after stroke, brain injury, or neurological conditions.",
  },
  {
    icon: HandHelping,
    image: svcOccupational,
    title: "Occupational Therapy",
    desc: "Relearn daily living skills — dressing, cooking, bathing — to maximize independence and safety at home.",
  },
  {
    icon: HeartHandshake,
    image: svcSocial,
    title: "Medical Social Services",
    desc: "Emotional counseling, resource coordination, and family support for navigating complex health journeys.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-white" />
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-4">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold text-primary">
              Our Services
            </div>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
              Comprehensive <span className="text-brand-gradient">In-Home Care</span> Tailored to You
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              A complete spectrum of medically-led services delivered with warmth, dignity, and clinical excellence.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <ServiceCard {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon: Icon, image, title, desc }: { icon: any; image: string; title: string; desc: string }) {
  return (
    <div className="group relative h-full rounded-3xl p-[1.5px] bg-gradient-to-br from-blue-200/70 via-white to-blue-300/60 hover:from-[#0e57ef] hover:to-[#1c17de] transition-all duration-500 shadow-soft hover:shadow-glow">
      <div className="relative h-full rounded-[22px] bg-white overflow-hidden flex flex-col transition-transform duration-500 group-hover:-translate-y-1.5">
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            width={800}
            height={800}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          {/* Floating icon badge */}
          <div className="absolute -bottom-6 left-6 w-14 h-14 rounded-2xl bg-brand-gradient grid place-items-center shadow-glow ring-4 ring-white group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
            <Icon className="w-7 h-7 text-white" />
          </div>
          {/* Top tag */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1 text-[11px] font-semibold text-white tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              Home Care
            </span>
          </div>
        </div>

        {/* Body */}
        <div className="relative p-7 pt-10 flex flex-col flex-1">
          <h3 className="text-xl font-display font-bold text-foreground tracking-tight">{title}</h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{desc}</p>
          <a
            href="#contact"
            className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-2.5 transition-all"
          >
            Learn More
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
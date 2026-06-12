import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
  bgImage?: string;
}

export function PageHero({ title, description, breadcrumbs, bgImage }: PageHeroProps) {
  // Default fallback image if none provided
  const imageUrl = bgImage || "https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80&w=2000";

  // Dynamic badge text based on route, matching the Jhay's style
  const getBadgeText = () => {
    const lastCrumb = breadcrumbs[breadcrumbs.length - 1];
    if (!lastCrumb) return "HARMONY CARE";
    
    const label = lastCrumb.label.toLowerCase();
    if (label === "about" || label === "about us") return "ABOUT HARMONY CARE";
    if (label === "services" || label === "our services") return "HARMONY SERVICES";
    if (label === "why us" || label === "why choose us") return "WHY HARMONY CARE";
    if (label === "testimonials") return "HARMONY TESTIMONIALS";
    if (label === "contact" || label === "contact us") return "CONTACT HARMONY CARE";
    
    return `HARMONY ${lastCrumb.label.toUpperCase()}`;
  };

  return (
    <section className="relative isolate w-full h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden bg-brand-deep">
      {/* Background Image, Saturated Blue Tint & Animations */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Moderate brand-deep tint overlay (lightened to let image details stand out) */}
        <div className="absolute inset-0 bg-brand-deep/35 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-deep/15 via-brand-deep/50 to-brand-deep z-10" />
        
        <motion.img 
          src={imageUrl} 
          alt={title}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered Content Block */}
      <div className="relative z-20 w-full mx-auto max-w-4xl px-4 text-center space-y-6 pt-20">
        
        {/* Centered White Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block"
        >
          <div className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-white shadow-md border border-white/20">
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-brand-deep">
              {getBadgeText()}
            </span>
          </div>
        </motion.div>

        {/* Centered Heading & Subheading */}
        <div className="space-y-4">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white drop-shadow-md leading-tight max-w-3xl mx-auto"
          >
            {title}
          </motion.h1>

          {/* Subtitle description */}
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-sm md:text-base text-white/90 max-w-2xl mx-auto font-body leading-relaxed drop-shadow-sm font-medium"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, Camera, Sparkles, Users, Award, Calendar, ChevronRight, Aperture, Focus, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const galleryImages = [
  { id: 1, title: "Golden Hour", category: "Landscape" },
  { id: 2, title: "Urban Shadows", category: "Street" },
  { id: 3, title: "Portrait Study", category: "Portrait" },
  { id: 4, title: "Abstract Light", category: "Abstract" },
  { id: 5, title: "Nature's Details", category: "Macro" },
  { id: 6, title: "City Nights", category: "Urban" },
];

const features = [
  {
    icon: Aperture,
    title: "Professional Workshops",
    description: "Master your craft with sessions led by industry professionals and award-winning photographers.",
  },
  {
    icon: Focus,
    title: "Photo Expeditions",
    description: "Explore stunning locations and capture extraordinary moments with fellow artists.",
  },
  {
    icon: Camera,
    title: "Studio Access",
    description: "Exclusive access to our state-of-the-art professional photography studio.",
  },
  {
    icon: ImageIcon,
    title: "Gallery Exhibitions",
    description: "Showcase your finest work at prestigious university and city-wide exhibitions.",
  },
];

const stats = [
  { value: "200+", label: "Artists", icon: Users },
  { value: "50+", label: "Events", icon: Calendar },
  { value: "15", label: "Awards", icon: Award },
];

export default function Index() {
  return (
    <div className="relative noise-overlay vignette">
      {/* Cinematic Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-15%] w-[700px] h-[700px] bg-primary/10 rounded-full blur-[150px] animate-pulse-glow" />
        <div className="absolute bottom-[-25%] right-[-15%] w-[800px] h-[800px] bg-accent/8 rounded-full blur-[180px] animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        <div className="absolute top-[40%] right-[20%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
      </div>

      {/* Hero Section */}
      <section className="min-h-[100vh] flex items-center justify-center px-6 relative overflow-hidden pt-16">
        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass text-reveal">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-[11px] text-muted-foreground tracking-[0.3em] uppercase">CBIT Photo Club</span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display hero-title text-5xl md:text-7xl lg:text-8xl font-semibold mt-10 mb-8 leading-[1.05] text-reveal stagger-1">
            <span className="block text-foreground">Through Our</span>
            <span className="block mt-2 text-foreground accent">Lens</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed text-reveal stagger-2">
            An elevated collective of visual storytellers crafting rare, luminous moments into timeless art.
          </p>

          {/* CTA Buttons - No Join Us */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-reveal stagger-3">
            <Link to="/services">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-shine px-10 h-14 text-sm font-semibold tracking-wide group rounded-full">
                Explore Our Work
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="ghost" className="text-muted-foreground hover:text-foreground hover:bg-muted/20 h-14 px-8 text-sm font-medium group rounded-full">
                About CPC
                <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/3 left-[8%] w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />
        <div className="absolute bottom-1/3 right-[8%] w-px h-24 bg-gradient-to-b from-transparent via-accent/20 to-transparent hidden lg:block" />
      </section>

      {/* Stats Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 md:gap-12">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center group"
              >
                <div className="font-display text-4xl md:text-6xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-500">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-xs md:text-sm tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 mb-5">
                <Sparkles className="h-3 w-3 text-primary" />
                <span className="text-xs text-muted-foreground tracking-wide">Featured Work</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Our <span className="text-primary">Gallery</span>
              </h2>
            </div>
            <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm flex items-center gap-2 group">
              View all
              <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`relative rounded-xl overflow-hidden cursor-pointer group glass-hover hover-lift ${
                  index === 0 ? 'md:row-span-2' : ''
                } ${index === 3 ? 'md:col-span-2' : ''}`}
              >
                <div className={`bg-gradient-to-br from-muted to-muted/60 ${
                  index === 0 ? 'aspect-square md:aspect-auto md:h-full' : 
                  index === 3 ? 'aspect-video' : 'aspect-square'
                } transition-all duration-700 group-hover:scale-[1.02]`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Camera className="h-10 w-10 text-muted-foreground/20" />
                  </div>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute inset-0 flex items-end p-5 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div>
                    <p className="text-[10px] text-primary uppercase tracking-widest mb-1">{image.category}</p>
                    <h4 className="font-display font-semibold text-foreground text-sm">{image.title}</h4>
                  </div>
                </div>
                
                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              What We <span className="gradient-text">Offer</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Experience photography at its finest with world-class resources and an exceptional creative community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl glass-hover hover-lift transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Contact instead of Join */}
      <section className="py-32 px-6 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            See Our Vision
          </h2>
          <p className="text-muted-foreground mb-12 max-w-md mx-auto">
            Explore the artistry of CBIT Photo Club through our curated collection of work.
          </p>
          <Link to="/services">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 btn-shine h-14 px-12 text-sm font-semibold tracking-wide rounded-full">
              View Portfolio
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

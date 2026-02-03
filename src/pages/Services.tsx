import { Camera, GraduationCap, Image, Users, Calendar, Palette, Film, Award, Clock } from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Photography Workshops",
    description: "Professional sessions covering composition, lighting, and advanced techniques.",
    features: ["Master Classes", "Hands-on Practice", "Industry Experts"],
  },
  {
    icon: Camera,
    title: "Equipment Access",
    description: "Access our collection of professional cameras, lenses, and lighting equipment.",
    features: ["DSLR & Mirrorless", "Professional Lenses", "Studio Lighting"],
  },
  {
    icon: Image,
    title: "Studio Sessions",
    description: "Book our fully-equipped studio for portraits, products, and creative projects.",
    features: ["Professional Setup", "Backdrops Included", "Lighting Rigs"],
  },
  {
    icon: Users,
    title: "Photo Expeditions",
    description: "Curated expeditions exploring diverse locations for exceptional shots.",
    features: ["Monthly Events", "Scenic Locations", "All Experience Levels"],
  },
  {
    icon: Palette,
    title: "Post-Processing",
    description: "Learn professional editing in Adobe Lightroom and Photoshop.",
    features: ["Lightroom & Photoshop", "Color Grading", "Advanced Retouching"],
  },
  {
    icon: Film,
    title: "Film Photography",
    description: "Explore the art of analog photography with our film program.",
    features: ["Darkroom Access", "Film Development", "Classic Techniques"],
  },
];

const schedule = [
  { day: "Monday", event: "Fundamentals Workshop", time: "5:00 PM", type: "workshop" },
  { day: "Wednesday", event: "Advanced Techniques", time: "6:00 PM", type: "workshop" },
  { day: "Thursday", event: "Editing Masterclass", time: "5:30 PM", type: "editing" },
  { day: "Saturday", event: "Photo Expedition", time: "10:00 AM", type: "expedition" },
];

export default function Services() {
  return (
    <div className="relative noise-overlay vignette">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-accent/6 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 mb-8">
            <Award className="h-3 w-3 text-primary" />
            <span className="text-xs text-muted-foreground tracking-wide">What We Offer</span>
          </div>
          <h1 className="font-display focus-title hero-title text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.1]">
            Our <span className="accent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            World-class resources and expertise to elevate your photography to extraordinary heights.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <div 
                key={service.title} 
                className="p-7 rounded-2xl glass-hover hover-lift transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors duration-300">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-base font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 mb-5">
              <Calendar className="h-3 w-3 text-primary" />
              <span className="text-xs text-muted-foreground tracking-wide">Weekly Schedule</span>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
              Our <span className="text-primary">Sessions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {schedule.map((item) => (
              <div 
                key={item.day} 
                className="flex items-center justify-between p-5 rounded-xl glass-hover hover-lift transition-all duration-500 group"
              >
                <div className="flex items-center gap-5">
                  <div className="w-14 text-center">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">{item.day.slice(0, 3)}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5" />
                    <span className="text-sm">{item.time}</span>
                  </div>
                  <span className="text-foreground font-medium text-sm">{item.event}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  item.type === 'workshop' ? 'bg-primary/10 text-primary' :
                  item.type === 'expedition' ? 'bg-secondary/10 text-secondary' :
                  'bg-muted text-muted-foreground'
                }`}>
                  {item.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Featured <span className="gradient-text">Work</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto text-sm">
              A curated selection from our talented collective.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className="aspect-square rounded-2xl glass-hover hover-lift overflow-hidden group cursor-pointer transition-all duration-500"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <Camera className="h-8 w-8 text-muted-foreground/20 group-hover:text-primary/30 transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

import { Camera, Heart, Users, Zap, Target, Eye } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "Photography is more than a craft - it is our way of interpreting and sharing the world.",
  },
  {
    icon: Users,
    title: "Artistry",
    description: "We believe in pushing creative boundaries and elevating each other as visual artists.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Constantly exploring new techniques, styles, and perspectives in visual storytelling.",
  },
];

const milestones = [
  { year: "2015", title: "Club Founded", description: "Established as CBIT's premier photography collective" },
  { year: "2018", title: "First Exhibition", description: "Showcased 50+ works at annual gallery" },
  { year: "2020", title: "Studio Launch", description: "Opened professional photography studio" },
  { year: "2024", title: "Recognition", description: "Award-winning collective on campus" },
];

const team = [
  { name: "Adithya gella", role: "President", initial: "A" },
  { name: "Vishnu vardhan", role: "Vice President", initial: "vv" },
  { name: "Dedeepya nethi", role: "Gensec", initial: "D" },
  { name: "Naga prasuna", role: "social media head", initial: "P" },
  { name: "Veerender nath", role: "Creative Lead", initial: "V" },
  { name: "Purna Sameera", role: "Events head", initial: "S" },
];

export default function About() {
  return (
    <div className="relative noise-overlay vignette">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-primary/8 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-accent/6 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 mb-8">
            <Camera className="h-3 w-3 text-primary" />
            <span className="text-xs text-muted-foreground tracking-wide">Est. 2015</span>
          </div>
          <h1 className="font-display focus-title hero-title text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.1]">
            About <span className="accent">CPC</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            CBIT Photo Club is a collective of passionate visual artists dedicated to the craft of photography. 
            We create, inspire, and push the boundaries of visual storytelling.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="p-10 rounded-2xl glass-hover hover-lift transition-all duration-500 group">
              <div className="w-11 h-11 rounded-xl bg-primary/5 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To foster an environment where visual artists can explore, experiment, and excel in the art of photography 
                while building a legacy of creative excellence.
              </p>
            </div>
            <div className="p-10 rounded-2xl glass-hover hover-lift transition-all duration-500 group">
              <div className="w-11 h-11 rounded-xl bg-accent/5 flex items-center justify-center mb-8 group-hover:bg-accent/10 transition-colors">
                <Eye className="h-5 w-5 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                To be the premier creative collective that shapes the future of visual storytelling 
                and produces photographers who lead in their craft.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our <span className="text-primary">Journey</span>
            </h2>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/30 via-accent/30 to-transparent" />
            
            <div className="space-y-10">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex items-start gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary z-10" />
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'
                  }`}>
                    <span className="text-primary font-display font-bold text-sm">{milestone.year}</span>
                    <h4 className="font-display font-semibold text-foreground mt-1">{milestone.title}</h4>
                    <p className="text-muted-foreground text-sm mt-1">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Our <span className="gradient-text">Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {values.map((value) => (
              <div key={value.title} className="p-8 rounded-2xl glass-hover hover-lift text-center transition-all duration-500 group">
                <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              Meet the <span className="text-primary">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {team.map((member) => (
              <div key={member.name} className="p-6 rounded-2xl glass-hover hover-lift text-center transition-all duration-500 group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-display font-bold text-primary-foreground mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.initial}
                </div>
                <h4 className="font-display font-semibold text-foreground text-sm">{member.name}</h4>
                <p className="text-xs text-muted-foreground mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

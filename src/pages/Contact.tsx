import { Mail, MapPin, Phone, Clock, Send, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["CBIT Campus", "Hyderabad, Telangana"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["cpc@cbit.ac.in"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 (40) 2345-6789"],
  },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "#" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="relative noise-overlay vignette">
      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] right-[-10%] w-[600px] h-[600px] bg-primary/6 rounded-full blur-[140px] animate-pulse-glow" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-accent/5 rounded-full blur-[160px] animate-pulse-glow" style={{ animationDelay: '3s' }} />
      </div>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/40 mb-8">
            <Mail className="h-3 w-3 text-primary" />
            <span className="text-xs text-muted-foreground tracking-wide">Get in Touch</span>
          </div>
          <h1 className="font-display focus-title hero-title text-4xl md:text-6xl lg:text-7xl font-semibold mb-8 leading-[1.1]">
            Contact <span className="accent">Us</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
            Have a question or want to collaborate? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-8 rounded-2xl glass-hover hover-lift">
                <h2 className="font-display text-xl font-bold text-foreground mb-2">Send a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">Fill out the form and we'll respond as soon as possible.</p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Name</label>
                      <Input
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-12 bg-muted/20 border-border/30 focus:border-primary/40 focus:bg-muted/30 transition-all placeholder:text-muted-foreground/40 rounded-xl"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Email</label>
                      <Input
                        type="email"
                        placeholder="you@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-12 bg-muted/20 border-border/30 focus:border-primary/40 focus:bg-muted/30 transition-all placeholder:text-muted-foreground/40 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Message</label>
                    <Textarea
                      placeholder="Tell us more..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="bg-muted/20 border-border/30 focus:border-primary/40 focus:bg-muted/30 transition-all resize-none placeholder:text-muted-foreground/40 rounded-xl"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 btn-shine font-semibold rounded-xl"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message
                        <Send className="h-4 w-4" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className="p-5 rounded-xl glass-hover hover-lift transition-all duration-500 group">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                      <info.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground text-sm mb-1">{info.title}</h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-xs leading-relaxed">{detail}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="p-5 rounded-xl glass-hover hover-lift">
                <h3 className="font-medium text-foreground text-sm mb-4">Follow Us</h3>
                <div className="flex gap-2">
                  {socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import cpcLogo from "@/assets/cpc-logo.png";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Mail, href: "mailto:cpc@cbit.ac.in", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/20 bg-gradient-to-b from-background/40 via-background/70 to-background/95">
      <div className="w-full px-8 py-3">
        <div className="flex flex-col md:flex-row justify-between gap-3">
          {/* Brand */}
          <div className="max-w-xs">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <img 
                src={cpcLogo} 
                alt="CPC Logo" 
                className="w-9 h-9 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-foreground tracking-tight leading-tight">
                  CBIT Photo Club
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed hidden md:block">
              A collective of visual storytellers capturing the essence of moments through the art of photography.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-12 md:gap-16">
            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Navigate
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                Connect
              </h4>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-muted/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-3 pt-2 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-2">
          <p className="text-xs text-muted-foreground">
            (c) {new Date().getFullYear()} CBIT Photo Club. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Crafted with passion
          </p>
        </div>
      </div>
    </footer>
  );
}

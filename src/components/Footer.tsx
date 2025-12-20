import { Gamepad2, Instagram, Facebook, Send } from 'lucide-react';

const socialLinks = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Send, href: '#', label: 'Telegram' },
];

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Experiences', href: '#experiences' },
  { name: 'Packages', href: '#packages' },
  { name: 'Book Now', href: '#booking' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  return (
    <footer className="relative bg-card border-t border-border">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-6 group">
              <div className="relative">
                <Gamepad2 className="w-8 h-8 text-primary transition-all duration-300 group-hover:text-accent" />
                <div className="absolute inset-0 blur-lg bg-primary/50 group-hover:bg-accent/50 transition-colors duration-300" />
              </div>
              <span className="font-display text-xl font-bold tracking-wider">
                <span className="text-foreground">SOCIAL</span>
                <span className="text-primary"> GAME</span>
                <span className="text-accent"> ROOM</span>
              </span>
            </a>
            <p className="text-muted-foreground max-w-md mb-6">
              Disconnect from the digital world and reconnect with the people around you. 
              Premium VR gaming, classic board games, and thrilling escape rooms – all under one roof.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>
                <a href="tel:+998933842512" className="hover:text-accent transition-colors">
                  +998 93 384 25 12
                </a>
              </li>
              <li>Toshkent City Mall</li>
              <li>Entertainment Floor</li>
              <li className="pt-2 text-sm">Open daily: 10:00 — 23:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Social Game Room. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with 💜 in Tashkent
          </p>
        </div>
      </div>
    </footer>
  );
};

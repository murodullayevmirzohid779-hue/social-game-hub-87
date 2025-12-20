import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Phone,
    title: 'Book or Queue',
    value: '+998 93 384 25 12',
    href: 'tel:+998933842512',
    description: 'Call us for instant booking or to check the queue',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: 'Toshkent City Mall',
    href: 'https://maps.google.com/?q=Toshkent+City+Mall',
    description: 'Find us on the entertainment floor',
  },
  {
    icon: Clock,
    title: 'Opening Hours',
    value: '10:00 — 23:00',
    description: 'Open daily, including weekends & holidays',
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32 overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm uppercase tracking-widest mb-4">
            <MessageCircle className="w-4 h-4" />
            Get in Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Ready to
            <span className="text-accent"> Play?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Visit us or reach out to book your next adventure. We're always here to help.
          </p>
        </motion.div>

        {/* Contact Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-8 text-center group hover:border-accent/50 transition-all duration-300"
              >
                <div className="inline-flex p-4 rounded-xl border border-accent/30 bg-accent/10 text-accent mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{item.title}</h3>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-xl font-semibold text-accent hover:underline inline-flex items-center gap-2 mb-3"
                  >
                    {item.value}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <p className="text-xl font-semibold text-foreground mb-3">{item.value}</p>
                )}
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Map Embed Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="glass-card overflow-hidden rounded-2xl"
        >
          <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="text-center relative z-10">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
              <h3 className="font-display text-2xl font-bold mb-2">Toshkent City Mall</h3>
              <p className="text-muted-foreground mb-6">Entertainment Floor</p>
              <Button variant="neonCyan" asChild>
                <a
                  href="https://maps.google.com/?q=Toshkent+City+Mall"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex items-center gap-2">
                    Open in Google Maps
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

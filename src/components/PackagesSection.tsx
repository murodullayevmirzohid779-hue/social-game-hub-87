import { motion } from 'framer-motion';
import { Sparkles, PartyPopper, Users2, Building, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const packages = [
  {
    icon: PartyPopper,
    title: 'Birthday Bash',
    description: 'Make birthdays unforgettable with our all-inclusive party packages. VR games, cake space, and dedicated hosts.',
    features: ['2-hour session', 'VR + Board Games access', 'Private party area', 'Dedicated host'],
    popular: false,
  },
  {
    icon: Users2,
    title: 'Squad Night',
    description: 'Perfect for friend groups looking for an epic night out. Compete, collaborate, and create memories.',
    features: ['3-hour session', 'All experiences access', 'Snacks & drinks', 'Tournament mode'],
    popular: true,
  },
  {
    icon: Building,
    title: 'Corporate Events',
    description: 'Team building that actually works. Strengthen bonds through gameplay and collaborative challenges.',
    features: ['Custom duration', 'Full venue option', 'Catering available', 'Team building activities'],
    popular: false,
  },
];

export const PackagesSection = () => {
  return (
    <section id="packages" className="relative py-24 lg:py-32 overflow-hidden bg-muted/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px]" />
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
            <Sparkles className="w-4 h-4" />
            Game Night Packages
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Perfect for
            <span className="text-accent"> Every Occasion</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether it's a birthday, team outing, or just a legendary night with friends – we've got you covered.
          </p>
        </motion.div>

        {/* Package Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            return (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative glass-card p-8 lg:p-10 ${pkg.popular ? 'ring-2 ring-primary shadow-[0_0_40px_hsl(var(--primary)/0.2)]' : ''}`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider rounded-full">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className="inline-flex p-4 rounded-xl border border-border bg-muted/50 mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold mb-4">{pkg.title}</h3>
                <p className="text-muted-foreground mb-8">{pkg.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <Check className="w-5 h-5 text-neon-green flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={pkg.popular ? 'neon' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <a href="#booking">
                    <span>Book This Package</span>
                  </a>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Package CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground mb-4">
            Need something custom? We love creating unique experiences.
          </p>
          <Button variant="ghost" className="text-primary hover:text-primary" asChild>
            <a href="#contact">Contact us for custom packages →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

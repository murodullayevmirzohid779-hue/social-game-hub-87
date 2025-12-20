import { motion } from 'framer-motion';
import { Headset, Dice5, KeyRound, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const experiences = [
  {
    icon: Headset,
    title: 'VR Zone',
    subtitle: 'Immersive Virtual Reality',
    description: 'Step into breathtaking virtual worlds with cutting-edge VR technology. From action-packed adventures to serene explorations, experience gaming like never before.',
    features: ['Multiplayer Games', 'Latest VR Hardware', 'Guided Sessions'],
    color: 'primary',
    glowClass: 'group-hover:shadow-[0_0_60px_hsl(var(--primary)/0.4)]',
  },
  {
    icon: Dice5,
    title: 'Board Game Lounge',
    subtitle: 'Classic Tabletop Gaming',
    description: 'Rediscover the joy of face-to-face gaming with our extensive collection of board games. Perfect for friends, family, and making new connections.',
    features: ['50+ Game Library', 'Cozy Atmosphere', 'Game Guides Available'],
    color: 'secondary',
    glowClass: 'group-hover:shadow-[0_0_60px_hsl(var(--secondary)/0.4)]',
  },
  {
    icon: KeyRound,
    title: 'Escape Room',
    subtitle: 'Interactive Puzzle Missions',
    description: 'Test your wit and teamwork in our immersive escape rooms. Solve puzzles, crack codes, and race against time in themed adventures.',
    features: ['Multiple Themes', 'Team Challenges', '60-Minute Missions'],
    color: 'accent',
    glowClass: 'group-hover:shadow-[0_0_60px_hsl(var(--accent)/0.4)]',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut' as const,
    },
  },
};

export const ExperiencesSection = () => {
  return (
    <section id="experiences" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
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
          <span className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4">
            Our Experiences
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Three Worlds.
            <span className="gradient-text"> One Destination.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose your adventure or combine them all for the ultimate social gaming experience.
          </p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {experiences.map((exp) => {
            const IconComponent = exp.icon;
            const colorClasses = {
              primary: 'text-primary border-primary/30 bg-primary/10',
              secondary: 'text-secondary border-secondary/30 bg-secondary/10',
              accent: 'text-accent border-accent/30 bg-accent/10',
            };

            return (
              <motion.div
                key={exp.title}
                variants={cardVariants}
                className={`group relative glass-card p-8 lg:p-10 transition-all duration-500 hover:-translate-y-2 ${exp.glowClass}`}
              >
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl border ${colorClasses[exp.color as keyof typeof colorClasses]} mb-6`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                {/* Content */}
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{exp.subtitle}</span>
                  <h3 className="font-display text-2xl lg:text-3xl font-bold mt-2 mb-4">{exp.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {exp.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${exp.color === 'primary' ? 'bg-primary' : exp.color === 'secondary' ? 'bg-secondary' : 'bg-accent'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={exp.color === 'primary' ? 'neon' : exp.color === 'accent' ? 'neonCyan' : 'outline'}
                  className="w-full group/btn"
                  asChild
                >
                  <a href="#booking">
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </a>
                </Button>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-xl">
                  <div className={`absolute -top-10 -right-10 w-20 h-20 rotate-45 ${exp.color === 'primary' ? 'bg-primary/10' : exp.color === 'secondary' ? 'bg-secondary/10' : 'bg-accent/10'}`} />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

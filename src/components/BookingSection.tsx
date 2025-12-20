import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Gamepad2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const experiences = [
  { id: 'vr', name: 'VR Zone', icon: '🎮' },
  { id: 'board', name: 'Board Games', icon: '🎲' },
  { id: 'escape', name: 'Escape Room', icon: '🔐' },
  { id: 'all', name: 'All Access', icon: '⭐' },
];

const timeSlots = [
  '10:00', '11:00', '12:00', '13:00', '14:00', 
  '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00',
];

export const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '2',
    experience: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.phone || !formData.date || !formData.time || !formData.experience) {
      toast({
        title: 'Please fill in all required fields',
        description: 'Name, phone, date, time, and experience are required.',
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: 'Booking Request Sent! 🎮',
      description: 'We\'ll contact you shortly to confirm your reservation.',
    });

    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '2',
      experience: '',
    });
  };

  return (
    <section id="booking" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 lg:mb-16"
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-4">
              <Calendar className="w-4 h-4" />
              Reserve Your Spot
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Book Your
              <span className="gradient-text"> Adventure</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Secure your gaming session today. Walk-ins welcome, but reservations guarantee your spot.
            </p>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 lg:p-12 neon-border"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Info */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Your Name *</label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number *</label>
                  <Input
                    type="tel"
                    placeholder="+998 90 123 45 67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Email (optional)</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50 border-border focus:border-primary h-12"
                />
              </div>

              {/* Date, Time, Guests */}
              <div className="grid sm:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Date *
                  </label>
                  <Input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Time *
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg bg-muted/50 border border-border focus:border-primary text-foreground"
                  >
                    <option value="">Select time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Guests
                  </label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className="w-full h-12 px-4 rounded-lg bg-muted/50 border border-border focus:border-primary text-foreground"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map((num) => (
                      <option key={num} value={num}>{num} {num === 1 ? 'guest' : 'guests'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience Selection */}
              <div className="space-y-4">
                <label className="text-sm font-medium text-foreground flex items-center gap-2">
                  <Gamepad2 className="w-4 h-4 text-primary" />
                  Choose Experience *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {experiences.map((exp) => (
                    <button
                      key={exp.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, experience: exp.id })}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                        formData.experience === exp.id
                          ? 'border-primary bg-primary/10 shadow-[0_0_20px_hsl(var(--primary)/0.3)]'
                          : 'border-border bg-muted/30 hover:border-primary/50'
                      }`}
                    >
                      <span className="text-2xl block mb-2">{exp.icon}</span>
                      <span className="text-sm font-medium">{exp.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <Button type="submit" variant="neon" size="xl" className="w-full">
                <span className="flex items-center justify-center gap-2">
                  <Send className="w-5 h-5" />
                  Send Booking Request
                </span>
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                We'll confirm your booking via phone within 2 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

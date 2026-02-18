import { Truck, Wrench, AlertCircle, Navigation, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: 'Emergency Towing',
      description: 'Fast and safe towing service for all types of vehicles. Available 24/7 for roadside emergencies.'
    },
    {
      icon: Wrench,
      title: 'Breakdown Recovery',
      description: 'Professional recovery service for vehicles that have broken down. We handle mechanical failures with care.'
    },
    {
      icon: AlertCircle,
      title: 'Accident Recovery',
      description: 'Specialized accident recovery service with trained professionals to handle damaged vehicles safely.'
    },
    {
      icon: Navigation,
      title: 'Flatbed Towing',
      description: 'Secure flatbed towing for luxury cars, low-clearance vehicles, and motorcycles.'
    },
    {
      icon: Shield,
      title: 'Safe Transport',
      description: 'Your vehicle is handled with utmost care. Fully insured service for your peace of mind.'
    },
    {
      icon: Clock,
      title: 'Outstation Assistance',
      description: 'Long-distance towing and recovery service. We help you get home safely from anywhere.'
    }
  ];

  return (
    <section id="services" className="section-container bg-gradient-to-b from-background to-muted/40">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Our Services
          </span>
        </div>
        <h2 className="section-title text-foreground">Professional Towing Solutions</h2>
        <p className="section-subtitle mx-auto mt-6">
          Comprehensive towing and recovery services for all your vehicle needs in Nellore
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover hover:scale-105 rounded-2xl overflow-hidden group"
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mb-6 group-hover:shadow-glow-blue transition-all duration-300">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl font-extrabold text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-10 border-2 border-primary/20">
        <h3 className="text-3xl font-extrabold mb-4 text-foreground">Need Immediate Assistance?</h3>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Our team is ready to help you 24/7. Call us now for fast and reliable towing service.
        </p>
        <a
          href="tel:+917842969695"
          className="inline-flex items-center gap-3 text-primary font-bold text-2xl hover:text-accent transition-colors"
        >
          <Phone className="h-6 w-6" />
          +917842969695
        </a>
      </div>
    </section>
  );
}

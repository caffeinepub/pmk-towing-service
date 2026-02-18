import { Truck, Wrench, AlertCircle, Navigation, Shield, Clock } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
    <section id="services" className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="section-title">Our Towing Services</h2>
        <p className="section-subtitle mx-auto mt-4">
          Comprehensive car towing and recovery solutions for all your roadside needs in Nellore
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-2">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-6">
          Need immediate assistance? Our team is ready to help you 24/7
        </p>
        <a
          href="tel:+917842969695"
          className="inline-flex items-center gap-2 text-lg font-semibold text-primary hover:underline"
        >
          <Phone className="h-5 w-5" />
          Call +917842969695 Now
        </a>
      </div>
    </section>
  );
}

function Phone({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

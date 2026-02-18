import { Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/pmk-hero.dim_1600x900.png"
          alt="Professional towing service in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Clock className="h-4 w-4" />
            24/7 Emergency Service Available
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Fast & Reliable{' '}
            <span className="text-primary">Towing Service</span> in Nellore
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
            Professional car towing and recovery service available 24/7. When you need help on the road, 
            PMK Towing Service is just a call away. Quick response, safe transport, and affordable rates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button asChild size="lg" className="text-lg gap-2 shadow-glow-amber">
              <a href="tel:+917842969695">
                <Phone className="h-5 w-5" />
                Call +917842969695
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-lg"
            >
              <a href="#services">
                View Services
              </a>
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <Clock className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm">24/7 Available</div>
                <div className="text-xs text-muted-foreground">Round the clock service</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <MapPin className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm">Serving Nellore</div>
                <div className="text-xs text-muted-foreground">City-wide coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-card/80 backdrop-blur-sm p-4 rounded-lg border border-border">
              <Phone className="h-8 w-8 text-primary flex-shrink-0" />
              <div>
                <div className="font-semibold text-sm">Quick Response</div>
                <div className="text-xs text-muted-foreground">Fast arrival time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

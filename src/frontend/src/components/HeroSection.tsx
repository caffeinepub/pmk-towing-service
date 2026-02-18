import { Phone, Clock, MapPin, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/pmk-hero-text-contrast.dim_1600x900.png"
          alt="Professional towing service in action"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-glow-blue animate-pulse-glow">
            <Zap className="h-4 w-4" />
            24/7 Emergency Service Available
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[0.95] text-foreground">
            Fast & Reliable{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Towing Service
            </span>{' '}
            in Nellore
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed font-medium">
            Professional car towing and recovery service available 24/7. When you need help on the road, 
            PMK Towing Service is just a call away. Quick response, safe transport, and affordable rates.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button asChild size="lg" className="gap-2 shadow-glow-cyan font-bold px-8 py-6 text-lg h-auto rounded-xl">
              <a href="tel:+917842969695">
                <Phone className="h-5 w-5" />
                Call +917842969695
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="font-bold px-8 py-6 text-lg h-auto rounded-xl border-2 hover:bg-primary/5"
            >
              <a href="#services">
                View Services
              </a>
            </Button>
          </div>

          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-4 bg-card/90 backdrop-blur-md p-5 rounded-2xl border-2 border-border shadow-card-hover hover:shadow-glow-blue transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-base text-foreground">24/7 Available</div>
                <div className="text-sm text-muted-foreground">Round the clock</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card/90 backdrop-blur-md p-5 rounded-2xl border-2 border-border shadow-card-hover hover:shadow-glow-blue transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-base text-foreground">Serving Nellore</div>
                <div className="text-sm text-muted-foreground">City-wide coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-card/90 backdrop-blur-md p-5 rounded-2xl border-2 border-border shadow-card-hover hover:shadow-glow-blue transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="font-bold text-base text-foreground">Quick Response</div>
                <div className="text-sm text-muted-foreground">Fast arrival time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

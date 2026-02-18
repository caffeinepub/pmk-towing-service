import { Phone, Clock, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function ContactSection() {
  return (
    <section id="contact" className="section-container bg-gradient-to-b from-muted/40 to-background">
      <div className="text-center mb-20">
        <div className="inline-block mb-4">
          <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
            Contact Us
          </span>
        </div>
        <h2 className="section-title text-foreground">Get In Touch</h2>
        <p className="section-subtitle mx-auto mt-6">
          Need immediate towing assistance? Contact us now for fast and reliable service
        </p>
      </div>

      <div className="max-w-5xl mx-auto">
        <Card className="border-2 border-border shadow-card-hover rounded-2xl overflow-hidden">
          <CardContent className="p-10 md:p-16">
            {/* Primary Contact - Phone */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 mb-8 shadow-glow-blue">
                <Phone className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-3xl font-extrabold mb-6 text-foreground">Call Us Anytime</h3>
              <a
                href="tel:+917842969695"
                className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 block mb-8"
              >
                +917842969695
              </a>
              <Button asChild size="lg" className="gap-3 font-bold px-10 py-6 text-lg h-auto rounded-xl shadow-glow-cyan">
                <a href="tel:+917842969695">
                  <Phone className="h-5 w-5" />
                  Call Now for Immediate Help
                </a>
              </Button>
            </div>

            <Separator className="my-12" />

            {/* Additional Contact Info */}
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6 shadow-inner-glow">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-3 text-foreground">Service Hours</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  24 Hours a Day<br />
                  7 Days a Week<br />
                  365 Days a Year
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6 shadow-inner-glow">
                  <MapPin className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-3 text-foreground">Service Area</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Nellore City<br />
                  & Surrounding Areas<br />
                  Andhra Pradesh
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 mb-6 shadow-inner-glow">
                  <Phone className="h-8 w-8 text-accent" />
                </div>
                <h4 className="font-bold text-lg mb-3 text-foreground">Emergency Line</h4>
                <p className="text-base text-muted-foreground leading-relaxed">
                  Quick Response Team<br />
                  Always Ready to Help<br />
                  Professional Service
                </p>
              </div>
            </div>

            <Separator className="my-12" />

            {/* Why Choose Us */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl p-8 border-2 border-primary/20">
              <h4 className="font-extrabold text-2xl mb-6 text-center text-foreground">Why Choose PMK Towing Service?</h4>
              <div className="grid sm:grid-cols-2 gap-5 text-base">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-medium text-foreground">Fast response time across Nellore</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-medium text-foreground">Professional and experienced drivers</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-medium text-foreground">Safe handling of all vehicle types</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-medium text-foreground">Affordable and transparent pricing</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-medium text-foreground">24/7 emergency assistance</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="font-medium text-foreground">Fully insured towing service</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

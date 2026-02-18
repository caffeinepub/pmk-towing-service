import { Phone, Clock, MapPin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function ContactSection() {
  return (
    <section id="contact" className="section-container bg-muted/30">
      <div className="text-center mb-16">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle mx-auto mt-4">
          Need immediate towing assistance? Contact us now for fast and reliable service
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border-2">
          <CardContent className="p-8 md:p-12">
            {/* Primary Contact - Phone */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Call Us Anytime</h3>
              <a
                href="tel:+917842969695"
                className="text-4xl md:text-5xl font-bold text-primary hover:underline block mb-6"
              >
                +917842969695
              </a>
              <Button asChild size="lg" className="gap-2">
                <a href="tel:+917842969695">
                  <Phone className="h-5 w-5" />
                  Call Now for Immediate Help
                </a>
              </Button>
            </div>

            <Separator className="my-8" />

            {/* Additional Contact Info */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Clock className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Service Hours</h4>
                <p className="text-sm text-muted-foreground">
                  24 Hours a Day<br />
                  7 Days a Week<br />
                  365 Days a Year
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Service Area</h4>
                <p className="text-sm text-muted-foreground">
                  Nellore City<br />
                  & Surrounding Areas<br />
                  Andhra Pradesh
                </p>
              </div>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold mb-2">Emergency Line</h4>
                <p className="text-sm text-muted-foreground">
                  Quick Response Team<br />
                  Always Ready to Help<br />
                  Professional Service
                </p>
              </div>
            </div>

            <Separator className="my-8" />

            {/* Why Choose Us */}
            <div className="bg-primary/5 rounded-lg p-6">
              <h4 className="font-bold text-lg mb-4 text-center">Why Choose PMK Towing Service?</h4>
              <div className="grid sm:grid-cols-2 gap-4 text-sm">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Fast response time across Nellore</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Professional and experienced drivers</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Safe handling of all vehicle types</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Affordable and transparent pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>24/7 emergency assistance</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Fully insured towing service</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

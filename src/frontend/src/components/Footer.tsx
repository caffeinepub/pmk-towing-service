import { Phone, MapPin, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'pmk-towing';

  return (
    <footer className="bg-secondary text-secondary-foreground border-t-2 border-primary/20">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src="/assets/generated/pmk-logo-text-contrast.dim_512x512.png"
                  alt="PMK Towing Service"
                  className="h-14 w-14 object-contain"
                />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
              </div>
              <div>
                <div className="font-extrabold text-xl text-secondary-foreground">PMK TOWING SERVICE</div>
                <div className="text-sm text-secondary-foreground/70 font-semibold">Professional Towing Solutions</div>
              </div>
            </div>
            <p className="text-base text-secondary-foreground/80 leading-relaxed">
              Your trusted partner for 24/7 car towing and recovery services in Nellore. 
              Fast, reliable, and professional assistance when you need it most.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="font-extrabold text-xl mb-6 text-secondary-foreground">Quick Contact</h3>
            <div className="space-y-4">
              <a
                href="tel:+917842969695"
                className="flex items-center gap-4 text-base hover:text-primary transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-secondary-foreground">Emergency Hotline</div>
                  <div className="text-secondary-foreground/70">+917842969695</div>
                </div>
              </a>
              <div className="flex items-center gap-4 text-base">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-secondary-foreground">Available 24/7</div>
                  <div className="text-secondary-foreground/70">Round the clock service</div>
                </div>
              </div>
              <div className="flex items-center gap-4 text-base">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-secondary-foreground">Service Area</div>
                  <div className="text-secondary-foreground/70">Nellore & Surrounding Areas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-extrabold text-xl mb-6 text-secondary-foreground">Our Services</h3>
            <ul className="space-y-3 text-base text-secondary-foreground/80 font-medium">
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Emergency Towing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Breakdown Recovery
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Accident Recovery
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Flatbed Towing
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Safe Transport
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                Outstation Assistance
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-secondary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-base text-secondary-foreground/70">
          <div className="font-medium">
            © {currentYear} PMK Towing Service. All rights reserved.
          </div>
          <div className="flex items-center gap-2 font-medium">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors font-bold"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

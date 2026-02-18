import { Phone, MapPin, Clock } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' 
    ? encodeURIComponent(window.location.hostname) 
    : 'pmk-towing';

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/generated/pmk-logo.dim_512x512.png"
                alt="PMK Towing Service"
                className="h-12 w-12 object-contain"
              />
              <div>
                <div className="font-bold text-lg">PMK TOWING SERVICE</div>
                <div className="text-xs text-secondary-foreground/70">Professional Towing Solutions</div>
              </div>
            </div>
            <p className="text-sm text-secondary-foreground/80">
              Your trusted partner for 24/7 car towing and recovery services in Nellore. 
              Fast, reliable, and professional assistance when you need it most.
            </p>
          </div>

          {/* Quick Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Contact</h3>
            <div className="space-y-3">
              <a
                href="tel:+917842969695"
                className="flex items-center gap-3 text-sm hover:text-primary transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Emergency Hotline</div>
                  <div className="text-secondary-foreground/70">+917842969695</div>
                </div>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Available 24/7</div>
                  <div className="text-secondary-foreground/70">Round the clock service</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Service Area</div>
                  <div className="text-secondary-foreground/70">Nellore & Surrounding Areas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Our Services</h3>
            <ul className="space-y-2 text-sm text-secondary-foreground/80">
              <li>• Emergency Towing</li>
              <li>• Breakdown Recovery</li>
              <li>• Accident Recovery</li>
              <li>• Flatbed Towing</li>
              <li>• Safe Transport</li>
              <li>• Outstation Assistance</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-secondary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/70">
          <div>
            © {currentYear} PMK Towing Service. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              caffeine.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

import { MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export function ServiceAreaSection() {
  const coverageAreas = [
    'Nellore City Center',
    'Vedayapalem',
    'Dargamitta',
    'Pogathota',
    'Trunk Road Area',
    'Stonehousepet',
    'Brindavan Gardens',
    'Nawabpet',
    'Magunta Layout',
    'Allipuram',
    'Ramji Nagar',
    'Surrounding Areas'
  ];

  return (
    <section id="service-area" className="section-container">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MapPin className="h-4 w-4" />
            Service Coverage
          </div>

          <h2 className="section-title">Serving All of Nellore</h2>
          <p className="section-subtitle mt-4 mb-8">
            PMK Towing Service provides comprehensive coverage throughout Nellore and surrounding areas. 
            No matter where you are in the city, we're ready to assist you with fast and reliable towing services.
          </p>

          <Card className="border-2 border-primary/20 bg-primary/5">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Complete City Coverage</h3>
                  <p className="text-muted-foreground">
                    We operate throughout Nellore city and nearby localities. Our strategic location 
                    ensures quick response times to any part of the city, day or night.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Content - Coverage Areas */}
        <div>
          <Card>
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Areas We Cover</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Don't see your area listed? Give us a call! We may still be able to assist you.
                </p>
                <a
                  href="tel:+917842969695"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                >
                  <Phone className="h-4 w-4" />
                  Contact us at +917842969695
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
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

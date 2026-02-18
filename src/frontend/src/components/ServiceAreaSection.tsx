import { MapPin, CheckCircle2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

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
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <div className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-bold mb-8 shadow-glow-blue">
            <MapPin className="h-4 w-4" />
            Service Coverage
          </div>

          <h2 className="section-title text-foreground">Serving All of Nellore</h2>
          <p className="section-subtitle mt-6 mb-10">
            PMK Towing Service provides comprehensive coverage throughout Nellore and surrounding areas. 
            No matter where you are in the city, we're ready to assist you with fast and reliable towing services.
          </p>

          <Card className="border-2 border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5 shadow-card-hover rounded-2xl overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shrink-0 shadow-glow-blue">
                  <MapPin className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-extrabold text-2xl mb-3 text-foreground">Complete City Coverage</h3>
                  <p className="text-muted-foreground leading-relaxed">
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
          <Card className="border-2 border-border shadow-card-hover rounded-2xl overflow-hidden">
            <CardContent className="p-10">
              <h3 className="text-3xl font-extrabold mb-8 text-foreground">Areas We Cover</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {coverageAreas.map((area, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-base font-semibold text-foreground">{area}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t-2 border-border">
                <p className="text-base text-muted-foreground mb-5 font-medium">
                  Don't see your area listed? Give us a call! We may still be able to assist you.
                </p>
                <a
                  href="tel:+917842969695"
                  className="inline-flex items-center gap-3 text-primary font-bold text-lg hover:text-accent transition-colors"
                >
                  <Phone className="h-5 w-5" />
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

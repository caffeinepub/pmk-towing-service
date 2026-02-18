import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export function CallToActionBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the bar after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-primary text-primary-foreground shadow-lg border-t-2 border-primary-foreground/20">
        <div className="px-4 py-3">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="w-full gap-2 text-base font-bold"
          >
            <a href="tel:+917842969695">
              <Phone className="h-5 w-5" />
              Call +917842969695 - 24/7 Emergency
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

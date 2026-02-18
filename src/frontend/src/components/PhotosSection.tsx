import { Card } from '@/components/ui/card';

export function PhotosSection() {
  const photos = [
    {
      src: '/assets/uploads/Photo_1770974079038.png',
      alt: 'PMK Towing Service logo with 24/7 emergency recovery service and contact number'
    },
    {
      src: '/assets/uploads/IMG_20260204_215933_110.jpg',
      alt: 'PMK Towing recovery vehicle with tow truck transporting a damaged car at service location'
    }
  ];

  return (
    <section id="photos" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Photos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See our professional towing equipment and service in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {photos.map((photo, index) => (
            <Card key={index} className="overflow-hidden group">
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

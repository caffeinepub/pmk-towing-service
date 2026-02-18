import { Card } from '@/components/ui/card';

export function PhotosSection() {
  const photos = [
    {
      src: '/assets/generated/Photo_1770974079038-text-contrast.png',
      alt: 'PMK Towing Service logo with 24/7 emergency recovery service and contact number'
    },
    {
      src: '/assets/uploads/IMG_20260204_215933_110.jpg',
      alt: 'PMK Towing recovery vehicle with tow truck transporting a damaged car at service location'
    },
    {
      src: '/assets/generated/Photo_1770974399544-text-contrast.png',
      alt: 'PMK Towing Service branding with tow truck silhouette, 24/7 emergency recovery service, and contact number 7842969695'
    }
  ];

  return (
    <section id="photos" className="section-padding bg-gradient-to-b from-background to-muted/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-bold text-primary uppercase tracking-wider bg-primary/10 px-4 py-2 rounded-full">
              Gallery
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-foreground mb-6 tracking-tight">
            Photos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            See our professional towing equipment and service in action
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {photos.map((photo, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group border-2 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card-hover rounded-2xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

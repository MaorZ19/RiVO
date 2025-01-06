import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Gallery3D = () => {
  const images = [
    {
      url: "https://i.ibb.co/jJZyxSj/newrivo.webp",
      title: "Lead Generation",
    },
    {
      url: "https://i.ibb.co/jJZyxSj/newrivo.webp",
      title: "Market Analysis",
    },
    {
      url: "https://i.ibb.co/jJZyxSj/newrivo.webp",
      title: "Business Growth",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
              <div className="relative group">
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <h3 className="text-white text-xl font-bold p-4">{image.title}</h3>
                </div>
                <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform perspective-1000 group-hover:rotate-y-12"></div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
    </div>
  );
};

export default Gallery3D;
import heroKids from "@/assets/hero-kids.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 nursery-blob-green rounded-full -translate-x-1/3 -translate-y-1/4 opacity-80" />
      <div className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 nursery-blob-yellow rounded-lg rotate-12 translate-x-1/4 -translate-y-1/4 opacity-80" />
      <div className="absolute top-20 right-20 w-4 h-4 nursery-blob-green rounded-full animate-bounce-gentle" />

      {/* Hero image */}
      <div className="relative mx-auto max-w-5xl pt-4 md:pt-8 px-3 md:px-4">
        <div className="overflow-hidden rounded-b-[2rem] md:rounded-b-[3rem]">
          <img
            src={heroKids}
            alt="Šťastné deti hrajúce sa v jasličkách"
            className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      {/* Title */}
      <div className="text-center px-4 pt-6 md:pt-10 pb-4 md:pb-6">
        <div className="flex justify-center gap-2 mb-3 md:mb-4">
          <span className="w-3 h-3 md:w-4 md:h-4 nursery-blob-green rounded-full inline-block" />
          <span className="text-nursery-red text-xl md:text-2xl">♥</span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-3 md:mb-4 leading-tight px-2">
          Detské jasle v Banskej Bystrici - Lienka
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto px-2">
          Súkromné jasličky pre deti od 1 do 3 rokov. Opatrovatelské centrum v Podlaviciach s láskavým prístupom, malou skupinou a rodinnou atmosférou.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

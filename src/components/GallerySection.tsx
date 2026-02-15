import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];

const GallerySection = () => {
  return (
    <section className="px-3 md:px-4 py-10 md:py-16 max-w-5xl mx-auto">
      <div className="text-center mb-6 md:mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground inline-flex items-center gap-2 md:gap-3">
          Galéria
          <span className="text-nursery-blue text-2xl md:text-3xl">☁️</span>
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg mt-2 px-2">
          Pozrite si naše priestory a atmosféru. 🎨
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className="rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow hover:-translate-y-1 transition-transform"
          >
            <img
              src={img}
              alt={`Galéria jasličky ${i + 1}`}
              className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default GallerySection;

const FooterSection = () => {
  return (
    <footer className="bg-nursery-sand px-4 py-8 md:py-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center gap-2 mb-3 md:mb-4">
          <span className="w-3 h-3 nursery-blob-green rounded-full" />
          <span className="w-3 h-3 nursery-blob-yellow rounded-full" />
          <span className="w-3 h-3 nursery-blob-red rounded-full" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">Lienka - detské centrum</h3>
        <p className="text-muted-foreground text-xs md:text-sm mb-4 md:mb-6">
          Jasličky pre detičky od 1 do 3 rokov
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
          <div className="flex items-center justify-center">
            <span className="mr-2">📍</span>
            <span>Javorová 10, Podlavice, Banská Bystrica</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">📞</span>
            <span>
              <a href="tel:+421915266328" className="hover:text-nursery-green">0915 266 328</a>
              {" / "}
              <a href="tel:+421908440741" className="hover:text-nursery-green">0908 440 741</a>
            </span>
          </div>
          <div className="flex items-center justify-center">
            <span className="mr-2">✉️</span>
            <span>
              <a href="mailto:kperasinova@zoznam.sk" className="hover:text-nursery-green">kperasinova@zoznam.sk</a>
            </span>
          </div>
        </div>
        <p className="text-xs text-muted-foreground mt-6 md:mt-8">
          © 2026 Lienka - detské centrum. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;

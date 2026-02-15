const AboutSection = () => {
  return (
    <section className="px-3 md:px-4 py-10 md:py-16 max-w-5xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-3 md:mb-4 px-2">
          Prečo práve Lienka?
        </h2>
        <p className="text-muted-foreground text-sm md:text-base lg:text-lg px-2">
          Súkromné detské jasle v Banskej Bystrici s dlhoročnými skúsenosťami
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
        <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
            🏡 Rodinná atmosféra
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Naše opatrovateľské centrum funguje od roku 2005. Poskytujeme starostlivosť o deti 
            od 1 do 3 rokov v malom kolektíve, kde každé dieťa dostane potrebnú pozornosť.
          </p>
        </div>

        <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
            👨‍👩‍👧 Odborný personál
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Tím skúsených profesionálov s pedagogickým vzdelaním sa stará o vaše deti 
            s láskou a zodpovednosťou. Bezpečné prostredie je našou prioritou.
          </p>
        </div>

        <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
            📍 Výhodná lokalita
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Detské jasle sa nachádzajú v Podlaviciach na Javorovej ulici. 
            Ľahko dostupné pre rodičov z celej Banskej Bystrice s možnosťou parkovania.
          </p>
        </div>

        <div className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
            ⏰ Flexibilné hodiny
          </h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Ponúkame celodenný i polodenný program prispôsobený potrebám pracujúcich rodičov.
            Možnosť adaptačného pobytu pre nové deti.
          </p>
        </div>
      </div>

      <div className="mt-8 md:mt-12 text-center">
        <p className="text-muted-foreground mb-4 md:mb-6 text-sm md:text-base px-2">
          Hľadáte kvalitné detské jasle v Banskej Bystrici? Kontaktujte nás a dohodneme si návštevu.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-3">
          <a
            href="tel:+421915266328"
            className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-nursery-green text-white font-semibold rounded-lg md:rounded-xl hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            📞 Zavolať: 0915 266 328
          </a>
          <a
            href="mailto:kperasinova@zoznam.sk"
            className="inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-nursery-yellow text-foreground font-semibold rounded-lg md:rounded-xl hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            ✉️ Napísať email
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

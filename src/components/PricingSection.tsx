import pricing1 from "@/assets/pricing-1.jpg";
import pricing2 from "@/assets/pricing-2.jpg";
import pricing3 from "@/assets/pricing-3.jpg";

const pricingCards = [
  {
    title: "Celodenná starostlivosť",
    badge: "Najpredávanejšie",
    badgeColor: "nursery-badge-green",
    description: "Po–Pi; strava podľa dohody",
    image: pricing1,
    price: null,
    features: [],
  },
  {
    title: "Poldenná starostlivosť",
    badge: "380€",
    badgeColor: "nursery-badge-red",
    description: "Dopoludnie alebo popoludnie",
    image: pricing2,
    price: null,
    features: ["S nej hravý obed", "Fortorlivé rytmické dni"],
  },
  {
    title: "Adaptácia",
    badge: "220€",
    badgeColor: "nursery-badge-yellow",
    description: "Prvé dni postupne a citlivo",
    image: pricing3,
    price: null,
    features: ["Šetrné začlenenie"],
    hasButton: true,
  },
];

const PricingSection = () => {
  return (
    <section className="nursery-section-wave px-4 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4">
          <div className="flex items-center gap-3">
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground italic">
              Denný režim
            </h2>
            <span className="w-8 h-8 nursery-blob-green rounded-lg rotate-12 inline-block" />
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="px-3 py-1 rounded-full border border-border bg-card">Má priúpané</span>
            <span className="px-3 py-1 rounded-full border border-border bg-card">2 180/T -</span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricingCards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-border"
            >
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-lg text-foreground leading-tight">{card.title}</h3>
                  {card.badge && (
                    <span className={`${card.badgeColor} text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap`}>
                      {card.badge}
                    </span>
                  )}
                </div>
                <p className="text-muted-foreground text-sm mb-4">{card.description}</p>
                <div className="rounded-xl overflow-hidden mb-4">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-40 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                {card.features.length > 0 && (
                  <ul className="space-y-2 mb-4">
                    {card.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-5 h-5 rounded-full bg-nursery-yellow flex items-center justify-center text-xs">💛</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
                {card.hasButton && (
                  <button className="w-full bg-nursery-yellow text-foreground font-bold py-3 rounded-full hover:opacity-90 transition-opacity">
                    Odoslať správu
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

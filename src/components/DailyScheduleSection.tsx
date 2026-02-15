import { Sun, Utensils, TreePine } from "lucide-react";

const scheduleItems = [
  {
    icon: "☀️",
    title: "Ráno",
    description: "Privítanie, voľná hra.",
  },
  {
    icon: "🎨",
    title: "Dopoludnia",
    description: "Tvorenie / pohyb / senzorické hry.",
  },
  {
    icon: "🍽️",
    title: "Obed",
    description: "Spoločný obed a hygiena.",
  },
  {
    icon: "🌿",
    title: "Popoludní",
    description: "Vonku / čítanie / rozlúčka.",
  },
];

const DailyScheduleSection = () => {
  return (
    <section className="px-3 md:px-4 py-8 md:py-12 max-w-5xl mx-auto">
      {/* Timeline line */}
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-6 left-[10%] right-[10%] h-1 bg-nursery-yellow rounded-full" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {scheduleItems.map((item, index) => (
            <div key={item.title} className="text-center">
              {/* Circle icon */}
              <div className="relative z-10 w-11 h-11 md:w-12 md:h-12 rounded-full bg-card border-3 md:border-4 border-nursery-yellow flex items-center justify-center mx-auto mb-2 md:mb-3 text-xl md:text-2xl">
                {item.icon}
              </div>
              <h4 className="font-bold text-foreground mb-1 text-sm md:text-base">{item.title}</h4>
              <p className="text-muted-foreground text-xs md:text-sm px-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DailyScheduleSection;

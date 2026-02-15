import { Users, ShieldCheck, Sun } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Malá skupina detí",
    description: "Individuálna starostlivosť o deti v súkromnom detskom centre.",
    colorClass: "nursery-card-green",
    iconBg: "bg-nursery-green",
  },
  {
    icon: ShieldCheck,
    title: "Bezpečné prostredie",
    description: "Moderné detské jasle s čistým a útulnom prostredím.",
    colorClass: "nursery-card-red",
    iconBg: "bg-nursery-red",
  },
  {
    icon: Sun,
    title: "Denný program",
    description: "Profesionálna starostlivosť s hrami, tvorením a pobytom vonku.",
    colorClass: "nursery-card-yellow",
    iconBg: "bg-nursery-yellow",
  },
];

const FeaturesSection = () => {
  return (
    <section className="px-3 md:px-4 py-6 md:py-8 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {features.map((feature) => (
          <div
            key={feature.title}
            className={`${feature.colorClass} rounded-xl md:rounded-2xl p-5 md:p-6 text-center transition-transform hover:-translate-y-1 hover:shadow-lg`}
          >
            <div className={`${feature.iconBg} w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4`}>
              <feature.icon className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground" />
            </div>
            <h3 className="font-bold text-base md:text-lg text-foreground mb-2">{feature.title}</h3>
            <p className="text-muted-foreground text-xs md:text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

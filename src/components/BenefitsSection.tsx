import { Clock, TrendingDown, Zap, RefreshCw } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Quick processes",
      description: "Fast application processing with minimal paperwork required"
    },
    {
      icon: TrendingDown,
      title: "Lower Rates",
      description: "Competitive interest rates designed to help you succeed"
    },
    {
      icon: Zap,
      title: "Instant disbursement",
      description: "Receive your approved funds within 24 hours"
    },
    {
      icon: RefreshCw,
      title: "Flexible repayment",
      description: "Customizable repayment plans that fit your schedule"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-glow group-hover:shadow-strong">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
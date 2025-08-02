import { Button } from "@/components/ui/button";
import { FileText, CheckCircle, CreditCard } from "lucide-react";

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      icon: FileText,
      title: "Begin your application",
      description: "Take a few moments to provide your personal information and loan requirements."
    },
    {
      number: "2", 
      icon: CheckCircle,
      title: "Get Your Loan Approved",
      description: "Your loan is processed for approval in no time with our streamlined system."
    },
    {
      number: "3",
      icon: CreditCard,
      title: "Get credited Instantly", 
      description: "Approved amount is deposited into your account within 24hrs of approval."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Application <span className="text-primary">Is Fast & Easy:</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your loan in three simple steps with Rain Money's streamlined process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="text-center group">
                <div className="relative mb-8">
                  {/* Step Number */}
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 shadow-medium group-hover:shadow-glow transition-all duration-300">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-white shadow-soft rounded-lg flex items-center justify-center mx-auto -mt-16 relative z-10 group-hover:shadow-medium transition-all duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Connecting Line - Hidden on last item and mobile */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-10"></div>
                  )}
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>
                <Button variant="outline" className="group-hover:border-primary group-hover:text-primary">
                  Learn More
                </Button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Start Your Application Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
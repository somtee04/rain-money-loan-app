import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-woman.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Hero Image */}
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block">
        <img 
          src={heroImage} 
          alt="Empowered woman with financial solutions" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rain-blue/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="mb-6">
            <span className="text-rain-gold font-semibold text-lg animate-float">
              Your dreams are valid!
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Become a better you
            <span className="block text-rain-gold">with our</span>
            <span className="block">loan solutions</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Rain Money Financial Limited is Nigeria's trusted financial lending company, 
            focused on sustainable lending for poverty alleviation and women empowerment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button variant="gold" size="lg" className="group">
              Get started today!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              Learn More
            </Button>
          </div>
          
          <div className="flex items-center space-x-6 text-white/90">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-rain-gold" />
              <span>Simple. Transparent. Reliable.</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-8 border-2 border-white/50 rounded-full flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
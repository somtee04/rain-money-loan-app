import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg">
                <span className="text-white font-bold text-xl">RM</span>
              </div>
              <div className="flex flex-col">
                <h1 className="text-2xl font-bold text-white">Rain Money</h1>
                <span className="text-xs text-white/70">Financial Solutions</span>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed">
              Rain Money Financial Limited is Nigeria's trusted lending partner, 
              empowering individuals and businesses with accessible financial solutions.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Linkedin className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#loans" className="text-white/80 hover:text-white transition-colors">Our Loans</a></li>
              <li><a href="#calculator" className="text-white/80 hover:text-white transition-colors">Loan Calculator</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Loan Products */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Loan Products</h3>
            <ul className="space-y-3">
              <li><a href="#personal" className="text-white/80 hover:text-white transition-colors">Personal Loans</a></li>
              <li><a href="#business" className="text-white/80 hover:text-white transition-colors">Business Loans</a></li>
              <li><a href="#salary" className="text-white/80 hover:text-white transition-colors">Salary Advance</a></li>
              <li><a href="#emergency" className="text-white/80 hover:text-white transition-colors">Emergency Loans</a></li>
              <li><a href="#women" className="text-white/80 hover:text-white transition-colors">Women Empowerment</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-rain-gold mt-1" />
                <div>
                  <p className="text-white/80">Call Us</p>
                  <p className="text-white font-semibold">+2348185471803</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-rain-gold mt-1" />
                <div>
                  <p className="text-white/80">Email Us</p>
                  <p className="text-white font-semibold">info@rainmoney.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rain-gold mt-1" />
                <div>
                  <p className="text-white/80">Visit Us</p>
                  <p className="text-white font-semibold">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-white/70">
            © 2024 Rain Money Financial Limited. All rights reserved. | Licensed by the Central Bank of Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
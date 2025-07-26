import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Palette, Star } from "lucide-react";
import heroImage from "@/assets/hero-neon.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 fade-in">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="neon-text-purple pulse-neon">CUSTOM</span>
            <br />
            <span className="neon-text-pink">NEON</span>{" "}
            <span className="neon-text-cyan">SIGNS</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Transform your space with stunning custom LED neon lights. 
            From personal quotes to business signs - we bring your vision to life.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
            <div className="flex items-center space-x-2 neon-card px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-neon-yellow" />
              <span>Energy Efficient LED</span>
            </div>
            <div className="flex items-center space-x-2 neon-card px-4 py-2 rounded-full">
              <Palette className="w-5 h-5 text-neon-green" />
              <span>Custom Colors & Fonts</span>
            </div>
            <div className="flex items-center space-x-2 neon-card px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-neon-orange" />
              <span>Premium Quality</span>
            </div>
          </div>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/customize">
              <Button variant="neon" size="xl" className="text-lg px-8">
                <Palette className="w-5 h-5 mr-2" />
                Start Designing Now
              </Button>
            </Link>
            <Link to="/products">
              <Button variant="neon-outline" size="xl" className="text-lg px-8">
                Browse Pre-Made Signs
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-md mx-auto mt-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold neon-text-blue">5000+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold neon-text-green">24hrs</div>
              <div className="text-sm text-muted-foreground">Fast Production</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold neon-text-pink">2 Year</div>
              <div className="text-sm text-muted-foreground">Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-neon-pink rounded-full opacity-60 float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-6 h-6 bg-neon-blue rounded-full opacity-40 float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-neon-green rounded-full opacity-50 float" style={{ animationDelay: '4s' }} />
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-neon-yellow rounded-full opacity-30 float" style={{ animationDelay: '1s' }} />
    </section>
  );
};
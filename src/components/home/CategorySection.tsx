import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, PartyPopper, Quote, User, Home as HomeIcon } from "lucide-react";
import neonLove from "@/assets/neon-love.jpg";
import neonParty from "@/assets/neon-party.jpg";
import neonQuote from "@/assets/neon-quote.jpg";
import neonName from "@/assets/neon-name.jpg";

export const CategorySection = () => {
  const categories = [
    {
      title: "Room Decor",
      description: "Perfect for bedrooms, living rooms, and home aesthetics",
      image: neonLove,
      icon: HomeIcon,
      color: "neon-text-pink",
      count: "500+ designs"
    },
    {
      title: "Events & Parties",
      description: "Wedding signs, birthday parties, and celebrations",
      image: neonParty,
      icon: PartyPopper,
      color: "neon-text-blue",
      count: "300+ designs"
    },
    {
      title: "Inspirational Quotes",
      description: "Motivational and inspirational neon text signs",
      image: neonQuote,
      icon: Quote,
      color: "neon-text-yellow",
      count: "800+ designs"
    },
    {
      title: "Name Signs",
      description: "Personalized name signs for any space",
      image: neonName,
      icon: User,
      color: "neon-text-cyan",
      count: "Custom made"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="neon-text-purple">Popular</span> Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved neon sign categories, each designed to transform your space
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="group hover-glow neon-card border-0 overflow-hidden cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <img 
                    src={category.image} 
                    alt={category.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 right-4">
                    <div className="bg-card/80 backdrop-blur-sm rounded-full p-2">
                      <Icon className={`w-5 h-5 ${category.color}`} />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <span className="text-xs text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                        {category.count}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                    <Link to="/products" state={{ category: category.title.toLowerCase().replace(/\s+/g, '-') }}>
                      <Button variant="neon-ghost" className="w-full group">
                        <span>Explore {category.title}</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/products">
            <Button variant="neon-outline" size="lg">
              View All Categories
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
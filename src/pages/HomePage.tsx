import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { CategorySection } from "@/components/home/CategorySection";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, ArrowRight, Zap, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HomePage = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Good Vibes Only",
      price: 149,
      originalPrice: 199,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 234,
      category: "Inspirational",
      trending: true
    },
    {
      id: 2,
      name: "Love Script",
      price: 129,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 156,
      category: "Romance",
      isLoved: true
    },
    {
      id: 3,
      name: "Party Mode",
      price: 179,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 89,
      category: "Events",
      trending: true
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Energy Efficient",
      description: "LED technology uses 80% less energy than traditional neon"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Custom signs delivered in 3-5 business days"
    },
    {
      icon: Shield,
      title: "2-Year Warranty",
      description: "Full coverage on all materials and craftsmanship"
    }
  ];

  return (
    <Layout cartItems={3}>
      <HeroSection />
      <CategorySection />
      
      {/* Featured Products */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="neon-text-orange">Trending</span> Neon Signs
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our most popular designs loved by thousands of customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover-glow neon-card border-0 overflow-hidden cursor-pointer fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                    <div className="text-4xl font-bold neon-text-purple text-center">
                      {product.name}
                    </div>
                  </div>
                  
                  {product.trending && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                      🔥 Trending
                    </Badge>
                  )}
                  
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors">
                    <Heart className={`w-5 h-5 ${product.isLoved ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                  </button>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        {product.category}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{product.rating}</span>
                        <span className="text-xs text-muted-foreground">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold neon-text-green">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    <Link to={`/product/${product.id}`}>
                      <Button variant="neon-ghost" className="w-full group">
                        <span>View Details</span>
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="neon-outline" size="lg">
                View All Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="neon-text-purple">NeonCraft</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card 
                  key={feature.title} 
                  className="text-center neon-card border-0 hover-glow fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
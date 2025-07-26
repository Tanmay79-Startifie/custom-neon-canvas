import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "SJ",
      location: "New York, NY",
      rating: 5,
      text: "Amazing quality! The custom neon sign for my café looks absolutely stunning. The colors are vibrant and it's been working perfectly for 6 months now.",
      product: "Custom Café Sign"
    },
    {
      id: 2,
      name: "Mike Chen",
      avatar: "MC",
      location: "Los Angeles, CA",
      rating: 5,
      text: "Ordered a 'LOVE' sign for our wedding and it was the highlight of our reception! Everyone kept asking where we got it from.",
      product: "Wedding Neon Sign"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      avatar: "ER",
      location: "Miami, FL",
      rating: 5,
      text: "The customization process was so easy and fun! I could see exactly how my sign would look before ordering. Delivery was super fast too.",
      product: "Home Decor Sign"
    },
    {
      id: 4,
      name: "David Park",
      avatar: "DP",
      location: "Seattle, WA", 
      rating: 5,
      text: "Professional quality and great customer service. My gaming room looks incredible with the custom neon sign. Worth every penny!",
      product: "Gaming Room Sign"
    },
    {
      id: 5,
      name: "Lisa Thompson",
      avatar: "LT",
      location: "Chicago, IL",
      rating: 5,
      text: "Bought multiple signs for my restaurant and they've been a huge hit with customers. Energy efficient and beautiful lighting.",
      product: "Restaurant Signs"
    },
    {
      id: 6,
      name: "James Wilson",
      avatar: "JW",
      location: "Austin, TX",
      rating: 5,
      text: "The 'Good Vibes Only' sign in my office keeps everyone motivated! Great build quality and the glow effect is perfect.",
      product: "Office Motivation Sign"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="neon-text-pink">Customers</span> Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of happy customers who've transformed their spaces with our custom neon signs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="neon-card hover-glow fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-primary opacity-50" />
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Product */}
                  <div className="text-sm text-muted-foreground">
                    Product: <span className="text-primary">{testimonial.product}</span>
                  </div>

                  {/* Customer Info */}
                  <div className="flex items-center space-x-3 pt-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src="" />
                      <AvatarFallback className="bg-primary/20 text-primary font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold neon-text-green">5000+</div>
              <div className="text-muted-foreground">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold neon-text-blue">4.9★</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold neon-text-purple">98%</div>
              <div className="text-muted-foreground">Would Recommend</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl md:text-4xl font-bold neon-text-orange">2 Year</div>
              <div className="text-muted-foreground">Warranty</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
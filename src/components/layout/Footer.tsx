import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Zap,
  MessageCircle
} from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/80 backdrop-blur-lg border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Zap className="w-8 h-8 text-primary neon-text-purple" />
              <span className="text-2xl font-bold neon-text-purple">
                NeonCraft
              </span>
            </div>
            <p className="text-muted-foreground">
              Create stunning custom neon signs that bring your ideas to life with vibrant, 
              professional-quality LED neon lights.
            </p>
            <div className="flex space-x-2">
              <Button variant="neon-ghost" size="icon">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="neon-ghost" size="icon">
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-muted-foreground hover:text-primary hover-neon transition-colors">
                About Us
              </Link>
              <Link to="/customize" className="block text-muted-foreground hover:text-primary hover-neon transition-colors">
                Custom Design
              </Link>
              <Link to="/products" className="block text-muted-foreground hover:text-primary hover-neon transition-colors">
                All Products
              </Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-primary hover-neon transition-colors">
                Gallery
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Policies</h3>
            <div className="space-y-2">
              <Link to="/terms" className="block text-muted-foreground hover:text-primary hover-neon transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="block text-muted-foreground hover:text-primary hover-neon transition-colors">
                Privacy Policy
              </Link>
              <Link to="/returns" className="block text-muted-foreground hover:text-primary hover-neon transition-colors">
                Return Policy
              </Link>
              <Link to="/shipping" className="block text-muted-foreground hover:text-primary hover-neon transition-colors">
                Shipping Info
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@neoncraft.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>New York, NY</span>
              </div>
            </div>
            <Button variant="neon" size="sm" className="w-full">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Support
            </Button>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; {currentYear} NeonCraft. All rights reserved. Powered by custom LED technology.</p>
        </div>
      </div>
    </footer>
  );
};
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Palette, Type, Ruler, DollarSign } from "lucide-react";

interface CustomizeFormProps {
  text: string;
  setText: (text: string) => void;
  color: string;
  setColor: (color: string) => void;
  font: string;
  setFont: (font: string) => void;
  size: string;
  setSize: (size: string) => void;
  onAddToCart: () => void;
}

export const CustomizeForm = ({
  text,
  setText,
  color,
  setColor,
  font,
  setFont,
  size,
  setSize,
  onAddToCart
}: CustomizeFormProps) => {
  const [price, setPrice] = useState(89);

  const colors = [
    { name: 'pink', value: 'pink', class: 'neon-text-pink' },
    { name: 'blue', value: 'blue', class: 'neon-text-blue' },
    { name: 'purple', value: 'purple', class: 'neon-text-purple' },
    { name: 'green', value: 'green', class: 'neon-text-green' },
    { name: 'orange', value: 'orange', class: 'neon-text-orange' },
    { name: 'yellow', value: 'yellow', class: 'neon-text-yellow' },
    { name: 'red', value: 'red', class: 'neon-text-red' },
    { name: 'cyan', value: 'cyan', class: 'neon-text-cyan' }
  ];

  const fonts = [
    { name: 'Modern', value: 'modern', preview: 'Aa' },
    { name: 'Script', value: 'script', preview: 'Aa' },
    { name: 'Bold', value: 'bold', preview: 'Aa' },
    { name: 'Retro', value: 'retro', preview: 'Aa' },
    { name: 'Elegant', value: 'elegant', preview: 'Aa' }
  ];

  const sizes = [
    { name: 'Small (12")', value: 'small', price: 89 },
    { name: 'Medium (18")', value: 'medium', price: 149 },
    { name: 'Large (24")', value: 'large', price: 199 },
    { name: 'Extra Large (30")', value: 'xlarge', price: 299 }
  ];

  useEffect(() => {
    const selectedSize = sizes.find(s => s.value === size);
    const textLength = text.length;
    const lengthMultiplier = textLength > 10 ? 1.2 : textLength > 5 ? 1.1 : 1;
    setPrice(Math.round((selectedSize?.price || 89) * lengthMultiplier));
  }, [size, text]);

  return (
    <div className="space-y-6">
      {/* Text Input */}
      <Card className="neon-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Type className="w-5 h-5 text-primary" />
            <span>Your Text</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="text">Enter your custom text</Label>
            <Input
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Your custom text here..."
              className="neon-input text-lg"
              maxLength={50}
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Max 50 characters</span>
              <span>{text.length}/50</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Color Selection */}
      <Card className="neon-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Palette className="w-5 h-5 text-primary" />
            <span>Neon Color</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 gap-3">
            {colors.map((colorOption) => (
              <button
                key={colorOption.value}
                onClick={() => setColor(colorOption.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 hover-glow ${
                  color === colorOption.value 
                    ? 'border-primary neon-border' 
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                <div className="text-center space-y-2">
                  <div className={`text-2xl font-bold ${colorOption.class}`}>
                    Aa
                  </div>
                  <div className="text-xs capitalize">{colorOption.name}</div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Font Selection */}
      <Card className="neon-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Type className="w-5 h-5 text-primary" />
            <span>Font Style</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {fonts.map((fontOption) => (
              <button
                key={fontOption.value}
                onClick={() => setFont(fontOption.value)}
                className={`p-4 rounded-lg border-2 transition-all duration-300 hover-glow ${
                  font === fontOption.value 
                    ? 'border-primary neon-border' 
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                <div className="text-center space-y-2">
                  <div className="text-xl font-bold text-primary">
                    {fontOption.preview}
                  </div>
                  <div className="text-xs">{fontOption.name}</div>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Size Selection */}
      <Card className="neon-card">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Ruler className="w-5 h-5 text-primary" />
            <span>Size</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {sizes.map((sizeOption) => (
              <button
                key={sizeOption.value}
                onClick={() => setSize(sizeOption.value)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-300 hover-glow ${
                  size === sizeOption.value 
                    ? 'border-primary neon-border bg-primary/10' 
                    : 'border-border hover:border-muted-foreground'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{sizeOption.name}</span>
                  <Badge variant="secondary">${sizeOption.price}</Badge>
                </div>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Price and Add to Cart */}
      <Card className="neon-card">
        <CardContent className="pt-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xl">
              <span className="flex items-center space-x-2">
                <DollarSign className="w-5 h-5 text-primary" />
                <span>Estimated Price:</span>
              </span>
              <span className="font-bold neon-text-green text-2xl">
                ${price}
              </span>
            </div>
            <Button 
              onClick={onAddToCart}
              variant="neon" 
              size="lg" 
              className="w-full text-lg"
              disabled={!text.trim()}
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Free shipping on orders over $100 • 2-year warranty included
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
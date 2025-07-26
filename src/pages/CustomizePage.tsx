import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { NeonPreview } from "@/components/customize/NeonPreview";
import { CustomizeForm } from "@/components/customize/CustomizeForm";
import { toast } from "sonner";
import { Palette, Eye } from "lucide-react";

const CustomizePage = () => {
  const [text, setText] = useState("Your Text Here");
  const [color, setColor] = useState("purple");
  const [font, setFont] = useState("modern");
  const [size, setSize] = useState("medium");

  const handleAddToCart = () => {
    toast.success("Custom neon sign added to cart!", {
      description: `"${text}" in ${color} color, ${size} size`
    });
  };

  return (
    <Layout cartItems={3}>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <span className="neon-text-purple">Design</span> Your{" "}
              <span className="neon-text-pink">Custom</span> Neon
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create a unique neon sign with your own text, colors, and style. 
              See your design come to life with our real-time preview.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Preview Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Eye className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Live Preview</h2>
              </div>
              <NeonPreview 
                text={text}
                color={color}
                font={font}
                size={size}
              />
              <div className="text-center text-sm text-muted-foreground">
                <p>Preview updates in real-time as you customize</p>
              </div>
            </div>

            {/* Customization Form */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Palette className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold">Customize</h2>
              </div>
              <CustomizeForm
                text={text}
                setText={setText}
                color={color}
                setColor={setColor}
                font={font}
                setFont={setFont}
                size={size}
                setSize={setSize}
                onAddToCart={handleAddToCart}
              />
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <div className="bg-muted/20 rounded-2xl p-8 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4 neon-text-blue">
                What's Included
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div>
                  <strong>Premium LED Strip:</strong> Energy-efficient, long-lasting LEDs with consistent brightness
                </div>
                <div>
                  <strong>Professional Mounting:</strong> Easy-to-install backing with all necessary hardware
                </div>
                <div>
                  <strong>Controller & Dimmer:</strong> Adjustable brightness and optional color-changing modes
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CustomizePage;
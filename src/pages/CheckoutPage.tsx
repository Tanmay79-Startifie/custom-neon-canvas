import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { CreditCard, Lock, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CheckoutPage = () => {
  const [paymentMethod, setPaymentMethod] = useState("stripe");
  const [isProcessing, setIsProcessing] = useState(false);

  const cartItems = [
    {
      id: 1,
      name: "Custom Neon - Your Text Here",
      price: 149,
      quantity: 1,
      color: "Purple",
      size: "Medium (18\")"
    },
    {
      id: 2,
      name: "Good Vibes Only",
      price: 149,
      quantity: 2,
      color: "Pink",
      size: "Large (24\")"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handlePlaceOrder = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsProcessing(false);
    toast.success("Order placed successfully!");
    // Redirect to thank you page
  };

  return (
    <Layout cartItems={0}>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="mb-8">
            <Link to="/cart" className="inline-flex items-center text-muted-foreground hover:text-primary hover-neon mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Cart
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">
              <span className="neon-text-purple">Checkout</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="neon-card">
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" className="neon-input" placeholder="John" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" className="neon-input" placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" className="neon-input" placeholder="john@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" className="neon-input" placeholder="+1 (555) 123-4567" />
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Address */}
              <Card className="neon-card">
                <CardHeader>
                  <CardTitle>Shipping Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Street Address</Label>
                    <Input id="address" className="neon-input" placeholder="123 Main Street" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input id="city" className="neon-input" placeholder="New York" />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input id="state" className="neon-input" placeholder="NY" />
                    </div>
                    <div>
                      <Label htmlFor="zip">ZIP Code</Label>
                      <Input id="zip" className="neon-input" placeholder="10001" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card className="neon-card">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button
                      onClick={() => setPaymentMethod("stripe")}
                      className={`p-4 border-2 rounded-lg transition-all hover-glow ${
                        paymentMethod === "stripe" 
                          ? "border-primary neon-border bg-primary/10" 
                          : "border-border"
                      }`}
                    >
                      <div className="text-center space-y-2">
                        <CreditCard className="w-8 h-8 mx-auto text-primary" />
                        <div className="font-semibold">Credit Card</div>
                        <div className="text-sm text-muted-foreground">Visa, Mastercard, Amex</div>
                      </div>
                    </button>
                    
                    <button
                      onClick={() => setPaymentMethod("razorpay")}
                      className={`p-4 border-2 rounded-lg transition-all hover-glow ${
                        paymentMethod === "razorpay" 
                          ? "border-primary neon-border bg-primary/10" 
                          : "border-border"
                      }`}
                    >
                      <div className="text-center space-y-2">
                        <div className="w-8 h-8 mx-auto bg-blue-600 rounded flex items-center justify-center text-white font-bold text-sm">
                          R
                        </div>
                        <div className="font-semibold">Razorpay</div>
                        <div className="text-sm text-muted-foreground">UPI, Net Banking</div>
                      </div>
                    </button>
                  </div>

                  {paymentMethod === "stripe" && (
                    <div className="space-y-4 p-4 bg-muted/20 rounded-lg">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" className="neon-input" placeholder="1234 5678 9012 3456" />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" className="neon-input" placeholder="MM/YY" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" className="neon-input" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="neon-card">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium">{item.name}</h4>
                        <div className="text-sm text-muted-foreground">
                          {item.color} • {item.size} • Qty: {item.quantity}
                        </div>
                      </div>
                      <div className="font-medium">
                        ${item.price * item.quantity}
                      </div>
                    </div>
                  ))}
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span className="text-green-500">FREE</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span className="neon-text-green">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Security Badge */}
              <Card className="neon-card">
                <CardContent className="p-6 text-center">
                  <Lock className="w-8 h-8 mx-auto mb-2 text-green-500" />
                  <div className="text-sm space-y-1">
                    <div className="font-semibold">Secure Checkout</div>
                    <div className="text-muted-foreground">
                      Your payment information is encrypted and secure
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Place Order Button */}
              <Button 
                variant="neon" 
                size="lg" 
                className="w-full text-lg"
                onClick={handlePlaceOrder}
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>Processing...</>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Place Order • ${total.toFixed(2)}
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
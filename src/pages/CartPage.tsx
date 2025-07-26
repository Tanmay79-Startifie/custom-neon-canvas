import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ShoppingCart, Plus, Minus, Trash2, CreditCard, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Custom Neon - Your Text Here",
      price: 149,
      quantity: 1,
      color: "Purple",
      size: "Medium (18\")",
      font: "Modern",
      type: "custom"
    },
    {
      id: 2,
      name: "Good Vibes Only",
      price: 149,
      quantity: 2,
      color: "Pink",
      size: "Large (24\")",
      type: "premade"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      removeItem(id);
      return;
    }
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
    toast.success("Item removed from cart");
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <Layout cartItems={cartItems.length}>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-primary hover-neon mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue Shopping
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold">
              Your <span className="neon-text-purple">Cart</span>
            </h1>
          </div>

          {cartItems.length === 0 ? (
            <Card className="neon-card text-center py-16">
              <CardContent>
                <ShoppingCart className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Add some amazing neon signs to get started!</p>
                <Link to="/products">
                  <Button variant="neon" size="lg">
                    Browse Products
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-4">
                {cartItems.map((item) => (
                  <Card key={item.id} className="neon-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row gap-4">
                        {/* Product Image/Preview */}
                        <div className="w-full md:w-32 h-32 bg-gradient-to-br from-purple-900/20 to-pink-900/20 rounded-lg flex items-center justify-center">
                          <div className="text-lg font-bold neon-text-purple text-center">
                            {item.name.split(' ').slice(0, 2).join(' ')}
                          </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 space-y-2">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold">{item.name}</h3>
                              {item.type === "custom" && (
                                <Badge variant="secondary" className="mt-1">
                                  Custom Design
                                </Badge>
                              )}
                            </div>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeItem(item.id)}
                              className="text-destructive hover:text-destructive"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="text-sm text-muted-foreground space-y-1">
                            <div>Color: {item.color}</div>
                            <div>Size: {item.size}</div>
                            {item.font && <div>Font: {item.font}</div>}
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                <Minus className="w-3 h-3" />
                              </Button>
                              <Input
                                type="number"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                                className="w-16 h-8 text-center"
                                min="1"
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                            <div className="text-lg font-bold neon-text-green">
                              ${item.price * item.quantity}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Order Summary */}
              <div className="space-y-6">
                <Card className="neon-card">
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
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
                    
                    {shipping > 0 && (
                      <div className="bg-muted/20 p-3 rounded-lg text-sm text-center">
                        Add ${(100 - subtotal).toFixed(2)} more for free shipping!
                      </div>
                    )}

                    <Link to="/checkout">
                      <Button variant="neon" size="lg" className="w-full">
                        <CreditCard className="w-5 h-5 mr-2" />
                        Proceed to Checkout
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                {/* Security Info */}
                <Card className="neon-card">
                  <CardContent className="p-4 text-center">
                    <div className="text-sm text-muted-foreground space-y-2">
                      <div>🔒 Secure SSL Encryption</div>
                      <div>📦 2-Year Warranty Included</div>
                      <div>🚚 Fast 3-5 Day Delivery</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
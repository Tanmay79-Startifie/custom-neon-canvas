import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Grid, 
  List, 
  Star, 
  Heart, 
  ShoppingCart,
  ArrowUpDown
} from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular');
  const [filterCategory, setFilterCategory] = useState('all');

  const categories = [
    { name: 'All', value: 'all', count: 45 },
    { name: 'Room Decor', value: 'room-decor', count: 12 },
    { name: 'Events & Parties', value: 'events', count: 8 },
    { name: 'Quotes', value: 'quotes', count: 15 },
    { name: 'Name Signs', value: 'names', count: 10 }
  ];

  const products = [
    {
      id: 1,
      name: "Good Vibes Only",
      price: 149,
      originalPrice: 199,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 234,
      category: "quotes",
      trending: true,
      isLoved: false,
      colors: ['pink', 'blue', 'purple'],
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 2,
      name: "Love Script",
      price: 129,
      image: "/api/placeholder/300/300", 
      rating: 4.8,
      reviews: 156,
      category: "room-decor",
      isLoved: true,
      colors: ['red', 'pink', 'purple'],
      sizes: ['Medium', 'Large']
    },
    {
      id: 3,
      name: "Party Mode",
      price: 179,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 89,
      category: "events",
      trending: true,
      isLoved: false,
      colors: ['blue', 'green', 'yellow'],
      sizes: ['Large', 'XL']
    },
    {
      id: 4,
      name: "Dream Big",
      price: 159,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      reviews: 167,
      category: "quotes",
      isLoved: false,
      colors: ['yellow', 'orange', 'red'],
      sizes: ['Small', 'Medium', 'Large']
    },
    {
      id: 5,
      name: "Custom Name Sign",
      price: 199,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      reviews: 445,
      category: "names",
      isLoved: false,
      colors: ['cyan', 'blue', 'purple', 'pink'],
      sizes: ['Medium', 'Large', 'XL']
    },
    {
      id: 6,
      name: "Be Kind",
      price: 139,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      reviews: 203,
      category: "quotes",
      isLoved: true,
      colors: ['green', 'blue', 'purple'],
      sizes: ['Small', 'Medium']
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filterCategory === 'all' || product.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (productId: number) => {
    const product = products.find(p => p.id === productId);
    toast.success(`Added "${product?.name}" to cart!`);
  };

  const toggleWishlist = (productId: number) => {
    const product = products.find(p => p.id === productId);
    toast.success(product?.isLoved ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <Layout cartItems={3}>
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Our <span className="neon-text-purple">Neon</span> Collection
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover thousands of stunning pre-made neon signs or customize your own
            </p>
          </div>

          {/* Search and Filters */}
          <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  placeholder="Search neon signs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 neon-input"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <ArrowUpDown className="w-4 h-4 mr-2" />
                  Sort
                </Button>
                <div className="flex border border-border rounded-lg">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                    className="rounded-r-none"
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                    className="rounded-l-none"
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filterCategory === category.value ? 'neon' : 'outline'}
                  size="sm"
                  onClick={() => setFilterCategory(category.value)}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {filteredProducts.map((product, index) => (
              <Card 
                key={product.id} 
                className="group hover-glow neon-card border-0 overflow-hidden fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className="aspect-square bg-gradient-to-br from-purple-900/20 to-pink-900/20 flex items-center justify-center">
                    <div className="text-2xl md:text-4xl font-bold neon-text-purple text-center">
                      {product.name}
                    </div>
                  </div>
                  
                  {product.trending && (
                    <Badge className="absolute top-4 left-4 bg-orange-500 text-white">
                      🔥 Trending
                    </Badge>
                  )}
                  
                  <button 
                    onClick={() => toggleWishlist(product.id)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-card/80 backdrop-blur-sm hover:bg-card transition-colors"
                  >
                    <Heart className={`w-5 h-5 ${product.isLoved ? 'fill-red-500 text-red-500' : 'text-muted-foreground'}`} />
                  </button>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs capitalize">
                        {product.category.replace('-', ' ')}
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

                    {/* Colors */}
                    <div className="flex items-center space-x-1">
                      <span className="text-xs text-muted-foreground">Colors:</span>
                      {product.colors.slice(0, 3).map((color) => (
                        <div 
                          key={color}
                          className={`w-4 h-4 rounded-full border border-border neon-text-${color}`}
                          style={{ backgroundColor: `hsl(var(--neon-${color}))` }}
                        />
                      ))}
                      {product.colors.length > 3 && (
                        <span className="text-xs text-muted-foreground">+{product.colors.length - 3}</span>
                      )}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Link to={`/product/${product.id}`} className="flex-1">
                        <Button variant="neon-outline" className="w-full">
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        variant="neon" 
                        size="icon"
                        onClick={() => handleAddToCart(product.id)}
                      >
                        <ShoppingCart className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filters</p>
            </div>
          )}

          {/* Load More */}
          {filteredProducts.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="neon-outline" size="lg">
                Load More Products
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProductsPage;
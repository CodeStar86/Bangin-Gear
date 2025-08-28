import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Separator } from '../components/ui/separator';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Heart, 
  Star, 
  Truck, 
  RotateCcw, 
  Shield,
  Minus,
  Plus,
  ShoppingBag,
  Share2
} from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '../contexts/CartContext';

export function ProductPage() {
  const { slug } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('M'); // Default to Medium
  const [selectedColor, setSelectedColor] = useState('Black'); // Default to Black
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [isBuyingNow, setIsBuyingNow] = useState(false);

  // Mock product data
  const product = {
    id: 1,
    slug: 'cyber-punk-hoodie',
    name: 'Cyber Punk Hoodie',
    brand: 'BANGIN',
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviews: 124,
    description: 'Step into the future with our Cyber Punk Hoodie. This premium streetwear piece combines cutting-edge design with ultimate comfort. Featuring bold graphics and a relaxed fit, it\'s perfect for making a statement on the streets.',
    features: [
      'Premium 100% cotton fleece',
      'Oversized fit for maximum comfort',
      'Reflective neon accents',
      'Kangaroo pocket with hidden zipper',
      'Reinforced hood with drawstrings',
      'Machine washable'
    ],
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1506629905607-d5b4b1c37f85?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=800&fit=crop',
      'https://images.unsplash.com/photo-1593030651671-4c89b8c166e9?w=800&h=800&fit=crop'
    ],
    colors: [
      { name: 'Black', value: '#000000' },
      { name: 'Neon Green', value: '#C6FF00' },
      { name: 'Charcoal', value: '#1E1E1E' }
    ],
    sizes: [
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false },
      { name: 'XXL', inStock: true }
    ],
    isNew: true,
    isOnSale: true,
    inStock: true,
    category: 'hoodies'
  };

  const reviews = [
    {
      id: 1,
      user: 'Alex M.',
      rating: 5,
      date: 'Dec 15, 2024',
      title: 'Perfect fit and quality!',
      comment: 'This hoodie exceeded my expectations. The material is super soft and the design is exactly what I was looking for. Definitely worth the price!'
    },
    {
      id: 2,
      user: 'Jamie L.',
      rating: 4,
      date: 'Dec 10, 2024',
      title: 'Great streetwear piece',
      comment: 'Love the futuristic vibe of this hoodie. The neon accents really pop. Only wish it came in more colors.'
    },
    {
      id: 3,
      user: 'Sam R.',
      rating: 5,
      date: 'Dec 8, 2024',
      title: 'Bangin quality as always',
      comment: 'Another hit from Bangin Gear. The attention to detail is incredible and it fits perfectly. Will definitely be ordering more!'
    }
  ];

  const relatedProducts = [
    {
      id: 2,
      slug: 'neon-future-tee',
      name: 'Neon Future Tee',
      brand: 'GEAR CO.',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      slug: 'urban-bomber-jacket',
      name: 'Urban Bomber Jacket',
      brand: 'BANGIN',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      slug: 'street-runner-sneakers',
      name: 'Street Runner Sneakers',
      brand: 'URBAN',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    }
  ];

  const handleAddToCart = async () => {
    console.log('Add to cart clicked', { selectedSize, selectedColor, quantity });
    
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }
    
    setIsAddingToCart(true);
    
    try {
      // Add the item to cart using the CartContext
      const cartItem = {
        id: `${product.id}-${selectedSize}-${selectedColor}`,
        name: product.name,
        price: product.price,
        image: product.images[0],
        slug: product.slug,
        brand: product.brand,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity
      };
      
      console.log('Adding item to cart:', cartItem);
      addToCart(cartItem);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('Failed to add item to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  const handleAddToWishlist = () => {
    setIsWishlisted(!isWishlisted);
    toast.success(isWishlisted ? 'Removed from wishlist' : 'Added to wishlist');
  };

  const handleBuyNow = async () => {
    console.log('Buy now clicked', { selectedSize, selectedColor, quantity });
    
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }
    if (!selectedColor) {
      toast.error('Please select a color');
      return;
    }
    
    setIsBuyingNow(true);
    
    try {
      // Add the item to cart first
      const cartItem = {
        id: `${product.id}-${selectedSize}-${selectedColor}`,
        name: product.name,
        price: product.price,
        image: product.images[0],
        slug: product.slug,
        brand: product.brand,
        size: selectedSize,
        color: selectedColor,
        quantity: quantity
      };
      
      console.log('Adding item to cart for buy now:', cartItem);
      addToCart(cartItem);
      
      // Small delay to ensure cart is updated before navigation
      setTimeout(() => {
        console.log('Navigating to checkout');
        navigate('/checkout');
        setIsBuyingNow(false);
      }, 500);
    } catch (error) {
      console.error('Error in buy now:', error);
      toast.error('Something went wrong. Please try again.');
      setIsBuyingNow(false);
    }
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Product link copied to clipboard');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold mb-2">Product not found</h2>
          <p className="text-muted-foreground mb-4">The product you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/shop">Back to Shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground">Home</Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-foreground">Shop</Link>
          <span>/</span>
          <Link to={`/shop/${product.category}`} className="hover:text-foreground">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden">
              <ImageWithFallback
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-primary' : 'border-transparent'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm text-muted-foreground">{product.brand}</span>
                {product.isNew && (
                  <Badge style={{ backgroundColor: '#C6FF00', color: '#000000' }}>
                    New
                  </Badge>
                )}
                {product.isOnSale && (
                  <Badge style={{ backgroundColor: '#FF1744', color: '#FFFFFF' }}>
                    Sale
                  </Badge>
                )}
              </div>
              <h1 className="font-heading text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) 
                            ? 'fill-current text-yellow-400' 
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <span className="font-heading text-3xl font-bold">
                  £{product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    £{product.originalPrice}
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="destructive">
                    Save £{(product.originalPrice - product.price).toFixed(2)}
                  </Badge>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-heading font-semibold mb-3">
                Color: <span className="font-normal text-muted-foreground">{selectedColor}</span>
              </h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-3 transition-all duration-200 hover:scale-110 ${
                      selectedColor === color.name 
                        ? 'border-primary shadow-lg ring-2 ring-primary/20' 
                        : 'border-muted hover:border-primary/50'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-heading font-semibold mb-3">
                Size: <span className="font-normal text-muted-foreground">{selectedSize}</span>
              </h3>
              <div className="flex gap-3">
                {product.sizes.map((size) => (
                  <Button
                    key={size.name}
                    variant={selectedSize === size.name ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedSize(size.name)}
                    disabled={!size.inStock}
                    className={`w-14 h-12 font-heading font-semibold transition-all duration-200 ${
                      selectedSize === size.name 
                        ? 'bg-primary text-primary-foreground shadow-md' 
                        : 'hover:border-primary hover:text-primary'
                    } ${!size.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {size.name}
                  </Button>
                ))}
              </div>
              <Link to="/size-guide" className="text-sm text-primary hover:text-primary/80 underline mt-3 inline-block font-medium">
                📏 Size Guide
              </Link>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-heading font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="h-10 w-10"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                  className="h-10 w-10"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold" 
                  onClick={handleAddToCart}
                  disabled={!product.inStock || isAddingToCart}
                >
                  <ShoppingBag className="w-5 h-5 mr-2" />
                  {isAddingToCart ? 'Adding...' : (product.inStock ? 'Add to Cart' : 'Out of Stock')}
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleAddToWishlist}
                  className={`hover:bg-muted/50 ${isWishlisted ? 'text-destructive border-destructive' : ''}`}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </Button>
                <Button variant="outline" size="lg" onClick={handleShare} className="hover:bg-muted/50">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full font-heading font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={handleBuyNow}
                disabled={!product.inStock || isBuyingNow}
              >
                {isBuyingNow ? 'Processing...' : (product.inStock ? 'Buy Now' : 'Out of Stock')}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-border">
              <div className="text-center">
                <Truck className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium mb-1">Free Shipping</div>
                <div className="text-xs text-muted-foreground">On orders over £75</div>
              </div>
              <div className="text-center">
                <RotateCcw className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium mb-1">Easy Returns</div>
                <div className="text-xs text-muted-foreground">30-day policy</div>
              </div>
              <div className="text-center">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <div className="text-sm font-medium mb-1">Secure Payment</div>
                <div className="text-xs text-muted-foreground">Protected checkout</div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Product Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{product.description}</p>
                <div>
                  <h4 className="font-heading font-semibold mb-2">Features:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {product.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reviews" className="mt-6">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews</CardTitle>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) 
                                ? 'fill-current text-yellow-400' 
                                : 'text-muted-foreground'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="font-semibold">{product.rating}</span>
                      <span className="text-muted-foreground">({product.reviews} reviews)</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id}>
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium">{review.user}</span>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-3 h-3 ${
                                      i < review.rating 
                                        ? 'fill-current text-yellow-400' 
                                        : 'text-muted-foreground'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <h4 className="font-medium mb-2">{review.title}</h4>
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-muted-foreground">{review.comment}</p>
                        {review.id !== reviews[reviews.length - 1].id && (
                          <Separator className="mt-6" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="shipping" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>Shipping & Returns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Shipping Information</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Free standard shipping on orders over £75</li>
                    <li>• Express shipping available for £9.99</li>
                    <li>• International shipping available</li>
                    <li>• Orders processed within 1-2 business days</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Return Policy</h4>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• 30-day return window</li>
                    <li>• Items must be unworn with tags attached</li>
                    <li>• Free returns for defective items</li>
                    <li>• Return shipping fee applies for exchanges</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="font-heading text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Card key={relatedProduct.id} className="group cursor-pointer hover:shadow-lg transition-shadow" asChild>
                <Link to={`/product/${relatedProduct.slug}`}>
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-muted-foreground mb-1">{relatedProduct.brand}</div>
                      <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <div className="font-heading font-bold">
                        £{relatedProduct.price}
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
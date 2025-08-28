import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ArrowRight, Star, Zap, Truck, Shield, RotateCcw } from 'lucide-react';

export function Homepage() {
  const featuredProducts = [
    {
      id: 1,
      slug: 'cyber-punk-hoodie',
      name: 'Cyber Punk Hoodie',
      brand: 'BANGIN',
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      isNew: true,
      isOnSale: true
    },
    {
      id: 2,
      slug: 'neon-future-tee',
      name: 'Neon Future Tee',
      brand: 'GEAR CO.',
      price: 49.99,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      isNew: true
    },
    {
      id: 3,
      slug: 'street-runner-sneakers',
      name: 'Street Runner Sneakers',
      brand: 'URBAN',
      price: 199.99,
      rating: 4.9,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      slug: 'tech-backpack',
      name: 'Tech Backpack',
      brand: 'FUTURE',
      price: 89.99,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
    }
  ];

  const categories = [
    {
      name: 'Hoodies',
      slug: 'hoodies',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=600&h=400&fit=crop',
      count: '42 items'
    },
    {
      name: 'T-Shirts',
      slug: 'tees',
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop',
      count: '38 items'
    },
    {
      name: 'Sneakers',
      slug: 'sneakers',
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&h=400&fit=crop',
      count: '26 items'
    },
    {
      name: 'Accessories',
      slug: 'accessories',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop',
      count: '18 items'
    }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Free Shipping',
      description: 'On orders over £75'
    },
    {
      icon: RotateCcw,
      title: 'Easy Returns',
      description: '30-day return policy'
    },
    {
      icon: Shield,
      title: 'Secure Payment',
      description: 'Protected transactions'
    },
    {
      icon: Star,
      title: 'Quality Guarantee',
      description: 'Premium materials only'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-accent to-destructive opacity-90" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            FUTURE STREETWEAR
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Drop into the next level of urban fashion. Cutting-edge designs that define tomorrow's street culture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/shop">
                Shop Collection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 border-2 border-white text-white bg-transparent hover:bg-white hover:text-black font-medium" 
              asChild
            >
              <Link to="/shop?filter=new">
                New Arrivals
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">Trending Now</h2>
              <p className="text-muted-foreground">The hottest drops everyone's talking about</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/shop">
                View All
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="group cursor-pointer hover:shadow-lg transition-shadow" asChild>
                <Link to={`/product/${product.slug}`}>
                  <CardContent className="p-0">
                    <div className="aspect-square relative overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {product.isNew && (
                        <Badge 
                          className="absolute top-3 left-3"
                          style={{ backgroundColor: '#C6FF00', color: '#000000' }}
                        >
                          New
                        </Badge>
                      )}
                      {product.isOnSale && (
                        <Badge 
                          className="absolute top-3 right-3"
                          style={{ backgroundColor: '#FF1744', color: '#FFFFFF' }}
                        >
                          Sale
                        </Badge>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="text-xs text-muted-foreground mb-1">{product.brand}</div>
                      <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current text-yellow-400" />
                          <span className="text-xs text-muted-foreground">
                            {product.rating} ({product.reviews})
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-heading font-bold">
                          £{product.price}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">
                            £{product.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our curated collections of street-ready gear designed for the urban lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Card key={category.slug} className="group cursor-pointer overflow-hidden hover:shadow-lg transition-shadow" asChild>
                <Link to={`/shop/${category.slug}`}>
                  <CardContent className="p-0">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                        <h3 className="font-heading text-xl font-bold mb-2">{category.name}</h3>
                        <p className="text-sm text-white/80">{category.count}</p>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-primary-foreground">
            <Zap className="w-12 h-12 mx-auto mb-6" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Join the Bangin Gear Family
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get exclusive access to new drops, member-only deals, and street style inspiration.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link to="/auth/signup">
                Sign Up Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Switch } from './ui/switch';
import { Input } from './ui/input';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Separator } from './ui/separator';
import { Zap, ShoppingBag, User, Search, Heart, Menu, Home, Grid, Star, Filter, X, Plus, Minus, Check, Bell, Download, Upload, Settings } from 'lucide-react';
import { MobileNavigation } from './MobileNavigation';

interface DesignSystemShowcaseProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function DesignSystemShowcase({ darkMode, setDarkMode }: DesignSystemShowcaseProps) {
  const [activeSection, setActiveSection] = useState('brand');

  const brandColors = [
    { name: 'Neon Lime', value: '#C6FF00', usage: 'Primary brand color, CTAs, highlights' },
    { name: 'Jet Black', value: '#000000', usage: 'Primary text, backgrounds (dark mode)' },
    { name: 'Charcoal Gray', value: '#1E1E1E', usage: 'Secondary text, UI elements' },
    { name: 'Electric Blue', value: '#0066FF', usage: 'Links, accent color, interactive elements' },
    { name: 'Vibrant Red', value: '#FF1744', usage: 'Alerts, sale badges, urgent actions' },
    { name: 'White', value: '#FFFFFF', usage: 'Backgrounds (light mode), text on dark' }
  ];

  const typographyScale = [
    { name: 'H1 - Display', size: '3rem', weight: '700', family: 'Anton' },
    { name: 'H2 - Heading', size: '2.25rem', weight: '600', family: 'Oswald' },
    { name: 'H3 - Subheading', size: '1.875rem', weight: '600', family: 'Oswald' },
    { name: 'H4 - Section Title', size: '1.5rem', weight: '500', family: 'Oswald' },
    { name: 'H5 - Card Title', size: '1.25rem', weight: '500', family: 'Oswald' },
    { name: 'H6 - Small Header', size: '1.125rem', weight: '500', family: 'Oswald' },
    { name: 'Body Large', size: '1.125rem', weight: '400', family: 'Inter' },
    { name: 'Body', size: '1rem', weight: '400', family: 'Inter' },
    { name: 'Body Small', size: '0.875rem', weight: '400', family: 'Inter' },
    { name: 'Caption', size: '0.75rem', weight: '400', family: 'Poppins' },
    { name: 'Button', size: '1rem', weight: '500', family: 'Inter' }
  ];

  const spacingSystem = [
    { name: 'Space 1', value: '4px', token: '--space-1' },
    { name: 'Space 2', value: '8px', token: '--space-2' },
    { name: 'Space 3', value: '12px', token: '--space-3' },
    { name: 'Space 4', value: '16px', token: '--space-4' },
    { name: 'Space 5', value: '20px', token: '--space-5' },
    { name: 'Space 6', value: '24px', token: '--space-6' },
    { name: 'Space 8', value: '32px', token: '--space-8' },
    { name: 'Space 10', value: '40px', token: '--space-10' },
    { name: 'Space 12', value: '48px', token: '--space-12' },
    { name: 'Space 16', value: '64px', token: '--space-16' },
    { name: 'Space 20', value: '80px', token: '--space-20' },
    { name: 'Space 24', value: '96px', token: '--space-24' }
  ];

  const navigationItems = [
    { id: 'brand', label: 'Brand', icon: Zap },
    { id: 'components', label: 'Components', icon: Grid },
    { id: 'layouts', label: 'Layouts', icon: Menu },
    { id: 'guidelines', label: 'Guidelines', icon: Check }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 style={{ fontFamily: 'Anton', fontSize: '1.5rem', fontWeight: '700' }} className="text-foreground">
                  BANGIN GEAR
                </h1>
                <p className="text-xs text-muted-foreground">Design System</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Label htmlFor="dark-mode" className="text-sm">Dark Mode</Label>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar Navigation */}
        <nav className="w-64 border-r border-border bg-card h-[calc(100vh-73px)] sticky top-[73px] p-4">
          <div className="space-y-2">
            {navigationItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className="w-full justify-start gap-3"
                  onClick={() => setActiveSection(item.id)}
                >
                  <IconComponent className="w-4 h-4" />
                  {item.label}
                </Button>
              );
            })}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {activeSection === 'brand' && (
            <div className="space-y-12">
              <div>
                <h2 style={{ fontFamily: 'Oswald', fontSize: '2.25rem', fontWeight: '600' }} className="mb-4">
                  Brand Foundations
                </h2>
                <p className="text-muted-foreground mb-8">
                  The visual identity and core elements that define Bangin Gear's bold, futuristic streetwear aesthetic.
                </p>
              </div>

              {/* Logo Usage */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Logo Usage
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* Main Logo */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Main Logo</CardTitle>
                      <CardDescription>Primary brand mark for headers and main touchpoints</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-32 bg-muted">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                          <Zap className="w-8 h-8 text-primary-foreground" />
                        </div>
                        <span style={{ fontFamily: 'Anton', fontSize: '1.75rem', fontWeight: '700' }}>
                          BANGIN GEAR
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Secondary Logo */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Secondary Logo</CardTitle>
                      <CardDescription>Simplified version for smaller applications</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-32 bg-muted">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                          <Zap className="w-5 h-5 text-primary-foreground" />
                        </div>
                        <span style={{ fontFamily: 'Anton', fontSize: '1.25rem', fontWeight: '700' }}>
                          BG
                        </span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* App Icon */}
                  <Card>
                    <CardHeader>
                      <CardTitle>App Icon</CardTitle>
                      <CardDescription>Icon version for mobile apps and favicons</CardDescription>
                    </CardHeader>
                    <CardContent className="flex items-center justify-center h-32 bg-muted">
                      <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                        <Zap className="w-10 h-10 text-primary-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Color Palette */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Color Palette
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                  {brandColors.map((color) => (
                    <Card key={color.name}>
                      <CardContent className="p-0">
                        <div 
                          className="h-24 w-full rounded-t-lg"
                          style={{ backgroundColor: color.value }}
                        />
                        <div className="p-4">
                          <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }}>{color.name}</h4>
                          <p className="text-sm text-muted-foreground mb-2">{color.value}</p>
                          <p className="text-xs text-muted-foreground">{color.usage}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Typography */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Typography
                </h3>
                <div className="space-y-6 mb-8">
                  {typographyScale.map((type) => (
                    <div key={type.name} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex-1">
                        <span 
                          style={{ 
                            fontFamily: type.family, 
                            fontSize: type.size, 
                            fontWeight: type.weight 
                          }}
                        >
                          The quick brown fox jumps
                        </span>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <div>{type.name}</div>
                        <div>{type.size} • {type.weight} • {type.family}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Spacing System */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Spacing System
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {spacingSystem.map((space) => (
                    <div key={space.name} className="flex items-center gap-4 p-4 border border-border rounded-lg">
                      <div 
                        className="bg-primary"
                        style={{ width: space.value, height: space.value }}
                      />
                      <div>
                        <div style={{ fontFamily: 'Oswald', fontWeight: '500' }}>{space.name}</div>
                        <div className="text-sm text-muted-foreground">{space.value} • {space.token}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeSection === 'components' && (
            <div className="space-y-12">
              <div>
                <h2 style={{ fontFamily: 'Oswald', fontSize: '2.25rem', fontWeight: '600' }} className="mb-4">
                  Component Library
                </h2>
                <p className="text-muted-foreground mb-8">
                  Core UI components styled for the Bangin Gear streetwear aesthetic.
                </p>
              </div>

              {/* Buttons */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Buttons
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="mb-4" style={{ fontFamily: 'Oswald', fontWeight: '500' }}>Primary Buttons</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button>Add to Cart</Button>
                      <Button disabled>Sold Out</Button>
                      <Button size="sm">Quick Add</Button>
                      <Button size="lg">Shop Now</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="mb-4" style={{ fontFamily: 'Oswald', fontWeight: '500' }}>Secondary Buttons</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="outline">View Details</Button>
                      <Button variant="outline" disabled>Coming Soon</Button>
                      <Button variant="outline" size="sm">Save</Button>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="mb-4" style={{ fontFamily: 'Oswald', fontWeight: '500' }}>Ghost Buttons</h4>
                    <div className="flex flex-wrap gap-4">
                      <Button variant="ghost">
                        <Heart className="w-4 h-4 mr-2" />
                        Wishlist
                      </Button>
                      <Button variant="ghost">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Form Elements */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Form Elements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="your@email.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="search">Search Products</Label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input id="search" placeholder="Search streetwear..." className="pl-10" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="category">Category</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hoodies">Hoodies</SelectItem>
                          <SelectItem value="tees">T-Shirts</SelectItem>
                          <SelectItem value="sneakers">Sneakers</SelectItem>
                          <SelectItem value="accessories">Accessories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="newsletter" />
                      <Label htmlFor="newsletter">Subscribe to newsletter</Label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms and conditions</Label>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="notifications">Push Notifications</Label>
                      <Switch id="notifications" />
                    </div>
                  </div>
                </div>
              </section>

              {/* Badges and Labels */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Badges & Labels
                </h3>
                <div className="flex flex-wrap gap-4">
                  <Badge style={{ backgroundColor: '#C6FF00', color: '#000000' }}>New</Badge>
                  <Badge style={{ backgroundColor: '#FF1744', color: '#FFFFFF' }}>Bangin Deal</Badge>
                  <Badge style={{ backgroundColor: '#0066FF', color: '#FFFFFF' }}>Limited Edition</Badge>
                  <Badge variant="outline">In Stock</Badge>
                  <Badge variant="secondary">Free Shipping</Badge>
                  <Badge variant="destructive">Last Few</Badge>
                </div>
              </section>

              {/* Product Cards */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Product Cards
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="group cursor-pointer hover:shadow-lg transition-shadow">
                      <CardContent className="p-0">
                        <div className="aspect-square bg-muted relative overflow-hidden rounded-t-lg">
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                          <Badge 
                            className="absolute top-3 left-3"
                            style={{ backgroundColor: '#FF1744', color: '#FFFFFF' }}
                          >
                            New
                          </Badge>
                          <Button 
                            size="sm" 
                            variant="ghost" 
                            className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="p-4">
                          <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }}>
                            Neon Future Hoodie
                          </h4>
                          <p className="text-sm text-muted-foreground mb-2">Premium streetwear collection</p>
                          <div className="flex items-center justify-between">
                            <span style={{ fontFamily: 'Oswald', fontWeight: '600', fontSize: '1.25rem' }}>
                              $89.99
                            </span>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-current text-yellow-400" />
                              <span className="text-sm">4.8</span>
                            </div>
                          </div>
                          <Button className="w-full mt-3" size="sm">
                            Add to Cart
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Navigation Systems */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Navigation Systems
                </h3>
                <div className="space-y-8">
                  {/* Desktop Navigation */}
                  <div>
                    <h4 className="mb-4" style={{ fontFamily: 'Oswald', fontWeight: '500' }}>Desktop Navigation</h4>
                    <Card>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-8">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                                <Zap className="w-5 h-5 text-primary-foreground" />
                              </div>
                              <span style={{ fontFamily: 'Anton', fontWeight: '700' }}>BANGIN GEAR</span>
                            </div>
                            <nav className="flex items-center gap-6">
                              <Button variant="ghost">New Arrivals</Button>
                              <Button variant="ghost">Hoodies</Button>
                              <Button variant="ghost">T-Shirts</Button>
                              <Button variant="ghost">Sneakers</Button>
                              <Button variant="ghost">Accessories</Button>
                            </nav>
                          </div>
                          <div className="flex items-center gap-4">
                            <Button variant="ghost" size="icon">
                              <Search className="w-5 h-5" />
                            </Button>
                            <Button variant="ghost" size="icon" className="relative">
                              <Heart className="w-5 h-5" />
                              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0">
                                3
                              </Badge>
                            </Button>
                            <Button variant="ghost" size="icon" className="relative">
                              <ShoppingBag className="w-5 h-5" />
                              <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center text-xs p-0">
                                2
                              </Badge>
                            </Button>
                            <Button variant="ghost" size="icon">
                              <User className="w-5 h-5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Mobile Navigation Preview */}
                  <div>
                    <h4 className="mb-4" style={{ fontFamily: 'Oswald', fontWeight: '500' }}>Mobile Navigation</h4>
                    <Card>
                      <CardContent className="p-6">
                        <div className="max-w-sm mx-auto">
                          <MobileNavigation />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </section>

              {/* Notifications & Alerts */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Notifications & Alerts
                </h3>
                <div className="space-y-4">
                  <div className="p-4 border border-primary/20 bg-primary/5 rounded-lg flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }}>Item Added to Cart</h4>
                      <p className="text-sm text-muted-foreground">Cyber Punk Hoodie has been added to your cart.</p>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-destructive/20 bg-destructive/5 rounded-lg flex items-start gap-3">
                    <div className="w-6 h-6 bg-destructive rounded-full flex items-center justify-center mt-0.5">
                      <X className="w-4 h-4 text-destructive-foreground" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }}>Stock Alert</h4>
                      <p className="text-sm text-muted-foreground">Only 2 items left in stock! Order now to secure yours.</p>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-accent/20 bg-accent/5 rounded-lg flex items-start gap-3">
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
                      <Bell className="w-4 h-4 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }}>New Drop Alert</h4>
                      <p className="text-sm text-muted-foreground">Fresh streetwear collection just dropped! Check it out.</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Icons Library */}
              <section>
                <h3 style={{ fontFamily: 'Oswald', fontSize: '1.875rem', fontWeight: '600' }} className="mb-6">
                  Icon Library
                </h3>
                <div className="grid grid-cols-8 gap-4">
                  {[
                    Home, Grid, ShoppingBag, User, Heart, Search, Menu, Settings,
                    Star, Filter, Plus, Minus, Check, X, Bell, Zap,
                    Upload, Download
                  ].map((IconComponent, index) => (
                    <div key={index} className="p-4 border border-border rounded-lg flex flex-col items-center gap-2 hover:bg-muted transition-colors">
                      <IconComponent className="w-6 h-6" />
                      <span className="text-xs text-muted-foreground">{IconComponent.name}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {activeSection === 'layouts' && (
            <div className="space-y-12">
              <div>
                <h2 style={{ fontFamily: 'Oswald', fontSize: '2.25rem', fontWeight: '600' }} className="mb-4">
                  Layout Examples
                </h2>
                <p className="text-muted-foreground mb-8">
                  Applied layouts showing the design system in action across key user flows.
                </p>
              </div>

              <Tabs defaultValue="homepage" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="homepage">Homepage</TabsTrigger>
                  <TabsTrigger value="category">Category</TabsTrigger>
                  <TabsTrigger value="product">Product</TabsTrigger>
                  <TabsTrigger value="cart">Cart</TabsTrigger>
                </TabsList>
                
                <TabsContent value="homepage" className="mt-8">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 style={{ fontFamily: 'Oswald', fontSize: '1.5rem', fontWeight: '600' }} className="mb-4">
                      Homepage Layout
                    </h3>
                    <div className="space-y-6">
                      {/* Hero Section */}
                      <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-center">
                        <h1 style={{ fontFamily: 'Anton', fontSize: '3rem', fontWeight: '700' }} className="text-primary-foreground mb-4">
                          FUTURE STREETWEAR
                        </h1>
                        <p className="text-primary-foreground/80 mb-6">Drop into the next level of urban fashion</p>
                        <Button size="lg" variant="secondary">
                          Shop Collection
                        </Button>
                      </div>
                      
                      {/* Trending Products */}
                      <div>
                        <h2 style={{ fontFamily: 'Oswald', fontSize: '2rem', fontWeight: '600' }} className="mb-6">
                          Trending Now
                        </h2>
                        <div className="grid grid-cols-4 gap-4">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                              <span className="text-muted-foreground">Product {i}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="category" className="mt-8">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 style={{ fontFamily: 'Oswald', fontSize: '1.5rem', fontWeight: '600' }} className="mb-4">
                      Category Page Layout
                    </h3>
                    <div className="flex gap-6">
                      {/* Filters Sidebar */}
                      <div className="w-64 space-y-4">
                        <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }}>Filters</h4>
                        <div className="space-y-2">
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <Filter className="w-4 h-4 mr-2" />
                            Size
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <Filter className="w-4 h-4 mr-2" />
                            Color
                          </Button>
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <Filter className="w-4 h-4 mr-2" />
                            Price
                          </Button>
                        </div>
                      </div>
                      
                      {/* Product Grid */}
                      <div className="flex-1">
                        <div className="grid grid-cols-3 gap-4">
                          {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                              <span className="text-muted-foreground">Product {i}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="product" className="mt-8">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 style={{ fontFamily: 'Oswald', fontSize: '1.5rem', fontWeight: '600' }} className="mb-4">
                      Product Detail Layout
                    </h3>
                    <div className="grid grid-cols-2 gap-8">
                      {/* Product Images */}
                      <div className="space-y-4">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                          <span className="text-muted-foreground">Main Product Image</span>
                        </div>
                        <div className="grid grid-cols-4 gap-2">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="aspect-square bg-muted rounded border-2 border-transparent hover:border-primary cursor-pointer" />
                          ))}
                        </div>
                      </div>
                      
                      {/* Product Info */}
                      <div className="space-y-6">
                        <div>
                          <h1 style={{ fontFamily: 'Oswald', fontSize: '2rem', fontWeight: '600' }}>
                            Cyber Punk Hoodie
                          </h1>
                          <p className="text-muted-foreground">Future-ready streetwear essential</p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span style={{ fontFamily: 'Oswald', fontSize: '2rem', fontWeight: '600' }}>
                            $129.99
                          </span>
                          <Badge style={{ backgroundColor: '#FF1744', color: '#FFFFFF' }}>
                            20% Off
                          </Badge>
                        </div>
                        
                        <div className="space-y-4">
                          <div>
                            <Label>Size</Label>
                            <div className="flex gap-2 mt-2">
                              {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                <Button key={size} variant="outline" size="sm">
                                  {size}
                                </Button>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex gap-4">
                            <Button className="flex-1">Add to Cart</Button>
                            <Button variant="outline" size="icon">
                              <Heart className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="cart" className="mt-8">
                  <div className="border border-border rounded-lg p-6 bg-card">
                    <h3 style={{ fontFamily: 'Oswald', fontSize: '1.5rem', fontWeight: '600' }} className="mb-4">
                      Shopping Cart Layout
                    </h3>
                    <div className="grid grid-cols-3 gap-8">
                      {/* Cart Items */}
                      <div className="col-span-2 space-y-4">
                        {[1, 2].map((i) => (
                          <div key={i} className="flex gap-4 p-4 border border-border rounded-lg">
                            <div className="w-20 h-20 bg-muted rounded" />
                            <div className="flex-1">
                              <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }}>
                                Product Name {i}
                              </h4>
                              <p className="text-sm text-muted-foreground">Size: M</p>
                              <div className="flex items-center gap-2 mt-2">
                                <Button size="sm" variant="outline">
                                  <Minus className="w-3 h-3" />
                                </Button>
                                <span>1</span>
                                <Button size="sm" variant="outline">
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </div>
                            </div>
                            <div className="text-right">
                              <p style={{ fontFamily: 'Oswald', fontWeight: '600' }}>$89.99</p>
                              <Button size="sm" variant="ghost">
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      {/* Order Summary */}
                      <div className="space-y-4">
                        <Card>
                          <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="flex justify-between">
                              <span>Subtotal</span>
                              <span>$179.98</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Shipping</span>
                              <span>Free</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between" style={{ fontFamily: 'Oswald', fontWeight: '600' }}>
                              <span>Total</span>
                              <span>$179.98</span>
                            </div>
                            <Button className="w-full">Checkout</Button>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeSection === 'guidelines' && (
            <div className="space-y-12">
              <div>
                <h2 style={{ fontFamily: 'Oswald', fontSize: '2.25rem', fontWeight: '600' }} className="mb-4">
                  Usage Guidelines
                </h2>
                <p className="text-muted-foreground mb-8">
                  Best practices and guidelines for implementing the Bangin Gear design system.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Accessibility</CardTitle>
                    <CardDescription>Ensuring inclusive design for all users</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Color Contrast</h4>
                      <p className="text-sm text-muted-foreground">
                        All text maintains WCAG AA compliance with 4.5:1 contrast ratio minimum.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Focus States</h4>
                      <p className="text-sm text-muted-foreground">
                        Interactive elements have clear focus indicators for keyboard navigation.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Alt Text</h4>
                      <p className="text-sm text-muted-foreground">
                        All images include descriptive alternative text for screen readers.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Responsive Design</CardTitle>
                    <CardDescription>Breakpoints and responsive behavior</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Mobile (320px+)</h4>
                      <p className="text-sm text-muted-foreground">
                        Single column layout, touch-optimized buttons, bottom navigation.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Tablet (768px+)</h4>
                      <p className="text-sm text-muted-foreground">
                        Two-column grid, larger touch targets, hybrid navigation.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Desktop (1024px+)</h4>
                      <p className="text-sm text-muted-foreground">
                        Multi-column layouts, hover states, top navigation with dropdowns.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Brand Voice</CardTitle>
                    <CardDescription>Tone and messaging guidelines</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Personality</h4>
                      <p className="text-sm text-muted-foreground">
                        Bold, confident, cutting-edge, street-smart, authentic.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Language</h4>
                      <p className="text-sm text-muted-foreground">
                        Direct, energetic, use of streetwear slang, action-oriented.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Examples</h4>
                      <p className="text-sm text-muted-foreground">
                        "Drop into style", "Level up your fit", "Street-ready gear".
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Implementation</CardTitle>
                    <CardDescription>Development best practices</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Design Tokens</h4>
                      <p className="text-sm text-muted-foreground">
                        Use CSS custom properties for colors, spacing, and typography.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Component Usage</h4>
                      <p className="text-sm text-muted-foreground">
                        Import from design system library, avoid custom implementations.
                      </p>
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'Oswald', fontWeight: '500' }} className="mb-2">Testing</h4>
                      <p className="text-sm text-muted-foreground">
                        Test across devices, validate accessibility, check performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
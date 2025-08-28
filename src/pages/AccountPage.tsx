import React, { useState } from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Separator } from '../components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '../components/ui/sheet';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useCart } from '../contexts/CartContext';
import { 
  User, 
  ShoppingBag, 
  Heart, 
  MapPin, 
  Settings,
  Package,
  Star,
  Eye,
  X,
  Edit,
  Plus,
  Menu,
  CreditCard,
  Bell,
  Shield,
  ChevronRight,
  TrendingUp,
  Calendar,
  Gift,
  Download
} from 'lucide-react';
import { toast } from 'sonner';

function MobileAccountNavigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  
  const menuItems = [
    { icon: User, label: 'Overview', path: '/account', color: 'text-primary' },
    { icon: ShoppingBag, label: 'Orders', path: '/account/orders', color: 'text-accent' },
    { icon: Heart, label: 'Wishlist', path: '/account/wishlist', color: 'text-destructive' },
    { icon: MapPin, label: 'Addresses', path: '/account/addresses', color: 'text-secondary-foreground' },
    { icon: Settings, label: 'Profile', path: '/account/profile', color: 'text-muted-foreground' }
  ];

  const currentPage = menuItems.find(item => item.path === location.pathname);

  return (
    <div className="lg:hidden mb-6">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            <div className="flex items-center gap-2">
              {currentPage && <currentPage.icon className="w-4 h-4" />}
              {currentPage?.label || 'Account'}
            </div>
            <Menu className="w-4 h-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-80">
          <SheetHeader>
            <SheetTitle>Account Menu</SheetTitle>
          </SheetHeader>
          <nav className="space-y-2 mt-6">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 ${isActive ? '' : 'hover:bg-muted'}`}
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.path}>
                    <IconComponent className={`w-4 h-4 ${isActive ? '' : item.color}`} />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}

function DesktopAccountSidebar() {
  const location = useLocation();
  
  const menuItems = [
    { icon: User, label: 'Overview', path: '/account', color: 'text-primary' },
    { icon: ShoppingBag, label: 'Orders', path: '/account/orders', color: 'text-accent' },
    { icon: Heart, label: 'Wishlist', path: '/account/wishlist', color: 'text-destructive' },
    { icon: MapPin, label: 'Addresses', path: '/account/addresses', color: 'text-secondary-foreground' },
    { icon: Settings, label: 'Profile', path: '/account/profile', color: 'text-muted-foreground' }
  ];

  return (
    <aside className="hidden lg:block w-72 space-y-2">
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-heading font-semibold">Alex Johnson</h3>
              <p className="text-sm text-muted-foreground">Premium Member</p>
            </div>
          </div>
          
          <nav className="space-y-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Button
                  key={item.path}
                  variant={isActive ? "default" : "ghost"}
                  className={`w-full justify-start gap-3 h-11 ${isActive ? '' : 'hover:bg-muted'}`}
                  asChild
                >
                  <Link to={item.path}>
                    <IconComponent className={`w-4 h-4 ${isActive ? '' : item.color}`} />
                    {item.label}
                    <ChevronRight className="w-3 h-3 ml-auto opacity-50" />
                  </Link>
                </Button>
              );
            })}
          </nav>
        </CardContent>
      </Card>
    </aside>
  );
}

function AccountOverview() {
  const { getItemCount, getTotalPrice } = useCart();
  
  const recentOrders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 329.98,
      items: 2
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 129.99,
      items: 1
    }
  ];

  const wishlistItems = [
    {
      id: 1,
      name: 'Urban Bomber Jacket',
      brand: 'BANGIN',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Tech Backpack',
      brand: 'FUTURE',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
    }
  ];

  const stats = [
    { 
      label: 'Total Orders', 
      value: '12', 
      change: '+2 this month', 
      icon: ShoppingBag, 
      color: 'text-primary',
      bgColor: 'bg-primary/10'
    },
    { 
      label: 'Total Spent', 
      value: '£1,247', 
      change: 'Lifetime total', 
      icon: CreditCard, 
      color: 'text-accent',
      bgColor: 'bg-accent/10'
    },
    { 
      label: 'Wishlist', 
      value: wishlistItems.length.toString(), 
      change: 'Items saved', 
      icon: Heart, 
      color: 'text-destructive',
      bgColor: 'bg-destructive/10'
    },
    { 
      label: 'Cart Total', 
      value: getItemCount() > 0 ? `£${getTotalPrice().toFixed(2)}` : '£0', 
      change: `${getItemCount()} items`, 
      icon: Package, 
      color: 'text-secondary-foreground',
      bgColor: 'bg-secondary/10'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-2xl md:text-3xl font-bold">Welcome back, Alex!</h1>
        <p className="text-muted-foreground">Here's what's happening with your account</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
                    <IconComponent className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                      {stat.label}
                    </p>
                    <p className="font-heading text-lg font-bold truncate">{stat.value}</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5" />
              Recent Orders
            </CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/account/orders">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                  <div>
                    <div className="font-medium">{order.id}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <Calendar className="w-3 h-3" />
                      {new Date(order.date).toLocaleDateString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'}>
                      {order.status}
                    </Badge>
                    <div className="text-sm font-medium mt-1">£{order.total}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Wishlist Preview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              Wishlist
            </CardTitle>
            <Button variant="outline" size="sm" asChild>
              <Link to="/account/wishlist">View All</Link>
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {wishlistItems.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="w-16 h-16 rounded overflow-hidden">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-xs text-muted-foreground">{item.brand}</p>
                    <div className="font-heading font-semibold text-sm">£{item.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2" asChild>
              <Link to="/shop?filter=new">
                <Gift className="w-6 h-6" />
                <span className="text-sm">New Arrivals</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2" asChild>
              <Link to="/account/orders">
                <Download className="w-6 h-6" />
                <span className="text-sm">Track Order</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2" asChild>
              <Link to="/size-guide">
                <Shield className="w-6 h-6" />
                <span className="text-sm">Size Guide</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-auto p-4 flex flex-col gap-2" asChild>
              <Link to="/contact">
                <Bell className="w-6 h-6" />
                <span className="text-sm">Support</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Orders() {
  const orders = [
    {
      id: 'ORD-2024-001',
      date: '2024-01-15',
      status: 'Delivered',
      total: 329.98,
      items: [
        {
          name: 'Cyber Punk Hoodie',
          image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
          price: 129.99,
          quantity: 1
        },
        {
          name: 'Street Runner Sneakers',
          image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
          price: 199.99,
          quantity: 1
        }
      ]
    },
    {
      id: 'ORD-2024-002',
      date: '2024-01-10',
      status: 'Shipped',
      total: 129.99,
      items: [
        {
          name: 'Cyber Punk Hoodie',
          image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
          price: 129.99,
          quantity: 1
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="font-display text-2xl md:text-3xl font-bold">My Orders</h1>
        <Button variant="outline" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>
      
      <div className="space-y-4">
        {orders.map((order) => (
          <Card key={order.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <CardTitle className="text-lg">{order.id}</CardTitle>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    Placed on {new Date(order.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="text-left sm:text-right">
                  <Badge variant={order.status === 'Delivered' ? 'default' : 'secondary'} className="mb-2">
                    {order.status}
                  </Badge>
                  <div className="font-heading font-bold text-lg">£{order.total}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-4">
                {order.items.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="w-16 h-16 rounded overflow-hidden">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium truncate">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                      <div className="font-heading font-semibold">£{item.price}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Details
                </Button>
                <Button variant="outline" size="sm">
                  <Package className="w-4 h-4 mr-2" />
                  Track Order
                </Button>
                {order.status === 'Delivered' && (
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download Invoice
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Wishlist() {
  const { addToCart } = useCart();
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      slug: 'urban-bomber-jacket',
      name: 'Urban Bomber Jacket',
      brand: 'BANGIN',
      price: 199.99,
      originalPrice: 249.99,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
      inStock: true,
      rating: 4.5
    },
    {
      id: 2,
      slug: 'tech-backpack',
      name: 'Tech Backpack',
      brand: 'FUTURE',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      inStock: false,
      rating: 4.7
    },
    {
      id: 3,
      slug: 'minimal-graphic-tee',
      name: 'Minimal Graphic Tee',
      brand: 'MINIMAL',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
      inStock: true,
      rating: 4.3
    }
  ]);

  const removeFromWishlist = (id: number) => {
    setWishlistItems(prev => prev.filter(item => item.id !== id));
    toast.success('Item removed from wishlist');
  };

  const handleAddToCart = (item: any) => {
    if (!item.inStock) {
      toast.error('Item is out of stock');
      return;
    }
    addToCart({
      id: item.id.toString(),
      name: item.name,
      price: item.price,
      image: item.image,
      slug: item.slug,
      brand: item.brand
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold">My Wishlist</h1>
          <p className="text-muted-foreground">{wishlistItems.length} items</p>
        </div>
        <Button variant="outline" asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
      </div>

      {wishlistItems.length === 0 ? (
        <Card>
          <CardContent className="py-12 text-center">
            <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground mb-4">Save items you love for later</p>
            <Button asChild>
              <Link to="/shop">Start Shopping</Link>
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="group hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 bg-background/80 hover:bg-background"
                    onClick={() => removeFromWishlist(item.id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                  {!item.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge variant="secondary">Out of Stock</Badge>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">{item.brand}</div>
                  <Link 
                    to={`/product/${item.slug}`}
                    className="font-heading font-semibold hover:text-primary transition-colors block mb-2"
                  >
                    {item.name}
                  </Link>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current text-yellow-400" />
                      <span className="text-xs text-muted-foreground">{item.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-heading font-bold">£{item.price}</span>
                    {item.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        £{item.originalPrice}
                      </span>
                    )}
                  </div>
                  <Button 
                    className="w-full" 
                    size="sm"
                    onClick={() => handleAddToCart(item)}
                    disabled={!item.inStock}
                  >
                    {item.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

function Addresses() {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      label: 'Home',
      name: 'Alex Johnson',
      line1: '123 Street Lane',
      line2: 'Apt 4B',
      city: 'London',
      postcode: 'SW1A 1AA',
      country: 'United Kingdom',
      isDefault: true
    },
    {
      id: 2,
      label: 'Work',
      name: 'Alex Johnson',
      line1: '456 Business Ave',
      city: 'London',
      postcode: 'EC1A 1BB',
      country: 'United Kingdom',
      isDefault: false
    }
  ]);

  const [showForm, setShowForm] = useState(false);

  const deleteAddress = (id: number) => {
    setAddresses(prev => prev.filter(addr => addr.id !== id));
    toast.success('Address deleted');
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <h1 className="font-display text-2xl md:text-3xl font-bold">My Addresses</h1>
        <Button onClick={() => setShowForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add Address
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <Card key={address.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-2">
                <CardTitle className="text-lg">{address.label}</CardTitle>
                {address.isDefault && <Badge>Default</Badge>}
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => deleteAddress(address.id)}
                  disabled={address.isDefault}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-sm">
                <div className="font-medium">{address.name}</div>
                <div>{address.line1}</div>
                {address.line2 && <div>{address.line2}</div>}
                <div>{address.city} {address.postcode}</div>
                <div>{address.country}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <CardTitle>Add New Address</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="label">Address Label</Label>
                  <Input id="label" placeholder="Home, Work, etc." />
                </div>
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" />
                </div>
              </div>
              <div>
                <Label htmlFor="address1">Address Line 1</Label>
                <Input id="address1" />
              </div>
              <div>
                <Label htmlFor="address2">Address Line 2 (Optional)</Label>
                <Input id="address2" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" />
                </div>
                <div>
                  <Label htmlFor="postcode">Postcode</Label>
                  <Input id="postcode" />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Input id="country" defaultValue="United Kingdom" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="button" onClick={() => setShowForm(false)}>
                  Save Address
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

function Profile() {
  const [formData, setFormData] = useState({
    firstName: 'Alex',
    lastName: 'Johnson',
    email: 'alex.johnson@example.com',
    phone: '+44 20 1234 5678',
    dateOfBirth: '1990-01-01',
    newsletter: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Profile updated successfully');
  };

  return (
    <div className="space-y-6">
      <h1 className="font-display text-2xl md:text-3xl font-bold">Profile Settings</h1>

      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="security">Security</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>

        <TabsContent value="personal">
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  />
                </div>

                <div>
                  <Label htmlFor="dateOfBirth">Date of Birth</Label>
                  <Input
                    id="dateOfBirth"
                    type="date"
                    value={formData.dateOfBirth}
                    onChange={(e) => setFormData(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                  />
                </div>

                <Button type="submit">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Change Password</h4>
                <div className="space-y-3">
                  <Input type="password" placeholder="Current Password" />
                  <Input type="password" placeholder="New Password" />
                  <Input type="password" placeholder="Confirm New Password" />
                  <Button variant="outline">Update Password</Button>
                </div>
              </div>
              <Separator />
              <div>
                <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                <p className="text-sm text-muted-foreground mb-3">Add an extra layer of security to your account</p>
                <Button variant="outline">Enable 2FA</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences">
          <Card>
            <CardHeader>
              <CardTitle>Communication Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Email Notifications</h4>
                    <p className="text-sm text-muted-foreground">Receive updates about orders and promotions</p>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">SMS Notifications</h4>
                    <p className="text-sm text-muted-foreground">Get text updates about your orders</p>
                  </div>
                  <input type="checkbox" className="toggle" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Marketing Communications</h4>
                    <p className="text-sm text-muted-foreground">Receive news about new products and sales</p>
                  </div>
                  <input type="checkbox" defaultChecked className="toggle" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export function AccountPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        <MobileAccountNavigation />
        <div className="flex gap-8">
          <DesktopAccountSidebar />
          <main className="flex-1 min-w-0">
            <Routes>
              <Route path="/" element={<AccountOverview />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/addresses" element={<Addresses />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Navigate to="/account" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '../ui/sheet';
import { 
  Zap, 
  Search, 
  ShoppingBag, 
  Heart, 
  User, 
  Menu,
  X,
  Home,
  ShoppingCart,
  Bookmark,
  MessageCircle,
  HelpCircle,
  Phone,
  ChevronRight,
  Sparkles
} from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function Header({ darkMode, setDarkMode }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { getItemCount } = useCart();

  const navItems = [
    { name: 'New', href: '/shop?filter=new', icon: Sparkles },
    { name: 'Hoodies', href: '/shop/hoodies', icon: null },
    { name: 'T-Shirts', href: '/shop/tees', icon: null },
    { name: 'Sneakers', href: '/shop/sneakers', icon: null },
    { name: 'Accessories', href: '/shop/accessories', icon: null },
    { name: 'Sale', href: '/shop?filter=sale', icon: null }
  ];

  const quickLinks = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Account', href: '/account', icon: User },
    { name: 'Wishlist', href: '/account/wishlist', icon: Heart, badge: '3' },
    { name: 'Cart', href: '/cart', icon: ShoppingCart, badge: '2' }
  ];

  const supportLinks = [
    { name: 'Size Guide', href: '/size-guide', icon: null },
    { name: 'FAQ', href: '/faq', icon: HelpCircle },
    { name: 'Contact Us', href: '/contact', icon: Phone },
    { name: 'Blog', href: '/blog', icon: MessageCircle }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
      setIsSearchOpen(false);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isCurrentPath = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
            <div className="w-11 h-11 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-neon transition-all duration-200">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-xl font-bold block leading-none">
                BANGIN GEAR
              </span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider">
                Streetwear Culture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 ml-16">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              const isActive = isCurrentPath(item.href);
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 group ${
                    isActive 
                      ? 'bg-primary text-primary-foreground shadow-sm' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden md:block flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search streetwear..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-2.5 bg-muted/30 border-muted/50 rounded-full focus:bg-background focus:border-primary/50 transition-all duration-200"
              />
            </form>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            {/* Mobile Search */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-full hover:bg-muted/50"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* Dark Mode Toggle (Desktop) */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full bg-muted/30">
              <Label htmlFor="dark-mode" className="text-xs font-medium">Dark</Label>
              <Switch
                id="dark-mode"
                checked={darkMode}
                onCheckedChange={setDarkMode}
              />
            </div>

            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex rounded-full hover:bg-muted/50" asChild>
              <Link to="/account/wishlist">
                <Heart className="w-5 h-5" />
                <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs p-0 bg-destructive border-2 border-background">
                  3
                </Badge>
              </Link>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative hidden sm:flex rounded-full hover:bg-muted/50" asChild>
              <Link to="/cart">
                <ShoppingBag className="w-5 h-5" />
                {getItemCount() > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center text-xs p-0 bg-primary text-primary-foreground border-2 border-background">
                    {getItemCount()}
                  </Badge>
                )}
              </Link>
            </Button>

            {/* Account */}
            <Button variant="ghost" size="icon" className="hidden sm:flex rounded-full hover:bg-muted/50" asChild>
              <Link to="/auth/signin">
                <User className="w-5 h-5" />
              </Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden relative rounded-full hover:bg-muted/50">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0 bg-background">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                </SheetHeader>
                
                {/* Menu Header */}
                <div className="flex items-center justify-between p-6 bg-gradient-to-r from-primary to-accent">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div className="text-primary-foreground">
                      <div className="font-display text-sm font-bold">BANGIN GEAR</div>
                      <div className="text-xs opacity-80">Streetwear Culture</div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={closeMenu}
                    className="text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  {/* Quick Actions */}
                  <div className="p-6 space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      {quickLinks.map((link) => {
                        const IconComponent = link.icon;
                        const isActive = isCurrentPath(link.href);
                        return (
                          <Link
                            key={link.name}
                            to={link.href}
                            onClick={closeMenu}
                            className={`relative flex flex-col items-center p-4 rounded-xl border transition-colors ${
                              isActive 
                                ? 'bg-primary text-primary-foreground border-primary' 
                                : 'bg-muted/50 hover:bg-muted border-border hover:border-primary/50'
                            }`}
                          >
                            <IconComponent className="w-6 h-6 mb-2" />
                            <span className="text-xs font-medium">{link.name}</span>
                            {link.name === 'Cart' && getItemCount() > 0 && (
                              <Badge 
                                variant="secondary" 
                                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0 bg-destructive text-destructive-foreground"
                              >
                                {getItemCount()}
                              </Badge>
                            )}
                            {link.name === 'Wishlist' && (
                              <Badge 
                                variant="secondary" 
                                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center text-xs p-0 bg-destructive text-destructive-foreground"
                              >
                                3
                              </Badge>
                            )}
                          </Link>
                        );
                      })}
                    </div>

                    {/* Dark Mode Toggle */}
                    <div className="flex items-center justify-between p-4 bg-muted/50 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-background rounded-lg flex items-center justify-center">
                          <span className="text-sm">🌙</span>
                        </div>
                        <span className="font-medium">Dark Mode</span>
                      </div>
                      <Switch
                        checked={darkMode}
                        onCheckedChange={setDarkMode}
                      />
                    </div>
                  </div>

                  <Separator />

                  {/* Main Navigation */}
                  <div className="p-6">
                    <h3 className="font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Shop Categories
                    </h3>
                    <div className="space-y-2">
                      {navItems.map((item) => {
                        const IconComponent = item.icon;
                        const isActive = isCurrentPath(item.href);
                        return (
                          <Link
                            key={item.name}
                            to={item.href}
                            onClick={closeMenu}
                            className={`group flex items-center justify-between p-3 rounded-lg transition-colors ${
                              isActive 
                                ? 'bg-primary text-primary-foreground' 
                                : 'hover:bg-muted'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {IconComponent && <IconComponent className="w-5 h-5" />}
                              <span className="font-medium">{item.name}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Support Links */}
                  <div className="p-6">
                    <h3 className="font-heading text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                      Support
                    </h3>
                    <div className="space-y-2">
                      {supportLinks.map((link) => {
                        const IconComponent = link.icon;
                        const isActive = isCurrentPath(link.href);
                        return (
                          <Link
                            key={link.name}
                            to={link.href}
                            onClick={closeMenu}
                            className={`group flex items-center justify-between p-3 rounded-lg transition-colors ${
                              isActive 
                                ? 'bg-primary text-primary-foreground' 
                                : 'hover:bg-muted'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {IconComponent && <IconComponent className="w-5 h-5" />}
                              <span className="font-medium">{link.name}</span>
                            </div>
                            <ChevronRight className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-opacity" />
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Menu Footer */}
                <div className="p-6 bg-muted/30 border-t">
                  <div className="text-center">
                    <div className="text-xs text-muted-foreground mb-2">
                      Follow the culture
                    </div>
                    <div className="flex justify-center gap-4">
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <span className="text-sm">📱</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <span className="text-sm">📸</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="w-8 h-8">
                        <span className="text-sm">🐦</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search streetwear..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-muted/50"
                autoFocus
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setIsSearchOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </form>
          </div>
        )}
      </div>
    </header>
  );
}
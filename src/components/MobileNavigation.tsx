import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Home, Grid, ShoppingBag, User, Heart, Sparkles } from 'lucide-react';

export function MobileNavigation() {
  const location = useLocation();
  const { getItemCount } = useCart();

  const navItems = [
    { 
      icon: Home, 
      label: 'Home', 
      href: '/', 
      badge: null,
      activeColor: 'text-primary'
    },
    { 
      icon: Grid, 
      label: 'Shop', 
      href: '/shop', 
      badge: null,
      activeColor: 'text-accent'
    },
    { 
      icon: ShoppingBag, 
      label: 'Cart', 
      href: '/cart', 
      badge: null,
      activeColor: 'text-primary'
    },
    { 
      icon: Heart, 
      label: 'Wishlist', 
      href: '/account/wishlist', 
      badge: '3',
      activeColor: 'text-destructive'
    },
    { 
      icon: User, 
      label: 'Account', 
      href: '/account', 
      badge: null,
      activeColor: 'text-primary'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border md:hidden z-40 safe-area-inset-bottom">
      <div className="flex items-center justify-around py-2 px-1">
        {navItems.map((item) => {
          const IconComponent = item.icon;
          const isActive = location.pathname === item.href || 
            (item.href !== '/' && location.pathname.startsWith(item.href));
          
          return (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 h-auto p-2 px-3 relative transition-all duration-200 ${
                isActive 
                  ? `${item.activeColor} bg-primary/10` 
                  : 'text-muted-foreground hover:text-foreground'
              }`}
              asChild
            >
              <Link to={item.href}>
                <div className="relative">
                  <IconComponent className={`w-5 h-5 transition-transform duration-200 ${
                    isActive ? 'scale-110' : ''
                  }`} />
                  {(item.label === 'Cart' && getItemCount() > 0) && (
                    <Badge 
                      className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center text-xs p-0 bg-destructive text-destructive-foreground border-0 shadow-sm"
                    >
                      {getItemCount()}
                    </Badge>
                  )}
                  {(item.label === 'Wishlist' && item.badge) && (
                    <Badge 
                      className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center text-xs p-0 bg-destructive text-destructive-foreground border-0 shadow-sm"
                    >
                      {item.badge}
                    </Badge>
                  )}
                  {isActive && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-current rounded-full"></div>
                  )}
                </div>
                <span className={`text-xs font-medium transition-all duration-200 ${
                  isActive ? 'font-semibold' : ''
                }`}>
                  {item.label}
                </span>
              </Link>
            </Button>
          );
        })}
      </div>
      
      {/* Safe area spacing for devices with home indicators */}
      <div className="h-safe-area-inset-bottom"></div>
    </div>
  );
}
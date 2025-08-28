import React, { useState, useEffect } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card, CardContent } from '../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '../components/ui/sheet';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Filter, Grid, List, Star, SlidersHorizontal, X } from 'lucide-react';
import { toast } from 'sonner';

export function ShopPage() {
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [onSaleOnly, setOnSaleOnly] = useState(false);

  const sortBy = searchParams.get('sort') || 'featured';
  const searchQuery = searchParams.get('search') || '';
  const filterParam = searchParams.get('filter') || '';

  // Mock product data with more products for better filtering testing
  const allProducts = [
    {
      id: 1,
      slug: 'cyber-punk-hoodie',
      name: 'Cyber Punk Hoodie',
      brand: 'BANGIN',
      category: 'hoodies',
      price: 129.99,
      originalPrice: 159.99,
      rating: 4.8,
      reviews: 124,
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
      colors: ['Black', 'Neon Green'],
      sizes: ['S', 'M', 'L', 'XL'],
      isNew: true,
      isOnSale: true,
      inStock: true
    },
    {
      id: 2,
      slug: 'neon-future-tee',
      name: 'Neon Future Tee',
      brand: 'GEAR CO.',
      category: 'tees',
      price: 49.99,
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
      colors: ['Black', 'White', 'Neon Green'],
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      isNew: true,
      inStock: true
    },
    {
      id: 3,
      slug: 'street-runner-sneakers',
      name: 'Street Runner Sneakers',
      brand: 'URBAN',
      category: 'sneakers',
      price: 199.99,
      rating: 4.9,
      reviews: 256,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
      colors: ['Black', 'White', 'Blue'],
      sizes: ['7', '8', '9', '10', '11'],
      inStock: true
    },
    {
      id: 4,
      slug: 'tech-backpack',
      name: 'Tech Backpack',
      brand: 'FUTURE',
      category: 'accessories',
      price: 89.99,
      rating: 4.7,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      colors: ['Black', 'Gray'],
      sizes: ['One Size'],
      inStock: false
    },
    {
      id: 5,
      slug: 'urban-bomber-jacket',
      name: 'Urban Bomber Jacket',
      brand: 'BANGIN',
      category: 'hoodies',
      price: 199.99,
      originalPrice: 249.99,
      rating: 4.5,
      reviews: 143,
      image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400&h=400&fit=crop',
      colors: ['Black', 'Olive', 'Navy'],
      sizes: ['S', 'M', 'L', 'XL'],
      isOnSale: true,
      inStock: true
    },
    {
      id: 6,
      slug: 'minimal-graphic-tee',
      name: 'Minimal Graphic Tee',
      brand: 'MINIMAL',
      category: 'tees',
      price: 39.99,
      rating: 4.3,
      reviews: 78,
      image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&h=400&fit=crop',
      colors: ['Black', 'White', 'Gray'],
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      inStock: true
    },
    {
      id: 7,
      slug: 'retro-windbreaker',
      name: 'Retro Windbreaker',
      brand: 'URBAN',
      category: 'hoodies',
      price: 159.99,
      rating: 4.4,
      reviews: 92,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
      colors: ['Blue', 'White', 'Red'],
      sizes: ['M', 'L', 'XL'],
      isNew: true,
      inStock: true
    },
    {
      id: 8,
      slug: 'classic-denim-jacket',
      name: 'Classic Denim Jacket',
      brand: 'GEAR CO.',
      category: 'hoodies',
      price: 179.99,
      originalPrice: 199.99,
      rating: 4.6,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5e?w=400&h=400&fit=crop',
      colors: ['Blue', 'Black'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      isOnSale: true,
      inStock: true
    }
  ];

  const brands = ['BANGIN', 'GEAR CO.', 'URBAN', 'FUTURE', 'MINIMAL'];
  const colors = ['Black', 'White', 'Gray', 'Neon Green', 'Blue', 'Navy', 'Olive', 'Red'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '7', '8', '9', '10', '11', 'One Size'];

  // Initialize filters from URL params on mount
  useEffect(() => {
    const urlBrands = searchParams.get('brands');
    const urlColors = searchParams.get('colors');
    const urlSizes = searchParams.get('sizes');
    const urlPriceMin = searchParams.get('priceMin');
    const urlPriceMax = searchParams.get('priceMax');
    const urlInStock = searchParams.get('inStock');
    const urlOnSale = searchParams.get('onSale');

    if (urlBrands) setSelectedBrands(urlBrands.split(','));
    if (urlColors) setSelectedColors(urlColors.split(','));
    if (urlSizes) setSelectedSizes(urlSizes.split(','));
    if (urlPriceMin || urlPriceMax) {
      setPriceRange([
        urlPriceMin ? parseInt(urlPriceMin) : 0,
        urlPriceMax ? parseInt(urlPriceMax) : 500
      ]);
    }
    if (urlInStock) setInStockOnly(urlInStock === 'true');
    if (urlOnSale) setOnSaleOnly(urlOnSale === 'true');
  }, [searchParams]);

  // Update URL when filters change
  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    
    // Update filter params
    if (selectedBrands.length > 0) {
      newParams.set('brands', selectedBrands.join(','));
    } else {
      newParams.delete('brands');
    }
    
    if (selectedColors.length > 0) {
      newParams.set('colors', selectedColors.join(','));
    } else {
      newParams.delete('colors');
    }
    
    if (selectedSizes.length > 0) {
      newParams.set('sizes', selectedSizes.join(','));
    } else {
      newParams.delete('sizes');
    }
    
    if (priceRange[0] !== 0 || priceRange[1] !== 500) {
      newParams.set('priceMin', priceRange[0].toString());
      newParams.set('priceMax', priceRange[1].toString());
    } else {
      newParams.delete('priceMin');
      newParams.delete('priceMax');
    }
    
    if (inStockOnly) {
      newParams.set('inStock', 'true');
    } else {
      newParams.delete('inStock');
    }
    
    if (onSaleOnly) {
      newParams.set('onSale', 'true');
    } else {
      newParams.delete('onSale');
    }

    setSearchParams(newParams, { replace: true });
  }, [selectedBrands, selectedColors, selectedSizes, priceRange, inStockOnly, onSaleOnly, setSearchParams]);

  // Enhanced search that includes brand and category matching
  const filteredProducts = allProducts.filter(product => {
    // Category filter
    if (category && product.category !== category) return false;
    
    // Enhanced search filter - search in name, brand, and category
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      const searchInName = product.name.toLowerCase().includes(query);
      const searchInBrand = product.brand.toLowerCase().includes(query);
      const searchInCategory = product.category.toLowerCase().includes(query);
      
      if (!searchInName && !searchInBrand && !searchInCategory) return false;
    }
    
    // Special filters
    if (filterParam === 'new' && !product.isNew) return false;
    if (filterParam === 'sale' && !product.isOnSale) return false;
    
    // Price filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    // Brand filter
    if (selectedBrands.length > 0 && !selectedBrands.includes(product.brand)) return false;
    
    // Color filter
    if (selectedColors.length > 0 && !product.colors.some(color => selectedColors.includes(color))) return false;
    
    // Size filter
    if (selectedSizes.length > 0 && !product.sizes.some(size => selectedSizes.includes(size))) return false;
    
    // Stock filter
    if (inStockOnly && !product.inStock) return false;
    
    // Sale filter
    if (onSaleOnly && !product.isOnSale) return false;
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      default:
        return 0; // featured
    }
  });

  const handleSortChange = (value: string) => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set('sort', value);
    setSearchParams(newParams);
  };

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors(prev => 
      prev.includes(color) 
        ? prev.filter(c => c !== color)
        : [...prev, color]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size) 
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 500]);
    setSelectedBrands([]);
    setSelectedColors([]);
    setSelectedSizes([]);
    setInStockOnly(false);
    setOnSaleOnly(false);
    
    // Clear URL params as well
    const newParams = new URLSearchParams(searchParams);
    newParams.delete('brands');
    newParams.delete('colors');
    newParams.delete('sizes');
    newParams.delete('priceMin');
    newParams.delete('priceMax');
    newParams.delete('inStock');
    newParams.delete('onSale');
    setSearchParams(newParams, { replace: true });
    
    toast.success('All filters cleared');
  };

  const removeFilter = (type: string, value?: string) => {
    switch (type) {
      case 'brand':
        if (value) setSelectedBrands(prev => prev.filter(b => b !== value));
        break;
      case 'color':
        if (value) setSelectedColors(prev => prev.filter(c => c !== value));
        break;
      case 'size':
        if (value) setSelectedSizes(prev => prev.filter(s => s !== value));
        break;
      case 'priceRange':
        setPriceRange([0, 500]);
        break;
      case 'inStock':
        setInStockOnly(false);
        break;
      case 'onSale':
        setOnSaleOnly(false);
        break;
    }
  };

  // Count active filters
  const activeFiltersCount = selectedBrands.length + selectedColors.length + selectedSizes.length + 
    (priceRange[0] !== 0 || priceRange[1] !== 500 ? 1 : 0) + 
    (inStockOnly ? 1 : 0) + (onSaleOnly ? 1 : 0);

  const categoryName = category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All Products';

  const FiltersContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h3 className="font-heading font-semibold">Filters</h3>
          {activeFiltersCount > 0 && (
            <Badge variant="secondary" className="text-xs">
              {activeFiltersCount}
            </Badge>
          )}
        </div>
        <Button variant="ghost" size="sm" onClick={clearFilters} disabled={activeFiltersCount === 0}>
          Clear All
        </Button>
      </div>

      {/* Active Filters */}
      {activeFiltersCount > 0 && (
        <div className="space-y-2">
          <Label className="text-xs font-medium text-muted-foreground">Active Filters</Label>
          <div className="flex flex-wrap gap-1">
            {selectedBrands.map(brand => (
              <Badge key={brand} variant="outline" className="text-xs">
                {brand}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFilter('brand', brand)}
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            ))}
            {selectedColors.map(color => (
              <Badge key={color} variant="outline" className="text-xs">
                {color}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFilter('color', color)}
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            ))}
            {selectedSizes.map(size => (
              <Badge key={size} variant="outline" className="text-xs">
                {size}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFilter('size', size)}
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            ))}
            {(priceRange[0] !== 0 || priceRange[1] !== 500) && (
              <Badge variant="outline" className="text-xs">
                £{priceRange[0]} - £{priceRange[1]}
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFilter('priceRange')}
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            )}
            {inStockOnly && (
              <Badge variant="outline" className="text-xs">
                In Stock
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFilter('inStock')}
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            )}
            {onSaleOnly && (
              <Badge variant="outline" className="text-xs">
                On Sale
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-3 w-3 ml-1 hover:bg-destructive hover:text-destructive-foreground"
                  onClick={() => removeFilter('onSale')}
                >
                  <X className="h-2 w-2" />
                </Button>
              </Badge>
            )}
          </div>
        </div>
      )}

      {/* Price Range */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Price Range</Label>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={500}
          step={10}
          className="mb-2"
        />
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>£{priceRange[0]}</span>
          <span>£{priceRange[1]}</span>
        </div>
      </div>

      {/* Brands */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Brands</Label>
        <div className="space-y-2">
          {brands.map(brand => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox 
                id={`brand-${brand}`}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedBrands(prev => [...prev, brand]);
                  } else {
                    setSelectedBrands(prev => prev.filter(b => b !== brand));
                  }
                }}
              />
              <Label htmlFor={`brand-${brand}`} className="text-sm cursor-pointer">
                {brand}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Colors */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Colors</Label>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <Button
              key={color}
              variant={selectedColors.includes(color) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleColor(color)}
              className="text-xs"
            >
              {color}
            </Button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <Label className="text-sm font-medium mb-3 block">Sizes</Label>
        <div className="flex flex-wrap gap-2">
          {sizes.map(size => (
            <Button
              key={size}
              variant={selectedSizes.includes(size) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleSize(size)}
              className="text-xs w-12 h-8"
            >
              {size}
            </Button>
          ))}
        </div>
      </div>

      {/* Other Filters */}
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="instock"
            checked={inStockOnly}
            onCheckedChange={(checked) => setInStockOnly(Boolean(checked))}
          />
          <Label htmlFor="instock" className="text-sm cursor-pointer">
            In Stock Only
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox 
            id="onsale"
            checked={onSaleOnly}
            onCheckedChange={(checked) => setOnSaleOnly(Boolean(checked))}
          />
          <Label htmlFor="onsale" className="text-sm cursor-pointer">
            On Sale Only
          </Label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="font-heading text-3xl font-bold mb-2">
            {searchQuery ? `Search results for "${searchQuery}"` : categoryName}
          </h1>
          <p className="text-muted-foreground">
            {sortedProducts.length} product{sortedProducts.length !== 1 ? 's' : ''} found
            {activeFiltersCount > 0 && ` with ${activeFiltersCount} filter${activeFiltersCount !== 1 ? 's' : ''} applied`}
          </p>
        </div>

        <div className="flex gap-8">
          {/* Desktop Filters */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <FiltersContent />
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                {/* Mobile Filters */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden">
                      <SlidersHorizontal className="w-4 h-4 mr-2" />
                      Filters
                      {activeFiltersCount > 0 && (
                        <Badge variant="secondary" className="ml-2 text-xs">
                          {activeFiltersCount}
                        </Badge>
                      )}
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FiltersContent />
                    </div>
                  </SheetContent>
                </Sheet>

                {/* View Mode */}
                <div className="hidden sm:flex items-center border rounded-lg p-1">
                  <Button
                    variant={viewMode === 'grid' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="w-4 h-4" />
                  </Button>
                  <Button
                    variant={viewMode === 'list' ? 'default' : 'ghost'}
                    size="sm"
                    onClick={() => setViewMode('list')}
                  >
                    <List className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Sort */}
              <Select value={sortBy} onValueChange={handleSortChange}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className={
              viewMode === 'grid' 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                : "space-y-4"
            }>
              {sortedProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className={`group cursor-pointer hover:shadow-lg transition-shadow ${
                    viewMode === 'list' ? 'flex-row' : ''
                  }`}
                  asChild
                >
                  <Link to={`/product/${product.slug}`}>
                    <CardContent className={`p-0 ${viewMode === 'list' ? 'flex' : ''}`}>
                      <div className={`relative overflow-hidden ${
                        viewMode === 'list' 
                          ? 'w-48 h-48 rounded-l-lg' 
                          : 'aspect-square rounded-t-lg'
                      }`}>
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
                        {!product.inStock && (
                          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <Badge variant="secondary">Out of Stock</Badge>
                          </div>
                        )}
                      </div>
                      <div className={`p-4 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                        <div>
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

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <Filter className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search terms
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Search, Calendar, User, ArrowRight } from 'lucide-react';

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const blogPosts = [
    {
      id: 1,
      slug: 'future-of-streetwear-2024',
      title: 'The Future of Streetwear: Trends to Watch in 2024',
      excerpt: 'Discover the cutting-edge trends shaping the streetwear landscape this year, from sustainable materials to tech-infused designs.',
      coverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=400&fit=crop',
      author: 'Alex Chen',
      publishedAt: '2024-01-15',
      category: 'trends',
      readTime: '5 min read',
      featured: true
    },
    {
      id: 2,
      slug: 'sustainable-fashion-streetwear',
      title: 'Sustainable Fashion Meets Street Style',
      excerpt: 'How eco-conscious brands are revolutionizing streetwear with sustainable practices and innovative materials.',
      coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=400&fit=crop',
      author: 'Jamie Rodriguez',
      publishedAt: '2024-01-12',
      category: 'sustainability',
      readTime: '4 min read'
    },
    {
      id: 3,
      slug: 'styling-guide-winter-streetwear',
      title: 'Winter Streetwear: Staying Warm While Looking Cool',
      excerpt: 'Master the art of layering and discover the essential pieces for creating standout winter street looks.',
      coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=400&fit=crop',
      author: 'Morgan Kim',
      publishedAt: '2024-01-08',
      category: 'styling',
      readTime: '6 min read'
    },
    {
      id: 4,
      slug: 'sneaker-culture-evolution',
      title: 'The Evolution of Sneaker Culture',
      excerpt: 'From basketball courts to fashion runways: how sneakers became the cornerstone of modern streetwear.',
      coverImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=400&fit=crop',
      author: 'Taylor Johnson',
      publishedAt: '2024-01-05',
      category: 'culture',
      readTime: '7 min read'
    },
    {
      id: 5,
      slug: 'neon-colors-streetwear-trend',
      title: 'Neon Revival: Bold Colors Take Over the Streets',
      excerpt: 'Why neon and fluorescent colors are making a major comeback in contemporary streetwear fashion.',
      coverImage: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=400&fit=crop',
      author: 'Casey Wu',
      publishedAt: '2024-01-01',
      category: 'trends',
      readTime: '3 min read'
    },
    {
      id: 6,
      slug: 'streetwear-brand-collaborations',
      title: 'Epic Brand Collaborations That Shook the Streetwear World',
      excerpt: 'Exploring the most influential partnerships between streetwear brands and their impact on fashion culture.',
      coverImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&h=400&fit=crop',
      author: 'Riley Park',
      publishedAt: '2023-12-28',
      category: 'culture',
      readTime: '8 min read'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Posts', count: blogPosts.length },
    { id: 'trends', name: 'Trends', count: blogPosts.filter(post => post.category === 'trends').length },
    { id: 'styling', name: 'Styling', count: blogPosts.filter(post => post.category === 'styling').length },
    { id: 'culture', name: 'Culture', count: blogPosts.filter(post => post.category === 'culture').length },
    { id: 'sustainability', name: 'Sustainability', count: blogPosts.filter(post => post.category === 'sustainability').length }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-heading text-4xl font-bold mb-4">Bangin Blog</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with the latest in streetwear culture, trends, and style inspiration.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                {category.name} ({category.count})
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === 'all' && searchQuery === '' && (
          <div className="mb-12">
            <h2 className="font-heading text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="aspect-video md:h-full relative overflow-hidden">
                    <ImageWithFallback
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      Featured
                    </Badge>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="capitalize">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${featuredPost.slug}`}
                    className="block group"
                  >
                    <h3 className="font-heading text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {featuredPost.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                      <Calendar className="w-4 h-4 ml-2" />
                      <span>{new Date(featuredPost.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${featuredPost.slug}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="aspect-video relative overflow-hidden">
                <ImageWithFallback
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="outline" className="capitalize">
                    {post.category}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                </div>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="block group"
                >
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="w-3 h-3" />
                    <span>{post.author}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="font-heading text-xl font-semibold mb-2">No articles found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or browse all categories
            </p>
            <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
              Show All Posts
            </Button>
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="font-heading text-2xl font-bold mb-4">
                Stay Updated with Street Culture
              </h3>
              <p className="mb-6 opacity-90">
                Get the latest articles, style tips, and exclusive content delivered to your inbox.
              </p>
              <div className="flex max-w-md mx-auto gap-2">
                <Input 
                  placeholder="Enter your email" 
                  className="bg-background text-foreground"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
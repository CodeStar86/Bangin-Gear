import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { 
  Calendar, 
  User, 
  Clock, 
  ArrowLeft, 
  Share2, 
  Heart,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';
import { toast } from 'sonner';

export function BlogPostPage() {
  const { slug } = useParams();

  // Mock blog post data
  const blogPost = {
    id: 1,
    slug: 'future-of-streetwear-2024',
    title: 'The Future of Streetwear: Trends to Watch in 2024',
    excerpt: 'Discover the cutting-edge trends shaping the streetwear landscape this year, from sustainable materials to tech-infused designs.',
    coverImage: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1200&h=600&fit=crop',
    author: {
      name: 'Alex Chen',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      bio: 'Fashion journalist and streetwear enthusiast with over 10 years of experience covering urban culture.'
    },
    publishedAt: '2024-01-15',
    category: 'trends',
    readTime: '5 min read',
    content: `
      <p>Streetwear has evolved from its humble beginnings in skate parks and hip-hop culture to become one of the most influential forces in contemporary fashion. As we move through 2024, several key trends are reshaping the landscape of urban fashion.</p>

      <h2>Sustainable Materials Lead the Way</h2>
      <p>Environmental consciousness is no longer just a trend—it's becoming a necessity. Leading streetwear brands are investing heavily in sustainable materials, from recycled polyester made from ocean plastic to innovative bio-fabrics derived from mushroom mycelium.</p>
      
      <p>Brands like Bangin Gear are pioneering the use of organic cotton and hemp blends that maintain the durability and comfort streetwear enthusiasts expect while significantly reducing environmental impact. This shift represents a fundamental change in how we think about fashion consumption.</p>

      <h2>Tech Integration in Everyday Wear</h2>
      <p>The boundary between fashion and technology continues to blur. Smart fabrics that regulate temperature, moisture-wicking materials that adapt to weather conditions, and even garments with integrated LED displays are moving from concept to reality.</p>

      <p>We're seeing hoodies with built-in wireless charging capabilities, sneakers that track your steps and adjust cushioning accordingly, and jackets that change color based on your mood or the environment. This isn't just about gadgets—it's about creating clothing that truly enhances the wearer's daily experience.</p>

      <h2>Gender-Neutral Design Philosophy</h2>
      <p>The future of streetwear is decidedly unisex. Brands are moving away from traditional gendered collections toward a more inclusive design philosophy that prioritizes fit, functionality, and style over arbitrary gender categories.</p>

      <p>This shift reflects broader cultural changes and allows for more creative freedom in design. Oversized silhouettes, neutral color palettes, and versatile pieces that can be styled multiple ways are becoming the norm rather than the exception.</p>

      <h2>Digital-First Brand Experiences</h2>
      <p>The rise of digital natives has fundamentally changed how streetwear brands interact with their audiences. Virtual try-on experiences, augmented reality filters, and exclusive digital drops are becoming standard practice.</p>

      <p>NFTs and blockchain technology are also playing an increasingly important role, with brands offering digital collectibles and proof of authenticity for limited releases. This digital-first approach creates new forms of exclusivity and community engagement.</p>

      <h2>Conclusion</h2>
      <p>The future of streetwear is bright, sustainable, and more inclusive than ever. As these trends continue to evolve, we can expect to see even more innovation in materials, technology, and design philosophy. The brands that embrace these changes while staying true to streetwear's authentic roots will be the ones that define the next decade of urban fashion.</p>

      <p>What trends are you most excited about? Let us know in the comments below or share your thoughts on social media using #BanginFuture.</p>
    `,
    tags: ['streetwear', 'fashion trends', 'sustainability', 'technology', 'future fashion']
  };

  const relatedPosts = [
    {
      id: 2,
      slug: 'sustainable-fashion-streetwear',
      title: 'Sustainable Fashion Meets Street Style',
      coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop',
      publishedAt: '2024-01-12'
    },
    {
      id: 3,
      slug: 'styling-guide-winter-streetwear',
      title: 'Winter Streetwear: Staying Warm While Looking Cool',
      coverImage: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop',
      publishedAt: '2024-01-08'
    },
    {
      id: 4,
      slug: 'sneaker-culture-evolution',
      title: 'The Evolution of Sneaker Culture',
      coverImage: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=200&fit=crop',
      publishedAt: '2024-01-05'
    }
  ];

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = blogPost.title;
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        toast.success('Link copied to clipboard');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleLike = () => {
    toast.success('Thanks for liking this article!');
  };

  if (!blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-bold mb-2">Article not found</h2>
          <p className="text-muted-foreground mb-4">The article you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Button variant="ghost" className="mb-6" asChild>
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>

        {/* Article Header */}
        <article>
          <header className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline" className="capitalize">
                {blogPost.category}
              </Badge>
              <span className="text-sm text-muted-foreground">{blogPost.readTime}</span>
            </div>
            
            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              {blogPost.title}
            </h1>
            
            <p className="text-lg text-muted-foreground mb-6">
              {blogPost.excerpt}
            </p>

            {/* Author and Meta Info */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <ImageWithFallback
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium">{blogPost.author.name}</div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(blogPost.publishedAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {blogPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" onClick={handleLike}>
                  <Heart className="w-4 h-4 mr-1" />
                  Like
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('facebook')}>
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('copy')}>
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="aspect-video rounded-lg overflow-hidden mb-8">
            <ImageWithFallback
              src={blogPost.coverImage}
              alt={blogPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-8">
            <div 
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
              className="space-y-6 text-foreground"
            />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {blogPost.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                #{tag}
              </Badge>
            ))}
          </div>

          <Separator className="mb-8" />

          {/* Author Bio */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <ImageWithFallback
                    src={blogPost.author.avatar}
                    alt={blogPost.author.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-semibold mb-2">
                    {blogPost.author.name}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {blogPost.author.bio}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Related Posts */}
          <section>
            <h2 className="font-heading text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-shadow">
                  <Link to={`/blog/${post.slug}`}>
                    <div className="aspect-video overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-heading font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="text-sm text-muted-foreground">
                        {new Date(post.publishedAt).toLocaleDateString()}
                      </div>
                    </CardContent>
                  </Link>
                </Card>
              ))}
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
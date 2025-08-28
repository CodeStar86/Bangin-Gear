import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Zap, Target, Heart, Users, Recycle, Award } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Pushing the boundaries of streetwear design with cutting-edge materials and bold graphics.'
    },
    {
      icon: Target,
      title: 'Authenticity',
      description: 'Staying true to street culture while creating original designs that make a statement.'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Building a global community of creatives, rebels, and style pioneers.'
    },
    {
      icon: Recycle,
      title: 'Sustainability',
      description: 'Committed to ethical production and environmentally responsible practices.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'The Beginning',
      description: 'Started as a small collective of street artists and designers in East London.'
    },
    {
      year: '2019',
      title: 'First Collection',
      description: 'Launched our debut collection with limited edition graphic tees and hoodies.'
    },
    {
      year: '2020',
      title: 'Going Digital',
      description: 'Expanded online and reached customers across the UK during the pandemic.'
    },
    {
      year: '2021',
      title: 'Sustainability Focus',
      description: 'Launched our eco-friendly line using 100% organic cotton and recycled materials.'
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Opened markets in the US, Canada, and Australia.'
    },
    {
      year: '2023',
      title: 'Flagship Store',
      description: 'Opened our first flagship store in Shoreditch, London.'
    },
    {
      year: '2024',
      title: 'Future Vision',
      description: 'Continuing to innovate with new collaborations and sustainable practices.'
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '200+', label: 'Unique Designs' },
    { number: '15', label: 'Countries Served' },
    { number: '100%', label: 'Organic Cotton' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-90" />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            About Bangin Gear
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Born from the streets, designed for the future. We're redefining streetwear culture one piece at a time.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Our Story */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Story</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Bangin Gear started in 2018 when a group of street artists and fashion rebels came together 
                in East London's creative underground. Frustrated by mass-produced fashion that lacked soul, 
                we set out to create something different.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Our mission was simple: design streetwear that actually represents street culture. Every 
                piece tells a story, every design pushes boundaries, and every collection reflects the 
                energy of urban life.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we're a global brand but we've never forgotten our roots. We're still the same 
                rebels, still pushing creative limits, still bangin'.
              </p>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop"
                alt="Bangin Gear Story"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="absolute top-4 right-4">
                <Badge className="bg-primary text-primary-foreground">
                  Est. 2018
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from design to production to customer service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <Card className="bg-gradient-to-r from-primary to-accent text-primary-foreground">
            <CardContent className="p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="font-display text-3xl md:text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Timeline */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From humble beginnings to global streetwear brand - here's how we got here.
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                    <span className="font-heading font-bold text-primary-foreground text-sm">
                      {item.year}
                    </span>
                  </div>
                </div>
                <Card className="flex-1">
                  <CardContent className="p-6">
                    <h3 className="font-heading font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">The Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the creative minds behind Bangin Gear's innovative designs and culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Alex Chen',
                role: 'Creative Director',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop'
              },
              {
                name: 'Maya Rodriguez',
                role: 'Head of Design',
                image: 'https://images.unsplash.com/photo-1494790108755-2616b2ad5762?w=300&h=300&fit=crop'
              },
              {
                name: 'Jordan Kim',
                role: 'Sustainability Lead',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
              }
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-heading font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
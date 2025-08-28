import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Briefcase, MapPin, Clock, Users, Heart, Zap, Target, Award } from 'lucide-react';

export function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobs = [
    {
      id: 1,
      title: 'Senior Graphic Designer',
      department: 'Design',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£45,000 - £55,000',
      description: 'Lead creative direction for streetwear graphics and brand identity across all channels.'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      department: 'Technology',
      location: 'Remote',
      type: 'Full-time',
      salary: '£40,000 - £60,000',
      description: 'Build and maintain our e-commerce platform using React, TypeScript, and modern web technologies.'
    },
    {
      id: 3,
      title: 'Social Media Manager',
      department: 'Marketing',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£30,000 - £40,000',
      description: 'Drive our social presence and community engagement across Instagram, TikTok, and Twitter.'
    },
    {
      id: 4,
      title: 'Supply Chain Coordinator',
      department: 'Operations',
      location: 'London, UK',
      type: 'Full-time',
      salary: '£35,000 - £45,000',
      description: 'Manage inventory, supplier relationships, and logistics for sustainable production.'
    }
  ];

  const departments = ['all', 'Design', 'Technology', 'Marketing', 'Operations'];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and gym membership'
    },
    {
      icon: Zap,
      title: 'Creative Freedom',
      description: 'Work on cutting-edge designs with full creative autonomy and flexible hours'
    },
    {
      icon: Target,
      title: 'Growth Opportunities',
      description: 'Learning budget, conference attendance, and clear career progression paths'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance bonuses, employee of the month, and public recognition for achievements'
    }
  ];

  const values = [
    {
      title: 'Authenticity',
      description: 'We stay true to street culture and never compromise on our values.',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop'
    },
    {
      title: 'Innovation',
      description: 'We push boundaries in design, technology, and sustainability.',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'
    },
    {
      title: 'Community',
      description: 'We build connections and support our global streetwear family.',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-90" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop"
          alt="Team working together"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Join the Culture
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Help us redefine streetwear and build the future of urban fashion. 
            We're looking for passionate creatives and innovators to join our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              View Open Positions
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-foreground">
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Company Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define what it means to be part of the Bangin Gear family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-video relative">
                  <ImageWithFallback
                    src={value.image}
                    alt={value.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We believe in taking care of our team so they can create amazing experiences for our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-2">Open Positions</h2>
              <p className="text-muted-foreground">Find your place in our growing team</p>
            </div>
            <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by department" />
              </SelectTrigger>
              <SelectContent>
                {departments.map((dept) => (
                  <SelectItem key={dept} value={dept}>
                    {dept === 'all' ? 'All Departments' : dept}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-4">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="font-heading text-xl font-semibold">{job.title}</h3>
                        <Badge variant="outline">{job.department}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-3">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {job.salary}
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline">Learn More</Button>
                      <Button>Apply Now</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <Card>
              <CardContent className="py-12 text-center">
                <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">No positions available</h3>
                <p className="text-muted-foreground mb-4">
                  We don't have any open positions in this department right now, but we're always growing.
                </p>
                <Button variant="outline">Join Our Talent Pool</Button>
              </CardContent>
            </Card>
          )}
        </section>

        {/* Application Form */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Don't see the right role? Get in touch!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" required />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="role">Interested Role</Label>
                    <Input id="role" placeholder="e.g., Marketing Manager" />
                  </div>
                  <div>
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">0-1 years</SelectItem>
                        <SelectItem value="junior">2-3 years</SelectItem>
                        <SelectItem value="mid">4-6 years</SelectItem>
                        <SelectItem value="senior">7+ years</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Tell us about yourself</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    placeholder="What makes you passionate about streetwear? What skills would you bring to our team?"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
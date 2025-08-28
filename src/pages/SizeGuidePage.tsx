import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Ruler, ShirtIcon, Package, Info } from 'lucide-react';

export function SizeGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState('hoodies');

  const sizeData = {
    hoodies: {
      title: 'Hoodies & Sweatshirts',
      sizes: [
        { size: 'XS', chest: '32-34', length: '25', shoulders: '16' },
        { size: 'S', chest: '36-38', length: '26', shoulders: '17' },
        { size: 'M', chest: '40-42', length: '27', shoulders: '18' },
        { size: 'L', chest: '44-46', length: '28', shoulders: '19' },
        { size: 'XL', chest: '48-50', length: '29', shoulders: '20' },
        { size: 'XXL', chest: '52-54', length: '30', shoulders: '21' }
      ]
    },
    tees: {
      title: 'T-Shirts',
      sizes: [
        { size: 'XS', chest: '30-32', length: '24', shoulders: '15' },
        { size: 'S', chest: '34-36', length: '25', shoulders: '16' },
        { size: 'M', chest: '38-40', length: '26', shoulders: '17' },
        { size: 'L', chest: '42-44', length: '27', shoulders: '18' },
        { size: 'XL', chest: '46-48', length: '28', shoulders: '19' },
        { size: 'XXL', chest: '50-52', length: '29', shoulders: '20' }
      ]
    },
    sneakers: {
      title: 'Sneakers',
      sizes: [
        { size: 'UK 6', us: '7', eu: '39', length: '24.5' },
        { size: 'UK 7', us: '8', eu: '40', length: '25.0' },
        { size: 'UK 8', us: '9', eu: '42', length: '26.0' },
        { size: 'UK 9', us: '10', eu: '43', length: '27.0' },
        { size: 'UK 10', us: '11', eu: '44', length: '28.0' },
        { size: 'UK 11', us: '12', eu: '45', length: '29.0' },
        { size: 'UK 12', us: '13', eu: '46', length: '30.0' }
      ]
    }
  };

  const measurementTips = [
    {
      icon: Ruler,
      title: 'Chest Measurement',
      description: 'Measure around the fullest part of your chest, keeping the tape horizontal.'
    },
    {
      icon: ShirtIcon,
      title: 'Length Measurement', 
      description: 'Measure from the highest point of the shoulder down to the desired length.'
    },
    {
      icon: Package,
      title: 'Shoulder Measurement',
      description: 'Measure from shoulder point to shoulder point across the back.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">Size Guide</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find your perfect fit with our comprehensive size guide. All measurements are in inches unless stated otherwise.
          </p>
        </div>

        {/* Size Tables */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Ruler className="w-5 h-5" />
              Size Charts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="hoodies">Hoodies</TabsTrigger>
                <TabsTrigger value="tees">T-Shirts</TabsTrigger>
                <TabsTrigger value="sneakers">Sneakers</TabsTrigger>
              </TabsList>

              {Object.entries(sizeData).map(([key, data]) => (
                <TabsContent key={key} value={key} className="mt-6">
                  <div className="mb-4">
                    <h3 className="font-heading text-xl font-semibold mb-2">{data.title}</h3>
                    <Badge variant="outline">All measurements in inches</Badge>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Size</TableHead>
                          {key === 'sneakers' ? (
                            <>
                              <TableHead>US Size</TableHead>
                              <TableHead>EU Size</TableHead>
                              <TableHead>Foot Length (cm)</TableHead>
                            </>
                          ) : (
                            <>
                              <TableHead>Chest</TableHead>
                              <TableHead>Length</TableHead>
                              <TableHead>Shoulders</TableHead>
                            </>
                          )}
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {data.sizes.map((size, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">{size.size}</TableCell>
                            {key === 'sneakers' ? (
                              <>
                                <TableCell>{(size as any).us}</TableCell>
                                <TableCell>{(size as any).eu}</TableCell>
                                <TableCell>{size.length}</TableCell>
                              </>
                            ) : (
                              <>
                                <TableCell>{(size as any).chest}</TableCell>
                                <TableCell>{size.length}</TableCell>
                                <TableCell>{(size as any).shoulders}</TableCell>
                              </>
                            )}
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Measurement Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {measurementTips.map((tip, index) => {
            const IconComponent = tip.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground">{tip.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Fit Guide */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Fit Guide</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-heading font-semibold mb-3">Regular Fit</h4>
                <p className="text-muted-foreground mb-3">
                  Our regular fit provides a comfortable, relaxed silhouette that's perfect for everyday wear. 
                  It offers freedom of movement while maintaining a clean, modern look.
                </p>
                <Badge variant="outline">Most T-Shirts & Casual Hoodies</Badge>
              </div>
              
              <div>
                <h4 className="font-heading font-semibold mb-3">Oversized Fit</h4>
                <p className="text-muted-foreground mb-3">
                  Our oversized fit is designed for that authentic streetwear look. Deliberately loose and 
                  comfortable, perfect for layering and making a style statement.
                </p>
                <Badge variant="outline">Statement Hoodies & Premium Tees</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Help Section */}
        <Card>
          <CardContent className="p-6 text-center">
            <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Info className="w-6 h-6 text-accent-foreground" />
            </div>
            <h3 className="font-heading text-lg font-semibold mb-2">Need Help with Sizing?</h3>
            <p className="text-muted-foreground mb-4">
              Still unsure about your size? Our customer service team is here to help you find the perfect fit.
            </p>
            <Button>Contact Support</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
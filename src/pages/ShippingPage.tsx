import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Truck, Package, RotateCcw, Clock, MapPin, CreditCard } from 'lucide-react';

export function ShippingPage() {
  const shippingOptions = [
    {
      name: 'Standard Shipping',
      price: 'Free on orders £75+',
      time: '3-5 business days',
      description: 'Reliable delivery with tracking included'
    },
    {
      name: 'Express Shipping',
      price: '£9.99',
      time: '1-2 business days',
      description: 'Fast delivery for when you need it quick'
    },
    {
      name: 'Next Day Delivery',
      price: '£15.99',
      time: '24 hours',
      description: 'Order by 2PM for next day delivery'
    }
  ];

  const countries = [
    { country: 'United Kingdom', deliveryTime: '3-5 days', cost: 'Free over £75' },
    { country: 'United States', deliveryTime: '5-7 days', cost: '£12.99' },
    { country: 'Canada', deliveryTime: '7-10 days', cost: '£15.99' },
    { country: 'Australia', deliveryTime: '10-14 days', cost: '£18.99' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">Shipping & Returns</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about getting your Bangin Gear delivered and our hassle-free return policy.
          </p>
        </div>

        {/* Shipping Information */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Truck className="w-5 h-5" />
                Shipping Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {shippingOptions.map((option, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-heading font-semibold">{option.name}</h3>
                    <Badge variant="outline">{option.price}</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {option.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{option.description}</p>
                  {index < shippingOptions.length - 1 && <Separator className="mt-6" />}
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        {/* International Shipping */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                International Shipping
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {countries.map((location, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h4 className="font-medium">{location.country}</h4>
                      <p className="text-sm text-muted-foreground">
                        Delivery: {location.deliveryTime}
                      </p>
                    </div>
                    <Badge variant="outline">{location.cost}</Badge>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> International orders may be subject to customs duties and taxes, 
                  which are the responsibility of the customer. Delivery times are estimates and may vary 
                  during peak seasons.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Processing & Fulfillment */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5" />
                Order Processing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-heading font-semibold mb-2">Processing Time</h4>
                <p className="text-muted-foreground">
                  Orders are processed within 1-2 business days (Monday-Friday, excluding holidays). 
                  You'll receive a confirmation email once your order ships with tracking information.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-heading font-semibold mb-2">Order Changes</h4>
                <p className="text-muted-foreground">
                  Need to modify your order? Contact us within 1 hour of placing your order. 
                  Once an order enters fulfillment, changes cannot be made.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-heading font-semibold mb-2">Tracking Your Order</h4>
                <p className="text-muted-foreground">
                  All orders include tracking. You can track your package using the link in your 
                  shipping confirmation email or in your account dashboard.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Returns Policy */}
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <RotateCcw className="w-5 h-5" />
                Returns & Exchanges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-heading font-semibold mb-2">30-Day Return Policy</h4>
                <p className="text-muted-foreground mb-4">
                  We want you to love your Bangin Gear! If you're not completely satisfied, 
                  you can return items within 30 days of delivery for a full refund.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-green-600 mb-2">✓ Returnable Items</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Unworn items with original tags</li>
                      <li>• Items in original packaging</li>
                      <li>• No signs of wear or damage</li>
                      <li>• All accessories included</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium text-red-600 mb-2">✗ Non-Returnable Items</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Worn or washed items</li>
                      <li>• Items without original tags</li>
                      <li>• Custom or personalized items</li>
                      <li>• Undergarments for hygiene reasons</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-heading font-semibold mb-2">Return Process</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Initiate Return</p>
                      <p className="text-sm text-muted-foreground">
                        Log into your account and select "Return Item" from your order history.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Print Return Label</p>
                      <p className="text-sm text-muted-foreground">
                        Download and print the prepaid return shipping label.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Send Your Return</p>
                      <p className="text-sm text-muted-foreground">
                        Package your items and drop off at any post office or schedule a pickup.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-bold">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Receive Refund</p>
                      <p className="text-sm text-muted-foreground">
                        Refunds are processed within 5-7 business days after we receive your return.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-heading font-semibold mb-2">Exchanges</h4>
                <p className="text-muted-foreground">
                  Need a different size or color? We offer free size exchanges within 30 days. 
                  Simply return your original item and place a new order for your preferred size. 
                  We'll refund the difference if there's a price change.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Refund Information */}
        <section>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Refund Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-heading font-semibold mb-2">Refund Timeline</h4>
                <p className="text-muted-foreground">
                  Refunds are processed within 5-7 business days after we receive and inspect 
                  your returned items. You'll receive an email confirmation when the refund is processed.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-heading font-semibold mb-2">Refund Method</h4>
                <p className="text-muted-foreground">
                  Refunds are issued to the original payment method used for the purchase. 
                  If you paid with a credit card, please allow 3-5 additional business days 
                  for the refund to appear on your statement.
                </p>
              </div>
              
              <Separator />
              
              <div>
                <h4 className="font-heading font-semibold mb-2">Return Shipping</h4>
                <p className="text-muted-foreground">
                  Return shipping is free for defective items or our errors. For other returns, 
                  a £3.99 return shipping fee will be deducted from your refund.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
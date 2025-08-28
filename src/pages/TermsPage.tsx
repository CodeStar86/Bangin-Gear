import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { FileText, Scale, CreditCard, Truck, Shield } from 'lucide-react';

export function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">Terms of Service</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="outline">Last Updated: January 1, 2024</Badge>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            These terms and conditions govern your use of our website and purchase of our products.
          </p>
        </div>

        {/* Acceptance of Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Scale className="w-5 h-5" />
              Acceptance of Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the Bangin Gear website, you accept and agree to be bound by 
              the terms and provision of this agreement. If you do not agree to abide by the above, 
              please do not use this service.
            </p>
          </CardContent>
        </Card>

        {/* Products and Orders */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Products and Orders
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-heading font-semibold mb-2">Product Information</h4>
              <p className="text-muted-foreground">
                We strive to display product colors and images as accurately as possible. However, 
                actual colors may vary depending on your monitor settings. Product descriptions and 
                specifications are subject to change without notice.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-heading font-semibold mb-2">Pricing and Availability</h4>
              <p className="text-muted-foreground">
                All prices are listed in British Pounds (£) and include VAT where applicable. 
                Prices are subject to change without notice. Product availability is not guaranteed 
                until your order is confirmed and payment is processed.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-heading font-semibold mb-2">Order Acceptance</h4>
              <p className="text-muted-foreground">
                Your order is an offer to buy. We reserve the right to refuse or cancel any order 
                for any reason, including but not limited to product availability, errors in product 
                or pricing information, or suspected fraudulent activity.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Payment and Billing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Payment and Billing</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-heading font-semibold mb-2">Payment Methods</h4>
              <p className="text-muted-foreground">
                We accept major credit cards, PayPal, Apple Pay, Google Pay, and other payment 
                methods as displayed at checkout. Payment is due at the time of purchase.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-2">Billing Information</h4>
              <p className="text-muted-foreground">
                You must provide accurate and complete billing information. You authorize us to 
                charge the payment method provided for all fees and charges incurred.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Shipping and Delivery */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5" />
              Shipping and Delivery
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-heading font-semibold mb-2">Delivery Times</h4>
              <p className="text-muted-foreground">
                Delivery times are estimates and may vary. We are not responsible for delays 
                caused by shipping carriers, customs, or other factors beyond our control.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-2">Risk of Loss</h4>
              <p className="text-muted-foreground">
                Risk of loss and title for products pass to you upon delivery to the shipping carrier.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Intellectual Property */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Intellectual Property
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-heading font-semibold mb-2">Trademarks and Copyrights</h4>
              <p className="text-muted-foreground">
                All content on this website, including but not limited to text, graphics, logos, 
                images, and software, is the property of Bangin Gear Limited and is protected by 
                copyright and trademark laws.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-2">Limited License</h4>
              <p className="text-muted-foreground">
                You are granted a limited, non-exclusive license to access and use this website 
                for personal, non-commercial purposes only.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* User Conduct */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>User Conduct</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              You agree not to use this website to:
            </p>
            <ul className="text-muted-foreground space-y-1 ml-4">
              <li>• Violate any applicable laws or regulations</li>
              <li>• Infringe on intellectual property rights</li>
              <li>• Transmit harmful or malicious code</li>
              <li>• Interfere with website functionality</li>
              <li>• Collect user information without consent</li>
              <li>• Engage in fraudulent activities</li>
            </ul>
          </CardContent>
        </Card>

        {/* Disclaimers and Limitation of Liability */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Disclaimers and Limitation of Liability</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-heading font-semibold mb-2">Website Disclaimer</h4>
              <p className="text-muted-foreground">
                This website is provided "as is" without any representations or warranties, 
                express or implied. We do not guarantee that the website will be uninterrupted 
                or error-free.
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-2">Limitation of Liability</h4>
              <p className="text-muted-foreground">
                In no event shall Bangin Gear Limited be liable for any indirect, incidental, 
                special, consequential, or punitive damages arising out of your use of the website 
                or products.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Changes to Terms */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5" />
              Changes to Terms
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              We reserve the right to modify these terms at any time. Changes will be effective 
              immediately upon posting on this website. Your continued use of the website 
              constitutes acceptance of the modified terms.
            </p>
          </CardContent>
        </Card>

        {/* Governing Law */}
        <Card>
          <CardHeader>
            <CardTitle>Governing Law and Jurisdiction</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              These terms shall be governed by and construed in accordance with the laws of 
              England and Wales. Any disputes arising under these terms shall be subject to 
              the exclusive jurisdiction of the courts of England and Wales.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
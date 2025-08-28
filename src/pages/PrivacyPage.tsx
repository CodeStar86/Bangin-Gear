import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { Shield, Eye, Lock, Database, Mail, Phone } from 'lucide-react';

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">Privacy Policy</h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="outline">Last Updated: January 1, 2024</Badge>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>

        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Introduction
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground leading-relaxed">
              Bangin Gear Limited ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or make a purchase from us. Please read this privacy policy 
              carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </CardContent>
        </Card>

        {/* Information We Collect */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Information We Collect
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-heading font-semibold mb-3">Personal Information</h4>
              <p className="text-muted-foreground mb-3">
                We may collect personal information that you voluntarily provide when you:
              </p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Create an account</li>
                <li>• Make a purchase</li>
                <li>• Subscribe to our newsletter</li>
                <li>• Contact customer service</li>
                <li>• Participate in surveys or promotions</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-heading font-semibold mb-3">Information Collected Automatically</h4>
              <p className="text-muted-foreground mb-3">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• IP address and device identifiers</li>
                <li>• Browser type and version</li>
                <li>• Operating system</li>
                <li>• Pages visited and time spent</li>
                <li>• Referring website</li>
                <li>• Location information (with your consent)</li>
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="font-heading font-semibold mb-3">Cookies and Tracking Technologies</h4>
              <p className="text-muted-foreground">
                We use cookies, web beacons, and similar tracking technologies to enhance your 
                browsing experience, analyze site traffic, and understand where our visitors are coming from.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How We Use Information */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Eye className="w-5 h-5" />
              How We Use Your Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              We use the information we collect for various purposes, including:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h5 className="font-medium">Business Operations</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Process and fulfill orders</li>
                  <li>• Manage customer accounts</li>
                  <li>• Provide customer support</li>
                  <li>• Send order confirmations</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h5 className="font-medium">Marketing & Communication</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Send promotional emails</li>
                  <li>• Personalize shopping experience</li>
                  <li>• Conduct market research</li>
                  <li>• Improve our services</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Information Sharing */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Information Sharing and Disclosure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>

            <div className="space-y-4">
              <div>
                <h5 className="font-medium">Service Providers</h5>
                <p className="text-sm text-muted-foreground">
                  We share information with trusted third-party service providers who assist us in 
                  operating our website, conducting business, or serving our customers.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium">Legal Requirements</h5>
                <p className="text-sm text-muted-foreground">
                  We may disclose information when required by law, regulation, legal process, 
                  or government request.
                </p>
              </div>
              
              <div>
                <h5 className="font-medium">Business Transfers</h5>
                <p className="text-sm text-muted-foreground">
                  In the event of a merger, acquisition, or sale of assets, customer information 
                  may be transferred to the new entity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Security */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Data Security
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2">Technical Safeguards</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• SSL encryption for data transmission</li>
                  <li>• Secure servers and databases</li>
                  <li>• Regular security audits</li>
                  <li>• Access controls and authentication</li>
                </ul>
              </div>
              
              <div className="p-4 border rounded-lg">
                <h5 className="font-medium mb-2">Organizational Measures</h5>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Employee training on data protection</li>
                  <li>• Limited access to personal data</li>
                  <li>• Data breach response procedures</li>
                  <li>• Regular policy updates</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Your Rights */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Rights and Choices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground mb-4">
              You have certain rights regarding your personal information:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-medium">Access and Portability</h5>
                  <p className="text-sm text-muted-foreground">
                    Request a copy of the personal information we hold about you.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-medium">Correction</h5>
                  <p className="text-sm text-muted-foreground">
                    Update or correct any inaccurate or incomplete information.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-medium">Deletion</h5>
                  <p className="text-sm text-muted-foreground">
                    Request deletion of your personal information, subject to legal requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                <div>
                  <h5 className="font-medium">Marketing Opt-out</h5>
                  <p className="text-sm text-muted-foreground">
                    Unsubscribe from marketing communications at any time.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              Contact Us
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or want to exercise your rights, 
              please contact us:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">privacy@bangingear.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">+44 20 1234 5678</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-4 h-4 text-muted-foreground mt-0.5">📍</div>
                <div className="text-sm">
                  <div>Bangin Gear Limited</div>
                  <div>123 Streetwear Lane</div>
                  <div>Shoreditch, London E1 6QE</div>
                  <div>United Kingdom</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
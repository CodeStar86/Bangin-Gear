import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { Search, HelpCircle, Package, CreditCard, RotateCcw, Truck } from 'lucide-react';

export function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqCategories = [
    {
      id: 'orders',
      name: 'Orders & Shipping',
      icon: Package,
      questions: [
        {
          question: 'How long does shipping take?',
          answer: 'Standard shipping takes 3-5 business days, while express shipping takes 1-2 business days. Free standard shipping is available on orders over £75.'
        },
        {
          question: 'Can I track my order?',
          answer: 'Yes! Once your order ships, you\'ll receive a tracking email with a link to track your package. You can also check your order status in your account dashboard.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Currently we ship to the UK, US, Canada, and Australia. International shipping rates vary by location and are calculated at checkout.'
        },
        {
          question: 'Can I change or cancel my order?',
          answer: 'Orders can be modified or cancelled within 1 hour of placement. After that, orders enter our fulfillment process and cannot be changed.'
        }
      ]
    },
    {
      id: 'returns',
      name: 'Returns & Exchanges',
      icon: RotateCcw,
      questions: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 30-day return window for unworn items with original tags. Items must be in original condition to qualify for a full refund.'
        },
        {
          question: 'How do I return an item?',
          answer: 'Log into your account, go to order history, and select "Return Item". Print the prepaid return label and drop off at any post office or schedule a pickup.'
        },
        {
          question: 'How long do refunds take?',
          answer: 'Refunds are processed within 5-7 business days after we receive your returned item. You\'ll receive an email confirmation when the refund is processed.'
        },
        {
          question: 'Can I exchange for a different size?',
          answer: 'Yes! We offer free size exchanges within 30 days. Simply return your original item and place a new order for your preferred size.'
        }
      ]
    },
    {
      id: 'products',
      name: 'Products & Sizing',
      icon: HelpCircle,
      questions: [
        {
          question: 'How do I find my size?',
          answer: 'Check our detailed size guide which includes measurements for all product categories. When in doubt, we recommend sizing up for our oversized streetwear fits.'
        },
        {
          question: 'Are your products sustainable?',
          answer: 'Yes! We\'re committed to sustainability. Our products use organic cotton, recycled materials, and eco-friendly dyes wherever possible.'
        },
        {
          question: 'How should I care for my Bangin Gear items?',
          answer: 'Wash in cold water, tumble dry low, and avoid bleach. Turn graphic tees inside out before washing to preserve prints. Check individual product care labels for specific instructions.'
        },
        {
          question: 'Do you restock sold out items?',
          answer: 'Popular items are typically restocked within 2-4 weeks. Sign up for restock notifications on product pages to be notified when items are available again.'
        }
      ]
    },
    {
      id: 'payment',
      name: 'Payment & Account',
      icon: CreditCard,
      questions: [
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and Klarna for buy now, pay later options.'
        },
        {
          question: 'Is my payment information secure?',
          answer: 'Absolutely. We use 256-bit SSL encryption and are PCI DSS compliant. We never store your full credit card information on our servers.'
        },
        {
          question: 'How do I create an account?',
          answer: 'Click "Sign Up" in the top right corner, or create one during checkout. Having an account lets you track orders, save favorites, and checkout faster.'
        },
        {
          question: 'I forgot my password. How do I reset it?',
          answer: 'Click "Forgot Password" on the sign-in page and enter your email. You\'ll receive a password reset link within a few minutes.'
        }
      ]
    }
  ];

  const filteredFAQs = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Find answers to common questions about orders, shipping, returns, and more.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* FAQ Categories */}
        {!searchQuery && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {faqCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Card key={category.id} className="text-center p-4 hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-sm font-semibold">{category.name}</h3>
                    <Badge variant="secondary" className="mt-2 text-xs">
                      {category.questions.length} questions
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* FAQ Content */}
        <div className="space-y-8">
          {filteredFAQs.length === 0 ? (
            <Card>
              <CardContent className="p-8 text-center">
                <Search className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="font-heading text-lg font-semibold mb-2">No results found</h3>
                <p className="text-muted-foreground">
                  Try adjusting your search terms or browse our categories above.
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredFAQs.map((category) => {
              const IconComponent = category.icon;
              return (
                <div key={category.id}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <IconComponent className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <h2 className="font-heading text-xl font-semibold">{category.name}</h2>
                  </div>
                  
                  <Card>
                    <CardContent className="p-0">
                      <Accordion type="single" collapsible>
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`${category.id}-${index}`}>
                            <AccordionTrigger className="px-6 text-left">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="px-6 pb-6">
                              <p className="text-muted-foreground leading-relaxed">
                                {faq.answer}
                              </p>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </div>
              );
            })
          )}
        </div>

        {/* Contact Section */}
        <Card className="mt-12">
          <CardContent className="p-8 text-center">
            <HelpCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="font-heading text-lg font-semibold mb-2">Still Need Help?</h3>
            <p className="text-muted-foreground mb-4">
              Can't find what you're looking for? Our customer service team is here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="outline" className="text-sm">
                📧 Email: support@bangingear.com
              </Badge>
              <Badge variant="outline" className="text-sm">
                📞 Phone: +44 20 1234 5678
              </Badge>
              <Badge variant="outline" className="text-sm">
                💬 Live Chat: Available 9AM-6PM GMT
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
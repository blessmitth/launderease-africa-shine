import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });
  
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.businessName || !formData.phone || !formData.service) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Request Submitted Successfully!",
      description: "We'll contact you within 24 hours to schedule your free audit."
    });

    // Reset form
    setFormData({
      name: "",
      businessName: "",
      phone: "",
      email: "",
      service: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-accent text-white py-20 african-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up">
            Get Your Free GMB Audit
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 fade-in-up">
            Let's discuss how we can help your laundry business attract more customers and grow online
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary-light text-secondary">
                Free Consultation
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Request Your Free GMB Audit
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Fill out the form below and we'll analyze your current online presence and provide 
                actionable recommendations to help you get found by more customers.
              </p>

              <Card className="service-card">
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="text-foreground font-semibold">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="mt-2"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>

                    {/* Business Name */}
                    <div>
                      <Label htmlFor="businessName" className="text-foreground font-semibold">
                        Business Name *
                      </Label>
                      <Input
                        id="businessName"
                        type="text"
                        value={formData.businessName}
                        onChange={(e) => handleInputChange('businessName', e.target.value)}
                        className="mt-2"
                        placeholder="Enter your laundry business name"
                        required
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <Label htmlFor="phone" className="text-foreground font-semibold">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-2"
                        placeholder="Enter your phone number"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="text-foreground font-semibold">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-2"
                        placeholder="Enter your email address"
                      />
                    </div>

                    {/* Service Interest */}
                    <div>
                      <Label className="text-foreground font-semibold">
                        Service of Interest *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select the service you're most interested in" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border shadow-lg">
                          <SelectItem value="gmb-optimization">GMB Optimization</SelectItem>
                          <SelectItem value="website-design">Website Design</SelectItem>
                          <SelectItem value="social-media">Social Media Management</SelectItem>
                          <SelectItem value="full-package">Complete Digital Marketing Package</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Additional Message */}
                    <div>
                      <Label htmlFor="message" className="text-foreground font-semibold">
                        Additional Information
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        className="mt-2 min-h-[100px]"
                        placeholder="Tell us more about your business and goals (optional)"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-accent to-secondary text-white font-semibold py-3"
                      size="lg"
                    >
                      Get My Free Audit Now
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8 text-center text-muted-foreground">
                <p className="text-sm">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <Badge variant="secondary" className="mb-4 bg-accent-light text-accent">
                  Contact Information
                </Badge>
                <h3 className="text-2xl font-bold text-primary mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Reach out to us through any of these channels. We're here to help your laundry business succeed online.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Mail className="w-8 h-8 text-accent bounce-hover" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">hello@launderease.africa</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Phone className="w-8 h-8 text-secondary bounce-hover" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">+27 11 xxx xxxx</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <MessageCircle className="w-8 h-8 text-earth-warm bounce-hover" />
                    <div>
                      <h4 className="font-semibold text-foreground">WhatsApp</h4>
                      <p className="text-muted-foreground">+27 xx xxx xxxx</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <MapPin className="w-8 h-8 text-accent bounce-hover" />
                    <div>
                      <h4 className="font-semibold text-foreground">Location</h4>
                      <p className="text-muted-foreground">Johannesburg, South Africa</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="service-card">
                  <CardContent className="p-6 flex items-center space-x-4">
                    <Clock className="w-8 h-8 text-secondary bounce-hover" />
                    <div>
                      <h4 className="font-semibold text-foreground">Business Hours</h4>
                      <p className="text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM CAT</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <Card className="service-card">
                <CardContent className="p-0">
                  <div className="bg-gradient-to-br from-accent-light to-secondary-light h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                      <h4 className="font-semibold text-foreground mb-2">Our Location</h4>
                      <p className="text-muted-foreground">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="service-card">
                <CardContent className="p-6 text-center">
                  <Clock className="w-12 h-12 text-secondary mx-auto mb-4 bounce-hover" />
                  <h4 className="text-xl font-bold text-primary mb-2">
                    Quick Response Guaranteed
                  </h4>
                  <p className="text-muted-foreground">
                    We respond to all inquiries within 24 hours. Urgent requests are handled immediately during business hours.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="service-card">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3">How long does the free audit take?</h4>
                <p className="text-muted-foreground">
                  We complete your GMB audit within 48-72 hours and schedule a call to discuss our findings and recommendations.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3">Do you work with small laundry businesses?</h4>
                <p className="text-muted-foreground">
                  Absolutely! We work with laundry businesses of all sizes, from single-location laundromats to multi-location chains.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3">What countries do you serve?</h4>
                <p className="text-muted-foreground">
                  We serve laundry businesses across Africa, with particular expertise in South Africa, Kenya, Nigeria, and Ghana.
                </p>
              </CardContent>
            </Card>

            <Card className="service-card">
              <CardContent className="p-6">
                <h4 className="font-bold text-primary mb-3">What happens after I submit the form?</h4>
                <p className="text-muted-foreground">
                  We'll contact you within 24 hours to schedule your free audit call and start analyzing your online presence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
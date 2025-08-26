import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Star, TrendingUp, Globe, Smartphone, Camera, MessageSquare, BarChart3, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-accent text-white py-20 african-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up">
            Our Digital Marketing Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 fade-in-up">
            Specialized marketing solutions designed for African laundry businesses to thrive online
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* GMB Optimization */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-secondary-light text-secondary">
                <MapPin className="w-4 h-4 mr-2" />
                Google My Business Optimization
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Get Found By Local Customers
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Dominate local search results and attract more customers to your laundry business across Africa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Why GMB Matters for Laundry Services</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Star className="w-6 h-6 text-accent mt-1 bounce-hover" />
                    <div>
                      <h4 className="font-semibold text-foreground">Higher Local Rankings</h4>
                      <p className="text-muted-foreground">Show up when customers search "laundry near me" or "dry cleaning services"</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <TrendingUp className="w-6 h-6 text-secondary mt-1 bounce-hover" />
                    <div>
                      <h4 className="font-semibold text-foreground">More Phone Calls</h4>
                      <p className="text-muted-foreground">Get direct calls from customers looking for pickup and delivery services</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-earth-warm mt-1 bounce-hover" />
                    <div>
                      <h4 className="font-semibold text-foreground">Accurate Business Information</h4>
                      <p className="text-muted-foreground">Ensure customers find your location, hours, and contact details easily</p>
                    </div>
                  </div>
                </div>
              </div>

              <Card className="service-card">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-4">What's Included</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">Keyword optimization for laundry services</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">Professional photo uploads</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">Review management system</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">Monthly performance reports</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">Competitor analysis</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Website Design */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-accent-light text-accent">
                <Globe className="w-4 h-4 mr-2" />
                Website Design & Redesign
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Professional Websites That Build Trust
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Custom websites designed specifically for laundry and dry cleaning businesses across Africa
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="service-card">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Smartphone className="w-8 h-8 text-secondary bounce-hover" />
                    <h3 className="text-2xl font-bold text-primary">Starter Site</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Perfect for small laundry businesses looking to establish an online presence
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">5-page professional website</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">Mobile-responsive design</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">Contact forms</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">Service pricing pages</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      <span className="text-foreground">Basic SEO setup</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-secondary to-accent">
                    Learn More
                  </Button>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Camera className="w-8 h-8 text-accent bounce-hover" />
                    <h3 className="text-2xl font-bold text-primary">Booking Funnel Site</h3>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Advanced website with online booking and payment systems for growing businesses
                  </p>
                  <div className="space-y-3 mb-8">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">Everything in Starter Site</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">Online booking system</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">Payment integration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">Customer portal</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-foreground">Advanced analytics</span>
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-to-r from-accent to-primary">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Social Media Management */}
          <div>
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4 bg-earth-light text-earth-warm">
                <MessageSquare className="w-4 h-4 mr-2" />
                Social Media Management
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Engage Customers on Social Media
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Build a strong social media presence that attracts and retains customers across Instagram, Facebook, and WhatsApp
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="service-card">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="w-12 h-12 text-accent mx-auto mb-4 bounce-hover" />
                  <h3 className="text-xl font-bold text-primary mb-3">Content Creation</h3>
                  <p className="text-muted-foreground">
                    Professional photos and videos showcasing your laundry services, before & after transformations
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-secondary mx-auto mb-4 bounce-hover" />
                  <h3 className="text-xl font-bold text-primary mb-3">Community Building</h3>
                  <p className="text-muted-foreground">
                    Engage with local customers, respond to comments, and build a loyal community around your brand
                  </p>
                </CardContent>
              </Card>

              <Card className="service-card">
                <CardContent className="p-6 text-center">
                  <TrendingUp className="w-12 h-12 text-earth-warm mx-auto mb-4 bounce-hover" />
                  <h3 className="text-xl font-bold text-primary mb-3">Targeted Advertising</h3>
                  <p className="text-muted-foreground">
                    Run targeted ads to reach potential customers in your local area looking for laundry services
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Grow Your Laundry Business?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get a free consultation and see how we can help you attract more customers
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">Get Your Free Audit Now</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
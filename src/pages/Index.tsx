import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Globe, 
  MessageSquare, 
  Star, 
  TrendingUp, 
  Users,
  ChevronLeft,
  ChevronRight,
  Quote
} from "lucide-react";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      headline: "Is Your Laundry Business Invisible Online?",
      subheadline: "We help you get found by customers across Africa.",
      ctaText: "See Our Services",
      ctaLink: "/services",
      bgImage: "/lovable-uploads/4851d1bc-c07b-4bbb-a9bc-d886ba773967.png",
      bgGradient: "bg-gradient-to-br from-primary/30 via-primary-light/30 to-accent/30"
    },
    {
      headline: "A Professional Website That Attracts Clients.",
      subheadline: "From simple landing pages to full booking systems.",
      ctaText: "View Case Studies",
      ctaLink: "/case-studies",
      bgImage: "/lovable-uploads/54b123bc-1aea-4eee-824b-c0a7049731a8.png",
      bgGradient: "bg-gradient-to-br from-accent/30 via-secondary/30 to-primary-light/30"
    },
    {
      headline: "Professional Laundry Services Made Easy.",
      subheadline: "Modern equipment and expert care for your business.",
      ctaText: "See Our Work",
      ctaLink: "/case-studies",
      bgImage: "/lovable-uploads/a95f80ef-d8a5-4558-ac7c-00af08fffc15.png",
      bgGradient: "bg-gradient-to-br from-secondary/30 via-accent/30 to-primary/30"
    },
    {
      headline: "Trust Your Laundry to the Experts.",
      subheadline: "Professional service with a personal touch.",
      ctaText: "Contact Us",
      ctaLink: "/contact",
      bgImage: "/lovable-uploads/a0065a1f-6da1-455e-bf9a-4cc30ba5bdb8.png",
      bgGradient: "bg-gradient-to-br from-primary/30 via-accent/30 to-secondary/30"
    },
    {
      headline: "Don't Just Wash, Shine Online.",
      subheadline: "Get your free GMB audit today.",
      ctaText: "Get Free Audit",
      ctaLink: "https://wa.me/27620719960?text=Hi! I'd like to get my free GMB audit for my laundry business.",
      bgImage: "/lovable-uploads/05e25a83-68fa-4f48-ba17-71f44bae40f0.png",
      bgGradient: "bg-gradient-to-br from-secondary/30 via-accent/30 to-primary/30"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const services = [
    {
      icon: MapPin,
      title: "GMB Optimization",
      description: "Get found by local customers searching for laundry services. Dominate Google Maps rankings in your area.",
      features: ["Local SEO", "Review Management", "Photo Optimization"]
    },
    {
      icon: Globe,
      title: "Website Design",
      description: "Professional websites that build trust and convert visitors into customers. Mobile-responsive and SEO-optimized.",
      features: ["Responsive Design", "Booking Systems", "Payment Integration"]
    },
    {
      icon: MessageSquare,
      title: "Social Media Management",
      description: "Engage customers on Instagram, Facebook, and WhatsApp. Build a strong brand presence across social platforms.",
      features: ["Content Creation", "Community Building", "Targeted Ads"]
    }
  ];

  const testimonials = [
    {
      name: "Amina Kone",
      business: "Clean & Fresh Laundromat",
      location: "Lagos, Nigeria",
      quote: "LaunderEase helped us get from zero online presence to being the top laundry service on Google Maps in our area.",
      rating: 5
    }
  ];

  const clientLogos = [
    "Nairobi Laundry Co.",
    "Cape Town Clean",
    "Fresh Wash Lagos", 
    "African Dry Clean",
    "Shine Laundromat"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Slider Section */}
      <section className="relative h-[70vh] md:h-[80vh] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${slide.bgGradient} text-white african-pattern`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute inset-0 bg-black/20"></div>
            <div className={`absolute inset-0 ${slide.bgGradient}`}></div>
            <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
              <div className="max-w-4xl">
                <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 ${
                  index === currentSlide ? 'fade-in-up' : ''
                }`}>
                  {slide.headline}
                </h1>
                <p className={`text-xl md:text-2xl lg:text-3xl mb-8 opacity-90 transition-all duration-700 delay-200 ${
                  index === currentSlide ? 'fade-in-up' : ''
                }`}>
                  {slide.subheadline}
                </p>
                <Button 
                  asChild 
                  size="lg"
                  className={`btn-hero text-lg px-8 py-4 transition-all duration-700 delay-400 ${
                    index === currentSlide ? 'fade-in-up' : ''
                  }`}
                >
                  {slide.ctaLink.startsWith('https://wa.me/') ? (
                    <a href={slide.ctaLink} target="_blank" rel="noopener noreferrer">{slide.ctaText}</a>
                  ) : (
                    <Link to={slide.ctaLink}>{slide.ctaText}</Link>
                  )}
                </Button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 z-10"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary-light text-secondary">
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 fade-in-up">
              Everything Your Laundry Business Needs to Succeed Online
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto fade-in-up">
              Specialized digital marketing solutions designed specifically for African laundry and dry cleaning businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="service-card group cursor-pointer">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-to-br from-accent-light to-secondary-light w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-10 h-10 text-accent bounce-hover" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-primary mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-gradient-to-r from-accent to-secondary">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-gradient-to-r from-accent-light to-secondary-light">
        <div className="container mx-auto px-4">
          {/* Client Logos */}
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-white/50 text-primary">
              Trusted by African Laundry Businesses
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8">
              Join 50+ Successful Laundry Businesses Across Africa
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {clientLogos.map((logo, index) => (
                <Card key={index} className="bg-white/80 hover:bg-white transition-colors duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto mb-3 flex items-center justify-center text-white font-bold">
                      {logo.split(' ').map(word => word[0]).join('')}
                    </div>
                    <p className="text-sm font-semibold text-primary">{logo}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          <div className="max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/90 border-none shadow-xl">
                <CardContent className="p-8 md:p-12 text-center">
                  <Quote className="w-12 h-12 text-accent mx-auto mb-6 opacity-50" />
                  
                  <blockquote className="text-xl md:text-2xl text-primary font-medium mb-8 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, starIndex) => (
                      <Star key={starIndex} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <div>
                    <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.business}</p>
                    <p className="text-sm text-accent font-medium">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Driving Real Results for African Laundry Businesses
            </h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="service-card text-center">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-secondary mx-auto mb-4 bounce-hover" />
                <div className="text-3xl font-bold text-primary mb-2">200%</div>
                <p className="text-muted-foreground">Average Revenue Growth</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-center">
              <CardContent className="p-8">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4 bounce-hover" />
                <div className="text-3xl font-bold text-primary mb-2">Top 3</div>
                <p className="text-muted-foreground">Google Maps Rankings</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-center">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-earth-warm mx-auto mb-4 bounce-hover" />
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <p className="text-muted-foreground">Happy Businesses</p>
              </CardContent>
            </Card>
            
            <Card className="service-card text-center">
              <CardContent className="p-8">
                <Star className="w-12 h-12 text-secondary mx-auto mb-4 bounce-hover" />
                <div className="text-3xl font-bold text-primary mb-2">4.8/5</div>
                <p className="text-muted-foreground">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-accent to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Laundry Business?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Get your free GMB audit and discover how to attract more customers, 
            increase your online visibility, and grow your revenue across Africa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg"
              variant="secondary"
              className="bg-white text-primary hover:bg-white/90 px-8 py-4 text-lg"
            >
              <a href="https://wa.me/27620719960?text=Hi! I'd like to get my free GMB audit for my laundry business." target="_blank" rel="noopener noreferrer">Get Your Free Audit Now</a>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="btn-outline-hero px-8 py-4 text-lg"
            >
              <Link to="/case-studies">See Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
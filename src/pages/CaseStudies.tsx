import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, MapPin, Star, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Nairobi Laundry Co.",
      location: "Nairobi, Kenya",
      subtitle: "From Page 3 to Top 3 on Google Maps",
      description: "A family-owned laundry service struggling with online visibility transformed their digital presence and tripled their customer base.",
      beforeImage: "/placeholder-before.jpg",
      afterImage: "/placeholder-after.jpg",
      metrics: [
        { label: "Google Maps Ranking", before: "Page 3", after: "Top 3", icon: MapPin },
        { label: "Monthly Bookings", before: "45", after: "+280%", icon: TrendingUp },
        { label: "Star Rating", before: "3.2", after: "4.8", icon: Star },
        { label: "Online Reviews", before: "12", after: "89", icon: Users }
      ],
      services: ["GMB Optimization", "Website Design", "Review Management"],
      timeline: "3 months",
      backgroundColor: "bg-gradient-to-br from-accent-light to-secondary-light"
    },
    {
      id: 2,
      title: "Cape Town Clean Express",
      location: "Cape Town, South Africa",
      subtitle: "Launching Online Booking System Increased Revenue by 150%",
      description: "A growing laundry business needed an efficient booking system to handle increased demand and streamline operations.",
      beforeImage: "/placeholder-before-2.jpg",
      afterImage: "/placeholder-after-2.jpg",
      metrics: [
        { label: "Online Bookings", before: "0%", after: "65%", icon: TrendingUp },
        { label: "Revenue Growth", before: "Baseline", after: "+150%", icon: TrendingUp },
        { label: "Customer Retention", before: "45%", after: "78%", icon: Users },
        { label: "Average Order Value", before: "R85", after: "R140", icon: Star }
      ],
      services: ["Booking Funnel Website", "Payment Integration", "Customer Portal"],
      timeline: "4 months",
      backgroundColor: "bg-gradient-to-br from-earth-light to-accent-light"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-accent text-white py-20 african-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up">
            Success Stories
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 fade-in-up">
            Real results from African laundry businesses we've helped grow online
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-secondary-light text-secondary">
              Proven Results
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Transforming Laundry Businesses Across Africa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how we've helped laundry service owners increase visibility, attract more customers, and grow their revenue
            </p>
          </div>

          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className={`overflow-hidden ${study.backgroundColor}`}>
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    {/* Content Section */}
                    <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <div className="flex items-center space-x-2 mb-4">
                        <MapPin className="w-5 h-5 text-muted-foreground" />
                        <span className="text-muted-foreground">{study.location}</span>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-primary mb-2">
                        {study.title}
                      </h3>
                      <h4 className="text-xl text-accent font-semibold mb-4">
                        {study.subtitle}
                      </h4>
                      
                      <p className="text-muted-foreground mb-8 text-lg">
                        {study.description}
                      </p>

                      {/* Services Used */}
                      <div className="mb-8">
                        <h5 className="font-semibold text-foreground mb-3">Services Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {study.services.map((service) => (
                            <Badge key={service} variant="outline" className="bg-white/50">
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="mb-8">
                        <span className="text-sm text-muted-foreground">Project Timeline: </span>
                        <span className="font-semibold text-foreground">{study.timeline}</span>
                      </div>

                      <Button className="bg-primary hover:bg-primary-light">
                        View Full Case Study
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>

                    {/* Metrics Section */}
                    <div className={`bg-white/80 p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <h5 className="text-xl font-bold text-primary mb-8 text-center">
                        Results Achieved
                      </h5>
                      
                      <div className="grid grid-cols-2 gap-6">
                        {study.metrics.map((metric, metricIndex) => {
                          const IconComponent = metric.icon;
                          return (
                            <div key={metricIndex} className="text-center">
                              <IconComponent className="w-8 h-8 text-accent mx-auto mb-3 bounce-hover" />
                              <div className="space-y-1">
                                <p className="text-sm text-muted-foreground font-medium">
                                  {metric.label}
                                </p>
                                <div className="flex items-center justify-center space-x-2 text-sm">
                                  <span className="text-red-500 line-through">
                                    {metric.before}
                                  </span>
                                  <ArrowRight className="w-3 h-3 text-muted-foreground" />
                                  <span className="font-bold text-secondary text-lg">
                                    {metric.after}
                                  </span>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      {/* Before/After Images Placeholder */}
                      <div className="mt-8">
                        <h6 className="font-semibold text-center mb-4">Before & After</h6>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-gray-200 rounded-lg aspect-square flex items-center justify-center text-gray-500 text-sm">
                            Before Screenshot
                          </div>
                          <div className="bg-green-100 rounded-lg aspect-square flex items-center justify-center text-green-600 text-sm font-semibold">
                            After Screenshot
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* More Case Studies Coming */}
          <div className="text-center mt-16">
            <Card className="service-card max-w-md mx-auto">
              <CardContent className="p-8 text-center">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4 bounce-hover" />
                <h3 className="text-xl font-bold text-primary mb-3">
                  More Success Stories Coming
                </h3>
                <p className="text-muted-foreground mb-6">
                  We're continuously helping laundry businesses across Africa succeed online.
                </p>
                <Button variant="outline" asChild>
                  <Link to="/contact">Be Our Next Success Story</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how we can help your laundry business achieve similar results
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">Start Your Transformation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
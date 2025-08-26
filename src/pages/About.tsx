import Header from "@/components/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Target, Heart, Globe, Award, Users, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const teamMembers = [
    {
      name: "Amara Okafor",
      role: "Founder & Digital Marketing Strategist",
      bio: "10+ years helping African businesses grow online. Specialized in local SEO and GMB optimization.",
      image: "/placeholder-team-1.jpg",
      expertise: ["Local SEO", "GMB Optimization", "Strategy"]
    },
    {
      name: "Kwame Asante",
      role: "Web Developer & UX Designer",
      bio: "Creates beautiful, functional websites that convert visitors into customers for service businesses.",
      image: "/placeholder-team-2.jpg",
      expertise: ["Web Development", "UX Design", "Conversion Optimization"]
    },
    {
      name: "Fatima Ibrahim",
      role: "Social Media Specialist",
      bio: "Expert in creating engaging content and managing social media presence for African businesses.",
      image: "/placeholder-team-3.jpg",
      expertise: ["Social Media", "Content Creation", "Community Management"]
    }
  ];

  const stats = [
    { number: "50+", label: "Laundry Businesses Served", icon: Users },
    { number: "15", label: "African Countries", icon: Globe },
    { number: "200%", label: "Average Growth Rate", icon: TrendingUp },
    { number: "4.9/5", label: "Client Satisfaction", icon: Award }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary-light to-accent text-white py-20 african-pattern">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 fade-in-up">
            About LaunderEase
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90 fade-in-up">
            We're passionate about helping African laundry businesses shine online and reach their full potential
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge variant="secondary" className="mb-4 bg-secondary-light text-secondary">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Empowering African Laundry Businesses Online
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                We believe every laundry business across Africa deserves to be found by customers who need their services. 
                Our mission is to bridge the digital gap and help traditional laundry services thrive in the modern marketplace.
              </p>
              <p className="text-lg text-muted-foreground">
                From small family-owned laundromats to growing dry cleaning chains, we provide the digital marketing 
                expertise needed to attract more customers and increase revenue.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="service-card">
                <CardContent className="p-6 text-center">
                  <Heart className="w-10 h-10 text-secondary mx-auto mb-4 bounce-hover" />
                  <h3 className="font-bold text-primary mb-2">Passion</h3>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to African business success
                  </p>
                </CardContent>
              </Card>
              
              <Card className="service-card">
                <CardContent className="p-6 text-center">
                  <Globe className="w-10 h-10 text-accent mx-auto mb-4 bounce-hover" />
                  <h3 className="font-bold text-primary mb-2">Reach</h3>
                  <p className="text-sm text-muted-foreground">
                    Serving businesses across Africa
                  </p>
                </CardContent>
              </Card>
              
              <Card className="service-card">
                <CardContent className="p-6 text-center">
                  <Award className="w-10 h-10 text-earth-warm mx-auto mb-4 bounce-hover" />
                  <h3 className="font-bold text-primary mb-2">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    Committed to delivering results
                  </p>
                </CardContent>
              </Card>
              
              <Card className="service-card">
                <CardContent className="p-6 text-center">
                  <Users className="w-10 h-10 text-secondary mx-auto mb-4 bounce-hover" />
                  <h3 className="font-bold text-primary mb-2">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Building strong local connections
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-accent-light to-secondary-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Our Impact by the Numbers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by laundry businesses across Africa to deliver real, measurable results
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index} className="service-card text-center">
                  <CardContent className="p-8">
                    <IconComponent className="w-12 h-12 text-accent mx-auto mb-4 bounce-hover" />
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <p className="text-muted-foreground font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-earth-light text-earth-warm">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Meet the LaunderEase Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A dedicated team of marketing experts who understand the unique challenges and opportunities 
              in the African laundry industry
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="service-card text-center">
                <CardContent className="p-8">
                  {/* Team Member Photo Placeholder */}
                  <div className="w-24 h-24 bg-gradient-to-br from-accent to-secondary rounded-full mx-auto mb-6 flex items-center justify-center text-white font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  <h3 className="text-xl font-bold text-primary mb-2">
                    {member.name}
                  </h3>
                  <p className="text-accent font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground mb-6">
                    {member.bio}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Why African Laundry Businesses Choose LaunderEase
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="service-card">
              <CardContent className="p-8">
                <Target className="w-12 h-12 text-secondary mb-6 bounce-hover" />
                <h3 className="text-xl font-bold text-primary mb-4">
                  Industry Specialization
                </h3>
                <p className="text-muted-foreground">
                  We focus exclusively on laundry and dry cleaning businesses, understanding your unique 
                  challenges and customer needs across different African markets.
                </p>
              </CardContent>
            </Card>
            
            <Card className="service-card">
              <CardContent className="p-8">
                <Globe className="w-12 h-12 text-accent mb-6 bounce-hover" />
                <h3 className="text-xl font-bold text-primary mb-4">
                  Local Market Knowledge
                </h3>
                <p className="text-muted-foreground">
                  Deep understanding of African markets, local search behaviors, and cultural nuances 
                  that matter for your business success.
                </p>
              </CardContent>
            </Card>
            
            <Card className="service-card">
              <CardContent className="p-8">
                <TrendingUp className="w-12 h-12 text-earth-warm mb-6 bounce-hover" />
                <h3 className="text-xl font-bold text-primary mb-4">
                  Proven Results
                </h3>
                <p className="text-muted-foreground">
                  Track record of helping laundry businesses increase their online visibility, 
                  attract more customers, and grow their revenue consistently.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss how LaunderEase can help your business grow online and reach more customers
          </p>
          <Button 
            variant="secondary" 
            size="lg"
            className="bg-white text-primary hover:bg-white/90"
            asChild
          >
            <Link to="/contact">Get Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
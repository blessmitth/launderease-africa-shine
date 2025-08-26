import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card className="service-card">
            <CardContent className="p-12">
              <div className="text-6xl font-bold text-primary mb-6">404</div>
              <h1 className="text-3xl font-bold text-primary mb-6">
                Page Not Found
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-gradient-to-r from-accent to-secondary">
                  <Link to="/">
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                  </Link>
                </Button>
                
                <Button variant="outline" onClick={() => window.history.back()}>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Go Back
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <p className="text-muted-foreground mb-4">
              Looking for help with your laundry business marketing?
            </p>
            <Button variant="outline" asChild>
              <Link to="/contact">Get Your Free Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

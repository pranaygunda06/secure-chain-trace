import { Shield, Eye, CheckCircle, Zap, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const benefits = [
  {
    icon: Shield,
    title: "Trust & Transparency",
    description: "Immutable blockchain records ensure no one can tamper with product history or falsify data.",
    gradient: "bg-gradient-trust"
  },
  {
    icon: CheckCircle,
    title: "Authenticity Verification",
    description: "Customers can instantly verify product source, certifications, and authenticity with a simple scan.",
    gradient: "bg-gradient-premium"
  },
  {
    icon: Zap,
    title: "Real-time Efficiency", 
    description: "Live updates across the entire supply chain eliminate delays and improve operational efficiency.",
    gradient: "bg-gradient-primary"
  },
  {
    icon: Globe,
    title: "Ethical Sourcing Proof",
    description: "Demonstrate compliance with ethical standards and sustainable practices throughout the supply chain.",
    gradient: "bg-gradient-trust"
  },
  {
    icon: TrendingUp,
    title: "Enhanced Brand Value",
    description: "Build customer confidence and premium brand positioning through radical transparency.",
    gradient: "bg-gradient-premium"
  },
  {
    icon: Eye,
    title: "Complete Visibility",
    description: "Track every step from raw materials to final delivery with unprecedented supply chain visibility.",
    gradient: "bg-gradient-primary"
  }
];

const Benefits = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Why Choose Blockchain Supply Chain?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your supply chain with immutable transparency, building trust with customers while ensuring authenticity and ethical sourcing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-glow transition-all duration-300 group border-0">
                <CardHeader>
                  <div className={`w-12 h-12 ${benefit.gradient} rounded-lg flex items-center justify-center mb-4 group-hover:shadow-premium transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-primary-foreground/80">Data Integrity</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">50%</div>
              <div className="text-primary-foreground/80">Faster Verification</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">85%</div>
              <div className="text-primary-foreground/80">Fraud Reduction</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-primary-foreground/80">Real-time Tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
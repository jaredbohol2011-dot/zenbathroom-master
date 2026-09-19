import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Calculator } from "lucide-react";

export const FinancingSection = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Flexible Financing Options
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Make your dream bathroom renovation affordable with our HUMM financing partnership
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-elegant animate-slide-up">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary mb-4">HUMM Financing Partner</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Paying for your KMS Bathroom renovation is now even easier! As a registered partner with Humm, 
                  we offer you the convenience of spreading the cost of your renovation over instalments—an easy 
                  alternative to paying with cash or credit card.
                </p>
              </div>
              
              <div className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With Humm, you're in control. You can spread your payments and enjoy flexible rates and terms 
                  that suit your needs. A Humm retail instalment plan allows you to distribute the cost of your 
                  purchases over time, making repayment a breeze.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button variant="cta" size="lg" className="text-lg px-8 py-4">
                  <Calculator className="mr-2 h-5 w-5" />
                  Get Quote
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  <CreditCard className="mr-2 h-5 w-5" />
                  Apply Now
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
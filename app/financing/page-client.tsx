"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  CreditCard,
  Calculator,
  CheckCircle,
  Shield,
  Clock,
  DollarSign,
} from "lucide-react";
import { useRouter } from "next/navigation";

const FinancingPage = () => {
  const router = useRouter();

  const handleMessageClick = () => {
    router.push("/contact");
  };

  const handleHummClick = () => {
    window.open(
      "https://www.shophumm.com/ie/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-hero">
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              Flexible
              <br />
              <span className="text-accent">Financing Options</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md max-w-2xl mx-auto">
              Make your dream bathroom renovation affordable with our HUMM
              financing partnership
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          {/* HUMM Financing Card */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="shadow-elegant animate-slide-up">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary mb-4">
                  HUMM Financing Partner
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Paying for your ZEN Bathroom renovation is now even easier!
                    As a registered partner with Humm, we offer you the
                    convenience of spreading the cost of your renovation over
                    instalments—an easy alternative to paying with cash or
                    credit card.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    With Humm, you're in control. You can spread your payments
                    and enjoy flexible rates and terms that suit your needs. A
                    Humm retail instalment plan allows you to distribute the
                    cost of your purchases over time, making repayment a breeze.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                  <Button
                    variant="default"
                    size="lg"
                    className="text-lg px-8 py-4"
                    onClick={handleMessageClick}
                  >
                    <Calculator className="mr-2 h-5 w-5" />
                    Get Quote
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="text-lg px-8 py-4"
                    onClick={handleHummClick}
                  >
                    <CreditCard className="mr-2 h-5 w-5" />
                    Apply Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Benefits Section */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose HUMM Financing?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Experience the benefits of flexible payment options
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card
                className="bg-card shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    Quick Approval
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Get approved in minutes with our streamlined application
                    process. No lengthy paperwork or waiting periods.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-card shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <DollarSign className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    Flexible Terms
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Choose payment terms that work for your budget, with options
                    ranging from 6 to 60 months.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="bg-card shadow-soft hover:shadow-elegant transition-all duration-300 animate-slide-up"
                style={{ animationDelay: "0.3s" }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl text-primary">
                    Secure & Safe
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">
                    Your financial information is protected with bank-level
                    security and encrypted transactions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Simple steps to get your bathroom renovation financed
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 animate-slide-in-left">
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Get Your Quote
                  </h3>
                  <p className="text-muted-foreground">
                    Contact us for a free consultation and detailed quote for
                    your bathroom renovation project.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 animate-slide-in-left"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Apply for Finance
                  </h3>
                  <p className="text-muted-foreground">
                    Submit your HUMM financing application online with our
                    secure and simple process.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 animate-slide-in-left"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Get Approved
                  </h3>
                  <p className="text-muted-foreground">
                    Receive instant approval and choose payment terms that suit
                    your budget and lifestyle.
                  </p>
                </div>
              </div>

              <div
                className="flex items-start gap-4 animate-slide-in-left"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="flex-shrink-0 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    Start Your Renovation
                  </h3>
                  <p className="text-muted-foreground">
                    Begin your bathroom transformation with our expert team
                    while making affordable monthly payments.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-fade-in">
            <div className="bg-card rounded-lg p-8 shadow-soft max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                Ready to Finance Your Dream Bathroom?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Get started today with our flexible financing options
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={handleMessageClick}
                >
                  <Calculator className="mr-2 h-5 w-5" />
                  Get Free Quote
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-4"
                  onClick={handleHummClick}
                >
                  <CreditCard className="mr-2 h-5 w-5" />
                  Apply for Financing
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FinancingPage;

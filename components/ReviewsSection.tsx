import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Melbourne",
    rating: 5,
    text: "Absolutely thrilled with our bathroom renovation! The zen team was professional, punctual, and delivered exactly what we envisioned. The quality of work is outstanding.",
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Sydney",
    rating: 5,
    text: "From design to completion, the entire process was seamless. The team's attention to detail and craftsmanship exceeded our expectations. Highly recommend KMS!",
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Brisbane",
    rating: 5,
    text: "Our small bathroom was transformed into a beautiful, functional space. The design team's creative solutions maximized every inch. Worth every penny!",
  },
  {
    id: 4,
    name: "David Rodriguez",
    location: "Perth",
    rating: 5,
    text: "Professional service from start to finish. The project was completed on time and within budget. The quality of materials and workmanship is exceptional.",
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            What Our Clients Say
          </h2>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: "300" }}
          >
            Read testimonials from our satisfied customers
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={review.id}
              className={`group hover:shadow-elegant transition-all duration-300 relative overflow-hidden ${
                index % 2 === 0
                  ? "animate-slide-in-left"
                  : "animate-slide-in-right"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-accent" />
                </div>

                <div className="flex mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{review.text}"
                </p>

                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">{review.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {review.location}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

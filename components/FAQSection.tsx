import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does a typical bathroom renovation take?",
    answer:
      "Most bathroom renovations take between 4-10 days, depending on the scope of work. Complete renovations may take longer, while simple updates can be completed faster. We provide detailed timelines during consultation.",
  },
  {
    question: "Do you provide design services?",
    answer:
      "Yes! Our experienced design team works with you to create a custom bathroom design that fits your style, needs, and budget. We use 3D rendering to help you visualize the final result.",
  },
  {
    question: "What's included in your renovation service?",
    answer:
      "Our full-service renovations include design consultation, demolition, plumbing, electrical work, tiling, fixture installation, and final finishing. We handle all permits and coordinate all trades.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, we provide comprehensive warranties on all our work. Labor warranties vary by service type, and we also honor manufacturer warranties on all fixtures and materials.",
  },
  {
    question: "Can you work with my existing plumbing layout?",
    answer:
      "In many cases, yes. Working with existing plumbing can save costs and time. However, we can also relocate plumbing if needed for your ideal layout. We'll assess your space and discuss options during consultation.",
  },
  {
    question: "What financing options are available?",
    answer:
      "We partner with HUMM to offer flexible financing options. You can spread payments over time with competitive rates and terms that suit your budget. Apply today for instant approval.",
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about our bathroom renovation
            services
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-slide-up">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-accent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const individualServices = [
  { name: "PCMSO", price: "147,00" },
  { name: "LTCAT", price: "147,00" },
  { name: "Laudo de Insalubridade", price: "147,00" },
  { name: "Laudo de Periculosidade", price: "147,00" }
];

const plans = [
  {
    name: "Plano 5",
    quantity: "5 assinaturas",
    pricePerDoc: "97",
    total: "485",
    features: ["Economia de 34%", "Validade de 90 dias", "Suporte prioritário"]
  },
  {
    name: "Plano 12",
    quantity: "12 assinaturas",
    pricePerDoc: "79",
    total: "948",
    features: ["Economia de 46%", "Validade de 180 dias", "Suporte VIP", "Relatórios mensais"],
    popular: true
  },
  {
    name: "Plano 30",
    quantity: "30 assinaturas",
    pricePerDoc: "59",
    total: "1.770",
    features: ["Economia de 60%", "Validade de 1 ano", "Suporte dedicado", "Gerente de conta"]
  }
];

export const Pricing = () => {
  return (
    <section id="planos" className="py-20 px-4 lg:px-8 bg-gradient-to-b from-background to-primary-light/20">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Planos e valores
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Escolha o plano ideal para o volume de documentos da sua empresa
          </p>
        </div>

        {/* Individual Services */}
        <div className="max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Serviços Individuais</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {individualServices.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-foreground">{service.name}</h4>
                  <span className="bg-warning/20 text-warning-foreground text-xs font-bold px-2 py-1 rounded">
                    PROMOCIONAL
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-primary">R$ {service.price}</span>
                  <span className="text-sm text-muted-foreground">/documento</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Plans */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Planos Corporativos</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-card rounded-2xl border ${
                  plan.popular ? "border-primary shadow-2xl scale-105" : "border-border"
                } p-8 relative animate-slide-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4" />
                    Mais Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h4>
                  <p className="text-muted-foreground">{plan.quantity}</p>
                </div>

                <div className="text-center mb-6">
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-primary">R$ {plan.pricePerDoc}</span>
                    <span className="text-muted-foreground">/cada</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Total: R$ {plan.total}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  size="lg"
                >
                  Contratar agora
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 p-6 bg-muted/50 rounded-xl">
            <p className="text-foreground font-semibold mb-2">
              Precisa de mais de 30 assinaturas?
            </p>
            <p className="text-muted-foreground mb-4">
              Entre em contato para um plano personalizado
            </p>
            <Button variant="outline">Falar com especialista</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

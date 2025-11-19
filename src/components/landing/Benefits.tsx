import { TrendingUp, Shield, Zap, Award, DollarSign, Handshake } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "Escalabilidade",
    description: "Cresça sem limitações de capacidade técnica ou geográfica"
  },
  {
    icon: Shield,
    title: "Segurança jurídica",
    description: "Elimine riscos de autuação com documentos 100% conformes"
  },
  {
    icon: Zap,
    title: "Rapidez na entrega",
    description: "Cumpra prazos apertados com nossa agilidade garantida"
  },
  {
    icon: Award,
    title: "Exclusividade CRM",
    description: "100% dos PCMSOs com registro oficial no CRM"
  },
  {
    icon: DollarSign,
    title: "Economia comprovada",
    description: "Reduza custos fixos sem perder qualidade técnica"
  },
  {
    icon: Handshake,
    title: "Parceria estratégica",
    description: "Conte com time especializado como extensão da sua empresa"
  }
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Benefícios da parceria
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforme a validação de documentos em vantagem competitiva
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-accent/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="h-7 w-7 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

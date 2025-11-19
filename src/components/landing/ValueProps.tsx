import { Shield, Clock, FileCheck, MapPin, Headphones } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Segurança jurídica comprovada",
    description: "Documentos assinados por profissionais habilitados com registro ativo"
  },
  {
    icon: Clock,
    title: "Entregas em até 72h úteis",
    description: "Processo ágil para não atrasar seus prazos e compromissos"
  },
  {
    icon: FileCheck,
    title: "Conformidade total com as NRs",
    description: "Validação completa seguindo toda legislação vigente"
  },
  {
    icon: MapPin,
    title: "Documentos registrados",
    description: "CRM e CREA ativos em todos os estados brasileiros"
  },
  {
    icon: Headphones,
    title: "Atendimento humano",
    description: "Suporte de segunda a sexta, das 8h às 18h"
  }
];

export const ValueProps = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <value.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

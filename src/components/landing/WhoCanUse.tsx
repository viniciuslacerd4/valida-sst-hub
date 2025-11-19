import { Building2, Heart, Briefcase } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Consultorias de Segurança do Trabalho",
    description: "Empresas especializadas em SST que precisam de validação ágil e segura de documentos para seus clientes"
  },
  {
    icon: Heart,
    title: "Clínicas Ocupacionais",
    description: "Clínicas de medicina do trabalho que oferecem elaboração e validação de documentos de SST"
  },
  {
    icon: Briefcase,
    title: "Prestadores de Serviços de SST",
    description: "Profissionais autônomos e empresas que prestam serviços de segurança e saúde no trabalho"
  }
];

export const WhoCanUse = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Quem pode usar a <span className="text-primary">Valida SST</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Nossa plataforma foi desenvolvida para empresas e profissionais do setor de SST
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {audiences.map((audience, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <audience.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{audience.title}</h3>
              <p className="text-muted-foreground">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

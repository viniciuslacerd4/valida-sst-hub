import { CheckCircle, Zap, Award, FileText, Star } from "lucide-react";
import brazilImage from "@/assets/brazil-coverage.jpg";

const solutions = [
  {
    icon: CheckCircle,
    title: "Cobertura nacional completa",
    description: "Profissionais registrados em todos os 27 estados brasileiros"
  },
  {
    icon: Zap,
    title: "Agilidade garantida",
    description: "Validação em 48h para PCMSO/LTCAT e 72h para demais documentos"
  },
  {
    icon: Award,
    title: "Responsabilidade técnica real",
    description: "Médicos e engenheiros com registro ativo e especialização em SST"
  },
  {
    icon: FileText,
    title: "Emissão de ART quando necessário",
    description: "Anotação de Responsabilidade Técnica para serviços de engenharia"
  },
  {
    icon: Star,
    title: "100% dos PCMSOs registrados no CRM",
    description: "Exclusividade que garante total conformidade legal e segurança"
  }
];

export const Solution = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            A solução <span className="text-primary">Valida SST</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Transforme a validação de documentos em vantagem competitiva para sua empresa
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-up">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-xl hover:bg-primary-light/50 transition-colors duration-300"
              >
                <div className="flex-shrink-0 bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                  <solution.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{solution.title}</h3>
                  <p className="text-sm text-muted-foreground">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <img
              src={brazilImage}
              alt="Cobertura nacional em todos os estados"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

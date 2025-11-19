import { AlertCircle, XCircle, AlertTriangle, DollarSign, FileX } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "Falta de profissionais habilitados",
    description: "Dificuldade em encontrar médicos do trabalho e engenheiros com registro em determinados estados"
  },
  {
    icon: XCircle,
    title: "Risco de autuação",
    description: "Documentos sem CRM ou CREA válido podem resultar em multas e problemas legais"
  },
  {
    icon: AlertTriangle,
    title: "Atrasos frequentes",
    description: "Falta de agilidade na validação causa atrasos nos projetos e compromete prazos"
  },
  {
    icon: DollarSign,
    title: "Custos elevados",
    description: "Manter profissionais próprios em todos os estados tem custo operacional alto"
  },
  {
    icon: FileX,
    title: "Documentos rejeitados",
    description: "Perda de tempo e credibilidade com documentos recusados em auditorias"
  }
];

export const Problems = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-muted/50">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Problemas comuns na sua empresa de SST
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Entendemos os desafios que consultarias, clínicas e prestadores enfrentam diariamente
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-destructive/20 hover:border-destructive/40 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-destructive/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-sm text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

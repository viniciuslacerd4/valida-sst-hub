import { LogIn, FileText, Upload, Search, CheckCircle, XCircle, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: LogIn,
    title: "Acessa a plataforma",
    description: "Entre na plataforma Valida SST com suas credenciais"
  },
  {
    number: "02",
    icon: FileText,
    title: "Seleciona o documento",
    description: "Escolha o tipo de documento que precisa validar (PCMSO, LTCAT, etc.)"
  },
  {
    number: "03",
    icon: Upload,
    title: "Upload do PDF",
    description: "Faça o upload do documento em formato PDF"
  },
  {
    number: "04",
    icon: Search,
    title: "Análise técnica",
    description: "Nossa equipe realiza análise completa do documento"
  },
  {
    number: "05",
    icon: CheckCircle,
    title: "Aprovação (48h/72h)",
    description: "Documento aprovado e assinado dentro do prazo"
  },
  {
    number: "06",
    icon: XCircle,
    title: "Reprovação com devolutiva",
    description: "Se necessário, você recebe feedback detalhado para correções"
  },
  {
    number: "07",
    icon: FileCheck,
    title: "Emissão de ART",
    description: "Quando aplicável, emitimos a ART do serviço"
  }
];

export const HowItWorks = () => {
  return (
    <section id="como-funciona" className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Como funciona
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Processo simples e transparente, do upload à validação final
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Linha conectora vertical (visível apenas em mobile) */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:hidden"></div>
            
            {/* Linha conectora horizontal (visível em desktop) */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-border"></div>

            <div className="grid md:grid-cols-7 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative flex md:flex-col gap-4 md:gap-0 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Círculo numerado */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="flex-1 md:mt-8 md:text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3 md:mx-auto">
                      <step.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

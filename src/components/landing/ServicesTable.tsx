import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle } from "lucide-react";

const services = [
  {
    service: "PCMSO",
    professional: "Médico do Trabalho",
    deadline: "48h úteis",
    obs: "Todos registrados no CRM"
  },
  {
    service: "LTCAT",
    professional: "Médico ou Engenheiro",
    deadline: "48h úteis",
    obs: "Registro conforme especialidade"
  },
  {
    service: "Laudo de Insalubridade",
    professional: "Médico ou Engenheiro",
    deadline: "72h úteis",
    obs: "Com emissão de ART"
  },
  {
    service: "Laudo de Periculosidade",
    professional: "Médico ou Engenheiro",
    deadline: "72h úteis",
    obs: "Com emissão de ART"
  },
  {
    service: "Programas (PGR, PPRA, etc.)",
    professional: "Médico ou Engenheiro",
    deadline: "72h úteis",
    obs: "Conforme NR específica"
  }
];

export const ServicesTable = () => {
  return (
    <section id="servicos" className="py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Serviços disponíveis
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Validação e assinatura de todos os principais documentos de SST
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                  <h3 className="font-semibold text-lg text-foreground">{service.service}</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Profissional:</span>
                    <span className="font-medium text-foreground">{service.professional}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prazo:</span>
                    <span className="font-medium text-primary">{service.deadline}</span>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <span className="text-xs text-muted-foreground">{service.obs}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop View */}
          <div className="hidden md:block bg-card rounded-xl border border-border shadow-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/50">
                  <TableHead className="font-semibold">Documento</TableHead>
                  <TableHead className="font-semibold">Profissional</TableHead>
                  <TableHead className="font-semibold">Prazo</TableHead>
                  <TableHead className="font-semibold">Observações</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service, index) => (
                  <TableRow
                    key={index}
                    className="hover:bg-primary-light/30 transition-colors animate-fade-in"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <TableCell className="font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        {service.service}
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{service.professional}</TableCell>
                    <TableCell className="font-semibold text-primary">{service.deadline}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{service.obs}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  );
};

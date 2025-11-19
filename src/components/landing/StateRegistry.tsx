import { ExternalLink, CheckCircle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const states = [
  { uf: "AC", name: "Acre", crm: "CRM-AC 1234 (RQE)", crea: "CREA-AC 5678" },
  { uf: "AL", name: "Alagoas", crm: "CRM-AL 1234 (RQE)", crea: "CREA-AL 5678" },
  { uf: "AP", name: "Amapá", crm: "CRM-AP 1234 (RQE)", crea: "CREA-AP 5678" },
  { uf: "AM", name: "Amazonas", crm: "CRM-AM 1234 (RQE)", crea: "CREA-AM 5678" },
  { uf: "BA", name: "Bahia", crm: "CRM-BA 1234 (RQE)", crea: "CREA-BA 5678" },
  { uf: "CE", name: "Ceará", crm: "CRM-CE 1234 (RQE)", crea: "CREA-CE 5678" },
  { uf: "DF", name: "Distrito Federal", crm: "CRM-DF 1234 (RQE)", crea: "CREA-DF 5678" },
  { uf: "ES", name: "Espírito Santo", crm: "CRM-ES 1234 (RQE)", crea: "CREA-ES 5678" },
  { uf: "GO", name: "Goiás", crm: "CRM-GO 1234 (RQE)", crea: "CREA-GO 5678" },
  { uf: "MA", name: "Maranhão", crm: "CRM-MA 1234 (RQE)", crea: "CREA-MA 5678" },
  { uf: "MT", name: "Mato Grosso", crm: "CRM-MT 1234 (RQE)", crea: "CREA-MT 5678" },
  { uf: "MS", name: "Mato Grosso do Sul", crm: "CRM-MS 1234 (RQE)", crea: "CREA-MS 5678" },
  { uf: "MG", name: "Minas Gerais", crm: "CRM-MG 1234 (RQE)", crea: "CREA-MG 5678" },
  { uf: "PA", name: "Pará", crm: "CRM-PA 1234 (RQE)", crea: "CREA-PA 5678" },
  { uf: "PB", name: "Paraíba", crm: "CRM-PB 1234 (RQE)", crea: "CREA-PB 5678" },
  { uf: "PR", name: "Paraná", crm: "CRM-PR 1234 (RQE)", crea: "CREA-PR 5678" },
  { uf: "PE", name: "Pernambuco", crm: "CRM-PE 1234 (RQE)", crea: "CREA-PE 5678" },
  { uf: "PI", name: "Piauí", crm: "CRM-PI 1234 (RQE)", crea: "CREA-PI 5678" },
  { uf: "RJ", name: "Rio de Janeiro", crm: "CRM-RJ 1234 (RQE)", crea: "CREA-RJ 5678" },
  { uf: "RN", name: "Rio Grande do Norte", crm: "CRM-RN 1234 (RQE)", crea: "CREA-RN 5678" },
  { uf: "RS", name: "Rio Grande do Sul", crm: "CRM-RS 1234 (RQE)", crea: "CREA-RS 5678" },
  { uf: "RO", name: "Rondônia", crm: "CRM-RO 1234 (RQE)", crea: "CREA-RO 5678" },
  { uf: "RR", name: "Roraima", crm: "CRM-RR 1234 (RQE)", crea: "CREA-RR 5678" },
  { uf: "SC", name: "Santa Catarina", crm: "CRM-SC 1234 (RQE)", crea: "CREA-SC 5678" },
  { uf: "SP", name: "São Paulo", crm: "CRM-SP 1234 (RQE)", crea: "CREA-SP 5678" },
  { uf: "SE", name: "Sergipe", crm: "CRM-SE 1234 (RQE)", crea: "CREA-SE 5678" },
  { uf: "TO", name: "Tocantins", crm: "CRM-TO 1234 (RQE)", crea: "CREA-TO 5678" },
];

export const StateRegistry = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Registro profissional em todos os estados
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Médicos do Trabalho e Engenheiros de Segurança devidamente registrados nos conselhos regionais de cada estado
          </p>
        </div>

        <div className="max-w-6xl mx-auto bg-card rounded-xl border border-border shadow-lg overflow-hidden">
          <ScrollArea className="h-[600px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
              {states.map((state, index) => (
                <div
                  key={state.uf}
                  className="bg-card p-6 hover:bg-primary-light/50 transition-colors duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.02}s` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-2xl font-bold text-primary">{state.uf}</span>
                        <CheckCircle className="h-5 w-5 text-accent" />
                      </div>
                      <div className="text-sm font-medium text-foreground">{state.name}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="text-xs font-medium text-muted-foreground">Médico:</div>
                      <div className="text-xs text-foreground flex-1">{state.crm}</div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="text-xs font-medium text-muted-foreground">Eng.:</div>
                      <div className="text-xs text-foreground flex-1">{state.crea}</div>
                    </div>
                    <button className="text-xs text-primary hover:text-primary-hover flex items-center gap-1 mt-2">
                      Consultar registro
                      <ExternalLink className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
};

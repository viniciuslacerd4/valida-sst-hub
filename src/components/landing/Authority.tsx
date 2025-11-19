import { Award, ShieldCheck, Users } from "lucide-react";

export const Authority = () => {
  return (
    <section id="autoridade" className="py-20 px-4 lg:px-8 bg-primary/5">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border animate-fade-in">
          <div className="text-center mb-8">
            <Award className="h-16 w-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Autoridade e Credibilidade
            </h2>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A <span className="font-semibold text-foreground">Valida SST</span> faz parte do{" "}
              <span className="font-semibold text-primary">Grupo ISESMT</span>, uma das principais referências em Segurança e Saúde no Trabalho do Brasil, sob a liderança técnica da{" "}
              <span className="font-semibold text-foreground">Dra. Joelma Kalil</span>, médica do trabalho com vasta experiência e reconhecimento nacional.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Profissionais Habilitados</h3>
                <p className="text-sm text-muted-foreground">
                  CRM e CREA ativos em todos os estados brasileiros
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Award className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground">Experiência Comprovada</h3>
                <p className="text-sm text-muted-foreground">
                  Anos de atuação em medicina e engenharia do trabalho
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">Parceiros de Confiança</h3>
                <p className="text-sm text-muted-foreground">
                  Centenas de empresas de SST confiam em nossos serviços
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowRight, Users } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-border text-center animate-scale-in">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Não arrisque a credibilidade da sua empresa de SST
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Garanta documentos <span className="font-semibold text-foreground">100% conformes</span>, com{" "}
              <span className="font-semibold text-primary">segurança jurídica</span> e{" "}
              <span className="font-semibold text-accent">entrega rápida</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" className="text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                Ver planos e valores
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold">
                <Users className="mr-2 h-5 w-5" />
                Quero ser parceiro da Valida SST
              </Button>
            </div>

            <div className="pt-8 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Sem burocracia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary"></div>
                <span>Planos flexíveis</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Suporte especializado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

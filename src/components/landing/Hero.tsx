import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-compliance.jpg";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 lg:px-8 bg-gradient-to-b from-background to-primary-light/30">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Validação e assinatura de documentos de SST com{" "}
                <span className="text-primary">segurança jurídica</span> e cobertura nacional
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Médico do Trabalho e Engenheiro de Segurança registrados em todos os estados, prontos para validar e assinar seus documentos com rapidez e total conformidade legal.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-base font-semibold shadow-lg hover:shadow-xl transition-shadow">
                Quero usar a Valida SST
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base font-semibold">
                <MessageCircle className="mr-2 h-5 w-5" />
                Falar com o time comercial
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">48-72h</div>
                <div className="text-sm text-muted-foreground">Entrega rápida</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">27</div>
                <div className="text-sm text-muted-foreground">Estados cobertos</div>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Conformidade</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl blur-3xl"></div>
            <img
              src={heroImage}
              alt="Plataforma de validação de documentos SST"
              className="relative rounded-2xl shadow-2xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

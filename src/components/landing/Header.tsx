import { Button } from "@/components/ui/button";
import { Shield, Menu } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50 shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-foreground">Valida SST</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("servicos")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Serviços
            </button>
            <button onClick={() => scrollToSection("autoridade")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Autoridade
            </button>
            <button onClick={() => scrollToSection("planos")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Planos
            </button>
            <button onClick={() => scrollToSection("como-funciona")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Como funciona
            </button>
            <button onClick={() => scrollToSection("contato")} className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contato
            </button>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm">Acessar plataforma</Button>
            <Button size="sm" onClick={() => scrollToSection("planos")}>Ver planos</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 animate-fade-in">
            <button onClick={() => scrollToSection("servicos")} className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary">
              Serviços
            </button>
            <button onClick={() => scrollToSection("autoridade")} className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary">
              Autoridade
            </button>
            <button onClick={() => scrollToSection("planos")} className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary">
              Planos
            </button>
            <button onClick={() => scrollToSection("como-funciona")} className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary">
              Como funciona
            </button>
            <button onClick={() => scrollToSection("contato")} className="block w-full text-left py-2 text-sm font-medium text-foreground hover:text-primary">
              Contato
            </button>
            <div className="flex flex-col gap-2 pt-2">
              <Button variant="outline" size="sm" className="w-full">Acessar plataforma</Button>
              <Button size="sm" className="w-full" onClick={() => scrollToSection("planos")}>Ver planos</Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

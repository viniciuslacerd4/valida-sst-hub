import { Shield, Phone, Clock, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contato" className="bg-muted/30 border-t border-border py-12 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Valida SST</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Validação e assinatura de documentos de SST com segurança jurídica e cobertura nacional.
            </p>
          </div>

          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Sobre</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button className="hover:text-primary transition-colors">Quem somos</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Grupo ISESMT</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Dra. Joelma Kalil</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Trabalhe conosco</button>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Serviços</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button className="hover:text-primary transition-colors">PCMSO</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">LTCAT</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Laudos</button>
              </li>
              <li>
                <button className="hover:text-primary transition-colors">Programas</button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <div>
                  <div>Segunda a Sexta</div>
                  <div>8h às 18h</div>
                </div>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="https://wa.me/5511999999999" className="hover:text-primary transition-colors">
                  WhatsApp Suporte
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:contato@validasst.com.br" className="hover:text-primary transition-colors">
                  contato@validasst.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© 2024 Valida SST. Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <button className="hover:text-primary transition-colors">Política de Privacidade</button>
              <button className="hover:text-primary transition-colors">Termos de Uso</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

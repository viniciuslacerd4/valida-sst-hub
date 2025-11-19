import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "A plataforma Valida SST é para empresas?",
    answer: "Sim! A Valida SST é uma plataforma B2B focada em empresas de SST: consultorias, clínicas ocupacionais e prestadores de serviços. Não atendemos empresas finais (contratantes), apenas quem presta serviços de segurança e saúde no trabalho."
  },
  {
    question: "Qual o prazo de entrega dos documentos?",
    answer: "PCMSO e LTCAT são entregues em até 48h úteis. Laudos de insalubridade, periculosidade e programas são entregues em até 72h úteis, após aprovação da análise técnica."
  },
  {
    question: "Preciso pagar a ART separadamente?",
    answer: "Não! Quando aplicável, a emissão da ART está incluída no valor do serviço. Você recebe o documento validado e a ART sem custos adicionais."
  },
  {
    question: "O que acontece se o documento for reprovado?",
    answer: "Você receberá uma devolutiva técnica detalhada com os pontos que precisam ser corrigidos. Após as correções, basta reenviar o documento para nova análise, sem custos adicionais."
  },
  {
    question: "Os PCMSOs são realmente registrados no CRM?",
    answer: "Sim! Esse é um diferencial exclusivo da Valida SST. 100% dos nossos PCMSOs são registrados oficialmente no CRM do estado correspondente, garantindo total conformidade legal e segurança jurídica."
  },
  {
    question: "Como funciona a cobertura nacional?",
    answer: "Temos médicos do trabalho e engenheiros de segurança com registro ativo nos conselhos (CRM e CREA) de todos os 27 estados brasileiros, permitindo validar documentos para qualquer região do país."
  },
  {
    question: "Posso parcelar o pagamento dos planos?",
    answer: "Sim! Oferecemos opções de parcelamento para os planos corporativos. Entre em contato com nosso time comercial para conhecer as condições especiais."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 space-y-4 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre a Valida SST
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-xl px-6 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

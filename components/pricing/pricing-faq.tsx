import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { HeaderSection } from "../shared/header-section";

const pricingFaqData = [
  {
    id: "item-1",
    question: "Was kostet der kostenlose Plan?",
    answer:
      "Unser kostenloser Plan ist völlig kostenlos, ohne monatliche oder jährliche Gebühren. Es ist eine großartige Möglichkeit, um zu starten und unsere grundlegenden Funktionen zu erkunden.",
  },
  {
    id: "item-2",
    question: "Wie viel kostet der Basis-Monatsplan?",
    answer:
      "Der Basis-Monatsplan kostet 15 $ pro Monat. Er bietet Zugang zu unseren Kernfunktionen und wird monatlich abgerechnet.",
  },
  {
    id: "item-3",
    question: "Was kostet der Pro-Monatsplan?",
    answer:
      "Der Pro-Monatsplan ist für 25 $ pro Monat erhältlich. Er bietet erweiterte Funktionen und wird monatlich abgerechnet, um mehr Flexibilität zu bieten.",
  },
  {
    id: "item-4",
    question: "Bieten Sie jährliche Abonnements an?",
    answer:
      "Ja, wir bieten jährliche Abonnements für noch mehr Einsparungen an. Der Basis-Jahresplan kostet 144 $ pro Jahr, und der Pro-Jahresplan kostet 300 $ pro Jahr.",
  },
  {
    id: "item-5",
    question: "Gibt es eine Testphase für die kostenpflichtigen Pläne?",
    answer:
      "Wir bieten eine 14-tägige kostenlose Testphase für sowohl den Pro-Monats- als auch den Pro-Jahresplan an. Es ist eine großartige Möglichkeit, alle Funktionen zu erleben, bevor Sie sich für ein kostenpflichtiges Abonnement entscheiden.",
  },
];

export function PricingFaq() {
  return (
    <section className="container max-w-4xl py-2">
    <HeaderSection
    label="FAQ"
    title="Häufig gestellte Fragen"
    subtitle="Durchstöbern Sie unsere umfassenden FAQs, um schnelle Antworten auf häufige Anfragen zu finden. Wenn Sie weitere Unterstützung benötigen, zögern Sie nicht, uns für persönliche Hilfe zu kontaktieren."
/>

      <Accordion type="single" collapsible className="my-12 w-full">
        {pricingFaqData.map((faqItem) => (
          <AccordionItem key={faqItem.id} value={faqItem.id}>
            <AccordionTrigger>{faqItem.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-muted-foreground sm:text-[15px]">
              {faqItem.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

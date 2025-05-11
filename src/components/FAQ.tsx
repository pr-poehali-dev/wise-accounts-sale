import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Что такое WISE аккаунт?",
    answer:
      "WISE (ранее TransferWise) - это международная финансовая компания, предлагающая мультивалютные счета и услуги международных переводов. Аккаунт WISE позволяет получать, хранить и отправлять деньги в разных валютах с минимальными комиссиями.",
  },
  {
    question: "Как я получу доступ к аккаунту после покупки?",
    answer:
      "После оплаты мы отправим вам все необходимые данные для доступа к аккаунту (логин, пароль, и другую необходимую информацию) на указанную вами электронную почту в течение 24 часов.",
  },
  {
    question: "Легально ли покупать WISE аккаунты?",
    answer:
      "Мы предоставляем услуги в соответствии с действующим законодательством. Однако, мы рекомендуем ознакомиться с правилами использования WISE и законодательством вашей страны перед покупкой.",
  },
  {
    question: "Какие способы оплаты вы принимаете?",
    answer:
      "Мы принимаем различные способы оплаты, включая банковские переводы, криптовалюты (Bitcoin, Ethereum, USDT), и электронные платежные системы.",
  },
  {
    question: "Предоставляете ли вы гарантию на аккаунты?",
    answer:
      "Да, мы предоставляем гарантию на все наши аккаунты в течение определенного периода. Если у вас возникнут проблемы с доступом к аккаунту в этот период, мы заменим его бесплатно или вернем ваши деньги.",
  },
  {
    question: "Требуется ли верификация для использования аккаунта?",
    answer:
      "Большинство наших аккаунтов уже прошли базовую верификацию. Для более высоких лимитов может потребоваться дополнительная верификация, которую мы также можем предоставить за дополнительную плату.",
  },
];

const FAQ: React.FC = () => {
  return (
    <div id="faq" className="py-12 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-wiseDarkGreen">
          Часто задаваемые вопросы
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="bg-white rounded-lg shadow-sm"
          >
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="px-4 text-wiseDarkGreen font-medium text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

import React from "react";
import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "MessageCircle",
    title: "Свяжитесь с нами",
    description:
      "Оставьте заявку на сайте или напишите нам в Telegram для уточнения деталей и выбора подходящего аккаунта.",
  },
  {
    icon: "CreditCard",
    title: "Выберите и оплатите",
    description:
      "Выберите подходящий тип аккаунта и произведите оплату любым удобным для вас способом.",
  },
  {
    icon: "Clock",
    title: "Дождитесь доставки",
    description:
      "Мы подготовим и отправим вам данные для доступа к аккаунту в течение 24 часов после подтверждения оплаты.",
  },
  {
    icon: "Wallet",
    title: "Начните использовать",
    description:
      "Получите доступ к своему аккаунту Wise и начните пользоваться всеми его преимуществами.",
  },
];

const HowItWorks: React.FC = () => {
  return (
    <div id="how-it-works" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-wiseDarkGreen">
            Как это работает
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Приобретение аккаунта Wise у нас - это быстрый и простой процесс,
            который занимает всего 4 шага
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line between steps */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-wiseGreen z-0 -translate-x-1/2 transform">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-wiseGreen rounded-full"></div>
                </div>
              )}

              <div className="bg-wiseLight rounded-lg p-6 h-full card-hover relative z-10">
                <div className="w-16 h-16 rounded-full bg-wiseGreen flex items-center justify-center mb-4 mx-auto">
                  <div className="text-wiseDarkGreen">
                    <Icon name={step.icon} size={28} />
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-2 text-wiseDarkGreen">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-wiseDarkGreen text-white flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

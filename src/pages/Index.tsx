import React from "react";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const products = [
  {
    title: "Базовый",
    price: 8900,
    features: [
      "Верифицированный аккаунт",
      "Доступ к основным валютам",
      "Стандартные лимиты переводов",
      "Поддержка в течение 7 дней",
    ],
    popular: false,
  },
  {
    title: "Стандартный",
    price: 15900,
    features: [
      "Все преимущества Базового",
      "Повышенные лимиты переводов",
      "Бизнес-функции",
      "Дополнительные валюты",
      "Поддержка в течение 14 дней",
    ],
    popular: true,
  },
  {
    title: "Премиум",
    price: 24900,
    features: [
      "Все преимущества Стандартного",
      "Максимальные лимиты переводов",
      "Полный доступ ко всем валютам",
      "Расширенная верификация",
      "Безлимитная поддержка",
    ],
    popular: false,
  },
];

const benefits = [
  {
    icon: "Globe",
    title: "Глобальные переводы",
    description:
      "Отправляйте деньги в более чем 80 стран мира с минимальными комиссиями",
  },
  {
    icon: "DollarSign",
    title: "Мультивалютный счёт",
    description: "Храните и управляйте деньгами в 50+ валютах на одном счете",
  },
  {
    icon: "CreditCard",
    title: "Международная карта",
    description:
      "Получите доступ к мультивалютной карте для платежей по всему миру",
  },
  {
    icon: "Zap",
    title: "Мгновенный доступ",
    description: "Получите полностью настроенный аккаунт в течение 24 часов",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Все аккаунты защищены современными методами шифрования",
  },
  {
    icon: "Users",
    title: "Техническая поддержка",
    description: "Наши специалисты готовы помочь вам с любыми вопросами",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 pb-24 px-4 md:px-8 bg-gradient-to-b from-wiseLight to-white">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wiseDarkGreen leading-tight">
                Получите доступ к{" "}
                <span className="text-gradient">международным финансам</span> с
                аккаунтом Wise
              </h1>
              <p className="text-gray-700 text-lg mb-8 max-w-lg">
                Мы предлагаем верифицированные аккаунты Wise для международных
                переводов, мультивалютных операций и глобальных платежей.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Button className="bg-gradient-to-r from-wiseGreen to-wiseMedium text-wiseDarkGreen font-medium hover:shadow-lg transition-all px-8 py-6 text-lg">
                  Заказать аккаунт
                </Button>
                <Button
                  variant="outline"
                  className="border-wiseDarkGreen text-wiseDarkGreen hover:bg-wiseLight py-6 text-lg"
                >
                  <Icon name="MessageCircle" className="mr-2" />
                  Связаться в Telegram
                </Button>
              </div>

              <div className="mt-8 flex items-center">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-wiseMedium border-2 border-white flex items-center justify-center text-white font-bold"
                    >
                      {i}
                    </div>
                  ))}
                </div>
                <div className="ml-4">
                  <p className="text-wiseDarkGreen font-medium">
                    Более 1000 довольных клиентов
                  </p>
                  <div className="flex text-yellow-500 mt-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Icon key={i} name="Star" size={16} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              {/* Здесь была фотография - удалена */}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 md:px-8 bg-wiseLight">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-wiseDarkGreen">
              Наши предложения
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Рассчитайте стоимость аккаунта Wise в соответствии с вашими
              потребностями
            </p>
          </div>

          {/* Калькулятор аккаунтов вместо карточек продуктов */}
          <div className="max-w-4xl mx-auto">
            <AccountCalculator />

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-wiseDarkGreen mb-3">
                Почему выбирают наш сервис
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-wiseGreen">
                    <Icon name="CheckCircle" size={18} />
                  </div>
                  <span className="text-gray-700">
                    Полностью настроенные аккаунты с доступом к глобальной
                    финансовой системе
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-wiseGreen">
                    <Icon name="CheckCircle" size={18} />
                  </div>
                  <span className="text-gray-700">
                    Верификация различного уровня для разных потребностей
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-wiseGreen">
                    <Icon name="CheckCircle" size={18} />
                  </div>
                  <span className="text-gray-700">
                    Возможность получения физической карты для платежей по всему
                    миру
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 text-wiseGreen">
                    <Icon name="CheckCircle" size={18} />
                  </div>
                  <span className="text-gray-700">
                    Техническая поддержка на русском языке
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-wiseDarkGreen">
              Преимущества аккаунтов Wise
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Откройте для себя мир финансовых возможностей с международным
              аккаунтом Wise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-wiseLight rounded-lg p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-wiseGreen flex items-center justify-center mb-4">
                  <div className="text-wiseDarkGreen">
                    <Icon name={benefit.icon} size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2 text-wiseDarkGreen">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <HowItWorks />

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 bg-wiseDarkGreen">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Готовы начать работу с международными финансами?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Приобретите ваш аккаунт Wise сегодня и получите доступ к глобальным
            финансовым возможностям
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button className="bg-wiseGreen text-wiseDarkGreen font-medium hover:bg-opacity-90 transition-all px-8 py-6 text-lg">
              Заказать аккаунт
            </Button>
            <Button
              variant="outline"
              className="border-wiseGreen text-wiseGreen hover:bg-wiseDarkGreen hover:bg-opacity-80 py-6 text-lg"
            >
              <Icon name="MessageCircle" className="mr-2" />
              Задать вопрос
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

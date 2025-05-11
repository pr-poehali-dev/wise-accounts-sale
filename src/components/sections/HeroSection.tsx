import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 pb-24 px-4 md:px-8 bg-gradient-to-b from-wiseLight to-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wiseDarkGreen leading-tight">
              Получите доступ к{" "}
              <span className="text-gradient">международным финансам</span> с
              аккаунтом WISE
            </h1>
            <p className="text-gray-700 text-lg mb-8 max-w-lg">
              Мы предлагаем верифицированные аккаунты WISE для международных
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
            {/* Здесь может быть фотография или иллюстрация */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

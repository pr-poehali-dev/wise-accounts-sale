
import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 pb-24 px-4 md:px-8 bg-gradient-to-b from-wiseLight to-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-wiseDarkGreen leading-tight">
            Получите доступ к{" "}
            <span className="text-gradient">международным финансам</span> с
            аккаунтом WISE
          </h1>
          <p className="text-gray-700 text-lg mb-8">
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

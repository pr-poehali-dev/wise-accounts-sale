import React from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CtaSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-wiseDarkGreen">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-white">
          Готовы начать работу с международными финансами?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">
          Приобретите ваш аккаунт WISE сегодня и получите доступ к глобальным
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
  );
};

export default CtaSection;

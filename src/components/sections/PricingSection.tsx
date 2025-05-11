
import React from "react";
import AccountCalculator from "@/components/AccountCalculator";
import Icon from "@/components/ui/icon";

const PricingSection: React.FC = () => {
  return (
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
  );
};

export default PricingSection;

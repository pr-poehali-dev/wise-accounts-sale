import React from "react";
import AccountCalculator from "@/components/AccountCalculator";

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-wiseDarkGreen">
            Получите аккаунт WISE прямо сейчас
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Рассчитайте стоимость аккаунта WISE в соответствии с вашими
            потребностями
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <AccountCalculator />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

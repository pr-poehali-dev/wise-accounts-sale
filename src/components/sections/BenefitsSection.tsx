
import React from "react";
import Icon from "@/components/ui/icon";
import { benefits } from "@/data/benefits";

const BenefitsSection: React.FC = () => {
  return (
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
  );
};

export default BenefitsSection;

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const AccountCalculator = () => {
  const [quantity, setQuantity] = useState<number>(1);
  const pricePerAccount = 12900; // Фиксированная цена за аккаунт
  const totalPrice = pricePerAccount * quantity;

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-md rounded-xl overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-xl font-medium text-wiseDarkGreen">
            WISE аккаунт
          </h3>
          <span className="text-xl font-semibold text-wiseDarkGreen">
            {pricePerAccount.toLocaleString()} ₽
          </span>
        </div>

        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">Количество:</span>
            <div className="flex items-center space-x-4">
              <button
                onClick={decreaseQuantity}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
                disabled={quantity <= 1}
              >
                <Icon name="Minus" size={16} />
              </button>

              <span className="font-medium text-lg text-wiseDarkGreen w-4 text-center">
                {quantity}
              </span>

              <button
                onClick={increaseQuantity}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
              >
                <Icon name="Plus" size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-2 pt-4 border-t border-gray-100">
          <span className="text-gray-600 text-sm">Итого:</span>
          <span className="text-2xl font-bold text-wiseDarkGreen">
            {totalPrice.toLocaleString()} ₽
          </span>
        </div>
      </CardContent>

      <CardFooter className="px-6 pb-6 pt-0">
        <Button className="w-full bg-wiseDarkGreen text-white font-medium transition-all py-6">
          Заказать сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountCalculator;

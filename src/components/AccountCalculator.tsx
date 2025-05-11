import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
    <Card className="w-full max-w-lg mx-auto shadow-lg">
      <CardHeader className="bg-wiseLight rounded-t-lg">
        <CardTitle className="text-2xl text-center text-wiseDarkGreen">
          Заказать аккаунты WISE
        </CardTitle>
      </CardHeader>

      <CardContent className="pt-6 space-y-6">
        <div className="bg-wiseLight p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-wiseDarkGreen">WISE аккаунт</h3>
            <span className="text-xl font-bold text-wiseDarkGreen">
              {pricePerAccount.toLocaleString()} ₽
            </span>
          </div>

          <p className="text-gray-600 mb-6">
            Полностью верифицированный аккаунт с доступом ко всем функциям Wise.
          </p>

          <div className="flex items-center justify-between bg-white p-3 rounded-md">
            <span className="font-medium text-wiseDarkGreen">
              Количество аккаунтов:
            </span>

            <div className="flex items-center">
              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={decreaseQuantity}
                className="h-8 w-8 border-wiseDarkGreen text-wiseDarkGreen"
                disabled={quantity <= 1}
              >
                <Icon name="Minus" size={16} />
              </Button>

              <span className="mx-4 font-bold text-xl text-wiseDarkGreen w-6 text-center">
                {quantity}
              </span>

              <Button
                type="button"
                size="icon"
                variant="outline"
                onClick={increaseQuantity}
                className="h-8 w-8 border-wiseDarkGreen text-wiseDarkGreen"
              >
                <Icon name="Plus" size={16} />
              </Button>
            </div>
          </div>
        </div>

        {/* Итоговая стоимость */}
        <div className="bg-wiseDarkGreen p-4 rounded-lg text-white">
          <div className="flex justify-between items-center">
            <h3 className="font-bold">Итоговая стоимость:</h3>
            <span className="text-2xl font-bold">
              {totalPrice.toLocaleString()} ₽
            </span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center">
        <Button className="w-full bg-gradient-to-r from-wiseGreen to-wiseMedium text-wiseDarkGreen font-medium hover:shadow-lg transition-all">
          <Icon name="ShoppingCart" className="mr-2" size={18} />
          Заказать сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountCalculator;

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  title: string;
  price: number;
  features: string[];
  popular?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  features,
  popular = false,
}) => {
  return (
    <Card
      className={`card-hover ${popular ? "border-2 border-wiseGreen relative" : ""}`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-wiseGreen text-wiseDarkGreen px-4 py-1 rounded-full font-medium text-sm">
          Популярный выбор
        </div>
      )}

      <CardHeader className={popular ? "bg-wiseLight rounded-t-lg" : ""}>
        <CardTitle className="text-xl text-center text-wiseDarkGreen">
          {title}
        </CardTitle>
        <CardDescription className="text-center">WISE аккаунт</CardDescription>
      </CardHeader>

      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <span className="text-4xl font-bold text-wiseDarkGreen">
            {price} ₽
          </span>
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="mr-2 mt-1 text-wiseGreen">
                <Icon name="Check" size={18} />
              </div>
              <span className="text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={`w-full ${popular ? "bg-gradient-to-r from-wiseGreen to-wiseMedium text-wiseDarkGreen" : "bg-wiseDarkGreen text-white hover:bg-opacity-90"}`}
        >
          Заказать сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;

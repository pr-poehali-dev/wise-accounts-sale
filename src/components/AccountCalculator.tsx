
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

const AccountCalculator = () => {
  const [accountType, setAccountType] = useState<'personal'|'business'>('personal');
  const [verificationLevel, setVerificationLevel] = useState<'basic'|'standard'|'advanced'>('basic');
  const [additionalCurrencies, setAdditionalCurrencies] = useState<number>(0);
  const [needCard, setNeedCard] = useState<boolean>(false);
  const [priority, setPriority] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Базовые цены
  const basePrices = {
    personal: {
      basic: 7900,
      standard: 12900,
      advanced: 18900
    },
    business: {
      basic: 14900,
      standard: 19900,
      advanced: 29900
    }
  };

  // Дополнительные стоимости
  const additionalCosts = {
    currencyPrice: 500,  // Цена за каждую дополнительную валюту
    cardPrice: 4000,     // Цена за карту
    priorityPrice: 5000  // Доплата за приоритетное обслуживание
  };

  // Пересчитываем итоговую стоимость при изменении любого параметра
  useEffect(() => {
    const basePrice = basePrices[accountType][verificationLevel];
    const currencyCost = additionalCurrencies * additionalCosts.currencyPrice;
    const cardCost = needCard ? additionalCosts.cardPrice : 0;
    const priorityCost = priority ? additionalCosts.priorityPrice : 0;
    
    const total = basePrice + currencyCost + cardCost + priorityCost;
    setTotalPrice(total);
  }, [accountType, verificationLevel, additionalCurrencies, needCard, priority]);

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg">
      <CardHeader className="bg-wiseLight rounded-t-lg">
        <CardTitle className="text-2xl text-center text-wiseDarkGreen">Калькулятор стоимости аккаунта</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-6 space-y-6">
        {/* Тип аккаунта */}
        <div className="space-y-2">
          <Label className="text-wiseDarkGreen font-medium">Тип аккаунта</Label>
          <div className="grid grid-cols-2 gap-4">
            <Button 
              type="button"
              variant={accountType === 'personal' ? 'default' : 'outline'}
              className={accountType === 'personal' ? 'bg-gradient-to-r from-wiseGreen to-wiseMedium text-wiseDarkGreen' : 'border-wiseDarkGreen text-wiseDarkGreen'}
              onClick={() => setAccountType('personal')}
            >
              <Icon name="User" className="mr-2" size={18} />
              Персональный
            </Button>
            <Button 
              type="button"
              variant={accountType === 'business' ? 'default' : 'outline'}
              className={accountType === 'business' ? 'bg-gradient-to-r from-wiseGreen to-wiseMedium text-wiseDarkGreen' : 'border-wiseDarkGreen text-wiseDarkGreen'}
              onClick={() => setAccountType('business')}
            >
              <Icon name="Briefcase" className="mr-2" size={18} />
              Бизнес
            </Button>
          </div>
        </div>
        
        {/* Уровень верификации */}
        <div className="space-y-2">
          <Label className="text-wiseDarkGreen font-medium">Уровень верификации</Label>
          <Select 
            value={verificationLevel} 
            onValueChange={(value: 'basic' | 'standard' | 'advanced') => setVerificationLevel(value)}
          >
            <SelectTrigger className="w-full border-wiseDarkGreen">
              <SelectValue placeholder="Выберите уровень верификации" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="basic">Базовый (лимиты до $2000)</SelectItem>
              <SelectItem value="standard">Стандартный (лимиты до $10000)</SelectItem>
              <SelectItem value="advanced">Расширенный (лимиты до $50000+)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        {/* Количество дополнительных валют */}
        <div className="space-y-4">
          <div className="flex justify-between">
            <Label className="text-wiseDarkGreen font-medium">Дополнительные валюты</Label>
            <span className="text-wiseDarkGreen font-medium">{additionalCurrencies}</span>
          </div>
          <Slider 
            value={[additionalCurrencies]} 
            min={0}
            max={10}
            step={1}
            onValueChange={(value) => setAdditionalCurrencies(value[0])}
            className="py-4"
          />
          <p className="text-sm text-gray-600">Каждая дополнительная валюта: {additionalCosts.currencyPrice} ₽</p>
        </div>
        
        {/* Дополнительные опции */}
        <div className="space-y-4">
          <h3 className="font-medium text-wiseDarkGreen">Дополнительные опции</h3>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-700" htmlFor="card-switch">Физическая карта Wise</Label>
              <p className="text-sm text-gray-600">Дополнительно: {additionalCosts.cardPrice} ₽</p>
            </div>
            <Switch 
              id="card-switch" 
              checked={needCard} 
              onCheckedChange={setNeedCard} 
              className="data-[state=checked]:bg-wiseGreen"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <Label className="text-gray-700" htmlFor="priority-switch">Приоритетная настройка (24ч)</Label>
              <p className="text-sm text-gray-600">Дополнительно: {additionalCosts.priorityPrice} ₽</p>
            </div>
            <Switch 
              id="priority-switch" 
              checked={priority} 
              onCheckedChange={setPriority} 
              className="data-[state=checked]:bg-wiseGreen"
            />
          </div>
        </div>
        
        {/* Итоговая стоимость */}
        <div className="bg-wiseLight p-4 rounded-lg">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-wiseDarkGreen">Итоговая стоимость:</h3>
            <span className="text-2xl font-bold text-wiseDarkGreen">{totalPrice.toLocaleString()} ₽</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-center pt-0">
        <Button className="w-full md:w-auto bg-gradient-to-r from-wiseGreen to-wiseMedium text-wiseDarkGreen font-medium">
          <Icon name="ShoppingCart" className="mr-2" size={18} />
          Заказать сейчас
        </Button>
      </CardFooter>
    </Card>
  );
};

export default AccountCalculator;

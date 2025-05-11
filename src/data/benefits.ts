
import { LucideIcon } from "lucide-react";

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}

export const benefits: Benefit[] = [
  {
    icon: "Globe",
    title: "Глобальные переводы",
    description:
      "Отправляйте деньги в более чем 80 стран мира с минимальными комиссиями",
  },
  {
    icon: "DollarSign",
    title: "Мультивалютный счёт",
    description: "Храните и управляйте деньгами в 50+ валютах на одном счете",
  },
  {
    icon: "CreditCard",
    title: "Международная карта",
    description:
      "Получите доступ к мультивалютной карте для платежей по всему миру",
  },
  {
    icon: "Zap",
    title: "Мгновенный доступ",
    description: "Получите полностью настроенный аккаунт в течение 24 часов",
  },
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Все аккаунты защищены современными методами шифрования",
  },
  {
    icon: "Users",
    title: "Техническая поддержка",
    description: "Наши специалисты готовы помочь вам с любыми вопросами",
  },
];

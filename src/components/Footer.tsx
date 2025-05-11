import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const Footer: React.FC = () => {
  return (
    <footer className="bg-wiseDarkGreen text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-wiseGreen flex items-center justify-center">
                <span className="text-wiseDarkGreen font-bold text-xl">W</span>
              </div>
              <span className="text-white font-bold text-xl">WiseAccounts</span>
            </div>
            <p className="text-gray-300 text-sm">
              Мы предоставляем доступ к аккаунтам Wise для международных
              переводов и мультивалютных операций.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-wiseGreen">Ссылки</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link to="/" className="hover:text-wiseGreen transition-colors">
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/prices"
                  className="hover:text-wiseGreen transition-colors"
                >
                  Цены
                </Link>
              </li>
              <li>
                <Link
                  to="/how-it-works"
                  className="hover:text-wiseGreen transition-colors"
                >
                  Как это работает
                </Link>
              </li>
              <li>
                <Link
                  to="/faq"
                  className="hover:text-wiseGreen transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-wiseGreen">
              Правовая информация
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-wiseGreen transition-colors"
                >
                  Условия использования
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-wiseGreen transition-colors"
                >
                  Политика конфиденциальности
                </Link>
              </li>
              <li>
                <Link
                  to="/refund"
                  className="hover:text-wiseGreen transition-colors"
                >
                  Политика возврата
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-wiseGreen">
              Связаться с нами
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <Icon name="Mail" size={16} className="mr-2" />
                <a
                  href="mailto:contact@wiseaccounts.com"
                  className="hover:text-wiseGreen transition-colors"
                >
                  contact@wiseaccounts.com
                </a>
              </li>
              <li className="flex items-center">
                <Icon name="MessageCircle" size={16} className="mr-2" />
                <a
                  href="https://t.me/wiseaccounts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-wiseGreen transition-colors"
                >
                  Telegram: @wiseaccounts
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3 text-wiseGreen">
                Мы принимаем
              </h4>
              <div className="flex space-x-3">
                <Icon name="CreditCard" size={24} className="text-gray-300" />
                <Icon name="Bitcoin" size={24} className="text-gray-300" />
                <Icon name="Landmark" size={24} className="text-gray-300" />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} WiseAccounts. Все права защищены.
          </p>
          <p className="mt-1 text-xs">
            WISE является зарегистрированным товарным знаком Wise Payments
            Limited. Наш сервис не связан с Wise Payments Limited.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

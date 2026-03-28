export const CLINIC = {
  name: "НаркоПомощь 24",
  phone: "+7 (495) 000-00-00",
  phoneHref: "tel:+74950000000",
  address: "г. Москва, ул. Примерная, д. 10",
  workHours: "Круглосуточно, без выходных",
  email: "info@narkopomosh24.ru",
} as const;

export const NAV_LINKS = [
  { label: "Главная", href: "#hero" },
  { label: "Услуги", href: "#services" },
  { label: "Цены", href: "#prices" },
  { label: "Преимущества", href: "#why-us" },
  { label: "О процедуре", href: "#info" },
  { label: "Контакты", href: "#contacts" },
] as const;

export const SERVICES = [
  {
    title: "Вывод из запоя",
    description: "Безопасное и эффективное снятие абстинентного синдрома на дому или в стационаре. Капельницы, медикаментозная поддержка.",
    icon: "💊",
  },
  {
    title: "Социальная реабилитация",
    description: "Комплексная программа восстановления: ресоциализация, трудовая адаптация, групповая терапия и поддержка на каждом этапе возвращения к полноценной жизни.",
    icon: "🤝",
  },
  {
    title: "Вызов нарколога",
    description: "Выезд врача-нарколога на дом в течение 30 минут. Анонимно, круглосуточно, по всей Москве и области.",
    icon: "🚑",
  },
] as const;

export const PRICES_HOME = [
  { service: "Стандартная капельница", condition: "Лёгкое состояние", price: "4 500 ₽" },
  { service: "Двойная капельница", condition: "Среднее состояние", price: "6 500 ₽" },
  { service: "Усиленная терапия", condition: "Тяжёлое состояние", price: "8 500 ₽" },
  { service: "VIP-детоксикация", condition: "Любое состояние", price: "12 000 ₽" },
] as const;

export const PRICES_CLINIC = [
  { service: "Дневной стационар", condition: "Лёгкое/среднее", price: "6 000 ₽/сут" },
  { service: "Круглосуточный стационар", condition: "Среднее/тяжёлое", price: "8 000 ₽/сут" },
  { service: "VIP-палата", condition: "Любое состояние", price: "16 500 ₽/сут" },
  { service: "Метаболическая терапия", condition: "Дополнительно", price: "2 500 ₽" },
] as const;

export const ADVANTAGES = [
  { title: "Круглосуточно", description: "Работаем 24/7, выезд в любое время дня и ночи", icon: "🕐" },
  { title: "Лицензия", description: "Все врачи имеют лицензии и сертификаты", icon: "📋" },
  { title: "Анонимность", description: "Полная конфиденциальность, не ставим на учёт", icon: "🔒" },
  { title: "Опыт 15+ лет", description: "Команда опытных наркологов и терапевтов", icon: "👨‍⚕️" },
] as const;

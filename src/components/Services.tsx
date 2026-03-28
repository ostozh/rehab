import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Наши услуги
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Оказываем полный спектр наркологических услуг на дому и в стационаре
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Помощь психолога */}
        <div className="mt-16 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-indigo-100">
          <div className="max-w-3xl mx-auto text-center">
            <div className="text-5xl mb-4">🧠</div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Помощь психолога
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Индивидуальные и семейные консультации с опытным психологом. Работа с созависимостью,
              мотивационное консультирование, когнитивно-поведенческая терапия. Помогаем разобраться
              в причинах зависимости и выстроить устойчивую ремиссию.
            </p>
            <div className="grid sm:grid-cols-3 gap-4 text-sm">
              <div className="bg-white/70 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Индивидуальные сессии</p>
                <p className="text-gray-500 mt-1">Личная работа с психологом по вашему запросу</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Семейная терапия</p>
                <p className="text-gray-500 mt-1">Восстановление отношений и работа с созависимостью</p>
              </div>
              <div className="bg-white/70 rounded-xl p-4">
                <p className="font-semibold text-gray-900">Групповая поддержка</p>
                <p className="text-gray-500 mt-1">Терапевтические группы и программы взаимопомощи</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

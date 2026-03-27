export default function InfoSection() {
  return (
    <section id="info" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
          Как проходит вывод из запоя
        </h2>

        <div className="space-y-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Когда необходима наркологическая помощь?</h3>
            <p className="text-gray-600 leading-relaxed">
              Запой — это опасное состояние, при котором человек непрерывно употребляет алкоголь на протяжении двух и более суток.
              При этом организм испытывает сильнейшую интоксикацию, нарушается работа сердца, печени, нервной системы.
              Самостоятельный выход из запоя может быть опасен для жизни — резкое прекращение приёма алкоголя без медицинского контроля
              грозит судорогами, делирием и другими тяжёлыми осложнениями.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Этапы лечения</h3>
            <ol className="space-y-4">
              {[
                { step: "1", title: "Осмотр и диагностика", text: "Врач-нарколог оценивает состояние пациента, измеряет давление, пульс, проводит экспресс-диагностику." },
                { step: "2", title: "Детоксикация", text: "Установка капельницы с индивидуально подобранным составом для выведения токсинов и восстановления водно-солевого баланса." },
                { step: "3", title: "Медикаментозная поддержка", text: "Назначение седативных, гепатопротекторов, витаминов группы B и других препаратов по показаниям." },
                { step: "4", title: "Наблюдение и рекомендации", text: "Врач контролирует состояние пациента, даёт рекомендации по дальнейшему лечению и профилактике рецидивов." },
              ].map((item) => (
                <li key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {item.step}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{item.title}</div>
                    <p className="text-gray-600 text-sm mt-1">{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">На дому или в стационаре?</h3>
            <p className="text-gray-600 leading-relaxed">
              Лечение на дому подходит при лёгкой и средней степени интоксикации, когда пациент находится в стабильном состоянии.
              Стационар рекомендуется при тяжёлом запое длительностью более 5 суток, наличии хронических заболеваний,
              а также при риске развития алкогольного делирия. Наши врачи помогут определить оптимальный вариант лечения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { CLINIC } from "@/lib/constants";

export default function Footer() {
  return (
    <footer id="contacts" className="bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="font-bold text-lg mb-3">{CLINIC.name}</div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Профессиональная наркологическая помощь в Москве и Московской области. Лицензированная клиника с опытом работы более 15 лет.
            </p>
          </div>

          <div>
            <div className="font-bold text-lg mb-3">Контакты</div>
            <div className="space-y-2 text-sm text-gray-400">
              <div>
                <span className="text-gray-500">Телефон: </span>
                <a href={CLINIC.phoneHref} className="text-orange-400 hover:text-orange-300">
                  {CLINIC.phone}
                </a>
              </div>
              <div>
                <span className="text-gray-500">Email: </span>
                <span>{CLINIC.email}</span>
              </div>
              <div>
                <span className="text-gray-500">Адрес: </span>
                <span>{CLINIC.address}</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-lg mb-3">Режим работы</div>
            <p className="text-gray-400 text-sm">{CLINIC.workHours}</p>
            <p className="text-gray-400 text-sm mt-2">
              Выезд врача по Москве и МО
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {CLINIC.name}. Все права защищены.
          <br />
          <span className="text-xs">Имеются противопоказания. Необходима консультация специалиста.</span>
        </div>
      </div>
    </footer>
  );
}

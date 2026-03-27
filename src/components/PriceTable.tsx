import { PRICES_HOME, PRICES_CLINIC } from "@/lib/constants";
import CallButton from "./CallButton";

function Table({ title, data }: { title: string; data: ReadonlyArray<{ service: string; condition: string; price: string }> }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="bg-gray-900 text-white px-6 py-4">
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100">
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-500">Услуга</th>
              <th className="text-left px-6 py-3 text-sm font-semibold text-gray-500">Состояние</th>
              <th className="text-right px-6 py-3 text-sm font-semibold text-gray-500">Стоимость</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.service} className="border-b border-gray-50 hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{row.service}</td>
                <td className="px-6 py-4 text-gray-600">{row.condition}</td>
                <td className="px-6 py-4 text-right font-bold text-orange-500 whitespace-nowrap">{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function PriceTable() {
  return (
    <section id="prices" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Цены на услуги
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Прозрачное ценообразование без скрытых платежей
        </p>
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <Table title="Лечение на дому" data={PRICES_HOME} />
          <Table title="Стационар" data={PRICES_CLINIC} />
        </div>
        <div className="text-center">
          <CallButton />
          <p className="mt-4 text-sm text-gray-500">Точная стоимость определяется врачом после осмотра</p>
        </div>
      </div>
    </section>
  );
}

import { ADVANTAGES } from "@/lib/constants";

export default function WhyUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
          Почему выбирают нас
        </h2>
        <p className="text-center text-gray-500 mb-12 max-w-xl mx-auto">
          Профессиональная помощь с гарантией результата
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ADVANTAGES.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

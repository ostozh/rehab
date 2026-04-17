import CallButton from "./CallButton";

export default function Hero() {
  return (
    <section id="hero" className="relative text-white py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2000&q=80')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80" />
      <div className="relative max-w-7xl mx-auto px-4 text-center">
        <div className="inline-block bg-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
          Выезд за 30 минут
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Вывод из запоя<br />
          <span className="text-orange-400">на дому и в стационаре</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Профессиональная наркологическая помощь круглосуточно. Анонимно, безопасно, эффективно. Врач приедет в течение 30 минут.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CallButton className="text-lg px-8 py-4" />
          <a
            href="#prices"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-lg transition-colors text-lg"
          >
            Узнать цены
          </a>
        </div>
      </div>
    </section>
  );
}

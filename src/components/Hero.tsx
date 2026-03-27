import CallButton from "./CallButton";

export default function Hero() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 md:py-32">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyem0wLTMwVjBoLTEydjRoMTJ6TTI0IDI0aDEydi0ySDI0djJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
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

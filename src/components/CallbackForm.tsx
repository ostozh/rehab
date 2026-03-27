"use client";

import { useState } from "react";

export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-gray-900 text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Закажите обратный звонок
        </h2>
        <p className="text-gray-400 mb-8">
          Оставьте свои контакты и наш специалист перезвонит вам в течение 5 минут
        </p>

        {submitted ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8">
            <div className="text-4xl mb-4">✓</div>
            <h3 className="text-xl font-bold mb-2">Заявка отправлена!</h3>
            <p className="text-gray-400">Наш специалист свяжется с вами в ближайшее время</p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="text"
              placeholder="Ваше имя"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
            <input
              type="tel"
              placeholder="+7 (___) ___-__-__"
              required
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 font-semibold rounded-lg transition-colors whitespace-nowrap"
            >
              Позвоните мне
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

import { CLINIC } from "@/lib/constants";
import CallButton from "./CallButton";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
            Н
          </div>
          <div>
            <div className="font-bold text-lg text-gray-900 leading-tight">{CLINIC.name}</div>
            <div className="text-xs text-gray-500">{CLINIC.workHours}</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <div className="text-right">
            <a href={CLINIC.phoneHref} className="text-xl font-bold text-orange-500 hover:text-orange-600">
              {CLINIC.phone}
            </a>
            <div className="text-xs text-gray-500">Выезд нарколога по Москве и МО</div>
          </div>
          <CallButton />
        </div>

        <div className="md:hidden">
          <a
            href={CLINIC.phoneHref}
            className="inline-flex items-center justify-center w-10 h-10 bg-orange-500 text-white rounded-full"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.58.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.24 1.01l-2.2 2.2z" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}

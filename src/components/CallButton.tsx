import { CLINIC } from "@/lib/constants";

export default function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CLINIC.phoneHref}
      className={`inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors shadow-lg shadow-orange-500/25 ${className}`}
    >
      Срочный вызов
    </a>
  );
}

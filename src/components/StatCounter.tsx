import { useCountUp } from '@/hooks/useCountUp';

interface StatCounterProps {
  value: string;
  label: string;
  suffix?: string;
}

export function StatCounter({ value, label, suffix = '' }: StatCounterProps) {
  const numericValue = parseInt(value, 10);
  const [count, ref] = useCountUp(numericValue, 2000);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-[#0d6efd] mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-[#6c757d] text-sm md:text-base">{label}</div>
    </div>
  );
}

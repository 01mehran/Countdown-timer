// Hooks;
import { useEffect, useState } from "react";

// Components;
import NowruzTimeUnit from "../../components/Nowruz/NowruzTimeUnit";

// Types;
export type TTimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function NowruzTimer() {
  const [timeLeft, setTimeLeft] = useState<TTimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Current time;
      const now = new Date();

      // Current gregorian year;
      const currentYear = now.getFullYear();

      // Next Nowruz;
      let nextNowruz = new Date(currentYear, 2, 20, 0, 0, 0);

      // If we are in Nowruz time or pass it, get nex Nowruz;
      if (now >= nextNowruz) {
        nextNowruz = new Date(currentYear + 1, 2, 20, 0, 0, 0);
      }

      // Milliseconds remaining until next New Year
      const diff = nextNowruz.getTime() - now.getTime();

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-dvh bg-[url('./assets/background.png')] md:bg-bottom bg-cover bg-right bg-no-repeat text-slate-700 w-full flex items-center  gap-16 flex-col space-y-0.5">
      <NowruzTimeUnit timeLeft={timeLeft} />
    </div>
  );
}

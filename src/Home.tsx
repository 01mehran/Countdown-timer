import { useEffect, useState } from "react";
import Header from "./components/Header";

type TTimeLeft = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Home() {
  // states;
  const [timeLeft, setTimeLeft] = useState<TTimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      // Current time;
      const now = new Date();

      // Next New Year date;
      const newYearDate = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

      // Milliseconds remaining until next New Yearک
      const diff = newYearDate.getTime() - now.getTime();

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60 * 24)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24)) % 30;
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));

      setTimeLeft({ months, days, hours, minutes, seconds });
    }, 1000);

    // Clean-up
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-dvh bg-[url('./assets/background.png')] md:bg-bottom bg-cover bg-right bg-no-repeat text-slate-700 w-full flex items-center py-30 gap-16 flex-col space-y-0.5">
      <Header />

      <div className="flex items-center justify-evenly w-full flex-wrap space-y-3 sm:space-y-0">
        <article className="timeBox">
          <time className="text-6xl font-bold">{timeLeft.months}</time>
          <span className="text-[12px] font-medium">months</span>
        </article>
        <article className="timeBox">
          <time className="text-6xl font-bold">{timeLeft.days}</time>
          <span className="text-[12px] font-medium">days</span>
        </article>
        <article className="timeBox">
          <time className="text-6xl font-bold">{timeLeft.hours}</time>
          <span className="text-[12px] font-medium">hours</span>
        </article>
        <article className="timeBox">
          <time className="text-6xl font-bold">{timeLeft.minutes}</time>
          <span className="text-[12px] font-medium">minutes</span>
        </article>
        <article className="timeBox">
          <time className="text-6xl font-bold">{timeLeft.seconds}</time>
          <span className="text-[12px] font-medium">seconds</span>
        </article>
      </div>
    </div>
  );
}

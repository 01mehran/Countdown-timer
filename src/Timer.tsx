import { useEffect, useState } from "react";
import Header from "./components/Header";
import TimeUnit from "./components/TimeUnit";

type TTimeLeft = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function Timer() {
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

      if (now >= newYearDate) {
        clearInterval(interval);
        setTimeLeft({
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      let months =
        (newYearDate.getFullYear() - now.getFullYear()) * 12 +
        (newYearDate.getMonth() - now.getMonth());

      const tempDate = new Date(now);
      tempDate.setMonth(tempDate.getMonth() + months);

      if (tempDate > newYearDate) {
        months--;
        tempDate.setMonth(tempDate.getMonth() - 1);
      }

      // Milliseconds remaining until next New Yearک
      const diff = newYearDate.getTime() - tempDate.getTime();

      const seconds = Math.floor(diff / 1000) % 60;
      const minutes = Math.floor(diff / (1000 * 60)) % 60;
      const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      setTimeLeft({ months, days, hours, minutes, seconds });
    }, 1000);

    // Clean-up
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-dvh bg-[url('./assets/background.png')] md:bg-bottom bg-cover bg-right bg-no-repeat text-slate-700 w-full flex items-center py-30 gap-16 flex-col space-y-0.5">
      <Header />

      <div className="flex items-center justify-evenly w-full flex-wrap space-y-3 sm:space-y-0">
        <TimeUnit timeUnitLeft={timeLeft.months} timeUnitName="months" />
        <TimeUnit timeUnitLeft={timeLeft.days} timeUnitName="days" />
        <TimeUnit timeUnitLeft={timeLeft.hours} timeUnitName="hours" />
        <TimeUnit timeUnitLeft={timeLeft.minutes} timeUnitName="minutes" />
        <TimeUnit timeUnitLeft={timeLeft.seconds} timeUnitName="seconds" />
      </div>
    </div>
  );
}

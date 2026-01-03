// Hooks;
import { useEffect, useState } from "react";

// Components;
import NewYearTimeMsg from "../../components/GregorianNewYear/NewYearTimeMsg";
import NewYearTimeUnits from "../../components/GregorianNewYear/NewYearTimeUnits";

// Types;
export type TTimeLeft = {
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
  const [isNewYearTime, setIsNewYearTime] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Current time;
      const now = new Date();

      // Check New Year day;
      const isNewYear =
        now.getMonth() === 0 &&
        now.getDate() === 1 &&
        now.getHours() === 0 &&
        now.getMinutes() === 0 &&
        now.getSeconds() === 0;

      if (isNewYear) {
        setIsNewYearTime(true);
        return;
      } else {
        setIsNewYearTime(false);
      }

      // Next New Year date;
      const newYearDate = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);

      let months =
        (newYearDate.getFullYear() - now.getFullYear()) * 12 +
        (newYearDate.getMonth() - now.getMonth());

      const tempDate = new Date(now);
      tempDate.setMonth(tempDate.getMonth() + months);

      if (tempDate > newYearDate) {
        months--;
        tempDate.setMonth(tempDate.getMonth() - 1);
      }

      // Milliseconds remaining until next New Year;
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
    <div className="min-h-dvh bg-[url('./assets/images/background.png')] md:bg-bottom bg-cover bg-right bg-no-repeat text-slate-700 w-full gap-16  space-y-0.5">
      {isNewYearTime ? (
        <NewYearTimeMsg isNewYearTime={isNewYearTime} />
      ) : (
        <NewYearTimeUnits timeLeft={timeLeft} />
      )}
    </div>
  );
}

// Hooks;
import { useEffect } from "react";

// Components;
import NowruzTimeUnit from "../../components/Nowruz/NowruzTimeUnit";

export default function NowruzTimer() {
  useEffect(() => {
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

    // Milliseconds remaining until next Nowruz;
    const diff = nextNowruz.getTime() - now.getTime();

    console.log("Now:", now);
    console.log("Next Nowruz:", nextNowruz);
    console.log("Diff (ms):", diff);
  }, []);

  return (
    <div className="min-h-dvh bg-[url('./assets/background.png')] md:bg-bottom bg-cover bg-right bg-no-repeat text-slate-700 w-full flex items-center  gap-16 flex-col space-y-0.5">
      <NowruzTimeUnit />
    </div>
  );
}

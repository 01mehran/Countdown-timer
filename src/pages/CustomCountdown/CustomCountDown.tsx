// Hooks;
import { useEffect, useRef, useState } from "react";

// Components
import NavBar from "@compos/NavBar";
import DisplayTime from "@compos/CustomCountdown/DisplayTime";
import ActionButtons from "@compos/CustomCountdown/ActionButtons";
import SelectOptionsBox from "@compos/CustomCountdown/SelectOptionsBox";

export default function CustomCountDown() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<number | null>(null);

  const handleStartTimer = () => {
    const total = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

    if (total <= 0) return;

    setTotalSeconds(total);
    setIsRunning(true);

    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  const handleStopTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setIsRunning(false);
    setTotalSeconds(0);
  };

  useEffect(() => {
    if (!isRunning || totalSeconds <= 0) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, totalSeconds]);

  useEffect(() => {
    if (totalSeconds === 0) {
      setIsRunning(false);
    }
  }, [totalSeconds]);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTotalSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  const displayHours = Math.floor(totalSeconds / 3600);
  const displayMinutes = Math.floor((totalSeconds % 3600) / 60);
  const dispaySeconds = totalSeconds % 60;

  return (
    <div className="min-h-dvh bg-[url('./assets/images/background.png')] md:bg-bottom bg-cover bg-right bg-no-repeat text-slate-700 w-full flex items-center  gap-16 flex-col space-y-0.5">
      <NavBar />

      <div className="w-full text-center">
        <header className="font-semibold text-xl">
          Create your countdown <span>&darr;</span>
        </header>

        {/* Select time box */}
        <SelectOptionsBox
          isRunning={isRunning}
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          setHours={setHours}
          setMinutes={setMinutes}
          setSeconds={setSeconds}
        />

        {/* Time; */}
        <section className="flex items-center justify-center text-3xl max-w-4xl w-full mx-auto mt-20">
          <DisplayTime selectedTime={displayHours} timeTitle="hours" /> :
          <DisplayTime selectedTime={displayMinutes} timeTitle="minutes" /> :
          <DisplayTime selectedTime={dispaySeconds} timeTitle="seconds" />
        </section>

        {/* Action buttons */}
        <ActionButtons
          onHandleStartTimer={handleStartTimer}
          onHandleStopTimer={handleStopTimer}
          isRunning={isRunning}
        />
      </div>
    </div>
  );
}

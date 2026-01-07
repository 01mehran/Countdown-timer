import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import SelectOptions from "../../components/CustomCountdown/SelectOptions";
import DisplayTime from "../../components/CustomCountdown/DisplayTime";

export default function CustomCountDown() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const [totalSeconds, setTotalSeconds] = useState(0);
  const [isRuninng, setIsRunning] = useState(false);

  const handleStartTimer = () => {
    const total = Number(hours) * 3600 + Number(minutes) * 60 + Number(seconds);

    if (total <= 0) return;

    setTotalSeconds(total);
    setIsRunning(true);
  };

  useEffect(() => {
    if (!isRuninng || totalSeconds <= 0) return;

    const interval = setInterval(() => {
      setTotalSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRuninng, totalSeconds]);

  useEffect(() => {
    if (totalSeconds === 0) {
      setIsRunning(false);
    }
  }, [totalSeconds]);

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

        {/* Select time */}
        <section className="flex justify-center gap-4 mt-14 ">
          {/* Hours; */}
          <SelectOptions onChange={setHours} optionTitle="hours" length={24} />

          {/* Minutes */}
          <SelectOptions
            onChange={setMinutes}
            optionTitle="minutes"
            length={60}
          />

          {/* Seconds */}
          <SelectOptions
            onChange={setSeconds}
            optionTitle="seconds"
            length={60}
          />
        </section>

        {/* Time; */}
        <section className="flex items-center justify-center text-3xl max-w-4xl w-full mx-auto mt-20">
          <DisplayTime selectedTime={displayHours} timeTitle="hours" />
          <DisplayTime selectedTime={displayMinutes} timeTitle="minutes" />
          <DisplayTime selectedTime={dispaySeconds} timeTitle="seconds" />
        </section>

        {/* Action buttons */}
        <section className="mt-12 gap-2 mx-auto  flex items-center flex-wrap justify-center">
          <button
            onClick={handleStartTimer}
            className="w-38 py-1 cursor-pointer shadow-[1px_1px_5px_rgba(0,0,0,.6)] font-semibold rounded-full "
          >
            Start
          </button>
          <button className="w-38 py-1 cursor-pointer shadow-[1px_1px_5px_rgba(0,0,0,.6)] font-semibold rounded-full ">
            Stop
          </button>
        </section>
      </div>
    </div>
  );
}

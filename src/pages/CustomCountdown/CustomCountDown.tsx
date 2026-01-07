import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";

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
          <article className="w-[25%] py-2 rounded-md px-2  shadow-[1px_1px_5px_rgba(0,0,0,.6)]">
            <select
              className=" w-full h-full border-0 outline-0 text-lg"
              defaultValue=""
              onChange={(e) => setHours(+e.target.value)}
            >
              <option value="" disabled hidden>
                hours
              </option>
              {Array.from({ length: 24 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </article>
          {/* Minutes */}
          <article className="w-[25%] py-2 rounded-md px-2  shadow-[1px_1px_5px_rgba(0,0,0,.6)]">
            <select
              className="w-full h-full  border-0 outline-0 text-lg"
              defaultValue=""
              onChange={(e) => setMinutes(+e.target.value)}
            >
              <option value="" disabled hidden>
                minutes
              </option>
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </article>
          {/* Seconds */}
          <article className="w-[25%] py-2 rounded-md px-2 shadow-[1px_1px_5px_rgba(0,0,0,.6)]">
            <select
              className=" w-full h-full border-0 outline-0 text-lg"
              defaultValue=""
              onChange={(e) => setSeconds(+e.target.value)}
            >
              <option value="" disabled hidden>
                seconds
              </option>
              {Array.from({ length: 60 }, (_, i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
          </article>
        </section>

        {/* Time; */}
        <section className="flex items-center justify-center text-3xl max-w-4xl w-full mx-auto mt-20">
          <article className="flex flex-col w-full">
            <time>{displayHours.toString().padStart(2, "0")}</time>
            <span className="text-sm font-medium">hours</span>
          </article>
          :
          <article className="flex flex-col w-full">
            <time>{displayMinutes.toString().padStart(2, "0")}</time>
            <span className="text-sm font-medium">minutes</span>
          </article>
          :
          <article className="flex flex-col w-full">
            <time>{dispaySeconds.toString().padStart(2, "0")}</time>
            <span className="text-sm font-medium">seconds</span>
          </article>
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

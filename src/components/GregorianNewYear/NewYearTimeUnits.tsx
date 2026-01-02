// Types;
import type { TTimeLeft } from "../../pages/GregorianNewYear/Timer";
import NavBar from "../NavBar";

// Componenets;
import Header from "./Header";
import TimeUnit from "./TimeUnit";

// Types;
type NewYearTimeUnitsProps = {
  timeLeft: TTimeLeft;
};

export default function NewYearTimeUnits({ timeLeft }: NewYearTimeUnitsProps) {
  return (
    <div className=" w-full flex-col h-dvh ">
      <NavBar />
      <div className="py-22">
        <Header />
        <div className="flex items-center justify-evenly w-full flex-wrap space-y-3 sm:space-y-0 py-20">
          {timeLeft.months > 0 && (
            <TimeUnit timeUnitLeft={timeLeft.months} timeUnitName="months" />
          )}

          {timeLeft.days > 0 && (
            <TimeUnit timeUnitLeft={timeLeft.days} timeUnitName="days" />
          )}
          {timeLeft.hours > 0 && (
            <TimeUnit timeUnitLeft={timeLeft.hours} timeUnitName="hours" />
          )}

          <TimeUnit timeUnitLeft={timeLeft.minutes} timeUnitName="minutes" />

          <TimeUnit timeUnitLeft={timeLeft.seconds} timeUnitName="seconds" />
        </div>
      </div>
    </div>
  );
}

import Header from "../Nowruz/Header";
import NavBar from "../NavBar";
import TimeUnit from "../Nowruz/TimeUnit";
import type { TTimeLeft } from "../../pages/Nowruz/Timer";

type TNowruzTimeUnit = {
  timeLeft: TTimeLeft;
};

export default function NowruzTimeUnit({ timeLeft }: TNowruzTimeUnit) {
  return (
    <div className="w-full flex-col h-dvh overflow-hidden">
      <NavBar />
      <div className="py-22">
        <Header />
        <div className="flex items-center justify-evenly w-full flex-wrap space-y-3 sm:space-y-0 py-20 flex-row-reverse">
          <TimeUnit timeUnitLeft={timeLeft.days} timeUnitName="روز" />
          <TimeUnit timeUnitLeft={timeLeft.hours} timeUnitName="ساعت" />
          <TimeUnit timeUnitLeft={timeLeft.minutes} timeUnitName="دقیقه" />
          <TimeUnit timeUnitLeft={timeLeft.seconds} timeUnitName="ثانیه" />
        </div>
      </div>
    </div>
  );
}

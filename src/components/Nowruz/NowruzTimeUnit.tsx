import Header from "../Nowruz/Header";
import NavBar from "../NavBar";
import TimeUnit from "../Nowruz/TimeUnit";

export default function NowruzTimeUnit() {
  return (
    <div className="w-full flex-col h-dvh overflow-hidden">
      <NavBar />
      <div className="py-22">
        <Header />
        <div className="flex items-center justify-evenly w-full flex-wrap space-y-3 sm:space-y-0 py-20">
          <TimeUnit />
        </div>
      </div>
    </div>
  );
}

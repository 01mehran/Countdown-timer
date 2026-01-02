import NowruzTimeUnit from "../../components/Nowruz/NowruzTimeUnit";

export default function NowruzTimer() {
  return (
    <div className="min-h-dvh bg-[url('./assets/background.png')] md:bg-bottom bg-cover bg-right bg-no-repeat text-slate-700 w-full flex items-center  gap-16 flex-col space-y-0.5">
      <NowruzTimeUnit />
    </div>
  );
}

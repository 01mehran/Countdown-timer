import NavBar from "../../components/NavBar";

export default function CustomCountDown() {
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
            <select className=" w-full h-full border-0 outline-0 text-lg">
              {Array.from({ length: 24 }, (_, i) => (
                <option value={i}>{i + 1}</option>
              ))}
            </select>
          </article>
          {/* Minutes */}
          <article className="w-[25%] py-2 rounded-md px-2  shadow-[1px_1px_5px_rgba(0,0,0,.6)]">
            <select className="w-full h-full  border-0 outline-0 text-lg">
              {Array.from({ length: 59 }, (_, i) => (
                <option value={i}>{i + 1}</option>
              ))}
            </select>
          </article>
          {/* Seconds */}
          <article className="w-[25%] py-2 rounded-md px-2 shadow-[1px_1px_5px_rgba(0,0,0,.6)]">
            <select className=" w-full h-full border-0 outline-0 text-lg ">
              {Array.from({ length: 59 }, (_, i) => (
                <option value={i}>{i + 1}</option>
              ))}
            </select>
          </article>
        </section>

        {/* Time; */}
        <section className="flex items-center justify-center text-3xl max-w-4xl w-full mx-auto mt-20">
          <article className="flex flex-col w-full">
            <time>00</time>
            <span className="text-sm font-medium">hours</span>
          </article>
          :
          <article className="flex flex-col w-full">
            <time>00</time>
            <span className="text-sm font-medium">minutes</span>
          </article>
          :
          <article className="flex flex-col w-full">
            <time>00</time>
            <span className="text-sm font-medium">seconds</span>
          </article>
        </section>

        {/* Action buttons */}
        <section className="mt-12 gap-2 mx-auto  flex items-center flex-wrap justify-center">
          <button className="w-38 py-1 cursor-pointer shadow-[1px_1px_5px_rgba(0,0,0,.6)] font-semibold rounded-full ">
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

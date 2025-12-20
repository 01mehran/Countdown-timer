export default function Home() {
  return (
    <div className="min-h-dvh bg-[url('./assets/background.png')] bg-bottom bg-no-repeat text-slate-700 w-full flex items-center py-30 gap-16 flex-col space-y-0.5">
      <div className="flex items-center flex-col space-y-2 font-serif">
        <span className="text-2xl font-bold tracking-wide">
          -- countdown to --
        </span>
        <h2 className="text-4xl font-extrabold">New Year</h2>
      </div>

      <div className="flex items-center justify-evenly w-full">
        <article className="flex items-center flex-col space-y-0.5">
          <time className="text-6xl font-bold">3</time>
          <span className="text-[12px] font-medium">months</span>
        </article>
        <article className="flex items-center flex-col space-y-0.5">
          <time className="text-6xl font-bold">5</time>
          <span className="text-[12px] font-medium">days</span>
        </article>
        <article className="flex items-center flex-col space-y-0.5">
          <time className="text-6xl font-bold">8</time>
          <span className="text-[12px] font-medium">hours</span>
        </article>
        <article className="flex items-center flex-col space-y-0.5">
          <time className="text-6xl font-bold">48</time>
          <span className="text-[12px] font-medium">minutes</span>
        </article>
        <article className="flex items-center flex-col space-y-0.5">
          <time className="text-6xl font-bold">20</time>
          <span className="text-[12px] font-medium">seconds</span>
        </article>
      </div>
    </div>
  );
}

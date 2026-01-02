export default function TimeUnit() {
  return (
    <article className="timeBox">
      <time className="text-6xl font-bold tracking-widest">
        ۰{Number(2).toLocaleString("fa-IR")}
      </time>
      <span className="text-5 font-bold ">ماه</span>
    </article>
  );
}

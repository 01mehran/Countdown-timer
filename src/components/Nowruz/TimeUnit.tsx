type TTimeUnitProps = {
  timeUnitLeft: number;
  timeUnitName: string;
};

export default function TimeUnit({
  timeUnitLeft,
  timeUnitName,
}: TTimeUnitProps) {
  return (
    <article className="timeBox min-w-24 ">
      <time className="text-6xl font-bold tracking-widest">
        {timeUnitLeft.toLocaleString("fa-IR").padStart(2, "۰")}
      </time>
      <span className="text-5 font-bold ">{timeUnitName}</span>
    </article>
  );
}

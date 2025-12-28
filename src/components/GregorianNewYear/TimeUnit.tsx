type TTimeUnitProps = {
  timeUnitLeft: number;
  timeUnitName: string;
};

export default function TimeUnit({
  timeUnitLeft,
  timeUnitName,
}: TTimeUnitProps) {
  const formattedTime =
    timeUnitLeft < 10 ? `0${timeUnitLeft}` : `${timeUnitLeft}`;

  return (
    <article className="timeBox">
      <time className="text-6xl font-bold">
        {formattedTime && formattedTime}
      </time>
      <span className="text-[12px] font-medium">{timeUnitName}</span>
    </article>
  );
}

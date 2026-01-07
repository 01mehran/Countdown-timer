type DisplayTimeProps = {
  selectedTime: number;
  timeTitle: string;
};

export default function DisplayTime({
  selectedTime,
  timeTitle,
}: DisplayTimeProps) {
  return (
    <article className="flex flex-col w-full">
      <time>{selectedTime.toString().padStart(2, "0")}</time>
      <span className="text-sm font-medium">{timeTitle}</span>
    </article>
  );
}

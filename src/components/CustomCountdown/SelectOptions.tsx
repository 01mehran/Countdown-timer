// Types;
import type { SelectOptionsProps } from "../../types/CustomCountdownTypes";

export default function SelectOptions({
  onChange,
  length,
  value,
  isRunning,
}: SelectOptionsProps) {
  return (
    <article className="w-[25%] py-2 rounded-md px-2 shadow-[1px_1px_5px_rgba(0,0,0,.6)]">
      <select
        className={`w-full h-full  outline-0 text-lg ${
          isRunning && " cursor-not-allowed opacity-50 pointer-events-none "
        }`}
        onChange={(e) => onChange(+e.target.value)}
        value={value}
      >
        {Array.from({ length: length }, (_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </article>
  );
}

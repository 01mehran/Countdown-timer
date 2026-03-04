// Compomemts;
import SelectOptions from "./SelectOptions";

// Types;
import type { SelectOptionsBoxProps } from "../../types/CustomCountdownTypes";

export default function SelectOptionsBox({
  isRunning,
  hours,
  minutes,
  seconds,
  setHours,
  setMinutes,
  setSeconds,
}: SelectOptionsBoxProps) {
  return (
    <section className="flex justify-center gap-4 mt-14 ">
      {/* Hours; */}
      <SelectOptions
        onChange={setHours}
        length={24}
        value={hours}
        isRunning={isRunning}
      />

      {/* Minutes */}
      <SelectOptions
        onChange={setMinutes}
        length={60}
        value={minutes}
        isRunning={isRunning}
      />

      {/* Seconds */}
      <SelectOptions
        onChange={setSeconds}
        length={60}
        value={seconds}
        isRunning={isRunning}
      />
    </section>
  );
}

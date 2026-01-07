type SelectOptionsProps = {
  onChange: (value: number) => void;
  optionTitle: string;
  length: number;
  value: number;
  isRunning: boolean;
};

export default function SelectOptions({
  onChange,
  optionTitle,
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
        <option value="" disabled hidden>
          {optionTitle}
        </option>

        {Array.from({ length: length }, (_, i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </article>
  );
}

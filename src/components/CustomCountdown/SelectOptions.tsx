type SelectOptionsProps = {
  onChange: (value: number) => void;
  optionTitle: string;
  length: number;
};

export default function SelectOptions({
  onChange,
  optionTitle,
  length,
}: SelectOptionsProps) {
  return (
    <article className="w-[25%] py-2 rounded-md px-2 shadow-[1px_1px_5px_rgba(0,0,0,.6)]">
      <select
        className=" w-full h-full border-0 outline-0 text-lg"
        defaultValue=""
        onChange={(e) => onChange(+e.target.value)}
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

type ActionButtonsProps = {
  onHandleStartTimer: () => void;
  onHandleStopTimer: () => void;
};

export default function ActionButtons({
  onHandleStartTimer,
  onHandleStopTimer,
}: ActionButtonsProps) {
  return (
    <section className="mt-12 gap-2 mx-auto  flex items-center flex-wrap justify-center">
      <button
        onClick={onHandleStartTimer}
        className="w-38 py-1 cursor-pointer shadow-[1px_1px_5px_rgba(0,0,0,.6)] font-semibold rounded-full "
      >
        Start
      </button>
      <button
        onClick={onHandleStopTimer}
        className="w-38 py-1 cursor-pointer shadow-[1px_1px_5px_rgba(0,0,0,.6)] font-semibold rounded-full "
      >
        Stop
      </button>
    </section>
  );
}

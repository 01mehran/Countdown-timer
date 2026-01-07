type ActionButtonsProps = {
  onHandleStartTimer: () => void;
  onHandleStopTimer: () => void;
  isRunning: boolean;
};

export default function ActionButtons({
  onHandleStartTimer,
  onHandleStopTimer,
  isRunning,
}: ActionButtonsProps) {
  return (
    <section className="mt-12 gap-2 mx-auto  flex items-center flex-wrap justify-center">
      <button
        onClick={onHandleStartTimer}
        className={`${
          isRunning ? "cursor-not-allowed opacity-60" : "cursor-pointer"
        } w-38 py-1  shadow-[1px_1px_5px_rgba(0,0,0,.6)] font-semibold rounded-full`}
      >
        Start
      </button>
      {isRunning && (
        <button
          onClick={onHandleStopTimer}
          className="w-38 py-1 cursor-pointer shadow-[1px_1px_5px_rgba(0,0,0,.6)] font-semibold rounded-full "
        >
          Stop
        </button>
      )}
    </section>
  );
}

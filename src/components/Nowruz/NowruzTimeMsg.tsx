import confetti from "canvas-confetti";
import { useEffect } from "react";

type NewYearTimeMsgProps = {
  isNowruzTime: boolean;
};

export default function NewYearTimeMsg({ isNowruzTime }: NewYearTimeMsgProps) {
  function fireConfetti() {
    confetti({
      particleCount: 80,
      angle: 60,
      spread: 70,
      origin: { x: 0 },
    });

    confetti({
      particleCount: 80,
      angle: 120,
      spread: 70,
      origin: { x: 1 },
    });
  }

  useEffect(() => {
    if (!isNowruzTime) return;

    fireConfetti();

    const timeout = setTimeout(() => {
      fireConfetti();
    }, 2000);

    return () => clearTimeout(timeout);
  }, [isNowruzTime]);

  return (
    <div className="text-center grid h-dvh place-items-center">
      <h1 className=" text-[8vw] italic font-bold animate-pulse text-green-700">
        🎉 سال نووو مبارک! 🎉
      </h1>
      <p className="italic font-bold text-yellow-400">
        ✨ سال نو هدف های  نو ✨
      </p>
    </div>
  );
}

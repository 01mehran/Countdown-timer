export type NewYearTimeMsgProps = {
  isNewYearTime: boolean;
};

export type TTimeUnitProps = {
  timeUnitLeft: number;
  timeUnitName: string;
};

export type TTimeLeft = {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type NewYearTimeUnitsProps = {
  timeLeft: TTimeLeft;
};

export type TTimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export type TNowruzTimeUnit = {
  timeLeft: TTimeLeft;
};

export type NewYearTimeMsgProps = {
  isNowruzTime: boolean;
};

export type TTimeUnitProps = {
  timeUnitLeft: number;
  timeUnitName: string;
};

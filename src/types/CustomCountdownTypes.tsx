export type ActionButtonsProps = {
  onHandleStartTimer: () => void;
  onHandleStopTimer: () => void;
  isRunning: boolean;
};

export type DisplayTimeProps = {
  selectedTime: number;
  timeTitle: string;
};

export type SelectOptionsProps = {
  onChange: (value: number) => void;
  length: number;
  value: number;
  isRunning: boolean;
};

export type SelectOptionsBoxProps = {
  isRunning: boolean;
  hours: number;
  minutes: number;
  seconds: number;
  setHours: (value: number) => void;
  setMinutes: (value: number) => void;
  setSeconds: (value: number) => void;
};

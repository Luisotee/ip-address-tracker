import { SetStateAction } from "react";

interface DataProps {
  setIp: React.Dispatch<SetStateAction<string>>;
  setLocation: React.Dispatch<SetStateAction<string>>;
  setTimezone: React.Dispatch<SetStateAction<string>>;
  setIsp: React.Dispatch<SetStateAction<string>>;
}

interface resultCardProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
}

export interface IpTrackerProps {
  inputValue: string;
  resultProps: DataProps;
}

export interface InputSearchProps {
  isMobile: boolean;
  setInputValue: any;
  inputValue: string;
  resultProps: DataProps;
}

export interface ResultCardI {
  isMobile?: boolean;
  resultCardProps: resultCardProps;
}

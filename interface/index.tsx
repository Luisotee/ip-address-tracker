import { SetStateAction } from "react";

export interface DataProps {
  setIp: React.Dispatch<SetStateAction<string>>;
  setLocation: React.Dispatch<SetStateAction<string>>;
  setTimezone: React.Dispatch<SetStateAction<string>>;
  setIsp: React.Dispatch<SetStateAction<string>>;
  setCoord: any;
}

export interface resultCardProps {
  ip: string;
  location: string;
  timezone: string;
  isp: string;
  coord: any;
}

export interface IpTrackerProps {
  resultCardProps: resultCardProps;
  inputValue: string;
  resultProps: DataProps;
}

export interface InputSearchProps {
  isMobile: boolean;
  setInputValue: any;
  inputValue: string;
  resultProps: DataProps;
  resultCardProps: resultCardProps;
}

export interface ResultCardI {
  isMobile?: boolean;
  resultCardProps: resultCardProps;
}

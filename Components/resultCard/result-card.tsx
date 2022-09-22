import { ResultCardI } from "../../interface";
import { DesktopCard } from "./desktop-card";
import { MobileCard } from "./mobile-card";

export function ResultCard({ isMobile, resultCardProps }: ResultCardI) {
  return (
    <>
      {isMobile ? (
        <DesktopCard resultCardProps={resultCardProps} />
      ) : (
        <MobileCard resultCardProps={resultCardProps} />
      )}
    </>
  );
}

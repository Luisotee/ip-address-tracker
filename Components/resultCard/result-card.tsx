import { DesktopCard } from "./desktop-card";
import { MobileCard } from "./mobile-card";

export function ResultCard({ isMobile }: any) {
  return <>{isMobile ? <DesktopCard /> : <MobileCard />}</>;
}

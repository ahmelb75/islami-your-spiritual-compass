import { ReactNode } from "react";
import BottomNavigation from "@/components/navigation/BottomNavigation";
import { IslamicPattern } from "@/components/decorative/IslamicPattern";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background relative">
      <IslamicPattern />
      <main className="pb-24 relative z-10">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
};

export default AppLayout;

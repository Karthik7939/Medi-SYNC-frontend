import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, LogOut as DoorOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/theme/ThemeToggle";

const HospitalHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex h-16 items-center justify-between border-b border-border/50 bg-card/50 px-6 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <div>
          <h2 className="text-sm font-semibold text-foreground">Hospital Portal</h2>
          <p className="text-xs text-muted-foreground">St. Mary's Medical Center</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        
        <ThemeToggle />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/hospital/login")}
        >
          <DoorOpen className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default HospitalHeader;

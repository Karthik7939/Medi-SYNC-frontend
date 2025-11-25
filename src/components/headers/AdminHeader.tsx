import { SidebarTrigger } from "@/components/ui/sidebar";
import { Bell, LogOut, LogOut as DoorOpen, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="flex h-16 items-center justify-between border-b border-border/50 bg-card/50 px-6 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="h-8 w-8 rounded-md border border-border/60 bg-background/60 hover:bg-muted flex items-center justify-center">
          <Menu className="h-4 w-4" />
        </SidebarTrigger>
        <div>
          <h2 className="text-sm font-semibold text-foreground">Admin Dashboard</h2>
          <p className="text-xs text-muted-foreground">Manage federated learning operations</p>
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent"></span>
          </span>
        </Button>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => navigate("/admin/login")}
        >
          <DoorOpen className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default AdminHeader;

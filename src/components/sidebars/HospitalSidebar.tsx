import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { LayoutDashboard, Upload, User, Brain } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  useSidebar,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", url: "/hospital/dashboard", icon: LayoutDashboard },
  { title: "Download/Upload Model", url: "/hospital/upload", icon: Upload },
  { title: "Global Model", url: "/hospital/global-model", icon: Brain },
  { title: "Chatbot", url: "/hospital/chatbot", icon: User },
  { title: "Profile", url: "/hospital/profile", icon: User },
  
];

const HospitalSidebar = () => {
  const location = useLocation();
  const { open: sidebarOpen } = useSidebar();

  return (
    <Sidebar className="border-r border-sidebar-border w-64" collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-secondary">
            <Upload className="h-5 w-5 text-white" />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="bg-gradient-secondary bg-clip-text text-lg font-bold text-transparent">
                Medi-SYNC
              </h1>
              <p className="text-sm font-semibold text-sidebar-foreground/80">Hospital Portal</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-smooth hover:bg-sidebar-accent"
                      activeClassName="bg-gradient-secondary text-white hover:bg-gradient-secondary"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-[15px]">{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default HospitalSidebar;

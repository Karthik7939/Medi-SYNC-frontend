import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Box,
  Building2,
  Network,
  BarChart3,
  Shield,
  Settings,
  HelpCircle,
  GitBranch,
} from "lucide-react";
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
  { title: "Dashboard", url: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Models & Versions", url: "/admin/models", icon: Box },
  { title: "Model Distribution", url: "/admin/distribution", icon: GitBranch },
  // { title: "Hospitals", url: "/admin/hospitals", icon: Building2 },
  { title: "FL Aggregation", url: "/admin/aggregation", icon: Network },
  // { title: "Analytics", url: "/admin/analytics", icon: BarChart3 },
  { title: "Security", url: "/admin/security", icon: Shield },
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Help", url: "/admin/help", icon: HelpCircle },
];

const AdminSidebar = () => {
  const location = useLocation();
  const { open: sidebarOpen } = useSidebar();

  return (
    <Sidebar className="w-64 border-r border-sidebar-border bg-card/80 backdrop-blur-sm shadow-sm" collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border p-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-primary shadow-card">
            <Network className="h-5 w-5 text-white" />
          </div>
          {sidebarOpen && (
            <div>
              <h1 className="bg-gradient-primary bg-clip-text text-lg font-semibold tracking-tight text-transparent">
                Medi-SYNC
              </h1>
              <p className="text-sm font-medium text-sidebar-foreground/70">Admin Portal</p>
            </div>
          )}
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={location.pathname === item.url}>
                    <NavLink
                      to={item.url}
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-sidebar-foreground transition-all hover:bg-sidebar-accent/70 hover:translate-x-1"
                      activeClassName="bg-gradient-primary text-white hover:bg-gradient-primary shadow-sm"
                    >
                      <item.icon className="h-5 w-5" />
                      <span className="text-[15px] font-medium tracking-tight">{item.title}</span>
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

export default AdminSidebar;

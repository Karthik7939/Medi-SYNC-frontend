import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import HospitalSidebar from "../sidebars/HospitalSidebar";
import HospitalHeader from "../headers/HospitalHeader";

const HospitalLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-gradient-to-br from-background via-blue-ocean/5 to-pink-deep/5">
        <HospitalSidebar />
        <div className="flex flex-1 flex-col">
          <HospitalHeader />
          <main className="flex-1 p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default HospitalLayout;

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "./components/layouts/AdminLayout";
import HospitalLayout from "./components/layouts/HospitalLayout";
import Home from "./pages/Home";

// Auth Pages
import AdminLogin from "./pages/auth/AdminLogin";
import HospitalLogin from "./pages/auth/HospitalLogin";

// Admin Pages
import AdminDashboard from "./pages/admin/Dashboard";
import ModelManagement from "./pages/admin/ModelManagement";
import ModelDistribution from "./pages/admin/ModelDistribution";
import HospitalManagement from "./pages/admin/HospitalManagement";
import FederatedAggregation from "./pages/admin/FederatedAggregation";
import Analytics from "./pages/admin/Analytics";
import Security from "./pages/admin/Security";
import Settings from "./pages/admin/Settings";
import Help from "./pages/admin/Help";

// Hospital Pages
import HospitalDashboard from "./pages/hospital/Dashboard";
import HospitalUpload from "./pages/hospital/Upload";
import HospitalProfile from "./pages/hospital/Profile";
import HospitalChatbot from "./pages/hospital/Chatbot";
import HospitalGlobalModel from "./pages/hospital/GlobalModel";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner
        position="top-right"
        richColors
        toastOptions={{
          classNames: {
            toast:
              "bg-card/90 backdrop-blur border border-border/80 shadow-lg shadow-primary/5 text-foreground", 
            title: "text-sm font-semibold", 
            description: "text-xs text-muted-foreground", 
            actionButton:
              "bg-primary text-primary-foreground hover:bg-primary/90", 
            cancelButton:
              "bg-muted text-muted-foreground hover:bg-muted/80",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          {/* Public Home */}
          <Route path="/" element={<Home />} />
          
          {/* Auth Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/hospital/login" element={<HospitalLogin />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="models" element={<ModelManagement />} />
            <Route path="distribution" element={<ModelDistribution />} />
            <Route path="hospitals" element={<HospitalManagement />} />
            <Route path="aggregation" element={<FederatedAggregation />} />
            <Route path="analytics" element={<Analytics />} />
            <Route path="security" element={<Security />} />
            <Route path="settings" element={<Settings />} />
            <Route path="help" element={<Help />} />
          </Route>
          
          {/* Hospital Routes */}
          <Route path="/hospital" element={<HospitalLayout />}>
            <Route index element={<Navigate to="/hospital/dashboard" replace />} />
            <Route path="dashboard" element={<HospitalDashboard />} />
            <Route path="upload" element={<HospitalUpload />} />
            <Route path="global-model" element={<HospitalGlobalModel />} />
            <Route path="profile" element={<HospitalProfile />} />
            <Route path="chatbot" element={<HospitalChatbot />} />
          </Route>
          
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

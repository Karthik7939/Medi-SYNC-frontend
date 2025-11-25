import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ArrowRight } from "lucide-react";
import { toast } from "sonner";
import ThemeToggle from "@/components/theme/ThemeToggle";

const HospitalLogin = () => {
  const navigate = useNavigate();
  const [hospitalId, setHospitalId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (hospitalId && password) {
      toast.success("Welcome back!");
      navigate("/hospital/dashboard");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="relative flex min-h-screen">
      <div className="absolute right-4 top-4 z-10">
        <ThemeToggle />
      </div>
      {/* Left side - Hero Section */}
      <div className="hidden flex-1 items-center justify-center bg-gradient-to-br from-blue-ocean to-pink-deep p-8 lg:flex">
        <div className="max-w-lg space-y-6 text-white">
          <div className="animate-float">
            <Building2 className="h-24 w-24 opacity-80" />
          </div>
          <h1 className="text-4xl font-bold leading-tight">
            Join the Future of Collaborative Healthcare AI
          </h1>
          <p className="text-lg text-white/80">
            Contribute to cutting-edge AI models while maintaining complete control over your
            patient data. Train locally, learn globally.
          </p>
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <span>Privacy-preserving federated learning</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <span>Secure model distribution</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <span>Real-time training analytics</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Right side - Login Form */}
      <div className="flex flex-1 items-center justify-center p-8">
        <Card
          className="w-full max-w-md border border-secondary/10 bg-gradient-to-b from-background/95 via-background/80 to-secondary/10 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40 hover:shadow-premium"
        >
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-secondary shadow-card">
              <Building2 className="h-8 w-8 text-blue-950" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold">
                <span className="bg-gradient-secondary bg-clip-text text-transparent">Medi-SYNC</span>
              </CardTitle>
              <CardDescription className="mt-2 text-base">Hospital Portal Access</CardDescription>
            </div>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="hospitalId">Hospital ID / Email</Label>
                <Input
                  id="hospitalId"
                  type="text"
                  placeholder="HOSP-001 or email@hospital.com"
                  value={hospitalId}
                  onChange={(e) => setHospitalId(e.target.value)}
                  className="h-12"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12"
                />
              </div>
              
              <Button
                type="submit"
                className="group h-12 w-full bg-gradient-to-r from-blue-ocean to-pink-deep text-white shadow-card transition-all hover:shadow-premium"
              >
                Continue
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              
              <div className="text-center">
                <button
                  type="button"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </button>
              </div>
              
              <div className="pt-4 text-center text-sm text-muted-foreground">
                System administrator?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/admin/login")}
                  className="font-semibold text-primary hover:underline"
                >
                  Admin login
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HospitalLogin;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Network, ArrowRight } from "lucide-react";
import { toast } from "sonner";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } else {
      toast.error("Please fill in all fields");
    }
  };

  return (
    <div className="relative flex min-h-screen overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
      {/* Subtle animated background accents */}
      <div className="pointer-events-none absolute -right-24 top-[-80px] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-[-80px] h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      {/* Left side - Hero Section */}
      <div className="hidden flex-1 items-center justify-center bg-gradient-to-br from-blue-ocean to-pink-deep p-8 lg:flex">
        <div className="max-w-lg space-y-6 text-white animate-fade-in-slow">
          <div className="animate-float drop-shadow-xl">
            <Network className="h-24 w-24 opacity-80" />
          </div>
          <h1 className="text-4xl font-bold leading-tight">
            Orchestrate Secure Federated Learning
          </h1>
          <p className="text-lg text-white/80">
            Manage hospitals, models, and training rounds from a single, secure admin console while
            preserving patient privacy across the network.
          </p>
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <span>Centralized control over model distribution</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <span>Monitor training rounds in real time</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                ✓
              </div>
              <span>Enforce security and compliance policies</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex flex-1 items-center justify-center p-6 sm:p-8">
        <Card
          className="w-full max-w-md border border-primary/10 bg-gradient-to-b from-background/95 via-background/80 to-primary/10 shadow-card backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-primary/40 hover:shadow-premium"
        >
          <CardHeader className="space-y-4 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-card">
              <Network className="h-8 w-8 text-blue-950" />
            </div>
            <div>
              <CardTitle className="text-3xl font-bold">
                <span className="bg-gradient-primary bg-clip-text text-transparent">Medi-SYNC</span>
              </CardTitle>
              <CardDescription className="mt-2 text-base">Admin Portal Access</CardDescription>
            </div>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@medisync.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="h-12 transition-all focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
                  className="h-12 transition-all focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                />
              </div>

              <Button
                type="submit"
                className="group h-12 w-full bg-gradient-to-r from-blue-ocean to-pink-deep text-white shadow-card transition-all hover:shadow-premium hover:translate-y-0.5 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary/70"
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
                Hospital user?{" "}
                <button
                  type="button"
                  onClick={() => navigate("/hospital/login")}
                  className="font-semibold text-accent hover:underline"
                >
                  Login here
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminLogin;

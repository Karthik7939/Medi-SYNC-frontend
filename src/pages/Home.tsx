// import { useNavigate } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
// import { Building2, Shield, Network } from "lucide-react";
// import ThemeToggle from "@/components/theme/ThemeToggle";

// const Home = () => {
//   const navigate = useNavigate();

//   return (
//     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-background via-blue-strong/5 to-pink-soft/10">
//       {/* Background accents */}
//       <div className="pointer-events-none absolute -left-24 top-[-80px] h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-glow" />
//       <div className="pointer-events-none absolute -right-24 bottom-[-80px] h-72 w-72 rounded-full bg-accent/10 blur-3xl animate-float" />

//       {/* Theme toggle */}
//       <div className="absolute right-4 top-4 z-20">
//         <ThemeToggle />
//       </div>

//       <div className="relative z-10 flex w-full max-w-5xl flex-col gap-10 px-6 py-12 md:flex-row md:items-center animate-fade-in">
//         {/* Left: hero content */}
//         <div className="flex-1 space-y-6">
//           <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/70 px-3 py-1 text-xs text-muted-foreground backdrop-blur shadow-sm">
//             <span className="h-1.5 w-1.5 rounded-full bg-primary" />
//             Secure Federated Learning Platform for Healthcare
//           </div>

//           <div className="space-y-3">
//             <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
//               Welcome to <span className="bg-gradient-primary bg-clip-text text-transparent">Medi-SYNC</span>
//             </h1>
//             <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
//               Coordinate global AI models while keeping patient data safely inside each hospital. Choose how
//               you want to access the platform below.
//             </p>
//           </div>

//           <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
//             <div className="flex items-center gap-2">
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
//                 1
//               </span>
//               <span>Hospitals train models locally on their own data.</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
//                 2
//               </span>
//               <span>Aggregated global models are coordinated by admins.</span>
//             </div>
//           </div>
//         </div>

//         {/* Right: entry cards */}
//         <div className="flex-1 space-y-4">
//           <Card className="glass-card shadow-premium border-primary/40 transition-transform transition-smooth hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
//             <CardHeader className="flex flex-row items-center justify-between gap-3 pb-3">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-secondary shadow-card">
//                   <Building2 className="h-5 w-5 text-blue-950" />
//                 </div>
//                 <div>
//                   <CardTitle className="text-lg">Hospital Portal</CardTitle>
//                   <CardDescription>Upload trained models, monitor rounds, and view metrics.</CardDescription>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <Button
//                 className="mt-3 h-11 w-full bg-gradient-to-r from-blue-ocean to-pink-deep text-white shadow-card transition-all hover:shadow-premium hover:translate-y-0.5"
//                 onClick={() => navigate("/hospital/login")}
//               >
//                 Continue to Hospital Login
//               </Button>
//             </CardContent>
//           </Card>

//           <Card className="glass-card shadow-card border-border/70 transition-transform transition-smooth hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
//             <CardHeader className="flex flex-row items-center justify-between gap-3 pb-3">
//               <div className="flex items-center gap-3">
//                 <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary shadow-card">
//                   <Shield className="h-5 w-5 text-white" />
//                 </div>
//                 <div>
//                   <CardTitle className="text-lg">Admin Portal</CardTitle>
//                   <CardDescription>Orchestrate hospitals, models, and federated aggregation.</CardDescription>
//                 </div>
//               </div>
//             </CardHeader>
//             <CardContent className="pt-0">
//               <Button
//                 variant="outline"
//                 className="mt-3 h-11 w-full border-primary/60 text-primary transition-all hover:bg-primary/5 hover:translate-y-0.5"
//                 onClick={() => navigate("/admin/login")}
//               >
//                 Continue to Admin Login
//               </Button>
//             </CardContent>
//           </Card>

//           <div className="flex items-center gap-2 text-xs text-muted-foreground">
//             <Network className="h-3.5 w-3.5 text-primary" />
//             <span>Need help choosing? Contact your system administrator for access details.</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
"use client";

import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Building2, Shield, Network, Activity, Lock, Server } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";
import GradientText from "@/components/GradientText";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-blue-strong/10 to-pink-soft/20">
      {/* Soft background accents */}
      <div className="pointer-events-none absolute -left-32 top-[-100px] h-80 w-80 rounded-full bg-primary/15 blur-3xl animate-glow" />
      <div className="pointer-events-none absolute -right-32 bottom-[-120px] h-80 w-80 rounded-full bg-accent/15 blur-3xl animate-float" />

      {/* Top bar */}
      <header className="relative z-20 border-b border-border/40 bg-background/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-primary shadow-card">
              <Server className="h-5 w-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold tracking-tight">
                  Medi-SYNC
                </span>
                <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-emerald-600 dark:text-emerald-300">
                  Federated Healthcare
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                Secure orchestration of clinical AI models
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500" />
              Platform status: <span className="font-medium text-foreground">Operational</span>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 lg:flex-row lg:py-16 animate-fade-in">
        {/* Left: Hero content */}
        <section className="flex-1 space-y-7 lg:pr-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-1 text-[11px] text-muted-foreground shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Enterprise-grade Federated Learning for Hospitals
          </div>

          <div className="space-y-4">
            <GradientText className="inline-block text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Coordinate secure clinical AI across your network.
            </GradientText>
            <p className="max-w-xl text-sm text-muted-foreground sm:text-base">
              Medi-SYNC allows healthcare systems to train shared AI models on distributed
              patient data—without data ever leaving the hospital boundary. Choose your
              portal to get started.
            </p>
          </div>

          {/* Step / value bullets */}
          <div className="grid gap-3 text-xs text-muted-foreground sm:grid-cols-3 sm:text-sm">
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                1
              </span>
              <div>
                <p className="font-medium text-foreground">Local training</p>
                <p className="text-xs sm:text-[13px]">
                  Hospitals train models on-site with full control over their data.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                2
              </span>
              <div>
                <p className="font-medium text-foreground">Secure aggregation</p>
                <p className="text-xs sm:text-[13px]">
                  Encrypted model updates are aggregated into a global model.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                3
              </span>
              <div>
                <p className="font-medium text-foreground">Continuous improvement</p>
                <p className="text-xs sm:text-[13px]">
                  Global models improve with every round—no raw data exchanged.
                </p>
              </div>
            </div>
          </div>

          {/* Portal quick actions */}
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button
              className="h-11 flex-1 bg-gradient-to-r from-blue-ocean to-pink-deep text-sm font-medium text-white shadow-card transition-all duration-200 hover:translate-y-0.5 hover:shadow-premium"
              onClick={() => navigate("/hospital/login")}
            >
              Continue as Hospital
            </Button>
            <Button
              variant="outline"
              className="h-11 flex-1 border-primary/60 text-sm font-medium text-primary transition-all duration-200 hover:translate-y-0.5 hover:bg-primary/5"
              onClick={() => navigate("/admin/login")}
            >
              Continue as Admin
            </Button>
          </div>

          {/* Small legal / guidance line */}
          <p className="text-[11px] text-muted-foreground">
            Access is restricted to approved healthcare institutions and authorized
            administrators. Contact your system administrator if you are unsure which portal
            to use.
          </p>
        </section>

        {/* Right: Interactive / dynamic panel */}
        <section className="flex-1 space-y-4 lg:space-y-5">
          {/* Main interactive card */}
          <Card className="glass-card shadow-premium border-primary/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
            <CardHeader className="flex flex-row items-center justify-between gap-3 pb-2">
              <div className="space-y-1">
                <CardTitle className="text-lg">Network Overview</CardTitle>
                <CardDescription>
                  Live snapshot of your federated learning deployment.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-500">
                <Activity className="h-3 w-3" />
                Rounds active
              </div>
            </CardHeader>

            <CardContent className="space-y-4 pt-1">
              {/* Top stats row */}
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-border/70 bg-card/70 px-3 py-3 text-xs shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50">
                  <p className="text-[11px] text-muted-foreground">Hospitals Online</p>
                  <p className="mt-1 text-xl font-semibold">18</p>
                  <p className="mt-1 text-[11px] text-emerald-500">
                    +3 in the last 24 hours
                  </p>
                </div>
                <div className="rounded-xl border border-border/70 bg-card/70 px-3 py-3 text-xs shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50">
                  <p className="text-[11px] text-muted-foreground">Models Deployed</p>
                  <p className="mt-1 text-xl font-semibold">5</p>
                  <p className="mt-1 text-[11px] text-muted-foreground">
                    Oncology, Cardiology & more
                  </p>
                </div>
                <div className="rounded-xl border border-border/70 bg-card/70 px-3 py-3 text-xs shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50">
                  <p className="text-[11px] text-muted-foreground">Active Round</p>
                  <p className="mt-1 text-xl font-semibold">Round #12</p>
                  <p className="mt-1 text-[11px] text-amber-500">
                    76% hospital participation
                  </p>
                </div>
              </div>

              {/* Network visualization-ish row */}
              <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card to-background/80 p-4 shadow-inner">
                <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Network className="h-3.5 w-3.5 text-primary" />
                    Federated round coordination
                  </span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] text-primary">
                    Differential privacy enabled
                  </span>
                </div>

                <div className="relative mx-auto mt-1 flex h-40 max-w-sm items-center justify-center">
                  {/* Central coordinator node */}
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-primary text-[10px] font-semibold text-white shadow-card">
                    <span className="text-center leading-tight">
                      Global
                      <br />
                      Model
                    </span>
                    <div className="absolute -inset-1 rounded-[1.4rem] border border-white/20 opacity-40" />
                  </div>

                  {/* Orbiting hospital nodes */}
                  <div className="pointer-events-none absolute inset-0">
                    <div className="absolute left-[5%] top-[8%] flex h-10 w-10 items-center justify-center rounded-2xl bg-card/80 text-[9px] shadow-sm border border-border/60 animate-float-slow">
                      <Building2 className="mr-1 h-3 w-3 text-primary" />
                      H-01
                    </div>
                    <div className="absolute right-[8%] top-[18%] flex h-10 w-10 items-center justify-center rounded-2xl bg-card/80 text-[9px] shadow-sm border border-border/60 animate-float">
                      <Building2 className="mr-1 h-3 w-3 text-primary" />
                      H-07
                    </div>
                    <div className="absolute left-[10%] bottom-[12%] flex h-10 w-10 items-center justify-center rounded-2xl bg-card/80 text-[9px] shadow-sm border border-border/60 animate-float-slow">
                      <Building2 className="mr-1 h-3 w-3 text-primary" />
                      H-12
                    </div>
                    <div className="absolute right-[4%] bottom-[4%] flex h-10 w-10 items-center justify-center rounded-2xl bg-card/80 text-[9px] shadow-sm border border-border/60 animate-float">
                      <Building2 className="mr-1 h-3 w-3 text-primary" />
                      H-18
                    </div>

                    {/* Simple connecting arcs */}
                    <div className="absolute inset-4 rounded-full border border-dashed border-primary/20" />
                  </div>
                </div>

                <div className="mt-3 grid gap-2 text-[11px] text-muted-foreground sm:grid-cols-2">
                  <div className="flex items-center gap-2">
                    <Lock className="h-3.5 w-3.5 text-primary" />
                    <span>Encrypted gradient updates only—no raw data transfer.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="h-3.5 w-3.5 text-primary" />
                    <span>Audit-ready logs and role-based administration.</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Portal cards (more formal + aligned) */}
          <div className="grid gap-4 sm:grid-cols-2">
            <Card className="shadow-card border-primary/40 glass-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-secondary shadow-card">
                  <Building2 className="h-5 w-5 text-blue-950" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold">Hospital Portal</CardTitle>
                  <CardDescription className="text-xs">
                    Train, upload, and monitor local model performance.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  className="mt-2 h-9 w-full bg-gradient-to-r from-blue-ocean to-pink-deep text-xs font-medium text-white shadow-card transition-all duration-200 hover:translate-y-0.5 hover:shadow-premium"
                  onClick={() => navigate("/hospital/login")}
                >
                  Continue to Hospital Login
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card border-border/70 glass-card transition-all duration-200 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-primary shadow-card">
                  <Shield className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-sm font-semibold">Admin Portal</CardTitle>
                  <CardDescription className="text-xs">
                    Orchestrate networks, models, and training rounds.
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <Button
                  variant="outline"
                  className="mt-2 h-9 w-full border-primary/60 text-xs font-medium text-primary transition-all duration-200 hover:translate-y-0.5 hover:bg-primary/5"
                  onClick={() => navigate("/admin/login")}
                >
                  Continue to Admin Login
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Bottom helper text */}
          <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
            <Network className="h-3.5 w-3.5 text-primary" />
            <span>
              Unsure which portal to use? Contact your hospital IT or central system
              administrator for onboarding instructions.
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

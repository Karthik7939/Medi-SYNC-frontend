// import { useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import { Label } from "@/components/ui/label";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Send, CheckCircle } from "lucide-react";
// import { toast } from "sonner";
// import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// const hospitals = [
//   { id: "h1", name: "St. Mary's Medical Center", status: "active" },
//   { id: "h2", name: "City General Hospital", status: "active" },
//   { id: "h3", name: "Metro Health System", status: "active" },
//   { id: "h4", name: "Regional Medical Center", status: "active" },
//   { id: "h5", name: "Central Hospital", status: "active" },
// ];

// const ModelDistribution = () => {
//   const [selectedHospitals, setSelectedHospitals] = useState<string[]>([]);
//   const [showSuccess, setShowSuccess] = useState(false);
//   const [selectedVersion, setSelectedVersion] = useState("");

//   const handleHospitalToggle = (hospitalId: string) => {
//     setSelectedHospitals((prev) =>
//       prev.includes(hospitalId)
//         ? prev.filter((id) => id !== hospitalId)
//         : [...prev, hospitalId]
//     );
//   };

//   const handleDistribute = () => {
//     if (selectedHospitals.length === 0) {
//       toast.error("Please select at least one hospital");
//       return;
//     }
//     if (!selectedVersion) {
//       toast.error("Please select a model version");
//       return;
//     }
//     setShowSuccess(true);
//     setTimeout(() => {
//       setShowSuccess(false);
//       setSelectedHospitals([]);
//       toast.success("Training round created successfully");
//     }, 3000);
//   };

//   return (
//     <div className="space-y-6 animate-fade-in">
//       <div>
//         <h1 className="text-3xl font-bold tracking-tight">Model Distribution</h1>
//         <p className="text-muted-foreground">Distribute models to hospitals for training</p>
//       </div>

//       <div className="grid gap-6 lg:grid-cols-3">
//         <Card className="shadow-card lg:col-span-2">
//           <CardHeader>
//             <CardTitle>Select Hospitals</CardTitle>
//             <CardDescription>Choose hospitals to participate in this training round</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-3">
//             {hospitals.map((hospital) => (
//               <div
//                 key={hospital.id}
//                 className="flex items-center space-x-3 rounded-lg border p-4 transition-smooth hover:bg-muted/50"
//               >
//                 <Checkbox
//                   id={hospital.id}
//                   checked={selectedHospitals.includes(hospital.id)}
//                   onCheckedChange={() => handleHospitalToggle(hospital.id)}
//                 />
//                 <Label htmlFor={hospital.id} className="flex-1 cursor-pointer">
//                   <div className="font-medium">{hospital.name}</div>
//                   <div className="text-sm text-muted-foreground">Status: {hospital.status}</div>
//                 </Label>
//                 <div className="text-sm text-muted-foreground">
//                   Quality Score: {Math.floor(Math.random() * 10) + 90}%
//                 </div>
//               </div>
//             ))}
//           </CardContent>
//         </Card>

//         <div className="space-y-6">
//           <Card className="shadow-card">
//             <CardHeader>
//               <CardTitle>Training Configuration</CardTitle>
//               <CardDescription>Configure training round parameters</CardDescription>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="space-y-2">
//                 <Label>Model Version</Label>
//                 <Select value={selectedVersion} onValueChange={setSelectedVersion}>
//                   <SelectTrigger>
//                     <SelectValue placeholder="Select version" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="v1.0.0">v1.0.0 (Latest)</SelectItem>
//                     <SelectItem value="v0.9.5">v0.9.5</SelectItem>
//                     <SelectItem value="v0.9.0">v0.9.0</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label>Training Rounds</Label>
//                 <Select defaultValue="5">
//                   <SelectTrigger>
//                     <SelectValue />
//                   </SelectTrigger>
//                   <SelectContent>
//                     <SelectItem value="3">3 rounds</SelectItem>
//                     <SelectItem value="5">5 rounds</SelectItem>
//                     <SelectItem value="10">10 rounds</SelectItem>
//                   </SelectContent>
//                 </Select>
//               </div>

//               <div className="space-y-2">
//                 <Label>Deadline</Label>
//                 <input
//                   type="date"
//                   className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
//                   defaultValue="2024-02-01"
//                 />
//               </div>
//             </CardContent>
//           </Card>

//           <Card className="glass-card border-primary/50 shadow-premium">
//             <CardContent className="pt-6">
//               <div className="space-y-2 text-center">
//                 <div className="text-2xl font-bold">{selectedHospitals.length}</div>
//                 <div className="text-sm text-muted-foreground">Hospitals Selected</div>
//               </div>
//             </CardContent>
//           </Card>

//           <Button
//             className="w-full h-12 gradient-primary text-white shadow-card hover:shadow-premium"
//             onClick={handleDistribute}
//             disabled={selectedHospitals.length === 0}
//           >
//             <Send className="mr-2 h-4 w-4" />
//             Create Training Round
//           </Button>
//         </div>
//       </div>

//       <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 animate-scale-in">
//               <CheckCircle className="h-10 w-10 text-green-600" />
//             </div>
//             <DialogTitle className="text-center text-2xl">Training Round Created!</DialogTitle>
//             <DialogDescription className="text-center">
//               Model successfully distributed to {selectedHospitals.length} hospital
//               {selectedHospitals.length > 1 ? "s" : ""}. They will be notified to begin training.
//             </DialogDescription>
//           </DialogHeader>
//         </DialogContent>
//       </Dialog>
//     </div>
//   );
// };

// export default ModelDistribution;"use client";

import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type TrainingRound = {
  id: string;
  modelVersion: string;
  rounds: number;
  deadline: string;
  hospitals: { id: string; name: string; status: string; qualityScore: number }[];
  status: "scheduled" | "in_progress" | "completed";
};

// 👉 Demo placeholder data
const MOCK_ROUND: TrainingRound = {
  id: "round-24-demo",
  modelVersion: "v1.2.0",
  rounds: 5,
  deadline: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(), // +7 days
  status: "in_progress",
  hospitals: [
    {
      id: "h1",
      name: "St. Mary's Medical Center",
      status: "training",
      qualityScore: 96,
    },
    {
      id: "h2",
      name: "City General Hospital",
      status: "awaiting_upload",
      qualityScore: 93,
    },
    {
      id: "h3",
      name: "Metro Health System",
      status: "completed",
      qualityScore: 97,
    },
    {
      id: "h4",
      name: "Regional Medical Center",
      status: "offline",
      qualityScore: 90,
    },
  ],
};

export default function ModelDistribution() {
  const [round, setRound] = useState<TrainingRound | null>(null);
  const [loading, setLoading] = useState(true);
  const [usingMock, setUsingMock] = useState(false);

  const fetchRound = async () => {
    try {
      const res = await fetch("/api/training-rounds/current");

      if (!res.ok) {
        // If backend not ready or returns error, go to demo mode
        throw new Error("Non-200 response");
      }

      const data = await res.json();

      // If API returns empty / null, also fall back to mock
      if (!data || !data.id) {
        throw new Error("No active round from API");
      }

      setRound(data);
      setUsingMock(false);
    } catch (e) {
      // ✅ Fallback: show demo data
      setRound(MOCK_ROUND);
      setUsingMock(true);
      toast.info("Demo mode: showing sample training round data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRound();
  }, []);

  const handleForceAutoRound = async () => {
    try {
      const res = await fetch("/api/training-rounds/auto", { method: "POST" });

      if (!res.ok) {
        throw new Error("Non-200 response");
      }

      const data = await res.json();
      setRound(data);
      setUsingMock(false);
      toast.success("New training round created automatically");
    } catch (e) {
      // If auto API fails, just simulate a “new” round using mock
      const simulatedRound: TrainingRound = {
        ...MOCK_ROUND,
        id: "round-25-demo",
        modelVersion: "v1.3.0",
        status: "scheduled",
      };
      setRound(simulatedRound);
      setUsingMock(true);
      toast.info("Demo mode: simulated auto-created training round");
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Model Distribution</h1>
          <p className="text-muted-foreground">
            Training rounds are created automatically based on hospital metrics and model versions.
          </p>
          {usingMock && (
            <p className="mt-1 text-xs text-amber-500">
              Demo mode: showing placeholder data (backend API not connected).
            </p>
          )}
        </div>
        <Button onClick={handleForceAutoRound}>Force Auto Round</Button>
      </div>

      {round ? (
        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-2 shadow-card">
            <CardHeader>
              <CardTitle>
                Current Training Round{" "}
                <span className="text-xs font-normal text-muted-foreground">
                  #{round.id}
                </span>
              </CardTitle>
              <CardDescription>
                Status:{" "}
                <span className="font-semibold capitalize">{round.status}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {round.hospitals.map((h) => (
                <div
                  key={h.id}
                  className="flex items-center justify-between rounded-lg border p-4"
                >
                  <div>
                    <div className="font-medium">{h.name}</div>
                    <div className="text-sm text-muted-foreground">
                      Status: {h.status}
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Quality Score: {h.qualityScore}%
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Training Configuration</CardTitle>
                <CardDescription>Auto-selected by coordinator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <div className="font-medium">Model Version</div>
                  <div className="text-muted-foreground">{round.modelVersion}</div>
                </div>
                <div>
                  <div className="font-medium">Rounds</div>
                  <div className="text-muted-foreground">{round.rounds}</div>
                </div>
                <div>
                  <div className="font-medium">Deadline</div>
                  <div className="text-muted-foreground">
                    {new Date(round.deadline).toLocaleDateString()}
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-primary/50 shadow-premium">
              <CardContent className="pt-6 text-center">
                <div className="text-2xl font-bold">{round.hospitals.length}</div>
                <div className="text-sm text-muted-foreground">
                  Hospitals in this round
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <Card>
          <CardContent className="py-10 text-center text-muted-foreground">
            No active training round. The scheduler will create one automatically.
          </CardContent>
        </Card>
      )}
    </div>
  );
}

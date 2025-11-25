import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, Plus, Eye, Network, GitMerge, Sparkles, CheckCircle2 } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { toast } from "sonner";

const hospitals = [
  {
    id: "h1",
    name: "St. Mary's Medical Center",
    location: "New York, NY",
    status: "active",
    uploads: 28,
    quality: 95,
    joined: "2023-06-15",
  },
  {
    id: "h2",
    name: "City General Hospital",
    location: "Los Angeles, CA",
    status: "active",
    uploads: 24,
    quality: 88,
    joined: "2023-07-20",
  },
  {
    id: "h3",
    name: "Metro Health System",
    location: "Chicago, IL",
    status: "active",
    uploads: 31,
    quality: 92,
    joined: "2023-05-10",
  },
];

const contributionData = [
  { month: "Jan", uploads: 5 },
  { month: "Feb", uploads: 8 },
  { month: "Mar", uploads: 6 },
  { month: "Apr", uploads: 9 },
];

const uploadedModels = [
  { id: "m1", hospital: "St. Mary's Medical Center", accuracy: 89.5, loss: 0.22, uploaded: "2024-01-20" },
  { id: "m2", hospital: "City General Hospital", accuracy: 87.2, loss: 0.25, uploaded: "2024-01-20" },
  { id: "m3", hospital: "Metro Health System", accuracy: 90.1, loss: 0.20, uploaded: "2024-01-21" },
  { id: "m4", hospital: "Regional Medical Center", accuracy: 86.8, loss: 0.26, uploaded: "2024-01-21" },
];

const HospitalManagement = () => {
  const [selectedHospital, setSelectedHospital] = useState(hospitals[0]);
  const [selectedModels, setSelectedModels] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleModelToggle = (modelId: string) => {
    setSelectedModels((prev) =>
      prev.includes(modelId) ? prev.filter((id) => id !== modelId) : [...prev, modelId]
    );
  };

  const handleAggregate = (method: string) => {
    if (selectedModels.length < 2) {
      toast.error("Please select at least 2 models to aggregate");
      return;
    }
    setShowResult(true);
    toast.success(`${method} aggregation completed successfully`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hospital Management</h1>
          <p className="text-muted-foreground">Manage participating healthcare institutions</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="gradient-primary text-white shadow-card">
              <Plus className="mr-2 h-4 w-4" />
              Register Hospital
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Register New Hospital</DialogTitle>
              <DialogDescription>Add a new hospital to the federated learning network</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="hospitalName">Hospital Name</Label>
                <Input id="hospitalName" placeholder="e.g., Central Medical Center" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="City, State" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Contact Email</Label>
                <Input id="email" type="email" placeholder="admin@hospital.com" />
              </div>
              <Button className="w-full gradient-primary text-white">Register Hospital</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Tabs defaultValue="list" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="list">Hospital List</TabsTrigger>
          <TabsTrigger value="profile">Hospital Profile</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Registered Hospitals</CardTitle>
              <CardDescription>All hospitals in the federated learning network</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {hospitals.map((hospital) => (
                  <div
                    key={hospital.id}
                    className="flex items-center justify-between rounded-lg border p-4 transition-smooth hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-secondary">
                        <Building2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-semibold">{hospital.name}</h4>
                          <Badge className="gradient-primary text-white">{hospital.status}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{hospital.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold">{hospital.uploads}</div>
                        <div className="text-xs text-muted-foreground">Uploads</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold">{hospital.quality}%</div>
                        <div className="text-xs text-muted-foreground">Quality</div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedHospital(hospital)}
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{selectedHospital.name}</CardTitle>
                  <CardDescription>{selectedHospital.location}</CardDescription>
                </div>
                <Badge className="gradient-primary text-white text-lg px-4 py-2">
                  {selectedHospital.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <div className="text-2xl font-bold">{selectedHospital.uploads}</div>
                  <div className="text-sm text-muted-foreground">Total Uploads</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-2xl font-bold">{selectedHospital.quality}%</div>
                  <div className="text-sm text-muted-foreground">Quality Score</div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="text-2xl font-bold">{selectedHospital.joined}</div>
                  <div className="text-sm text-muted-foreground">Joined Date</div>
                </div>
              </div>

              <div>
                <h3 className="mb-4 text-lg font-semibold">Upload History</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={contributionData}>
                    <defs>
                      <linearGradient id="hospitalBarGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(207 60% 55%)" />
                        <stop offset="100%" stopColor="hsl(329 81% 58%)" />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                    <Bar dataKey="uploads" fill="url(#hospitalBarGradient)" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="space-y-4 pt-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Federated Aggregation</h2>
          <p className="text-muted-foreground text-sm">
            Combine trained models from multiple hospitals for global model updates.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Card className="shadow-card lg:col-span-2">
            <CardHeader>
              <CardTitle>Uploaded Models</CardTitle>
              <CardDescription>Select models to include in aggregation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {uploadedModels.map((model) => (
                <div
                  key={model.id}
                  className="flex items-center gap-4 rounded-lg border p-4 transition-smooth hover:bg-muted/50"
                >
                  <Checkbox
                    id={model.id}
                    checked={selectedModels.includes(model.id)}
                    onCheckedChange={() => handleModelToggle(model.id)}
                  />
                  <div className="flex-1">
                    <Label htmlFor={model.id} className="cursor-pointer">
                      <div className="font-medium">{model.hospital}</div>
                      <div className="text-sm text-muted-foreground">Uploaded: {model.uploaded}</div>
                    </Label>
                  </div>
                  <div className="flex gap-4 text-sm">
                    <div>
                      <div className="font-semibold">{model.accuracy}%</div>
                      <div className="text-xs text-muted-foreground">Accuracy</div>
                    </div>
                    <div>
                      <div className="font-semibold">{model.loss}</div>
                      <div className="text-xs text-muted-foreground">Loss</div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card className="glass-card shadow-premium">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Network className="h-5 w-5" />
                  Aggregation Methods
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  className="w-full justify-start gradient-primary text-white"
                  onClick={() => handleAggregate("FedAvg")}
                  disabled={selectedModels.length < 2}
                >
                  <GitMerge className="mr-2 h-4 w-4" />
                  FedAvg (Average)
                </Button>

                <Button
                  className="w-full justify-start gradient-secondary text-white"
                  onClick={() => handleAggregate("Weighted")}
                  disabled={selectedModels.length < 2}
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  Weighted Aggregation
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary/50">
              <CardContent className="pt-6">
                <div className="space-y-2 text-center">
                  <div className="text-3xl font-bold">{selectedModels.length}</div>
                  <div className="text-sm text-muted-foreground">Models Selected</div>
                </div>
              </CardContent>
            </Card>

            {showResult && (
              <Card className="glass-card animate-slide-up border-green-500/50">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <CardTitle>Aggregation Complete</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">New Global Accuracy</span>
                      <span className="font-bold text-green-600">91.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">New Global Loss</span>
                      <span className="font-bold">0.19</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Improvement</span>
                      <span className="font-bold text-green-600">+2.8%</span>
                    </div>
                  </div>

                  <Button className="w-full" variant="outline">
                    Generate New Version
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {showResult && (
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Participating Hospitals</CardTitle>
              <CardDescription>Hospitals that contributed to this aggregation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {selectedModels.map((id) => {
                  const model = uploadedModels.find((m) => m.id === id);
                  return (
                    <div key={id} className="flex items-center justify-between rounded-lg border p-3">
                      <span className="font-medium">{model?.hospital}</span>
                      <Badge className="gradient-primary text-white">Contributed</Badge>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default HospitalManagement;

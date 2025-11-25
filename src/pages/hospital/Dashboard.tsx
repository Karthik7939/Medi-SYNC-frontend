import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

const uploadHistory = [
  { id: 1, version: "v1.0.0", date: "2024-01-20", status: "verified", accuracy: 89.5 },
  { id: 2, version: "v0.9.5", date: "2024-01-15", status: "verified", accuracy: 87.2 },
  { id: 3, version: "v0.9.0", date: "2024-01-10", status: "verified", accuracy: 85.8 },
];

const HospitalDashboard = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hospital Dashboard</h1>
        <p className="text-muted-foreground">St. Mary's Medical Center - Training Portal</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="glass-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Models Uploaded</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
              28
            </div>
            <p className="text-xs text-muted-foreground mt-1">Total contributions</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Quality Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">95%</div>
            <p className="text-xs text-green-600 mt-1">Excellent rating</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Active Rounds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">2</div>
            <p className="text-xs text-muted-foreground mt-1">Participating</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Accuracy</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">87.5%</div>
            <p className="text-xs text-muted-foreground mt-1">Your models</p>
          </CardContent>
        </Card>
      </div>

      {/* Current Training Round */}
      <Card className="shadow-premium border-primary/50">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Current Training Round</CardTitle>
              <CardDescription>Pneumonia Detection Model - Round 6</CardDescription>
            </div>
            <Badge className="gradient-primary text-white text-base px-4 py-2">Active</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Model Version</span>
                  <span className="font-semibold">v1.0.0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Deadline</span>
                  <span className="font-semibold">2024-02-01</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Participating Hospitals</span>
                  <span className="font-semibold">12 hospitals</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Expected Accuracy</span>
                  <span className="font-semibold">90%+</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Training Progress</span>
                  <span className="font-semibold">65%</span>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-muted-foreground">6 days remaining</p>
              </div>
            </div>

            <div />
          </div>
        </CardContent>
      </Card>

      {/* Upload History */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Recent Uploads</CardTitle>
          <CardDescription>Your contribution history</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {uploadHistory.map((upload) => (
              <div
                key={upload.id}
                className="flex items-center justify-between rounded-lg border p-4 transition-smooth hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-secondary">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">Model {upload.version}</h4>
                      <Badge variant="outline" className="border-green-500 text-green-600">
                        {upload.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">Uploaded: {upload.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">{upload.accuracy}%</div>
                  <div className="text-xs text-muted-foreground">Accuracy</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Notifications */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-green-500/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>

        <Card className="border-blue-500/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            <Clock className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Active rounds</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <AlertCircle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1</div>
            <p className="text-xs text-muted-foreground">Action required</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HospitalDashboard;

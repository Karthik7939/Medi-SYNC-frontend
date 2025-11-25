import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Users, Box, TrendingUp, Activity, CheckCircle2, AlertCircle, Clock, Award } from "lucide-react";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const accuracyData = [
  { round: "R1", accuracy: 72, loss: 0.45 },
  { round: "R2", accuracy: 78, loss: 0.38 },
  { round: "R3", accuracy: 82, loss: 0.32 },
  { round: "R4", accuracy: 85, loss: 0.28 },
  { round: "R5", accuracy: 88, loss: 0.24 },
  { round: "R6", accuracy: 91, loss: 0.20 },
];

const contributionData = [
  { name: "St. Mary's", contribution: 95 },
  { name: "City General", contribution: 88 },
  { name: "Metro Health", contribution: 92 },
  { name: "Regional Med", contribution: 85 },
  { name: "Central Hospital", contribution: 90 },
];

const accuracyTrend = [
  { round: "R1", accuracy: 72, target: 75 },
  { round: "R2", accuracy: 78, target: 80 },
  { round: "R3", accuracy: 82, target: 82 },
  { round: "R4", accuracy: 85, target: 85 },
  { round: "R5", accuracy: 88, target: 87 },
  { round: "R6", accuracy: 91, target: 90 },
];

const lossTrend = [
  { round: "R1", loss: 0.45 },
  { round: "R2", loss: 0.38 },
  { round: "R3", loss: 0.32 },
  { round: "R4", loss: 0.28 },
  { round: "R5", loss: 0.24 },
  { round: "R6", loss: 0.20 },
];

const hospitalContributions = [
  { name: "St. Mary's", score: 95, uploads: 28 },
  { name: "City General", score: 88, uploads: 24 },
  { name: "Metro Health", score: 92, uploads: 31 },
  { name: "Regional Med", score: 85, uploads: 22 },
  { name: "Central Hosp", score: 90, uploads: 27 },
];

const dataQuality = [
  { name: "Excellent", value: 45, color: "hsl(142 76% 36%)" },
  { name: "Good", value: 35, color: "hsl(208 100% 30%)" },
  { name: "Fair", value: 15, color: "hsl(48 96% 53%)" },
  { name: "Poor", value: 5, color: "hsl(0 84% 60%)" },
];

const AdminDashboard = () => {
  const [activeQualityIndex, setActiveQualityIndex] = useState<number | null>(null);

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Overview of federated learning operations</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="glass-card shadow-card hover:shadow-premium transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Connected Hospitals</CardTitle>
            <Users className="h-4 w-4 text-blue-ocean" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              47
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+3</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card hover:shadow-premium transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Models Distributed</CardTitle>
            <Box className="h-4 w-4 text-pink-deep" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">
              24
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Across 6 training rounds
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card hover:shadow-premium transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Trained Models Received</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-strong" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              156
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              32 pending aggregation
            </p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card hover:shadow-premium transition-smooth">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Global Accuracy</CardTitle>
            <Activity className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">
              91.2%
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              <span className="text-green-600">+2.8%</span> improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Advanced Analytics */}
      <div className="space-y-4 pt-4">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Advanced Analytics</h2>
          <p className="text-muted-foreground text-sm">
            Deep-dive metrics for federated learning performance across hospitals.
          </p>
        </div>

        {/* Key Metrics */}
        <div className="grid gap-4 md:grid-cols-4">
          <Card className="glass-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Avg Accuracy</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-ocean" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">88.4%</div>
              <p className="text-xs text-green-600">+12.3% from baseline</p>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Active Hospitals</CardTitle>
              <Users className="h-4 w-4 text-pink-deep" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">47</div>
              <p className="text-xs text-muted-foreground">92% participation rate</p>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Training Rounds</CardTitle>
              <Activity className="h-4 w-4 text-blue-strong" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">156</div>
              <p className="text-xs text-muted-foreground">Completed successfully</p>
            </CardContent>
          </Card>

          <Card className="glass-card shadow-card">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Data Quality</CardTitle>
              <Award className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">93.2%</div>
              <p className="text-xs text-green-600">Above target</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 1 */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Accuracy Trend (vs Target)</CardTitle>
              <CardDescription>Model accuracy vs target across training rounds</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={accuracyTrend}>
                  <defs>
                    <linearGradient id="accuracyArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(208 100% 30%)" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="hsl(208 100% 30%)" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="round" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="accuracy"
                    stroke="hsl(208 100% 30%)"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                    name="Actual"
                  />
                  <Line
                    type="monotone"
                    dataKey="target"
                    stroke="hsl(329 81% 58%)"
                    strokeWidth={2}
                    strokeDasharray="5 5"
                    dot={{ r: 4 }}
                    name="Target"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Loss Reduction</CardTitle>
              <CardDescription>Training loss decrease over time</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={lossTrend}>
                  <defs>
                    <linearGradient id="lossGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="hsl(329 81% 58%)" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="hsl(323 100% 80%)" stopOpacity={0.1} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="round" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Area type="monotone" dataKey="loss" stroke="hsl(329 81% 58%)" fill="url(#lossGradient)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row 2 */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Hospital Contribution Scores</CardTitle>
              <CardDescription>Quality and participation metrics by institution</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={hospitalContributions}>
                  <defs>
                    <linearGradient id="contributionGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="hsl(207 60% 55%)" />
                      <stop offset="100%" stopColor="hsl(329 81% 58%)" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                  <Bar dataKey="score" fill="url(#contributionGradient)" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Data Quality Distribution</CardTitle>
              <CardDescription>Quality assessment across all submissions</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={dataQuality}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={110}
                    paddingAngle={4}
                    cornerRadius={10}
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    dataKey="value"
                    onMouseEnter={(_, index) => setActiveQualityIndex(index)}
                    onMouseLeave={() => setActiveQualityIndex(null)}
                  >
                    {dataQuality.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        stroke={activeQualityIndex === index ? "hsl(var(--background))" : "transparent"}
                        strokeWidth={activeQualityIndex === index ? 2 : 1}
                        opacity={activeQualityIndex === null || activeQualityIndex === index ? 1 : 0.35}
                      />
                    ))}
                  </Pie>

                  {/* Central summary label */}
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-current"
                  >
                    <tspan className="text-base font-semibold" fill="hsl(var(--foreground))">
                      Overall
                    </tspan>
                    <tspan
                      x="50%"
                      dy="1.4em"
                      className="text-sm"
                      fill="hsl(var(--muted-foreground))"
                    >
                      93.2% data quality
                    </tspan>
                  </text>

                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                    }}
                    formatter={(value: number, _name, props: any) => {
                      const total = dataQuality.reduce((sum, item) => sum + item.value, 0);
                      const percent = ((value / total) * 100).toFixed(1);
                      return [`${value} submissions (${percent}%)`, props.payload.name];
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="glass-card border-blue-strong/50">
            <CardHeader>
              <CardTitle className="text-sm">Total Training Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">342h</div>
              <p className="text-xs text-muted-foreground">Across all hospitals</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-pink-deep/50">
            <CardHeader>
              <CardTitle className="text-sm">Models Aggregated</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">1,847</div>
              <p className="text-xs text-muted-foreground">Since platform launch</p>
            </CardContent>
          </Card>

          <Card className="glass-card border-blue-ocean/50">
            <CardHeader>
              <CardTitle className="text-sm">Avg Upload Size</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8.4 MB</div>
              <p className="text-xs text-muted-foreground">Per model submission</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Accuracy Trend</CardTitle>
            <CardDescription>Model accuracy across training rounds</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={accuracyData}>
                <defs>
                  <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="hsl(208 100% 30%)" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="hsl(329 81% 58%)" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="round" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                <Area type="monotone" dataKey="accuracy" stroke="hsl(208 100% 30%)" fill="url(#accuracyGradient)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Loss Trend</CardTitle>
            <CardDescription>Training loss reduction over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={accuracyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="round" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
                <Line type="monotone" dataKey="loss" stroke="hsl(329 81% 58%)" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Hospital Contributions */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Hospital Contributions</CardTitle>
          <CardDescription>Training participation scores by hospital</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={contributionData}>
              <defs>
                <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(208 100% 30%)" />
                  <stop offset="100%" stopColor="hsl(207 60% 55%)" />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip contentStyle={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }} />
              <Bar dataKey="contribution" fill="url(#barGradient)" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Alerts */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-green-500/50 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Models ready for distribution</p>
          </CardContent>
        </Card>

        <Card className="border-yellow-500/50 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Awaiting hospital uploads</p>
          </CardContent>
        </Card>

        <Card className="border-red-500/50 shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertCircle className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Invalid file submissions</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;

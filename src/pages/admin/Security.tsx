import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Key, FileCheck, AlertTriangle, CheckCircle } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const auditLogs = [
  { id: 1, action: "Model Upload", user: "admin@medisync.com", timestamp: "2024-01-20 14:32", status: "success" },
  { id: 2, action: "Hospital Registration", user: "admin@medisync.com", timestamp: "2024-01-20 12:15", status: "success" },
  { id: 3, action: "Model Distribution", user: "admin@medisync.com", timestamp: "2024-01-19 16:45", status: "success" },
  { id: 4, action: "Failed Login Attempt", user: "unknown@test.com", timestamp: "2024-01-19 09:23", status: "failure" },
  { id: 5, action: "Aggregation", user: "system", timestamp: "2024-01-18 22:10", status: "success" },
];

const accessLogs = [
  { id: 1, user: "admin@medisync.com", ip: "192.168.1.100", location: "New York, USA", timestamp: "2024-01-20 14:32" },
  { id: 2, user: "hospital@stmarys.com", ip: "203.0.113.42", location: "Los Angeles, USA", timestamp: "2024-01-20 13:15" },
  { id: 3, user: "admin@medisync.com", ip: "192.168.1.100", location: "New York, USA", timestamp: "2024-01-20 09:20" },
];

const Security = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Security & Audit</h1>
        <p className="text-muted-foreground">Monitor system security and access logs</p>
      </div>

      {/* Security Overview Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="glass-card shadow-card border-green-500/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Security Status</CardTitle>
            <Shield className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <div className="text-lg font-bold">Secure</div>
            </div>
            <p className="text-xs text-muted-foreground mt-1">All systems operational</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Encrypted Uploads</CardTitle>
            <Lock className="h-4 w-4 text-blue-ocean" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground mt-1">AES-256 encryption</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Verified Models</CardTitle>
            <FileCheck className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground mt-1">Hash verified</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card border-yellow-500/50">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Alerts</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Audit Log */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Key className="h-5 w-5" />
            Audit Log
          </CardTitle>
          <CardDescription>Recent system actions and events</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {auditLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.action}</TableCell>
                  <TableCell>{log.user}</TableCell>
                  <TableCell className="text-muted-foreground">{log.timestamp}</TableCell>
                  <TableCell>
                    <Badge
                      variant={log.status === "success" ? "default" : "destructive"}
                      className={log.status === "success" ? "bg-green-600" : ""}
                    >
                      {log.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Access Log */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Access Log</CardTitle>
          <CardDescription>Recent login attempts and IP addresses</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>IP Address</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Timestamp</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {accessLogs.map((log) => (
                <TableRow key={log.id}>
                  <TableCell className="font-medium">{log.user}</TableCell>
                  <TableCell className="font-mono text-sm">{log.ip}</TableCell>
                  <TableCell>{log.location}</TableCell>
                  <TableCell className="text-muted-foreground">{log.timestamp}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Hash Verification */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Model Hash Verification</CardTitle>
            <CardDescription>Cryptographic integrity checks</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Latest Model Hash (SHA-256)</div>
              <div className="rounded-md bg-muted p-3 font-mono text-xs break-all">
                e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-medium">Verified</span>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Digital Signatures</CardTitle>
            <CardDescription>RSA signature verification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Public Key Fingerprint</div>
              <div className="rounded-md bg-muted p-3 font-mono text-xs break-all">
                4A:3B:2C:1D:5E:6F:7A:8B:9C:0D:1E:2F:3A:4B:5C:6D
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-green-600 font-medium">Valid Signature</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Security;

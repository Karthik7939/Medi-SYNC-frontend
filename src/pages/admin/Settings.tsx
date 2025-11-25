import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Settings2, Bell, Lock, Server, Mail } from "lucide-react";
import { toast } from "sonner";

const Settings = () => {
  const handleSave = () => {
    toast.success("Settings saved successfully");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="text-muted-foreground">Configure system preferences and options</p>
      </div>

      {/* General Settings */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings2 className="h-5 w-5" />
            General Settings
          </CardTitle>
          <CardDescription>Basic system configuration</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Theme</Label>
              <p className="text-sm text-muted-foreground">Switch between light and dark mode</p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-refresh Dashboard</Label>
              <p className="text-sm text-muted-foreground">Automatically refresh data every 30 seconds</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <Label>Default Model Version</Label>
            <Select defaultValue="latest">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="latest">Latest Version</SelectItem>
                <SelectItem value="stable">Stable Version</SelectItem>
                <SelectItem value="custom">Custom Selection</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Notification Preferences
          </CardTitle>
          <CardDescription>Manage how you receive updates</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Email Notifications</Label>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Model Upload Alerts</Label>
              <p className="text-sm text-muted-foreground">Get notified when hospitals upload models</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Training Completion</Label>
              <p className="text-sm text-muted-foreground">Alert when training rounds complete</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Security Alerts</Label>
              <p className="text-sm text-muted-foreground">Immediate notification of security events</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="space-y-2">
            <Label>Notification Email</Label>
            <Input type="email" placeholder="admin@medisync.com" defaultValue="admin@medisync.com" />
          </div>
        </CardContent>
      </Card>

      {/* Training Settings */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Server className="h-5 w-5" />
            Training Configuration
          </CardTitle>
          <CardDescription>Federated learning parameters</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Auto-Schedule Training Rounds</Label>
              <p className="text-sm text-muted-foreground">Automatically create new rounds on completion</p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label>Minimum Hospitals per Round</Label>
            <Select defaultValue="3">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2">2 hospitals</SelectItem>
                <SelectItem value="3">3 hospitals</SelectItem>
                <SelectItem value="5">5 hospitals</SelectItem>
                <SelectItem value="10">10 hospitals</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Aggregation Method</Label>
            <Select defaultValue="fedavg">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="fedavg">FedAvg (Default)</SelectItem>
                <SelectItem value="weighted">Weighted Average</SelectItem>
                <SelectItem value="median">Median</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Training Deadline (Days)</Label>
            <Input type="number" defaultValue="7" min="1" max="30" />
          </div>
        </CardContent>
      </Card>

      {/* Security Settings */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Security Preferences
          </CardTitle>
          <CardDescription>Advanced security options</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Two-Factor Authentication</Label>
              <p className="text-sm text-muted-foreground">Require 2FA for admin login</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>Hash Verification Required</Label>
              <p className="text-sm text-muted-foreground">Verify model hashes before aggregation</p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>IP Whitelist</Label>
              <p className="text-sm text-muted-foreground">Only allow access from approved IPs</p>
            </div>
            <Switch />
          </div>

          <div className="space-y-2">
            <Label>Session Timeout (minutes)</Label>
            <Select defaultValue="30">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="15">15 minutes</SelectItem>
                <SelectItem value="30">30 minutes</SelectItem>
                <SelectItem value="60">60 minutes</SelectItem>
                <SelectItem value="120">120 minutes</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          className="gradient-primary text-white shadow-card hover:shadow-premium px-8"
          size="lg"
        >
          Save All Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;

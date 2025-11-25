import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Mail, MapPin, Phone, Save } from "lucide-react";
import { toast } from "sonner";

const HospitalProfile = () => {
  const handleSave = () => {
    toast.success("Profile updated successfully");
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hospital Profile</h1>
        <p className="text-muted-foreground">Manage your institution information</p>
      </div>

      {/* Profile Header Card */}
      <Card className="shadow-premium border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-center gap-6">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-secondary shadow-card">
              <Building2 className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">St. Mary's Medical Center</h2>
              <p className="text-muted-foreground">Hospital ID: HOSP-001</p>
              <div className="mt-2 flex gap-2">
                <div className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Active Member
                </div>
                <div className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  Verified
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Basic Information */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
          <CardDescription>Update your hospital's contact and location details</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="hospitalName" className="flex items-center gap-2">
                <Building2 className="h-4 w-4" />
                Hospital Name
              </Label>
              <Input id="hospitalName" defaultValue="St. Mary's Medical Center" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="hospitalId">Hospital ID</Label>
              <Input id="hospitalId" defaultValue="HOSP-001" disabled className="bg-muted" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="address" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Address
            </Label>
            <Input id="address" defaultValue="123 Medical Plaza, New York, NY 10001" />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Email
              </Label>
              <Input id="email" type="email" defaultValue="contact@stmarys.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone Number
              </Label>
              <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Performance Statistics</CardTitle>
          <CardDescription>Your contribution metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Total Uploads</div>
              <div className="text-3xl font-bold">28</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Quality Score</div>
              <div className="text-3xl font-bold text-green-600">95%</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Avg Accuracy</div>
              <div className="text-3xl font-bold">87.5%</div>
            </div>
            <div className="space-y-2">
              <div className="text-sm text-muted-foreground">Member Since</div>
              <div className="text-3xl font-bold">2023</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Technical Contact */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Technical Contact</CardTitle>
          <CardDescription>Primary contact for technical communications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="techName">Contact Person</Label>
              <Input id="techName" defaultValue="Dr. Sarah Johnson" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="techTitle">Title</Label>
              <Input id="techTitle" defaultValue="Chief AI Research Officer" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="techEmail">Email</Label>
              <Input id="techEmail" type="email" defaultValue="sjohnson@stmarys.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="techPhone">Phone</Label>
              <Input id="techPhone" type="tel" defaultValue="+1 (555) 123-4568" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Infrastructure Details */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Infrastructure Details</CardTitle>
          <CardDescription>Training environment specifications</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="framework">ML Framework</Label>
              <Input id="framework" defaultValue="PyTorch 2.0" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gpu">GPU Configuration</Label>
              <Input id="gpu" defaultValue="NVIDIA A100 (x4)" />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="storage">Storage Capacity</Label>
              <Input id="storage" defaultValue="10 TB" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="bandwidth">Network Bandwidth</Label>
              <Input id="bandwidth" defaultValue="10 Gbps" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certifications */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Certifications & Compliance</CardTitle>
          <CardDescription>Regulatory and security certifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="font-medium">HIPAA Compliant</span>
              <span className="text-green-600 font-semibold">✓ Verified</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="font-medium">ISO 27001</span>
              <span className="text-green-600 font-semibold">✓ Certified</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="font-medium">SOC 2 Type II</span>
              <span className="text-green-600 font-semibold">✓ Certified</span>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <span className="font-medium">GDPR Compliant</span>
              <span className="text-green-600 font-semibold">✓ Verified</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Save Button */}
      <div className="flex justify-end">
        <Button
          onClick={handleSave}
          className="gradient-secondary text-white shadow-card hover:shadow-premium px-8"
          size="lg"
        >
          <Save className="mr-2 h-5 w-5" />
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default HospitalProfile;

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Download, Upload, FileCheck, Hash } from "lucide-react";
import { toast } from "sonner";

const modelVersions = [
  { version: "v1.0.0", date: "2024-01-15", accuracy: "89.2%", status: "active" },
  { version: "v0.9.5", date: "2024-01-08", accuracy: "87.8%", status: "deprecated" },
  { version: "v0.9.0", date: "2024-01-01", accuracy: "85.4%", status: "archived" },
];

const ModelManagement = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDownload = (type: string) => {
    const content = `# Medi-SYNC ${type}\n\nThis is a placeholder file for the ${type.toLowerCase()}.\n\nVersion: 1.0.0\nDate: ${new Date().toISOString()}\n\nIn production, this would contain the actual model weights and configuration.`;
    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `medisync-${type.toLowerCase().replace(" ", "-")}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    toast.success(`${type} downloaded successfully`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Model Management</h1>
        <p className="text-muted-foreground">Create, manage, and version control FL models</p>
      </div>

      <Tabs defaultValue="versions" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="create">Create Model</TabsTrigger>
          <TabsTrigger value="versions">Versions</TabsTrigger>
          <TabsTrigger value="metadata">Metadata</TabsTrigger>
          <TabsTrigger value="hash">Model Hash</TabsTrigger>
        </TabsList>

        <TabsContent value="create" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Upload Base Model</CardTitle>
              <CardDescription>Upload a new base model template for federated learning</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="modelName">Model Name</Label>
                <Input id="modelName" placeholder="e.g., Pneumonia Detection CNN" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="modelFile">Model File</Label>
                <div className="flex items-center gap-2">
                  <Input
                    id="modelFile"
                    type="file"
                    onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => handleDownload("Base Model Template")}
                  >
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  {selectedFile ? `Selected: ${selectedFile.name}` : "No file selected"}
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <textarea
                  id="description"
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  placeholder="Model description and training guidelines..."
                />
              </div>

              <Button className="w-full gradient-primary text-white">
                <Upload className="mr-2 h-4 w-4" />
                Create Base Model
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="versions" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Model Versions</CardTitle>
              <CardDescription>All versions of federated learning models</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {modelVersions.map((model) => (
                  <div
                    key={model.version}
                    className="flex items-center justify-between rounded-lg border p-4 transition-smooth hover:bg-muted/50"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold">{model.version}</h4>
                        <Badge
                          variant={model.status === "active" ? "default" : "secondary"}
                          className={
                            model.status === "active"
                              ? "gradient-primary text-white"
                              : ""
                          }
                        >
                          {model.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Released: {model.date} • Accuracy: {model.accuracy}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(`Model ${model.version}`)}
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metadata" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Model Metadata</CardTitle>
              <CardDescription>Detailed information about the current model</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Model Type</Label>
                  <p className="font-medium">Convolutional Neural Network</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Framework</Label>
                  <p className="font-medium">PyTorch 2.0</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Input Shape</Label>
                  <p className="font-medium">(3, 224, 224)</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Output Classes</Label>
                  <p className="font-medium">4 classes</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Parameters</Label>
                  <p className="font-medium">2.3M trainable</p>
                </div>
                <div className="space-y-2">
                  <Label className="text-muted-foreground">Size</Label>
                  <p className="font-medium">9.2 MB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hash" className="space-y-4">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Model Hash Verification</CardTitle>
              <CardDescription>Cryptographic hashes for model integrity verification</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <Hash className="h-4 w-4" />
                  SHA-256 Hash
                </Label>
                <div className="rounded-md bg-muted p-3 font-mono text-xs break-all">
                  a3f7d9e2c8b1f4e6a9c3d7b2e5f8a1c4d6e9b2f5a8c1e4d7b0f3a6c9e2d5b8f1
                </div>
              </div>
              
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4" />
                  MD5 Checksum
                </Label>
                <div className="rounded-md bg-muted p-3 font-mono text-xs break-all">
                  5d41402abc4b2a76b9719d911017c592
                </div>
              </div>

              <Button variant="outline" className="w-full">
                Verify Model Integrity
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ModelManagement;

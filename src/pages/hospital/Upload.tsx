import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Upload as UploadIcon, FileCheck, CheckCircle2, AlertCircle, Download } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const HospitalUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [validationStatus, setValidationStatus] = useState<"pending" | "validating" | "valid" | "invalid">("pending");
  const [selectedModel, setSelectedModel] = useState("base-v1");

  const availableModels = [
    { id: "base-v1", name: "Base Model v1.0.0" },
    { id: "base-v0.9", name: "Base Model v0.9.0" },
    { id: "experimental", name: "Experimental Model (Beta)" },
  ];

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileSelect(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (selectedFile: File) => {
    setFile(selectedFile);
    setValidationStatus("validating");
    
    // Simulate validation
    setTimeout(() => {
      setValidationStatus("valid");
      toast.success("File validated successfully");
    }, 1500);
  };

  const handleUpload = () => {
    if (!file) {
      toast.error("Please select a file first");
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          setShowSuccess(true);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const resetUpload = () => {
    setFile(null);
    setValidationStatus("pending");
    setUploadProgress(0);
    setShowSuccess(false);
  };

  const handleModelDownload = () => {
    const model = availableModels.find((m) => m.id === selectedModel);
    if (!model) return;

    const content = `# ${model.name}

This is the selected model for federated learning training.

Model ID: ${model.id}
Downloaded: ${new Date().toISOString()}

Instructions:
1. Load this model into your training environment.
2. Train on your local dataset.
3. Upload the trained weights back to the platform.
`;

    const blob = new Blob([content], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${model.id}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast.success(`${model.name} downloaded successfully`);
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        {/* <h1 className="text-3xl font-bold tracking-tight">Download/Upload Trained Model</h1> */}
        {/* <p className="text-muted-foreground">Submit your locally trained model for aggregation</p> */}
      </div>

      {/* Model Selection & Download */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Select Base Model</CardTitle>
          <CardDescription>Choose a model to download and use for local training</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 md:flex-row md:items-end">
          <div className="flex-1 space-y-2">
            <Label htmlFor="model-select">Model</Label>
            <select
              id="model-select"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
            >
              {availableModels.map((model) => (
                <option key={model.id} value={model.id}>
                  {model.name}
                </option>
              ))}
            </select>
          </div>
          <Button
            className="md:w-auto w-full h-10 gradient-primary text-white shadow-card hover:shadow-premium"
            type="button"
            onClick={handleModelDownload}
          >
            <Download className="mr-2 h-4 w-4" />
            Download Model
          </Button>
        </CardContent>
      </Card>

      {/* Upload Card */}
      <Card className="shadow-premium">
        <CardHeader>
          <CardTitle>Model Upload</CardTitle>
          <CardDescription>Upload your trained model weights for the current training round</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Training Info */}
          <div className="rounded-lg bg-gradient-card p-4 border">
            <h3 className="font-semibold mb-2">Training Round Information</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Model Version:</span>
                <span className="font-medium">v1.0.0</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Round Number:</span>
                <span className="font-medium">Round 6</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deadline:</span>
                <span className="font-medium">2024-02-01</span>
              </div>
            </div>
          </div>

          {/* Drag and Drop Area */}
          <div
            className={`relative border-2 border-dashed rounded-lg p-12 text-center transition-smooth ${
              dragActive ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <UploadIcon className={`mx-auto h-16 w-16 mb-4 ${dragActive ? "text-primary" : "text-muted-foreground"}`} />
            <h3 className="text-lg font-semibold mb-2">
              {file ? file.name : "Drag and drop your model file here"}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              or click to browse (.pt, .pth, .h5, .onnx)
            </p>
            <Input
              type="file"
              className="hidden"
              id="fileInput"
              accept=".pt,.pth,.h5,.onnx"
              onChange={(e) => e.target.files && handleFileSelect(e.target.files[0])}
            />
            <Label htmlFor="fileInput">
              <Button variant="outline" className="cursor-pointer" asChild>
                <span>Browse Files</span>
              </Button>
            </Label>
          </div>

          {/* File Validation Status */}
          {file && (
            <Card className={`${validationStatus === "valid" ? "border-green-500/50" : ""}`}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {validationStatus === "validating" && (
                      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                    )}
                    {validationStatus === "valid" && <FileCheck className="h-8 w-8 text-green-600" />}
                    {validationStatus === "invalid" && <AlertCircle className="h-8 w-8 text-red-600" />}
                    <div>
                      <div className="font-semibold">{file.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {(file.size / (1024 * 1024)).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    {validationStatus === "validating" && <span className="text-sm text-muted-foreground">Validating...</span>}
                    {validationStatus === "valid" && <span className="text-sm font-semibold text-green-600">Valid Format</span>}
                    {validationStatus === "invalid" && <span className="text-sm font-semibold text-red-600">Invalid</span>}
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Training Metrics Input */}
          {file && validationStatus === "valid" && (
            <div className="space-y-4">
              <h3 className="font-semibold">Training Metrics (Optional)</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="accuracy">Training Accuracy (%)</Label>
                  <Input id="accuracy" type="number" placeholder="e.g., 89.5" step="0.1" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="loss">Training Loss</Label>
                  <Input id="loss" type="number" placeholder="e.g., 0.22" step="0.01" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="samples">Training Samples</Label>
                  <Input id="samples" type="number" placeholder="e.g., 5000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="duration">Training Duration (hours)</Label>
                  <Input id="duration" type="number" placeholder="e.g., 12" />
                </div>
              </div>
            </div>
          )}

          {/* Upload Progress */}
          {uploading && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Uploading...</span>
                <span className="font-semibold">{uploadProgress}%</span>
              </div>
              <Progress value={uploadProgress} className="h-2" />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button
              className="flex-1 h-12 gradient-secondary text-white shadow-card hover:shadow-premium"
              onClick={handleUpload}
              disabled={!file || validationStatus !== "valid" || uploading}
            >
              <UploadIcon className="mr-2 h-5 w-5" />
              {uploading ? "Uploading..." : "Submit Model"}
            </Button>
            {file && (
              <Button variant="outline" onClick={resetUpload} disabled={uploading}>
                Clear
              </Button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Upload Guidelines */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Upload Guidelines</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Ensure your model was trained on the latest base model version</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>File size should not exceed 500 MB</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Supported formats: .pkl</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Only model weights are uploaded - no patient data is ever shared</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
              <span>Upload before the deadline to participate in this training round</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 animate-scale-in mb-4">
              <CheckCircle2 className="h-10 w-10 text-green-600" />
            </div>
            <DialogTitle className="text-center text-2xl">Upload Successful!</DialogTitle>
            <DialogDescription className="text-center space-y-4">
              <p>Your trained model has been successfully uploaded and will be included in the next aggregation.</p>
              <div className="rounded-lg bg-muted p-4 text-left">
                <h4 className="font-semibold mb-2">Upload Summary</h4>
                <div className="space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span>File:</span>
                    <span className="font-medium">{file?.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Size:</span>
                    <span className="font-medium">{file && (file.size / (1024 * 1024)).toFixed(2)} MB</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="font-medium text-green-600">Verified</span>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <Button
            onClick={() => {
              setShowSuccess(false);
              resetUpload();
            }}
            className="w-full"
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HospitalUpload;

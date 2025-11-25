import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, HelpCircle, FileText, AlertCircle } from "lucide-react";

const Help = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help & Documentation</h1>
        <p className="text-muted-foreground">Comprehensive guide to using Medi-SYNC</p>
      </div>

      {/* Quick Links */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card className="glass-card shadow-card hover:shadow-premium transition-smooth cursor-pointer">
          <CardHeader>
            <BookOpen className="h-8 w-8 text-blue-ocean mb-2" />
            <CardTitle className="text-base">Getting Started</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Quick start guide for new users</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card hover:shadow-premium transition-smooth cursor-pointer">
          <CardHeader>
            <FileText className="h-8 w-8 text-pink-deep mb-2" />
            <CardTitle className="text-base">API Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Technical API reference</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card hover:shadow-premium transition-smooth cursor-pointer">
          <CardHeader>
            <HelpCircle className="h-8 w-8 text-blue-strong mb-2" />
            <CardTitle className="text-base">FAQs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Common questions answered</p>
          </CardContent>
        </Card>

        <Card className="glass-card shadow-card hover:shadow-premium transition-smooth cursor-pointer">
          <CardHeader>
            <AlertCircle className="h-8 w-8 text-accent mb-2" />
            <CardTitle className="text-base">Troubleshooting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Solutions to common issues</p>
          </CardContent>
        </Card>
      </div>

      {/* Hospital Training Guide */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Hospital Training Guide</CardTitle>
          <CardDescription>Step-by-step instructions for hospitals</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="step1">
              <AccordionTrigger>Step 1: Download Base Model</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Navigate to your hospital dashboard</li>
                  <li>Click on the "Download Model" button in the Training Round section</li>
                  <li>Save the model file to your local training environment</li>
                  <li>Verify the model hash matches the provided checksum</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step2">
              <AccordionTrigger>Step 2: Local Training Process</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Load the downloaded base model into your training framework</li>
                  <li>Train on your local dataset (data never leaves your institution)</li>
                  <li>Use the recommended hyperparameters provided in the model metadata</li>
                  <li>Monitor training metrics: loss, accuracy, validation performance</li>
                  <li>Stop training when convergence criteria are met</li>
                </ol>
                <div className="mt-4 p-3 bg-muted rounded-md">
                  <strong>Note:</strong> Your patient data remains completely secure and never leaves your servers.
                  Only model weights are shared after training.
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="step3">
              <AccordionTrigger>Step 3: Upload Trained Model</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <ol className="list-decimal list-inside space-y-2">
                  <li>Save your trained model weights to a file</li>
                  <li>Go to the "Upload Model" page in your portal</li>
                  <li>Drag and drop your model file or click to browse</li>
                  <li>The system will validate the model format automatically</li>
                  <li>Click "Submit" to upload your contribution</li>
                </ol>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Federated Learning Explanation */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>How Federated Learning Works</CardTitle>
          <CardDescription>Understanding the aggregation process</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="overview">
              <AccordionTrigger>Overview</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p>
                  Federated Learning enables collaborative AI model training without sharing sensitive patient data.
                  Each hospital trains on their own data, and only the model improvements are shared.
                </p>
                <p>
                  <strong>Key Benefits:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Patient privacy preserved - data never leaves the hospital</li>
                  <li>Improved model performance through diverse data sources</li>
                  <li>Regulatory compliance with data sovereignty requirements</li>
                  <li>Collaborative learning without centralized data collection</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="aggregation">
              <AccordionTrigger>FedAvg Aggregation Method</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p>
                  FedAvg (Federated Averaging) is the primary aggregation method used in Medi-SYNC:
                </p>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Each hospital trains the base model on their local data</li>
                  <li>Model weight updates (not raw data) are sent to the central server</li>
                  <li>The server averages all weight updates from participating hospitals</li>
                  <li>A new global model is created from the averaged weights</li>
                  <li>This improved model is distributed back to hospitals for the next round</li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="security">
              <AccordionTrigger>Security & Privacy</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-3">
                <p><strong>Medi-SYNC implements multiple security layers:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>End-to-end encryption for all model transfers</li>
                  <li>Cryptographic hash verification of model integrity</li>
                  <li>Digital signatures for authentication</li>
                  <li>Secure audit logs of all system actions</li>
                  <li>HIPAA-compliant data handling procedures</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Data Format Requirements */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Data Format Requirements</CardTitle>
          <CardDescription>Technical specifications for model uploads</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Supported Model Formats</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>PyTorch (.pt, .pth)</li>
              <li>TensorFlow (.h5, .pb)</li>
              <li>ONNX (.onnx)</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2">File Size Limits</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Maximum file size: 500 MB</li>
              <li>Recommended: Keep models under 100 MB for faster transfer</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Metadata Requirements</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Training accuracy and loss values</li>
              <li>Number of training samples (approximate)</li>
              <li>Training duration</li>
              <li>Framework version information</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Common Issues & Solutions</CardTitle>
          <CardDescription>Quick fixes for frequent problems</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="upload-fail">
              <AccordionTrigger>Upload Fails or Times Out</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p><strong>Possible causes and solutions:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>File too large - compress or reduce model size</li>
                  <li>Network connectivity issues - check your internet connection</li>
                  <li>Server maintenance - check system status or try again later</li>
                  <li>Incorrect file format - verify file meets format requirements</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="hash-mismatch">
              <AccordionTrigger>Hash Verification Failed</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p><strong>This indicates potential file corruption:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Re-download the base model</li>
                  <li>Verify file integrity before training</li>
                  <li>Check for storage issues on your system</li>
                  <li>Contact support if issue persists</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="low-quality">
              <AccordionTrigger>Low Quality Score Warning</AccordionTrigger>
              <AccordionContent className="text-muted-foreground space-y-2">
                <p><strong>Quality scores below 80% may indicate:</strong></p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Insufficient training epochs</li>
                  <li>Data quality or preprocessing issues</li>
                  <li>Hyperparameter tuning needed</li>
                  <li>Consider extending training duration</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default Help;

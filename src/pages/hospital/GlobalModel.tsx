import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Brain, Activity, AlertCircle } from "lucide-react";

interface PredictionResult {
  id: number;
  timestamp: string;
  summary: string;
  confidence: number;
  notes?: string;
}

const mockPredict = (input: string): PredictionResult => {
  const now = new Date().toLocaleString();
  // Simple demo logic: vary confidence slightly based on length
  const confidence = Math.min(99, 85 + Math.floor((input.length % 15)));

  return {
    id: Date.now(),
    timestamp: now,
    summary: "Demo global model prediction (no real patient data processed)",
    confidence,
    notes: "In a real deployment this would call the global federated model API.",
  };
};

const GlobalModelPage = () => {
  const [textInput, setTextInput] = useState("");
  const [latest, setLatest] = useState<PredictionResult | null>(null);
  const [history, setHistory] = useState<PredictionResult[]>([]);

  const handleRunPrediction = () => {
    const trimmed = textInput.trim();
    if (!trimmed) return;

    const result = mockPredict(trimmed);
    setLatest(result);
    setHistory((prev) => [result, ...prev].slice(0, 5));
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Global Model Predictions</h1>
        <p className="text-muted-foreground">
          Run test samples against the latest aggregated global model. This page is for
          validation and demo purposes.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Input / controls */}
        <Card className="shadow-premium lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              Submit Sample for Prediction
            </CardTitle>
            <CardDescription>
              Enter a short description or anonymized features to simulate a prediction.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="sample-text">Sample (text)</Label>
              <Textarea
                id="sample-text"
                rows={4}
                placeholder="Describe the case or paste anonymized features here..."
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <AlertCircle className="h-3 w-3" />
                <span>
                  Demo only – no PHI should be entered here. In production this would send a
                  secure request to the global model service.
                </span>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <Button
                type="button"
                className="h-11 px-6 bg-gradient-to-r from-blue-ocean to-pink-deep text-white shadow-card hover:shadow-premium"
                onClick={handleRunPrediction}
                disabled={!textInput.trim()}
              >
                Run Prediction
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Latest / summary */}
        <div className="space-y-4">
          <Card className="glass-card border-primary/50 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Latest Result
              </CardTitle>
              <CardDescription>Most recent global model prediction</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {latest ? (
                <>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Confidence</span>
                    <span className="text-lg font-bold">{latest.confidence}%</span>
                  </div>
                  <p className="text-muted-foreground">{latest.summary}</p>
                  {latest.notes && (
                    <p className="text-xs text-muted-foreground/80">{latest.notes}</p>
                  )}
                  <p className="text-xs text-muted-foreground">{latest.timestamp}</p>
                </>
              ) : (
                <p className="text-muted-foreground">
                  No predictions yet. Submit a sample on the left to see a demo result.
                </p>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Recent Predictions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-xs">
              {history.length === 0 ? (
                <p className="text-muted-foreground">
                  You&rsquo;ll see the last few demo runs listed here for quick reference.
                </p>
              ) : (
                <div className="space-y-2">
                  {history.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between rounded-lg border px-3 py-2"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[10px]">
                            Demo
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {item.timestamp}
                          </span>
                        </div>
                        <p className="line-clamp-1 text-xs text-foreground/80">
                          {item.summary}
                        </p>
                      </div>
                      <span className="text-xs font-semibold">{item.confidence}%</span>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GlobalModelPage;

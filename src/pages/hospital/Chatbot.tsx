import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send } from "lucide-react";

interface Message {
  id: number;
  sender: "user" | "bot";
  text: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: "bot",
    text: "Hello! I am your Medi-SYNC assistant. You can ask me about model uploads, training rounds, or general portal usage.",
  },
  {
    id: 2,
    sender: "user",
    text: "What can you help me with?",
  },
  {
    id: 3,
    sender: "bot",
    text: "I can guide you through downloading base models, uploading trained models, and understanding your dashboard metrics.",
  },
];

const HospitalChatbot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    const nextId = messages.length ? messages[messages.length - 1].id + 1 : 1;

    const userMessage: Message = {
      id: nextId,
      sender: "user",
      text: trimmed,
    };

    const botMessage: Message = {
      id: nextId + 1,
      sender: "bot",
      text: "This is a demo response. In a real deployment, I would connect to an AI backend to answer hospital-specific questions.",
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput("");
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hospital Chatbot</h1>
        <p className="text-muted-foreground">Ask questions about Medi-SYNC and your hospital portal.</p>
      </div>

      <Card className="shadow-premium h-[600px] flex flex-col">
        <CardHeader>
          <CardTitle>Assistant</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4">
          <ScrollArea className="flex-1 rounded-md border p-4 bg-muted/30">
            <div className="flex flex-col gap-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  {message.sender === "bot" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>MS</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                      message.sender === "user"
                        ? "bg-gradient-secondary text-white"
                        : "bg-background border text-foreground"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8">
                      <AvatarFallback>HU</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}
            </div>
          </ScrollArea>

          <div className="flex gap-2 pt-2">
            <Input
              placeholder="Type your question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button type="button" onClick={handleSend} className="shrink-0 h-10">
              <Send className="h-4 w-4 mr-1" />
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HospitalChatbot;

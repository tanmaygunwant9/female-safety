"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send, MessageCircle } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  text: string
  timestamp: Date
}

export default function ChatbotTab() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      text: "Hello! I'm your SafeHub Counselor. I'm here to support you with stress, anxiety, and any emotional concerns. How can I help you today?",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      text: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate bot response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        text: generateBotResponse(input),
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 800)
  }

  const generateBotResponse = (userInput: string): string => {
    const responses: { [key: string]: string } = {
      stress:
        "Stress is a natural response. Let's try some breathing exercises: Breathe in for 4 counts, hold for 4, exhale for 4. Would you like me to guide you through a relaxation technique?",
      anxiety:
        "Anxiety can be overwhelming. Remember that your feelings are valid. Have you tried grounding techniques like the 5-4-3-2-1 method? Tell me about what's making you anxious.",
      sad: "I'm sorry you're feeling down. It's important to acknowledge these feelings. Would you like to talk about what's troubling you? I'm here to listen.",
      help: "I'm here to provide emotional support and guidance. You can talk about any concerns - stress, anxiety, relationships, work, or anything else on your mind.",
      sleep:
        "Sleep is crucial for mental health. Try maintaining a consistent sleep schedule and avoiding screens 30 minutes before bed. Would you like some relaxation tips?",
    }

    for (const [key, response] of Object.entries(responses)) {
      if (userInput.toLowerCase().includes(key)) {
        return response
      }
    }

    return "Thank you for sharing with me. I understand how you feel. Would you like to talk more about this, or would you prefer some coping strategies?"
  }

  return (
    <div className="flex flex-col h-screen bg-background pb-8">
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-primary to-accent rounded-b-xl p-6 text-white mb-6">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-white/20 rounded-lg">
            <MessageCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-bold">SafeHub Counselor</h2>
            <p className="text-sm text-white/80">Mental Health Support</p>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto space-y-4 px-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                message.type === "user"
                  ? "bg-primary text-white rounded-br-none"
                  : "bg-card border border-border text-foreground rounded-bl-none"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p className={`text-xs mt-1 ${message.type === "user" ? "text-white/70" : "text-muted-foreground"}`}>
                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-card border border-border text-foreground rounded-lg rounded-bl-none px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                <div
                  className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                  style={{ animationDelay: "0.1s" }}
                />
                <div
                  className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      {messages.length <= 2 && (
        <div className="px-4 pb-4 space-y-2">
          <p className="text-xs text-muted-foreground font-medium">Suggested topics:</p>
          <div className="grid grid-cols-2 gap-2">
            {["Stress", "Anxiety", "Sleep", "Relationships"].map((topic) => (
              <button
                key={topic}
                onClick={() => setInput(topic)}
                className="text-left text-xs px-3 py-2 bg-secondary/10 hover:bg-secondary/20 text-secondary rounded-lg border border-secondary/30 transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <form onSubmit={handleSendMessage} className="px-4 pt-4 border-t border-border bg-card">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Share your thoughts..."
            className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:outline-none transition-colors"
          />
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-4 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 disabled:opacity-50 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  )
}

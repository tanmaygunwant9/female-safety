"use client"

import { useState } from "react"
import HomeTab from "@/components/home-tab"
import ChatbotTab from "@/components/chatbot-tab"
import { Heart, MessageCircle } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("home")

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/10">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-bold text-foreground">SafeHub</h1>
              <p className="text-xs sm:text-sm text-muted-foreground">Your Safety Companion</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "home" && <HomeTab />}
        {activeTab === "chatbot" && <ChatbotTab />}
      </main>

      {/* Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white dark:bg-slate-900 border-t border-border">
        <div className="max-w-7xl mx-auto flex items-center justify-around h-16 px-4">
          <button
            onClick={() => setActiveTab("home")}
            className={`flex flex-col items-center justify-center gap-1 py-2 px-6 rounded-lg transition-all ${
              activeTab === "home"
                ? "bg-primary/10 text-primary font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <Heart className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </button>
          <button
            onClick={() => setActiveTab("chatbot")}
            className={`flex flex-col items-center justify-center gap-1 py-2 px-6 rounded-lg transition-all ${
              activeTab === "chatbot"
                ? "bg-accent/10 text-accent font-semibold"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <MessageCircle className="w-6 h-6" />
            <span className="text-xs font-medium">Counselor</span>
          </button>
        </div>
      </nav>

      {/* Spacer for fixed bottom nav */}
      <div className="h-16" />
    </div>
  )
}

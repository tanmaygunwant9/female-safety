"use client"

import { useState } from "react"
import UserProfile from "./user-profile"
import DeviceStatus from "./device-status"
import EmergencyButtons from "./emergency-buttons"
import { Shield, AlertCircle } from "lucide-react"

export default function HomeTab() {
  const [activeSection, setActiveSection] = useState("emergency")

  return (
    <div className="space-y-6 pb-8">
      {/* Emergency Alert Banner */}
      <div className="bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30 rounded-xl p-4 flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-semibold text-foreground">Always Ready to Help</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Your emergency buttons are always one tap away. Your safety is our priority.
          </p>
        </div>
      </div>

      {/* Quick Navigation */}
      <div className="grid grid-cols-2 gap-3">
        <button
          onClick={() => setActiveSection("emergency")}
          className={`p-4 rounded-lg border-2 transition-all ${
            activeSection === "emergency"
              ? "bg-accent/10 border-accent text-accent"
              : "bg-card border-border text-muted-foreground hover:border-accent/50"
          }`}
        >
          <Shield className="w-5 h-5 mb-2" />
          <span className="text-sm font-medium block">Emergency</span>
        </button>
        <button
          onClick={() => setActiveSection("profile")}
          className={`p-4 rounded-lg border-2 transition-all ${
            activeSection === "profile"
              ? "bg-primary/10 border-primary text-primary"
              : "bg-card border-border text-muted-foreground hover:border-primary/50"
          }`}
        >
          <div className="w-5 h-5 mb-2 bg-primary/20 rounded-full" />
          <span className="text-sm font-medium block">Profile</span>
        </button>
      </div>

      {/* Content Sections */}
      {activeSection === "emergency" && (
        <div className="space-y-6">
          <EmergencyButtons />
          <DeviceStatus />
        </div>
      )}

      {activeSection === "profile" && <UserProfile />}
    </div>
  )
}

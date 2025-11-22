"use client"

import { User, Mail, Phone, MapPin, Edit2 } from "lucide-react"

export default function UserProfile() {
  const userProfile = {
    name: "Beeenita Bhatt",
    email: "beenitabhatt@email.com",
    phone: "+91 9410553215",
    address: "Haldwani, Nainital, Uttarakhand",
    emergencyContact: "Mom - +91 9410553215",
    joinDate: "January 15, 2024",
  }

  return (
    <div className="space-y-6">
      <h2 className="text-lg font-bold text-foreground">Your Profile</h2>

      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white">
            <User className="w-8 h-8" />
          </div>
          <button className="p-2 hover:bg-white/50 dark:hover:bg-white/10 rounded-lg transition-all">
            <Edit2 className="w-5 h-5 text-primary" />
          </button>
        </div>
        <h3 className="text-2xl font-bold text-foreground">{userProfile.name}</h3>
        <p className="text-sm text-muted-foreground mt-1">Member since {userProfile.joinDate}</p>
      </div>

      {/* Contact Information */}
      <div className="space-y-3">
        <h3 className="font-semibold text-foreground text-sm">Contact Information</h3>
        <div className="space-y-3">
          <div className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
            <Mail className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Email</p>
              <p className="text-sm font-medium text-foreground">{userProfile.email}</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
            <Phone className="w-5 h-5 text-accent" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-medium text-foreground">{userProfile.phone}</p>
            </div>
          </div>

          <div className="bg-card rounded-lg p-4 border border-border flex items-center gap-3">
            <MapPin className="w-5 h-5 text-secondary" />
            <div className="flex-1">
              <p className="text-xs text-muted-foreground">Location</p>
              <p className="text-sm font-medium text-foreground">{userProfile.address}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-accent/5 dark:bg-accent/10 rounded-lg p-4 border border-accent/30">
        <h3 className="font-semibold text-foreground text-sm mb-2">Emergency Contact</h3>
        <p className="text-sm text-muted-foreground">{userProfile.emergencyContact}</p>
        <button className="mt-3 text-sm font-medium text-accent hover:text-accent/80 transition-colors">
          Edit Emergency Contact
        </button>
      </div>
    </div>
  )
}

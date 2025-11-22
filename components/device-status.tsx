"use client"

import { Smartphone, Watch, Bluetooth } from "lucide-react"

interface Device {
  id: string
  name: string
  type: "phone" | "watch" | "device"
  status: "connected" | "disconnected"
  battery: number
  lastSync: string
}

export default function DeviceStatus() {
  const devices: Device[] = [
    {
      id: "1",
      name: "My iPhone 15",
      type: "phone",
      status: "connected",
      battery: 85,
      lastSync: "Just now",
    },
    {
      id: "2",
      name: "Apple Watch Series 9",
      type: "watch",
      status: "connected",
      battery: 92,
      lastSync: "2 minutes ago",
    },
    {
      id: "3",
      name: "Safety Wearable",
      type: "device",
      status: "disconnected",
      battery: 15,
      lastSync: "1 hour ago",
    },
  ]

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "watch":
        return <Watch className="w-5 h-5" />
      case "phone":
        return <Smartphone className="w-5 h-5" />
      default:
        return <Bluetooth className="w-5 h-5" />
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Connected Devices</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {devices.map((device) => (
          <div
            key={device.id}
            className={`p-4 rounded-lg border-2 transition-all ${
              device.status === "connected"
                ? "bg-card border-green-200 dark:border-green-800"
                : "bg-card/50 border-border"
            }`}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div
                  className={`p-2 rounded-lg ${
                    device.status === "connected"
                      ? "bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {getDeviceIcon(device.type)}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{device.name}</h3>
                  <p className="text-xs text-muted-foreground">
                    {device.status === "connected" ? "🟢 Connected" : "🔴 Disconnected"}
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-muted-foreground">Battery</span>
                <span className="font-medium text-foreground">{device.battery}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-1.5">
                <div
                  className={`h-1.5 rounded-full transition-all ${
                    device.battery > 50 ? "bg-green-500" : device.battery > 20 ? "bg-yellow-500" : "bg-red-500"
                  }`}
                  style={{ width: `${device.battery}%` }}
                />
              </div>
              <p className="text-xs text-muted-foreground">Last sync: {device.lastSync}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

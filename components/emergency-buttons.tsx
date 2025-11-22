"use client"

import { useState } from "react"
import { AlertTriangle, Phone, Volume2 } from "lucide-react"

export default function EmergencyButtons() {
  const [singleTapActive, setSingleTapActive] = useState(false)
  const [doubleTapActive, setDoubleTapActive] = useState(false)
  const [clickCount, setClickCount] = useState(0)
  const [clickTimeout, setClickTimeout] = useState<NodeJS.Timeout | null>(null)

  const handleEmergencyClick = () => {
    setClickCount((prev) => prev + 1)

    if (clickTimeout) clearTimeout(clickTimeout)

    const timeout = setTimeout(() => {
      if (clickCount === 0) {
        // Single tap
        setSingleTapActive(true)
        setTimeout(() => setSingleTapActive(false), 2000)
      }
      setClickCount(0)
    }, 300)

    setClickTimeout(timeout)

    if (clickCount === 1) {
      // Double tap
      setDoubleTapActive(true)
      setTimeout(() => setDoubleTapActive(false), 2000)
      setClickCount(0)
      if (clickTimeout) clearTimeout(clickTimeout)
    }
  }

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold text-foreground">Emergency Features</h2>

      {/* Single Tap Button */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Volume2 className="w-5 h-5 text-secondary" />
          <h3 className="font-semibold text-foreground">Single Tap</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Sends your location and live voice data</p>
        <button
          onClick={handleEmergencyClick}
          className={`w-full py-4 px-4 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
            singleTapActive
              ? "bg-secondary scale-95 shadow-lg"
              : "bg-gradient-to-r from-secondary to-secondary/80 hover:shadow-md active:scale-95"
          }`}
        >
          <AlertTriangle className="w-5 h-5" />
          <span>Tap for Safety</span>
        </button>
        {singleTapActive && (
          <div className="mt-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg text-sm text-green-700 dark:text-green-300 font-medium text-center">
            ✓ Location and voice data sent successfully
          </div>
        )}
      </div>

      {/* Double Tap Button */}
      <div className="bg-card rounded-xl p-6 border border-border">
        <div className="flex items-center gap-3 mb-4">
          <Phone className="w-5 h-5 text-accent" />
          <h3 className="font-semibold text-foreground">Double Tap</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4">Sends location, voice data, and calls family member</p>
        <button
          onClick={handleEmergencyClick}
          className={`w-full py-4 px-4 rounded-lg font-bold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
            doubleTapActive
              ? "bg-accent scale-95 shadow-lg"
              : "bg-gradient-to-r from-accent to-accent/80 hover:shadow-md active:scale-95"
          }`}
        >
          <AlertTriangle className="w-5 h-5" />
          <span>Tap Twice for Emergency Call</span>
        </button>
        {doubleTapActive && (
          <div className="mt-3 p-3 bg-green-50 dark:bg-green-950 rounded-lg text-sm text-green-700 dark:text-green-300 font-medium text-center">
            ✓ Calling family member + location shared
          </div>
        )}
      </div>

      {/* Status Info */}
      <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 border border-primary/20">
        <p className="text-xs text-muted-foreground">
          <strong>Note:</strong> Emergency buttons use your current GPS location and require an active internet
          connection or mobile network for optimal functionality.
        </p>
      </div>
    </div>
  )
}

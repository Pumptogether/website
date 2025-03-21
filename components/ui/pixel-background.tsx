"use client"
import { PixelCanvas } from "@/components/ui/pixel-canvas"

interface PixelBackgroundProps {
  className?: string
  gap?: number
  speed?: number
  colors?: string[]
  variant?: "default" | "icon"
}

export function PixelBackground({
  className,
  gap = 8, // Reduced from 10 to 8 for a denser effect
  speed = 25,
  colors = ["#e0f2fe", "#7dd3fc", "#0ea5e9"],
  variant = "default",
}: PixelBackgroundProps) {
  return (
    <div className={`fixed inset-0 z-0 overflow-hidden pointer-events-none ${className || ""}`}>
      <PixelCanvas
        gap={gap}
        speed={speed}
        colors={colors}
        variant={variant}
        autoAnimate={true}
        noFocus={true}
        style={{ opacity: 0.25 }} // Increased from 0.15 to 0.25 for better visibility
      />
    </div>
  )
}


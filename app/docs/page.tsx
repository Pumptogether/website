"use client"

import ElegantHeader from "@/components/elegant-header"
import Footer from "@/components/Footer"
import { PixelBackground } from "@/components/ui/pixel-background"

export default function Docs() {
  return (
    <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
      {/* Add the PixelBackground with colors that match Aleph Zero's teal theme */}
      <PixelBackground gap={8} speed={18} colors={["#00eac7", "#03d1b5", "#0a766c", "#00f5d4"]} variant="default" />

      {/* Header */}
      <ElegantHeader />

      {/* Main Content - Empty for now */}
      <main className="flex-grow flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          {/* This page is intentionally left empty as per instructions */}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


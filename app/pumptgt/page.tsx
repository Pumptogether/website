"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Copy, CheckCircle, ExternalLink, Lock, Flame, Coins, BarChart3, Layers } from "lucide-react"
import ElegantHeader from "@/components/elegant-header"
import Footer from "@/components/Footer"
import { PixelBackground } from "@/components/ui/pixel-background"

export default function PUMPTGT() {
  const [copied, setCopied] = useState(false)
  const tokenAddress = "0xacFaF5834a55058CDB52F11d1E20442fE4c2E378"
  const tokenomicsRef = useRef<HTMLDivElement>(null)
  const utilityRef = useRef<HTMLDivElement>(null)
  const technicalRef = useRef<HTMLDivElement>(null)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(tokenAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Animated number counter
  const AnimatedCounter = ({ value, duration = 2000, decimals = 0 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let start = 0
      const end = Number.parseInt(value.toString().replace(/,/g, ""))
      const incrementTime = (duration / end) * 1000

      const timer = setInterval(() => {
        start += 1
        setCount(Math.floor(start))
        if (start >= end) clearInterval(timer)
      }, incrementTime)

      return () => {
        clearInterval(timer)
      }
    }, [value, duration])

    return <span>{count.toLocaleString(undefined, { maximumFractionDigits: decimals })}</span>
  }

  return (
    <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
      {/* Background */}
      <PixelBackground gap={8} speed={18} colors={["#00eac7", "#03d1b5", "#0a766c", "#00f5d4"]} variant="default" />

      {/* Header */}
      <ElegantHeader />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(0,234,199,0.08)_0%,transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(0,234,199,0.1)] text-[#00eac7] text-sm mb-6">
                  <Coins className="w-4 h-4 mr-2" />
                  <span>Native Utility Token</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  $PumpTGT <span className="text-[#00eac7]">Token</span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  The native utility token of the Pumptogether platform and the locking mechanism for DAO Governance
                  through vePumpTGT NFTs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button
                    onClick={() => scrollToSection(utilityRef)}
                    className="px-6 py-3 bg-[#00eac7] text-[#0f141a] rounded-lg font-medium hover:bg-[#00f5d4] transition-all duration-300 flex items-center"
                  >
                    <span>Explore Utility</span>
                    <svg className="w-5 h-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 00-1 1v10.586l-3.293-3.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 10-1.414-1.414L11 14.586V4a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => scrollToSection(tokenomicsRef)}
                    className="px-6 py-3 bg-transparent border border-[#00eac7] text-[#00eac7] rounded-lg font-medium hover:bg-[rgba(0,234,199,0.1)] transition-all duration-300"
                  >
                    View Tokenomics
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2 relative">
                <div className="relative w-full h-[400px]">
                  {/* Token 3D visualization */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-64 h-64">
                      {/* Outer rotating ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-[#00eac7]/30"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00eac7]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#00eac7]"></div>
                      </motion.div>

                      {/* Middle rotating ring */}
                      <motion.div
                        className="absolute inset-[20px] rounded-full border-2 border-[#00eac7]/40"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00eac7]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#00eac7]"></div>
                      </motion.div>

                      {/* Inner rotating ring */}
                      <motion.div
                        className="absolute inset-[40px] rounded-full border-2 border-[#00eac7]/50"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      >
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#00eac7]"></div>
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-[#00eac7]"></div>
                      </motion.div>

                      {/* Token center */}
                      <div className="absolute inset-[60px] rounded-full bg-gradient-to-br from-[#00eac7] to-[#0a766c] flex items-center justify-center shadow-[0_0_30px_rgba(0,234,199,0.3)]">
                        <span className="text-[#0f141a] text-2xl font-bold">PTGT</span>
                      </div>

                      {/* Floating particles */}
                      <motion.div
                        className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-[#00eac7]"
                        animate={{
                          x: [0, 20, 0],
                          y: [0, -10, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.div
                        className="absolute bottom-1/4 left-0 w-2 h-2 rounded-full bg-[#00eac7]"
                        animate={{
                          x: [0, -20, 0],
                          y: [0, 10, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                      />
                      <motion.div
                        className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full bg-[#00eac7]"
                        animate={{
                          x: [0, 10, 0],
                          y: [0, 20, 0],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                  </div>

                  {/* Stats cards */}
                  <motion.div
                    className="absolute top-0 right-0 bg-[rgba(42,48,60,0.7)] backdrop-blur-sm border border-[#2a303c] p-4 rounded-lg"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="text-sm text-gray-400">Total Supply</div>
                    <div className="text-xl font-bold text-white">100,000,000 PUMPTGT</div>
                  </motion.div>

                  <motion.div
                    className="absolute bottom-0 left-0 bg-[rgba(42,48,60,0.7)] backdrop-blur-sm border border-[#2a303c] p-4 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    <div className="text-sm text-gray-400">Deployed On</div>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded-full bg-[#0052FF]"></div>
                        <span>Base</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4 rounded-full bg-[#9945FF]"></div>
                        <span>SOL</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(42,48,60,0.7)] backdrop-blur-sm border border-[#2a303c] p-4 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <div className="text-sm text-gray-400">Decimals</div>
                    <div className="text-xl font-bold text-white">18</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Token Address Section */}
        <section className="py-10 relative">
          <div className="absolute inset-0 bg-[#0D1117]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-[rgba(42,48,60,0.5)] rounded-xl border border-[#2a303c]">
              <div>
                <div className="text-sm text-gray-400 mb-1">Token Contract Address</div>
                <div className="flex items-center">
                  <span className="text-white font-mono mr-2">
                    {tokenAddress.slice(0, 8)}...{tokenAddress.slice(-6)}
                  </span>
                  <button
                    onClick={copyToClipboard}
                    className="p-1 hover:bg-[rgba(0,234,199,0.1)] rounded-md transition-colors"
                    aria-label="Copy address"
                  >
                    {copied ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <Copy className="w-5 h-5 text-gray-400 hover:text-[#00eac7]" />
                    )}
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://basescan.org/token/0xacFaF5834a55058CDB52F11d1E20442fE4c2E378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[rgba(0,234,199,0.1)] text-[#00eac7] rounded-lg hover:bg-[rgba(0,234,199,0.2)] transition-colors"
                >
                  <span>View on Base</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://solscan.io/token/0xacFaF5834a55058CDB52F11d1E20442fE4c2E378"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-[rgba(0,234,199,0.1)] text-[#00eac7] rounded-lg hover:bg-[rgba(0,234,199,0.2)] transition-colors"
                >
                  <span>View on Solana</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Utility Section */}
        <section ref={utilityRef} className="py-20 relative">
          <div className="absolute inset-0 bg-[#0D1117]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(0,234,199,0.05)_0%,transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">$PumpTGT Utility</h2>
              <div className="w-[60px] h-1 bg-[#00eac7] mx-auto my-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The $PumpTGT utility token is used by traders on the Pumptogether platform dapp products to facilitate
                various memecoin staking and buying activities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Utility Card 1 */}
              <motion.div
                className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-6 hover:border-[#00eac7] transition-all duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-14 h-14 bg-[rgba(0,234,199,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[rgba(0,234,199,0.2)] transition-colors">
                  <Lock className="w-7 h-7 text-[#00eac7]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Locking ( Bonding )</h3>
                <p className="text-gray-400">
                  Locked $PumpTGT via pumplocks to accumulate daily XP, which can be used to collect a portion of
                  platform fees. A small amount is burned upon locking.
                </p>
                <div className="mt-6 pt-6 border-t border-[#2a303c]">
                  <div className="text-sm text-gray-400">Key Benefit</div>
                  <div className="text-[#00eac7]">30% of platform fees rewarded to active lockers daily</div>
                </div>
              </motion.div>

              {/* Utility Card 2 */}
              <motion.div
                className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-6 hover:border-[#00eac7] transition-all duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-14 h-14 bg-[rgba(0,234,199,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[rgba(0,234,199,0.2)] transition-colors">
                  <BarChart3 className="w-7 h-7 text-[#00eac7]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Launching Projects</h3>
                <p className="text-gray-400">
                  Use $PumpTGT locking/burning to launch new projects via the Pump Launcher, enabling project owners to
                  deploy AI-powered meme tokens with built-in investor protection.
                </p>
                <div className="mt-6 pt-6 border-t border-[#2a303c]">
                  <div className="text-sm text-gray-400">Key Benefit</div>
                  <div className="text-[#00eac7]">Simplified token launch with investor protection mechanisms</div>
                </div>
              </motion.div>

              {/* Utility Card 3 */}
              <motion.div
                className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-6 hover:border-[#00eac7] transition-all duration-300 group"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="w-14 h-14 bg-[rgba(0,234,199,0.1)] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[rgba(0,234,199,0.2)] transition-colors">
                  <Flame className="w-7 h-7 text-[#00eac7]" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Perpetual Deflation</h3>
                <p className="text-gray-400">
                  A fee-burning mechanism ensures perpetual supply deflation, as a small amount of $PumpTGT is bought
                  with fees and burned.
                </p>
                <div className="mt-6 pt-6 border-t border-[#2a303c]">
                  <div className="text-sm text-gray-400">Key Benefit</div>
                  <div className="text-[#00eac7]">Increasing scarcity through continuous token burning</div>
                </div>
              </motion.div>
            </div>

            {/* Warning Box */}
            <div className="mt-12 p-6 bg-[rgba(255,59,48,0.1)] border border-[rgba(255,59,48,0.3)] rounded-xl">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[rgba(255,59,48,0.2)] rounded-full">
                  <svg className="w-6 h-6 text-[#FF3B30]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Important Note</h4>
                  <p className="text-gray-300">
                    All XP on each Pumplocks decays over time, thus reducing earning power of old Pumplocks, while
                    giving new Pumplocks maximum earning potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section ref={tokenomicsRef} className="py-20 bg-[#0D1117] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(0,234,199,0.05)_0%,transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
              <div className="w-[60px] h-1 bg-[#00eac7] mx-auto my-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                $PumpTGT token distribution and vesting schedule designed for long-term sustainability and community
                alignment.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Tokenomics Visualization */}
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-square max-w-[400px] mx-auto">
                  {/* Tokenomics Pie Chart */}
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <defs>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
                        <feMerge>
                          <feMergeNode in="coloredBlur" />
                          <feMergeNode in="SourceGraphic" />
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Pie segments - using stroke-dasharray to create pie segments */}
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#FF3366"
                      strokeWidth="20"
                      strokeDasharray="30 100"
                      strokeDashoffset="0"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#3B82F6"
                      strokeWidth="20"
                      strokeDasharray="15 100"
                      strokeDashoffset="-30"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#00eac7"
                      strokeWidth="20"
                      strokeDasharray="10 100"
                      strokeDashoffset="-45"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#8B5CF6"
                      strokeWidth="20"
                      strokeDasharray="13 100"
                      strokeDashoffset="-55"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#F43F5E"
                      strokeWidth="20"
                      strokeDasharray="9 100"
                      strokeDashoffset="-68"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#22C55E"
                      strokeWidth="20"
                      strokeDasharray="8 100"
                      strokeDashoffset="-77"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#EAB308"
                      strokeWidth="20"
                      strokeDasharray="5 100"
                      strokeDashoffset="-85"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#06B6D4"
                      strokeWidth="20"
                      strokeDasharray="5 100"
                      strokeDashoffset="-90"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="transparent"
                      stroke="#A855F7"
                      strokeWidth="20"
                      strokeDasharray="5 100"
                      strokeDashoffset="-95"
                      transform="rotate(-90 50 50)"
                      filter="url(#glow)"
                    />

                    {/* Center circle */}
                    <circle cx="50" cy="50" r="30" fill="#141921" stroke="#2a303c" strokeWidth="1" />

                    {/* Center text */}
                    <text x="50" y="45" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">
                      TOTAL SUPPLY
                    </text>
                    <text x="50" y="55" textAnchor="middle" fill="#00eac7" fontSize="10" fontWeight="bold">
                      100,000,000
                    </text>
                    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="6">
                      $PumpTGT
                    </text>
                  </svg>

                  {/* Legend items positioned around the chart */}
                  <div className="absolute top-0 left-0 bg-[rgba(42,48,60,0.7)] backdrop-blur-sm p-2 rounded-lg border border-[#2a303c]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF3366]"></div>
                      <span className="text-xs">Pump Lock Incentives (30%)</span>
                    </div>
                  </div>

                  <div className="absolute top-0 right-0 bg-[rgba(42,48,60,0.7)] backdrop-blur-sm p-2 rounded-lg border border-[#2a303c]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#3B82F6]"></div>
                      <span className="text-xs">DAO Treasury (15%)</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 bg-[rgba(42,48,60,0.7)] backdrop-blur-sm p-2 rounded-lg border border-[#2a303c]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#8B5CF6]"></div>
                      <span className="text-xs">Team (13%)</span>
                    </div>
                  </div>

                  <div className="absolute bottom-0 right-0 bg-[rgba(42,48,60,0.7)] backdrop-blur-sm p-2 rounded-lg border border-[#2a303c]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#00eac7]"></div>
                      <span className="text-xs">Public Sale (10%)</span>
                    </div>
                  </div>

                  <div className="absolute top-1/4 right-0 transform translate-y-[-50%] bg-[rgba(42,48,60,0.7)] backdrop-blur-sm p-2 rounded-lg border border-[#2a303c]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#F43F5E]"></div>
                      <span className="text-xs">Seed Round (9%)</span>
                    </div>
                  </div>

                  <div className="absolute top-1/2 right-0 transform translate-y-[-50%] bg-[rgba(42,48,60,0.7)] backdrop-blur-sm p-2 rounded-lg border border-[#2a303c]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#22C55E]"></div>
                      <span className="text-xs">Airdrop (8%)</span>
                    </div>
                  </div>

                  <div className="absolute bottom-1/4 right-0 transform translate-y-[50%] bg-[rgba(42,48,60,0.7)] backdrop-blur-sm p-2 rounded-lg border border-[#2a303c]">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#EAB308]"></div>
                      <span className="text-xs">Other (15%)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tokenomics Details */}
              <div className="lg:w-1/2">
                <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-6">Token Allocation</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#FF3366]"></div>
                        <span>Team (13%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">13,000,000</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#3B82F6]"></div>
                        <span>DAO Treasury (15%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">15,000,000</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#00eac7]"></div>
                        <span>Public Sale (10%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">10,000,000</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#8B5CF6]"></div>
                        <span>Airdrop (8%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">8,000,000</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#F43F5E]"></div>
                        <span>Seed Round (9%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">9,000,000</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#22C55E]"></div>
                        <span>Pump Lock Incentives (30%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">30,000,000</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#EAB308]"></div>
                        <span>Strategic Partnerships (5%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">5,000,000</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#06B6D4]"></div>
                        <span>Liquidity Seeding (5%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">5,000,000</div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-[#A855F7]"></div>
                        <span>DAO Voting (5%)</span>
                      </div>
                      <div className="text-[#00eac7] font-medium">5,000,000</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#2a303c]">
                    <h4 className="text-lg font-semibold mb-3">Vesting Schedule Highlights</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-[#00eac7] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Team: 3-month cliff + 12-month linear vesting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-[#00eac7] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Seed Round: 3-week cliff with immediate 100% vesting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-[#00eac7] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Public Sale: No cliff, no vesting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-[#00eac7] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>DAO Treasury: 6-month cliff + 24-month linear vesting</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-[#00eac7] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>Airdrop: 3-month cliff + 3-month linear vesting, multiple cohorts</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg
                          className="w-5 h-5 text-[#00eac7] mt-0.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>DAO Voting: 3-month cliff + 12-month linear vesting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Details Section */}
        <section ref={technicalRef} className="py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(0,234,199,0.05)_0%,transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">PumpTGT As LayerZero OFT</h2>
              <div className="w-[60px] h-1 bg-[#00eac7] mx-auto my-6"></div>
              <p className="text-gray-300 max-w-2xl mx-auto">
                PumpTGT tokens are integrated into our multi-chain operation using LayerZero's OFT standard, enabling
                seamless cross-chain functionality.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Technical Details */}
              <div className="lg:w-1/2">
                <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-6">Token Specifications</h3>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-[rgba(42,48,60,0.5)] rounded-lg">
                      <div className="text-gray-300">Name</div>
                      <div className="text-white font-medium">Pumptogether</div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-[rgba(42,48,60,0.5)] rounded-lg">
                      <div className="text-gray-300">Symbol</div>
                      <div className="text-white font-medium">PumpTGT</div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-[rgba(42,48,60,0.5)] rounded-lg">
                      <div className="text-gray-300">Total Supply</div>
                      <div className="text-white font-medium">100,000,000 PumpTGT</div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-[rgba(42,48,60,0.5)] rounded-lg">
                      <div className="text-gray-300">Supply Cap</div>
                      <div className="text-white font-medium">100,000,000 PumpTGT</div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-[rgba(42,48,60,0.5)] rounded-lg">
                      <div className="text-gray-300">Decimals</div>
                      <div className="text-white font-medium">18</div>
                    </div>

                    <div className="flex justify-between items-center p-3 bg-[rgba(42,48,60,0.5)] rounded-lg">
                      <div className="text-gray-300">Contract Address</div>
                      <div className="text-white font-mono text-sm">0xacFaF5834a55058CDB52F11d1E20442fE4c2E378</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#2a303c]">
                    <h4 className="text-lg font-semibold mb-3">Deployed Networks</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                      <div className="p-4 bg-[rgba(42,48,60,0.5)] rounded-lg flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#0052FF] flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Base</div>
                          <div className="text-xs text-gray-400">Ethereum L2 Solution</div>
                        </div>
                      </div>

                      <div className="p-4 bg-[rgba(42,48,60,0.5)] rounded-lg flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#9945FF] flex items-center justify-center">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                          </svg>
                        </div>
                        <div>
                          <div className="font-medium">Solana</div>
                          <div className="text-xs text-gray-400">High-Performance Blockchain</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* LayerZero Visualization */}
              <div className="lg:w-1/2">
                <div className="relative w-full aspect-square max-w-[500px] mx-auto">
                  {/* LayerZero Visualization */}
                  <div className="relative w-full h-full flex items-center justify-center">
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-[#00eac7]/20"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 60, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    {/* Base Network Node */}
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-20 h-20 bg-[#0052FF] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(0,82,255,0.5)]"
                      animate={{
                        y: [0, -10, 0],
                        boxShadow: [
                          "0 0 20px rgba(0,82,255,0.3)",
                          "0 0 30px rgba(0,82,255,0.6)",
                          "0 0 20px rgba(0,82,255,0.3)",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <span className="text-white font-bold">Base</span>
                    </motion.div>

                    {/* Solana Network Node */}
                    <motion.div
                      className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-[#9945FF] rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(153,69,255,0.5)]"
                      animate={{
                        y: [0, 10, 0],
                        boxShadow: [
                          "0 0 20px rgba(153,69,255,0.3)",
                          "0 0 30px rgba(153,69,255,0.6)",
                          "0 0 20px rgba(153,69,255,0.3)",
                        ],
                      }}
                      transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <span className="text-white font-bold">Solana</span>
                    </motion.div>

                    {/* LayerZero Center Node */}
                    <motion.div
                      className="w-28 h-28 bg-gradient-to-br from-[#00eac7] to-[#0a766c] rounded-full flex items-center justify-center z-10 shadow-[0_0_30px_rgba(0,234,199,0.5)]"
                      animate={{
                        scale: [1, 1.05, 1],
                        boxShadow: [
                          "0 0 30px rgba(0,234,199,0.3)",
                          "0 0 50px rgba(0,234,199,0.6)",
                          "0 0 30px rgba(0,234,199,0.3)",
                        ],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    >
                      <Layers className="w-10 h-10 text-[#0f141a]" />
                    </motion.div>

                    {/* Connection Lines */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                      {/* Animated pulse effect for the lines */}
                      <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00eac7">
                            <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="50%" stopColor="#ffffff">
                            <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
                          </stop>
                          <stop offset="100%" stopColor="#00eac7">
                            <animate attributeName="offset" values="0;1;0" dur="3s" repeatCount="indefinite" />
                          </stop>
                        </linearGradient>
                      </defs>

                      {/* Line from Base to LayerZero */}
                      <line
                        x1="25"
                        y1="25"
                        x2="50"
                        y2="50"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        strokeDasharray="1,1"
                      />

                      {/* Line from Solana to LayerZero */}
                      <line
                        x1="75"
                        y1="75"
                        x2="50"
                        y2="50"
                        stroke="url(#lineGradient)"
                        strokeWidth="1"
                        strokeDasharray="1,1"
                      />

                      {/* Data packets moving along the lines */}
                      <circle r="1.5" fill="#00eac7">
                        <animateMotion path="M25,25 L50,50" dur="2s" repeatCount="indefinite" />
                      </circle>

                      <circle r="1.5" fill="#00eac7">
                        <animateMotion path="M50,50 L25,25" dur="2s" repeatCount="indefinite" />
                      </circle>

                      <circle r="1.5" fill="#00eac7">
                        <animateMotion path="M75,75 L50,50" dur="2s" repeatCount="indefinite" />
                      </circle>

                      <circle r="1.5" fill="#00eac7">
                        <animateMotion path="M50,50 L75,75" dur="2s" repeatCount="indefinite" />
                      </circle>
                    </svg>
                  </div>

                  {/* LayerZero Explanation */}
                  <div className="mt-8 text-center">
                    <h4 className="text-xl font-semibold mb-2">What is LayerZero OFT?</h4>
                    <p className="text-gray-400 text-sm">
                      LayerZero's Omnichain Fungible Token (OFT) standard enables PumpTGT to operate seamlessly across
                      multiple blockchains, allowing for efficient cross-chain transfers and unified liquidity.
                    </p>
                    <a
                      href="https://layerzero.network/oft"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#00eac7] mt-2 text-sm hover:underline"
                    >
                      <span>Learn more about LayerZero OFT</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0D1117] relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.08)_0%,transparent_70%)]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to get $PumpTGT?</h2>
                  <p className="text-gray-300 max-w-xl">
                    Lock your $PumpTGT tokens to mint weighted vePumpTGT NFTs and start earning a share of platform fees
                    while participating in DAO governance.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href="https://app.fjordfoundry.com/token-sales/0x45657fbh31c7eD823Ceb06"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium text-[#0f1923] bg-[#00e599] hover:bg-[#00f5d4] transition-all duration-300 hover:-translate-y-[2px] group"
                  >
                    <span className="relative transition-transform duration-300 group-hover:translate-x-[-1px]">
                      Get PUMPTGT
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                  <a
                    href="https://app.pumptogether.xyz"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-base font-medium text-[#00e599] bg-transparent border border-[#00e599] hover:bg-[#00e599] hover:text-[#0f1923] transition-all duration-300 hover:-translate-y-[2px] group"
                  >
                    <span className="relative transition-transform duration-300 group-hover:translate-x-[-1px]">
                      Go To DApp
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]"
                    >
                      <path
                        d="M7 17L17 7M17 7H8M17 7V16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


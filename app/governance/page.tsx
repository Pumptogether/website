"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ElegantHeader from "@/components/elegant-header"
import Footer from "@/components/Footer"
import { PixelBackground } from "@/components/ui/pixel-background"
import { Lock, Clock, Vote, Award, Users, Zap } from "lucide-react"
import Link from "next/link"

// Custom components for the governance page
const GradientCard = ({ children, className = "" }) => (
  <div
    className={`relative rounded-xl overflow-hidden bg-[rgba(42,48,60,0.3)] border border-[#2a303c] hover:border-[#00e8c0] transition-all duration-300 ${className}`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.03)_0%,transparent_70%)] blur-lg"></div>
    {children}
  </div>
)

const SectionTitle = ({ children, centered = false }) => (
  <div className={`mb-8 ${centered ? "text-center" : ""}`}>
    <h2 className="text-3xl md:text-4xl font-bold mb-4">{children}</h2>
    <div className={`w-[60px] h-1 bg-[#00e8c0] my-4 ${centered ? "mx-auto" : ""}`}></div>
  </div>
)

const IconBox = ({ icon: Icon, title, description, className = "" }) => (
  <div
    className={`flex flex-col items-center text-center p-5 rounded-lg bg-[rgba(42,48,60,0.3)] border border-[#2a303c] hover:border-[#00e8c0] transition-all duration-300 ${className}`}
  >
    <div className="w-12 h-12 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[#00e8c0]" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-[#a0a7b8] text-sm">{description}</p>
  </div>
)

// Rank card component with animation
const RankCard = ({ rank, weight, icon, color }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [animationError, setAnimationError] = useState(false)

  const handleHover = (hoverState) => {
    try {
      setIsHovered(hoverState)
    } catch (err) {
      console.error("Error in hover animation:", err)
      setAnimationError(true)
    }
  }

  return (
    <motion.div
      className="relative rounded-lg overflow-hidden"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      whileHover={animationError ? {} : { scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <div className={`absolute inset-0 ${color} opacity-10 rounded-lg`}></div>
      <div className="relative p-5 border border-[#2a303c] rounded-lg bg-[rgba(20,25,33,0.7)] backdrop-blur-sm">
        <div className="flex items-center justify-between mb-3">
          <h3 className={`text-xl font-bold ${color}`}>{rank}</h3>
          <div className={`text-sm font-medium ${color}`}>Weight: {weight}+</div>
        </div>
        <div className={`w-full h-1 ${color} opacity-30 mb-3 rounded-full overflow-hidden`}>
          <motion.div
            className={`h-full ${color} opacity-100`}
            initial={{ width: "0%" }}
            animate={{ width: isHovered ? "100%" : "30%" }}
            transition={{ duration: 0.5 }}
          />
        </div>
        <div className="flex items-center">
          {icon}
          <div className="ml-3 text-sm text-[#a0a7b8]">
            {rank === "Whale" && "Highest voting power & rewards"}
            {rank === "Shark" && "Very high voting power & rewards"}
            {rank === "Dolphin" && "High voting power & rewards"}
            {rank === "Octopus" && "Medium voting power & rewards"}
            {rank === "Fish" && "Low voting power & rewards"}
            {rank === "Shrimp" && "Minimal voting power & rewards"}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// NFT Card Display
const NFTCardDisplay = () => (
  <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6">
    <div className="relative w-full max-w-[500px] mx-auto overflow-hidden rounded-lg">
      <img
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vePumpTGTWhale.gif-Ny4ZxIqGD5OYFto47bKhkmE0BOkjmd.jpeg"
        alt="vePumpTGT Whale NFT Card"
        className="w-full h-auto"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(15,20,26,0.2)] to-transparent"></div>
    </div>
  </div>
)

// Revenue sharing visualization
const RevenueSharing = () => (
  <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-6">Platform Fee Distribution</h3>

    <div className="relative h-[300px] w-full">
      {/* Background grid */}
      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
        {Array.from({ length: 100 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-[#2a303c]/30"></div>
        ))}
      </div>

      {/* Distribution visualization */}
      <div className="absolute inset-0 flex flex-col">
        {/* vePumpTGT Holders - 60% */}
        <div className="h-[60%] bg-gradient-to-b from-[#00e8c0]/20 to-[#00e8c0]/10 border-b border-[#00e8c0] relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-3xl font-bold text-[#00e8c0]">60%</span>
            <span className="text-sm text-white">vePumpTGT Holders</span>
          </div>
        </div>

        {/* Traders - 30% */}
        <div className="h-[30%] bg-gradient-to-b from-[#7eb2ff]/20 to-[#7eb2ff]/10 border-b border-[#7eb2ff] relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-2xl font-bold text-[#7eb2ff]">30%</span>
            <span className="text-sm text-white">Platform Traders</span>
          </div>
        </div>

        {/* DAO Treasury - 10% */}
        <div className="h-[10%] bg-gradient-to-b from-[#ff7eb2]/20 to-[#ff7eb2]/10 border-b border-[#ff7eb2] relative">
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <span className="text-xl font-bold text-[#ff7eb2]">10%</span>
            <span className="text-xs text-white">DAO Treasury</span>
          </div>
        </div>
      </div>

      {/* Side labels */}
      <div className="absolute -left-24 top-0 h-full flex flex-col justify-between text-sm text-[#a0a7b8]">
        <div>100%</div>
        <div>50%</div>
        <div>0%</div>
      </div>
    </div>

    <div className="mt-6 text-sm text-[#a0a7b8]">
      <p>
        Platform fees are distributed daily according to the above percentages. Your share of the 60% allocated to
        vePumpTGT holders is proportional to your NFT's weight relative to the total weight of all active NFTs.
      </p>
    </div>
  </div>
)

// Example calculation component
const ExampleCalculation = () => (
  <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-4">Example Calculation</h3>

    <div className="space-y-6">
      <div className="p-4 bg-[#1c2230] rounded-lg">
        <h4 className="font-medium mb-2">Scenario:</h4>
        <ul className="list-disc pl-6 space-y-1 text-sm text-[#a0a7b8]">
          <li>You lock 1,000 $PumpTGT tokens for 1 year</li>
          <li>Total locked by all users: 10,000 tokens</li>
          <li>You lock at the start (max time bonus = 1.5x)</li>
          <li>DAO term is 2 years, so your duration bonus = 1.5x (half the max)</li>
        </ul>
      </div>

      <div>
        <h4 className="font-medium mb-2">Weight Calculation:</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#a0a7b8]">Base Weight = (1000 / 10,000)</span>
            <span className="text-white">0.1</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a7b8]">Time Bonus (early lock)</span>
            <span className="text-white">1.5x</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a7b8]">Duration Bonus (1 year of 2)</span>
            <span className="text-white">1.5x</span>
          </div>
          <div className="pt-2 border-t border-[#2a303c] flex justify-between font-medium">
            <span>Final Weight = 0.1 × 1.5 × 1.5</span>
            <span className="text-[#00e8c0]">0.225</span>
          </div>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Rank:</h4>
        <div className="p-3 bg-[#1c2230] rounded-lg text-center">
          <span className="text-lg font-medium">
            Weight 225 = <span className="text-[#00e8c0]">"Dolphin" Tier</span>
          </span>
        </div>
      </div>

      <div>
        <h4 className="font-medium mb-2">Profit Share Example:</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-[#a0a7b8]">Daily platform fees: 10 ETH</span>
            <span className="text-white"></span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a7b8]">vePumpTGT holders share (60%)</span>
            <span className="text-white">6 ETH</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a7b8]">Total weight of all NFTs</span>
            <span className="text-white">1000</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#a0a7b8]">Your weight</span>
            <span className="text-white">225</span>
          </div>
          <div className="pt-2 border-t border-[#2a303c] flex justify-between font-medium">
            <span>Your share = (225 / 1000) × 6 ETH</span>
            <span className="text-[#00e8c0]">1.35 ETH</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

// Voting power visualization
const VotingPower = () => (
  <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6">
    <h3 className="text-xl font-semibold mb-6">Voting Power Dynamics</h3>

    <div className="relative h-[200px] w-full mb-8">
      {/* Coordinate system */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#2a303c]"></div>
      <div className="absolute bottom-0 left-0 h-full w-[1px] bg-[#2a303c]"></div>

      {/* Voting power curve */}
      <div className="absolute bottom-0 left-0 w-full h-full">
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="none">
          <defs>
            <linearGradient id="votingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e8c0" stopOpacity="1" />
              <stop offset="100%" stopColor="#00e8c0" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* Area under curve - flat then vertical drop */}
          <path d="M0,200 L0,50 L350,50 L350,200 Z" fill="url(#votingGradient)" fillOpacity="0.2" />

          {/* Curve line - flat then vertical drop */}
          <path d="M0,50 L350,50 L350,200" stroke="#00e8c0" strokeWidth="2" fill="none" />

          {/* Vertical dotted line indicating lock end */}
          <path d="M350,50 L350,200" stroke="#00e8c0" strokeWidth="2" strokeDasharray="5,5" fill="none" />

          {/* Reset indicator */}
          <circle cx="350" cy="200" r="4" fill="#00e8c0" />
        </svg>
      </div>

      {/* Labels */}
      <div className="absolute bottom-4 left-0 text-xs text-[#a0a7b8]">Lock Start</div>
      <div className="absolute bottom-4 right-0 text-xs text-[#a0a7b8]">Lock End</div>
      <div className="absolute top-0 left-4 text-xs text-[#a0a7b8]">Max Power</div>
      <div className="absolute bottom-0 left-4 text-xs text-[#a0a7b8]">Zero Power</div>
      <div className="absolute top-[50px] right-16 text-xs text-[#00e8c0] font-bold">Abrupt Reset</div>
    </div>

    <div className="space-y-4 text-sm text-[#a0a7b8]">
      <p>
        Voting power remains constant throughout the lock period and then{" "}
        <span className="text-[#00e8c0] font-medium">resets to zero immediately</span> when the lock expires. This
        creates a strong incentive to renew your lock before expiration to maintain your governance influence.
      </p>

      <div className="p-4 bg-[#1c2230] rounded-lg">
        <h4 className="font-medium text-white mb-2">Boosted Voting Rewards</h4>
        <p>
          Active voters receive additional $PumpTGT rewards as an incentive for governance participation. These rewards
          are proportional to your voting power and activity level.
        </p>
      </div>
    </div>
  </div>
)

export default function Governance() {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false)
  // Add error state at the top of the component
  const [error, setError] = useState(null)

  // Update the useEffect hook to handle errors better
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      console.error("Unhandled promise rejection:", event.reason)
      setError(event.reason)
      // Prevent the default browser behavior
      event.preventDefault()
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    try {
      setIsMounted(true)
    } catch (err) {
      console.error("Error during component mount:", err)
      setError(err)
    }

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  // Don't render until client-side
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-[#0f141a] flex items-center justify-center">
        <div className="animate-pulse text-[#00e8c0]">Loading...</div>
      </div>
    )
  }

  // Add this right after the isMounted check
  if (error) {
    return (
      <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
        <ElegantHeader />
        <main className="flex-grow py-12 md:py-16 relative z-10 flex items-center justify-center">
          <div className="bg-[rgba(255,59,48,0.1)] border border-[rgba(255,59,48,0.3)] rounded-xl p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-white">Error Loading Page</h2>
            <p className="text-[#a0a7b8] mb-4">
              There was an error loading the governance page. Please try refreshing the page.
            </p>
            <pre className="bg-[rgba(42,48,60,0.5)] p-4 rounded-lg overflow-auto text-sm text-red-400">
              {error.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-[#00e8c0] text-[#0f141a] rounded-md hover:bg-[#00f5d4] transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
      {/* Background elements */}
      <PixelBackground gap={8} speed={18} colors={["#00eac7", "#03d1b5", "#0a766c", "#00f5d4"]} variant="default" />

      {/* Header */}
      <ElegantHeader />

      {/* Main Content */}
      <main className="flex-grow py-16 md:py-24 relative">
        {/* Hero Section */}
        <section className="relative mb-20">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="py-16 md:py-24 text-center">
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-[#00e8c0]">ve</span>PumpTGT Governance
              </motion.h1>

              <motion.div
                className="w-[100px] h-1 bg-[#00e8c0] mx-auto my-8"
                initial={{ width: 0 }}
                animate={{ width: 100 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              ></motion.div>

              <motion.p
                className="text-xl text-[#a0a7b8] max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                The key to Pumptogether's decentralized governance system, empowering token holders with voting rights
                and revenue sharing.
              </motion.p>

              <motion.div
                className="mt-12 flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <Link
                  href="#"
                  className="group inline-flex items-center px-6 py-3 rounded-md text-base font-medium text-[#0f1923] bg-[#00e8c0] hover:bg-[#00f5d4] transition-all duration-300 hover:-translate-y-[2px] relative"
                >
                  <Lock className="mr-2 h-5 w-5" />
                  Lock $PumpTGT
                  <span className="absolute -top-6 -right-2 px-1.5 py-0.5 text-[8px] font-medium text-black bg-amber-400 rounded-sm shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 after:content-[''] after:absolute after:top-full after:right-3 after:border-l-[5px] after:border-l-transparent after:border-t-[5px] after:border-t-amber-400 after:border-r-[5px] after:border-r-transparent">
                    (Testnet Mode)
                  </span>
                </Link>
                <Link
                  href="https://snapshot.box/#/base:0xC4823bAeDC0a0968C5809A329F94Ce07B39c9100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-md text-base font-medium text-[#00e8c0] bg-transparent border border-[#00e8c0] hover:bg-[#00e8c0] hover:text-[#0f1923] transition-all duration-300 hover:-translate-y-[2px]"
                >
                  <Vote className="mr-2 h-5 w-5" />
                  View Active Proposals
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What is vePumpTGT Section */}
        <section className="mb-20">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-[#0D1117] rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.05)_0%,transparent_70%)]"></div>
              <div className="relative z-10 p-8 md:p-12 border border-[#2a303c] rounded-xl">
                <SectionTitle centered>What is vePumpTGT?</SectionTitle>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <GradientCard>
                    <h3 className="text-2xl font-bold mb-4">Vote-Escrowed NFT</h3>
                    <p className="text-[#a0a7b8] mb-6">
                      vePumpTGT is a vote-escrowed NFT representing locked $PumpTGT tokens in the Pumptogether DAO. This
                      system incentivizes early participation and long-term commitment while ensuring that high economic
                      contributions are recognized through increased voting weight and higher profit shares.
                    </p>

                    <div className="p-4 bg-[rgba(0,234,199,0.05)] border border-[#00e8c0]/20 rounded-lg">
                      <h4 className="font-medium mb-2 text-[#00e8c0]">Key Benefits:</h4>
                      <ul className="list-disc pl-6 space-y-2 text-[#a0a7b8]">
                        <li>Voting rights in DAO governance</li>
                        <li>Share of platform fee revenue (60%)</li>
                        <li>Boosted voting rewards</li>
                        <li>Potential for future value appreciation</li>
                      </ul>
                    </div>
                  </GradientCard>

                  <GradientCard>
                    <h3 className="text-2xl font-bold mb-4">Locking Mechanism</h3>
                    <p className="text-[#a0a7b8] mb-6">
                      When you lock your $PumpTGT tokens, you receive a vePumpTGT NFT with a weight based on your
                      contribution. This weight determines your voting power and share of platform revenues.
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                          <Clock className="w-5 h-5 text-[#00e8c0]" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Time Bonus</h4>
                          <p className="text-sm text-[#a0a7b8]">
                            Early lockers receive up to 1.5x multiplier, rewarding those who join at the beginning.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                          <Lock className="w-5 h-5 text-[#00e8c0]" />
                        </div>
                        <div>
                          <h4 className="font-medium mb-1">Duration Bonus</h4>
                          <p className="text-sm text-[#a0a7b8]">
                            Longer lock periods earn up to 2x multiplier, incentivizing long-term commitment to the
                            protocol.
                          </p>
                        </div>
                      </div>
                    </div>
                  </GradientCard>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Weight Calculation Section */}
        <section className="mb-20 relative">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative rounded-xl overflow-hidden mb-8 py-8 md:py-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.05)_0%,transparent_70%)]"></div>
              <div className="relative z-10 p-8 md:p-12 border border-[#2a303c] rounded-xl">
                <SectionTitle>Weight Calculation & Ranks</SectionTitle>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                  <div>
                    <GradientCard className="h-full">
                      <h3 className="text-2xl font-bold mb-4">How Weight is Calculated</h3>
                      <p className="text-[#a0a7b8] mb-6">
                        Your vePumpTGT weight determines your voting power and share of platform revenues. It's
                        calculated using three key factors:
                      </p>

                      <div className="space-y-6">
                        <div className="p-4 bg-[rgba(42,48,60,0.5)] rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <div className="w-6 h-6 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mr-2">
                              <span className="text-[#00e8c0] text-sm font-bold">1</span>
                            </div>
                            Base Weight
                          </h4>
                          <p className="text-sm text-[#a0a7b8]">
                            Your locked tokens divided by the total locked tokens in the system. This represents your
                            proportional contribution.
                          </p>
                        </div>

                        <div className="p-4 bg-[rgba(42,48,60,0.5)] rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <div className="w-6 h-6 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mr-2">
                              <span className="text-[#00e8c0] text-sm font-bold">2</span>
                            </div>
                            Time Bonus (up to 1.5x)
                          </h4>
                          <p className="text-sm text-[#a0a7b8]">
                            Early lockers receive a higher multiplier—like an early-bird reward. This bonus decreases
                            over time.
                          </p>
                        </div>

                        <div className="p-4 bg-[rgba(42,48,60,0.5)] rounded-lg">
                          <h4 className="font-medium mb-2 flex items-center">
                            <div className="w-6 h-6 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mr-2">
                              <span className="text-[#00e8c0] text-sm font-bold">3</span>
                            </div>
                            Duration Bonus (up to 2x)
                          </h4>
                          <p className="text-sm text-[#a0a7b8]">
                            The longer you lock your tokens (up to the full DAO term), the higher your bonus. A
                            full-term lock can double your weight.
                          </p>
                        </div>

                        <div className="p-4 bg-[#1c2230] rounded-lg border border-[#00e8c0]/20">
                          <h4 className="font-medium mb-2 text-[#00e8c0]">Final Weight Formula:</h4>
                          <div className="bg-[#0f141a] p-3 rounded text-center">
                            <span className="font-mono text-lg">
                              Weight = Base Weight × Time Bonus × Duration Bonus
                            </span>
                          </div>
                        </div>
                      </div>
                    </GradientCard>
                  </div>

                  <div>
                    <NFTCardDisplay />
                  </div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">Rank Tiers</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <RankCard
                rank="Whale"
                weight="1500"
                icon={
                  <svg
                    className="w-8 h-8 text-[#00e8c0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 13.5C7 13.5 10 16 12 16C14 16 17 13.5 17 13.5M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                color="text-[#00e8c0]"
              />
              <RankCard
                rank="Shark"
                weight="700"
                icon={
                  <svg
                    className="w-8 h-8 text-[#7eb2ff]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.5 15.5C5.5 15.5 7 13 12 13C17 13 18.5 15.5 18.5 15.5M14.5 8.5C14.5 9.88071 13.3807 11 12 11C10.6193 11 9.5 9.88071 9.5 8.5C9.5 7.11929 10.6193 6 12 6C13.3807 6 14.5 7.11929 14.5 8.5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                color="text-[#7eb2ff]"
              />
              <RankCard
                rank="Dolphin"
                weight="250"
                icon={
                  <svg
                    className="w-8 h-8 text-[#73e0ff]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 11V8.5M16 11V8.5M12 11V7M7.5 15C7.5 15 9 17 12 17C15 17 16.5 15 16.5 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                color="text-[#73e0ff]"
              />
              <RankCard
                rank="Octopus"
                weight="150"
                icon={
                  <svg
                    className="w-8 h-8 text-[#ff9e7e]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 11L9.01 11M15 11L15.01 11M8 16.01L8.01 16M16 16.01L16.01 16M12 16.01L12.01 16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                color="text-[#ff9e7e]"
              />
              <RankCard
                rank="Fish"
                weight="50"
                icon={
                  <svg
                    className="w-8 h-8 text-[#ffce7e]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 12L9.01 12M15 12L15.01 12M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                color="text-[#ffce7e]"
              />
              <RankCard
                rank="Shrimp"
                weight="10"
                icon={
                  <svg
                    className="w-8 h-8 text-[#e07eff]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 16L12.01 16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                }
                color="text-[#e07eff]"
              />
            </div>
          </div>
        </section>

        {/* Revenue Sharing & Voting Section */}
        <section className="mb-20 relative">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="py-8 md:py-12">
              <SectionTitle>Revenue Sharing & Voting</SectionTitle>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                <div>
                  <RevenueSharing />
                </div>

                <div>
                  <VotingPower />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <IconBox
                  icon={Award}
                  title="Daily Rewards"
                  description="Platform fees are distributed daily to vePumpTGT holders based on their proportional weight."
                />
                <IconBox
                  icon={Users}
                  title="Community Control"
                  description="The DAO governs all aspects of the platform, from fee structures to development priorities."
                />
                <IconBox
                  icon={Zap}
                  title="Boosted Incentives"
                  description="Active voters receive additional rewards to encourage participation in governance."
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[#0D1117] rounded-xl"></div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.05)_0%,transparent_70%)]"></div>
              <div className="relative z-10 p-8 md:p-12 border border-[#2a303c] rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to participate in governance?</h2>
                    <p className="text-[#a0a7b8] max-w-xl">
                      Lock your $PumpTGT tokens to mint a vePumpTGT NFT. Start earning platform fees and shape the
                      future of PumptogetherDAO.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium text-[#0f1923] bg-[#00e599] hover:bg-[#00f5d4] transition-all duration-300 hover:-translate-y-[2px] group w-full sm:w-auto relative"
                    >
                      <span className="relative transition-transform duration-300 group-hover:translate-x-[-1px]">
                        Lock $PumpTGT
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
                      <span className="absolute -top-6 -right-2 px-1.5 py-0.5 text-[8px] font-medium text-black bg-amber-400 rounded-sm shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 after:content-[''] after:absolute after:top-full after:right-3 after:border-l-[5px] after:border-l-transparent after:border-t-[5px] after:border-t-amber-400 after:border-r-[5px] after:border-r-transparent">
                        (Testnet Mode)
                      </span>
                    </Link>
                    <Link
                      href="#"
                      className="inline-flex items-center justify-center px-6 py-3 rounded-md text-base font-medium text-[#00e599] bg-transparent border border-[#00e599] hover:bg-[#00e599] hover:text-[#0f1923] transition-all duration-300 hover:-translate-y-[2px] group w-full sm:w-auto"
                    >
                      <span className="relative transition-transform duration-300 group-hover:translate-x-[-1px]">
                        <Link href="https://docs.pumptogether.xyz/nft-dao-governance">Learn More</Link>
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
                    </Link>
                  </div>
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


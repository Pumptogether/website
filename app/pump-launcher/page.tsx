"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ElegantHeader from "@/components/elegant-header"
import Footer from "@/components/Footer"
import { PixelBackground } from "@/components/ui/pixel-background"
import Link from "next/link"
import {
  Rocket,
  Lock,
  Bot,
  ArrowRight,
  Calendar,
  DollarSign,
  Award,
  BarChart3,
  Zap,
  Shield,
  TrendingUp,
  Users,
  Repeat,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Custom components for the Pump Launcher page
const GradientCard = ({ children, className = "" }) => (
  <div
    className={`relative rounded-xl overflow-hidden bg-[rgba(42,48,60,0.3)] border border-[#2a303c] hover:border-[#00e8c0] transition-all duration-300 ${className}`}
  >
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.03)_0%,transparent_70%)] blur-lg"></div>
    <div className="relative z-10 p-6 md:p-8">{children}</div>
  </div>
)

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => (
  <div
    className={`flex flex-col p-6 rounded-lg bg-[rgba(42,48,60,0.3)] border border-[#2a303c] hover:border-[#00e8c0] transition-all duration-300 hover:-translate-y-1 ${className}`}
  >
    <div className="w-12 h-12 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-[#00e8c0]" />
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-[#a0a7b8] text-sm">{description}</p>
  </div>
)

const ProcessStep = ({ number, title, description, icon: Icon, isLast = false }) => (
  <div className="flex">
    <div className="flex flex-col items-center mr-4">
      <div className="w-10 h-10 rounded-full bg-[rgba(0,234,199,0.1)] flex items-center justify-center text-[#00e8c0] font-bold">
        {number}
      </div>
      {!isLast && <div className="w-0.5 h-full bg-gradient-to-b from-[#00e8c0] to-transparent mt-2"></div>}
    </div>
    <div className="pb-8">
      <div className="flex items-center mb-2">
        <Icon className="w-5 h-5 text-[#00e8c0] mr-2" />
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
      <p className="text-[#a0a7b8] text-sm">{description}</p>
    </div>
  </div>
)

// Revenue Distribution Component
const RevenueDistribution = () => (
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
          <span className="text-sm text-white">Project Deployers & Traders</span>
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
)

// AI Agent Animation Component
const AIAgentAnimation = () => {
  return (
    <div className="relative w-full h-[300px] rounded-xl overflow-hidden bg-[#0a0d12] border border-[#2a303c]">
      {/* Background Grid */}
      <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
        {Array.from({ length: 400 }).map((_, i) => (
          <div key={i} className="border-[0.5px] border-[#2a303c]/10"></div>
        ))}
      </div>

      {/* Central AI Brain */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-[rgba(0,234,199,0.1)] flex items-center justify-center"
        animate={{
          boxShadow: ["0 0 20px rgba(0,234,199,0.2)", "0 0 40px rgba(0,234,199,0.4)", "0 0 20px rgba(0,234,199,0.2)"],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
      >
        <Bot className="w-12 h-12 text-[#00e8c0]" />
      </motion.div>

      {/* Connection Lines */}
      {[
        { x: "20%", y: "20%", icon: <Users className="w-6 h-6 text-[#7eb2ff]" />, label: "Community" },
        { x: "80%", y: "20%", icon: <TrendingUp className="w-6 h-6 text-[#ff7eb2]" />, label: "Analytics" },
        { x: "20%", y: "80%", icon: <Zap className="w-6 h-6 text-[#ffce7e]" />, label: "Engagement" },
        { x: "80%", y: "80%", icon: <BarChart3 className="w-6 h-6 text-[#73e0ff]" />, label: "Growth" },
      ].map((node, i) => (
        <div key={i} className="absolute" style={{ top: node.y, left: node.x }}>
          {/* Connection Line */}
          <motion.div
            className="absolute top-1/2 left-1/2 h-0.5 bg-gradient-to-r from-[#00e8c0]/80 to-transparent origin-left"
            style={{
              width: "100px",
              transformOrigin: "left center",
              transform: `translate(-50%, -50%) rotate(${
                Math.atan2(50 - Number.parseFloat(node.y), 50 - Number.parseFloat(node.x)) * (180 / Math.PI)
              }deg)`,
            }}
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
          />

          {/* Node */}
          <motion.div
            className="w-12 h-12 rounded-full bg-[rgba(42,48,60,0.8)] flex items-center justify-center"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
          >
            {node.icon}
          </motion.div>

          {/* Label */}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-[#a0a7b8] whitespace-nowrap">
            {node.label}
          </div>
        </div>
      ))}

      {/* Data Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[#00e8c0]"
          initial={{
            x: "50%",
            y: "50%",
            opacity: 0,
          }}
          animate={{
            x: `${Math.random() * 100}%`,
            y: `${Math.random() * 100}%`,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

export default function PumpLauncher() {
  // Add state to track if component is mounted
  const [isMounted, setIsMounted] = useState(false)

  // Handle unhandled promise rejections
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      console.error("Unhandled promise rejection:", event.reason)
      // Prevent the default browser behavior
      event.preventDefault()
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)
    setIsMounted(true)

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

  return (
    <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
      {/* Background elements */}
      <PixelBackground gap={8} speed={18} colors={["#00eac7", "#03d1b5", "#0a766c", "#00f5d4"]} variant="default" />

      {/* Header */}
      <ElegantHeader />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              {/* Left Content */}
              <div className="w-full lg:w-1/2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                    <span className="text-[#00e8c0]">Pump</span> Launcher
                  </h1>

                  <motion.div
                    className="w-[100px] h-1 bg-[#00e8c0] my-8"
                    initial={{ width: 0 }}
                    animate={{ width: 100 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  ></motion.div>

                  <p className="text-xl text-[#a0a7b8] mb-8 leading-relaxed">
                    Transform the meme coin market with our revolutionary platform that prevents rug pulls, ensures
                    project stability, and facilitates successful launches.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://app.pumptogether.xyz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center px-6 py-3 rounded-md text-base font-medium text-[#0f1923] bg-[#00e8c0] hover:bg-[#00f5d4] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-[2px] active:translate-y-0"
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        const btn = e.currentTarget;
                        btn.style.transform = 'scale(0.95)';
                        setTimeout(() => btn.style.transform = '', 100);
                      }}
                    >
                      <Rocket className="mr-2 h-5 w-5" />
                      <span>Launch Your Project</span>
                    </a>

                    <a
                      href="#how-it-works"
                      className="group inline-flex items-center px-6 py-3 rounded-md text-base font-medium text-[#00e8c0] bg-transparent border border-[#00e8c0] hover:bg-[#00e8c0] hover:text-[#0f1923] hover:shadow-lg transition-all duration-300 transform hover:-translate-y-[2px] active:translate-y-0"
                      role="button"
                      tabIndex={0}
                      onClick={(e) => {
                        e.preventDefault();
                        const section = document.getElementById('how-it-works');
                        if (section) {
                          section.scrollIntoView({ behavior: 'smooth' });
                        }
                        const btn = e.currentTarget;
                        btn.style.transform = 'scale(0.95)';
                        setTimeout(() => btn.style.transform = '', 100);
                      }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Rocket on Exponential Chart */}
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="w-full h-full"
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,234,199,0.25)_0%,transparent_70%)] blur-2xl"></div>
                  <div className="relative z-10 w-full">
                    {/* Chart Container */}
                    <div className="w-full aspect-square md:aspect-[4/3] lg:aspect-square bg-[#0a0d12] rounded-xl border border-[#2a303c] p-4 md:p-6 relative overflow-hidden">
                      {/* Grid Background */}
                      <div className="absolute inset-0 grid grid-cols-10 grid-rows-10">
                        {Array.from({ length: 100 }).map((_, i) => (
                          <div key={i} className="border-[0.5px] border-[#2a303c]/30"></div>
                        ))}
                      </div>

                      {/* Y-axis Labels */}
                      <div className="absolute left-2 top-0 h-full flex flex-col justify-between text-xs text-[#a0a7b8] py-4">
                        <div>100x</div>
                        <div>75x</div>
                        <div>50x</div>
                        <div>25x</div>
                        <div>0x</div>
                      </div>

                      {/* X-axis Labels */}
                      <div className="absolute bottom-2 left-0 w-full flex justify-between text-xs text-[#a0a7b8] px-10">
                        <div>Launch</div>
                        <div>Growth</div>
                        <div>Peak</div>
                      </div>

                      {/* Exponential Growth Curve */}
                      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        {/* Chart Area */}
                        <defs>
                          <linearGradient id="chartGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                            <stop offset="0%" stopColor="#00e8c0" stopOpacity="0.1" />
                            <stop offset="100%" stopColor="#00e8c0" stopOpacity="0.5" />
                          </linearGradient>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00e8c0" />
                            <stop offset="100%" stopColor="#00f5d4" />
                          </linearGradient>
                          <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                          </filter>
                        </defs>

                        {/* Exponential Curve Area */}
                        <path d="M 10,90 Q 30,90 40,70 T 60,40 T 90,10 V 90 H 10 Z" fill="url(#chartGradient)" />

                        {/* Exponential Curve Line */}
                        <path
                          d="M 10,90 Q 30,90 40,70 T 60,40 T 90,10"
                          fill="none"
                          stroke="url(#lineGradient)"
                          strokeWidth="2"
                          filter="url(#glow)"
                        />

                        {/* Data Points */}
                        <circle cx="10" cy="90" r="1.5" fill="#00e8c0" />
                        <circle cx="40" cy="70" r="1.5" fill="#00e8c0" />
                        <circle cx="60" cy="40" r="1.5" fill="#00e8c0" />
                        <circle cx="90" cy="10" r="1.5" fill="#00e8c0" />

                        {/* Animated Pulse at Peak */}
                        <circle cx="90" cy="10" r="3" fill="#00e8c0" opacity="0.6">
                          <animate attributeName="r" values="3;6;3" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                        </circle>
                      </svg>

                      {/* Rocket at Peak */}
                      <motion.div
                        className="absolute"
                        style={{ top: "8%", left: "87%" }}
                        animate={{
                          y: [0, -10, 0],
                          rotate: [-5, 5, -5],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                      >
                        <div className="relative">
                          {/* Rocket Flames */}
                          <motion.div
                            className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-4 h-6"
                            animate={{
                              height: [6, 10, 6],
                              opacity: [0.8, 1, 0.8],
                            }}
                            transition={{
                              duration: 0.5,
                              repeat: Number.POSITIVE_INFINITY,
                              ease: "easeInOut",
                            }}
                          >
                            <div className="w-full h-full bg-gradient-to-t from-[#ffce7e] via-[#ff7eb2] to-[#00e8c0] rounded-b-full blur-[2px]"></div>
                          </motion.div>

                          {/* Rocket Body */}
                          <div className="w-10 h-16 relative">
                            {/* Rocket Body */}
                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-[#00f5d4] to-[#00c5a8] rounded-t-full"></div>

                            {/* Rocket Nose */}
                            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00e8c0] rounded-t-full"></div>

                            {/* Rocket Windows */}
                            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-[#0a0d12] rounded-full border border-[#2a303c]"></div>

                            {/* Rocket Fins */}
                            <div className="absolute bottom-2 left-0 w-2 h-4 bg-[#00d4b6] rounded-l-sm transform -skew-y-12"></div>
                            <div className="absolute bottom-2 right-0 w-2 h-4 bg-[#00d4b6] rounded-r-sm transform skew-y-12"></div>
                          </div>
                        </div>
                      </motion.div>

                      {/* Floating Particles */}
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-1 h-1 rounded-full bg-[#00e8c0]"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2,
                          }}
                          animate={{
                            y: [0, Math.random() * -20 - 10],
                            opacity: [Math.random() * 0.5 + 0.2, 0],
                          }}
                          transition={{
                            duration: Math.random() * 3 + 2,
                            repeat: Number.POSITIVE_INFINITY,
                            repeatType: "loop",
                            ease: "easeInOut",
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}

                      {/* Chart Title */}
                      <div className="absolute top-2 right-4 text-sm font-semibold text-white">
                        Pump Launcher Growth Trajectory
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Core Components Section */}
        <section className="py-20 relative">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Three Core Components</h2>
              <div className="w-[60px] h-1 bg-[#00e8c0] mx-auto my-6"></div>
              <p className="text-[#a0a7b8] max-w-2xl mx-auto">
                Our interconnected system creates a secure, profitable ecosystem for both project developers and
                traders.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pump Launcher */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <FeatureCard
                  icon={Rocket}
                  title="Pump Launcher"
                  description="A streamlined project deployment system that enables instant DEX listing and built-in marketing for new meme coins."
                />
              </motion.div>

              {/* PumpLocks */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <FeatureCard
                  icon={Lock}
                  title="PumpLocks"
                  description="An incentivized token locking mechanism that prevents rug pulls while providing daily rewards to participants."
                />
              </motion.div>

              {/* AI Social Media Agent */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <FeatureCard
                  icon={Bot}
                  title="AI Social Media Agent"
                  description="Automated community engagement that drives growth through intelligent, data-driven promotion across social channels."
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 relative">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">How The System Works</h2>
              <div className="w-[60px] h-1 bg-[#00e8c0] mx-auto my-6"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* For Project Developers */}
              <div>
                <GradientCard className="h-full">
                  <div className="flex items-center mb-6">
                    <Rocket className="w-8 h-8 text-[#00e8c0] mr-3" />
                    <h3 className="text-2xl font-bold">For Project Developers</h3>
                  </div>

                  <div className="space-y-2">
                    <ProcessStep
                      number="1"
                      title="Project Launch"
                      description="Lock $PumpTGT tokens, launch your coin through Pump Launcher, and lock your position with a random release date."
                      icon={Calendar}
                    />

                    <ProcessStep
                      number="2"
                      title="During Lock Period"
                      description="Receive a PumpLock NFT, claim daily fee rewards in SOL/ETH, and benefit from AI-driven promotion across social channels."
                      icon={DollarSign}
                    />

                    <ProcessStep
                      number="3"
                      title="At Unlock Date"
                      description="Burn the PumpLock NFT, claim unlock rewards in $PumpTGT tokens, and retrieve your locked capital."
                      icon={Award}
                      isLast={true}
                    />
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#2a303c]">
                    <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <Zap className="w-4 h-4 text-[#00e8c0]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#a0a7b8]">Instant DEX listing capability</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <Bot className="w-4 h-4 text-[#00e8c0]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#a0a7b8]">Built-in AI marketing</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <BarChart3 className="w-4 h-4 text-[#00e8c0]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#a0a7b8]">Stable token price</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <Shield className="w-4 h-4 text-[#00e8c0]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#a0a7b8]">Protection against early dumps</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GradientCard>
              </div>

              {/* For Traders */}
              <div>
                <GradientCard className="h-full">
                  <div className="flex items-center mb-6">
                    <Users className="w-8 h-8 text-[#00e8c0] mr-3" />
                    <h3 className="text-2xl font-bold">For Traders</h3>
                  </div>

                  <div className="space-y-2">
                    <ProcessStep
                      number="1"
                      title="Project Participation"
                      description="Lock $PumpTGT tokens, lock your position in selected projects, and receive a random release date."
                      icon={Calendar}
                    />

                    <ProcessStep
                      number="2"
                      title="During Lock Period"
                      description="Receive a PumpLock NFT, claim daily fee rewards in SOL/ETH, and engage with the AI-driven community."
                      icon={DollarSign}
                    />

                    <ProcessStep
                      number="3"
                      title="At Unlock Date"
                      description="Burn the PumpLock NFT, claim unlock rewards in $PumpTGT tokens, and retrieve your locked capital."
                      icon={Award}
                      isLast={true}
                    />
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#2a303c]">
                    <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <Shield className="w-4 h-4 text-[#00e8c0]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#a0a7b8]">Protection against rug pulls</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <DollarSign className="w-4 h-4 text-[#00e8c0]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#a0a7b8]">Daily passive income</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <Award className="w-4 h-4 text-[#00e8c0]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#a0a7b8]">Unlock rewards</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <Repeat className="w-4 h-4 text-[#00e8c0]" />
                        </div>
                        <div>
                          <p className="text-sm text-[#a0a7b8]">Tradable positions through NFTs</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </GradientCard>
              </div>
            </div>
          </div>
        </section>

        {/* PumpLock NFT Section */}
        <section className="py-20 relative">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">PumpLock NFT: The System Cornerstone</h2>
              <div className="w-[60px] h-1 bg-[#00e8c0] mx-auto my-6"></div>
              <p className="text-[#a0a7b8] max-w-2xl mx-auto">
                The PumpLock NFT represents your locked capital position and is the key to claiming rewards and
                unlocking your investment.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* NFT Card */}
              <div className="order-2 lg:order-1">
                <div className="relative w-full max-w-[400px] mx-auto">
                  <div className="absolute -inset-4 bg-[radial-gradient(circle,rgba(0,234,199,0.15)_0%,transparent_70%)] blur-2xl rounded-full"></div>
                  <div className="relative rounded-xl overflow-hidden border border-[#2a303c] hover:border-[#00e8c0] transition-all duration-300">
                    {/* Add error handling and fallback for the image */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="w-full"
                    >
                      <img
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Pumplock.gif-jXQdV0kHpwo0auG9czwrHuQh1ft4NO.jpeg"
                        alt="PumpLock NFT Interface"
                        className="w-full h-auto"
                        onError={(e) => {
                          console.error("Image failed to load")
                          e.currentTarget.src = "/placeholder.svg?height=400&width=400"
                          e.currentTarget.alt = "PumpLock NFT Interface (Placeholder)"
                        }}
                      />
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* NFT Features */}
              <div className="order-1 lg:order-2">
                <GradientCard>
                  <h3 className="text-2xl font-bold mb-6">PumpLock NFT Features</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <Lock className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Represents Locked Capital</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          Each NFT represents your locked position in a specific project, ensuring capital remains
                          committed for the duration.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <Repeat className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Tradable on Secondary Markets</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          PumpLock NFTs can be sold on secondary markets, allowing you to exit positions before the
                          unlock date if desired.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <DollarSign className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Required for Daily Rewards</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          Holding the NFT allows you to claim your share of daily platform fee distributions in SOL/ETH.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <Award className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Burned at Unlock</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          When the unlock date arrives, the NFT must be burned to retrieve your locked capital and claim
                          unlock rewards.
                        </p>
                      </div>
                    </div>
                  </div>
                </GradientCard>
              </div>
            </div>
          </div>
        </section>

        {/* AI Social Media Agent Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Social Media Agent</h2>
              <div className="w-[60px] h-1 bg-[#00e8c0] mx-auto my-6"></div>
              <p className="text-[#a0a7b8] max-w-2xl mx-auto">
                Our AI-powered agents manage social media, engage users, and drive growth for your project across
                multiple platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* AI Agent Features */}
              <div>
                <GradientCard>
                  <h3 className="text-2xl font-bold mb-6">AI Agent Capabilities</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <Users className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Community Management</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          Engages with community members, answers questions, and maintains active social channels.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <TrendingUp className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Growth Optimization</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          Analyzes performance data to optimize content strategy and maximize engagement metrics.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <Zap className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Multi-Platform Presence</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          Manages presence across Twitter, Telegram, Discord, and other platforms simultaneously.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <BarChart3 className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">Strategic Interactions</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          Creates meaningful engagement that drives long-term value rather than just promotion.
                        </p>
                      </div>
                    </div>
                  </div>
                </GradientCard>
              </div>

              {/* AI Agent Animation */}
              <div>
                <AIAgentAnimation />
              </div>
            </div>
          </div>
        </section>

        {/* Revenue Model Section */}
        <section className="py-20 relative">
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Revenue Model</h2>
              <div className="w-[60px] h-1 bg-[#00e8c0] mx-auto my-6"></div>
              <p className="text-[#a0a7b8] max-w-2xl mx-auto">
                Platform revenue from 3% fees on launches and trades is distributed to create a sustainable ecosystem.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Revenue Distribution Chart */}
              <div className="order-2 lg:order-1">
                <GradientCard>
                  <h3 className="text-xl font-semibold mb-6 text-center">Fee Distribution</h3>
                  <RevenueDistribution />
                </GradientCard>
              </div>

              {/* Revenue Details */}
              <div className="order-1 lg:order-2">
                <GradientCard>
                  <h3 className="text-2xl font-bold mb-6">Sustainable Revenue Sharing</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <Users className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">60% to vePumpTGT Holders</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          The majority of fees go to DAO governance participants who have locked their $PumpTGT tokens.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <Rocket className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">30% to Project Deployers & Traders</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          Active participants in the ecosystem receive daily rewards based on their locked positions.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <DollarSign className="w-5 h-5 text-[#00e8c0]" />
                      </div>
                      <div>
                        <h4 className="font-medium mb-1">10% to DAO Treasury</h4>
                        <p className="text-sm text-[#a0a7b8]">
                          A portion is retained for ongoing development, marketing, and ecosystem growth initiatives.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-[#2a303c]">
                    <p className="text-[#a0a7b8] text-sm">
                      This revenue distribution model creates alignment between all stakeholders and ensures the
                      long-term sustainability of the platform.
                    </p>
                  </div>
                </GradientCard>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative mb-16">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Launch Your Project?</h2>
              <p className="text-[#a0a7b8] max-w-2xl mx-auto mb-8">
                Join the revolution in meme token launches with PumptogetherDAO's innovative platform.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link
                  href="https://app.pumptogether.xyz"
                  className="inline-flex items-center px-8 py-4 rounded-md text-lg font-medium text-[#0f1923] bg-[#00e8c0] hover:bg-[#00f5d4] transition-all duration-300 hover:-translate-y-[2px]"
                >
                  <Rocket className="mr-2 h-6 w-6" />
                  Launch your Project
                </Link>
                <Link
                  href="https://docs.pumptogether.xyz/pump-launcher"
                  className="inline-flex items-center px-8 py-4 rounded-md text-lg font-medium text-[#00e8c0] bg-transparent border border-[#00e8c0] hover:bg-[#00e8c0] hover:text-[#0f1923] transition-all duration-300 hover:-translate-y-[2px]"
                >
                  <Lock className="mr-2 h-6 w-6" />
                  Learn More
                </Link>
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


"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import ElegantHeader from "@/components/elegant-header"
import Footer from "@/components/Footer"
import { PixelBackground } from "@/components/ui/pixel-background"
import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts"
import {
  Clock,
  Lock,
  Users,
  BarChart3,
  Flame,
  TrendingUp,
  DollarSign,
  Award,
  ChevronUp,
  ChevronDown,
  PieChart,
} from "lucide-react"

// Sample data for the price chart
const generatePriceData = () => {
  const basePrice = 1.05
  const data = []
  const hours = [
    "8AM",
    "9AM",
    "10AM",
    "11AM",
    "12PM",
    "1PM",
    "2PM",
    "3PM",
    "4PM",
    "5PM",
    "6PM",
    "7PM",
    "8PM",
    "9PM",
    "10PM",
    "11PM",
    "12AM",
    "1AM",
    "2AM",
    "3AM",
    "4AM",
    "5AM",
    "6AM",
    "7AM",
  ]

  let price = basePrice
  hours.forEach((hour, index) => {
    // Add some randomness but maintain an upward trend
    const change = 0.01 + Math.random() * 0.03
    price += change
    data.push({
      time: hour,
      price: Number.parseFloat(price.toFixed(2)),
    })
  })

  return data
}

// Custom tooltip for the chart
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#141921] p-3 border border-[#2a303c] rounded-lg shadow-lg">
        <p className="text-[#a0a7b8] text-xs">{label}</p>
        <p className="text-[#00e8c0] font-medium">${payload[0].value.toFixed(2)}</p>
      </div>
    )
  }
  return null
}

// Animated number counter
const AnimatedCounter = ({ value, duration = 2000, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let observer
    try {
      observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.disconnect()
          }
        },
        { threshold: 0.1 },
      )

      if (countRef.current) {
        observer.observe(countRef.current)
      }
    } catch (err) {
      console.error("Error in intersection observer:", err)
      // Don't throw the error, just log it
    }

    return () => {
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let timer
    try {
      const start = 0
      const end = Number.parseFloat(value.toString().replace(/[^0-9.-]+/g, "")) || 0
      const startTime = Date.now()

      timer = setInterval(() => {
        const timePassed = Date.now() - startTime
        const progress = Math.min(timePassed / duration, 1)
        const currentCount = Math.floor(progress * (end - start) + start)

        setCount(currentCount)

        if (progress === 1) {
          clearInterval(timer)
        }
      }, 16)
    } catch (err) {
      console.error("Error in counter animation:", err)
      // Don't throw the error, just log it
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [value, duration, isVisible])

  // Format the number with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

  return (
    <span ref={countRef}>
      {prefix}
      {formattedCount}
      {suffix}
    </span>
  )
}

// Metric card component
const MetricCard = ({ label, value, icon: Icon, className = "", trend = null }) => (
  <motion.div
    className={`bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-5 hover:border-[#00e8c0] transition-all duration-300 ${className}`}
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 234, 199, 0.1)" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between items-start mb-3">
      <div className="text-[#a0a7b8] text-sm">{label}</div>
      {Icon && (
        <div className="w-8 h-8 bg-[rgba(0,234,199,0.1)] rounded-lg flex items-center justify-center">
          <Icon className="w-4 h-4 text-[#00e8c0]" />
        </div>
      )}
    </div>
    <div className="text-xl font-bold text-white">
      <AnimatedCounter value={value} prefix={value.startsWith("$") ? "$" : ""} />
    </div>
    {trend && (
      <div className={`flex items-center mt-2 text-xs ${trend.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
        {trend.startsWith("+") ? <ChevronUp className="w-3 h-3 mr-1" /> : <ChevronDown className="w-3 h-3 mr-1" />}
        {trend}
      </div>
    )}
  </motion.div>
)

// Time frame performance card
const TimeFrameCard = ({ label, value }) => (
  <motion.div
    className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-4 hover:border-[#00e8c0] transition-all duration-300"
    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 234, 199, 0.1)" }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="text-[#a0a7b8] text-sm mb-1">{label}</div>
    <div className={`text-lg font-bold ${value.startsWith("+") ? "text-green-400" : "text-red-400"}`}>{value}</div>
  </motion.div>
)

// Fee distribution component
const FeeDistribution = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-24 h-24 mb-3">
        <div className="absolute inset-0 rounded-full bg-[rgba(0,234,199,0.15)]"></div>
        <div className="absolute inset-[3px] rounded-full bg-[rgba(42,48,60,0.8)] flex items-center justify-center">
          <span className="text-2xl font-bold text-[#00e8c0]">60%</span>
        </div>
        <svg className="absolute inset-0" width="96" height="96" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r="46"
            fill="none"
            stroke="url(#gradientVe)"
            strokeWidth="4"
            strokeDasharray="289.02652413026095"
            strokeDashoffset="0"
            transform="rotate(-90 48 48)"
          />
          <defs>
            <linearGradient id="gradientVe" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00e8c0" />
              <stop offset="100%" stopColor="#00f5d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="text-center text-white font-medium">vePumpTGT Holders</p>
    </motion.div>

    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="relative w-24 h-24 mb-3">
        <div className="absolute inset-0 rounded-full bg-[rgba(125,99,255,0.15)]"></div>
        <div className="absolute inset-[3px] rounded-full bg-[rgba(42,48,60,0.8)] flex items-center justify-center">
          <span className="text-2xl font-bold text-[#7d63ff]">30%</span>
        </div>
        <svg className="absolute inset-0" width="96" height="96" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r="46"
            fill="none"
            stroke="url(#gradientTraders)"
            strokeWidth="4"
            strokeDasharray="289.02652413026095"
            strokeDashoffset="173.41591447815658" // 60% of the circumference
            transform="rotate(-90 48 48)"
          />
          <defs>
            <linearGradient id="gradientTraders" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7d63ff" />
              <stop offset="100%" stopColor="#a78bff" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="text-center text-white font-medium">Active Traders</p>
    </motion.div>

    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="relative w-24 h-24 mb-3">
        <div className="absolute inset-0 rounded-full bg-[rgba(255,126,178,0.15)]"></div>
        <div className="absolute inset-[3px] rounded-full bg-[rgba(42,48,60,0.8)] flex items-center justify-center">
          <span className="text-2xl font-bold text-[#ff7eb2]">10%</span>
        </div>
        <svg className="absolute inset-0" width="96" height="96" viewBox="0 0 96 96">
          <circle
            cx="48"
            cy="48"
            r="46"
            fill="none"
            stroke="url(#gradientDao)"
            strokeWidth="4"
            strokeDasharray="289.02652413026095"
            strokeDashoffset="260.12387171723486" // 90% of the circumference
            transform="rotate(-90 48 48)"
          />
          <defs>
            <linearGradient id="gradientDao" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff7eb2" />
              <stop offset="100%" stopColor="#ff9e7e" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <p className="text-center text-white font-medium">DAO Treasury</p>
    </motion.div>
  </div>
)

// Improve the error handling in the main component
export default function DashboardStats() {
  const [priceData, setPriceData] = useState([])
  const [activeTimeFrame, setActiveTimeFrame] = useState("1d")
  const [error, setError] = useState(null)

  // Sample stats data
  const stats = {
    price: {
      current: "$1.27",
      change: "+3.4%",
      changeValue: "(+$0.04)",
    },
    timeFrames: [
      { label: "1h", value: "+0.5%" },
      { label: "24h", value: "+5.7%" },
      { label: "7d", value: "-2.3%" },
      { label: "30d", value: "+8.1%" },
      { label: "1y", value: "+35.9%" },
    ],
    metrics: [
      { label: "Total Value Locked", value: "$12.5M", icon: Lock },
      { label: "Active Users", value: "3,458", icon: Users },
      { label: "Daily Volume", value: "$2.1M", icon: BarChart3 },
      { label: "Total Swaps", value: "15,892", icon: Flame },
      { label: "Trending Assets", value: "PUMPTGT, LAVA", icon: TrendingUp },
    ],
    veNFT: [
      { label: "Total veNFTs", value: "872", icon: Award },
      { label: "Average Lock Time", value: "180 Days", icon: Clock },
      { label: "Total Locked Value", value: "$8.9M", icon: DollarSign },
      { label: "veNFT APR", value: "12.5%", icon: PieChart },
    ],
  }

  // Improve error handling in the price data generation
  useEffect(() => {
    try {
      // Generate price data on component mount
      const data = generatePriceData()
      setPriceData(data)
    } catch (err) {
      console.error("Error generating price data:", err)
      setError(err instanceof Error ? err : new Error(String(err)))
    }
  }, [])

  // Improve the global error handler
  useEffect(() => {
    const handleUnhandledRejection = (event) => {
      console.error("Unhandled promise rejection:", event.reason)

      // Convert the error object to a proper Error instance
      const errorObj =
        event.reason instanceof Error
          ? event.reason
          : new Error(typeof event.reason === "object" ? JSON.stringify(event.reason) : String(event.reason))

      setError(errorObj)

      // Prevent the default browser behavior
      event.preventDefault()
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  // Improve the error display
  if (error) {
    return (
      <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
        <ElegantHeader />
        <main className="flex-grow py-12 md:py-16 relative z-10 flex items-center justify-center">
          <div className="bg-[rgba(255,59,48,0.1)] border border-[rgba(255,59,48,0.3)] rounded-xl p-6 max-w-2xl mx-auto">
            <h2 className="text-xl font-bold mb-4 text-white">Error Loading Dashboard</h2>
            <p className="text-[#a0a7b8] mb-4">
              There was an error loading the dashboard data. Please try refreshing the page.
            </p>
            <div className="bg-[rgba(42,48,60,0.5)] p-4 rounded-lg overflow-auto text-sm text-red-400">
              <p>
                <strong>Error:</strong> {error.message || "Unknown error"}
              </p>
              {error.stack && (
                <details className="mt-2">
                  <summary className="cursor-pointer">Stack Trace</summary>
                  <pre className="mt-2 whitespace-pre-wrap">{error.stack}</pre>
                </details>
              )}
            </div>
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
      {/* Background */}
      <PixelBackground gap={8} speed={18} colors={["#00eac7", "#03d1b5", "#0a766c", "#00f5d4"]} variant="default" />

      {/* Header */}
      <ElegantHeader />

      {/* Main Content */}
      <main className="flex-grow py-12 md:py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[rgba(15,20,26,0.85)] backdrop-blur-sm border border-[#2a303c] rounded-xl p-6 md:p-8 shadow-xl">
            {/* Dashboard Header */}
            <motion.div
              className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <div className="text-[10px] text-[#a0a7b8]/70 italic mb-3 max-w-md">
                  <span className="inline-flex items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00e8c0]/50 mr-1.5"></span>
                    Current values are for demonstration purposes only, real time values from the smart contracts will
                    begin transmitting at the &apos;Pump Launcher Public Deployment&apos;.
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Dashboard Stats</h1>
                <p className="text-[#a0a7b8]">Protocol Growth & Performance Snapshot</p>
              </div>
              <div className="mt-4 md:mt-0 bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-4">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">{stats.price.current}</span>
                  <span
                    className={`ml-2 text-sm ${stats.price.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}
                  >
                    {stats.price.change} {stats.price.changeValue}
                  </span>
                </div>
                <p className="text-xs text-[#a0a7b8] mt-1">$PUMPTGT Price</p>
              </div>
            </motion.div>

            {/* Price Chart Section */}
            <motion.div
              className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                <h2 className="text-xl font-bold mb-4 sm:mb-0">Price Chart</h2>
                <div className="flex flex-wrap gap-2">
                  {["1h", "1d", "7d", "30d", "90d", "1y", "All"].map((period) => (
                    <button
                      key={period}
                      className={`px-3 py-1 text-xs rounded-md transition-colors ${
                        period === activeTimeFrame
                          ? "bg-[#00e8c0] text-[#0f141a] font-medium"
                          : "bg-[rgba(42,48,60,0.5)] text-[#a0a7b8] hover:bg-[rgba(0,234,199,0.1)] hover:text-[#00e8c0]"
                      }`}
                      onClick={() => setActiveTimeFrame(period)}
                    >
                      {period}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Stage Indicator */}
              <div className="mb-8">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-[#a0a7b8]">Project Stage:</span>
                  <span className="text-sm font-medium text-[#00e8c0]">Seed</span>
                </div>
                <div className="w-full bg-[rgba(42,48,60,0.5)] rounded-full h-2 mb-4 overflow-hidden relative">
                  <div className="bg-gradient-to-r from-[#00e8c0] to-[#00f5d4] h-2 rounded-full w-[25%]"></div>
                  <div className="absolute top-1/2 left-[25%] transform -translate-y-1/2 translate-x-[-50%] w-4 h-4 bg-[#00e8c0] rounded-full animate-pulse"></div>
                </div>
                <div className="flex justify-between text-xs">
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-[rgba(42,48,60,0.8)] border-2 border-[#00e8c0] mb-1 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-[#00e8c0]"></div>
                    </div>
                    <span className="text-[#a0a7b8]">Pre-seed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-[rgba(42,48,60,0.8)] border-2 border-[#00e8c0] mb-1 flex items-center justify-center relative">
                      <div className="w-2 h-2 rounded-full bg-[#00e8c0]"></div>
                    </div>
                    <span className="font-medium text-[#00e8c0]">Seed</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-[rgba(42,48,60,0.8)] border border-[#a0a7b8] mb-1"></div>
                    <span className="text-[#a0a7b8]">Public</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-6 h-6 rounded-full bg-[rgba(42,48,60,0.8)] border border-[#a0a7b8] mb-1"></div>
                    <span className="text-[#a0a7b8]">Pump Launcher</span>
                  </div>
                </div>
              </div>

              {/* Chart */}
              <div className="h-[300px]">
                {priceData.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={priceData}>
                      <defs>
                        <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00e8c0" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#00e8c0" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(42,48,60,0.5)" />
                      <XAxis
                        dataKey="time"
                        stroke="#a0a7b8"
                        tick={{ fill: "#a0a7b8", fontSize: 12 }}
                        axisLine={{ stroke: "rgba(42,48,60,0.5)" }}
                        tickLine={{ stroke: "rgba(42,48,60,0.5)" }}
                      />
                      <YAxis
                        domain={["dataMin - 0.05", "dataMax + 0.05"]}
                        stroke="#a0a7b8"
                        tick={{ fill: "#a0a7b8", fontSize: 12 }}
                        axisLine={{ stroke: "rgba(42,48,60,0.5)" }}
                        tickLine={{ stroke: "rgba(42,48,60,0.5)" }}
                        tickFormatter={(value) => `$${value.toFixed(2)}`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#00e8c0"
                        strokeWidth={2}
                        fillOpacity={1}
                        fill="url(#colorPrice)"
                        activeDot={{ r: 6, fill: "#00e8c0", stroke: "#0f141a", strokeWidth: 2 }}
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="h-full flex items-center justify-center">
                    <div className="text-[#a0a7b8]">Loading chart data...</div>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Fee Revenue Performance */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Fee Revenue Performance</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                <motion.div
                  className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-4 hover:border-[#00e8c0] transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 234, 199, 0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-[#a0a7b8] text-sm mb-1">1h</div>
                  <div className="text-lg font-bold text-green-400">+$12,500</div>
                </motion.div>
                <motion.div
                  className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-4 hover:border-[#00e8c0] transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 234, 199, 0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <div className="text-[#a0a7b8] text-sm mb-1">24h</div>
                  <div className="text-lg font-bold text-green-400">+$300,000</div>
                </motion.div>
                <motion.div
                  className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-4 hover:border-[#00e8c0] transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 234, 199, 0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="text-[#a0a7b8] text-sm mb-1">7d</div>
                  <div className="text-lg font-bold text-green-400">+$1,173,007</div>
                </motion.div>
                <motion.div
                  className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-4 hover:border-[#00e8c0] transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 234, 199, 0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="text-[#a0a7b8] text-sm mb-1">30d</div>
                  <div className="text-lg font-bold text-green-400">+$21,965,342</div>
                </motion.div>
                <motion.div
                  className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-4 hover:border-[#00e8c0] transition-all duration-300"
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 234, 199, 0.1)" }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <div className="text-[#a0a7b8] text-sm mb-1">1y</div>
                  <div className="text-lg font-bold text-green-400">+$263,584,104</div>
                </motion.div>
              </div>
            </div>

            {/* Time Frame Performance */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Time Frame Performance</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                {stats.timeFrames.map((frame, index) => (
                  <TimeFrameCard key={frame.label} label={frame.label} value={frame.value} />
                ))}
              </div>
            </div>

            {/* Key Protocol Metrics */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Key Protocol Metrics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {stats.metrics.map((metric, index) => (
                  <MetricCard key={metric.label} label={metric.label} value={metric.value} icon={metric.icon} />
                ))}
              </div>
            </div>

            {/* veNFT Governance Statistics */}
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">veNFT Governance Statistics</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.veNFT.map((stat, index) => (
                  <MetricCard key={stat.label} label={stat.label} value={stat.value} icon={stat.icon} />
                ))}
              </div>
            </div>

            {/* Platform Fee Distribution */}
            <motion.div
              className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-xl p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-xl font-bold mb-6 text-center">Platform Fee Distribution</h2>
              <FeeDistribution />
            </motion.div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


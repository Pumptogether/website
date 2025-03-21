"use client"

import type React from "react"

import { Suspense } from "react"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

import { checkSubscription } from "@/lib/subscription"
import { getRevenue } from "@/lib/revenue"
import { getSalesCount } from "@/lib/sales"
import { getStockCount } from "@/lib/stock"

import { Overview } from "@/components/overview"
import { ElegantHeader } from "@/components/elegant-header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { BackButton } from "@/components/back-button"

interface DashboardPageProps {
  searchParams: {
    storeId: string
  }
}

const loading = () => (
  <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
    <ElegantHeader />
    <main className="flex-grow py-12 md:py-16 relative z-10 flex items-center justify-center">
      <Card className="w-full max-w-sm mx-auto bg-[rgba(15,20,26,0.85)] backdrop-blur-sm border border-[#2a303c] rounded-xl p-6 md:p-8 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Loading...</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <Icons.logo className="h-10 w-10 animate-spin" />
        </CardContent>
      </Card>
    </main>
    <Footer />
  </div>
)

const DashboardClientPage: React.FC<DashboardPageProps> = async ({ searchParams }) => {
  const { storeId } = searchParams

  if (!storeId) {
    notFound()
  }

  const isPro = await checkSubscription()
  const revenue = await getRevenue(storeId)
  const salesCount = await getSalesCount(storeId)
  const stockCount = await getStockCount(storeId)

  return (
    <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
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
                <h1 className="text-3xl font-extrabold text-white tracking-tight mb-2">Dashboard</h1>
                <p className="text-[#a0a7b8]">Here&apos;s an overview of your store</p>
              </div>
              <BackButton />
            </motion.div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Revenue Card */}
              <motion.div
                className="col-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="bg-[rgba(15,20,26,0.85)] backdrop-blur-sm border border-[#2a303c] rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-[#a0a7b8]">Total Revenue</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">${revenue}</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Sales Card */}
              <motion.div
                className="col-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card className="bg-[rgba(15,20,26,0.85)] backdrop-blur-sm border border-[#2a303c] rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-[#a0a7b8]">Sales</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{salesCount}</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Stock Card */}
              <motion.div
                className="col-span-1"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Card className="bg-[rgba(15,20,26,0.85)] backdrop-blur-sm border border-[#2a303c] rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-[#a0a7b8]">In Stock</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{stockCount}</div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Overview Chart */}
              <motion.div
                className="col-span-1 md:col-span-2 lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Card className="bg-[rgba(15,20,26,0.85)] backdrop-blur-sm border border-[#2a303c] rounded-xl">
                  <CardHeader>
                    <CardTitle className="text-sm font-medium text-[#a0a7b8]">Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Suspense fallback={<p>Loading...</p>}>
                      <Overview storeId={storeId} isPro={isPro} />
                    </Suspense>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

DashboardClientPage.displayName = "DashboardClientPage"

export default DashboardClientPage


"use client"

import { useState, useEffect } from "react"
import ElegantHeader from "@/components/elegant-header"
import Footer from "@/components/Footer"
import { PixelBackground } from "@/components/ui/pixel-background"
import Link from "next/link"
import { ErrorBoundary } from "@/components/error-boundary"

// Error fallback component
function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div className="p-6 bg-red-900/20 text-red-200 rounded-lg m-4">
      <h2 className="text-lg font-semibold mb-2">Something went wrong:</h2>
      <pre className="text-sm overflow-auto p-2 bg-red-900/30 rounded">{error.message}</pre>
      <button onClick={resetErrorBoundary} className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
        Try again
      </button>
    </div>
  )
}

// Main content component separated to be wrapped in error boundary
function PrivacyPolicyContent() {
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
      {/* Add the PixelBackground with colors that match the teal theme */}
      <PixelBackground gap={8} speed={18} colors={["#00eac7", "#03d1b5", "#0a766c", "#00f5d4"]} variant="default" />

      {/* Header */}
      <ElegantHeader />

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
            <div className="relative z-10 p-8 md:p-12 border border-[#2a303c] rounded-2xl">
              {/* Page header with decorative elements */}
              <div className="mb-12 relative">
                <div className="absolute -top-10 -left-20 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(0,234,199,0.03)_0%,transparent_70%)] blur-lg"></div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
                <div className="w-[60px] h-1 bg-[#00e8c0] my-6"></div>
                <p className="text-[#a0a7b8] text-lg">Effective Date: March 10, 2025</p>
              </div>

              {/* Privacy Policy content */}
              <div className="space-y-10 text-[#e0e0e0]">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                  <p>
                    PumpTogether ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                    explains how we collect, use, disclose, and safeguard your information when you visit our website at{" "}
                    <Link href="https://pumptogether.xyz" className="text-[#00e8c0] hover:underline">
                      https://pumptogether.xyz
                    </Link>
                    , use our mobile application, or interact with our platform services, including the Pump Launcher,
                    Graduator, and other associated products (collectively, the "Platform").
                  </p>
                </section>

                {/* Information We Collect */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">2.1 Information You Provide</h3>
                      <p className="mb-3">We may collect information you provide directly to us when you:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Create or modify your account</li>
                        <li>Connect your wallet(s)</li>
                        <li>Participate in platform activities such as locking tokens, creating or joining projects</li>
                        <li>Communicate with us via forms, email, or other channels</li>
                        <li>Apply as a KOL or partner</li>
                      </ul>

                      <p className="mt-3 mb-2">This information may include:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Blockchain wallet addresses</li>
                        <li>Transaction data</li>
                        <li>Communications and feedback</li>
                        <li>Social media handles (for KOL applications)</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">
                        2.2 Information Collected Automatically
                      </h3>
                      <p className="mb-2">When you access our Platform, we may automatically collect:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Technical information about your device</li>
                        <li>Log data (pages visited, time spent, etc.)</li>
                        <li>Blockchain transaction data related to your interactions with our smart contracts</li>
                        <li>General usage patterns</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">2.3 Information From Third Parties</h3>
                      <p className="mb-2">We may collect information from third-party services such as:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Blockchain data providers</li>
                        <li>Partners providing analytics or security services</li>
                        <li>Public blockchain information related to your wallet addresses</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* How We Use Your Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
                  <p className="mb-3">We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Provide, maintain, and improve our Platform</li>
                    <li>Process transactions and distribute rewards</li>
                    <li>Develop new products, services, and features</li>
                    <li>Analyze Platform usage and performance</li>
                    <li>Detect, prevent, and address technical issues and security breaches</li>
                    <li>Communicate with you about updates, security alerts, and support</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </section>

                {/* Sharing Your Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Sharing Your Information</h2>
                  <p className="mb-4">
                    We do not sell your personal information. We may share your information in the following
                    circumstances:
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">4.1 Service Providers</h3>
                      <p>
                        We may share information with third-party vendors who provide services on our behalf, such as
                        hosting, analytics, and customer service. These providers are bound by confidentiality
                        obligations.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">4.2 Business Transfers</h3>
                      <p>
                        If we are involved in a merger, acquisition, or sale of assets, your information may be
                        transferred as part of that transaction.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">4.3 Legal Requirements</h3>
                      <p>
                        We may disclose your information if required to do so by law or in response to valid requests
                        from public authorities.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">4.4 Protection of Rights</h3>
                      <p>
                        We may share information to protect our rights, privacy, safety, or property, and that of our
                        users or others.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">4.5 On-Chain Data</h3>
                      <p>
                        Information processed through blockchain transactions is publicly visible by design. We cannot
                        control how third parties may track or analyze this public data.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Data Security */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
                  <p>
                    We implement reasonable security measures to protect your information from unauthorized access,
                    alteration, disclosure, or destruction. However, no method of electronic transmission or storage is
                    100% secure, and we cannot guarantee absolute security.
                  </p>
                </section>

                {/* Your Rights */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Your Rights</h2>
                  <p className="mb-3">
                    Depending on your location, you may have certain rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Access or export data we've collected about you</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Object to or restrict processing of your data</li>
                    <li>Withdraw consent where applicable</li>
                  </ul>
                  <p className="mt-3">
                    To exercise these rights, please contact us using the information in Section 10.
                  </p>
                </section>

                {/* Blockchain Data */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">7. Blockchain Data</h2>
                  <p>
                    The PumpTogether Platform operates on public blockchains (including Solana, Ethereum, Base, and
                    others). Information submitted to a blockchain is generally permanent and cannot be removed or
                    deleted. This includes transaction data, token locks, and smart contract interactions.
                  </p>
                </section>

                {/* Changes to This Privacy Policy */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">8. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting
                    the new Privacy Policy on this page and updating the "Effective Date." You are advised to review
                    this Privacy Policy periodically for any changes.
                  </p>
                </section>

                {/* Children's Privacy */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">9. Children's Privacy</h2>
                  <p>
                    Our Platform is not directed to children under 18 years of age. We do not knowingly collect personal
                    information from children. If you are a parent or guardian and believe your child has provided us
                    with personal information, please contact us.
                  </p>
                </section>

                {/* Contact Us */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">10. Contact Us</h2>
                  <p className="mb-3">
                    If you have questions or concerns about this Privacy Policy, please contact us at:
                  </p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Email:{" "}
                      <a href="mailto:privacy@pumptogether.xyz" className="text-[#00e8c0] hover:underline">
                        privacy@pumptogether.xyz
                      </a>
                    </li>
                    <li>
                      Discord:{" "}
                      <a
                        href="https://discord.gg/xdHqaVCagT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00e8c0] hover:underline"
                      >
                        https://discord.gg/xdHqaVCagT
                      </a>
                    </li>
                    <li>
                      Telegram:{" "}
                      <a
                        href="https://t.me/PumptogetherHQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00e8c0] hover:underline"
                      >
                        https://t.me/PumptogetherHQ
                      </a>
                    </li>
                  </ul>
                </section>
              </div>

              {/* Back to home link */}
              <div className="mt-16 text-center">
                <Link
                  href="/"
                  className="inline-flex items-center text-[#00e8c0] hover:text-[#00f5d4] transition-colors duration-300"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

// Main component with error boundary
export default function PrivacyPolicy() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <PrivacyPolicyContent />
    </ErrorBoundary>
  )
}


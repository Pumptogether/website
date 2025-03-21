"use client"

import ElegantHeader from "@/components/elegant-header"
import Footer from "@/components/Footer"
import { PixelBackground } from "@/components/ui/pixel-background"
import Link from "next/link"

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
      {/* Background elements */}
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
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and Conditions</h1>
                <div className="w-[60px] h-1 bg-[#00e8c0] my-6"></div>
                <p className="text-[#a0a7b8] text-lg">Last Updated: March 10, 2025</p>
              </div>

              {/* Terms content with styled sections */}
              <div className="space-y-10 text-[#e0e0e0]">
                {/* Introduction */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                  <div className="space-y-4">
                    <p>
                      Welcome to PumpTogether. These Terms and Conditions ("Terms") govern your access to and use of the
                      PumpTogether platform, including our website at{" "}
                      <Link href="https://pumptogether.xyz" className="text-[#00e8c0] hover:underline">
                        https://pumptogether.xyz
                      </Link>
                      , mobile applications, and all related services including Pump Launcher, Graduator, PumpLocks, and
                      the PumpTogether DAO (collectively, the "Platform").
                    </p>
                    <p>
                      By accessing or using the Platform, you agree to be bound by these Terms. If you do not agree to
                      these Terms, do not access or use the Platform.
                    </p>
                  </div>
                </section>

                {/* Definitions */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">2. Definitions</h2>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <span className="font-medium text-[#00e8c0]">"AI Agent"</span>: An automated system that manages
                      social media, user engagement, and investment management for projects launched on the Platform.
                    </li>
                    <li>
                      <span className="font-medium text-[#00e8c0]">"Graduator"</span>: A feature that enables collective
                      due diligence on projects.
                    </li>
                    <li>
                      <span className="font-medium text-[#00e8c0]">"PumpLocks"</span>: A token locking mechanism that
                      provides incentives for holding tokens for specified periods.
                    </li>
                    <li>
                      <span className="font-medium text-[#00e8c0]">"Pump Launcher"</span>: A service facilitating the
                      launch of new projects on supported platforms.
                    </li>
                    <li>
                      <span className="font-medium text-[#00e8c0]">"PumpTGT"</span>: The native utility token of the
                      Platform.
                    </li>
                    <li>
                      <span className="font-medium text-[#00e8c0]">"vePumpTGT"</span>: Vote-escrow NFTs created by
                      locking PumpTGT tokens.
                    </li>
                  </ul>
                </section>

                {/* Eligibility */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">3. Eligibility</h2>
                  <p>
                    To access or use our Platform, you must be at least 18 years old and have the legal capacity to
                    enter into these Terms. By using the Platform, you represent and warrant that you meet these
                    requirements.
                  </p>
                </section>

                {/* Account Registration */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">4. Account Registration</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">4.1 Wallet Connection</h3>
                      <p>
                        To use certain features of the Platform, you must connect a compatible blockchain wallet. You
                        are responsible for maintaining the security of your wallet and any activities that occur
                        through it.
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">4.2 Account Security</h3>
                      <p>
                        You are responsible for safeguarding your account and for any activities or actions occurring
                        under your account. We cannot and will not be liable for any loss or damage arising from your
                        failure to secure your wallet or account.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Platform Rules */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">5. Platform Rules</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">5.1 Prohibited Activities</h3>
                      <p>You agree not to engage in any of the following:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>Using the Platform for any illegal purpose</li>
                        <li>Attempting to interfere with, compromise security, or reverse-engineer the Platform</li>
                        <li>Using bots, scripts, or automated means to access or interact with the Platform</li>
                        <li>Attempting to bypass any security measures or access controls</li>
                        <li>Engaging in any activity that disrupts or interferes with the Platform</li>
                        <li>Engaging in wash trading, market manipulation, or other deceptive practices</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">5.2 Project Deployment Rules</h3>
                      <p>If you deploy a project using Pump Launcher:</p>
                      <ul className="list-disc pl-6 space-y-1 mt-2">
                        <li>You agree to lock a portion of your tokens as required by the Platform</li>
                        <li>You will not attempt to circumvent the locking mechanism</li>
                        <li>You will adhere to the token distribution parameters</li>
                        <li>You represent that your project does not violate any applicable laws</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Platform Services */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">6. Platform Services</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">6.1 PumpLocks System</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>The Platform offers incentivized token locking through the PumpLocks system</li>
                        <li>Lock durations are randomly assigned within predetermined ranges</li>
                        <li>
                          Daily fee distributions and unlock rewards are subject to the specific terms of each lock
                        </li>
                        <li>PumpLock NFTs may be traded on secondary markets at your own risk</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">6.2 AI Social Media Agent</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Projects deployed through Pump Launcher receive an AI Agent</li>
                        <li>The AI Agent operates autonomously to manage social media and engagement</li>
                        <li>We do not guarantee specific performance or engagement metrics</li>
                        <li>AI Agents operate within the constraints of third-party platforms' terms of service</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">6.3 DAO Governance</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>vePumpTGT NFT holders can participate in governance decisions</li>
                        <li>Voting power is determined by the amount and duration of locked PumpTGT</li>
                        <li>Fee distributions are proportional to voting power</li>
                        <li>We reserve the right to implement emergency measures to protect the Platform</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Fees and Payments */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">7. Fees and Payments</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">7.1 Platform Fees</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>The Platform charges fees for various services, including project launches and trading</li>
                        <li>Current fees are displayed on the Platform and may be modified by DAO governance</li>
                        <li>Fees are automatically collected through smart contracts</li>
                        <li>A portion of fees is distributed to vePumpTGT holders and active traders as specified</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">7.2 Revenue Distribution</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>60% of platform fees are distributed to vePumpTGT NFT holders</li>
                        <li>30% of platform fees are distributed to traders</li>
                        <li>10% of platform fees are retained by the DAO Treasury</li>
                        <li>These distributions may be modified through DAO governance</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Risks and Disclaimers */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">8. Risks and Disclaimers</h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">8.1 Cryptocurrency Risks</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Cryptocurrency prices are highly volatile</li>
                        <li>You may lose all or part of your investment</li>
                        <li>Past performance is not indicative of future results</li>
                        <li>Smart contracts may contain vulnerabilities despite best efforts</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">8.2 Platform Risks</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>The Platform is provided "as is" without warranties of any kind</li>
                        <li>We do not guarantee continuous, uninterrupted access to the Platform</li>
                        <li>
                          The Platform may be subject to limitations, delays, and other problems inherent in the use of
                          blockchain technology
                        </li>
                        <li>Economic incentives and mechanisms are experimental and may not perform as expected</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#00e8c0]">8.3 Regulatory Risks</h3>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Cryptocurrency and DeFi regulations are evolving</li>
                        <li>Future regulatory changes may impact the Platform's operations</li>
                        <li>We may need to modify or discontinue services to comply with regulations</li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* Limitation of Liability */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">9. Limitation of Liability</h2>

                  <div className="p-4 bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg">
                    <p className="uppercase text-sm font-medium mb-2">
                      TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL PUMPTOGETHER, ITS DIRECTORS, EMPLOYEES,
                      PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL,
                      CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE,
                      GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
                    </p>

                    <ul className="list-disc pl-6 space-y-1 mt-2">
                      <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE PLATFORM</li>
                      <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE PLATFORM</li>
                      <li>ANY CONTENT OBTAINED FROM THE PLATFORM</li>
                      <li>UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
                      <li>SMART CONTRACT VULNERABILITIES, HACKS, OR EXPLOITS</li>
                      <li>MARKET VOLATILITY OR TIMING OF YOUR INVESTMENTS</li>
                      <li>ANY TAX LIABILITY ARISING FROM YOUR USE OF THE PLATFORM</li>
                    </ul>
                  </div>
                </section>

                {/* Indemnification */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">10. Indemnification</h2>
                  <p>
                    You agree to defend, indemnify, and hold harmless PumpTogether, its officers, directors, employees
                    and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or
                    debt, and expenses arising from your use of the Platform.
                  </p>
                </section>

                {/* Changes to Terms */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">11. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time. We will provide notice of significant
                    changes by posting the updated Terms on the Platform and updating the "Last Updated" date. Your
                    continued use of the Platform after such changes constitutes your acceptance of the new Terms.
                  </p>
                </section>

                {/* Governing Law */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">12. Governing Law</h2>
                  <p>
                    These Terms shall be governed by and construed in accordance with the laws of the Cayman Islands,
                    without regard to its conflict of law provisions.
                  </p>
                </section>

                {/* Dispute Resolution */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">13. Dispute Resolution</h2>
                  <p>
                    Any dispute arising out of or relating to these Terms or the Platform shall be resolved through
                    binding arbitration conducted in the Cayman Islands, except where prohibited by law.
                  </p>
                </section>

                {/* Severability */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">14. Severability</h2>
                  <p>
                    If any provision of these Terms is held to be unenforceable or invalid, such provision will be
                    changed and interpreted to accomplish the objectives of such provision to the greatest extent
                    possible under applicable law and the remaining provisions will continue in full force and effect.
                  </p>
                </section>

                {/* Contact Information */}
                <section>
                  <h2 className="text-2xl font-bold mb-4 text-white">15. Contact Information</h2>
                  <p className="mb-2">For questions about these Terms, please contact us at:</p>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>
                      Email:{" "}
                      <a href="mailto:legal@pumptogether.xyz" className="text-[#00e8c0] hover:underline">
                        legal@pumptogether.xyz
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
            </div>
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}


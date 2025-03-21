"use client";

import React from 'react';
import { useEffect, useState } from "react";
import Link from "next/link";
import { Twitter } from "lucide-react";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import FeaturedLogos from "@/components/FeaturedLogos";
import AnimatedProgressCircle from "@/components/animated-progress-circle";
import ElegantHeader from "@/components/elegant-header";
import { PixelBackground } from "@/components/ui/pixel-background";
import Footer from "@/components/footer";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group border border-[#2a303c] rounded-lg overflow-hidden bg-[rgba(42,48,60,0.3)] hover:border-[#00e599] transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none ${isOpen ? "border-b border-[#2a303c]" : ""}`}
      >
        <span className="text-lg font-medium text-white group-hover:text-[#00e599] transition-colors duration-300">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-[#00e599] transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-96 py-6" : "max-h-0 py-0"
        } px-6`}
      >
        <p className="text-[#a0a7b8] text-base leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

const HomePage: React.FC = () => {
  useEffect(() => {
    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled promise rejection:", event.reason);
      event.preventDefault();
    };

    window.addEventListener("unhandledrejection", handleUnhandledRejection);
    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
      <PixelBackground
        gap={8}
        speed={18}
        colors={["#00eac7", "#03d1b5", "#0a766c", "#00f5d4"]} 
        variant="default"
      />
      <ElegantHeader />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.04)_0%,transparent_60%)] blur-3xl opacity-70"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.03)_0%,transparent_60%)] blur-3xl opacity-50"></div>
          </div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
              <div className="max-w-xl lg:max-w-[45%] z-10">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Agents deployer <span className="block text-[#a0a7b8] font-normal">managed by revenue sharing DAO.</span>
                </h1>
                <div className="w-[60px] h-1 bg-[#00e8c0] my-6"></div>
                <p className="text-[#a0a7b8] mb-8 text-[15px] leading-relaxed">
                  PumptogetherDAO governs the Pumptogether tokenized agent deployer, engineered to turn every token launch into an explosive growth event with investor protection while rewarding early adopters. Over $500 million in accrued revenue is shared with traders and DAO governors as rewards.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#"
                    className="inline-flex items-center px-4 py-[6px] rounded-md text-base font-medium text-[#00e8c0] bg-[#1C2230] hover:bg-[#232a3b] transition-all hover:-translate-y-[2px] group relative"
                  >
                    <svg
                      className="w-[14px] h-[14px] mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19 11H5C3.89543 11 3 11.8954 3 13V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V13C21 11.8954 20.1046 11 19 11Z"
                        fill="currentColor"
                      />
                      <path
                        d="M17 11V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V11"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                    Lock $PUMPTGT
                    <span className="absolute -top-6 -right-2 px-1.5 py-0.5 text-[8px] font-medium text-black bg-amber-400 rounded-sm shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 after:content-[''] after:absolute after:top-full after:right-3 after:border-l-[5px] after:border-l-transparent after:border-t-[5px] after:border-t-amber-400 after:border-r-[5px] after:border-r-transparent">
                      (Testnet Mode)
                    </span>
                  </Link>
                  <Link
                    href="https://app.fjordfoundry.com/token-sales/0x45657fbh31c7eD823Ceb06"
                    className="inline-flex items-center px-4 py-[6px] rounded-md text-base font-medium text-black bg-[#00e8c0] hover:bg-[#00d4af] transition-all hover:-translate-y-[2px]"
                  >
                    <svg
                      className="w-[14px] h-[14px] mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5 15.5C4.5 15.5 3 14.5 3 12C3 9.5 4.5 8.5 4.5 8.5M19.5 15.5C19.5 15.5 21 14.5 21 12C21 9.5 19.5 8.5 19.5 8.5M12 7.5C10.3431 7.5 9 6.15685 9 4.5C9 2.84315 10.3431 1.5 12 1.5C13.6569 1.5 15 2.84315 15 4.5C15 6.15685 13.6569 7.5 12 7.5ZM12 22.5C9.23858 22.5 7 20.2614 7 17.5C7 14.7386 9.23858 12.5 12 12.5C14.7614 12.5 17 14.7386 17 17.5C17 20.2614 14.7614 22.5 12 22.5Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    Get $PUMPTGT
                  </Link>
                </div>
              </div>

              <div className="relative lg:w-[450px] w-full max-w-[450px] mt-12 lg:mt-0 animate-float lg:flex-shrink-0">
                {/* Background decorative elements */}
                <div className="absolute -z-10 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(0,234,199,0.05)_0%,transparent_70%)] blur-xl"></div>
                <div className="absolute -z-10 w-[200px] h-[200px] -top-20 -right-20 bg-[radial-gradient(circle,rgba(0,234,199,0.03)_0%,transparent_70%)] blur-lg"></div>
                <div className="absolute -z-10 w-[200px] h-[200px] -bottom-20 -left-20 bg-[radial-gradient(circle,rgba(0,234,199,0.03)_0%,transparent_70%)] blur-lg"></div>

                <AnimatedProgressCircle />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Logos Marquee Section */}
        <div className="relative -mt-16 z-10">
          <FeaturedLogos />
        </div>

        {/* Testimonial Carousel Section */}
        <TestimonialCarousel />

        {/* Features Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.03)_0%,transparent_60%)] blur-3xl opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.02)_0%,transparent_60%)] blur-3xl opacity-40"></div>
          </div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative rounded-xl overflow-hidden mb-16">
              <div className="absolute inset-0 bg-[#0D1117] rounded-xl"></div>
              <div className="relative z-10 p-8 md:p-12 border border-[#2a303c] rounded-xl">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">Innovative Features</h2>
                  <p className="text-[#a0a7b8] max-w-2xl mx-auto">
                    The meme space is broken. Rug pulls, pump-and-dumps, and lazy copycats dominate. PumptogetherDAO fixes
                    this with tokens that self-govern, self-promote, and grow sustainably.
                  </p>
                  <div className="mt-6">
                    <Link
                      href="/pump-launcher"
                      className="inline-flex items-center px-6 py-3 rounded-md text-base font-medium text-[#00e8c0] bg-[#1C2230] hover:bg-[#232a3b] transition-all hover:-translate-y-[2px]"
                    >
                      See what's possible
                      <svg
                        className="ml-2 w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6 hover:border-[#00e8c0] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#00e8c0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 15V3M12 15L8 11M12 15L16 11M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pump Launcher</h3>
                <p className="text-[#a0a7b8] text-sm">
                  Facilitates the launch of AI Agent meme token projects by developers/project owners and returns a
                  "Pumplock" NFT to the deployer and each participator.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6 hover:border-[#00e8c0] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#00e8c0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 2 12C2 6.47715 2 2 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Pumplock</h3>
                <p className="text-[#a0a7b8] text-sm">
                  🔒 Un-Ruggable PumpLocks are NFTs representing incentivized capital locks for a time duration.
                  During token lock-up, users earn daily platform fees and $PumpTGT rewards.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6 hover:border-[#00e8c0] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#00e8c0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 11H5M19 11C20.1046 11 21 11.8954 21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V13C3 11.8954 3.89543 11 5 11M19 11V9C19 7.89543 18.1046 7 17 7M5 11V9C5 7.89543 5.89543 7 7 7M7 7V5C7 3.89543 7.89543 3 9 3H15C16.1046 3 17 3.89543 17 5V7M7 7H17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">vePumpTGT (veNFT)</h3>
                <p className="text-[#a0a7b8] text-sm">
                  Our vePUMPTGT is a Vote escrowed NFT that allows weighted voting rights within the DAO and grants
                  access to revenue share claims.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6 hover:border-[#00e8c0] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#00e8c0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18 14C19.1046 14 20 13.1046 20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Revenue Sharing</h3>
                <p className="text-[#a0a7b8] text-sm">
                  💰 60% of platform ETH/SOL fees distributed to veNFT/vePUMPTGT (locked $PUMPTGT) DAO Holders and
                  with platform traders.
                </p>
              </div>

              {/* Feature 5 */}
              <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6 hover:border-[#00e8c0] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#00e8c0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 3H5C3.89543 3 3 3.89543 3 5V9M9 3V5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5V3M9 3H15M15 3H19C20.1046 3 21 3.89543 21 5V9M21 9V15M21 15V19C21 20.1046 20.1046 21 19 21H15M21 15H19C17.8954 15 17 15.8954 17 17V19C17 20.1046 17.8954 21 19 21M15 21V19C15 17.8954 14.1046 17 13 17H11C9.89543 17 9 17.8954 9 19V21M15 21H9M9 21H5C3.89543 21 3 20.1046 3 19V15M3 15V9M3 15H5C6.10457 15 7 14.1046 7 13V11C7 9.89543 6.10457 9 5 9H3"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Agents</h3>
                <p className="text-[#a0a7b8] text-sm">
                  AI agents manage social media, engage users, and manage investments. They control multiple
                  platforms, offer prizes, and implement strategic interactions.
                </p>
              </div>

              {/* Feature 6 */}
              <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-6 hover:border-[#00e8c0] transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-[rgba(0,234,199,0.1)] rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-[#00e8c0]"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 11V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14 11V17"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">DAO Governance</h3>
                <p className="text-[#a0a7b8] text-sm">
                  The PumptogetherDAO governs the platform, which operates a fee revenue as a service model.
                  Participate in the $500M+ annual revenue generated on pump.fun.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tokenomics Section */}
        <section className="py-16 md:py-24 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Tokenomics</h2>
              <div className="w-[60px] h-1 bg-[#00e8c0] mx-auto my-6"></div>
              <p className="text-[#a0a7b8] max-w-2xl mx-auto">
                $PUMPTGT token distribution and vesting schedule designed for long-term sustainability and community alignment.
              </p>
            </div>

            <div className="flex flex-col items-center gap-12">
              {/* Token supply reference - without pie chart */}
              <div className="mb-8 py-6 px-8 bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg text-center">
                <p className="text-3xl font-bold text-white mb-2">100%</p>
                <p className="text-lg text-[#a0a7b8] mb-1">100,000,000</p>
                <p className="text-lg text-[#00eac7] font-medium">$PUMPTGT</p>
              </div>

              {/* Allocation Details in a grid layout */}
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      label: "Team",
                      percentage: "13%",
                      amount: "13,000,000",
                      details: "3 Month cliff + 12 month linear vesting",
                      color: "bg-[#8B5CF6]"
                    },
                    {
                      label: "Airdrop",
                      percentage: "8%",
                      amount: "8,000,000",
                      details: "3-month cliff + 3-month linear vesting, multiple cohorts",
                      color: "bg-[#00eac7]"
                    },
                    {
                      label: "Seed Round",
                      percentage: "9%",
                      amount: "9,000,000",
                      details: "3-week cliff with immediate 100% vesting",
                      color: "bg-[#F43F5E]"
                    },
                    {
                      label: "Public Sale",
                      percentage: "10%",
                      amount: "10,000,000",
                      details: "no cliff, no vesting",
                      color: "bg-[#22C55E]"
                    },
                    {
                      label: "Liquidity Seeding",
                      percentage: "5%",
                      amount: "5,000,000",
                      details: "Minted on TGE, reserved",
                      color: "bg-[#00eac7]"
                    },
                    {
                      label: "Strategic Partnerships",
                      percentage: "5%",
                      amount: "5,000,000",
                      details: "",
                      color: "bg-[#EAB308]"
                    },
                    {
                      label: "Pump Lock Incentives",
                      percentage: "30%",
                      amount: "30,000,000",
                      details: "",
                      color: "bg-[#FF3366]"
                    },
                    {
                      label: "DAO Treasury",
                      percentage: "15%",
                      amount: "15,000,000",
                      details: "6-month cliff + 24-month linear vesting",
                      color: "bg-[#3B82F6]"
                    },
                    {
                      label: "DAO Voting",
                      percentage: "5%",
                      amount: "5,000,000",
                      details: "3 Month cliff + 12 month linear vesting",
                      color: "bg-[#FF3366]"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-[rgba(42,48,60,0.3)] border border-[#2a303c] hover:border-[#00e599] transition-all duration-300">
                      <div className="flex items-center gap-3">
                        <div className={`w-1 h-12 ${item.color} rounded-full`}></div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-white font-medium">{item.label}</h3>
                            <span className="text-[#00e599] font-semibold">{item.percentage}</span>
                          </div>
                          {item.details && (
                            <p className="text-xs text-[#a0a7b8]">{item.details}</p>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-white font-medium text-sm">{item.amount}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Community ownership highlight */}
                <div className="mt-8 p-4 rounded-lg bg-[rgba(42,48,60,0.3)] border border-[#2a303c]">
                  <p className="text-center text-sm">
                    <span className="text-[#22C55E]">Community (+60%)</span> owns more than{' '}
                    <span className="text-[#F43F5E]">seed participators (9%)</span> and{' '}
                    <span className="text-[#8B5CF6]">team (13%)</span> from Day 1
                  </p>
                  <p className="text-center text-xs text-[#a0a7b8] mt-2">
                    DAO 15% + 10% token sale + 8% airdrop + 30% Trader Incentives
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="py-16 md:py-24 relative overflow-hidden mt-16">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Project Roadmap</h2>
              <div className="w-[60px] h-1 bg-[#00e8c0] mx-auto my-6"></div>
              <p className="text-[#a0a7b8] max-w-2xl mx-auto">
                Our strategic vision and development timeline for revolutionizing the tokenized AI space.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#6d28d9]/20 via-[#00e599]/20 to-[#ec4899]/20"></div>

              {/* Q1 2025 */}
              <div className="relative pl-12 pb-12 group">
                <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-[#6d28d9] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/90 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h3 className="text-[#6d28d9] text-2xl font-bold mb-4 group-hover:text-[#8b5cf6] transition-colors duration-300">Q1 2025</h3>
                <div className="space-y-3 relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-[#6d28d9]/20 group-hover:bg-[#6d28d9]/40 transition-colors duration-300"></div>
                  {[
                    "PumpTGT Layerzero Omni Token TGE; Base & Solana",
                    "Seed Sale",
                    "Websites (DAO & Main)",
                    "Mechanism Design & Implementation (Pump Launcher, Graduator)",
                    "Partnerships",
                    "Pump Launcher; Mainnet Launch",
                    "vePUMPTGT NFT Access",
                    "veNFT (vePUMPTGT) DAO Launch",
                    "Revenue-Sharing Launch (DAO vePUMPTGT Holders, Traders)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-2 h-2 rounded-full bg-[#6d28d9] mt-2 mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#a0a7b8] group-hover/item:text-white transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Q2 2025 */}
              <div className="relative pl-12 pb-12 group">
                <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-[#00e599] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/90 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h3 className="text-[#00e599] text-2xl font-bold mb-4 group-hover:text-[#00f5d4] transition-colors duration-300">Q2 2025</h3>
                <div className="space-y-3 relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-[#00e599]/20 group-hover:bg-[#00e599]/40 transition-colors duration-300"></div>
                  {[
                    "Public Sale",
                    "Graduator; Mainnet Launch",
                    "Multi-Platforms Expansion",
                    "veNFT (vePUMPTGT) DAO Voting Enabled",
                    "DAO Boosted Voting Rewards",
                    "Full Audit"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-2 h-2 rounded-full bg-[#00e599] mt-2 mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#a0a7b8] group-hover/item:text-white transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Q3 2025 */}
              <div className="relative pl-12 pb-12 group">
                <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-[#f97316] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/90 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h3 className="text-[#f97316] text-2xl font-bold mb-4 group-hover:text-[#fb923c] transition-colors duration-300">Q3 2025</h3>
                <div className="space-y-3 relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-[#f97316]/20 group-hover:bg-[#f97316]/40 transition-colors duration-300"></div>
                  {[
                    "Upgrade: DAO-Controlled Fees and Emissions",
                    "Telegram App Release",
                    "Chrome App",
                    "R&D on Features For Protocol Growth"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-2 h-2 rounded-full bg-[#f97316] mt-2 mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#a0a7b8] group-hover/item:text-white transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Q4 2025 */}
              <div className="relative pl-12 pb-12 group">
                <div className="absolute left-0 top-[6px] w-8 h-8 rounded-full bg-[#ec4899] flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-white/90 group-hover:scale-125 transition-transform duration-300"></div>
                </div>
                <h3 className="text-[#ec4899] text-2xl font-bold mb-4 group-hover:text-[#f472b6] transition-colors duration-300">Q4 2025</h3>
                <div className="space-y-3 relative">
                  <div className="absolute -left-6 top-0 bottom-0 w-[2px] bg-[#ec4899]/20 group-hover:bg-[#ec4899]/40 transition-colors duration-300"></div>
                  {[
                    "On-Chain Protocol Decentralization (Research)"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start group/item">
                      <div className="w-2 h-2 rounded-full bg-[#ec4899] mt-2 mr-3 group-hover/item:scale-150 transition-transform duration-300"></div>
                      <p className="text-[#a0a7b8] group-hover/item:text-white transition-colors duration-300">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-20 -right-40 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.03)_0%,transparent_70%)] blur-3xl opacity-70"></div>
              <div className="absolute -top-20 -left-40 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.02)_0%,transparent_70%)] blur-3xl opacity-50"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 relative overflow-hidden mt-16 mb-16">
          <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="w-[60px] h-1 bg-[#00e8c0] mx-auto my-6"></div>
              <p className="text-[#a0a7b8] max-w-2xl mx-auto">
                Everything you need to know about PumptogetherDAO and how it's revolutionizing the tokenized AI space.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {/* FAQ Accordion */}
              <div className="space-y-4">
                {[
                  {
                    question: "What is PumptogetherDAO?",
                    answer: "PumptogetherDAO is a decentralized autonomous organization that combines tokenized AI agent deployment with an innovative incentive fee reward mechanism. It creates un-ruggable tokens that self-govern, self-promote, and grow sustainably, transforming every token launch into an explosive growth event with investor capital protection."
                  },
                  {
                    question: "How does the revenue sharing model work?",
                    answer: "60% of platform ETH/SOL fees are distributed to veNFT/vePUMPTGT (locked $PUMPTGT) DAO Holders and platform traders. This creates a sustainable ecosystem where all participants benefit from the platform's success. Over $500 million in accrued revenue has been shared with traders and DAO governors as rewards."
                  },
                  {
                    question: "What are PumpLock NFTs?",
                    answer: "PumpLock NFTs represent incentivized capital locks for a specific time duration. They make tokens un-ruggable by design. During the token lock-up period, users earn daily platform fees and $PumpTGT rewards, creating alignment between all stakeholders."
                  },
                  {
                    question: "What is vePUMPTGT?",
                    answer: "vePUMPTGT is a Vote Escrowed NFT that allows weighted voting rights within the DAO and grants access to revenue share claims. The duration and size of your $PumpTGT lock impacts your final vePUMPTGT weight, which determines your share of daily protocol revenue distributions."
                  },
                  {
                    question: "How do the AI-powered agents work?",
                    answer: "AI agents manage social media, engage users, and manage investments. They control multiple platforms, offer prizes, and implement strategic interactions. These agents don't just promote tokens - they create meaningful community engagement that drives long-term value."
                  },
                  {
                    question: "What is the Pump Launcher?",
                    answer: "The Pump Launcher facilitates the launch of AI Agent meme token projects by developers/project owners. It returns a 'PumpLock' NFT to the deployer and each participator, enabling project owners to deploy AI-powered meme tokens with built-in investor protection mechanisms."
                  },
                  {
                    question: "How does DAO governance work?",
                    answer: "PumptogetherDAO governs the platform through a transparent DAO governance system. vePUMPTGT holders can vote on critical DAO proposals and shape the future of the protocol. This creates accountability and alignment between all stakeholders."
                  },
                  {
                    question: "What chains does PumptogetherDAO support?",
                    answer: "PumptogetherDAO supports multiple chains, allowing users to deploy and manage tokens across different ecosystems with the same robust protection mechanisms. This cross-chain support means you're not limited to a single blockchain ecosystem."
                  },
                  {
                    question: "How do I get started with PumptogetherDAO?",
                    answer: "To get started, you need to acquire $PUMPTGT tokens and lock them to mint weighted vePUMPTGT NFTs. You can then leverage your vePUMPTGT weight in earning share and voting in the DAO. Visit our DApp to connect your wallet and begin the process."
                  },
                  {
                    question: "What makes PumptogetherDAO different from other platforms?",
                    answer: "PumptogetherDAO fixes the broken meme space by combining AI technology with blockchain governance. Our un-ruggable token design, revenue sharing model, and tokenized AI agents create a level of trust and sustainability that was previously impossible in this space."
                  }
                ].map((faq, index) => (
                  <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,234,199,0.05)_0%,transparent_70%)]"></div>
          <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="relative rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-[#0D1117] rounded-xl"></div>
              <div className="relative z-10 p-8 md:p-12 border border-[#2a303c] rounded-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to join PumptogetherDAO?</h2>
                    <p className="text-[#a0a7b8] max-w-xl">
                      Lock your $PumpTGT tokens to mint weighted vePumpTGT NFTs. Leverage your vePumpTGT weight in
                      earning share and voting in the DAO.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      href="https://app.fjordfoundry.com/token-sales/0x45657fbh31c7eD823Ceb06"
                      className="inline-flex items-center justify-center px-6 py-[6px] rounded-md text-base font-medium text-[#0f1923] bg-[#00e599] hover:bg-[#00f5d4] transition-all duration-300 hover:-translate-y-[2px] group"
                    >
                      <span className="relative transition-transform duration-300 group-hover:translate-x-[-1px]">Get PUMPTGT</span>
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
                    <Link
                      href="https://app.pumptogether.xyz"
                      className="inline-flex items-center justify-center px-6 py-[6px] rounded-md text-base font-medium text-[#00e599] bg-transparent border border-[#00e599] hover:bg-[#00e599] hover:text-[#0f1923] transition-all duration-300 hover:-translate-y-[2px] group"
                    >
                      <span className="relative transition-transform duration-300 group-hover:translate-x-[-1px]">Go To DApp</span>
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

        <Footer />
      </main>

      {/* Social Media Sidebar */}
      <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-20">
        <Link
            href="https://x.com/PumptogetherDAO"
            className="w-[26px] h-[26px] rounded bg-[rgba(42,48,60,0.5)] flex items-center justify-center hover:-translate-y-[2px] transition-all group"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-4 h-4 text-[#a0a7b8] group-hover:text-[#00e599] transition-colors duration-300" />
          </Link>
          <Link
            href="https://discord.gg/xdHqaVCagT"
            className="w-[26px] h-[26px] rounded bg-[rgba(42,48,60,0.5)] flex items-center justify-center hover:-translate-y-[2px] transition-all group"
            aria-label="Discord"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4 text-[#a0a7b8] group-hover:text-[#00e599] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09-.01-.02-.04-.03-.07-.03-1.5.26-2.93.71-4.27 1.33-.01 0-.02.01-.03.02-2.72 4.07-3.47 8.03-3.1 11.95 0 .02.01.04.03.05 1.8 1.32 3.53 2.12 5.24 2.65.03.01.06 0 .07-.02.4-.55.76-1.13 1.07-1.74.02-.04 0-.08-.04-.09-.57-.22-1.11-.48-1.64-.78-.04-.02-.04-.08-.01-.11.11-.08.22-.17.33-.25.02-.02.05-.02.07-.01 3.44 1.57 7.15 1.57 10.55 0 .02-.01.05-.01.07.01.11.09.22.17.33.26.04.03.04.09-.01.11-.52.31-1.07.56-1.64.78-.04.01-.05.06-.04.09.32.61.68 1.19 1.07 1.74.03.02.06.03.09.02 1.72-.53 3.45-1.33 5.25-2.65.02-.01.03-.03.03-.05.44-4.53-.73-8.46-3.1-11.95-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12 0 1.17-.83 2.12-1.89 2.12z"
                fill="currentColor"
              />
            </svg>
          </Link>
        <Link
            href="https://www.reddit.com/r/PumptogetherAI/"
            className="w-[26px] h-[26px] rounded bg-[rgba(42,48,60,0.5)] flex items-center justify-center hover:-translate-y-[2px] transition-all group"
            aria-label="Reddit"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4 text-[#a0a7b8] group-hover:text-[#00e599] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z" />
            </svg>
          </Link>
          <Link
            href="https://linkedin.com/company/pumptogetherdao"
            className="w-[26px] h-[26px] rounded bg-[rgba(42,48,60,0.5)] flex items-center justify-center hover:-translate-y-[2px] transition-all group"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4 text-[#a0a7b8] group-hover:text-[#00e599] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </Link>
          <Link
            href="https://t.me/PumptogetherDAO"
            className="w-[26px] h-[26px] rounded bg-[rgba(42,48,60,0.5)] flex items-center justify-center hover:-translate-y-[2px] transition-all group"
            aria-label="Telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="w-4 h-4 text-[#a0a7b8] group-hover:text-[#00e599] transition-colors duration-300"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
  </svg>
</Link>
</div>
    </div>
  );
}

export default HomePage;


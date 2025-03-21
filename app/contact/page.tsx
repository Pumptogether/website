"use client"

import { useState, useEffect } from "react"
import ElegantHeader from "@/components/elegant-header"
import Footer from "@/components/Footer"
import { PixelBackground } from "@/components/ui/pixel-background"
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // null, 'success', 'error'

  useEffect(() => {
    // Global handler for unhandled promise rejections
    const handleUnhandledRejection = (event) => {
      console.error("Unhandled promise rejection:", event.reason)
      // Prevent the default browser behavior (which would log the error to console)
      event.preventDefault()
    }

    window.addEventListener("unhandledrejection", handleUnhandledRejection)

    return () => {
      window.removeEventListener("unhandledrejection", handleUnhandledRejection)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formState.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formState.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formState.subject.trim()) {
      newErrors.subject = "Subject is required"
    }

    if (!formState.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formState.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 1500)
      })

      // Reset form on success
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      setSubmitStatus("success")

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0f141a] text-white flex flex-col">
      {/* Background elements */}
      <PixelBackground gap={8} speed={18} colors={["#00eac7", "#03d1b5", "#0a766c", "#00f5d4"]} variant="default" />

      {/* Header */}
      <ElegantHeader />

      {/* Main Content */}
      <main className="flex-grow py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0D1117] rounded-2xl"></div>
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Contact Info */}
            <div>
              <div className="mb-12 relative">
                <div className="absolute -top-10 -left-20 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(0,234,199,0.03)_0%,transparent_70%)] blur-lg"></div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
                <div className="w-[60px] h-1 bg-[#00e8c0] my-6"></div>
                <p className="text-[#a0a7b8] text-lg leading-relaxed">
                  Have questions about PumptogetherDAO? Want to join our community or explore partnership opportunities?
                  We'd love to hear from you.
                </p>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-6">
                <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] hover:border-[#00e8c0] transition-all duration-300 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Mail className="mr-3 text-[#00e8c0]" size={20} />
                    Email Us
                  </h3>
                  <p className="text-[#a0a7b8] mb-2">For general inquiries:</p>
                  <a href="mailto:info@pumptogether.xyz" className="text-[#00e8c0] hover:underline">
                    info@pumptogether.xyz
                  </a>

                  <p className="text-[#a0a7b8] mt-4 mb-2">For partnership opportunities:</p>
                  <a href="mailto:partnerships@pumptogether.xyz" className="text-[#00e8c0] hover:underline">
                    partnerships@pumptogether.xyz
                  </a>
                </div>

                <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] hover:border-[#00e8c0] transition-all duration-300 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <MessageSquare className="mr-3 text-[#00e8c0]" size={20} />
                    Join Our Community
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[#a0a7b8] mb-2">Discord:</p>
                      <a
                        href="https://discord.gg/xdHqaVCagT"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00e8c0] hover:underline flex items-center"
                      >
                        discord.gg/xdHqaVCagT
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#00e8c0"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block ml-1"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="#00e8c0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <p className="text-[#a0a7b8] mb-2">Telegram:</p>
                      <a
                        href="https://t.me/PumptogetherHQ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00e8c0] hover:underline flex items-center"
                      >
                        t.me/PumptogetherHQ
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#00e8c0"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block ml-1"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="#00e8c0"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>

                    <div>
                      <p className="text-[#a0a7b8] mb-2">Twitter/X:</p>
                      <a
                        href="https://x.com/PumptogetherDAO"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#00e8c0] hover:underline flex items-center"
                      >
                        x.com/PumptogetherDAO
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="#00e8c0"
                          xmlns="http://www.w3.org/2000/svg"
                          className="inline-block ml-1"
                        >
                          <path
                            d="M7 17L17 7M17 7H8M17 7V16"
                            stroke="#00e8c0"
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
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-[rgba(42,48,60,0.3)] border border-[#2a303c] rounded-lg p-8 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[radial-gradient(circle,rgba(0,234,199,0.03)_0%,transparent_70%)] blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-[radial-gradient(circle,rgba(0,234,199,0.02)_0%,transparent_70%)] blur-lg"></div>

                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

                {submitStatus === "success" ? (
                  <div className="bg-[rgba(0,234,199,0.1)] border border-[#00e8c0] rounded-lg p-6 text-center">
                    <CheckCircle className="mx-auto mb-4 text-[#00e8c0]" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-[#a0a7b8]">
                      Thank you for reaching out. We'll get back to you as soon as possible.
                    </p>
                  </div>
                ) : submitStatus === "error" ? (
                  <div className="bg-[rgba(239,68,68,0.1)] border border-[#ef4444] rounded-lg p-6 text-center">
                    <AlertCircle className="mx-auto mb-4 text-[#ef4444]" size={48} />
                    <h3 className="text-xl font-semibold mb-2">Something went wrong</h3>
                    <p className="text-[#a0a7b8]">
                      There was an error sending your message. Please try again later or contact us directly.
                    </p>
                    <button
                      onClick={() => setSubmitStatus(null)}
                      className="mt-4 px-4 py-2 bg-[#1c2230] hover:bg-[#232a3b] text-white rounded-md transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#a0a7b8] mb-1">
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-[#a0a7b8]" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          className={`bg-[#1c2230] border ${errors.name ? "border-[#ef4444]" : "border-[#2a303c]"} focus:border-[#00e8c0] text-white rounded-md block w-full pl-10 pr-3 py-2.5 outline-none transition-colors`}
                          placeholder="John Doe"
                        />
                      </div>
                      {errors.name && <p className="mt-1 text-sm text-[#ef4444]">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#a0a7b8] mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-[#a0a7b8]" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          className={`bg-[#1c2230] border ${errors.email ? "border-[#ef4444]" : "border-[#2a303c]"} focus:border-[#00e8c0] text-white rounded-md block w-full pl-10 pr-3 py-2.5 outline-none transition-colors`}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && <p className="mt-1 text-sm text-[#ef4444]">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-[#a0a7b8] mb-1">
                        Subject
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-[#a0a7b8]" />
                        </div>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          className={`bg-[#1c2230] border ${errors.subject ? "border-[#ef4444]" : "border-[#2a303c]"} focus:border-[#00e8c0] text-white rounded-md block w-full pl-10 pr-3 py-2.5 outline-none transition-colors`}
                          placeholder="How can we help you?"
                        />
                      </div>
                      {errors.subject && <p className="mt-1 text-sm text-[#ef4444]">{errors.subject}</p>}
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-[#a0a7b8] mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className={`bg-[#1c2230] border ${errors.message ? "border-[#ef4444]" : "border-[#2a303c]"} focus:border-[#00e8c0] text-white rounded-md block w-full p-3 outline-none transition-colors`}
                        placeholder="Tell us how we can assist you..."
                      ></textarea>
                      {errors.message && <p className="mt-1 text-sm text-[#ef4444]">{errors.message}</p>}
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full flex items-center justify-center px-6 py-3 rounded-md text-base font-medium ${
                          isSubmitting
                            ? "bg-[#1c2230] text-[#a0a7b8] cursor-not-allowed"
                            : "bg-[#00e8c0] text-[#0f1923] hover:bg-[#00f5d4] transition-all duration-300 hover:-translate-y-[2px]"
                        }`}
                      >
                        {isSubmitting ? (
                          <>
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#a0a7b8]"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                )}
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


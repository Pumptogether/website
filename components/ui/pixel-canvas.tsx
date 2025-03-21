"use client"

import * as React from "react"

// First define the Pixel class
class Pixel {
  width: number
  height: number
  ctx: CanvasRenderingContext2D
  x: number
  y: number
  color: string
  speed: number
  size: number
  sizeStep: number
  minSize: number
  maxSizeInteger: number
  maxSize: number
  delay: number
  counter: number
  counterStep: number
  isIdle: boolean
  isReverse: boolean
  isShimmer: boolean

  constructor(
    canvas: HTMLCanvasElement,
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    color: string,
    speed: number,
    delay: number,
  ) {
    this.width = canvas.width
    this.height = canvas.height
    this.ctx = context
    this.x = x
    this.y = y
    this.color = color
    this.speed = this.getRandomValue(0.1, 0.9) * speed
    this.size = 0
    this.sizeStep = Math.random() * 0.4
    this.minSize = 0.5
    this.maxSizeInteger = 2.5 // Increased from 2 to 2.5 for slightly larger pixels
    this.maxSize = this.getRandomValue(this.minSize, this.maxSizeInteger)
    this.delay = delay
    this.counter = 0
    this.counterStep = Math.random() * 4 + (this.width + this.height) * 0.01
    this.isIdle = false
    this.isReverse = false
    this.isShimmer = false
  }

  getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min
  }

  draw() {
    const centerOffset = this.maxSizeInteger * 0.5 - this.size * 0.5
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x + centerOffset, this.y + centerOffset, this.size, this.size)
  }

  appear() {
    this.isIdle = false

    if (this.counter <= this.delay) {
      this.counter += this.counterStep
      return
    }

    if (this.size >= this.maxSize) {
      this.isShimmer = true
    }

    if (this.isShimmer) {
      this.shimmer()
    } else {
      this.size += this.sizeStep
    }

    this.draw()
  }

  disappear() {
    this.isShimmer = false
    this.counter = 0

    if (this.size <= 0) {
      this.isIdle = true
      return
    } else {
      this.size -= 0.1
    }

    this.draw()
  }

  shimmer() {
    if (this.size >= this.maxSize) {
      this.isReverse = true
    } else if (this.size <= this.minSize) {
      this.isReverse = false
    }

    if (this.isReverse) {
      this.size -= this.speed
    } else {
      this.size += this.speed
    }
  }
}

// Then define the web component
class PixelCanvasElement extends HTMLElement {
  private canvas: HTMLCanvasElement
  private ctx: CanvasRenderingContext2D | null
  private pixels: Pixel[] = []
  private animation: number | null = null
  private timeInterval: number = 1000 / 60
  private timePrevious: number = performance.now()
  private reducedMotion: boolean
  private _initialized = false
  private _resizeObserver: ResizeObserver | null = null
  private _timeoutId: number | null = null

  constructor() {
    super()
    this.canvas = document.createElement("canvas")
    this.ctx = this.canvas.getContext("2d")
    this.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const shadow = this.attachShadow({ mode: "open" })
    const style = document.createElement("style")
    style.textContent = `
      :host {
        display: grid;
        inline-size: 100%;
        block-size: 100%;
        overflow: hidden;
      }
    `
    shadow.appendChild(style)
    shadow.appendChild(this.canvas)
  }

  get colors() {
    return this.dataset.colors?.split(",") || ["#f8fafc", "#f1f5f9", "#cbd5e1"]
  }

  get gap() {
    const value = Number(this.dataset.gap) || 5
    return Math.max(4, Math.min(50, value))
  }

  get speed() {
    const value = Number(this.dataset.speed) || 35
    return this.reducedMotion ? 0 : Math.max(0, Math.min(100, value)) * 0.001
  }

  get variant() {
    return this.dataset.variant || "default"
  }

  connectedCallback() {
    if (this._initialized) return
    this._initialized = true

    try {
      // Setup resize observer
      this._setupResizeObserver()

      // Start animation automatically
      setTimeout(() => {
        if (this._initialized) {
          this.handleAnimation("appear")
        }
      }, 100)
    } catch (error) {
      console.error("Error initializing PixelCanvas:", error)
    }
  }

  _setupResizeObserver() {
    try {
      requestAnimationFrame(() => {
        this.handleResize()

        if (typeof ResizeObserver !== "undefined") {
          const ro = new ResizeObserver((entries) => {
            if (!entries.length) return
            requestAnimationFrame(() => {
              try {
                this.handleResize()
              } catch (error) {
                console.error("Error in resize handler:", error)
              }
            })
          })

          ro.observe(this)
          this._resizeObserver = ro
        } else {
          // Fallback for browsers without ResizeObserver
          window.addEventListener("resize", () => this.handleResize())
        }
      })
    } catch (error) {
      console.error("Error setting up resize observer:", error)
    }
  }

  disconnectedCallback() {
    try {
      this._initialized = false

      // Clean up resize observer
      if (this._resizeObserver) {
        this._resizeObserver.disconnect()
        this._resizeObserver = null
      }

      // Clean up animation
      if (this.animation) {
        cancelAnimationFrame(this.animation)
        this.animation = null
      }

      // Clear any pending timeouts
      if (this._timeoutId !== null) {
        clearTimeout(this._timeoutId)
        this._timeoutId = null
      }
    } catch (error) {
      console.error("Error cleaning up PixelCanvas:", error)
    }
  }

  handleResize() {
    if (!this.ctx || !this._initialized) return

    try {
      const rect = this.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      const width = Math.floor(rect.width)
      const height = Math.floor(rect.height)

      const dpr = window.devicePixelRatio || 1
      this.canvas.width = width * dpr
      this.canvas.height = height * dpr
      this.canvas.style.width = `${width}px`
      this.canvas.style.height = `${height}px`

      this.ctx.setTransform(1, 0, 0, 1, 0, 0)
      this.ctx.scale(dpr, dpr)

      this.createPixels()

      // Restart animation after resize
      if (this._initialized) {
        this.handleAnimation("appear")
      }
    } catch (error) {
      console.error("Error in handleResize:", error)
    }
  }

  getDistanceToCenter(x: number, y: number) {
    const dx = x - this.canvas.width / 2
    const dy = y - this.canvas.height / 2
    return Math.sqrt(dx * dx + dy * dy)
  }

  getDistanceToBottomLeft(x: number, y: number) {
    const dx = x
    const dy = this.canvas.height - y
    return Math.sqrt(dx * dx + dy * dy)
  }

  createPixels() {
    if (!this.ctx) return

    try {
      this.pixels = []

      for (let x = 0; x < this.canvas.width; x += this.gap) {
        for (let y = 0; y < this.canvas.height; y += this.gap) {
          const color = this.colors[Math.floor(Math.random() * this.colors.length)]
          let delay = 0

          if (this.variant === "icon") {
            delay = this.reducedMotion ? 0 : this.getDistanceToCenter(x, y)
          } else {
            delay = this.reducedMotion ? 0 : this.getDistanceToBottomLeft(x, y)
          }

          this.pixels.push(new Pixel(this.canvas, this.ctx, x, y, color, this.speed, delay))
        }
      }
    } catch (error) {
      console.error("Error creating pixels:", error)
    }
  }

  handleAnimation(name: "appear" | "disappear") {
    try {
      // Cancel any existing animation
      if (this.animation) {
        cancelAnimationFrame(this.animation)
        this.animation = null
      }

      // Clear any pending timeouts
      if (this._timeoutId !== null) {
        clearTimeout(this._timeoutId)
        this._timeoutId = null
      }

      const animate = () => {
        if (!this._initialized) return

        try {
          this.animation = requestAnimationFrame(animate)

          const timeNow = performance.now()
          const timePassed = timeNow - this.timePrevious

          if (timePassed < this.timeInterval) return

          this.timePrevious = timeNow - (timePassed % this.timeInterval)

          if (!this.ctx) return
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

          let allIdle = true
          for (const pixel of this.pixels) {
            pixel[name]()
            if (!pixel.isIdle) allIdle = false
          }

          // If all pixels are idle, restart the animation
          if (allIdle) {
            if (name === "appear" && this._initialized) {
              // Cancel current animation
              cancelAnimationFrame(this.animation)
              this.animation = null

              // Add a small delay before restarting the animation
              this._timeoutId = window.setTimeout(() => {
                if (this._initialized) {
                  this.handleAnimation("appear")
                }
              }, 2000) as unknown as number
            } else {
              cancelAnimationFrame(this.animation)
              this.animation = null
            }
          }
        } catch (error) {
          console.error("Error in animation loop:", error)
          if (this.animation) {
            cancelAnimationFrame(this.animation)
            this.animation = null
          }
        }
      }

      animate()
    } catch (error) {
      console.error("Error starting animation:", error)
    }
  }
}

// React wrapper component
export interface PixelCanvasProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: number
  speed?: number
  colors?: string[]
  variant?: "default" | "icon"
  autoAnimate?: boolean
  noFocus?: boolean
}

export const PixelCanvas = React.forwardRef<HTMLDivElement, PixelCanvasProps>(
  ({ gap, speed, colors, variant, style, autoAnimate = true, noFocus = false, ...props }, ref) => {
    React.useEffect(() => {
      // Register web component on first render
      try {
        if (typeof window !== "undefined") {
          if (!customElements.get("pixel-canvas")) {
            customElements.define("pixel-canvas", PixelCanvasElement)
          }
        }
      } catch (error) {
        console.error("Error registering custom element:", error)
      }
    }, [])

    return (
      <pixel-canvas
        ref={ref}
        data-gap={gap}
        data-speed={speed}
        data-colors={colors?.join(",")}
        data-variant={variant}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          width: "100%",
          height: "100%",
          opacity: 0.6, // Increased from 0.5 to 0.6 for better visibility
          ...style,
        }}
        {...props}
      />
    )
  },
)
PixelCanvas.displayName = "PixelCanvas"


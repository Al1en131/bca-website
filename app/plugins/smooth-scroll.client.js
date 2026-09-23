import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  gsap.registerPlugin(ScrollTrigger)

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: false,
  })

  // Synchronize Lenis scroll with GSAP ScrollTrigger
  lenis.on('scroll', ScrollTrigger.update)

  // Add Lenis's raf to GSAP's ticker for synchronized smooth animations
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })

  // Disable GSAP lag smoothing to ensure smooth scrolling stays synchronized
  gsap.ticker.lagSmoothing(0)

  return {
    provide: {
      lenis,
      gsap,
      ScrollTrigger
    }
  }
})

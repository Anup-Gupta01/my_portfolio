import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorGlow() {
  const cursorX = useMotionValue(-400)
  const cursorY = useMotionValue(-400)
  const [isVisible, setIsVisible] = useState(false)

  const springX = useSpring(cursorX, { stiffness: 60, damping: 16 })
  const springY = useSpring(cursorY, { stiffness: 60, damping: 16 })

  // Fast-following inner dot
  const fastX = useSpring(cursorX, { stiffness: 200, damping: 25 })
  const fastY = useSpring(cursorY, { stiffness: 200, damping: 25 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }
    const hide = () => setIsVisible(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseleave', hide)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseleave', hide)
    }
  }, [cursorX, cursorY, isVisible])

  return (
    <>
      {/* Large ambient glow — follows slowly */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-0"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
          width: 700,
          height: 700,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(6,182,212,0.06) 0%, rgba(59,130,246,0.04) 35%, transparent 65%)',
        }}
      />

      {/* Tighter inner spotlight */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-0"
        style={{
          x: fastX,
          y: fastY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(6,182,212,0.09) 0%, transparent 70%)',
        }}
      />
    </>
  )
}

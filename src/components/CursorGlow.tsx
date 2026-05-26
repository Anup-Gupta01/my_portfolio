import { useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CursorGlow() {
  const cursorX = useMotionValue(-200)
  const cursorY = useMotionValue(-200)

  const springX = useSpring(cursorX, { stiffness: 80, damping: 18 })
  const springY = useSpring(cursorY, { stiffness: 80, damping: 18 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [cursorX, cursorY])

  return (
    <motion.div
      className="fixed top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none z-0 mix-blend-normal"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        background:
          'radial-gradient(circle, rgba(6,182,212,0.05) 0%, rgba(59,130,246,0.03) 40%, transparent 70%)',
      }}
    />
  )
}

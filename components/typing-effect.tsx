'use client'

import { useState, useEffect } from 'react'

interface TypingEffectProps {
  texts: string[]
  speed?: number
  delay?: number
}

export function TypingEffect({ texts, speed = 150, delay = 2000 }: TypingEffectProps) {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % texts.length
      const fullText = texts[i]

      if (isDeleting) {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1))
        setCurrentIndex(prev => prev - 1)
      } else {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1))
        setCurrentIndex(prev => prev + 1)
      }

      if (!isDeleting && currentText === fullText) {
        // Pause at end
        setIsPaused(true)
        setTimeout(() => {
          setIsPaused(false)
          setIsDeleting(true)
        }, delay)
      } else if (isDeleting && currentText === '') {
        // Move to next text
        setIsDeleting(false)
        setLoopNum(prev => prev + 1)
      }
    }

    if (!isPaused) {
      const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed)
      return () => clearTimeout(timer)
    }
  }, [currentText, isDeleting, loopNum, texts, speed, delay, isPaused])

  return (
    <span className="text-primary">
      {currentText}
      <span className="ml-1 inline-block h-6 w-0.5 bg-primary align-middle animate-pulse"></span>
    </span>
  )
}

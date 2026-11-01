'use client'

import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'
import { useEffect, useState } from 'react'

const SHOW_AFTER_PX = 400

export function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER_PX)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' })
  }

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      tabIndex={visible ? 0 : -1}
      className={`fixed bottom-6 right-6 z-40 border-zinc-300 bg-white/80 text-zinc-900 backdrop-blur transition-all duration-300 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-800 ${
        visible
          ? 'translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}

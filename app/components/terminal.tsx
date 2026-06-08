'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

export default function Terminal() {
  // Reference to the terminal element
  const terminalRef = useRef<HTMLDivElement>(null)
  // State to control blinking cursor
  const [showCursor, setShowCursor] = useState(true)
  // State to store current displayed text
  const [displayText, setDisplayText] = useState('')
  // State to control terminal visibility
  const [isInView, setIsInView] = useState(false)
  // State to track current command index
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0)
  // Reference to track if component is mounted
  const isMountedRef = useRef(true)
  // Reference to store active timers
  const timersRef = useRef<NodeJS.Timeout[]>([])
  // State to check if device is mobile
  const [isMobile, setIsMobile] = useState(false)

  // List of commands and responses
  const commands = [
    { prompt: 'user@portfolio:~$ ', command: 'whoami', delay: 50 },
    {
      prompt: '',
      command: `
Name: Tran Phuoc My Toan (Jacob)
Role: Software Engineer & Leader
Experience: 4.5+ years
Location: DaNang, Vietnam
Email: mytoandn@gmail.com
Phone: +84 941 275 946
GitHub: github.com/mytoandeptrai
LinkedIn: linkedin.com/in/tran-phuoc-my-toan-613971199
`,
      delay: 30,
    },
    { prompt: 'user@portfolio:~$ ', command: 'cat education.txt', delay: 50 },
    {
      prompt: '',
      command: `
Degree: Bachelor of Information Technology
Institution: University of Science and Education - Da Nang
Duration: Aug 2018 - Jul 2023
Major: Information Technology
Classification: Good

Certifications:
- IELTS Overall Band 6.5 (Dec 2025)

Languages:
- English (Professional working proficiency)
- Vietnamese (Native)
`,
      delay: 20,
    },
    { prompt: 'user@portfolio:~$ ', command: 'cat summary.txt', delay: 50 },
    {
      prompt: '',
      command: `
Software Engineer with 4.5+ years of experience developing and maintaining
web applications using React, Next.js, and TypeScript. Experienced in working
directly with clients to analyze requirements, propose solutions, and support
project delivery. Strong in frontend architecture, code quality, and collaboration
with cross-functional teams, with hands-on experience in payment and blockchain-
related systems.

Core Skills:
- Frontend: React, Next.js, TypeScript, TailwindCSS, Redux, Zustand
- Backend: Node.js, NestJS, Express, GoLang
- Database: PostgreSQL, MongoDB, MySQL, Redis
- DevOps: Docker, AWS (EC2, S3, SNS), GitLab CI/CD
- Blockchain: Solidity, Wagmi, Ethers (Ethereum, BSC, Tron, Arbitrum)
`,
      delay: 15,
    },
    { prompt: 'user@portfolio:~$ ', command: 'ls -la projects/', delay: 50 },
    {
      prompt: '',
      command: `
total 7
drwxr-xr-x  2 jacob  staff  224 Mar 21 2026 .
drwxr-xr-x 10 jacob  staff  320 Mar 21 2026 ..
-rw-r--r--  1 jacob  staff  8.5K Feb 2026 PWC-Payment-System.ts
-rw-r--r--  1 jacob  staff  12.3K Feb 2026 PQA-PQUSD-StableCoin.sol
-rw-r--r--  1 jacob  staff  4.8K May 2025 NFT-Minting-DApp.tsx
-rw-r--r--  1 jacob  staff  15.7K Feb 2025 KLDX-Stock-Exchange.tsx
-rw-r--r--  1 jacob  staff  6.2K Jun 2024 Bit-kub-E-Learning.tsx
-rw-r--r--  1 jacob  staff  9.4K Feb 2024 MSPF-Image-Analysis.tsx
-rw-r--r--  1 jacob  staff  7.1K May 2023 MSPF-Video-Service.tsx
`,
      delay: 10,
    },
    { prompt: 'user@portfolio:~$ ', command: 'cat awards.txt', delay: 50 },
    {
      prompt: '',
      command: `
Awards & Recognition:

🏆 Third Prize - Internal Company Hackathon (2025)
   Var Meta Technology - Dec 2025

⭐ Prospective Employee - 2024
   VarMeta Technology Joint Stock Company - Dec 2024

📜 IELTS Overall Band 6.5
   IDP - Dec 2025
`,
      delay: 10,
    },
  ]

  // Static content to display on mobile devices
  const staticContent = `user@portfolio:~$ whoami

Name: Tran Phuoc My Toan (Jacob)
Role: Software Engineer & Leader
Experience: 4.5+ years
Location: DaNang, Vietnam
Email: mytoandn@gmail.com
GitHub: github.com/mytoandeptrai

user@portfolio:~$ ls -la projects/

PWC-Payment-System.ts
PQA-PQUSD-StableCoin.sol
NFT-Minting-DApp.tsx
KLDX-Stock-Exchange.tsx
Bit-kub-E-Learning.tsx
MSPF-Image-Analysis.tsx
MSPF-Video-Service.tsx`

  // Improved mobile detection function (includes Xiaomi)
  const checkIfMobile = () => {
    if (typeof window === 'undefined') return false

    // UserAgent detection (traditional approach)
    const userAgentCheck =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|MI\s|Redmi|MIUI|XIAOMI/i.test(
        navigator.userAgent
      )

    // Screen size detection (alternative approach)
    const screenCheck = window.innerWidth <= 768

    // Touch capability detection (another alternative approach)
    const touchCheck =
      'ontouchstart' in window ||
      navigator.maxTouchPoints > 0 ||
      (navigator.maxTouchPoints && navigator.maxTouchPoints > 0)

    // For specific Xiaomi devices, additional verification
    const isXiaomiCheck =
      /MI\s|Redmi|MIUI|XIAOMI/i.test(navigator.userAgent) ||
      /HM\sNote/i.test(navigator.userAgent) ||
      /Mi\sNote/i.test(navigator.userAgent)

    // Returns true if any of the checks are positive
    return userAgentCheck || (screenCheck && touchCheck) || isXiaomiCheck
  }

  // Detect mobile device
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Immediate check on mount
      const isMobileDevice = checkIfMobile()
      setIsMobile(isMobileDevice)

      // If mobile, set static content immediately
      if (isMobileDevice) {
        setDisplayText(staticContent)
      }

      // Add resize listener to adjust if needed
      const handleResize = () => {
        const newIsMobile = checkIfMobile()
        if (newIsMobile !== isMobile) {
          setIsMobile(newIsMobile)
          if (newIsMobile) {
            setDisplayText(staticContent)
          }
        }
      }

      window.addEventListener('resize', handleResize)

      // Force check to ensure it works on Xiaomi devices
      const forceCheckTimeout = setTimeout(() => {
        const forcedCheck = checkIfMobile()
        if (forcedCheck && !isMobile) {
          setIsMobile(true)
          setDisplayText(staticContent)
        }
      }, 500)

      return () => {
        window.removeEventListener('resize', handleResize)
        clearTimeout(forceCheckTimeout)
      }
    }
  }, [])

  // Clear all timers when component unmounts
  useEffect(() => {
    return () => {
      isMountedRef.current = false
      // Clear all pending timers
      timersRef.current.forEach((timer) => clearTimeout(timer))
    }
  }, [])

  // Effect for blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      if (isMountedRef.current) {
        setShowCursor((prev) => !prev)
      }
    }, 530)

    return () => clearInterval(cursorInterval)
  }, [])

  // Check if terminal is in viewport (desktop only)
  useEffect(() => {
    // Skip if mobile device
    if (isMobile) {
      return
    }

    // On desktop, use IntersectionObserver if available
    if (
      typeof window !== 'undefined' &&
      typeof IntersectionObserver !== 'undefined' &&
      terminalRef.current
    ) {
      try {
        const observer = new IntersectionObserver(
          (entries) => {
            if (entries[0].isIntersecting && isMountedRef.current) {
              setIsInView(true)
            }
          },
          { threshold: 0.1 }
        )

        observer.observe(terminalRef.current)

        return () => {
          if (terminalRef.current) {
            observer.unobserve(terminalRef.current)
          }
        }
      } catch (error) {
        // Fallback if error occurs
        setIsInView(true)
      }
    } else {
      // Fallback if IntersectionObserver not available
      setIsInView(true)
    }
  }, [isMobile])

  // Function to type current command pair
  const typeCurrentCommand = () => {
    // Skip on mobile devices
    if (isMobile) return

    // Clear existing timers
    timersRef.current.forEach((timer) => clearTimeout(timer))
    timersRef.current = []

    // Check if there are more commands to type
    if (currentCommandIndex >= commands.length || !isInView) {
      return
    }

    // Get current pair (command and response)
    const currentCmdIndex = Math.floor(currentCommandIndex / 2) * 2
    const cmd = commands[currentCmdIndex]
    const response = commands[currentCmdIndex + 1]

    // Clear terminal for new command
    setDisplayText('')

    // Helper function to safely add text
    const safeAppendText = (text: string) => {
      if (isMountedRef.current) {
        setDisplayText((prev) => prev + text)
      }
    }

    let totalDelay = 0

    // Type the prompt
    safeAppendText(cmd.prompt)
    totalDelay += 200

    // Type the command character by character
    for (let i = 0; i < cmd.command.length; i++) {
      const charTimer = setTimeout(() => {
        safeAppendText(cmd.command[i])
      }, totalDelay)
      timersRef.current.push(charTimer)
      totalDelay += cmd.delay
    }

    // Add line break after command
    const lineBreakTimer = setTimeout(() => {
      safeAppendText('\n')
    }, totalDelay)
    timersRef.current.push(lineBreakTimer)
    totalDelay += 300

    // Type the response character by character
    for (let i = 0; i < response.command.length; i++) {
      const charTimer = setTimeout(() => {
        safeAppendText(response.command[i])
      }, totalDelay)
      timersRef.current.push(charTimer)
      totalDelay += response.delay
    }

    // Schedule next command pair after a delay
    const nextCommandTimer = setTimeout(() => {
      if (isMountedRef.current) {
        setCurrentCommandIndex(currentCommandIndex + 2)
      }
    }, totalDelay + 1500)
    timersRef.current.push(nextCommandTimer)
  }

  // Effect to type commands when index or visibility changes
  useEffect(() => {
    if (!isInView || isMobile) return
    typeCurrentCommand()
  }, [currentCommandIndex, isInView, isMobile])

  // Function to auto-scroll to bottom of terminal
  const scrollToBottom = () => {
    if (terminalRef.current) {
      const content = terminalRef.current.querySelector('.terminal-content')
      if (content) {
        content.scrollTop = content.scrollHeight
      }
    }
  }

  // Scroll to bottom each time text changes
  useEffect(() => {
    scrollToBottom()
  }, [displayText])

  return (
    <section className="py-20">
      <div className="container mx-auto px-4" ref={terminalRef}>
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-lg overflow-hidden border border-zinc-700 shadow-lg">
            {/* Terminal header */}
            <div className="bg-zinc-800 px-4 py-2 flex items-center">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="mx-auto text-sm text-zinc-400">
                terminal — jacob@portfolio — 80×24
              </div>
            </div>

            {/* Terminal content */}
            <div className="bg-zinc-900 p-4 font-mono text-sm h-[400px] overflow-y-auto terminal-content">
              <div className="whitespace-pre-wrap text-zinc-300">
                {displayText}
                {showCursor && <span className="text-white">▋</span>}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

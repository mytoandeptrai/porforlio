'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronRight, ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

type ProjectTab = 'description' | 'code' | 'stack' | 'structure'

interface ProjectFile {
  name: string
  type: 'file' | 'folder'
  children?: ProjectFile[]
  expanded?: boolean
}

interface ProjectEndpoint {
  method: string
  route: string
  description?: string
}

interface Project {
  id: number
  title: string
  category: string
  year: string
  description: string
  longDescription: string
  tags: string[]
  repository?: string
  liveUrl?: string
  status: '🟢 online' | '🟡 GitHub' | '🔴 offline' | '🔴 Private' | '🟣 development'
  endpoints?: ProjectEndpoint[]
}

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedFolders, setExpandedFolders] = useState<
    Record<string, boolean>
  >({})

  const categories = ['all', 'blockchain', 'fullstack', 'frontend', 'ai']

  const works: Project[] = [
    {
      id: 1,
      title: 'PWC Payment System',
      category: 'blockchain',
      year: '2025-2026',
      description:
        'End-to-end payment system with blockchain integration for order management and transaction processing',
      longDescription: `Led the development of a comprehensive payment system integrating blockchain networks (BSC, Tron) with traditional payment flows. Built using Vite.js for frontend and GoLang for backend services.

Key Responsibilities:
- Led project team end-to-end, gathering requirements and proposing technical solutions
- Established frontend codebase with Vite.js and TypeScript, defining technical standards
- Designed high-level payment flows with sequence diagrams for order creation and webhook callbacks
- Built SDKs and generated API documentation using Fern
- Worked with blockchain networks (BSC, Tron) for payment and transaction workflows
- Contributed to backend development using GoLang for bug fixes and feature maintenance`,
      tags: ['Vite.js', 'TypeScript', 'GoLang', 'Blockchain', 'BSC', 'Tron', 'Figma', 'Fern'],
      status: '🔴 Private',
    },
    {
      id: 2,
      title: 'PQA - PQUSD Stable Coin',
      category: 'blockchain',
      year: '2025-2026',
      description:
        'Stablecoin platform with multi-blockchain support, KYC integration, and multisignature workflows',
      longDescription: `Led frontend development for a stablecoin platform supporting multiple blockchain networks (Ethereum, Arbitrum, Tron, Abelian, Qday). Implemented complex features including SSO, rate limiting, and KYC verification.

Key Responsibilities:
- Led frontend development and worked directly with clients for requirements gathering
- Proposed frontend and system-level solutions for new features
- Implemented Single Sign-On (SSO) across frontend and backend
- Built custom rule-based rate limiting mechanism on backend
- Worked with multiple blockchain networks (EVM and non-EVM environments)
- Implemented multisignature workflows requiring multiple wallet approvals
- Integrated KYC verification using Sumsub and Kafka-based event-driven systems
- Worked with AWS (SES, S3, CloudFront) and Huawei Cloud deployment`,
      tags: ['React', 'TypeScript', 'Solidity', 'Ethereum', 'Arbitrum', 'Tron', 'AWS', 'Kafka', 'Sumsub'],
      status: '🔴 Private',
    },
    {
      id: 3,
      title: 'Blockchain Lottery DApp',
      category: 'blockchain',
      year: '2025',
      description:
        'Decentralized lottery application with Web3 wallet integration and smart contract interactions on Sepolia testnet',
      longDescription: `A decentralized lottery application enabling blockchain-based lottery interactions through a modern web interface with Web3 wallet integration on Sepolia testnet.

Key Features:
- Web3 wallet integration (MetaMask compatible) using Wagmi & Viem
- Smart contract reading and transaction execution on Sepolia
- Lottery wheel functionality with statistics display
- Responsive UI with notification system (Sonner)
- Docker containerization for easy deployment
- Professional development setup with husky git hooks
- Comprehensive documentation for smart contract integration
- Modern tech stack with Next.js 15 and TypeScript`,
      tags: ['Next.js', 'TypeScript', 'Solidity', 'Wagmi', 'Viem', 'Sepolia', 'Web3', 'Docker'],
      repository: 'https://github.com/mytoandeptrai/lottery-project',
      liveUrl: 'https://lottery-project-xi.vercel.app/',
      status: '🟢 online',
    },
    {
      id: 4,
      title: 'NFT Minting DApp',
      category: 'blockchain',
      year: '2025',
      description:
        'NFT minting platform deployed on Avalanche blockchain with Thirdweb SDK integration',
      longDescription: `Developed a responsive NFT minting platform deployed on the Avalanche blockchain, featuring ERC-1155 smart contracts and complete CI/CD pipeline.

Key Responsibilities:
- Deployed ERC-1155 smart contract to Avalanche using Thirdweb CLI & dashboard
- Integrated Thirdweb SDK for wallet connection and NFT minting workflows
- Developed responsive minting interface using React, Shadcn-UI, and Tailwind CSS
- Set up Google Analytics to track user behavior and engagement
- Configured Nginx, Docker, and GitLab CI/CD pipeline for automated deployment to AWS EC2
- Handled blockchain concerns including wallet setup, gas estimation, and transaction signing`,
      tags: ['React', 'TypeScript', 'Solidity', 'Thirdweb', 'Avalanche', 'ERC-1155', 'AWS', 'Docker'],
      status: '🔴 Private',
    },
    {
      id: 5,
      title: 'KLDX - Stock Exchange Platform',
      category: 'fullstack',
      year: '2024-2025',
      description:
        'Micro-frontend stock trading platform with real-time order book and advanced TradingView integration',
      longDescription: `Established and maintained a source-based micro-frontend architecture for a comprehensive stock exchange platform, featuring real-time trading capabilities and advanced charting.

Key Responsibilities:
- Established micro-frontend architecture using React, Webpack 5, and TypeScript
- Defined frontend technical standards and reviewed implementations for consistency
- Led development of complex features including TradingView chart customization
- Implemented real-time order book using MQTT protocol
- Improved frontend performance with web workers and caching strategies
- Collaborated with backend teams on API integration and security practices
- Worked with senior developers and UI/UX designers on interface refinements`,
      tags: ['React', 'TypeScript', 'Webpack 5', 'Micro-frontend', 'TradingView', 'MQTT', 'Web Workers'],
      status: '🔴 Private',
    },
    {
      id: 6,
      title: 'AI Blog Generator',
      category: 'ai',
      year: '2025',
      description:
        'AI-powered platform that converts audio/video files into SEO-optimized blog posts using Google Gemini',
      longDescription: `An AI-powered blog generation platform that converts audio and video files into professionally formatted blog posts using Google's Gemini API, with secure authentication and markdown editing.

Key Features:
- Converts audio/video files (up to 10MB) into blog posts using Gemini AI
- Secure user authentication via Clerk
- Built-in Markdown editor for post customization
- SEO-friendly content generation with AI optimization
- Secure file handling and processing via UploadThing
- Database management with NeonDb (PostgreSQL)
- Modern UI with Shadcn/ui and Magic UI components
- Docker containerization for deployment
- Comprehensive environment configuration with 11 variables`,
      tags: ['Next.js', 'TypeScript', 'Gemini AI', 'Clerk', 'NeonDB', 'UploadThing', 'Docker', 'Shadcn'],
      repository: 'https://github.com/mytoandeptrai/BLOG-AI',
      liveUrl: 'https://blog-ai-jacob.vercel.app/',
      status: '🟢 online',
    },
    {
      id: 7,
      title: 'myPortfolio',
      category: 'frontend',
      year: '2025',
      description:
        'Personal portfolio with terminal-style design, animations and interactive easter eggs',
      longDescription: `This is the very website you are browsing right now! A personal portfolio developed with Next.js 15 and React 19, featuring a design inspired by command terminals and code editors.

Key Features:
- Design inspired by terminals and programming IDEs
- Smooth and interactive animations using Framer Motion
- Functional terminal with custom commands (whoami, cat, ls)
- Project visualization in JSON format with category filters
- Hidden easter eggs (Konami Code, backend console with commands)
- Contact form styled as code editor with Zod validation
- Security headers (CSP, honeypot, input sanitization)
- Fully responsive design adapted for all screen sizes
- Canvas particle animation system (100 particles, 60fps)`,
      tags: [
        'Next.js',
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
        'Shadcn/UI',
      ],
      repository: 'https://github.com/mytoandeptrai/porforlio',
      liveUrl: 'https://porforlio-jacob.vercel.app/',
      status: '🟢 online',
    },
  ]

  const filteredWorks = works.filter((work) =>
    selectedCategory === 'all' ? true : work.category === selectedCategory
  )

  const toggleFolder = (path: string) => {
    setExpandedFolders((prev) => ({
      ...prev,
      [path]: !prev[path],
    }))
  }

  const renderFileTree = (files: ProjectFile[], basePath = '') => {
    return (
      <ul className="pl-4">
        {files.map((file, index) => {
          const path = `${basePath}/${file.name}`
          const isExpanded = expandedFolders[path]

          return (
            <li key={index} className="py-1">
              {file.type === 'folder' ? (
                <div>
                  <button
                    onClick={() => toggleFolder(path)}
                    className="flex items-center text-left hover:text-blue-400 transition-colors"
                  >
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4 mr-1 text-zinc-400" />
                    ) : (
                      <ChevronRight className="h-4 w-4 mr-1 text-zinc-400" />
                    )}
                    <span className="text-yellow-300 mr-1">📂</span>
                    <span>{file.name}</span>
                  </button>
                  {isExpanded &&
                    file.children &&
                    renderFileTree(file.children, path)}
                </div>
              ) : (
                <div className="flex items-center pl-5">
                  <span className="text-blue-300 mr-1">📝</span>
                  <span className="text-zinc-300">{file.name}</span>
                </div>
              )}
            </li>
          )
        })}
      </ul>
    )
  }

  const getMethodColor = (method: string) => {
    switch (method) {
      case 'GET':
        return 'text-green-400'
      case 'POST':
        return 'text-blue-400'
      case 'PUT':
        return 'text-amber-400'
      case 'DELETE':
        return 'text-red-400'
      default:
        return 'text-purple-400'
    }
  }

  return (
    <section id="projects" className="bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 font-mono">
            <span className="sr-only">Projects</span>
            <span aria-hidden="true">
              <span className="text-[#569cd6]">const</span>{' '}
              <span className="text-[#4ec9b0]">projects</span>{' '}
              <span className="text-white">=</span>{' '}
              <span className="text-[#dcdcaa]">getProjects</span>
              <span className="text-white">();</span>
            </span>
          </h2>
          <p className="text-zinc-400 font-mono">
            // Click on projects for more details
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
              className={`text-sm capitalize ${
                selectedCategory === category
                  ? 'bg-[#007acc] hover:bg-[#0062a3] text-white'
                  : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white'
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2 auto-rows-fr"
        >
          <AnimatePresence>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <Card className="overflow-hidden bg-zinc-900 cursor-pointer hover:border-blue-500 transition-colors h-[320px]">
                      <CardContent className="p-6 font-mono h-full flex flex-col">
                        <pre className="text-sm whitespace-pre-wrap flex-1 overflow-hidden">
                          <code>
                            <span className="text-zinc-400">{'{'}</span>
                            <div className="pl-4">
                              <span className="text-[#9cdcfe]">"project"</span>
                              <span className="text-zinc-400">: </span>
                              <span className="text-[#ce9178]">
                                "{work.title}"
                              </span>
                              <span className="text-zinc-400">,</span>
                            </div>
                            <div className="pl-4">
                              <span className="text-[#9cdcfe]">
                                "description"
                              </span>
                              <span className="text-zinc-400">: </span>
                              <span className="text-[#ce9178]">
                                "
                                {work.description.length > 60
                                  ? work.description.substring(0, 60) + '...'
                                  : work.description}
                                "
                              </span>
                              <span className="text-zinc-400">,</span>
                            </div>
                            <div className="pl-4">
                              <span className="text-[#9cdcfe]">
                                "techStack"
                              </span>
                              <span className="text-zinc-400">: [</span>
                              <span className="text-[#ce9178]">
                                "{work.tags.slice(0, 3).join('", "')}
                                {work.tags.length > 3 ? '", ...' : '"'}
                              </span>
                              <span className="text-zinc-400">]</span>
                              <span className="text-zinc-400">,</span>
                            </div>
                            <div className="pl-4">
                              <span className="text-[#9cdcfe]">
                                "repository"
                              </span>
                              <span className="text-zinc-400">: </span>
                              <span className="text-[#ce9178]">
                                "
                                {work.repository ? 'github.com/...' : 'private'}
                                "
                              </span>
                              <span className="text-zinc-400">,</span>
                            </div>
                            <div className="pl-4">
                              <span className="text-[#9cdcfe]">"status"</span>
                              <span className="text-zinc-400">: </span>
                              <span className="text-[#ce9178]">
                                "{work.status}"
                              </span>
                            </div>
                            {work.endpoints && (
                              <div className="pl-4">
                                <span className="text-[#9cdcfe]">
                                  "endpoints"
                                </span>
                                <span className="text-zinc-400">: [</span>
                                <div className="pl-4">
                                  {work.endpoints
                                    .slice(0, 2)
                                    .map((endpoint, i) => (
                                      <div key={i}>
                                        <span className="text-zinc-400">
                                          {'{'}
                                        </span>
                                        <span className="text-[#9cdcfe]">
                                          "method"
                                        </span>
                                        <span className="text-zinc-400">
                                          :{' '}
                                        </span>
                                        <span
                                          className={`${getMethodColor(
                                            endpoint.method
                                          )}`}
                                        >
                                          "{endpoint.method}"
                                        </span>
                                        <span className="text-zinc-400">
                                          ,{' '}
                                        </span>
                                        <span className="text-[#9cdcfe]">
                                          "route"
                                        </span>
                                        <span className="text-zinc-400">
                                          :{' '}
                                        </span>
                                        <span className="text-[#ce9178]">
                                          "{endpoint.route}"
                                        </span>
                                        <span className="text-zinc-400">
                                          {'}'}
                                        </span>
                                      </div>
                                    ))}
                                  {work.endpoints.length > 2 && (
                                    <div>
                                      <span className="text-zinc-400">
                                        // + {work.endpoints.length - 2} more...
                                      </span>
                                    </div>
                                  )}
                                </div>
                                <span className="text-zinc-400">]</span>
                              </div>
                            )}
                            <span className="text-zinc-400">{'}'}</span>
                          </code>
                        </pre>
                      </CardContent>
                    </Card>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[900px] bg-zinc-900 border-zinc-700 text-white p-0 max-h-[90vh] overflow-y-auto">
                    <DialogHeader className="px-6 pt-6 pb-2 flex flex-row items-center justify-between">
                      <DialogTitle className="text-2xl font-bold text-white">
                        {work.title}
                      </DialogTitle>
                    </DialogHeader>
                    <Tabs defaultValue="description" className="w-full">
                      <div className="border-b border-zinc-700">
                        <TabsList className="bg-zinc-800 w-full justify-start rounded-none px-6">
                          <TabsTrigger
                            value="description"
                            className="data-[state=active]:bg-zinc-700"
                          >
                            Description
                          </TabsTrigger>
                          {work.endpoints && (
                            <TabsTrigger
                              value="endpoints"
                              className="data-[state=active]:bg-zinc-700"
                            >
                              Endpoints
                            </TabsTrigger>
                          )}
                        </TabsList>
                      </div>

                      <div className="p-6">
                        <TabsContent value="description" className="mt-0">
                          <div className="flex flex-col gap-6">
                            <div>
                               <h3 className="text-xl font-semibold mb-4">
                                 About the Project
                               </h3>
                              <p className="text-zinc-300 whitespace-pre-line">
                                {work.longDescription}
                              </p>
                            </div>
                            <div>
                              <h4 className="text-lg font-medium mb-3">
                                Technologies
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {work.tags.map((tag, index) => (
                                  <span
                                    key={index}
                                    className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-start justify-between flex-wrap gap-4">
                              <div>
                                <h4 className="text-lg font-medium mb-1">
                                  Status
                                </h4>
                                <span className="text-lg">{work.status}</span>
                              </div>
                              <div className="flex items-center gap-3 flex-wrap">
                                {work.liveUrl && (
                                  <a
                                    href={work.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md transition-colors"
                                  >
                                    <ExternalLink className="h-4 w-4" />
                                    <span>View Live Demo</span>
                                  </a>
                                )}
                                {work.repository && (
                                  <a
                                    href={work.repository}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 px-4 py-2 rounded-md transition-colors"
                                  >
                                    <Github className="h-4 w-4" />
                                    <span>View Repository</span>
                                    <ExternalLink className="h-3 w-3" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                        {work.endpoints && (
                          <TabsContent value="endpoints" className="mt-0">
                            <div className="flex flex-col gap-4">
                              <h3 className="text-xl font-semibold">
                                API Endpoints
                              </h3>
                              <div className="bg-zinc-950 rounded-lg overflow-hidden">
                                <div className="bg-zinc-800 px-4 py-2 text-sm font-mono border-b border-zinc-700">
                                  <span>Available Endpoints</span>
                                </div>
                                <div className="p-4 overflow-x-auto">
                                  <table className="w-full border-collapse">
                                    <thead>
                                      <tr className="border-b border-zinc-800">
                                        <th className="text-left py-2 px-4 text-zinc-400">
                                          Method
                                        </th>
                                        <th className="text-left py-2 px-4 text-zinc-400">
                                          Route
                                        </th>
                                        <th className="text-left py-2 px-4 text-zinc-400">
                                          Description
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {work.endpoints.map((endpoint, index) => (
                                        <tr
                                          key={index}
                                          className="border-b border-zinc-800 hover:bg-zinc-900"
                                        >
                                          <td className="py-2 px-4">
                                            <span
                                              className={`font-bold ${getMethodColor(
                                                endpoint.method
                                              )}`}
                                            >
                                              {endpoint.method}
                                            </span>
                                          </td>
                                          <td className="py-2 px-4 font-mono text-zinc-300">
                                            {endpoint.route}
                                          </td>
                                          <td className="py-2 px-4 text-zinc-400">
                                            {endpoint.description || '—'}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        )}
                      </div>
                    </Tabs>
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

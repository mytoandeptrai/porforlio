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
      title: 'Cross-chain Bridge (Non-custodial)',
      category: 'blockchain',
      year: '2025-2026',
      description:
        'Non-custodial cross-chain bridge with on-chain multisig approval, a Go relay and real-time order tracking',
      longDescription: `Designed and launched a non-custodial cross-chain bridge between two blockchain networks, overseeing development from smart contract architecture to UI delivery within 5 months.

Key Responsibilities:
- Engineered the core bridge contract with enhanced security features and economic outflow management
- Built a liquidity pool contract that enforces transfer caps without disrupting concurrent transactions
- Developed an on-chain approval workflow with Gnosis Safe integration and a signing UI
- Delivered a bridge UI with direct contract interaction and real-time order tracking
- Hardened the Go relay: resumable orders after RPC failures, pause-state guards and refund reconciliation
- Built operator tooling: de-duplicated low-balance and multisig alert emails, treasury views and fund-provenance reports`,
      tags: ['Solidity', 'UUPS Proxy', 'Gnosis Safe', 'EIP-712', 'GoLang', 'Next.js', 'Wagmi v2'],
      status: '🔴 Private',
    },
    {
      id: 2,
      title: 'Cross-chain ERC-20 Token Migration Portal',
      category: 'blockchain',
      year: '2025-2026',
      description:
        'One-way, time-boxed portal that migrates ERC-20 tokens to a successor chain with multisig review of large orders',
      longDescription: `Built a one-way, time-boxed portal that migrates multiple ERC-20 tokens from one chain to its successor chain. Users lock tokens on the source chain and the relayer releases them from a pre-funded pool on the target chain.

Key Responsibilities:
- Worked across all layers: contracts, Go relay and admin backend, event indexer, user dApp and admin portal
- Implemented contract rules for a large-order threshold, refund and multisig review roles, and migration end-time guards
- Routed large orders to Gnosis Safe multisig review with automatic refund on rejection
- Added a manual-processing path after repeated release failures
- Introduced versioned SQL migrations
- Split the backend into eight independent repositories with PR and release pipelines`,
      tags: ['Solidity', 'Foundry', 'GoLang', 'rindexer', 'Next.js', 'React', 'Gnosis Safe'],
      status: '🔴 Private',
    },
    {
      id: 3,
      title: 'Multi-chain Stablecoin Platform',
      category: 'blockchain',
      year: '2025-2026',
      description:
        'Event-driven stablecoin platform with mint and redeem flows, KYC/KYB, multisig signing and real-time notifications',
      longDescription: `Built an event-driven microservices platform for a multi-chain stablecoin supporting EVM and non-EVM chains (Ethereum, Arbitrum, QDay, Abelian), working directly with a Hong Kong-based client.

Key Responsibilities:
- Developed an event-driven architecture with Kafka (per-chain topics) and a multi-chain Blockchain Crawler for minting and transactions
- Implemented mint and redeem flows end to end: request lifecycle, fees, order expiry and treasury operations
- Signed transactions with AWS KMS and prevented nonce collisions between parallel workers with database-level wallet locking
- Integrated Sumsub for KYC/KYB with post-approval onboarding
- Implemented JWT-based SSO with token refresh and 2FA across services
- Created a Gnosis Safe multisig signing UI in the Admin portal using EIP-712
- Integrated wallet risk screening and rate limiting to secure mint and redeem requests
- Designed a real-time notification layer with Socket.IO and Redis`,
      tags: ['Kafka', 'NestJS', 'Gnosis Safe', 'EIP-712', 'JWT', 'Socket.IO', 'Redis', 'Sumsub', 'AWS KMS'],
      status: '🔴 Private',
    },
    {
      id: 4,
      title: 'Crypto Payment Platform',
      category: 'blockchain',
      year: '2025-2026',
      description:
        'End-to-end crypto payment platform with webhook-based notifications, SDKs and API documentation',
      longDescription: `Led end-to-end development of a crypto payment platform, collaborating with customers to gather requirements and propose technical solutions.

Key Responsibilities:
- Defined frontend architecture standards and guided implementation
- Created Figma wireframes to validate concepts with customers
- Designed payment flows with frontend and backend engineers, including integration diagrams and webhook-based notifications
- Assisted Golang backend development by fixing bugs
- Built SDKs and API documentation with Fern`,
      tags: ['Vite.js', 'TypeScript', 'Figma', 'GoLang', 'Fern'],
      status: '🔴 Private',
    },
    {
      id: 5,
      title: 'NFT Minting DApp',
      category: 'blockchain',
      year: '2025',
      description:
        'NFT minting platform deployed on Avalanche blockchain with Thirdweb SDK integration',
      longDescription: `Developed a responsive NFT minting platform deployed on the Avalanche blockchain, featuring ERC-1155 smart contracts and a complete CI/CD pipeline.

Key Responsibilities:
- Deployed an ERC-1155 contract on Avalanche with Thirdweb CLI
- Integrated the Thirdweb SDK for wallet connection and minting
- Built a responsive minting interface with React, Shadcn-UI and Tailwind CSS
- Added Google Analytics to track user interactions
- Configured Nginx, Docker and GitLab CI/CD to automate AWS EC2 deployment`,
      tags: ['React', 'TypeScript', 'ERC-1155', 'Thirdweb', 'Avalanche', 'Tailwind CSS', 'Docker', 'AWS'],
      status: '🔴 Private',
    },
    {
      id: 6,
      title: 'Stock Exchange Platform',
      category: 'fullstack',
      year: '2024-2025',
      description:
        'Micro-frontend stock trading platform with real-time order book and advanced TradingView integration',
      longDescription: `Established and maintained a micro-frontend architecture for a stock exchange platform, integrating with legacy systems and featuring real-time trading and advanced charting.

Key Responsibilities:
- Established the micro-frontend architecture with React, Webpack 5 and TypeScript
- Defined frontend standards and conducted implementation reviews
- Spearheaded TradingView chart customizations
- Implemented a real-time order book via MQTT
- Optimized frontend performance with web workers and caching
- Worked with backend teams on API integration and frontend security`,
      tags: ['React', 'TypeScript', 'Webpack 5', 'TradingView', 'MQTT', 'Web Workers'],
      status: '🔴 Private',
    },
    {
      id: 7,
      title: 'MSPF - Image Analysis (IVA)',
      category: 'frontend',
      year: '2022-2024',
      description:
        'Multi Service Platform for image analysis with dynamic forms, multi-chart visualizations and Dockerized delivery',
      longDescription: `Frontend work on the image analysis service of a Multi Service Platform at Hitachi Digital Services.

Key Responsibilities:
- Clarified requirements with customers, assigned tasks and conducted implementation reviews
- Packaged source code with Docker for client delivery
- Engineered UI features including dynamic forms and multi-chart visualizations
- Wrote Jest unit tests and supported automation testing`,
      tags: ['React', 'Next.js', 'Docker', 'Jest', 'Selenium', 'Python'],
      status: '🔴 Private',
    },
    {
      id: 8,
      title: 'MSPF - Video Multi Service (VMS)',
      category: 'frontend',
      year: '2022-2024',
      description:
        'Multi Service Platform for video with HLS playback, custom API handling and legacy screen fixes',
      longDescription: `Frontend work on the video service of a Multi Service Platform at Hitachi Digital Services.

Key Responsibilities:
- Translated client design documents into development tasks
- Built video playback features using HLS
- Implemented custom API handling
- Fixed bugs in legacy screens`,
      tags: ['HLS', 'JavaScript', 'React'],
      status: '🔴 Private',
    },
    {
      id: 9,
      title: 'E-Learning Platform',
      category: 'fullstack',
      year: '2024',
      description:
        'E-learning admin and fullstack features with automated GitLab CI/CD deployment on AWS',
      longDescription: `Contributed to an e-learning platform, from refining requirements to deployment.

Key Responsibilities:
- Refined requirements with business analysts
- Established the Next.js admin codebase for course data
- Contributed to fullstack features
- Implemented a GitLab CI/CD pipeline for automated deployment on AWS EC2
- Used AWS S3 for file storage`,
      tags: ['Next.js', 'GitLab CI/CD', 'AWS EC2', 'AWS S3'],
      status: '🔴 Private',
    },
    {
      id: 10,
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
      id: 11,
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
      id: 12,
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
    <section id="projects" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4 font-mono">
            <span className="sr-only">Projects</span>
            <span aria-hidden="true">
              <span className="text-[#0000ff] dark:text-[#569cd6]">const</span>{' '}
              <span className="text-[#267f99] dark:text-[#4ec9b0]">projects</span>{' '}
              <span className="text-foreground">=</span>{' '}
              <span className="text-[#795e26] dark:text-[#dcdcaa]">getProjects</span>
              <span className="text-foreground">();</span>
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 font-mono">
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
                  : 'bg-zinc-200 text-zinc-700 hover:bg-zinc-300 hover:text-black dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700 dark:hover:text-white'
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
                    <Card className="dark overflow-hidden bg-zinc-900 cursor-pointer hover:border-blue-500 transition-colors h-[320px]">
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
                  <DialogContent className="dark sm:max-w-[900px] bg-zinc-900 border-zinc-700 text-white p-0 max-h-[90vh] overflow-y-auto">
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

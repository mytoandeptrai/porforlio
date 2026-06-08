'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

type Skill = {
  name: string
  category: string
  icon: string
}

export default function TechStack() {
  const [filter, setFilter] = useState<string>('all')
  // const [dateString, setDateString] = useState("YYYY-MM-DD")

  // // Update date string on client-side only
  // useEffect(() => {
  //   setDateString(new Date().toISOString().split("T")[0])
  // }, [])

  const skills: Skill[] = [
    // Languages
    {
      name: 'TypeScript',
      category: 'language',
      icon: 'TS',
    },
    {
      name: 'JavaScript',
      category: 'language',
      icon: 'JS',
    },
    {
      name: 'GoLang',
      category: 'language',
      icon: 'GO',
    },
    {
      name: 'Solidity',
      category: 'language',
      icon: 'SOL',
    },

    // Frontend
    {
      name: 'React',
      category: 'frontend',
      icon: 'REACT',
    },
    {
      name: 'Next.js',
      category: 'frontend',
      icon: 'NEXT',
    },
    {
      name: 'Vite',
      category: 'frontend',
      icon: 'VITE',
    },
    {
      name: 'Redux',
      category: 'frontend',
      icon: 'REDUX',
    },
    {
      name: 'Zustand',
      category: 'frontend',
      icon: 'ZUST',
    },
    {
      name: 'TanStack Query',
      category: 'frontend',
      icon: 'TQ',
    },
    {
      name: 'Shadcn',
      category: 'frontend',
      icon: 'SHAD',
    },
    {
      name: 'TailwindCSS',
      category: 'frontend',
      icon: 'TW',
    },
    {
      name: 'Material UI',
      category: 'frontend',
      icon: 'MUI',
    },
    {
      name: 'Framer Motion',
      category: 'frontend',
      icon: 'FM',
    },

    // Backend
    {
      name: 'Node.js',
      category: 'backend',
      icon: 'NODE',
    },
    {
      name: 'NestJS',
      category: 'backend',
      icon: 'NEST',
    },
    {
      name: 'Express',
      category: 'backend',
      icon: 'EXP',
    },
    {
      name: 'Docker',
      category: 'backend',
      icon: 'DOC',
    },

    // Database
    {
      name: 'MongoDB',
      category: 'database',
      icon: 'MONGO',
    },
    {
      name: 'PostgreSQL',
      category: 'database',
      icon: 'PG',
    },
    {
      name: 'MySQL',
      category: 'database',
      icon: 'SQL',
    },
    {
      name: 'Redis',
      category: 'database',
      icon: 'REDIS',
    },

    // Cloud & DevOps
    {
      name: 'AWS',
      category: 'cloud',
      icon: 'AWS',
    },
    {
      name: 'Nginx',
      category: 'cloud',
      icon: 'NGX',
    },
    {
      name: 'GitLab CI/CD',
      category: 'cloud',
      icon: 'CICD',
    },

    // Tools
    {
      name: 'Git',
      category: 'tools',
      icon: 'GIT',
    },
    {
      name: 'Jira',
      category: 'tools',
      icon: 'JIRA',
    },
    {
      name: 'Figma',
      category: 'tools',
      icon: 'FIG',
    },
    {
      name: 'Jest',
      category: 'tools',
      icon: 'JEST',
    },
    {
      name: 'Webpack',
      category: 'tools',
      icon: 'WP',
    },
    {
      name: 'Selenium',
      category: 'tools',
      icon: 'SEL',
    },
  ]

  const categories = [
    { id: 'language', name: 'Languages' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'database', name: 'Database' },
    { id: 'cloud', name: 'Cloud & DevOps' },
    { id: 'tools', name: 'Tools' },
    { id: 'all', name: 'All' },
  ]

  const filteredSkills =
    filter !== 'all'
      ? skills.filter((skill) => skill.category === filter)
      : skills

  return (
    <section id="tech-stack" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl"
        >
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold mb-2 font-mono">
              <span className="sr-only">Tech Stack & Skills</span>
              <span aria-hidden="true">
                <span className="text-[#569cd6]">const</span>{' '}
                <span className="text-[#4ec9b0]">techStack</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-[#dcdcaa]">getSkills</span>
                <span className="text-white">();</span>
              </span>
            </h2>
          </div>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded font-mono text-sm ${
                  filter === category.id
                    ? 'bg-[#007acc] text-white'
                    : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-4 hover:border-[#007acc] transition-colors">
                  <div className="flex items-center">
                    <div className="w-10 h-10 flex items-center justify-center bg-zinc-800 rounded-md mr-3 text-xs font-mono text-[#569cd6]">
                      {skill.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <h3 className="font-mono text-white">{skill.name}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center font-mono text-xs text-zinc-400">
            <code>/* Skills last updated: 03-02-2026 */</code>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

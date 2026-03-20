'use client'

import { Badge } from '@/components/ui/badge'
import { motion } from 'framer-motion'

interface Experience {
  id: string
  company: string
  position: string
  period: string
  description: string
  technologies: string[]
  isActive?: boolean
  achievements?: string[]
}

const experiences: Experience[] = [
  {
    id: '1',
    company: 'Var Meta',
    position: 'Frontend Developer & Leader',
    period: 'Mar 2024 - Present',
    description:
      'Led technical discussions with clients and guided frontend team in developing high-quality web applications using modern technologies.',
    technologies: [
      'React',
      'Vite',
      'Next.js',
      'TypeScript',
      'Zustand',
      'TanStack Query',
      'Shadcn',
      'NestJS',
      'GoLang',
      'PostgreSQL',
      'Redis',
      'Solidity',
      'Figma',
      'Mqtt',
      'BullMQ',
    ],
    isActive: true,
    achievements: [
      'Led technical discussions with clients to analyze requirements and propose high-level design solutions',
      'Mentored and coached junior frontend developers through code reviews and architecture guidance',
      'Established and enforced coding standards, reducing technical debt and improving code consistency',
      'Executed sprint commitments in Agile/Scrum environment, ensuring alignment with technical designs',
    ],
  },
  {
    id: '2',
    company: 'VTI Academy',
    position: 'Frontend Instructor',
    period: 'Jan 2024 - Dec 2024',
    description:
      'Designed and delivered structured frontend curriculum, guiding students through hands-on projects and real-world development workflows.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
    ],
    achievements: [
      'Designed and delivered structured frontend curriculum covering HTML, CSS, JavaScript, TypeScript, React, and Next.js',
      'Guided students through hands-on projects including component design, state management, and performance optimization',
      'Achieved high course satisfaction (~85%) supporting career readiness and practical skill development',
    ],
  },
  {
    id: '3',
    company: 'Hitachi Digital Services',
    position: 'Software Engineer (Developer, Sub Leader)',
    period: 'Jan 2022 - Mar 2024',
    description:
      'Collaborated with clients to analyze requirements and led small development team in Waterfall-based projects.',
    technologies: [
      'React',
      'TypeScript',
      'Next.js',
      'NodeJS',
      'Express',
      'NestJS',
      'Jest',
      'Selenium',
      'Redmine',
      'Jira',
      'SVN',
      'Git',
    ],
    achievements: [
      'Worked closely with clients and internal teams to analyze requirements and translate them into technical tasks',
      'Acted as sub-leader for development team, assigning tasks and ensuring deliverables met project expectations',
      'Took ownership of task breakdown and estimation using Redmine/Jira for stable delivery',
      'Worked on projects following Waterfall development process with focus on quality standards',
    ],
  },
]

export default function WorkExperience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="space-y-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Header */}
          <div className="text-center space-y-6">
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold font-mono">
                <span className="text-[#569cd6]">const</span>{' '}
                <span className="text-[#4ec9b0]">Experience</span>{' '}
                <span className="text-white">=</span>{' '}
                <span className="text-[#dcdcaa]">getExperience</span>
                <span className="text-white">();</span>
              </h2>
            </motion.div>

            <motion.div
              className="inline-block text-sm text-muted-foreground font-mono bg-zinc-900 border border-zinc-700 px-3 py-2 rounded-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="text-green-500">2022</span> —{' '}
              <span className="text-purple-500">{new Date().getFullYear()}</span>
            </motion.div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500 via-blue-500 to-green-500 opacity-30" />

            <div className="space-y-12">
              {experiences.map((job, index) => (
                <motion.div
                  key={job.id}
                  className="group relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Timeline point */}
                  <div className="absolute left-6 top-8 w-4 h-4 rounded-full bg-zinc-900 border-2 border-purple-500 group-hover:border-green-500 transition-colors duration-300 z-10" />

                  {/* Experience card */}
                  <div className="ml-20 bg-zinc-900/50 border border-zinc-700 rounded-lg p-6 hover:bg-zinc-900/70 hover:border-zinc-600 transition-all duration-300">
                    {/* Card header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-semibold group-hover:text-purple-400 transition-colors">
                            {job.position}
                          </h3>
                          {job.isActive && (
                            <Badge
                              variant="outline"
                              className="bg-green-500/10 border-green-500/50 text-green-400"
                            >
                              Current
                            </Badge>
                          )}
                        </div>
                        <div className="text-muted-foreground font-mono text-sm mb-2">
                          <span className="text-blue-400">{job.company}</span>
                        </div>
                        <div className="text-xs font-mono text-zinc-500">
                          {job.period}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
                      {job.description}
                    </p>

                    {/* Main Activities */}
                    {job.achievements && (
                      <div className="mb-4">
                        <ul className="space-y-2">
                          {job.achievements.map(
                            (achievement, achievementIndex) => (
                              <motion.li
                                key={achievementIndex}
                                className="text-sm text-muted-foreground"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                  duration: 0.3,
                                  delay: achievementIndex * 0.1,
                                }}
                                viewport={{ once: true }}
                              >
                                • {achievement}
                              </motion.li>
                            )
                          )}
                        </ul>
                      </div>
                    )}

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          className="px-2 py-1 text-xs bg-zinc-800 border border-zinc-600 rounded font-mono hover:border-purple-500/50 transition-colors"
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: techIndex * 0.05,
                          }}
                          viewport={{ once: true }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

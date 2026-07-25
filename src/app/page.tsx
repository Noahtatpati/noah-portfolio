'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Mail } from 'lucide-react';
import { useState } from 'react';
import { projects, resume } from '@/data/portfolio';
import { Header } from '@/components/Header';
import { FadeIn, Stagger, StaggerChild } from '@/components/Motion';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

const experienceTabs = ['Experience', 'Skills', 'Education', 'Achievements'] as const;
type Tab = (typeof experienceTabs)[number];

const techStack = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Tailwind CSS', 'PostgreSQL', 'Firebase', 'LangChain',
  'OpenAI API', 'Git', 'Docker'
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<Tab>('Experience');

  return (
    <>
      <Header />

      <main className="bg-base-50">
        {/* Hero */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 pb-8 sm:pb-12">
          <div className="grid grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="col-span-12 lg:col-span-6">
              <FadeIn direction="up">
                <div className="flex items-center gap-2 mb-4 sm:mb-5">
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="font-heading text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    Generative AI Developer
                  </span>
                </div>
                <h1 className="font-heading text-[2.5rem] sm:text-[clamp(3rem,5.5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.03em] text-base-950 m-0 mb-5 sm:mb-6">
                  NOAH<br />
                  MOHANDAS<br />
                  <span className="text-accent">TATPATI</span>
                </h1>
                <p className="text-base-500 text-base sm:text-lg leading-relaxed max-w-md mb-6 sm:mb-8">
                  I build AI-powered products and engineering-driven solutions that solve real-world problems.
                </p>
                <div className="flex flex-wrap gap-3 mb-6 sm:mb-8">
                  <motion.a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-accent text-white rounded-full text-sm font-semibold hover:bg-accent-dark transition-colors duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View My Work
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/drive/folders/1PnS1XSy558C5zcom8Vrm1wwhm0yk1qrz?usp=sharing"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 border border-base-300 text-base-800 rounded-full text-sm font-semibold hover:border-base-400 hover:bg-base-100 transition-colors duration-200"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Download Resume
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1v10M3 7l4 4 4-4M1 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </motion.a>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="text-xs sm:text-sm text-base-400">Find me on</span>
                  <a href={resume.github} target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-base-900 flex items-center justify-center text-white hover:bg-base-800 transition-all duration-200" aria-label="GitHub">
                    <GithubIcon size={16} />
                  </a>
                  <a href={resume.linkedin} target="_blank" rel="noreferrer" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0A66C2] flex items-center justify-center text-white hover:bg-[#0958a8] transition-all duration-200" aria-label="LinkedIn">
                    <LinkedinIcon size={16} />
                  </a>
                  <a href="mailto:nmtatpati@gmail.com" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-base-200 flex items-center justify-center text-base-600 hover:bg-base-300 transition-all duration-200 cursor-pointer" aria-label="Email" onClick={(e) => { window.location.href = 'mailto:nmtatpati@gmail.com'; e.preventDefault(); }}>
                    <Mail size={16} />
                  </a>
                </div>
              </FadeIn>
            </div>

            <div className="col-span-12 lg:col-span-6 relative">
              <FadeIn direction="up" delay={0.15}>
                <div className="relative w-full max-w-[280px] sm:max-w-lg mx-auto aspect-square flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/8 via-transparent to-accent/5 rounded-full blur-3xl" />
                  <Image
                    src="/assets/logo.png"
                    alt="3D Logo"
                    width={420}
                    height={420}
                    className="relative z-10 drop-shadow-2xl w-full h-auto"
                    priority
                  />
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeIn direction="up" delay={0.4}>
            <div className="flex justify-center mt-6 sm:mt-8">
              <div className="flex items-center gap-2 text-[10px] sm:text-xs text-base-400">
                <div className="w-4 h-7 sm:w-5 sm:h-8 border-2 border-base-300 rounded-full flex justify-center pt-1">
                  <motion.div
                    className="w-1 h-1.5 sm:w-1 sm:h-2 bg-base-400 rounded-full"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </div>
                Scroll to explore
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Featured Projects */}
        <section id="projects" className="max-w-7xl mx-auto px-5 sm:px-6 py-12 sm:py-16">
          <FadeIn direction="up">
            <div className="mb-6 sm:mb-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="font-heading text-[10px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-accent">Featured Projects</span>
              </div>
            </div>
          </FadeIn>

          <Stagger staggerDelay={0.12}>
            <div className="grid gap-4 sm:gap-5">
              {projects.map((project) => (
                <StaggerChild key={project.slug}>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group block bg-white border border-base-200 rounded-xl sm:rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-12 min-h-0 sm:min-h-[200px]">
                      <div className="relative h-48 sm:h-auto sm:col-span-5 bg-gradient-to-br from-base-100 to-base-200 overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="sm:col-span-7 p-4 sm:p-5 md:p-6 flex flex-col justify-center">
                        <h3 className="font-heading text-lg sm:text-xl font-bold text-base-950 m-0 mb-2">{project.title}</h3>
                        <p className="text-xs sm:text-sm text-base-400 leading-relaxed m-0 mb-3 sm:mb-4 line-clamp-2">{project.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1.5">
                            {project.techList.slice(0, 3).map((tech) => (
                              <span key={tech} className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-base-100 rounded text-[10px] sm:text-[11px] font-medium text-base-500">
                                {tech}
                              </span>
                            ))}
                            {project.techList.length > 3 && (
                              <span className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-base-100 rounded text-[10px] sm:text-[11px] font-medium text-base-400">
                                +{project.techList.length - 3}
                              </span>
                            )}
                          </div>
                          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-accent flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-200">
                            <ArrowUpRight size={14} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </StaggerChild>
              ))}
            </div>
          </Stagger>
        </section>

        {/* Bottom Section: About + Experience + Tech Stack */}
        <section className="max-w-7xl mx-auto px-5 sm:px-6 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5">
            {/* About Me */}
            <div className="sm:col-span-4">
              <FadeIn direction="up" className="h-full">
                <div id="about" className="bg-white border border-base-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h2 className="font-heading text-sm font-bold text-base-950 m-0 uppercase tracking-wider mb-3 sm:mb-4">About Me</h2>
                    <p className="text-xs sm:text-sm text-base-500 leading-relaxed mb-4 sm:mb-5 flex-1">{resume.summary}</p>
                    <a href="#resume" className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-accent hover:text-accent-dark transition-colors duration-200">
                      Read more about me
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Experience Tabs */}
            <div className="sm:col-span-4">
              <FadeIn direction="up" delay={0.1} className="h-full">
                <div id="experience" className="bg-white border border-base-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="flex border-b border-base-200 overflow-x-auto">
                    {experienceTabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 px-2.5 sm:px-3 py-2.5 sm:py-3 text-[10px] sm:text-xs font-semibold transition-colors duration-200 relative cursor-pointer whitespace-nowrap ${
                          activeTab === tab ? 'text-accent' : 'text-base-400 hover:text-base-600'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                            transition={{ duration: 0.2, ease: [0, 0, 0.2, 1] }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="p-4 sm:p-5 md:p-6 flex-1 min-h-[180px] sm:min-h-[220px]">
                    <AnimatePresence mode="wait">
                      {activeTab === 'Experience' && (
                        <motion.div key="exp" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="space-y-4 sm:space-y-5">
                          {resume.experience.map((item, i) => (
                            <div key={item.role} className="flex gap-2.5 sm:gap-3">
                              <div className="flex flex-col items-center">
                                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-accent mt-1.5" />
                                {i < resume.experience.length - 1 && <div className="w-px flex-1 bg-base-200 mt-1" />}
                              </div>
                              <div className="pb-1 sm:pb-2">
                                <div className="flex items-center gap-1.5 sm:gap-2">
                                  <p className="text-xs sm:text-sm font-semibold text-base-900 m-0">{item.role}</p>
                                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none" className="text-base-300 shrink-0 hidden sm:block"><path d="M3.5 2H10V8.5M10 2L2 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                </div>
                                <p className="text-[10px] sm:text-xs text-base-400 mt-0.5">{item.timeline}</p>
                                <p className="text-[10px] sm:text-xs text-base-500 mt-1 sm:mt-1.5 leading-relaxed">{item.highlights[0]}</p>
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      {activeTab === 'Skills' && (
                        <motion.div key="skills" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="space-y-3 sm:space-y-4">
                          {Object.entries(resume.skills).map(([category, items]) => (
                            <div key={category}>
                              <p className="text-[10px] sm:text-xs font-semibold text-base-600 uppercase tracking-wider mb-1.5 sm:mb-2">{category}</p>
                              <div className="flex flex-wrap gap-1 sm:gap-1.5">
                                {items.map((s) => (
                                  <span key={s} className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-base-100 rounded-md text-[10px] sm:text-xs font-medium text-base-600">{s}</span>
                                ))}
                              </div>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      {activeTab === 'Education' && (
                        <motion.div key="edu" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                          {resume.education.map((item) => (
                            <div key={item.program}>
                              <p className="text-xs sm:text-sm font-semibold text-base-900 m-0">{item.program}</p>
                              <p className="text-[10px] sm:text-xs text-base-400 mt-1">{item.institution} · {item.timeline}</p>
                              <p className="text-[10px] sm:text-xs text-base-500 mt-1.5 sm:mt-2 leading-relaxed">{item.details}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                      {activeTab === 'Achievements' && (
                        <motion.div key="ach" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }} className="space-y-2.5 sm:space-y-3">
                          {resume.achievements.map((item) => (
                            <div key={item} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                              <p className="text-[10px] sm:text-xs text-base-500 leading-relaxed m-0">{item}</p>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Tech Stack */}
            <div className="sm:col-span-4">
              <FadeIn direction="up" delay={0.2} className="h-full">
                <div className="bg-white border border-base-200 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden h-full flex flex-col">
                  <div className="p-5 sm:p-6 flex flex-col flex-1">
                    <h3 className="font-heading text-sm font-bold text-base-950 m-0 uppercase tracking-wider mb-3 sm:mb-4">Tech Stack</h3>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 flex-1 content-start">
                      {techStack.map((tech) => (
                        <span key={tech} className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-base-50 border border-base-200 rounded-full text-[10px] sm:text-xs font-medium text-base-600 hover:border-accent hover:text-accent transition-colors duration-200 cursor-default">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

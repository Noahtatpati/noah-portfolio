'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ExternalLink, Lightbulb, List, Map, Target, TriangleAlert } from 'lucide-react';
import { GithubIcon } from '@/components/Icons';
import { getProjectBySlug } from '@/data/portfolio';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FadeIn, Stagger, StaggerChild } from '@/components/Motion';

export function ProjectContent({ slug }: { slug: string }) {
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold text-base-950">Project not found</h1>
            <Link href="/" className="inline-flex items-center gap-2 mt-4 text-accent hover:underline">
              <ArrowLeft size={16} /> Back to portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0, 0, 0.2, 1] }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-base-400 hover:text-base-950 transition-colors duration-200 mb-8"
            >
              <ArrowLeft size={14} />
              Back to Portfolio
            </Link>
          </motion.div>

          <FadeIn direction="up">
            <div className="flex flex-wrap gap-3 items-center mb-4">
              <span className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                {project.category.split(' • ')[0]}
              </span>
              <span className="w-1 h-1 rounded-full bg-base-300" />
              <span className="text-xs text-base-400 font-medium">{project.status}</span>
            </div>
            <h1 className="font-heading text-[clamp(2.25rem,4vw,3.75rem)] font-bold tracking-[-0.03em] text-base-950 m-0">
              {project.title}
            </h1>
            <p className="text-lg text-base-500 font-medium mt-2 m-0">{project.subtitle}</p>
          </FadeIn>

          <FadeIn direction="up" delay={0.15}>
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-base-100 my-10 shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </FadeIn>

          <div className="space-y-16">
            <FadeIn direction="up">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <List size={18} className="text-accent" />
                  <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Overview</h2>
                </div>
                <p className="text-base text-base-500 leading-relaxed text-lg">{project.overview}</p>
              </section>
            </FadeIn>

            <FadeIn direction="up">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Target size={18} className="text-amber-600" />
                  <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Problem</h2>
                </div>
                <p className="text-base text-base-500 leading-relaxed text-lg">{project.problem}</p>
              </section>
            </FadeIn>

            <FadeIn direction="up">
              <section>
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb size={18} className="text-emerald-600" />
                  <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Solution</h2>
                </div>
                <p className="text-base text-base-500 leading-relaxed text-lg">{project.solution}</p>
              </section>
            </FadeIn>

            <FadeIn direction="up">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Map size={18} className="text-accent" />
                  <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Key Features</h2>
                </div>
                <Stagger staggerDelay={0.08}>
                  <div className="grid gap-3">
                    {project.keyFeatures.map((feature) => (
                      <StaggerChild key={feature.title}>
                        <div className="bg-white border border-base-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
                          <h3 className="font-heading font-bold text-base-950 text-sm mb-2">{feature.title}</h3>
                          <p className="text-sm text-base-500 leading-relaxed m-0">{feature.description}</p>
                        </div>
                      </StaggerChild>
                    ))}
                  </div>
                </Stagger>
              </section>
            </FadeIn>

            <FadeIn direction="up">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <TriangleAlert size={18} className="text-accent" />
                  <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Technical Highlights</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {project.technologies.map((group) => (
                    <motion.div
                      key={group.category}
                      className="bg-white border border-base-200 rounded-xl p-4 shadow-sm"
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <h3 className="font-heading text-xs uppercase tracking-wider font-semibold text-accent mb-3">
                        {group.category}
                      </h3>
                      <div className="space-y-1.5">
                        {group.items.map((item) => (
                          <p key={item} className="text-sm text-base-600 m-0">{item}</p>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            </FadeIn>

            <FadeIn direction="up">
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <Map size={18} className="text-accent" />
                  <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Screenshots</h2>
                </div>
                <div className="space-y-8">
                  {project.screenshots.map((shot, i) => (
                    <motion.div
                      key={shot.title}
                      initial={{ opacity: 0, y: 32 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-60px' }}
                      transition={{ duration: 0.5, ease: [0, 0, 0.2, 1], delay: i * 0.1 }}
                    >
                      <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-base-100 shadow-md">
                        <Image src={shot.image} alt={shot.title} fill className="object-cover" />
                      </div>
                      <p className="text-sm text-base-400 mt-3">
                        <strong className="text-base-700 font-semibold">{shot.title}</strong> — {shot.caption}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>
            </FadeIn>

            {project.challenges.length > 0 && (
              <FadeIn direction="up">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <TriangleAlert size={18} className="text-amber-600" />
                    <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Challenges</h2>
                  </div>
                  <Stagger staggerDelay={0.1}>
                    <div className="space-y-4">
                      {project.challenges.map((c, i) => (
                        <StaggerChild key={i}>
                          <div className="bg-white border border-base-200 rounded-xl p-5 shadow-sm">
                            <div className="mb-3">
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                                <h3 className="font-heading text-xs uppercase tracking-wider font-semibold text-red-600 m-0">Problem</h3>
                              </div>
                              <p className="text-sm text-base-600 leading-relaxed m-0">{c.problem}</p>
                            </div>
                            <div>
                              <div className="flex items-center gap-2 mb-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                <h3 className="font-heading text-xs uppercase tracking-wider font-semibold text-emerald-600 m-0">Solution</h3>
                              </div>
                              <p className="text-sm text-base-600 leading-relaxed m-0">{c.solution}</p>
                            </div>
                          </div>
                        </StaggerChild>
                      ))}
                    </div>
                  </Stagger>
                </section>
              </FadeIn>
            )}

            {project.lessons.length > 0 && (
              <FadeIn direction="up">
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <Lightbulb size={18} className="text-accent" />
                    <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Lessons Learned</h2>
                  </div>
                  <div className="space-y-3">
                    {project.lessons.map((lesson, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, ease: [0, 0, 0.2, 1], delay: i * 0.1 }}
                      >
                        <ArrowUpRight size={14} className="text-accent mt-1 shrink-0" />
                        <p className="text-sm text-base-500 leading-relaxed m-0">{lesson}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </FadeIn>
            )}

            <FadeIn direction="up">
              <section className="border-t border-base-200 pt-8">
                <div className="flex items-center gap-3 mb-5">
                  <ExternalLink size={18} className="text-accent" />
                  <h2 className="font-heading text-2xl font-bold text-base-950 m-0">Links</h2>
                </div>
                <div className="flex gap-3 flex-wrap">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-base-950 text-white rounded-full text-sm font-semibold hover:bg-accent transition-colors duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <GithubIcon size={16} />
                      GitHub Repository
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 border border-base-300 text-base-800 rounded-full text-sm font-semibold hover:border-accent hover:text-accent transition-colors duration-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </motion.a>
                  )}
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

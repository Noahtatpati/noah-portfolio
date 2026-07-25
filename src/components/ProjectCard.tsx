'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/data/portfolio';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0, 0, 0.2, 1] }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <article className="bg-white border border-base-200 rounded-2xl overflow-hidden flex flex-col min-h-[440px] shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
          <div className="relative h-52 overflow-hidden bg-base-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-6 flex flex-col gap-3 flex-1">
            <div className="flex items-center gap-3 text-xs font-medium text-base-400">
              <span className="text-accent uppercase tracking-wider">{project.category.split(' • ')[0]}</span>
              <span className="w-1 h-1 rounded-full bg-base-300" />
              <span>{project.status}</span>
            </div>
            <div className="flex items-start justify-between gap-3">
              <h3 className="font-heading text-xl font-bold text-base-950 m-0">
                {project.title}
              </h3>
              <ArrowUpRight
                size={18}
                className="text-base-300 group-hover:text-accent transition-colors duration-200 mt-1 shrink-0"
              />
            </div>
            <p className="text-sm text-base-500 font-medium m-0">
              {project.subtitle}
            </p>
            <p className="text-sm text-base-400 leading-relaxed m-0 line-clamp-2">
              {project.description}
            </p>
            <div className="mt-auto pt-3 flex flex-wrap gap-2">
              {project.techList.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-base-100 rounded-full text-xs font-medium text-base-500"
                >
                  {tech}
                </span>
              ))}
              {project.techList.length > 4 && (
                <span className="px-2.5 py-1 bg-base-100 rounded-full text-xs font-medium text-base-400">
                  +{project.techList.length - 4}
                </span>
              )}
            </div>
          </div>
        </article>
      </Link>
    </motion.div>
  );
}

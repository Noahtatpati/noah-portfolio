'use client';

import { motion, type Variants } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  distance?: number;
};

const directionVariants = (direction: string, distance: number): Variants => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? -distance : direction === 'right' ? distance : 0,
    y: direction === 'up' ? distance : direction === 'down' ? -distance : 0
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0, 0, 0.2, 1]
    }
  }
});

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 0.6,
  distance = 40
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      variants={directionVariants(direction, distance)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay, duration, ease: [0, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
};

export function Stagger({ children, className, staggerDelay = 0.1 }: StaggerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: [0, 0, 0.2, 1] }
        }
      }}
    >
      {children}
    </motion.div>
  );
}

export function ParallaxSection({
  children,
  className,
  speed = 0.15
}: {
  children: ReactNode;
  className?: string;
  speed?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div ref={ref} className={`relative ${className ?? ''}`}>
      <motion.div
        initial={{ y: 0 }}
        whileInView={{
          y: [speed * 100, -speed * 100],
          transition: { duration: 1.2, ease: [0, 0, 0.2, 1] }
        }}
        viewport={{ once: false, margin: '-20%' }}
      >
        {children}
      </motion.div>
    </div>
  );
}

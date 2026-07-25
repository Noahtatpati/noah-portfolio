'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export function Loader() {
  return (
    <div className="fixed inset-0 z-[100] bg-base-50 flex items-center justify-center">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [1, 0.7, 1],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Image src="/assets/logo.png" alt="Loading" width={64} height={64} className="rounded-xl" />
      </motion.div>
    </div>
  );
}

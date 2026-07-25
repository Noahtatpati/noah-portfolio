'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function PageLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-base-50 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.6, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Image src="/assets/logo.png" alt="Loading" width={96} height={96} className="rounded-xl" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </>
  );
}

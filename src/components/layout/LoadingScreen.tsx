import { AnimatePresence, motion } from "framer-motion";

interface LoadingScreenProps {
  loading: boolean;
}

export function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
          aria-hidden="true"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-bold gradient-text"
          >
            MT
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

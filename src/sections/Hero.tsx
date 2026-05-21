import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import { SocialLinks } from '@/components/SocialLinks';
import { personalInfo } from '@/lib/data';

const TECH_CHIPS = ['Flutter', 'Dart', 'Firebase', 'iOS', 'Android'];

export function Hero() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#f8f9fa] via-white to-[#f8f9fa]">
      {/* Subtle dot grid for depth */}
      <div className="absolute inset-0 bg-grid-soft opacity-70" />

      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-[10%] w-64 h-64 bg-gradient-to-br from-[#0d6efd]/15 to-[#6610f2]/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-20 left-[5%] w-96 h-96 bg-gradient-to-br from-[#6610f2]/12 to-[#0d6efd]/12 rounded-full blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-[#0d6efd]/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-2xl"
          >
            {/* Open to work pill */}
            <motion.div variants={itemVariants} className="mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-xs font-semibold tracking-wide">
                <span className="relative flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                  <span className="relative w-2 h-2 rounded-full bg-emerald-500" />
                </span>
                Open to work
              </span>
            </motion.div>

            <motion.p variants={itemVariants} className="text-[#0d6efd] font-medium mb-3 text-sm tracking-wide">
              Hello, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#0F172A] mb-4 leading-[1.05]"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="font-display text-xl sm:text-2xl md:text-3xl font-semibold text-[#475569] mb-6"
            >
              {personalInfo.title}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-[#6c757d] mb-7 leading-relaxed"
            >
              {personalInfo.summary}
            </motion.p>

            {/* Tech stack chips — mobile dev signature */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8">
              {TECH_CHIPS.map((t, i) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-[#e9ecef] text-[#475569] text-xs font-medium shadow-sm"
                >
                  {i === 0 && <Sparkles className="w-3 h-3 text-[#0d6efd]" />}
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-to-r from-[#0d6efd] to-[#6610f2] hover:opacity-90 text-white px-6 py-3 text-base rounded-full shadow-lg shadow-[#0d6efd]/20 hover:shadow-xl hover:shadow-[#0d6efd]/25 transition-all"
              >
                View My Projects
                <ArrowDown className="w-4 h-4 ml-2" />
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="border-[#0d6efd]/30 text-[#0d6efd] hover:bg-[#0d6efd] hover:text-white hover:border-[#0d6efd] px-6 py-3 text-base rounded-full transition-all"
              >
                Contact Me
              </Button>
            </motion.div>

            <motion.div variants={itemVariants}>
              <SocialLinks />
            </motion.div>
          </motion.div>

          {/* Profile photo — device-frame motif */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Gradient glow behind */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#0d6efd] to-[#6610f2] rounded-[2.5rem] blur-2xl opacity-25" />

              {/* Floating tech badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -left-6 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white shadow-lg border border-[#e9ecef]"
              >
                <span className="w-2 h-2 rounded-full bg-[#02569B]" />
                <span className="text-xs font-semibold text-[#0F172A]">Flutter</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-2 -right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white shadow-lg border border-[#e9ecef]"
              >
                <span className="w-2 h-2 rounded-full bg-[#FFA000]" />
                <span className="text-xs font-semibold text-[#0F172A]">Firebase</span>
              </motion.div>

              {/* Device-style frame around photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl ring-1 ring-[#0d6efd]/15 bg-gradient-to-br from-[#0d6efd]/5 to-[#6610f2]/5">
                <img
                  src="/images/profile.jpeg"
                  alt="Muhammad Talha"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-[#6c757d]/30 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-[#0d6efd] rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

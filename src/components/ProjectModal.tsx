import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ExternalLink, Figma } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (!project) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [project, currentIndex]);

  if (!project) return null;

  const allImages = project.images && project.images.length > 0 ? project.images : [];
  const hasImages = allImages.length > 0;
  const hasFigma = !!project.figmaUrl;

  const handleNext = () => {
    if (hasImages) setCurrentIndex((i) => (i + 1) % allImages.length);
  };

  const handlePrev = () => {
    if (hasImages) setCurrentIndex((i) => (i - 1 + allImages.length) % allImages.length);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-[#e9ecef] flex-shrink-0">
            <div>
              <h2 className="text-xl font-bold text-[#212529]">{project.title}</h2>
              <div className="flex items-center gap-3 mt-1 flex-wrap">
                {project.company && (
                  <span className="text-sm text-[#6c757d]">{project.company}</span>
                )}
                <span className="text-xs text-[#6c757d] bg-[#f8f9fa] px-2 py-0.5 rounded-full border border-[#e9ecef]">
                  {project.period}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0 ml-4">
              {project.links?.store && (
                <Button asChild size="sm" variant="outline" className="text-xs border-[#0d6efd] text-[#0d6efd] hidden sm:flex">
                  <a href={project.links.store} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Store
                  </a>
                </Button>
              )}
              {hasFigma && (
                <Button asChild size="sm" variant="outline" className="text-xs border-[#6610f2] text-[#6610f2] hidden sm:flex">
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer">
                    <Figma className="w-3 h-3 mr-1" />
                    Figma
                  </a>
                </Button>
              )}
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-[#f8f9fa] text-[#6c757d] hover:text-[#212529] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto">
            {/* Image Gallery */}
            {hasImages && (
              <div className="relative bg-[#1a1a2e] select-none">
                <div className="flex items-center justify-center" style={{ minHeight: '420px' }}>
                  <img
                    key={currentIndex}
                    src={allImages[currentIndex]}
                    alt={`${project.title} screen ${currentIndex + 1}`}
                    className="max-h-[420px] w-auto object-contain mx-auto"
                    style={{ display: 'block' }}
                  />
                </div>

                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={handlePrev}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {allImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentIndex(i)}
                          className={`w-1.5 h-1.5 rounded-full transition-all ${i === currentIndex ? 'bg-white w-4' : 'bg-white/40'}`}
                        />
                      ))}
                    </div>
                    <div className="absolute top-3 right-3 text-xs text-white/70 bg-black/40 px-2 py-1 rounded-full">
                      {currentIndex + 1} / {allImages.length}
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Figma Embed — shown below images or standalone */}
            {hasFigma && (
              <div className="border-t border-[#e9ecef]">
                <div className="flex items-center justify-between px-5 py-3 bg-[#f8f9fa]">
                  <span className="text-sm font-medium text-[#212529] flex items-center gap-2">
                    <Figma className="w-4 h-4 text-[#6610f2]" />
                    Design Preview
                  </span>
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-[#6610f2] hover:underline flex items-center gap-1"
                  >
                    Open in Figma <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                  <iframe
                    src={`https://www.figma.com/embed?embed_host=share&url=${encodeURIComponent(project.figmaUrl!)}`}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    title={`${project.title} Figma Design`}
                  />
                </div>
              </div>
            )}

            {/* Description + Tech */}
            <div className="p-5 space-y-4">
              <p className="text-[#6c757d] leading-relaxed text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge
                    key={t}
                    variant="secondary"
                    className="bg-[#f8f9fa] text-[#0d6efd] border border-[#0d6efd]/20 text-xs"
                  >
                    {t}
                  </Badge>
                ))}
              </div>

              {/* Thumbnail strip */}
              {allImages.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pt-2 pb-1">
                  {allImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`flex-shrink-0 w-14 h-20 rounded overflow-hidden border-2 transition-all ${
                        i === currentIndex ? 'border-[#0d6efd]' : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

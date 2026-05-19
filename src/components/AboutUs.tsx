import React from 'react';
import { motion } from 'motion/react';
import { Mail, Instagram, ExternalLink } from 'lucide-react';

export const AboutUs: React.FC = () => {
  return (
    <div className="w-full h-full overflow-y-auto custom-scrollbar bg-black text-white p-8 md:p-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row items-center md:items-end gap-4 mb-16 border-b border-white/10 pb-8 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic-black leading-none">
            THE <span className="text-orange-500">AUTHORS</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Author 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="group"
          >
            <div className="relative aspect-[3/4] md:aspect-[3/4] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 group-hover:border-orange-500/50 transition-all duration-500 mb-6">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 md:via-black/40 to-transparent z-10" />
              <img 
                src="https://i.ibb.co/0L5JTkY/Whats-App-Image-2026-05-18-at-22-39-17.jpg"
                alt="Druș Luca Ioan" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic-black leading-none mb-1">
                  Druș <span className="text-orange-500">Luca Ioan</span>
                </h2>
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Co-Author & Lead Dev</p>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  <p className="text-zinc-300 text-[10px] md:text-xs uppercase leading-relaxed tracking-wider line-clamp-3 md:line-clamp-none">
                    I am Luca, a student at the National College 'Andrei Mureșanu' Dej, and Metal Atlas is the project in which I managed to bring together my two greatest passions: technology and Heavy Metal.
                  </p>
                  <div className="flex gap-3 md:gap-4">
                    <a 
                      href="https://www.instagram.com/embyeer/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-orange-500 hover:text-black transition-all"
                    >
                      <Instagram size={14} />
                    </a>
                    <a 
                      href="mailto:drusluca@gmail.com"
                      className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-orange-500 hover:text-black transition-all"
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Author 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="group"
          >
            <div className="relative aspect-[3/4] md:aspect-[3/4] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 group-hover:border-orange-500/50 transition-all duration-500 mb-6">
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 md:via-black/40 to-transparent z-10" />
              <img 
                src="https://i.ibb.co/VW25c9GH/luca-drus-portrait.jpg"
                alt="Bătinaș Luca Ștefan" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20">
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter italic-black leading-none mb-1">
                  Bătinaș <span className="text-orange-500">Luca Ștefan</span>
                </h2>
                <div className="flex items-center gap-2 mb-3 md:mb-4">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                  <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Co-Author & Cybersecurity Expert</p>
                </div>

                <div className="space-y-3 md:space-y-4">
                  <p className="text-zinc-300 text-[10px] md:text-xs uppercase leading-relaxed tracking-wider line-clamp-3 md:line-clamp-none">
                    I AM LUCA, A STUDENT AT THE NATIONAL COLLEGE “ANDREI MUREȘANU” IN DEJ, AND METAL ATLAS IS THE PROJECT WHERE I TURN MY TECHNOLOGY SKILLS INTO SOMETHING REAL, COMBINING CREATIVITY, IDENTITY, AND VISION INTO ONE DIGITAL EXPERIENCE.
                  </p>
                  <div className="flex gap-3 md:gap-4">
                    <a 
                      href="https://www.instagram.com/batiiii.l/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-orange-500 hover:text-black transition-all"
                    >
                      <Instagram size={14} />
                    </a>
                    <a 
                      href="mailto:lucabati09@gmail.com"
                      className="p-2 bg-white/10 border border-white/20 rounded-full hover:bg-orange-500 hover:text-black transition-all"
                    >
                      <Mail size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/5 flex flex-col items-center text-center px-4">
          <div className="text-[8px] md:text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] mb-4">
            Established 2026 // Metal Atlas Evolutionary Mapping Project
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-[8px] text-zinc-700 uppercase tracking-[0.2em] font-bold">
            <span>Project_Root: {window.location.host}</span>
            <span>Build: Version 4.0</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

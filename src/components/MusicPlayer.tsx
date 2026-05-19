import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Music, Play, Pause, GripHorizontal } from 'lucide-react';
import ReactPlayerModule from 'react-player';
import { GENRE_MUSIC } from '../data/musicLinks';

// Bypass TypeScript errors for react-player
const ReactPlayer = ReactPlayerModule as any;

interface MusicPlayerProps {
  genreId: string | null;
  onClose: () => void;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ genreId, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const music = genreId ? GENRE_MUSIC[genreId] : null;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Clean URL to prevent playlist issues with ReactPlayer
  const cleanUrl = music?.url ? music.url.split('&')[0] : '';
  
  // Reset play state when genre changes
  useEffect(() => {
    if (genreId) setIsPlaying(true);
  }, [genreId]);

  // Extract Spotify ID from URL
  const getSpotifyId = (url: string): string | null => {
    if (!url) return null;
    const match = url.match(/spotify\.com\/track\/([a-zA-Z0-9]+)/);
    return match ? match[1] : null;
  };

  const spotifyId = music ? getSpotifyId(music.url) : null;
  const isSpotify = !!spotifyId;

  return (
    <AnimatePresence>
      {music && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          drag
          dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
          dragElastic={0.1}
          dragMomentum={false}
          className="fixed bottom-[5rem] right-4 md:bottom-24 md:right-8 z-[100] group cursor-grab active:cursor-grabbing max-w-[calc(100vw-2rem)]"
        >
          {isSpotify ? (
            <div className="bg-zinc-900/90 border border-orange-500/30 rounded-2xl p-2 pt-6 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col gap-2 min-w-[280px] md:min-w-[320px] relative pointer-events-auto">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 text-zinc-600">
                <GripHorizontal size={16} />
              </div>
              <button 
                onClick={onClose}
                className="absolute -top-3 -right-3 p-1.5 bg-zinc-800 border border-zinc-600 rounded-full text-zinc-400 hover:text-white hover:bg-red-500 hover:border-red-500 transition-all z-10 cursor-pointer"
                title="Close Player"
              >
                <X size={14} />
              </button>
              <iframe 
                src={`https://open.spotify.com/embed/track/${spotifyId}?utm_source=generator&theme=0&autoplay=1`}
                width="100%" 
                height={isMobile ? "80" : "152"} 
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title={music.title}
                className="rounded-xl pointer-events-auto"
              ></iframe>
            </div>
          ) : (
            <div className="bg-zinc-900/90 border border-orange-500/30 rounded-2xl p-4 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center gap-2 md:gap-4 min-w-[280px] md:min-w-[320px] relative pointer-events-auto">
              <div className="absolute top-1 left-1/2 -translate-x-1/2 text-zinc-600">
                <GripHorizontal size={16} />
              </div>
              {/* Content info with visible Player Thumbnail */}
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center flex-shrink-0 border border-orange-500/20 overflow-hidden relative group-hover:bg-orange-500/20 transition-colors">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] pointer-events-none opacity-50 mix-blend-screen overflow-hidden">
                  <ReactPlayer
                    url={cleanUrl}
                    playing={isPlaying}
                    volume={0.8}
                    width="100%"
                    height="100%"
                    config={{
                      youtube: {
                        playerVars: { 
                          autoplay: 1, 
                          modestbranding: 1,
                          rel: 0,
                          controls: 0,
                          origin: window.location.origin
                        }
                      }
                    }}
                    onReady={() => console.log('Player ready')}
                    onPlay={() => console.log('Player playing')}
                    onPause={() => console.log('Player paused')}
                    onError={(e: any) => console.log('Player error', e)}
                  />
                </div>
                
                <div className="absolute inset-0 z-10 flex items-end justify-center pb-1 gap-0.5">
                  {isPlaying ? (
                    <>
                      <motion.div animate={{ height: ['20%', '80%', '40%', '100%', '30%'] }} transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }} className="w-[3px] bg-orange-500 rounded-full" />
                      <motion.div animate={{ height: ['40%', '100%', '20%', '70%', '50%'] }} transition={{ duration: 0.8, repeat: Infinity, ease: "linear", delay: 0.2 }} className="w-[3px] bg-orange-500 rounded-full" />
                      <motion.div animate={{ height: ['60%', '30%', '90%', '20%', '100%'] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear", delay: 0.1 }} className="w-[3px] bg-orange-500 rounded-full" />
                    </>
                  ) : (
                    <div className="w-3 h-3 mb-1 rounded-full border-2 border-zinc-700" />
                  )}
                </div>
              </div>
  
              <div className="flex-grow min-w-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <Music size={10} className="text-orange-500" />
                  <span className="text-[9px] font-bold text-orange-500 uppercase tracking-[0.2em]">Sonido Atlas</span>
                </div>
                <h4 className="text-[11px] font-black uppercase text-white truncate tracking-tight mb-0.5">
                  {music.title}
                </h4>
                <p className="text-[9px] text-zinc-500 uppercase font-mono truncate">
                  {music.artist}
                </p>
              </div>
  
              <div className="flex items-center gap-2 ml-2">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="p-2 bg-white/5 border border-white/10 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
                  title={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
                </button>
                <button 
                  onClick={onClose}
                  className="p-2 bg-white/5 border border-white/10 rounded-full text-zinc-500 hover:text-white hover:bg-red-500/20 hover:text-red-500 hover:border-red-500/30 transition-all"
                  title="Close Player"
                >
                  <X size={14} />
                </button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

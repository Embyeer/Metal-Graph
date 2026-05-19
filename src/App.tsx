import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GENRES } from './data/genres';
import GenreDetails from './components/GenreDetails';
import MetalGraph from './components/MetalGraph';
import { BandsList } from './components/BandsList';
import { BandModal } from './components/BandModal';
import { bands as BANDS, Band } from './data/bands';
import { Github, X, BarChart3, Menu, Map as MapIcon, Users, Info, Zap } from 'lucide-react';
import { SpotifyAnalyzer } from './components/SpotifyAnalyzer';
import { AboutUs } from './components/AboutUs';
import { MusicPlayer } from './components/MusicPlayer';

type Tab = 'map' | 'bands' | 'spotify' | 'about';

export default function App() {
  const [selectedGenreId, setSelectedGenreId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<Tab>('map');
  const [selectedBand, setSelectedBand] = useState<Band | null>(null);
  const [navigationSource, setNavigationSource] = useState<Tab | null>(null);
  const [direction, setDirection] = useState(0);
  const [playingGenreId, setPlayingGenreId] = useState<string | null>(null);

  const selectedGenre = GENRES.find(g => g.id === selectedGenreId);

  // Close modals on Escape key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedGenreId(null);
        handleCloseBand();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [navigationSource]); // Add navigationSource to dependency array

  // Stop music when genre tab is closed or navigated away
  useEffect(() => {
    if (!selectedGenreId) {
      setPlayingGenreId(null);
    }
  }, [selectedGenreId]);

  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    setSelectedGenreId(null);
  };

  const handleSelectGenre = (id: string) => {
    const isNewGenre = selectedGenreId !== id;
    setSelectedGenreId(prev => prev === id ? null : id);
    
    // Auto-play song if it's a new selection
    if (isNewGenre) {
      setPlayingGenreId(id);
    } else if (!isNewGenre) {
      // If we clicked the same genre, stop the music
      setPlayingGenreId(null);
    }
  };

  const handleNavigateToBand = (band: Band) => {
    setNavigationSource(activeTab);
    setSelectedGenreId(null);
    setActiveTab('bands');
    setSelectedBand(band);
  };

  const handleCloseBand = () => {
    setSelectedBand(null);
    setDirection(0);
    if (navigationSource === 'map') {
      setActiveTab('map');
    }
    setNavigationSource(null);
  };

  const handleNextBand = () => {
    if (!selectedBand) return;
    setDirection(1);
    const currentIndex = BANDS.findIndex(b => b.id === selectedBand.id);
    const nextIndex = (currentIndex + 1) % BANDS.length;
    setSelectedBand(BANDS[nextIndex]);
  };

  const handlePreviousBand = () => {
    if (!selectedBand) return;
    setDirection(-1);
    const currentIndex = BANDS.findIndex(b => b.id === selectedBand.id);
    const prevIndex = (currentIndex - 1 + BANDS.length) % BANDS.length;
    setSelectedBand(BANDS[prevIndex]);
  };

  return (
    <div className="h-screen text-zinc-100 flex flex-col font-sans overflow-hidden bg-black">
      {/* Header */}
      <header className="h-16 flex-shrink-0 border-b border-white/10 bg-black/50 flex items-center justify-between px-4 md:px-8 backdrop-blur-md z-[60]">
        <div className="flex items-center gap-2">
          <a href="https://imgbb.com/" className="hover:opacity-80 transition-opacity" target="_blank" rel="noopener noreferrer">
            <img 
              src="https://i.ibb.co/dwLwGKzX/text-1779195949982.png" 
              alt="Metal Atlas"
              className="h-6 md:h-10 object-contain invert"
              border={0}
            />
          </a>
          <span className="text-orange-500 text-[8px] md:text-[10px] font-bold opacity-50 self-end mb-1 md:mb-2 lowercase">v4.0</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold">
          <button 
            onClick={() => handleTabChange('map')}
            className={`transition-all pb-1 border-b-2 ${activeTab === 'map' ? 'text-orange-500 border-orange-500' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}
          >
            Evolutionary Map
          </button>
          <button 
            onClick={() => handleTabChange('bands')}
            className={`transition-all pb-1 border-b-2 ${activeTab === 'bands' ? 'text-orange-500 border-orange-500' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}
          >
            Bands
          </button>
          <button 
            onClick={() => handleTabChange('spotify')}
            className={`transition-all flex items-center gap-2 pb-1 border-b-2 ${activeTab === 'spotify' ? 'text-orange-500 border-orange-500' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}
          >
            <BarChart3 size={14} className={activeTab === 'spotify' ? 'text-orange-500' : 'text-zinc-500'} />
            How metal are you?
          </button>
          <button 
            onClick={() => handleTabChange('about')}
            className={`transition-all pb-1 border-b-2 ${activeTab === 'about' ? 'text-orange-500 border-orange-500' : 'text-zinc-500 border-transparent hover:text-zinc-300'}`}
          >
            About Us
          </button>
          <a 
            href="https://github.com/Embyeer/Metal-Atlas/tree/main" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 border border-white/10 rounded hover:bg-white/5 transition-colors ml-4"
          >
            <Github size={14} />
          </a>
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow relative overflow-hidden">
        <AnimatePresence mode="wait">
          {activeTab === 'map' ? (
            <motion.div 
              key="map"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="w-full h-full"
            >
              <MetalGraph 
                selectedId={selectedGenreId || ''} 
                onSelectGenre={handleSelectGenre} 
              />
              
              {/* Instructions Overlay */}
              <div className="absolute bottom-6 left-6 p-3 bg-black/80 border border-white/10 rounded-lg backdrop-blur-md max-w-[200px] pointer-events-none z-10">
                <h3 className="text-[9px] font-bold text-orange-500 uppercase tracking-widest mb-1">Instructions</h3>
                <p className="text-[9px] text-zinc-500 leading-tight uppercase">
                  Click nodes to explore DNA & hear the sound // Drag to navigate // Scroll to zoom.
                </p>
              </div>
            </motion.div>
          ) : activeTab === 'bands' ? (
            <motion.div 
              key="bands"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              className="w-full h-full"
            >
              <BandsList onSelectBand={setSelectedBand} />
            </motion.div>
          ) : activeTab === 'spotify' ? (
            <motion.div 
              key="spotify"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full h-full"
            >
              <SpotifyAnalyzer />
            </motion.div>
          ) : (
            <motion.div 
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="w-full h-full"
            >
              <AboutUs />
            </motion.div>
          )}
        </AnimatePresence>

        
        {/* Genre Modal */}
        <AnimatePresence>
          {selectedGenre && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedGenreId(null)}
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 cursor-pointer"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="fixed inset-x-4 inset-y-4 md:inset-x-20 md:inset-y-20 z-50 overflow-y-auto bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.8)] custom-scrollbar"
              >
                {/* Modal Corner Accents */}
                <div className="sticky top-0 left-0 right-0 h-0 z-[70] pointer-events-none">
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-orange-500/20 rounded-tl-3xl" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-orange-500/20 rounded-tr-3xl" />
                </div>

                <div className="sticky top-0 right-0 p-6 flex justify-end z-[60] pointer-events-none">
                  <button 
                    onClick={() => setSelectedGenreId(null)}
                    className="p-3 bg-black/80 border border-white/10 rounded-full hover:bg-orange-500 hover:border-orange-500 transition-all text-zinc-400 hover:text-black pointer-events-auto backdrop-blur-md group"
                  >
                    <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                  </button>
                </div>
                <div className="px-6 md:px-16 pb-16">
                  <GenreDetails 
                    genre={selectedGenre} 
                    onSelectGenre={handleSelectGenre} 
                    onSelectBand={handleNavigateToBand}
                  />
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Band Modal */}
        <AnimatePresence>
          {selectedBand && (
            <BandModal 
              band={selectedBand} 
              onClose={handleCloseBand} 
              onNext={handleNextBand}
              onPrevious={handlePreviousBand}
              direction={direction}
            />
          )}
        </AnimatePresence>

        <MusicPlayer 
          genreId={playingGenreId}
          onClose={() => setPlayingGenreId(null)}
        />
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-black/80 border-t border-white/10 backdrop-blur-xl z-[60] flex items-center justify-around px-2">
        <button 
          onClick={() => handleTabChange('map')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'map' ? 'text-orange-500' : 'text-zinc-500'}`}
        >
          <MapIcon size={20} />
          <span className="text-[8px] font-bold uppercase tracking-widest">Map</span>
        </button>
        <button 
          onClick={() => handleTabChange('bands')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'bands' ? 'text-orange-500' : 'text-zinc-500'}`}
        >
          <Users size={20} />
          <span className="text-[8px] font-bold uppercase tracking-widest">Bands</span>
        </button>
        <button 
          onClick={() => handleTabChange('spotify')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'spotify' ? 'text-orange-500' : 'text-zinc-500'}`}
        >
          <Zap size={20} />
          <span className="text-[8px] font-bold uppercase tracking-widest">DNA</span>
        </button>
        <button 
          onClick={() => handleTabChange('about')}
          className={`flex flex-col items-center gap-1 transition-all ${activeTab === 'about' ? 'text-orange-500' : 'text-zinc-500'}`}
        >
          <Info size={20} />
          <span className="text-[8px] font-bold uppercase tracking-widest">About</span>
        </button>
      </nav>

      {/* Footer */}
      <footer className="h-12 border-t border-white/10 bg-black flex-shrink-0 hidden md:flex items-center justify-between px-8 text-[10px] uppercase tracking-tighter text-zinc-500 font-mono">
        <div />
        <div className="hidden sm:block" />
        <div />
      </footer>
    </div>
  );
}


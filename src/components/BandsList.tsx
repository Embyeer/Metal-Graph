import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Info, MapPin, Calendar, Filter, ChevronDown, ChevronUp } from 'lucide-react';
import { bands, Band } from '../data/bands';

interface BandsListProps {
  onSelectBand: (band) => void;
}

export const BandsList: React.FC<BandsListProps> = ({ onSelectBand }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  const genreCounts = bands.reduce((acc, band) => {
    acc[band.genre] = (acc[band.genre] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const genres = Object.keys(genreCounts).sort();

  const filteredBands = bands.filter(b => {
    const matchesSearch = b.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         b.genre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre ? b.genre === selectedGenre : true;
    return matchesSearch && matchesGenre;
  });

  return (
    <div className="w-full h-full flex flex-col bg-black p-6 md:p-12 overflow-y-auto custom-scrollbar">
      {/* Header & Search */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-8 max-w-7xl mx-auto w-full">
        <div className="text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black italic-black uppercase tracking-tighter mb-2 md:mb-4 text-white">
            The Pantheon <span className="text-orange-500">.</span>
          </h2>
          <p className="text-zinc-500 text-[11px] md:text-sm max-w-lg leading-relaxed uppercase tracking-wider mx-auto md:mx-0">
            A curated directory of metal's most formidable acts.
          </p>
        </div>

        <div className="relative group w-full md:w-80">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orange-500 transition-colors" size={16} />
          <input
            type="text"
            placeholder="Search by band or genre..."
            className="w-full bg-zinc-900 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-zinc-200 text-xs md:text-sm focus:outline-none focus:border-orange-500/50 focus:bg-zinc-900 transition-all placeholder:text-zinc-700 font-bold uppercase tracking-widest"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Genre Filter Box */}
      <div className="max-w-7xl mx-auto w-full mb-12 relative z-30">
        <div className="bg-zinc-900 shadow-2xl border border-white/5 rounded-2xl overflow-hidden shadow-orange-500/5">
          {/* Main Toggle Button */}
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full flex items-center justify-between p-4 px-6 hover:bg-zinc-800/50 transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-500/10 rounded-lg text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-all">
                <Filter size={16} />
              </div>
              <div className="text-left">
                <p className="text-[9px] font-bold text-zinc-500 uppercase tracking-widest mb-0.5">Filter by Genre</p>
                <p className="text-[11px] md:text-sm font-black uppercase text-zinc-100 italic-black tracking-tight">
                  {selectedGenre || 'All Selected Subgenres'}
                </p>
              </div>
            </div>
            {isFilterOpen ? <ChevronUp size={20} className="text-zinc-600" /> : <ChevronDown size={20} className="text-zinc-600" />}
          </button>

          {/* Expandable Content */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="border-t border-white/5 bg-black/40"
              >
                <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
                  <button
                    onClick={() => {
                      setSelectedGenre(null);
                      setIsFilterOpen(false);
                    }}
                    className={`flex items-center justify-between p-3 px-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all border ${
                      selectedGenre === null
                        ? 'bg-orange-500 border-orange-500 text-black'
                        : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span>All Genres</span>
                    <span className={`text-[9px] md:text-[10px] opacity-60 ${selectedGenre === null ? 'text-black' : 'text-zinc-400'}`}>
                      {bands.length}
                    </span>
                  </button>
                  {genres.map(genre => (
                    <button
                      key={genre}
                      onClick={() => {
                        setSelectedGenre(genre === selectedGenre ? null : genre);
                        setIsFilterOpen(false);
                      }}
                      className={`flex items-center justify-between p-3 px-4 rounded-xl text-[10px] md:text-xs font-bold uppercase tracking-wider transition-all border ${
                        selectedGenre === genre
                          ? 'bg-orange-500 border-orange-500 text-black'
                          : 'bg-zinc-900/50 border-white/5 text-zinc-500 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <span className="truncate mr-2">{genre}</span>
                      <span className={`text-[9px] md:text-[10px] opacity-60 ${selectedGenre === genre ? 'text-black' : 'text-zinc-400'}`}>
                        {genreCounts[genre]}
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bands Grid */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-24">
        <AnimatePresence mode="popLayout">
          {filteredBands.map((band, i) => (
            <motion.div
              key={band.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -8 }}
              className="group cursor-pointer relative bg-zinc-900/30 border border-white/5 rounded-3xl overflow-hidden hover:border-orange-500/30 hover:bg-zinc-900/50 transition-all duration-500"
              onClick={() => onSelectBand(band)}
            >
              {/* Background Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500" />
              
              <div className="relative h-full flex flex-col">
                {/* Image Header */}
                <div className="h-48 relative overflow-hidden">
                  <img 
                    src={band.imageUrl} 
                    alt={band.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                  <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                    <Info size={16} className="text-orange-500" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-grow flex flex-col">
                  <span className="text-[8px] md:text-[9px] font-bold text-orange-500 uppercase tracking-[0.2em] mb-2 md:mb-3 block">
                    {band.genre}
                  </span>
                  <h3 className="text-xl md:text-2xl font-black italic-black uppercase tracking-tight text-zinc-100 mb-3 md:mb-4 group-hover:text-orange-400 transition-colors">
                    {band.name}
                  </h3>
                  
                  <p className="text-zinc-500 text-[11px] md:text-xs leading-relaxed line-clamp-3 font-light mb-auto">
                    {band.description}
                  </p>

                  <div className="mt-6 md:mt-8 flex items-center justify-between border-t border-white/5 pt-4 md:pt-6">
                    <div className="flex items-center gap-4 text-[9px] md:text-[10px] text-zinc-500 uppercase font-bold tracking-wider">
                      <div className="flex items-center gap-1.5">
                        <MapPin size={12} className="text-zinc-600" />
                        {band.origin.split(',').pop()?.trim()}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar size={12} className="text-zinc-600" />
                        {band.formed}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredBands.length === 0 && (
        <div className="flex flex-col items-center justify-center py-32 opacity-20 italic-black uppercase tracking-widest gap-4">
          <Search size={48} />
          <span>No bands found</span>
        </div>
      )}
    </div>
  );
};

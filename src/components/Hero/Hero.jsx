import { motion } from 'framer-motion';
import { DiscordLogoIcon } from '../Icons/DiscordLogo';
import WarningBanner from './WarningBanner';
import RustyBorder from '../UI/RustyBorder';
import GlowingText from '../UI/GlowingText';

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-transparent to-cyber-darker" />
      <div className="absolute inset-0 bg-[url('/metal-texture.png')] opacity-10 mix-blend-overlay" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-2xl py-20 sm:py-24 lg:py-32"
      >
        <WarningBanner />
        
        <div className="text-center">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <GlowingText>
              <h1 className="text-5xl font-bold tracking-tight font-cyber sm:text-7xl mb-2">
                LAW ENFORCEMENT DEPARTMENT
              </h1>
            </GlowingText>
            <p className="text-2xl font-cyber text-cyber-rust tracking-widest animate-pulse-fast">
              FOR THE GLOBAL DOMINION
            </p>
          </motion.div>
          
          <RustyBorder className="p-6">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg leading-8 text-gray-300 font-cyber"
            >
              "In the ruins of civilization, we maintain order. Through the chaos, we bring justice. 
              The law is absolute, and we are its enforcers."
            </motion.p>
          </RustyBorder>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-10 flex items-center justify-center"
          >
            <a
              href="https://discord.gg/x4wJEP7sgF"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-cyber-rust px-8 py-4 text-lg font-cyber font-semibold text-white shadow-lg shadow-cyber-rust/50 hover:bg-neon-red hover:shadow-neon-red/50 transition-all duration-300 flex items-center gap-2 transform hover:scale-105"
            >
              <DiscordLogoIcon className="w-8 h-8" />
              ENLIST NOW
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-10"
          >
            <RustyBorder className="p-6">
              <div className="space-y-4 text-gray-300 font-cyber text-sm">
                <p>
                  Face of Mankind, launched in 2006, was a groundbreaking MMORPG that pioneered player-driven gameplay in a dystopian future. Set in the 24th century, it featured a unique faction-based system where players could join various organizations and shape the game's narrative through their actions and politics.
                </p>
                <p>
                  Empire Rising, developed by dedicated fans and funded by the community, is a faithful recreation of Face of Mankind's universe. This player-made emulator preserves the original game's core mechanics while introducing modern improvements and expanding upon its rich lore.
                </p>
                <p>
                  The Law Enforcement Department (LED) stands as one of several influential factions within Empire Rising. As the primary peacekeeping force of the Global Dominion, we work alongside other organizations such as the Federal Defense Corps, Colonial Senate, and various civilian factions to maintain order in this complex, player-driven world.
                </p>
              </div>
            </RustyBorder>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
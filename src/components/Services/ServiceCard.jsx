import { motion } from 'framer-motion';

export default function ServiceCard({ title, description, icon: Icon }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-cyber-steel/50 backdrop-blur-sm p-6 rounded-lg border border-neon-blue/20 hover:border-cyber-rust transition-colors duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-cyber-rust/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative">
        <div className="w-16 h-16 bg-cyber-darker rounded-lg flex items-center justify-center mb-4 border border-cyber-rust/20 group-hover:border-neon-blue/50 transition-colors duration-300">
          <Icon className="h-10 w-10 text-neon-blue group-hover:text-cyber-rust transition-colors duration-300" />
        </div>
        <h3 className="text-lg font-cyber font-semibold text-neon-blue mb-2">{title}</h3>
        <p className="text-gray-400 font-cyber text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
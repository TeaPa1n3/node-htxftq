import { motion } from 'framer-motion';

const criminals = [
  {
    name: "CITIZEN X-2749",
    crime: "Unauthorized Thought Patterns",
    status: "TERMINATE ON SIGHT",
    threat: "HIGH",
    lastSeen: "Sector 7",
    image: "https://placehold.co/400x300"
  },
  {
    name: "ROGUE JUDGE K-231",
    crime: "Betrayal of the Law",
    status: "CAPTURE ALIVE",
    threat: "EXTREME",
    lastSeen: "Underground Sectors",
    image: "https://placehold.co/400x300"
  },
  {
    name: "CITIZEN Z-1119",
    crime: "Illegal Tech Modifications",
    status: "ARREST ON SIGHT",
    threat: "MEDIUM",
    lastSeen: "Tech District",
    image: "https://placehold.co/400x300"
  }
];

export default function WantedPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-cyber font-bold text-center mb-12 text-neon-blue drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
            MOST WANTED CRIMINALS
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {criminals.map((criminal, index) => (
              <motion.div
                key={criminal.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-cyber-steel/50 backdrop-blur-sm rounded-lg overflow-hidden border border-neon-blue/20"
              >
                <div className="aspect-video bg-cyber-darker relative overflow-hidden">
                  <img 
                    src={criminal.image} 
                    alt={criminal.name}
                    className="w-full h-full object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-xl font-cyber font-bold text-neon-blue mb-1">{criminal.name}</h3>
                    <p className="text-cyber-warning text-sm font-cyber">{criminal.crime}</p>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-cyber text-sm">Status:</span>
                    <span className="text-neon-red font-cyber text-sm">{criminal.status}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-cyber text-sm">Threat Level:</span>
                    <span className="text-cyber-warning font-cyber text-sm">{criminal.threat}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400 font-cyber text-sm">Last Seen:</span>
                    <span className="text-neon-blue font-cyber text-sm">{criminal.lastSeen}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 font-cyber text-sm border-l-4 border-cyber-blood px-4 inline-block">
              Report any sightings immediately. Failure to report is a criminal offense.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
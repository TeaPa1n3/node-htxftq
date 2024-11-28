import { motion } from 'framer-motion';
import RustyBorder from '../components/UI/RustyBorder';
import GlowingText from '../components/UI/GlowingText';

const ranks = [
  {
    level: 7,
    title: "Commissioner",
    description: "The highest ranking LED officials, leaders of the faction. They oversee all major faction issues and handle inter-factional relationships, issues, and politics.",
    color: "text-red-500"
  },
  {
    level: 6,
    title: "Commandant",
    description: "Division supervisors who hold regular meetings with Commissioners to advise them. Authorized to make on-spot faction-wide decisions and engage in political issues.",
    color: "text-orange-500"
  },
  {
    level: 5,
    title: "Superintendent",
    description: "Department controllers who set rules, direction, and handle recruitment. They relay important information to Commanders through reports.",
    color: "text-yellow-500"
  },
  {
    level: 4,
    title: "Detective",
    description: "Mission leaders responsible for creating and leading LED operations. They review and guide lower ranks while keeping Superintendents informed.",
    color: "text-neon-blue"
  },
  {
    level: 3,
    title: "Enforcer",
    description: "The main workforce and full-fledged members of their department. They assist and lead lower ranks on missions.",
    color: "text-cyan-500"
  },
  {
    level: 2,
    title: "Constable",
    description: "New officers learning their department's operations. Superior officers show them the ropes and teach required skills for advancement.",
    color: "text-blue-500"
  },
  {
    level: 1,
    title: "Patrolman",
    description: "The new blood of our faction. They observe, learn, and decide which department to join while participating in DPI missions.",
    color: "text-indigo-500"
  }
];

export default function RanksPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlowingText>
            <h1 className="text-4xl font-cyber font-bold text-center mb-12">RANK HIERARCHY</h1>
          </GlowingText>

          <div className="space-y-6">
            {ranks.map((rank, index) => (
              <motion.div
                key={rank.level}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RustyBorder className="p-6 bg-cyber-darker/90">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-cyber-darker rounded-lg border-2 border-cyber-rust flex items-center justify-center">
                      <span className={`font-cyber text-2xl ${rank.color}`}>{rank.level}</span>
                    </div>
                    <div className="flex-1">
                      <GlowingText>
                        <h2 className={`text-2xl font-cyber mb-2 ${rank.color}`}>{rank.title}</h2>
                      </GlowingText>
                      <p className="text-gray-300 font-cyber text-sm leading-relaxed">{rank.description}</p>
                    </div>
                  </div>
                </RustyBorder>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <RustyBorder className="inline-block p-6 bg-cyber-darker/90">
              <p className="text-gray-400 font-cyber text-sm">
                "Through discipline and dedication, you shall rise through the ranks. 
                The LED rewards those who serve justice with unwavering loyalty."
              </p>
            </RustyBorder>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
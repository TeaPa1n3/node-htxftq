import { motion } from 'framer-motion';
import RustyBorder from '../components/UI/RustyBorder';
import GlowingText from '../components/UI/GlowingText';
import { 
  DPDLogo, 
  DCLogo, 
  IADLogo, 
  EADLogo, 
  DTILogo, 
  DMOLogo 
} from '../components/Icons/DepartmentLogos';

const departments = [
  {
    name: 'Dominion Patrol Department',
    description: 'Front-line officers maintaining order on the streets. Armed with the latest in law enforcement technology.',
    color: 'neon-blue',
    Logo: DPDLogo
  },
  {
    name: 'Dominion Corrections - The Guard',
    description: 'Custodians of DeMorgan\'s Castle, the most secure detention facility in the Dominion.',
    color: 'cyber-rust',
    Logo: DCLogo
  },
  {
    name: 'Internal Affairs Department',
    description: 'Ensuring the integrity of LED operations through rigorous oversight and investigation.',
    color: 'neon-blue',
    Logo: IADLogo
  },
  {
    name: 'External Affairs Department',
    description: 'Managing relations with civilian organizations, other factions and maintaining public order protocols.',
    color: 'cyber-rust',
    Logo: EADLogo
  },
  {
    name: 'Dominion Training Institute',
    description: 'Forging the next generation of law enforcement officers through intensive training programs.',
    color: 'neon-blue',
    Logo: DTILogo
  },
  {
    name: 'Dominion Marshals Office',
    description: 'Elite units tasked with high-risk operations and special enforcement actions.',
    color: 'cyber-rust',
    Logo: DMOLogo
  }
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlowingText>
            <h1 className="text-4xl font-cyber font-bold text-center mb-12">DOMINION DEPARTMENTS</h1>
          </GlowingText>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <RustyBorder className="h-full p-6 bg-cyber-darker/90">
                  <div className="flex flex-col items-center">
                    <dept.Logo className={`w-24 h-24 mb-4 text-${dept.color}`} />
                    <GlowingText color={dept.color}>
                      <h2 className="text-xl font-cyber font-bold mb-4 text-center">{dept.name}</h2>
                    </GlowingText>
                    <p className="text-gray-300 font-cyber text-sm text-center">{dept.description}</p>
                  </div>
                </RustyBorder>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import RustyBorder from '../components/UI/RustyBorder';
import GlowingText from '../components/UI/GlowingText';

export default function HistoryPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlowingText>
            <h1 className="text-4xl font-cyber font-bold text-center mb-12">LED HISTORICAL ARCHIVES</h1>
          </GlowingText>
          
          <RustyBorder className="p-6 bg-cyber-darker/90">
            <div className="space-y-6 text-gray-300 font-cyber">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Following the success of military centralization, The Law Enforcement Department was founded in 2112 in order to integrate all pre-Foundation police forces into a single entity. The organization's introductory phase was bloody and anarchic, with many law enforcement elements deserting their posts in protest to the loss of national identity.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Whereas military power could be conceded without major changes to each region's way of life, the centralization of police forces was a dramatic and rapid reorientation of civil liberty many found difficult to accept. While violence and bloodshed erupted in population centers, Parliament acted. Martial law was enacted for the first time in The Dominion's history, and order was restored.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                With the merger of all the individual national Police Institutions into a unified body, it was inevitable that a clash of cultures and law enforcement methodology would arise, and is seen clearly even to this date. The Law Enforcement Department strives to overcome petty differences to work towards their common cause, but from time to time, conflicts inevitably arise due to the diverse personalities of the police officers. Nevertheless, shining moments arise when such differences are put aside for a greater good, as has been demonstrated in decades past.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                The law enforcement picture is now complex, with corporate security forces now overlapping on their jurisdiction, and the encroachment of the FDC with its powers to declare martial law in any zone. Now with clan activities at a historical peak, the danger to LED officers and the threat to the rule of law have never been higher.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.0 }}
              >
                The various Commissioners over the decades have made many structural changes to the LED, but they mostly served to add to the bureaucracy that was to be overcome with the foundation of a unified Law Enforcement Department.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                Nevertheless, recent leadership changes have seen glimpses of potential for good in the Law Enforcement Department, as well as reestablishing a working relationship with the FDC. Accusations of corruption within the LED have been rife. Whether or not those accusations have a legitimate basis to them remains to be seen due to the secretive nature of the Internal and Foreign Affairs Departments.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                LED officers are at the forefront of ordered society, without which the democratic rule of law would not be possible. With the institution of the Colonial Senate they protect the very halls where Colonial rule is debated by the Colonial Senators.
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6 }}
                className="font-bold text-neon-blue"
              >
                They have the responsibility to uphold the law so the common citizen can live out their lives in peace and safety; and they will not let the citizens down.
              </motion.p>
            </div>
          </RustyBorder>
        </motion.div>
      </div>
    </div>
  );
}
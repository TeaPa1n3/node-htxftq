import { motion } from 'framer-motion';
import RustyBorder from '../components/UI/RustyBorder';
import GlowingText from '../components/UI/GlowingText';

const laws = [
  {
    section: "1. HOLSTER LAW",
    rules: [
      { id: "1.1", text: "The brandishing of any weapon (Medigun excluded) in a public area.", severity: "INFRACTION" },
      { id: "1.2", text: "The discharge of any weapon (Medigun excluded) in a public place.", severity: "FELONY" }
    ]
  },
  {
    section: "2. ASSAULT",
    rules: [
      { id: "2.1", text: "Brandishing a weapon in any manner which causes a civilian to feel threatened.", severity: "MISDEMEANOR" },
      { id: "2.2", text: "Use of a weapon in order to \"strong arm\" someone into participating in any act against their will.", severity: "FELONY" },
      { id: "2.3", text: "Brandishing a weapon in any manner which is intended to threaten GD Personnel.", severity: "FELONY" }
    ]
  },
  {
    section: "3. BATTERY",
    rules: [
      { id: "3.1", text: "Violent contact made with a lethal weapon.", severity: "FELONY" },
      { id: "3.2", text: "Violent contact made with a lethal weapon directed at GD Personnel.", severity: "FELONY" }
    ]
  },
  {
    section: "4. LOCKDOWN/MARTIAL LAW",
    rules: [
      { id: "4.1", text: "Trespassing in an area under Lockdown/Martial Law.", severity: "FELONY" },
      { id: "4.2", text: "Failure to comply with orders of Dominion Personnel, or engaging in any unlawful activity.", severity: "FELONY" }
    ]
  },
  {
    section: "5. ILLEGAL SUBSTANCES",
    rules: [
      { id: "5.1", text: "The solicitation of Illegal Substances.", severity: "INFRACTION" },
      { id: "5.2", text: "Possession of Illegal Substances.", severity: "MISDEMEANOR" },
      { id: "5.3", text: "Selling Illegal Substances.", severity: "FELONY" },
      { id: "5.4", text: "Manufacturing Illegal Substances.", severity: "FELONY" }
    ]
  },
  {
    section: "6. DEMORGAN'S CASTLE PRISON FACILITY",
    rules: [
      { id: "6.1", text: "Trespassing in the secure area of the colony.", severity: "FELONY" },
      { id: "6.2", text: "Failure to comply with orders of Personnel, or engaging in any unlawful activity.", severity: "FELONY" }
    ]
  },
  {
    section: "7. TERRORISM",
    rules: [
      { id: "7.1", text: "Conspiracy to commit terrorist attacks against Global Dominion personnel and facilities.", severity: "FELONY" },
      { id: "7.2", text: "Committing terrorist attacks against Global Dominion personnel and facilities.", severity: "FELONY" }
    ]
  },
  {
    section: "8. DISORDERLY CONDUCT",
    rules: [
      { id: "8.1", text: "Any verbal or physical act that results in a disturbance of peace.", severity: "MISDEMEANOR" },
      { id: "8.2", text: "Any verbal or physical act that results in a disturbance of peace directed at GD personnel.", severity: "FELONY" },
      { id: "8.3", text: "Walking on the grass in Ground Zero.", severity: "FELONY" }
    ]
  },
  {
    section: "9. OBSTRUCTION OF JUSTICE",
    rules: [
      { id: "9.1", text: "Any unintentional act that interferes with the operation of GD personnel.", severity: "MISDEMEANOR" },
      { id: "9.2", text: "Any intentional act that aims to prevent or prevents GD Personnel from performing their duties.", severity: "FELONY" }
    ]
  }
];

const definitions = [
  {
    term: "INFRACTIONS (I)",
    description: "Person will be warned to discontinue the behavior. Multiple infractions or infractions in combination with a misdemeanor or felony will result in an arrest or lethal force at officer discretion."
  },
  {
    term: "MISDEMEANORS (M)",
    description: "Person will be subject to discretionary forcible PP check (arrest), removal from premises or lethal force. It will be up to the individual Officer how best to remedy the situation. This type of offense carries a low PP punishment, UNLESS the officer has a type 2 section 4 self-infliction notice."
  },
  {
    term: "FELONIES (F)",
    description: "Person will be subject to immediate forcible PP check (arrest) and/or use of lethal force. This type of offense carries a high PP punishment."
  }
];

const specialStatuses = [
  {
    term: "MOST WANTED (MW)",
    description: "A Most wanted criminal is a person notorious for breaking the law and murdering innocent people. You can get a list of the current most wanted felons at any security terminal. Most Wanted felons will show up with a red \"MOST WANTED\" tag under your crosshairs when targeted."
  },
  {
    term: "ARREST ON SIGHT (AoS)",
    description: "The individual is to be stunned and arrested on sight."
  },
  {
    term: "KILL ON SIGHT (KoS)",
    description: "The individual is to be killed on site."
  }
];

const wswkProcess = {
  title: "WARN, STUN, WARN, KILL (WSWK) PROTOCOL",
  steps: [
    "First warning to cease and desist, or they will be fired on.",
    "If non-compliant or aggressive, use nonlethal force. Run PP check while target is incapacitated.",
    "Issue final warning that continued non-compliance will result in lethal force.",
    "Upon continued non-compliance, engage with lethal force."
  ]
};

export default function RegulationsPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlowingText>
            <h1 className="text-4xl font-cyber font-bold text-center mb-12">GLOBAL DOMINION LAW</h1>
          </GlowingText>

          {/* Laws Section */}
          <div className="space-y-8 mb-16">
            {laws.map((section, sectionIndex) => (
              <motion.div
                key={section.section}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <RustyBorder className="p-6 bg-cyber-darker/90">
                  <h2 className="text-xl font-cyber text-neon-blue mb-4">{section.section}</h2>
                  <div className="space-y-4">
                    {section.rules.map((rule) => (
                      <div 
                        key={rule.id}
                        className="flex items-start space-x-4 border-l-4 border-cyber-rust pl-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-cyber-rust font-cyber">{rule.id}</span>
                            <span className="text-gray-300">{rule.text}</span>
                          </div>
                          <div className="mt-1">
                            <span className={`text-xs font-cyber ${
                              rule.severity === 'FELONY' ? 'text-red-500' :
                              rule.severity === 'MISDEMEANOR' ? 'text-yellow-500' :
                              'text-green-500'
                            }`}>
                              {rule.severity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </RustyBorder>
              </motion.div>
            ))}
          </div>

          {/* Special Statuses Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-16"
          >
            <RustyBorder className="p-6 bg-cyber-darker/90">
              <h2 className="text-2xl font-cyber text-neon-blue mb-6">SPECIAL STATUS CLASSIFICATIONS</h2>
              <div className="space-y-6">
                {specialStatuses.map((status, index) => (
                  <div key={status.term} className="border-l-4 border-cyber-rust pl-4">
                    <h3 className="text-xl font-cyber text-cyber-warning mb-2">{status.term}</h3>
                    <p className="text-gray-300">{status.description}</p>
                  </div>
                ))}
              </div>
            </RustyBorder>
          </motion.div>

          {/* WSWK Protocol Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <RustyBorder className="p-6 bg-cyber-darker/90">
              <h2 className="text-2xl font-cyber text-neon-blue mb-6">{wswkProcess.title}</h2>
              <div className="space-y-4">
                {wswkProcess.steps.map((step, index) => (
                  <div 
                    key={index}
                    className="border-l-4 border-cyber-rust pl-4 text-gray-300"
                  >
                    {step}
                  </div>
                ))}
              </div>
            </RustyBorder>
          </motion.div>

          {/* Definitions Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <RustyBorder className="p-6 bg-cyber-darker/90">
              <h2 className="text-2xl font-cyber text-neon-blue mb-6">VIOLATION CLASSIFICATIONS</h2>
              <div className="space-y-6">
                {definitions.map((def, index) => (
                  <div key={def.term} className="border-l-4 border-cyber-rust pl-4">
                    <h3 className="text-xl font-cyber text-cyber-warning mb-2">{def.term}</h3>
                    <p className="text-gray-300">{def.description}</p>
                  </div>
                ))}
              </div>
            </RustyBorder>
          </motion.div>

          <div className="mt-12 text-center">
            <p className="text-cyber-warning font-cyber text-sm animate-warning-flash">
              ⚠ IGNORANCE OF THE LAW IS NO EXCUSE ⚠
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
import { motion } from 'framer-motion';
import { DiscordLogoIcon } from '../components/Icons/DiscordLogo';
import { LEDDiscordIcon, ForumIcon, WebsiteIcon } from '../components/Icons/LinkIcons';
import RustyBorder from '../components/UI/RustyBorder';
import GlowingText from '../components/UI/GlowingText';

const links = [
  {
    title: "LED Discord",
    description: "Join the Law Enforcement Department's official Discord server.",
    url: "https://discord.gg/x4wJEP7sgF",
    icon: LEDDiscordIcon,
    color: "neon-blue"
  },
  {
    title: "Empire Rising Discord",
    description: "Connect with the broader Empire Rising community.",
    url: "https://discord.gg/communityofmankind",
    icon: LEDDiscordIcon,
    color: "cyber-rust"
  },
  {
    title: "Empire Rising Forums",
    description: "Participate in discussions on the official forums.",
    url: "https://forums.empirerising.co.uk",
    icon: ForumIcon,
    color: "neon-blue"
  },
  {
    title: "Empire Rising Website",
    description: "Visit the official Empire Rising website.",
    url: "https://www.empirerising.co.uk/",
    icon: WebsiteIcon,
    color: "cyber-rust"
  }
];

export default function LinksPage() {
  return (
    <div className="min-h-screen py-20 px-4 bg-cyber-darker bg-cyber-grid bg-[size:50px_50px]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <GlowingText>
            <h1 className="text-4xl font-cyber font-bold text-center mb-12">OFFICIAL LINKS</h1>
          </GlowingText>

          <div className="space-y-6">
            {links.map((link, index) => (
              <motion.div
                key={link.url}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <RustyBorder className="p-6 bg-cyber-darker/90 transition-transform duration-300 group-hover:scale-[1.02]">
                    <div className="flex items-center gap-6">
                      <div className={`flex-shrink-0 w-16 h-16 bg-cyber-darker rounded-lg border-2 border-${link.color} flex items-center justify-center`}>
                        <link.icon className={`w-10 h-10 text-${link.color}`} />
                      </div>
                      <div className="flex-1">
                        <GlowingText color={link.color}>
                          <h2 className="text-2xl font-cyber mb-2">{link.title}</h2>
                        </GlowingText>
                        <p className="text-gray-300 font-cyber text-sm">{link.description}</p>
                      </div>
                      <div className="text-gray-500 group-hover:text-neon-blue transition-colors duration-300">
                        →
                      </div>
                    </div>
                  </RustyBorder>
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
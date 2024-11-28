import { Link } from 'react-router-dom';
import { DiscordLogoIcon } from '../Icons/DiscordLogo';

export default function Navigation({ className, mobile }) {
  const links = [
    { name: 'HISTORY', href: '/history' },
    { name: 'DEPARTMENTS', href: '/departments' },
    { name: 'RANKS', href: '/ranks' },
    { name: 'THE LAW', href: '/regulations' },
    { name: 'LINKS', href: '/links' },
    { 
      name: 'DISCORD',
      href: 'https://discord.gg/x4wJEP7sgF',
      external: true,
      icon: DiscordLogoIcon
    }
  ];

  const baseClasses = "font-cyber tracking-wider transition-colors duration-200";
  const mobileClasses = "block text-base leading-7 text-neon-blue hover:text-neon-red flex items-center gap-2";
  const desktopClasses = "text-sm font-semibold leading-6 text-neon-blue hover:text-neon-red flex items-center gap-2";

  return (
    <div className={className}>
      {links.map((link) => (
        link.external ? (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
          >
            {link.icon && <link.icon className="w-5 h-5" />}
            {link.name}
          </a>
        ) : (
          <Link
            key={link.name}
            to={link.href}
            className={`${baseClasses} ${mobile ? mobileClasses : desktopClasses}`}
          >
            {link.icon && <link.icon className="w-5 h-5" />}
            {link.name}
          </Link>
        )
      ))}
    </div>
  );
}
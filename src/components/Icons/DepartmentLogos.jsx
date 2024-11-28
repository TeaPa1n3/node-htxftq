import { motion } from 'framer-motion';

export const DPDLogo = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M50 10 L90 30 L90 70 L50 90 L10 70 L10 30 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <text x="50" y="55" fontSize="20" fill="currentColor" textAnchor="middle" className="font-cyber">DPD</text>
  </svg>
);

export const DCLogo = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M20 20 H80 V80 H20 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <text x="50" y="55" fontSize="20" fill="currentColor" textAnchor="middle" className="font-cyber">DC</text>
  </svg>
);

export const IADLogo = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <text x="50" y="55" fontSize="20" fill="currentColor" textAnchor="middle" className="font-cyber">IAD</text>
  </svg>
);

export const EADLogo = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M10 50 L50 10 L90 50 L50 90 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <text x="50" y="55" fontSize="20" fill="currentColor" textAnchor="middle" className="font-cyber">EAD</text>
  </svg>
);

export const DTILogo = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M20 80 L50 20 L80 80 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <text x="50" y="60" fontSize="20" fill="currentColor" textAnchor="middle" className="font-cyber">DTI</text>
  </svg>
);

export const DMOLogo = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M20 20 L80 20 L80 80 L20 80 Z M20 50 L80 50 M50 20 L50 80"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <text x="50" y="55" fontSize="20" fill="currentColor" textAnchor="middle" className="font-cyber">DMO</text>
  </svg>
);
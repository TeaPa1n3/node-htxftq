import { motion } from 'framer-motion';

export const RapidResponseIcon = ({ className }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
    initial="hidden"
    animate="visible"
  >
    <defs>
      <linearGradient id="lightning-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
      </linearGradient>
    </defs>
    <motion.path
      d="M50 10 L65 45 L90 45 L70 60 L80 90 L50 70 L20 90 L30 60 L10 45 L35 45 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="50"
      cy="50"
      r="40"
      stroke="currentColor"
      strokeWidth="1"
      fill="none"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1.1, opacity: 0.2 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
  </motion.svg>
);

export const StreetPatrolIcon = ({ className }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M20 50 L40 30 L60 30 L80 50 L60 70 L40 70 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M50 20 L50 80"
      stroke="currentColor"
      strokeWidth="2"
      strokeDasharray="4 4"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
    />
  </motion.svg>
);

export const CastleCustodianIcon = ({ className }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      d="M30 80 L30 40 L20 40 L50 10 L80 40 L70 40 L70 80 Z"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.path
      d="M45 80 L45 60 L55 60 L55 80"
      stroke="currentColor"
      strokeWidth="2"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1, repeat: Infinity, delay: 1 }}
    />
  </motion.svg>
);

export const CitizenControlIcon = ({ className }) => (
  <motion.svg 
    className={className} 
    viewBox="0 0 100 100" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.circle
      cx="50"
      cy="35"
      r="15"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 1.5, repeat: Infinity }}
    />
    <motion.path
      d="M30 80 C30 60 70 60 70 80"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <motion.circle
      cx="50"
      cy="50"
      r="35"
      stroke="currentColor"
      strokeWidth="1"
      strokeDasharray="4 4"
      fill="none"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    />
  </motion.svg>
);
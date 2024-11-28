import React from 'react';
import GlowingText from '../UI/GlowingText';

export default function Logo() {
  return (
    <div className="flex lg:flex-1">
      <a href="/" className="-m-1.5 p-1.5 flex items-center">
        <img 
          src="https://lh3.googleusercontent.com/pw/AP1GczNtLw3MPrreDVmFE_GemRawS3zArGs-HoAFzzPyTiyfZCcNQsiZV8fO4W4EcrVlApDGEGUk2seaLgNr66J2AElwenaOPDv3JL6oF4G4QMM5WTGbRA3DMcqIVTc4TROUBpT5YZzmJP4t_ZOfKYVwAGvS=w400-h400-s-no-gm?authuser=0" 
          alt="LED Logo" 
          className="w-20 h-20 mr-3 object-contain"
        />
        <div className="flex flex-col">
          <span className="font-cyber text-neon-blue font-bold text-xl tracking-wider">LAW ENFORCEMENT</span>
          <GlowingText>
            <span className="text-xs font-cyber tracking-widest">DEPARTMENT</span>
          </GlowingText>
        </div>
      </a>
    </div>
  );
}
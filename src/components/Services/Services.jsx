import { ShieldCheckIcon, UserGroupIcon, BoltIcon, ScaleIcon } from '@heroicons/react/24/outline';
import ServiceCard from './ServiceCard';
import { RapidResponseIcon, StreetPatrolIcon, CastleCustodianIcon, CitizenControlIcon } from '../Icons/ServiceIcons';

const services = [
  {
    title: 'RAPID RESPONSE',
    description: 'Officers of the LED will respond to calls for aid swiftly and robustly.',
    icon: RapidResponseIcon,
  },
  {
    title: 'STREET PATROLS',
    description: 'Maintaining a constant reassuring presence on the streets of the Dominion.',
    icon: StreetPatrolIcon,
  },
  {
    title: 'CASTLE CUSTODIANS',
    description: 'Keeping criminals and dissidents secure in DeMorgans Castle.',
    icon: CastleCustodianIcon,
  },
  {
    title: 'CITIZEN CONTROL',
    description: 'Total surveillance. Behavior analysis. Thought monitoring. The law sees all.',
    icon: CitizenControlIcon,
  },
];

export default function Services() {
  return (
    <div className="bg-cyber-dark bg-cyber-grid bg-[size:50px_50px] relative -mt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-darker via-transparent to-cyber-darker" />
      <div className="relative py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight font-cyber text-neon-blue sm:text-4xl drop-shadow-[0_0_10px_rgba(0,243,255,0.3)]">
              ACTIVE PROTOCOLS
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-400 font-cyber">
              Maintaining order through absolute authority and lethal force.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-6 sm:mt-12 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
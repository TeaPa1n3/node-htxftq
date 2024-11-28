export default function WarningBanner() {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg">
      <div className="animate-warning-flash text-center text-cyber-warning text-sm font-cyber tracking-widest mb-8 bg-cyber-darker/80 p-2 border-y border-cyber-warning/30">
        <span className="mr-2">⚠</span>
        EMERGENCY PROTOCOLS ACTIVE
        <span className="ml-2">⚠</span>
      </div>
    </div>
  );
}
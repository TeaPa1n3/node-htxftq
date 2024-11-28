export default function RustyBorder({ children, className = "" }) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-rust/20 to-cyber-rust/40 rounded-lg" />
      <div className="absolute inset-0 bg-[url('/rust-texture.png')] opacity-20 mix-blend-overlay rounded-lg" />
      <div className="relative">{children}</div>
    </div>
  );
}
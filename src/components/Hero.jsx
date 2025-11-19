import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

function NeonButton({ children, variant = 'primary' }) {
  const variants = {
    primary: 'from-green-400 via-emerald-400 to-cyan-400',
    secondary: 'from-fuchsia-400 via-purple-400 to-indigo-400',
  }
  return (
    <button className="relative group">
      <span className={`absolute inset-0 rounded-xl blur-md opacity-70 group-hover:opacity-100 transition-opacity bg-gradient-to-r ${variants[variant]}`}></span>
      <span className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white font-medium tracking-wide backdrop-blur-md">
        {children}
      </span>
    </button>
  )
}

export default function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -left-24 w-[50vw] h-[50vw] rounded-full bg-[radial-gradient(circle,rgba(0,255,170,0.15),transparent_60%)]" />
        <div className="absolute top-20 right-0 w-[40vw] h-[40vw] rounded-full bg-[radial-gradient(circle,rgba(120,0,255,0.25),transparent_65%)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vw] bg-[radial-gradient(circle_at_50%_0%,rgba(0,200,255,0.2),transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full px-6 sm:px-10 lg:px-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-6xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md text-xs text-white/80 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_15px_2px_rgba(16,185,129,0.8)]" />
              Immersive Motion & Digital Studio
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight tracking-tight text-white">
              <span className="relative inline-block">
                <span className="absolute inset-0 blur-xl bg-[linear-gradient(135deg,#22ff88,#00d0ff)] opacity-30 rounded-md" />
                <span className="relative bg-clip-text text-transparent bg-[linear-gradient(90deg,#7effb2,#4df3ff_40%,#9b8cff)] drop-shadow-[0_0_25px_rgba(99,255,203,0.35)]">
                  EMD Studio
                </span>
              </span>
              <span className="block mt-3 text-[clamp(18px,2.1vw,28px)] font-medium text-white/80">
                Bold Video • 3D Animation • Motion Design • Creative Experiences
              </span>
            </h1>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <NeonButton>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-emerald-300"><path d="M8 5.14v14l11-7-11-7z"/></svg>
                View Reel
              </NeonButton>
              <NeonButton variant="secondary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-purple-300"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 0 20"/></svg>
                Explore Worlds
              </NeonButton>
            </div>
          </motion.div>
        </div>
      </div>

      {/* HUD lines */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <div className="absolute left-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />
        <div className="absolute right-10 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-fuchsia-400/20 to-transparent" />
        <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
      </div>
    </section>
  )
}

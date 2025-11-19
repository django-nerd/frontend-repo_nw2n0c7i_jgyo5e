import { motion } from 'framer-motion'

const WORLDS = [
  { title: 'Video & Animation', color: 'from-fuchsia-500 via-purple-500 to-indigo-500', edge: 'shadow-[0_0_40px_rgba(217,70,239,0.35)]', hint: 'Vibrant neon purple world' },
  { title: 'Graphics & Branding', color: 'from-cyan-400 via-teal-400 to-emerald-400', edge: 'shadow-[0_0_40px_rgba(34,197,194,0.35)]', hint: 'Electric turquoise world' },
  { title: 'Web & Interactive', color: 'from-sky-400 via-blue-500 to-indigo-500', edge: 'shadow-[0_0_40px_rgba(59,130,246,0.35)]', hint: 'Cyber blue world' },
  { title: 'Presentations', color: 'from-yellow-300 via-amber-300 to-orange-400', edge: 'shadow-[0_0_40px_rgba(250,204,21,0.35)]', hint: 'Neon yellow accents' },
  { title: 'AI Creations / NFTs', color: 'from-emerald-400 via-cyan-400 to-fuchsia-400', edge: 'shadow-[0_0_40px_rgba(99,255,203,0.35)]', hint: 'Glitch distortion style' },
]

function Portal({ title, color, edge, hint }) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 250, damping: 20 }} className="group relative rounded-3xl overflow-hidden">
      <div className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-br ${color} opacity-60 blur`}></div>
      <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6 min-h-[220px] flex items-end">
        <div>
          <div className={`h-8 w-8 rounded-full bg-white/5 border border-white/10 ${edge}`}></div>
          <h3 className="mt-4 text-xl font-semibold text-white">{title}</h3>
          <p className="text-white/60 text-sm">{hint}</p>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
    </motion.div>
  )
}

export default function Worlds() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Explore Worlds</h2>
          <span className="text-xs text-white/50">Interactive portals</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WORLDS.map((w, i) => (
            <Portal key={i} {...w} />
          ))}
        </div>
      </div>

      {/* Subtle glitch bars */}
      <div className="pointer-events-none absolute inset-x-0 top-10 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-10 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
    </section>
  )
}

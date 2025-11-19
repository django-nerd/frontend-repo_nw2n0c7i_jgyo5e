import { motion } from 'framer-motion'

export default function AboutTeaser() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Liquid neon splashes */}
      <div className="pointer-events-none absolute -top-24 right-0 w-[40vw] h-[40vw] rounded-full bg-[conic-gradient(from_180deg,rgba(0,255,170,0.15),rgba(0,200,255,0.08),transparent_70%)] blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">Art + Tech, fused.</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              We craft cinematic visuals, responsive identities and immersive worlds. From kinetic typography to realtime 3D, our work blends precision and play to help bold brands move at the speed of culture.
            </p>
            <button className="mt-6 relative group">
              <span className="absolute inset-0 rounded-xl blur-md opacity-70 transition-opacity group-hover:opacity-100 bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400" />
              <span className="relative inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white font-medium tracking-wide backdrop-blur-md">
                Learn More
              </span>
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="order-1 md:order-2">
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Avatar silhouette */}
              <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.3),transparent_55%),radial-gradient(circle_at_70%_70%,rgba(168,85,247,0.25),transparent_55%)]" />
              <div className="absolute inset-[2px] rounded-3xl border border-white/10 backdrop-blur-xl bg-slate-900/40" />
              <div className="absolute inset-0 rounded-3xl mix-blend-screen bg-[url('https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-30" />
              <div className="absolute inset-0 rounded-3xl border border-emerald-400/30 shadow-[0_0_30px_5px_rgba(16,185,129,0.25)_inset]" />
              <div className="absolute -inset-6 -z-10 blur-3xl bg-[conic-gradient(from_90deg,rgba(16,185,129,0.15),rgba(59,130,246,0.15),transparent_60%)]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Glitch lines */}
      <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/30 to-transparent" />
    </section>
  )
}

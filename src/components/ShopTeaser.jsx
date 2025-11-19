import { motion } from 'framer-motion'

const PRODUCTS = [
  { title: 'Motion Presets Pack', tag: 'Coming Soon' },
  { title: 'Neon Texture Kit', tag: 'Coming Soon' },
  { title: 'HUD UI Elements', tag: 'Coming Soon' },
]

export default function ShopTeaser() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Shop</h2>
          <span className="text-xs text-white/50">Digital Products</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PRODUCTS.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} className="relative rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-6">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-emerald-400/30 via-cyan-400/30 to-fuchsia-400/30 opacity-0 group-hover:opacity-100 blur" />
              <h3 className="text-white font-semibold">{p.title}</h3>
              <span className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-300">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                {p.tag}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/20 to-transparent" />
    </section>
  )
}

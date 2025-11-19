import { motion } from 'framer-motion'

const ITEMS = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  img: `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1935&auto=format&fit=crop`,
}))

function Card({ item }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="group relative rounded-2xl overflow-hidden bg-slate-900/60 border border-white/10 backdrop-blur-xl">
      <div className="aspect-video overflow-hidden">
        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute inset-0 mix-blend-screen bg-[radial-gradient(circle_at_50%_80%,rgba(99,255,203,0.25),transparent_60%)]" />
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <h4 className="text-white font-medium">{item.title}</h4>
        <span className="text-[10px] uppercase tracking-widest text-emerald-300">View</span>
      </div>
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-emerald-300/40 transition" />
      <div className="absolute -inset-0.5 rounded-2xl opacity-0 group-hover:opacity-60 transition bg-[conic-gradient(from_90deg,rgba(99,255,203,0.25),rgba(168,85,247,0.25),transparent_60%)] blur" />
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section className="relative py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">Selected Work</h2>
          <span className="text-xs text-white/50">Preview</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ITEMS.map((it) => (
            <Card key={it.id} item={it} />
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  )
}

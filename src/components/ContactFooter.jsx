export default function ContactFooter() {
  return (
    <footer className="relative py-20 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-white">Let’s build your next world</h3>
            <p className="mt-2 text-white/60">Drop a line and we’ll get back fast.</p>
            <div className="mt-6 flex items-center gap-4 text-white/70">
              <a href="#" className="hover:text-white transition">Twitter</a>
              <a href="#" className="hover:text-white transition">Instagram</a>
              <a href="#" className="hover:text-white transition">Behance</a>
              <a href="#" className="hover:text-white transition">Dribbble</a>
            </div>
          </div>
          <form className="grid sm:grid-cols-2 gap-4">
            <input className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Name" />
            <input className="col-span-1 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Email" />
            <textarea className="col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" rows="4" placeholder="Tell us about your project" />
            <button className="col-span-2 relative group">
              <span className="absolute inset-0 rounded-xl blur-md opacity-70 transition-opacity group-hover:opacity-100 bg-gradient-to-r from-emerald-400 via-cyan-400 to-fuchsia-400" />
              <span className="relative inline-flex items-center justify-center w-full px-5 py-3 rounded-xl bg-slate-900/60 border border-white/10 text-white font-medium tracking-wide backdrop-blur-md">Send</span>
            </button>
          </form>
        </div>
        <div className="mt-10 text-white/40 text-xs">© {new Date().getFullYear()} EMD Studio. All rights reserved.</div>
      </div>
    </footer>
  )
}

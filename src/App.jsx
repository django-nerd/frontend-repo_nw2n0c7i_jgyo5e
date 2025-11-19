import Hero from './components/Hero'
import AboutTeaser from './components/AboutTeaser'
import Worlds from './components/Worlds'
import Portfolio from './components/Portfolio'
import ShopTeaser from './components/ShopTeaser'
import ContactFooter from './components/ContactFooter'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Global background accents */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_10%,rgba(34,197,94,0.05),transparent),radial-gradient(1200px_600px_at_90%_10%,rgba(147,51,234,0.06),transparent),radial-gradient(1000px_500px_at_50%_120%,rgba(56,189,248,0.08),transparent)]" />
      </div>

      {/* HERO */}
      <Hero />

      {/* ABOUT TEASER */}
      <AboutTeaser />

      {/* WORLDS / SERVICES */}
      <Worlds />

      {/* PORTFOLIO */}
      <Portfolio />

      {/* SHOP TEASER */}
      <ShopTeaser />

      {/* CONTACT FOOTER */}
      <ContactFooter />
    </div>
  )
}

export default App

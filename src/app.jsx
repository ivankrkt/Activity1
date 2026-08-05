import { useState } from 'react'
import './App.css'

function App() {
  const [lightbox, setLightbox] = useState({ open: false, title: '', desc: '' })

  const openLightbox = (title, desc) => setLightbox({ open: true, title, desc })
  const closeLightbox = () => setLightbox({ open: false, title: '', desc: '' })

  return (
    <>
      <div className="bg-anim" aria-hidden="true" />

      {/* NAVBAR */}
      <nav className="nav flex justify-between items-center px-6 py-5 md:px-16 fixed top-0 z-50">
        <div className="brand neon-brand">VALORANT</div>
        <ul className="hidden md:flex gap-8 text-sm uppercase text-zinc-300">
          <li>Home</li><li>Agents</li><li>Maps</li><li>Ranked</li><li>News</li>
        </ul>
        <button className="btn-slash">Play Now</button>
      </nav>

      {/* HERO */}
      <section className="hero-section text-center">
        <div className="hero-inner">
          <span className="badge">Free To Play Tactical Shooter</span>
          <h1 className="hero-title neon-title">Defy The Limits</h1>
          <p className="hero-sub">Fast tactical rounds, unique agents, and a competitive ranked system.</p>
          <div className="hero-ctas">
            <button className="btn-slash">Play For Free</button>
            <button onClick={() => openLightbox('Trailer','Imagine a cinematic trailer here.')} className="btn-outline">Watch Trailer</button>
          </div>
        </div>
      </section>

      {/* AGENTS */}
      <section className="agents text-center">
        <h2 className="section-title neon-accent">Choose Your Agent</h2>
        <div className="choices">
          <div className="choice-card" onClick={() => openLightbox('Duelist','High mobility and entry fragging specialists.')}>
            <h3 className="choice-title neon-accent">Duelist</h3>
            <p className="choice-desc">High mobility and entry fragging specialists.</p>
          </div>
          <div className="choice-card" onClick={() => openLightbox('Initiator','Create space and open fights for your team.')}>
            <h3 className="choice-title neon-accent">Initiator</h3>
            <p className="choice-desc">Create space and open fights for your team.</p>
          </div>
          <div className="choice-card" onClick={() => openLightbox('Sentinel','Lock down sites and support teammates.')}>
            <h3 className="choice-title neon-accent">Sentinel</h3>
            <p className="choice-desc">Lock down sites and support teammates.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer text-center">
        <p>(c) 2026 Riot Games, Inc. Fan-made practice project.</p>
      </footer>

      {/* LIGHTBOX */}
      {lightbox.open && (
        <div className="modal">
          <div className="modal-backdrop" onClick={closeLightbox}></div>
          <div className="modal-content">
            <button className="modal-close" onClick={closeLightbox}>✕</button>
            <h3 className="modal-title neon-accent">{lightbox.title}</h3>
            <p className="modal-desc">{lightbox.desc}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default App

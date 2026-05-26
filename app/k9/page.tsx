'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

const slideUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
}

export default function K9Page() {
  return (
    <main style={{ background: '#0a0a0a', color: '#fff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif' }}>
      {/* NAV */}
      <motion.nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: 'rgba(10,10,10,0.95)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(10px)',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div style={{ maxWidth: '100%', padding: '24px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} whileHover={{ scale: 1.02 }}>
              <img src="/canada-flag.png" alt="Canadian flag" style={{ height: '16px', width: 'auto', flexShrink: 0 }} />
              <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff' }}>HALLOR</span>
            </motion.div>
          </Link>

          <div style={{ display: 'flex', gap: '60px', fontSize: '14px', fontWeight: 500 }}>
            <Link href="/" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>HOME</motion.div>
            </Link>
            <Link href="/gse" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>GREEN OX</motion.div>
            </Link>
            <Link href="/k9" style={{ cursor: 'pointer', color: '#0099FF', textDecoration: 'none', fontWeight: 600 }}>
              K9 DEFEND
            </Link>
            <Link href="/team" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>TEAM</motion.div>
            </Link>
            <Link href="/investors" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>INVESTORS</motion.div>
            </Link>
            <Link href="/contact" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>CONTACT</motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingLeft: '60px', paddingRight: '60px', paddingBottom: '60px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', background: 'linear-gradient(135deg, rgba(0,153,255,0.08) 0%, rgba(0,217,255,0.03) 100%)', pointerEvents: 'none' }} />

        <motion.div style={{ maxWidth: '950px', width: '100%', position: 'relative', zIndex: 1 }} initial="hidden" animate="visible" variants={fadeIn}>
          <motion.div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '32px', color: '#0099FF', textTransform: 'uppercase' }} variants={slideUp}>
            Hallor Defense Systems
          </motion.div>

          <motion.h1
            style={{
              fontSize: 'clamp(3rem, 12vw, 5.5rem)',
              fontWeight: 900,
              lineHeight: 1.05,
              marginBottom: '40px',
              letterSpacing: '-0.02em',
              color: '#fff',
            }}
            variants={slideUp}
          >
            <div>K9 Defend.</div>
            <div>Military-Spec</div>
            <div>Autonomous.</div>
          </motion.h1>

          <motion.p style={{ fontSize: '18px', fontWeight: 300, marginBottom: '72px', maxWidth: '650px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }} variants={slideUp}>
            Canadian military-spec electric tactical vehicle. SAE Level 4 autonomous capable. NATO STANAG ready. Proven drivetrain from 7 years of commercial aviation deployment now advancing defense innovation.
          </motion.p>

          <motion.div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} variants={slideUp}>
            <motion.button
              style={{
                padding: '18px 48px',
                background: '#0099FF',
                color: '#fff',
                border: 'none',
                fontWeight: 900,
                fontSize: '14px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 20px 40px rgba(0,153,255,0.2)',
              }}
              whileHover={{ scale: 1.06, boxShadow: '0 30px 60px rgba(0,153,255,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              LEARN MORE
            </motion.button>

            <motion.button
              style={{
                padding: '18px 48px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid #0099FF',
                fontWeight: 900,
                fontSize: '14px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ scale: 1.06, background: '#0099FF15', boxShadow: '0 0 30px #0099FF40' }}
              whileTap={{ scale: 0.98 }}
            >
              SPECIFICATIONS
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* PHASE 1: MANNED */}
      <section style={{ padding: '160px 60px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(0,153,255,0.3)' }} variants={slideUp}>
            <img src="/k9-manned.jpeg" alt="K9 Defend Manned Phase 1" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </motion.div>

          <motion.div variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '28px', color: '#0099FF', textTransform: 'uppercase' }}>
              Phase 1: Manned Operations
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '36px', letterSpacing: '-0.01em' }}>
              Manned Platform.<br />
              12 Month Timeline.
            </h2>
            <p style={{ fontSize: '17px', fontWeight: 300, marginBottom: '32px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
              Military-spec 4x4 electric tactical vehicle engineered to NATO STANAG specifications. Proven electric drivetrain from 7 years of commercial deployment. Ready for field operations in 12 months.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '48px' }}>
              {[
                { label: 'Range per Charge', value: '80–120 km' },
                { label: 'Cold Start', value: '-47°C Proven' },
                { label: 'Tactical Speed', value: '45 km/h' },
                { label: 'Payload Capacity', value: '2,000+ lbs' },
              ].map((spec) => (
                <div key={spec.label}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#0099FF', letterSpacing: '0.1em', marginBottom: '8px', textTransform: 'uppercase' }}>{spec.label}</div>
                  <div style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>{spec.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* PHASE 2: AUTONOMOUS */}
      <section style={{ padding: '160px 60px', background: '#0a0a0a', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '100px', alignItems: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '28px', color: '#0099FF', textTransform: 'uppercase' }}>
              Phase 2: Autonomous Operations
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '36px', letterSpacing: '-0.01em' }}>
              SAE Level 4<br />
              Autonomous UGV.
            </h2>
            <p style={{ fontSize: '17px', fontWeight: 300, marginBottom: '32px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
              Autonomous conversion leverages proven manned platform hardware. SAE Level 4 capable. DND-owned software architecture. Swarm-capable for coordinated multi-vehicle operations. Software-driven advancement, not hardware redesign.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '48px' }}>
              {[
                'SAE Level 4 Autonomous',
                'NATO STANAG Ready',
                'DND-Owned Software',
                'Swarm-Capable',
                'Multi-Mission Payload Ready',
              ].map((item) => (
                <li key={item} style={{ fontSize: '15px', marginBottom: '12px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0099FF', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(0,153,255,0.3)' }} variants={slideUp}>
            <img src="/k9-unmanned.jpeg" alt="K9 Defend Autonomous Phase 2" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ padding: '160px 60px', background: '#000' }}>
        <motion.div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, marginBottom: '36px', lineHeight: 1.15, letterSpacing: '-0.01em', color: '#fff' }} variants={slideUp}>
            Ready for Next-Gen Defense Mobility?
          </motion.h2>
          <motion.p style={{ fontSize: '17px', fontWeight: 300, marginBottom: '60px', color: 'rgba(255,255,255,0.8)', maxWidth: '650px', margin: '0 auto', marginBottom: '60px', lineHeight: 1.8 }} variants={slideUp}>
            Schedule a briefing with our defense systems team to explore K9 Defend capabilities.
          </motion.p>
          <motion.button
            style={{
              padding: '18px 48px',
              background: '#0099FF',
              color: '#fff',
              border: 'none',
              fontWeight: 900,
              fontSize: '14px',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 20px 40px rgba(0,153,255,0.2)',
            }}
            whileHover={{ scale: 1.06, boxShadow: '0 30px 60px rgba(0,153,255,0.3)' }}
            whileTap={{ scale: 0.98 }}
            variants={slideUp}
          >
            SCHEDULE BRIEFING
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: '60px 60px', background: '#0a0a0a', color: 'rgba(255,255,255,0.6)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '14px' }}>
        <p>© 2025 Hallor Technologies · Silent Mobility for Critical Infrastructure</p>
      </section>
    </main>
  )
}

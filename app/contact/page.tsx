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

export default function ContactPage() {
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
          background: 'rgba(255,255,255,0.95)',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
          backdropFilter: 'blur(10px)',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <div style={{ maxWidth: '100%', padding: '24px 80px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} whileHover={{ scale: 1.02 }}>
              <img src="/halloricon.png" alt="Hallor Logo" style={{ height: '32px', width: 'auto', flexShrink: 0 }} />
              <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', color: '#000' }}>HALLOR</span>
            </motion.div>
          </Link>

          <div style={{ display: 'flex', gap: '60px', fontSize: '14px', fontWeight: 500 }}>
            <Link href="/gse" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>GREEN OX</motion.div>
            </Link>
            <Link href="/k9" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>K9 DEFEND</motion.div>
            </Link>
            <Link href="/team" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>TEAM</motion.div>
            </Link>
            <Link href="/investors" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>INVESTORS</motion.div>
            </Link>
            <Link href="/contact" style={{ cursor: 'pointer', color: '#fff', textDecoration: 'none', fontWeight: 600 }}>
              CONTACT
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '80px', background: '#0a0a0a' }}>
        <motion.div style={{ maxWidth: '700px', width: '100%', textAlign: 'center' }} initial="hidden" animate="visible" variants={fadeIn}>
          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 4rem)',
              fontWeight: 900,
              lineHeight: 1,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
            }}
            variants={slideUp}
          >
            Let's Build Something Sovereign.
          </motion.h1>

          <motion.p style={{ fontSize: '18px', fontWeight: 300, marginBottom: '48px', color: 'rgba(0,0,0,0.75)', lineHeight: 1.6 }} variants={slideUp}>
            Interested in joining Hallor? Have questions about GSE or K9 Defend? Get in touch with the team.
          </motion.p>
        </motion.div>
      </section>

      {/* CONTACT INFO */}
      <section style={{ padding: '80px 40px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '80px' }}>
            {/* CEO Contact */}
            <motion.div variants={slideUp}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
                EXECUTIVE
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>Dean Kneider</h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
                CEO. Schnitzel. Open investment conversations.
              </p>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff', marginBottom: '8px' }}>
                1-604-209-9686
              </div>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>
                dean@hallorgroup.com
              </div>
            </motion.div>

            {/* Operations Contact */}
            <motion.div variants={slideUp}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
                OPERATIONS
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>Christina Van</h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
                Operations & Communications. Customer inquiries. Press.
              </p>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff', marginBottom: '8px' }}>
                christina@hallorgroup.com
              </div>
              <div style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.75)', marginTop: '16px' }}>
                +1 (604) 555-0142
              </div>
            </motion.div>

            {/* Headquarters */}
            <motion.div variants={slideUp}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
                HEADQUARTERS
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>Canada</h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
                Development center. Test facilities. 8 airports operational.
              </p>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>
                info@hallorgroup.com
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ padding: '80px 40px', background: '#0a0a0a' }}>
        <motion.div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '16px' }} variants={slideUp}>
            Schedule a Briefing
          </motion.h2>
          <motion.p style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(0,0,0,0.75)', maxWidth: '600px', margin: '0 auto 48px auto', lineHeight: 1.6 }} variants={slideUp}>
            Investors, partners, and press can schedule time with the leadership team. We move fast and we're transparent. Let's talk.
          </motion.p>
          <motion.button
            style={{
              padding: '20px 60px',
              background: '#000',
              color: '#fff',
              border: 'none',
              fontWeight: 900,
              fontSize: '14px',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              borderRadius: '4px',
            }}
            whileHover={{ scale: 1.05, background: '#1a1a1a' }}
            whileTap={{ scale: 0.95 }}
          >
            CALENDLY LINK
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: '80px 40px', background: '#000', color: '#fff', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <motion.div initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
            Hallor Technologies · Silent Mobility for Critical Infrastructure
          </p>
          <p style={{ fontSize: '12px', fontWeight: 300, color: 'rgba(255,255,255,0.5)' }}>
            © 2024. All rights reserved.
          </p>
        </motion.div>
      </section>
    </main>
  )
}

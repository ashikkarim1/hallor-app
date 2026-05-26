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

export default function GSEPage() {
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
            <motion.div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} whileHover={{ scale: 1.02 }}>
              <img src="/halloricon.png?v=2" alt="Hallor Logo" style={{ height: '32px', width: 'auto', flexShrink: 0 }} />
              <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff' }}>HALLOR</span>
            </motion.div>
          </Link>

          <div style={{ display: 'flex', gap: '60px', fontSize: '14px', fontWeight: 500 }}>
            <Link href="/" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>HOME</motion.div>
            </Link>
            <Link href="/gse" style={{ cursor: 'pointer', color: '#00D9FF', textDecoration: 'none', fontWeight: 600 }}>
              GREEN OX
            </Link>
            <Link href="/k9" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>K9 DEFEND</motion.div>
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
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '80px', paddingLeft: '60px', paddingRight: '60px', paddingBottom: '40px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', background: 'linear-gradient(135deg, rgba(0,217,255,0.08) 0%, rgba(0,153,255,0.03) 100%)', pointerEvents: 'none' }} />

        <motion.div style={{ maxWidth: '950px', width: '100%', position: 'relative', zIndex: 1 }} initial="hidden" animate="visible" variants={fadeIn}>
          <motion.div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '16px', color: '#00D9FF', textTransform: 'uppercase' }} variants={slideUp}>
            Hallor GSE
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
            <div>The Green Ox.</div>
            <div>Electrifying</div>
            <div>Aviation.</div>
          </motion.h1>

          <motion.p style={{ fontSize: '18px', fontWeight: 300, marginBottom: '72px', maxWidth: '650px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }} variants={slideUp}>
            World's only modular electric ground support equipment platform. Seven years operational at 8 airports worldwide. Revenue-generating platform funding next-generation defense innovation.
          </motion.p>

          <motion.div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} variants={slideUp}>
            <motion.button
              style={{
                padding: '18px 48px',
                background: '#00D9FF',
                color: '#000',
                border: 'none',
                fontWeight: 900,
                fontSize: '14px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 20px 40px rgba(0,217,255,0.2)',
              }}
              whileHover={{ scale: 1.06, boxShadow: '0 30px 60px rgba(0,217,255,0.3)' }}
              whileTap={{ scale: 0.98 }}
            >
              LEARN MORE
            </motion.button>

            <motion.button
              style={{
                padding: '18px 48px',
                background: 'transparent',
                color: '#fff',
                border: '2px solid #00D9FF',
                fontWeight: 900,
                fontSize: '14px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
              }}
              whileHover={{ scale: 1.06, background: '#00D9FF15', boxShadow: '0 0 30px #00D9FF40' }}
              whileTap={{ scale: 0.98 }}
            >
              SPECIFICATIONS
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* PRODUCT SHOWCASE */}
      <section style={{ padding: '100px 60px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1300px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '12px', color: '#00D9FF', textTransform: 'uppercase' }}>
              Proven Commercial Platform
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '36px', letterSpacing: '-0.01em' }}>
              7 Years of<br />
              Proven Revenue.
            </h2>
            <p style={{ fontSize: '17px', fontWeight: 300, marginBottom: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
              Operational at 8 airports across North America. 600+ trials completed. $25M+ pipeline secured. Manufacturing partnerships locked with Tier-1 suppliers. Government procurement pathway established.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '48px' }}>
              {[
                '7 Years Operational — Since 2019',
                '8 Airports Live — Boundary Bay, Alpine, SA GAT, KF Aerospace',
                '600+ Trials — Known clients in final contract close',
                'C$1.24M Near-Final POs — 3 contracts at signature stage',
                'C$25M+ Conservative Pipeline — 210+ units across customers',
                '-47°C to +50°C Proven — Arctic and desert field-tested',
                '38% Unit Margin — C$21K USD profit per base unit',
              ].map((item) => (
                <li key={item} style={{ fontSize: '15px', marginBottom: '12px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00D9FF', flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginTop: '48px' }}>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px', color: '#00D9FF' }}>80%</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>OPERATING COST REDUCTION</div>
              </div>
              <div>
                <div style={{ fontSize: '32px', fontWeight: 900, marginBottom: '8px', color: '#00D9FF' }}>Zero</div>
                <div style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>EMISSIONS · NO FUEL LOGISTICS</div>
              </div>
            </div>
          </motion.div>

          <motion.div style={{ display: 'flex', gap: '24px', flexDirection: 'column' }} variants={slideUp}>
            <motion.div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(0,217,255,0.3)' }} variants={slideUp}>
              <img src="/hallor-green-ox-1.jpg" alt="Green Ox in operation" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              <motion.div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(0,217,255,0.3)' }} variants={slideUp}>
                <img src="/hallor-green-ox-2.png" alt="Hallor Green Ox" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </motion.div>
              <motion.div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(0,217,255,0.3)' }} variants={slideUp}>
                <img src="/hallor-green-ox-3.png" alt="Green Ox tug in action" style={{ width: '100%', height: 'auto', display: 'block' }} />
              </motion.div>
            </div>
            <motion.div style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid rgba(0,217,255,0.3)' }} variants={slideUp}>
              <img src="/hallor-green-ox-4.jpg" alt="Green Ox operational" style={{ width: '100%', height: 'auto', display: 'block' }} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section style={{ padding: '100px 60px', background: '#0a0a0a' }}>
        <motion.div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, marginBottom: '36px', lineHeight: 1.15, letterSpacing: '-0.01em' }} variants={slideUp}>
            Ready for Zero Emission Operations?
          </motion.h2>
          <motion.p style={{ fontSize: '17px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', maxWidth: '650px', margin: '0 auto 60px auto', lineHeight: 1.8 }} variants={slideUp}>
            Schedule a briefing with our team to explore Green Ox deployment at your facility.
          </motion.p>
          <motion.button
            style={{
              padding: '18px 48px',
              background: '#00D9FF',
              color: '#000',
              border: 'none',
              fontWeight: 900,
              fontSize: '14px',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'all 0.3s ease',
              boxShadow: '0 20px 40px rgba(0,217,255,0.2)',
            }}
            whileHover={{ scale: 1.06, boxShadow: '0 30px 60px rgba(0,217,255,0.3)' }}
            whileTap={{ scale: 0.98 }}
            variants={slideUp}
          >
            SCHEDULE BRIEFING
          </motion.button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: '60px 60px', background: '#000', color: 'rgba(255,255,255,0.6)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '14px' }}>
        <p>© 2025 Hallor Technologies · Silent Mobility for Critical Infrastructure</p>
      </section>
    </main>
  )
}

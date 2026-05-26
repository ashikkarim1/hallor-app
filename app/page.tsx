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

export default function Home() {
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
        <div
          style={{
            maxWidth: '100%',
            padding: '24px 80px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/" style={{ textDecoration: 'none' }}>
            <motion.div style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }} whileHover={{ scale: 1.02 }}>
              <img src="/canada-flag.png" alt="Canadian flag" style={{ height: '16px', width: 'auto', flexShrink: 0 }} />
              <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', color: '#fff' }}>HALLOR</span>
            </motion.div>
          </Link>

          <div style={{ display: 'flex', gap: '60px', fontSize: '14px', fontWeight: 500 }}>
            <Link href="/gse" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', position: 'relative' }}>
              <motion.div whileHover={{ color: '#fff' }}>GREEN OX</motion.div>
            </Link>
            <Link href="/k9" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', position: 'relative' }}>
              <motion.div whileHover={{ color: '#fff' }}>K9 DEFEND</motion.div>
            </Link>
            <Link href="/team" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', position: 'relative' }}>
              <motion.div whileHover={{ color: '#fff' }}>TEAM</motion.div>
            </Link>
            <Link href="/investors" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', position: 'relative' }}>
              <motion.div whileHover={{ color: '#fff' }}>INVESTORS</motion.div>
            </Link>
            <Link href="/contact" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', position: 'relative' }}>
              <motion.div whileHover={{ color: '#fff' }}>CONTACT</motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '120px', paddingLeft: '60px', paddingRight: '60px', paddingBottom: '60px', background: '#0a0a0a', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '400px', background: 'linear-gradient(135deg, rgba(0,217,255,0.05) 0%, rgba(0,153,255,0.02) 100%)', pointerEvents: 'none' }} />

        <motion.div style={{ maxWidth: '950px', width: '100%', position: 'relative', zIndex: 1 }} initial="hidden" animate="visible" variants={fadeIn}>
          <motion.div style={{ fontSize: '13px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '32px', color: '#00D9FF', textTransform: 'uppercase' }} variants={slideUp}>
            Sovereign Electric Mobility
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
            <div>Silent Mobility</div>
            <div>for Critical</div>
            <div>Infrastructure.</div>
          </motion.h1>

          <motion.p style={{ fontSize: '18px', fontWeight: 300, marginBottom: '72px', maxWidth: '650px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }} variants={slideUp}>
            Proven across aviation. Advancing into defense. Designed for sovereignty.
          </motion.p>

          <motion.div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }} variants={slideUp}>
            <motion.button
              style={{
                padding: '18px 48px',
                background: '#fff',
                color: '#000',
                border: 'none',
                fontWeight: 900,
                fontSize: '14px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                boxShadow: '0 20px 40px rgba(255,255,255,0.15)',
              }}
              whileHover={{ scale: 1.06, boxShadow: '0 30px 60px rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.98 }}
            >
              EXPLORE PLATFORM
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
              DEFENSE SYSTEMS
            </motion.button>
          </motion.div>

          <motion.div
            style={{
              width: '100%',
              background: '#1a1a1a',
              borderRadius: '24px',
              marginTop: '80px',
              border: '1px solid rgba(255,255,255,0.08)',
              boxShadow: '0 40px 80px rgba(255,255,255,0.08)',
              overflow: 'hidden',
            }}
            variants={slideUp}
          >
            <img src="/k9-manned.jpeg" alt="Hallor K9 Defend Platform" style={{ width: '100%', height: 'auto', display: 'block' }} />
          </motion.div>
        </motion.div>
      </section>

      {/* PLATFORM */}
      <section id="platform" style={{ padding: '160px 60px', background: '#0a0a0a' }}>
        <motion.div style={{ maxWidth: '1000px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '96px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '28px', color: '#00D9FF', textTransform: 'uppercase' }}>
              Sovereign Mobility Platform
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '32px', letterSpacing: '-0.01em' }}>
              One Proven Platform.
              <br />
              Two Strategic Divisions.
            </h2>
            <div style={{ width: '120px', height: '5px', background: 'linear-gradient(90deg, #00D9FF, #0099FF)', borderRadius: '2px' }} />
          </motion.div>

          <motion.p style={{ fontSize: '17px', fontWeight: 300, maxWidth: '750px', marginBottom: '120px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }} variants={slideUp}>
            Same modular electric drivetrain. Seven years of proven commercial deployment. Now advancing into defense with military-spec autonomous systems. Revenue-generating GSE platform funds next-gen K9 Defense innovation.
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '48px' }}>
            {[
              {
                icon: 'GSE',
                title: 'Green Ox',
                subtitle: 'PRODUCT 1: AIRPORTS',
                desc: 'Electric ground support systems. Proven across 8 airports worldwide. 7 years of commercial revenue. Funds next-gen defense innovation.',
                stats: ['7 years operational', '8 airports live', '$25M+ pipeline', '38% unit margin'],
                accentColor: '#00D9FF',
              },
              {
                icon: 'K9',
                title: 'K9 Defend',
                subtitle: 'PRODUCT 2: MILITARY & DEFENCE',
                desc: 'Military-spec electric tactical vehicle. Phase 1 manned platform in 12 months. Phase 2 autonomous UGV-ready.',
                stats: ['SAE Level 4 autonomous', 'NATO STANAG ready', 'DND-owned software', 'Swarm-capable'],
                accentColor: '#0099FF',
              },
            ].map((card, idx) => (
              <motion.div
                key={card.title}
                style={{
                  padding: '48px',
                  background: 'rgba(255,255,255,0.02)',
                  border: `2px solid rgba(255,255,255,0.08)`,
                  borderRadius: '20px',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  background: 'rgba(255,255,255,0.04)',
                  borderColor: card.accentColor,
                  boxShadow: `0 0 40px ${card.accentColor}20`,
                }}
              >
                <div style={{ position: 'absolute', top: 0, right: 0, width: '300px', height: '300px', background: `radial-gradient(circle, ${card.accentColor}08 0%, transparent 70%)`, pointerEvents: 'none' }} />

                {card.icon === 'GSE' ? (
                  <svg width="72" height="72" viewBox="0 0 56 56" style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                    <rect width="56" height="56" rx="8" fill={`${card.accentColor}15`} stroke={card.accentColor} strokeWidth="1.5" />
                    <path d="M28 14L32 22L38 24L32 26L28 34L24 26L18 24L24 22Z" fill={card.accentColor} />
                    <rect x="26" y="24" width="4" height="8" fill={card.accentColor} />
                  </svg>
                ) : (
                  <svg width="72" height="72" viewBox="0 0 56 56" style={{ marginBottom: '32px', position: 'relative', zIndex: 1 }}>
                    <rect width="56" height="56" rx="8" fill={`${card.accentColor}15`} stroke={card.accentColor} strokeWidth="1.5" />
                    <rect x="16" y="20" width="24" height="16" rx="2" fill="none" stroke={card.accentColor} strokeWidth="2" />
                    <circle cx="20" cy="34" r="2.5" fill={card.accentColor} />
                    <circle cx="36" cy="34" r="2.5" fill={card.accentColor} />
                    <rect x="18" y="18" width="20" height="4" rx="1" fill="none" stroke={card.accentColor} strokeWidth="1.5" />
                    <line x1="28" y1="20" x2="28" y2="36" stroke={card.accentColor} strokeWidth="1.5" opacity="0.7" />
                  </svg>
                )}

                <p style={{ fontSize: '11px', fontWeight: 700, color: card.accentColor, letterSpacing: '0.15em', marginBottom: '16px', textTransform: 'uppercase', position: 'relative', zIndex: 1 }}>
                  {card.subtitle}
                </p>

                <h3 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '16px', lineHeight: 1.1, position: 'relative', zIndex: 1 }}>{card.title}</h3>

                <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.75)', marginBottom: '32px', lineHeight: 1.6, position: 'relative', zIndex: 1 }}>{card.desc}</p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '10px', position: 'relative', zIndex: 1 }}>
                  {card.stats.map((stat) => (
                    <div key={stat} style={{ fontSize: '14px', fontWeight: 500, padding: '12px 16px', background: 'rgba(255,255,255,0.03)', border: `1px solid ${card.accentColor}30`, borderRadius: '8px', color: 'rgba(255,255,255,0.9)', display: 'flex', alignItems: 'center', gap: '8px', transition: 'all 0.3s ease' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: card.accentColor }} />
                      {stat}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>


      {/* PROOF */}
      <section style={{ padding: '120px 40px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '900px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
              PROOF OF CONCEPT
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2 }}>
              Not a Thesis.
              <br />
              A Fact.
            </h2>
          </motion.div>

          <motion.p style={{ fontSize: '18px', fontWeight: 300, marginBottom: '96px', color: 'rgba(255,255,255,0.8)' }} variants={slideUp}>
            Seven years of operational history. Eight airports worldwide. 600+ trials completed. Manufacturing partnerships locked. Commercial revenue flowing. Government procurement pathway clear.
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' }}>
            {[
              { number: '8', label: 'Airports Operating' },
              { number: '600+', label: 'Trial Hours' },
              { number: '$25M+', label: 'Pipeline' },
              { number: '7', label: 'Years Proven' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div style={{ fontSize: '48px', fontWeight: 900, marginBottom: '12px' }}>{stat.number}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <section id="contact" style={{ padding: '160px 60px', background: '#0a0a0a', color: '#fff', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <motion.div style={{ maxWidth: '800px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '28px', color: '#00D9FF', textTransform: 'uppercase' }} variants={slideUp}>
            Let's Connect
          </motion.div>

          <motion.h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, marginBottom: '36px', lineHeight: 1.15, letterSpacing: '-0.01em' }} variants={slideUp}>
            Ready to Move Beyond Theory?
          </motion.h2>

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
              marginBottom: '64px',
              transition: 'all 0.3s ease',
              boxShadow: '0 20px 40px rgba(0,217,255,0.2)',
            }}
            whileHover={{ scale: 1.06, boxShadow: '0 30px 60px rgba(0,217,255,0.3)' }}
            whileTap={{ scale: 0.98 }}
            variants={slideUp}
          >
            GET IN TOUCH
          </motion.button>

          <motion.div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }} variants={slideUp}>
            <p>info@hallorgroup.com</p>
            <p style={{ marginTop: '8px' }}>+1 (604) 555-0142</p>
            <p style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid rgba(0,0,0,0.1)', color: 'rgba(0,0,0,0.5)' }}>© 2025 Hallor Technologies. All rights reserved.</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

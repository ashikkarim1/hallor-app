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

export default function InvestorsPage() {
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
            <Link href="/gse" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>GREEN OX</motion.div>
            </Link>
            <Link href="/k9" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>K9 DEFEND</motion.div>
            </Link>
            <Link href="/team" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>TEAM</motion.div>
            </Link>
            <Link href="/investors" style={{ cursor: 'pointer', color: '#00D9FF', textDecoration: 'none', fontWeight: 600 }}>
              INVESTORS
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
            Investment Opportunity
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
            <div>Sovereign Mobility</div>
            <div>is a Market.</div>
            <div>Hallor Leads It.</div>
          </motion.h1>

          <motion.p style={{ fontSize: '18px', fontWeight: 300, marginBottom: '72px', maxWidth: '650px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7 }} variants={slideUp}>
            Proven commercial platform funding defense innovation. Seven years of revenue. Two multi-billion-dollar markets. Canadian technology. Ready to scale.
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
              REQUEST PITCH DECK
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
              LEARN MORE
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* WHY HALLOR WINS */}
      <section style={{ padding: '100px 60px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '12px', color: '#00D9FF', textTransform: 'uppercase' }}>
              Competitive Advantage
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.01em' }}>
              Why Hallor Wins
            </h2>
            <div style={{ width: '120px', height: '5px', background: 'linear-gradient(90deg, #00D9FF, #0099FF)', borderRadius: '2px' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '48px', marginTop: '80px' }}>
            {[
              {
                title: 'Proven Technology',
                desc: '7 years of commercial operation. 8 airports worldwide. 600+ trial hours. Real revenue generating.',
                icon: '✓'
              },
              {
                title: 'Dual Revenue Streams',
                desc: 'GSE platform funds defense innovation. De-risks K9 development while scaling commercial market.',
                icon: '⚡'
              },
              {
                title: 'Canadian Sovereignty',
                desc: 'DND-owned software. Made in Canada. Zero ITAR restrictions. Government procurement pathway clear.',
                icon: '🍁'
              },
              {
                title: 'Military-Grade Hardware',
                desc: 'Proven drivetrain tested at -47°C. NATO STANAG ready. Ballistic protection built-in. No redesign needed.',
                icon: '🛡️'
              },
              {
                title: 'Tier-1 Manufacturing',
                desc: '$25M+ pipeline. Manufacturing partnerships locked. Government pre-qualification. Ready to scale.',
                icon: '⚙️'
              },
              {
                title: 'Leadership Team',
                desc: 'CEO with venture/scale experience. Board of Canadian defense and aviation leaders. Execution track record.',
                icon: '👥'
              },
            ].map((item, idx) => (
              <motion.div
                key={item.title}
                style={{
                  padding: '48px 40px',
                  background: 'rgba(0,217,255,0.03)',
                  border: '1px solid rgba(0,217,255,0.2)',
                  borderRadius: '16px',
                  transition: 'all 0.4s ease',
                  position: 'relative',
                  overflow: 'hidden',
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{
                  background: 'rgba(0,217,255,0.08)',
                  borderColor: '#00D9FF',
                  boxShadow: '0 0 40px rgba(0,217,255,0.15)',
                }}
              >
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '12px', lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* MARKET OPPORTUNITY */}
      <section style={{ padding: '100px 60px', background: '#0a0a0a', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '12px', color: '#00D9FF', textTransform: 'uppercase' }}>
              Market Timing
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.01em' }}>
              Two Multi-Billion Markets
            </h2>
            <div style={{ width: '120px', height: '5px', background: 'linear-gradient(90deg, #00D9FF, #0099FF)', borderRadius: '2px' }} />
          </motion.div>

          <motion.p style={{ fontSize: '17px', fontWeight: 300, maxWidth: '800px', marginBottom: '80px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }} variants={slideUp}>
            Global airport GSE market transitioning to electric. Defense spending at historic highs. Canadian autonomous vehicle adoption accelerating. Hallor is positioned at the intersection.
          </motion.p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
            <motion.div variants={slideUp}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '24px', color: '#00D9FF', textTransform: 'uppercase' }}>
                Market 1: Aviation GSE
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2 }}>
                Global Electrification Shift
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  '$7.8B global GSE market',
                  '65% of fleets still gas/diesel',
                  'Airports mandating zero-emission by 2030',
                  'Green Ox operational proof of concept',
                  '$25M+ contracted pipeline',
                ].map((item) => (
                  <li key={item} style={{ fontSize: '15px', marginBottom: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00D9FF', flexShrink: 0, marginTop: '6px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={slideUp}>
              <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '24px', color: '#0099FF', textTransform: 'uppercase' }}>
                Market 2: Defense Autonomy
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 900, marginBottom: '24px', lineHeight: 1.2 }}>
                Canadian Defense Modernization
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {[
                  'Canada defense budget up 80% by 2025',
                  'NATO commitments driving procurement',
                  'Autonomous vehicle shortage',
                  'DND acquisition pathway established',
                  'SAE Level 4 capability ready',
                ].map((item) => (
                  <li key={item} style={{ fontSize: '15px', marginBottom: '16px', color: 'rgba(255,255,255,0.9)', lineHeight: 1.4, display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#0099FF', flexShrink: 0, marginTop: '6px' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* PROOF POINTS */}
      <section style={{ padding: '100px 60px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '12px', color: '#00D9FF', textTransform: 'uppercase' }}>
              Execution Proof
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.01em' }}>
              Already Delivering Results
            </h2>
            <div style={{ width: '120px', height: '5px', background: 'linear-gradient(90deg, #00D9FF, #0099FF)', borderRadius: '2px' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px', marginTop: '80px' }}>
            {[
              { number: '7', label: 'Years Operational', color: '#00D9FF' },
              { number: '$25M+', label: 'Pipeline Secured', color: '#00D9FF' },
              { number: '8', label: 'Airports Live', color: '#00D9FF' },
              { number: '38%', label: 'Unit Margin', color: '#00D9FF' },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div style={{ fontSize: '56px', fontWeight: 900, marginBottom: '12px', color: stat.color }}>{stat.number}</div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em' }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* PITCH DECK CTA */}
      <section style={{ padding: '100px 60px', background: '#0a0a0a', color: '#fff' }}>
        <motion.div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '40px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '12px', color: '#00D9FF', textTransform: 'uppercase' }}>
              Investment Materials
            </div>
          </motion.div>

          <motion.h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, marginBottom: '36px', lineHeight: 1.15, letterSpacing: '-0.01em' }} variants={slideUp}>
            Request Our Pitch Deck
          </motion.h2>

          <motion.p style={{ fontSize: '17px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', maxWidth: '650px', margin: '0 auto 60px auto', lineHeight: 1.8 }} variants={slideUp}>
            Comprehensive overview of market opportunity, competitive positioning, financial projections, and use-of-capital. Sent confidentially to qualified investors.
          </motion.p>

          <motion.button
            style={{
              padding: '20px 60px',
              background: '#fff',
              color: '#000',
              border: 'none',
              fontWeight: 900,
              fontSize: '14px',
              letterSpacing: '0.1em',
              cursor: 'pointer',
              borderRadius: '8px',
              marginBottom: '48px',
              transition: 'all 0.3s ease',
              boxShadow: '0 20px 40px rgba(255,255,255,0.15)',
            }}
            whileHover={{ scale: 1.06, boxShadow: '0 30px 60px rgba(255,255,255,0.25)' }}
            whileTap={{ scale: 0.98 }}
            variants={slideUp}
          >
            REQUEST PITCH DECK
          </motion.button>

          <motion.p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }} variants={slideUp}>
            Or reach out directly: <strong>investors@hallorgroup.com</strong>
          </motion.p>
        </motion.div>
      </section>

      {/* CONTACT CTA */}
      <section style={{ padding: '100px 60px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '12px', color: '#00D9FF', textTransform: 'uppercase' }}>
              Contact
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '16px', letterSpacing: '-0.01em' }}>
              Let's Talk Investment
            </h2>
            <div style={{ width: '120px', height: '5px', background: 'linear-gradient(90deg, #00D9FF, #0099FF)', borderRadius: '2px' }} />
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '48px', marginTop: '80px' }}>
            <motion.div variants={slideUp}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
                INVESTMENT INQUIRIES
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>Dean Kneider</h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
                CEO. Open investment conversations. Series discussions.
              </p>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff', marginBottom: '8px' }}>
                dean@hallorgroup.com
              </div>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>
                1-604-209-9686
              </div>
            </motion.div>

            <motion.div variants={slideUp}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
                INVESTOR RELATIONS
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>Investors Team</h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
                Pitch deck requests. Financial materials. Due diligence support.
              </p>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>
                investors@hallorgroup.com
              </div>
            </motion.div>

            <motion.div variants={slideUp}>
              <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
                HEADQUARTERS
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>Canada</h3>
              <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', marginBottom: '24px', lineHeight: 1.6 }}>
                Vancouver-based. Defense & aviation expertise. Global reach.
              </p>
              <div style={{ fontSize: '15px', fontWeight: 500, color: '#fff' }}>
                info@hallorgroup.com
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: '60px 60px', background: '#0a0a0a', color: 'rgba(255,255,255,0.6)', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: '14px' }}>
        <p>© 2025 Hallor Technologies · Silent Mobility for Critical Infrastructure</p>
      </section>
    </main>
  )
}

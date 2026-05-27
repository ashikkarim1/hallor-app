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

export default function TeamPage() {
  const leadership = [
    {
      name: 'Dean Kneider',
      title: 'CEO & Board Member',
      bio: 'Built and scaled EV conversion business (RiiseEV). 30+ years operating P&Ls at Coca-Cola, Labatt, and Intrawest. Has run the exact playbook Hallor\'s next 24 months require.',
    },
    {
      name: 'Keith Halston',
      title: 'Co-founder, Technical Director',
      bio: '35 years as a millwright and steel fabricator, then ran GSE maintenance at an international airport. The Green Ox exists because he knew exactly what was broken on the tarmac.',
    },
    {
      name: 'James Taylor',
      title: 'Co-founder, Technical Director',
      bio: '40 years rebuilding heavy machinery from the drivetrain up. Hallor\'s right-to-repair, common-parts design philosophy comes directly from his decades fixing what others built badly.',
    },
    {
      name: 'Terence Lee',
      title: 'CFO & Board Officer',
      bio: 'CPA, ex-BDO audit. Currently CFO of a publicly listed company. Brings public-company-grade financial reporting and governance discipline from day one.',
    },
  ]

  const operations = [
    {
      name: 'Christina Van',
      title: 'Operations & Communications',
      bio: '16 years building go-to-market for EV, charging infrastructure, and sustainable tech. Owns the demand engine that turned 600 trials into a $25M pipeline.',
    },
    {
      name: 'Gary Ogden',
      title: 'Sales & Business Development',
      bio: '35 years in aviation ground ops. Held leadership at dnata, Servisair, Lockheed Air Terminal, Sunwing. Has personally sold hundreds of GSE units to the exact buyers Hallor needs.',
    },
  ]

  const board = [
    {
      name: 'Ashik Karim',
      title: 'Board Chair',
      bio: 'Founded UpCapital (EV-focused merchant bank). Instrumental in scaling Cellestial (electric agricultural tractors) to $5B revenue, exit to Murugappa Group. Done Hallor\'s exit in an adjacent vehicle category.',
    },
    {
      name: 'Mark Orsmond',
      title: 'Strategic Advisor, Capital Markets',
      bio: 'Former CFO of Taiga Motors — led $200M Canadian SPAC financing including $50M+ federal/provincial grants. Currently CFO of Electra Meccanica (Nasdaq). Direct go-public playbook experience.',
    },
    {
      name: 'Ken Davidson',
      title: 'Board Member',
      bio: 'Former Managing Partner, BDO Atlantic Canada. Served one year as BDO Board Chair during $500M revenue year. ICD.D certified. Brings audit-grade governance for institutional capital.',
    },
    {
      name: 'John Pinsent',
      title: 'Board Member',
      bio: 'Has sat on multiple TSX and TSX.V public company boards including Enterprise Group, Hyduke Energy, and Synodon. ICD.D, audit committee chair multiple times. Public-company governance from day one.',
    },
    {
      name: 'Damarys Zampini',
      title: 'Board Member',
      bio: '20+ years building cleantech and circular-economy growth strategies globally. Active angel investor in net-zero transition. Adds the sustainability lens that aviation and defense procurement require.',
    },
  ]

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
              <img src="/halloricon.png?v=2" alt="Hallor Logo" style={{ height: '32px', width: 'auto', flexShrink: 0 }} />
              <span style={{ fontSize: '20px', fontWeight: 900, letterSpacing: '-0.02em', color: '#000' }}>HALLOR</span>
            </motion.div>
          </Link>

          <div style={{ display: 'flex', gap: '60px', fontSize: '14px', fontWeight: 500 }}>
            <Link href="/" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              Home
            </Link>
            <Link href="/gse" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>GREEN OX</motion.div>
            </Link>
            <Link href="/k9" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>K9 DEFEND</motion.div>
            </Link>
            <Link href="/team" style={{ cursor: 'pointer', color: '#000', textDecoration: 'none', fontWeight: 600 }}>
              TEAM
            </Link>
            <Link href="/investors" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>INVESTORS</motion.div>
            </Link>
            <Link href="/references" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>RESOURCES</motion.div>
            </Link>
            <Link href="/contact" style={{ cursor: 'pointer', color: 'rgba(0,0,0,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#000' }}>CONTACT</motion.div>
            </Link>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '100px', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '80px', background: '#0a0a0a' }}>
        <motion.div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }} initial="hidden" animate="visible" variants={fadeIn}>
          <motion.h1
            style={{
              fontSize: 'clamp(2.5rem, 10vw, 5rem)',
              fontWeight: 900,
              lineHeight: 1,
              marginBottom: '16px',
              letterSpacing: '-0.02em',
              color: '#fff',
            }}
            variants={slideUp}
          >
            <div>110+ Collective Years</div>
            <div style={{ color: 'rgba(255,255,255,0.6)' }}>of Heavy Industry, EV, and Public Markets</div>
          </motion.h1>

          <motion.p style={{ fontSize: '18px', fontWeight: 300, maxWidth: '700px', margin: '0 auto 32px auto', color: 'rgba(255,255,255,0.75)' }} variants={slideUp}>
            The team that built the Green Ox at 8 airports is now building K9 Defend for Canadian defense. We've already done this — in commercial markets, public markets, and emerging defense technology.
          </motion.p>
        </motion.div>
      </section>

      {/* LEADERSHIP */}
      <section style={{ padding: '80px 40px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
              EXECUTIVE LEADERSHIP
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2 }}>
              Founders & Officers.
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '60px' }}>
            {leadership.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div style={{ width: '100%', height: '480px', marginBottom: '24px', borderRadius: '12px', overflow: 'hidden', background: '#1a1a1a' }}>
                  <img src={`/${member.name.replace(/\s+/g, '')}.jpg?v=2`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px' }}>{member.name}</h3>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                  {member.title}
                </p>
                <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* OPERATIONS & SALES */}
      <section style={{ padding: '80px 40px', background: '#0a0a0a' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
              OPERATIONS & MARKET
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2 }}>
              The Demand Engine.
            </h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '60px' }}>
            {operations.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div style={{ width: '100%', height: '480px', marginBottom: '24px', borderRadius: '12px', overflow: 'hidden', background: '#1a1a1a' }}>
                  <img src={`/${member.name.replace(/\s+/g, '')}.jpg?v=2`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px' }}>{member.name}</h3>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                  {member.title}
                </p>
                <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* BOARD */}
      <section style={{ padding: '80px 40px', background: '#000', color: '#fff' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
              GOVERNANCE
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2 }}>
              Public-Company Ready.
            </h2>
            <p style={{ fontSize: '16px', fontWeight: 300, color: 'rgba(255,255,255,0.75)', marginTop: '24px', maxWidth: '700px', lineHeight: 1.6 }}>
              Hallor's Board is structured for institutional capital from day one. Three independent directors with ICD.D certification, public-company audit experience, and cleantech domain expertise ensure CSE and TSX listing governance standards are in place before prospectus filing.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '60px' }}>
            {board.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div style={{ width: '100%', height: '480px', marginBottom: '24px', borderRadius: '12px', overflow: 'hidden', background: '#1a1a1a' }}>
                  <img src={`/${member.name.replace(/\s+/g, '')}.jpg?v=2`} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
                </div>
                <h3 style={{ fontSize: '24px', fontWeight: 900, marginBottom: '8px' }}>{member.name}</h3>
                <p style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.6)', marginBottom: '16px' }}>
                  {member.title}
                </p>
                <p style={{ fontSize: '15px', fontWeight: 300, color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* HIRING */}
      <section style={{ padding: '80px 40px', background: '#0a0a0a' }}>
        <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.div variants={slideUp}>
            <div style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '0.15em', marginBottom: '24px', color: 'rgba(255,255,255,0.6)' }}>
              YEAR 1 GROWTH
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '48px' }}>
              Scaling to 10 FTE.
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
              {[
                { role: 'Chief Engineer / VP Engineering', cost: 'C$145K', desc: 'Technical lead. Military spec ownership. DND interface.' },
                { role: '2x Senior Mechanical Engineers', cost: 'C$210K', desc: 'Chassis, suspension, ballistic integration design.' },
                { role: 'Electrical / Embedded Systems Engineer', cost: 'C$110K', desc: 'DBW system, CAN-bus, power management.' },
                { role: 'Systems Integration Engineer', cost: 'C$115K', desc: 'Platform integration, test protocols, documentation.' },
                { role: 'Defense BD Manager', cost: 'C$125K', desc: 'DND relationship, procurement navigator, allied BD.' },
                { role: '3x Senior Fabricators', cost: 'C$225K', desc: 'Chassis build, military-spec welding, system installation.' },
              ].map((item, idx) => (
                <motion.div
                  key={item.role}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  style={{
                    padding: '24px',
                    background: 'rgba(0,0,0,0.02)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: '8px',
                  }}
                >
                  <h4 style={{ fontSize: '15px', fontWeight: 700, marginBottom: '8px', color: '#fff' }}>
                    {item.role}
                  </h4>
                  <p style={{ fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.6)', marginBottom: '12px' }}>
                    {item.cost}/year
                  </p>
                  <p style={{ fontSize: '14px', fontWeight: 300, color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* FOOTER */}
      <section style={{ padding: '80px 40px', background: '#000', color: '#fff', textAlign: 'center' }}>
        <motion.div style={{ maxWidth: '600px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.h2 style={{ fontSize: '36px', fontWeight: 900, marginBottom: '24px' }} variants={slideUp}>
            Ready to Join Us?
          </motion.h2>
          <motion.p style={{ fontSize: '16px', fontWeight: 300, marginBottom: '16px', color: 'rgba(255,255,255,0.8)' }} variants={slideUp}>
            We're building Canada's next defense-tech unicorn. If you have the skills and the stomach for it, let's talk.
          </motion.p>
          <motion.div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }} variants={slideUp}>
            <p>Dean Kneider</p>
            <p style={{ marginTop: '8px' }}>1-604-209-9686</p>
            <p style={{ marginTop: '8px' }}>info@hallorgroup.com</p>
          </motion.div>
        </motion.div>
      </section>
    </main>
  )
}

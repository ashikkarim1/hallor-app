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

export default function ReferencesPage() {
  const gseResources = [
    {
      category: 'Industry News & Analysis',
      links: [
        { title: 'Airport Ground Support Equipment Market Trends', url: 'https://www.gsetrends.com' },
        { title: 'GSE News Daily', url: 'https://www.gsenewsdaily.com' },
        { title: 'Ground Support Worldwide', url: 'https://www.groundsupportworldwide.com' },
        { title: 'Aviation Ground Services Report', url: 'https://www.aviationgroundservices.com' },
      ],
    },
    {
      category: 'RFPs & Procurement',
      links: [
        { title: 'Federal GSE Procurement Portal', url: 'https://www.sam.gov' },
        { title: 'International Airport GSE Tenders', url: 'https://www.aeroportual.com/tenders' },
        { title: 'Canadian Airport Authority Procurement', url: 'https://www.acaa-aaac.ca' },
        { title: 'Ground Equipment Supplier Directory', url: 'https://www.gsesupdirectory.com' },
      ],
    },
    {
      category: 'Press Releases & Announcements',
      links: [
        { title: 'Airport Equipment Announcements', url: 'https://www.airportequipment.news' },
        { title: 'GSE Manufacturer Updates', url: 'https://www.gsemanufacturers.com/news' },
        { title: 'Aviation Industry Press', url: 'https://www.aviationindustrypress.com' },
        { title: 'Electric Ground Equipment News', url: 'https://www.evgse.news' },
      ],
    },
    {
      category: 'Standards & Regulations',
      links: [
        { title: 'International Civil Aviation Organization (ICAO)', url: 'https://www.icao.int' },
        { title: 'Transport Canada Aviation Safety', url: 'https://www.tc.gc.ca/aviation' },
        { title: 'FAA Ground Support Equipment Standards', url: 'https://www.faa.gov' },
        { title: 'ISO Ground Service Equipment Standards', url: 'https://www.iso.org' },
      ],
    },
  ]

  const militaryResources = [
    {
      category: 'Canadian Defence News',
      links: [
        { title: 'Department of National Defence', url: 'https://www.canada.ca/defence' },
        { title: 'Canadian Armed Forces Official', url: 'https://www.canada.ca/en/department-national-defence' },
        { title: 'Defence Daily Canada', url: 'https://www.defencedaily.ca' },
        { title: 'Canadian Military Journal', url: 'https://www.cmaj-jmac.forces.gc.ca' },
      ],
    },
    {
      category: 'Procurement & Tenders',
      links: [
        { title: 'Defence Procurement Canada', url: 'https://www.buyandsell.gc.ca' },
        { title: 'Canadian Armed Forces Acquisition', url: 'https://www.tpsgc-pwgsc.gc.ca' },
        { title: 'National Defence RFP Portal', url: 'https://www.forces.gc.ca/en/business-defence-industry' },
        { title: 'DND Capital Equipment Procurement', url: 'https://www.dnd-mnd.gc.ca' },
      ],
    },
    {
      category: 'Press Releases & Updates',
      links: [
        { title: 'DND Press Release Archive', url: 'https://www.canada.ca/defence/news' },
        { title: 'Canadian Army News', url: 'https://www.army-armee.forces.gc.ca' },
        { title: 'Royal Canadian Air Force Announcements', url: 'https://www.rcaf-arc.forces.gc.ca' },
        { title: 'Defence Industry Association Canada', url: 'https://www.diac.ca' },
      ],
    },
    {
      category: 'Strategic Initiatives',
      links: [
        { title: 'Canada Defence Policy 2022', url: 'https://www.canada.ca/defence-policy' },
        { title: 'Critical Infrastructure Protection', url: 'https://www.cisa.gov' },
        { title: 'NATO Allied Nations Canada', url: 'https://www.nato.int/cps/en/natohq' },
        { title: 'Arctic Security & Sovereignty', url: 'https://www.canada.ca/arctic' },
      ],
    },
  ]

  const ResourceSection = ({ title, color, resources }: { title: string; color: string; resources: typeof gseResources }) => (
    <section style={{ padding: '100px 60px', background: title === 'Airport Ground Service Equipment' ? '#000' : '#0a0a0a' }}>
      <motion.div style={{ maxWidth: '1200px', margin: '0 auto' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
        <motion.div style={{ marginBottom: '80px' }} variants={slideUp}>
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.2em', marginBottom: '12px', color, textTransform: 'uppercase' }}>
            Resources
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 9vw, 4rem)', fontWeight: 900, lineHeight: 1.15, marginBottom: '36px', letterSpacing: '-0.01em', color: '#fff' }}>
            {title}
          </h2>
          <div style={{ width: '120px', height: '3px', background: `linear-gradient(90deg, ${color}, #0099FF)`, borderRadius: '2px' }} />
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '60px' }}>
          {resources.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                padding: '40px',
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${color}40`,
                borderRadius: '16px',
                backdropFilter: 'blur(10px)',
              }}
            >
              <h3 style={{ fontSize: '18px', fontWeight: 900, marginBottom: '24px', color }}>{section.category}</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {section.links.map((link) => (
                  <a
                    key={link.title}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      padding: '12px 16px',
                      background: 'rgba(255,255,255,0.02)',
                      border: `1px solid ${color}30`,
                      borderRadius: '8px',
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${color}15`
                      e.currentTarget.style.borderColor = color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)'
                      e.currentTarget.style.borderColor = `${color}30`
                    }}
                  >
                    <span>{link.title}</span>
                    <span style={{ marginLeft: 'auto', fontSize: '12px', opacity: 0.6 }}>↗</span>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )

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
              <img src="/halloricon.png?v=2" alt="Hallor Logo" style={{ height: '44px', width: 'auto', flexShrink: 0, borderRadius: '6px' }} />
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
            <Link href="/k9" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>K9 DEFEND</motion.div>
            </Link>
            <Link href="/team" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>TEAM</motion.div>
            </Link>
            <Link href="/investors" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>INVESTORS</motion.div>
            </Link>
            <Link href="/references" style={{ cursor: 'pointer', color: '#00D9FF', textDecoration: 'none', fontWeight: 600 }}>
              RESOURCES
            </Link>
            <Link href="/contact" style={{ cursor: 'pointer', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
              <motion.div whileHover={{ color: '#fff' }}>CONTACT</motion.div>
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
            Industry Resources & Intelligence.
          </motion.h1>

          <motion.p style={{ fontSize: '18px', fontWeight: 300, marginBottom: '48px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }} variants={slideUp}>
            Curated links to critical industry news, procurement opportunities, regulatory updates, and strategic intelligence for airport ground service and Canadian defence sectors.
          </motion.p>
        </motion.div>
      </section>

      {/* GSE RESOURCES */}
      <ResourceSection title="Airport Ground Service Equipment" color="#00D9FF" resources={gseResources} />

      {/* MILITARY RESOURCES */}
      <ResourceSection title="Canadian Defence & Military" color="#0099FF" resources={militaryResources} />

      {/* CTA */}
      <section style={{ padding: '100px 60px', background: '#000' }}>
        <motion.div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }} initial="hidden" whileInView="visible" variants={fadeIn} viewport={{ once: true }}>
          <motion.h2 style={{ fontSize: '40px', fontWeight: 900, marginBottom: '16px', color: '#fff' }} variants={slideUp}>
            Ready to Explore Opportunities?
          </motion.h2>
          <motion.p style={{ fontSize: '18px', fontWeight: 300, color: 'rgba(255,255,255,0.8)', maxWidth: '600px', margin: '0 auto 48px auto', lineHeight: 1.6 }} variants={slideUp}>
            Our team stays current with market trends, regulatory changes, and procurement opportunities. Let's discuss how Hallor can support your strategic initiatives.
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
            onClick={() => window.location.href = '/contact'}
          >
            CONNECT WITH US
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

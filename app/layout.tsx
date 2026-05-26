import './globals.css'

export const metadata = {
  title: 'Hallor Technologies',
  description: 'Silent Mobility for Critical Infrastructure',
  icons: {
    icon: '/canada-flag.png',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{backgroundColor: '#0a0a0a', color: '#ffffff', fontFamily: 'Helvetica Neue, Helvetica, Arial, sans-serif'}}>{children}</body>
    </html>
  )
}

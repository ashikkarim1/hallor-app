module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: '#050810',
        'dark-bg': '#0a0e1f',
        'dark-card': '#0f1429',
        accent: '#00d9ff',
        'accent-dark': '#0099cc',
        gse: '#1a4d3e',
        defense: '#2d1f3e',
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        'hero': 'clamp(3rem, 12vw, 7rem)',
        'section': 'clamp(2rem, 8vw, 4.5rem)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #00d9ff 0%, #0099cc 100%)',
        'gradient-gse': 'linear-gradient(135deg, rgba(26,77,62,0.1) 0%, rgba(26,77,62,0.05) 100%)',
        'gradient-defense': 'linear-gradient(135deg, rgba(45,31,62,0.1) 0%, rgba(45,31,62,0.05) 100%)',
      },
      boxShadow: {
        'accent-glow': '0 0 40px rgba(0, 217, 255, 0.15)',
        'accent-strong': '0 0 60px rgba(0, 217, 255, 0.25)',
      },
    },
  },
  plugins: [],
}

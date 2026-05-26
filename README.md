# Hallor Technologies Website

Cinematic B2B capital-raising site for Hallor Technologies. Dark aesthetic, minimal copy, video-first.

## Running

```bash
npm run dev
# Opens on http://localhost:3000 (or assigned port)
```

## Structure

- **Hero** — Video placeholder + headline + CTAs
- **Platform Narrative** — "One Platform. Two Markets" positioning
- **Hallor GSE** — Commercial division with embedded YouTube video
- **Hallor Defense** — K9 Defend tactical division (video placeholder)
- **Proof** — Stats section (airports, trials, pipeline, years)
- **Strategic Position** — Sovereign supply, dual-use, NATO alignment
- **Footer CTA** — Contact / investor inquiry

## Video Integration

### GSE Video (Live)
YouTube video embedded at `/app/page.tsx`:
```tsx
<VideoEmbed src="https://www.youtube.com/watch?v=Dpmhzubu_Ms" type="youtube" />
```

### K9 Defend Video (Placeholder)
Replace the `TODO` placeholder with:
```tsx
<VideoEmbed src="[YOUR_K9_RUNWAY_OR_MP4_URL]" type="youtube|mp4" />
```

Supports:
- YouTube URLs: `https://youtube.com/watch?v=...`
- MP4 files: `/path/to/video.mp4`

## Quick Edits

**Hero headline** → `app/page.tsx` line ~18
**Subheadline** → `app/page.tsx` line ~19
**Button labels** → `app/page.tsx` lines ~20-21
**Section text** → Search "One Platform" or "This Is Not a Thesis"

## Next Steps

1. **K9 Video** — Generate via Runway ML or commission
2. **CSS Polish** — Typography, spacing, color refinements
3. **Additional Pages** — Team, technology, contact forms
4. **Analytics** — Add tracking
5. **Deployment** — Vercel (one-click from git)

## Design System

- **Colors**: Dark navy (`#0a0e27`), Cyan accent (`#00d4ff`)
- **Typography**: Georgia headers, system sans body
- **Motion**: Framer Motion fade-in on scroll
- **Spacing**: Tailwind defaults (px-4 md:px-12 pattern)

## Video Component API

```tsx
<VideoEmbed 
  src="URL or youtube link"
  type="youtube" | "mp4"  // auto-detects YouTube
  title="Optional title"
/>
```

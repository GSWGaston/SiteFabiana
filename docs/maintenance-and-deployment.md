# Maintenance & Deployment Guide — Fabiana Gaston Neuropsicopedagoga

---

## 1. Prerequisites

| Tool | Minimum Version | Purpose |
|---|---|---|
| Node.js | 18+ | JavaScript runtime |
| npm | 9+ | Package manager |
| Git | 2.x | Version control |

Verify installation:
```bash
node -v
npm -v
git -v
```

---

## 2. Local Development Setup

### Clone / Open Project
```bash
# If cloning from a repository:
git clone https://github.com/your-org/site-fabiana.git
cd site-fabiana

# Or simply navigate to the project folder
cd "e:\SITE Fabiana"
```

### Install Dependencies
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
Opens at `http://localhost:5173` with hot module replacement (HMR).

### Build for Production
```bash
npm run build
```
Outputs to `dist/` directory. Verify build output before deploying.

### Preview Production Build Locally
```bash
npm run preview
```
Opens at `http://localhost:4173` — serves the actual production bundle.

---

## 3. Configuration: How to Update Key Content

### 3.1 WhatsApp Phone Number

The WhatsApp number appears in **multiple files**. Search and replace globally:

**Files to update:**
- `src/components/Navbar.tsx` — Line containing `WHATSAPP_URL`
- `src/components/Hero.tsx` — Line containing `WHATSAPP_URL`
- `src/components/Locations.tsx` — Line containing `WHATSAPP_URL`
- `src/components/ConversionBanner.tsx` — Line containing `WHATSAPP_URL`
- `src/components/Footer.tsx` — Line containing `WHATSAPP_URL`
- `src/components/WhatsAppFloat.tsx` — Line containing `WHATSAPP_URL`

**Current placeholder number:** `5551999999999`  
**Format:** `55` (Brazil country code) + `51` (Porto Alegre area code) + 9-digit mobile number

**Example — replacing with real number `(51) 98765-4321`:**
```
Old: https://wa.me/5551999999999?text=...
New: https://wa.me/5551987654321?text=...
```

> **Tip**: Use VS Code's global find-and-replace (`Ctrl+Shift+H`) to update all occurrences simultaneously.

**Pre-filled message (optional customization):**
```
?text=Ol%C3%A1%2C%20Fabiana!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20as%20consultas.
```
Decoded: `Olá, Fabiana! Vim pelo seu site e gostaria de informações sobre as consultas.`

To change the pre-filled message, URL-encode your text at: https://www.urlencoder.org/

### 3.2 Instagram Handle

Located in `src/components/Footer.tsx`:
```tsx
const INSTAGRAM_URL = 'https://instagram.com/fabianagaston.neuropedago';
```
And the display text:
```tsx
@fabianagaston.neuropedago
```

Replace both with Fabiana's actual Instagram handle.

### 3.3 Replacing Image Assets (Portrait Photos)

The current portrait is an SVG illustration defined inline in:
- `src/components/Hero.tsx` — `PortraitIllustration()` function
- `src/components/About.tsx` — `AboutPortrait()` function

**To replace with a real photo:**

1. Add the photo to `src/assets/`:
   ```
   src/assets/fabiana-hero.jpg
   src/assets/fabiana-about.jpg
   ```

2. Import and use in the component:
   ```tsx
   // At top of Hero.tsx
   import fotoFabiana from '../assets/fabiana-hero.jpg';
   
   // Replace the <PortraitIllustration /> with:
   <img
     src={fotoFabiana}
     alt="Fabiana Gaston - Neuropsicopedagoga"
     style={{
       width: '100%',
       height: '100%',
       objectFit: 'cover',
       objectPosition: 'center top',
       borderRadius: '24px',
     }}
   />
   ```

3. Remove or comment out the SVG illustration functions.

**Recommended photo specs:**
- Format: JPEG or WebP
- Size: At least `640×800px` (portrait orientation, 4:5 ratio)
- Style: Professional, warm lighting, clean background in neutral tones

### 3.4 Updating the Page Title and SEO Meta

Edit `index.html`:
```html
<title>Fabiana Gaston | Neuropsicopedagoga Clínica – Porto Alegre</title>
<meta name="description" content="Your updated description here..." />
<meta property="og:image" content="/og-image.jpg" />
```

For the Open Graph image (`og-image.jpg`):
- Place a `1200×630px` image in the `/public` folder
- This image appears when the URL is shared on WhatsApp, Facebook, etc.

---

## 4. Project File Structure

```
e:\SITE Fabiana\
│
├── public/
│   └── brain-icon.svg          # Favicon
│
├── src/
│   ├── assets/                 # Add real photos here
│   ├── components/
│   │   ├── Navbar.tsx          # Sticky navigation
│   │   ├── Hero.tsx            # Above-the-fold hero
│   │   ├── CredentialsStrip.tsx# Trust bar
│   │   ├── Audience.tsx        # Target audience cards
│   │   ├── Services.tsx        # 3-step methodology
│   │   ├── About.tsx           # Bio section
│   │   ├── Locations.tsx       # Presencial + Online cards
│   │   ├── FAQ.tsx             # Accordion FAQ
│   │   ├── ConversionBanner.tsx# Final CTA banner
│   │   ├── Footer.tsx          # Footer
│   │   └── WhatsAppFloat.tsx   # Floating button
│   ├── App.tsx                 # Root component
│   ├── main.tsx                # React entry point
│   └── index.css               # Global styles + Tailwind v4 tokens
│
├── docs/
│   ├── brand-and-design-system.md
│   ├── architecture-and-content.md
│   └── maintenance-and-deployment.md  ← You are here
│
├── index.html                  # HTML entry + SEO meta + Google Fonts
├── vite.config.ts              # Vite + Tailwind v4 config
├── tsconfig.json               # TypeScript config
└── package.json
```

---

## 5. Deployment

### Option A — Vercel (Recommended — Fastest)

**One-click deploy:**

1. Push code to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and click "New Project"
3. Import your GitHub repository
4. Vercel auto-detects Vite — no configuration needed
5. Click Deploy

**Custom domain setup on Vercel:**
1. Go to Project → Settings → Domains
2. Add `fabianagaston.com.br`
3. Follow Vercel's DNS instructions (add CNAME or A record at your domain registrar)
4. Vercel automatically provisions and renews SSL (HTTPS)

**Environment**: The build command is `npm run build`, output directory is `dist`.

---

### Option B — Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
3. Select repository
4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click Deploy

**Custom domain on Netlify:**
1. Site Settings → Domain Management → Add custom domain
2. Add `fabianagaston.com.br`
3. Update DNS at your registrar per Netlify's instructions
4. Enable HTTPS (automatic with Netlify)

---

### Option C — Manual Hosting (cPanel / Apache / Nginx)

1. Run `npm run build` locally
2. Upload the entire `dist/` folder contents to the server's public root (e.g., `public_html/`)
3. Configure the server to redirect all requests to `index.html` (required for SPA routing)

**Apache `.htaccess`:**
```apache
Options -MultiViews
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteRule ^ index.html [QR,L]
```

**Nginx configuration:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

---

## 6. Performance Optimization Tips

- **Images**: Use WebP format for photos (`fabiana-photo.webp`) — 30–50% smaller than JPEG
- **Fonts**: Already loaded with `display=swap` — non-blocking
- **Build analysis**: Run `npm run build` and review the bundle report for large chunks
- **Lazy loading**: For future image additions, add `loading="lazy"` attribute

---

## 7. Common Maintenance Tasks

### Update Copyright Year
The footer year is computed automatically: `new Date().getFullYear()`. No manual update needed.

### Add a New FAQ Item
In `src/components/FAQ.tsx`, add an object to the `faqs` array:
```tsx
{
  id: 'faq5',
  question: 'Your new question here?',
  answer: 'Your detailed answer here.',
},
```

### Add a New Service Card (Services section)
In `src/components/Services.tsx`, add to the `steps` array following the existing schema.

### Change Section Order
In `src/App.tsx`, reorder the component imports and JSX placement.

---

## 8. Tech Stack Summary

| Technology | Version | Role |
|---|---|---|
| React | 19.x | UI framework |
| TypeScript | 6.x | Type safety |
| Vite | 8.x | Build tool + dev server |
| Tailwind CSS | 4.x | Utility CSS (v4 CSS-first config) |
| Framer Motion | 13.x | Animations |
| Lucide React | Latest | Icon set |
| Google Fonts | — | Typography (Poppins + Inter) |

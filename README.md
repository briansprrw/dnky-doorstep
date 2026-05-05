# Dnky Doorstep

A fast, fully-customizable personal website template built with Cloudflare Workers. All your data lives in one config file-no databases, no build steps, just pure speed.

## Features

- **Bento grid home page** - profile card, current role, social links, and featured content
- **Skills page** - categorized expertise organized by skill area, with optional certifications
- **Resume page** - collapsible sections for work experience, education, and community involvement
- **Fully themeable** - 16 CSS color variables control the entire design
- **Zero hardcoding** - everything in `src/config.js`, nothing in templates
- **Global CDN** - deployed to Cloudflare Workers, served from ~300 edge locations worldwide
- **Mobile-responsive** - bento grid adapts from 4 columns on desktop to 2 on mobile
- **Email obfuscation** - mailto links base64-encoded to hide from scrapers
- **Social icons** - GitHub, LinkedIn, Email, Calendly icons in the profile footer
- **Environment variables** - separate config from secrets (email handled via Wrangler)

## Quick Start

### Prerequisites

- Node.js 16+
- A Cloudflare account (free tier works)
- `wrangler` CLI: `npm install -g @cloudflare/wrangler`

### Setup

1. **Clone and install**:
   ```bash
   git clone https://github.com/briansprrw/dnky-doorstep.git
   cd dnky-doorstep
   npm install
   ```

2. **Create `.dev.vars`** for local development (optional but recommended):
   ```bash
   echo "EMAIL=your@email.com" > .dev.vars
   ```
   This file is `.gitignore`d and won't be committed. For production, you'll set the email via Wrangler.

3. **Customize `src/config.js`**:
   - Your name, bio, subtitle, location
   - Social links (GitHub, LinkedIn, Email, Calendly)
   - Skills organized by category
   - Work experience and education
   - Color theme (16 CSS variables)

4. **Run locally**:
   ```bash
   wrangler dev
   ```
   Open http://localhost:8787

5. **Deploy**:
   ```bash
   wrangler secret put EMAIL  # Store your email securely in Cloudflare
   wrangler deploy
   ```

## Configuration

Everything is in `src/config.js`. Here's what you can customize:

### Identity & Profile

```javascript
export const NAME = "Your Name";
export const SUBTITLE = "Your headline";
export const MOTTO = "Your tagline";
export const BIO = "Longer description of who you are...";
export const LOCATION = "City, State";
export const EMAIL = "your@email.com";  // Placeholder-overridden by .dev.vars or Wrangler secret
export const AVATAR_URL = "/me.jpeg";   // Place your image in /public
export const FOOTER_TEXT = "example.com";
```

### Social Links

Small icons appear in the profile footer. Supports logo SVGs (GitHub, LinkedIn, Email, Calendly) or custom URLs.

```javascript
export const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/yourname", logo: "/github-logo.svg" },
  { label: "LinkedIn", url: "https://linkedin.com/in/yourname", logo: "/linkedin-logo.svg" },
  { label: "Email", url: "email", logo: "/mail-logo.svg" },  // "email" triggers mailto obfuscation
  { label: "Calendly", url: "https://calendly.com/yourname/30min", logo: "/calendly-logo.svg" },
];
```

### Main Links (Home Page)

Additional link cards on the home page. These are optional-remove or add as needed.

```javascript
export const LINKS = [
  { label: "Skills", url: "/skills", emoji: "🛠️" },
];
```

### Current Role (Optional)

A featured card on the home page. Set to `null` to hide.

```javascript
export const CURRENTLY = {
  title: "Your job title",
  company: "Company name",
  dates: "Jan 2024 – Present",
  description: "What you're working on",
};
```

### Skills

Organized by category. Skills appear both on `/skills` and on the home page (as featured pills).

```javascript
export const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "CSS", "Vite"],
  },
  {
    category: "Backend",
    items: ["Node.js", "PostgreSQL", "AWS"],
  },
];

export const FEATURED_SKILLS = ["React", "TypeScript", "Node.js"];  // Shown on home page
export const CERTS = ["Certification Name (Year)"];  // Empty array hides the section
```

### Experience & Education

Collapsible sections on `/resume`.

```javascript
export const EXPERIENCE = [
  {
    company: "Company Name",
    title: "Job Title",
    dates: "Jan 2022 – Dec 2023",
    bullets: [
      { label: "Achievement", detail: "What you accomplished and why it mattered." },
      { label: "Another thing", detail: "More details here." },
    ],
  },
];

export const EDUCATION = [
  { school: "University Name", degree: "Degree", dates: "2010 – 2014" },
];

export const COMMUNITY = [
  {
    org: "Organization",
    role: "Your role",
    dates: "2020 – Present",
    detail: "Brief description of what you do.",
  },
];
```

### Theme Colors

Full control over the color palette. All 16 variables are used throughout.

```javascript
export const THEME = {
  bgPage: "#09060f",        // Page background
  bgCard: "#110d1c",        // Card background
  bgCardDark: "#0f0c1a",    // Darker cards (profile, currently)
  bgCardDeep: "#13102a",    // Deepest cards
  borderFaint: "#1e1530",   // Subtle borders
  border: "#2a1f45",        // Card borders
  borderAccent: "#3d2f5a",  // Highlight borders
  textBody: "#f0f0f0",      // Body text
  textHeading: "#ffffff",   // Page headings
  textCard: "#e8e0ff",      // Card titles
  textMid: "#d4c8f0",       // Mid-tone text
  textTag: "#c4b8e8",       // Pill/tag text
  textMuted: "#9b8abf",     // Secondary text
  accent: "#6b42b8",        // Primary accent color
};
```

## File Structure

```
src/
  config.js          ← All your content goes here
  index.js           ← Rendering logic (don't edit unless adding features)
public/
  me.jpeg            ← Your profile photo
  *.svg              ← Social logos (GitHub, LinkedIn, Mail, Calendly)
  favicon.ico        ← Your favicon
wrangler.toml        ← Cloudflare Workers config
.dev.vars            ← Local dev env vars (not committed)
.gitignore
package.json
README.md
```

## Email Setup

The email is handled specially to avoid committing real addresses to Git:

- **`src/config.js`**: Contains a placeholder `your@email.com`
- **`.dev.vars`**: Local file (gitignored) with your real email for `wrangler dev`
- **Wrangler secrets**: For production, run `wrangler secret put EMAIL` once to store securely in Cloudflare

When someone clicks the email link, it's decoded from base64 and triggers a mailto.

## Deployment

### Cloudflare Workers (Recommended)

**Manual with Wrangler:**

1. Authenticate: `wrangler login`
2. Update `wrangler.toml` with your domain and Cloudflare details
3. Deploy: `wrangler deploy`

**With GitHub Actions:**

1. Push your repo to GitHub
2. Go to Cloudflare Pages
3. Connect your GitHub account and select this repo
4. Leave build settings blank (Wrangler handles it)
5. Deploy

## Development

### Adding a New Page

1. Add data to `config.js` (e.g., `export const PROJECTS = [...]`)
2. Create a page function in `src/index.js`:
   ```javascript
   function projectsPage() {
     return `<!DOCTYPE html>...<body>${PROJECTS.map(...).join('')}</body>...`;
   }
   ```
3. Add routing in the fetch handler:
   ```javascript
   if (path === "/projects") return new Response(projectsPage(), {...});
   ```

### Modifying Styles

All CSS is inline in `src/index.js` (template literals). Edit `buildSharedStyles()` or add page-specific styles. All colors use `THEME` variables:

```javascript
color: ${THEME.textMuted};  // References your theme
```

### Keyboard Shortcuts & Local Dev

- `Ctrl+C` to stop the dev server
- Changes to `config.js` auto-reload (Wrangler watches for changes)
- Clear browser cache if styles don't update: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows)

## Mobile Responsiveness

The bento grid automatically collapses from 4 columns (desktop) to 2 columns (mobile) at 600px breakpoint. Adjust in the `@media` query if you prefer a different threshold.

## Performance

- **Time to First Byte**: < 50ms (global Cloudflare edge)
- **Page Size**: ~15KB gzipped
- **Cache**: 1 hour default (configurable in `src/index.js`)
- **Regions**: ~300 edge locations worldwide

## Customization Ideas

- **Dark/light mode toggle**: Store preference in localStorage, swap `THEME` dynamically
- **Blog section**: Add `/blog` route with markdown parsing
- **Dynamic content**: Fetch GitHub repos, recent posts, etc., at render time
- **Analytics**: Integrate Cloudflare Web Analytics or Google Analytics
- **Custom domain**: Point your domain to Cloudflare, configure in `wrangler.toml`

## Troubleshooting

**Dev server won't start**
```bash
wrangler dev --port 8787
# Check if port is in use: lsof -i :8787
```

**Styles not updating**
- Clear browser cache: `Cmd+Shift+R` (Mac) / `Ctrl+Shift+R` (Windows)
- Restart dev server

**Photos not showing**
- Images must be in `public/` folder
- Update `AVATAR_URL` to match filename (e.g., `/profile.png`)

**Email click doesn't work**
- Check `.dev.vars` has `EMAIL=your@email.com` for local dev
- For production, run `wrangler secret put EMAIL` before deploying

**Deploy fails**
- Verify `wrangler.toml` has correct `zone_id` and domain
- Run `wrangler login` to re-authenticate
- Ensure your Cloudflare account has Workers enabled (free tier is fine)

## License

**Non-Commercial Use Only**

You are free to use, modify, and deploy this code for personal use. Commercial use, redistribution for profit, or sale is not permitted.

For licensing questions, open an issue on GitHub.

## Getting Started

1. Clone this repo
2. Edit `src/config.js` with your info
3. Run `wrangler dev`
4. Deploy with `wrangler deploy`

That's it. No databases, no build steps, no complexity. Just you, your data, and Cloudflare.

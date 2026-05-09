// =============================================================================
// Configuration Template
// Edit this file to customize your site. All data, colors, and text go here.
// Do not edit src/index.js - it contains only rendering logic.
// =============================================================================

// =============================================================================
// Identity & Profile
// =============================================================================

export const NAME = "Your Name";
export const JOB = ""; // optional - shown below name if set
export const BIO = "Write a bio about yourself. This appears on your home page profile card.";
export const MOTTO = "Your tagline or motto here.";
export const SUBTITLE = "First area ∙ Second area\nThird area ∙ Fourth area"; // Use \n to force a line break
export const EMAIL = "your@email.com"; // Placeholder. Overridden by .dev.vars locally and Wrangler secret in production
export const AVATAR_URL = "/me.jpeg"; // Path to image in /public. Replace with your photo
export const LOCATION = "City, State"; // Or something else, like 'Remote Central US' or whatever you want
export const FOOTER_TEXT = "example.com"; // Domain or text shown in footer

// =============================================================================
// Social Links (profile footer icons)
// Small icons appear in a row below your location. Optional - remove or add as needed.
// Logo paths must be in /public. Use "email" as url to trigger mailto obfuscation.
// =============================================================================

export const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/yourname", logo: "/github-logo.svg" },
  { label: "LinkedIn", url: "https://linkedin.com/in/yourname", logo: "/linkedin-logo.svg" },
  { label: "Email", url: "email", logo: "/mail-logo.svg" },
  { label: "Calendly", url: "https://calendly.com/yourname/30min", logo: "/calendly-logo.svg" },
];

// =============================================================================
// Main Links (home page cards)
// Additional link cards on home page. Optional - remove or add as needed.
// =============================================================================

export const LINKS = [
  { label: "Skills", url: "/skills", emoji: "🛠️" },
];

// =============================================================================
// Currently (home page status card)
// Optional - set to null to hide this card entirely
// =============================================================================

export const CURRENTLY = {
  title: "Your job title",
  company: "Company name",
  dates: "Jan 2024 - Present",
  description: "Brief description of what you are working on.",
};

// =============================================================================
// Skills (skills page + featured pills on home)
// Organize by category. Featured skills appear as pills on home page.
// =============================================================================

export const SKILLS = [
  {
    category: "Category Name",
    items: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
  },
  {
    category: "Another Category",
    items: ["Skill A", "Skill B", "Skill C"],
  },
];

// Featured skills shown as pills on home page
export const FEATURED_SKILLS = ["Skill 1", "Skill 2", "Skill 3"];

// Certifications - empty array hides the section
export const CERTS = [
  "Certification Name (Year)",
  "Another Cert (Year)",
];

// =============================================================================
// Experience (resume page, collapsible sections)
// Empty array hides the section entirely
// =============================================================================

export const EXPERIENCE = [
  {
    company: "Company Name",
    title: "Job Title",
    dates: "Jan 2024 - Present",
    bullets: [
      { label: "Achievement 1", detail: "Description of what you did and why it mattered." },
      { label: "Achievement 2", detail: "Another accomplishment with relevant details." },
    ],
  },
  {
    company: "Previous Company",
    title: "Previous Job Title",
    dates: "Jan 2022 - Dec 2023",
    bullets: [
      { label: "Achievement 1", detail: "Description of what you accomplished." },
      { label: "Achievement 2", detail: "Another key contribution." },
    ],
  },
];

// =============================================================================
// Community / Volunteer Involvement
// Empty array hides the section entirely
// =============================================================================

export const COMMUNITY = [
  {
    org: "Organization Name",
    role: "Your role",
    dates: "2020 - Present",
    detail: "What you do or contribute.",
  },
];

// =============================================================================
// Education
// Empty array hides the section entirely
// =============================================================================

export const EDUCATION = [
  {
    school: "School Name",
    degree: "Degree Name",
    dates: "2010 - 2014",
  },
];

// =============================================================================
// Theme - All colors used on the site
// Swap out hex codes to customize the visual appearance
// =============================================================================

export const THEME = {
  bgPage: "#09060f",        // outer page / body background
  bgCard: "#110d1c",        // standard card background
  bgCardDark: "#0f0c1a",    // darker variant (profile, currently)
  bgCardDeep: "#13102a",    // deepest variant (special cards)
  bgToggle: "#1a1230",      // active toggle button fill
  borderFaint: "#1e1530",   // subtle dividers (resume sections)
  border: "#2a1f45",        // main card borders
  borderAccent: "#3d2f5a",  // avatar border, footer text
  textBody: "#f0f0f0",      // main body text
  textHeading: "#ffffff",   // page headings
  textCard: "#e8e0ff",      // card titles
  textMid: "#d4c8f0",       // bento card body, active state text
  textTag: "#c4b8e8",       // pill / tag text
  textMuted: "#9b8abf",     // secondary / subtitle text
  accent: "#6b42b8",        // primary accent - headings, hover, arrows
};

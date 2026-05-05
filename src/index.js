// =============================================================================
// Dnky Doorstep — Personal website template for Cloudflare Workers
// https://github.com/briansprrw/dnky-doorstep
//
// Rendering logic only — all data lives in ./config.js
// Deploy: wrangler deploy
// Dev:    wrangler dev
//
// License: Non-Commercial Use Only
// You are free to use, modify, and deploy this code for personal use.
// Commercial use, redistribution for profit, or sale is not permitted.
// =============================================================================

import {
  NAME, JOB, BIO, MOTTO, SUBTITLE, EMAIL, AVATAR_URL, LOCATION, FOOTER_TEXT,
  LINKS, SOCIAL_LINKS, CURRENTLY, SKILLS, CERTS, FEATURED_SKILLS, EXPERIENCE, COMMUNITY, EDUCATION,
  THEME,
} from "./config.js";


// Build shared styles with theme tokens
function buildSharedStyles() {
  return `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 1rem;
    background: ${THEME.bgPage};
    color: ${THEME.textBody};
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif;
  }

  a { color: inherit; text-decoration: none; }

  /* Section headings used on both Skills and Resume */
  .section-heading {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: ${THEME.accent};
  }

  /* Top block shared by Skills and Resume — back link + header + toggle */
  .page-top {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  /* Shared inner-page header */
  .page-header { display: flex; flex-direction: column; gap: 0.4rem; }

  .page-header h1 {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: -0.03em;
    color: ${THEME.textHeading};
  }

  .page-header .subtitle {
    font-size: 0.9rem;
    color: ${THEME.textMuted};
    line-height: 1.5;
  }

  .page-header .location {
    font-size: 0.8rem;
    color: ${THEME.textMuted};
  }

  /* Skills / Resume toggle — shared between both inner pages */
  .page-toggle {
    display: flex;
    gap: 0.5rem;
  }

  .toggle-btn {
    padding: 0.4rem 1rem;
    border-radius: 999px;
    font-size: 0.85rem;
    font-weight: 500;
    border: 1px solid ${THEME.border};
    color: ${THEME.textMuted};
    background: transparent;
    transition: all 0.15s;
  }

  .toggle-btn:hover {
    border-color: ${THEME.accent};
    color: ${THEME.textMid};
  }

  .toggle-btn.active {
    background: ${THEME.bgToggle};
    border-color: ${THEME.accent};
    color: ${THEME.textMid};
  }

  .location {
    font-size: 0.8rem;
    color: ${THEME.textMuted};
  }

  footer {
    margin-top: 3rem;
    font-size: 0.75rem;
    color: ${THEME.borderAccent};
  }
  `;
}


// -----------------------------------------------------------------------------
// SHARED HEADER — Used identically on Skills and Resume
// -----------------------------------------------------------------------------

function pageHeader() {
  return `
    <div class="page-header">
      <h1>${NAME}</h1>
      <p class="subtitle">${SUBTITLE}</p>
      <p class="location">${LOCATION}</p>
    </div>`;
}


// -----------------------------------------------------------------------------
// HOME PAGE RENDERER — Bento grid layout
// Cards: profile (2×2), currently/resume (2×1), github, linkedin, email,
//        skills (2×1), calendly. Collapses to 2-col on mobile.
// Cards are generated from LINKS and CURRENTLY config entries
// Adapts to any number of links and optional currently card
// -------

function homePage(env = {}) {
  const email = env.EMAIL || EMAIL;

  // Format footer: if it looks like a domain (has period, no spaces), make it a link
  const footerText = FOOTER_TEXT;
  const isDomain = footerText.includes('.') && !footerText.includes(' ');
  const footerHtml = isDomain ? `<a href="https://${footerText}" target="_blank" rel="noopener noreferrer">${footerText}</a>` : footerText;

  const skillPills = FEATURED_SKILLS
    .map(s => `<span class="skill-pill">${s}</span>`)
    .join("");

  // Render dynamic link cards from LINKS array, with special handling for different types
  const linkCards = LINKS.map(link => {
    let href = link.url;
    let cardClass = `bc bc-${link.label.toLowerCase().replace(/\s+/g, '-')}`;
    let isEmail = link.url === "email";

    if (isEmail) href = '#';

    // Special rendering for Skills card with featured skills
    if (link.label === "Skills") {
      return `
    <a href="${href}" class="${cardClass}">
      <span class="card-label">Expertise</span>
      <div class="skill-pills">${skillPills}</div>
      <span class="card-arrow">View all skills →</span>
    </a>`;
    }

    // Use title from config if provided
    const cardLabel = link.label;
    const cardTitle = link.title || "";

    // Standard card rendering
    const iconHtml = link.emoji.endsWith('.svg')
      ? `<img src="${link.emoji}" alt="${cardLabel}" class="card-icon-img" />`
      : `<span class="card-icon">${link.emoji}</span>`;

    let cardHtml = `
    <a href="${href}" class="${cardClass}" ${isEmail ? "onclick=\"handleEmailClick(event)\"" : "target=\"_blank\" rel=\"noopener noreferrer\""}}>
      <span class="card-label">${cardLabel}</span>
      ${iconHtml}
      <span class="card-title">${cardTitle}</span>`;

    // Add empty card-sub only for Code (spacing)
    if (link.label === "Code") {
      cardHtml += `
      <span class="card-sub"></span>`;
    }

    cardHtml += `
      <span class="card-arrow">→</span>
    </a>`;

    return cardHtml;
  }).join("");

  const currentlyCard = CURRENTLY ? `
    <a href="/resume" class="bc bc-currently">
      <span class="card-label">Currently</span>
      <span class="card-title">${CURRENTLY.title}</span>
      <span class="card-sub">@ ${CURRENTLY.company} &nbsp;·&nbsp; ${CURRENTLY.dates}</span>
      <span class="card-sub">${CURRENTLY.description}</span>
      <span class="card-arrow">View full resume →</span>
    </a>` : "";

  // Generate social links HTML
  const socialLinksHtml = SOCIAL_LINKS.map(link => {
    if (link.logo) {
      const isEmail = link.url === "email";
      const href = isEmail ? "#" : link.url;
      const target = isEmail ? "" : 'target="_blank" rel="noopener noreferrer"';
      const onclick = isEmail ? 'onclick="handleEmailClick(event)"' : "";
      return `<a href="${href}" ${target} ${onclick} class="social-link"><img src="${link.logo}" alt="${link.label}" class="social-logo" /></a>`;
    } else if (link.url === "email") {
      return `<a href="#" onclick="handleEmailClick(event)" class="social-link">✉️</a>`;
    } else {
      return `<a href="${link.url}" target="_blank" rel="noopener noreferrer" class="social-link">${link.label}</a>`;
    }
  }).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <title>${NAME}</title>
  <style>
    ${buildSharedStyles()}

    body {
      justify-content: center;
      align-items: center;
      padding: 1.5rem 1rem;
    }

    /* ---- Bento grid ---- */
    .bento {
      display: grid;
      width: 100%;
      max-width: 900px;
      gap: 0.75rem;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: auto;
      grid-template-areas:
        "profile  profile  currently  currently"
        "profile  profile  skills     skills"
        "github   linkedin email      calendly";
    }

    /* ---- Base card ---- */
    .bc {
      background: ${THEME.bgCard};
      border: 1px solid ${THEME.border};
      border-radius: 16px;
      padding: 1.25rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      text-decoration: none;
      color: ${THEME.textMid};
      transition: border-color 0.15s, box-shadow 0.15s, transform 0.1s;
      overflow: hidden;
    }

    a.bc:hover {
      border-color: ${THEME.accent};
      box-shadow: 0 0 20px ${THEME.accent}20;
      transform: translateY(-2px);
    }

    a.bc:active { transform: translateY(0); }

    /* ---- Grid areas ---- */
    .bc-profile   { grid-area: profile;    background: ${THEME.bgCardDark}; justify-content: flex-end; }
    .bc-currently { grid-area: currently;  background: ${THEME.bgCardDark}; justify-content: space-between; }
    .bc-github    { grid-area: github; }
    .bc-linkedin  { grid-area: linkedin; }
    .bc-email     { grid-area: email; }
    .bc-skills    { grid-area: skills;     background: ${THEME.bgCardDark}; }
    .bc-calendly  { grid-area: calendly;   background: ${THEME.bgCardDeep}; }

    /* ---- Profile card ---- */
    .profile-photo {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid ${THEME.borderAccent};
      margin-bottom: 0.25rem;
    }

    .profile-name {
      font-size: 1.6rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      color: ${THEME.textHeading};
      line-height: 1.1;
    }

    .profile-bio {
      font-size: 0.85rem;
      color: ${THEME.textMuted};
      font-style: normal;
      line-height: 1.5;
    }
    
    .profile-motto {
      font-size: 0.85rem;
      color: ${THEME.textMuted};
      font-style: italic;
      line-height: 1.5;
    }

    .profile-location {
      font-size: 0.75rem;
      color: ${THEME.textMuted};
      margin-top: auto;
    }

    .profile-footer {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
      align-items: flex-start;
      margin-top: auto;
      width: 100%;
    }

    .social-links {
      display: flex;
      gap: 0.5rem;
      align-items: center;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 1.2rem;
      height: 1.2rem;
      border-radius: 4px;
      color: ${THEME.textCard};
      transition: opacity 0.15s;
      font-size: 0.9rem;
    }

    .social-link:hover {
      opacity: 0.8;
    }

    .social-logo {
      width: 100%;
      height: 100%;
      filter: brightness(0) invert(1);
    }

    /* ---- Card label (top of each small card) ---- */
    .card-label {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: ${THEME.textMuted};
    }

    .card-title {
      font-size: 1rem;
      font-weight: 600;
      color: ${THEME.textCard};
      line-height: 1.3;
    }

    .card-sub {
      font-size: 0.8rem;
      color: ${THEME.textMuted};
      line-height: 1.4;
    }

    .card-icon {
      font-size: 1.5rem;
      margin-bottom: 0.1rem;
    }

    .card-icon-img {
      width: 1.5rem;
      height: 1.5rem;
      margin-bottom: 0.1rem;
      color: ${THEME.textCard};
      filter: brightness(0) invert(1);
    }

    .card-arrow {
      margin-top: auto;
      font-size: 0.8rem;
      color: ${THEME.accent};
    }

    /* ---- Skills card ---- */
    .skill-pills {
      display: flex;
      flex-wrap: wrap;
      gap: 0.4rem;
      margin-top: 0.25rem;
    }

    .skill-pill {
      padding: 0.25rem 0.65rem;
      background: ${THEME.bgToggle};
      border: 1px solid ${THEME.border};
      border-radius: 999px;
      font-size: 0.75rem;
      color: ${THEME.textTag};
      white-space: nowrap;
    }

    /* ---- Mobile: 2-column collapse ---- */
    @media (max-width: 600px) {
      .bento {
        grid-template-columns: repeat(2, 1fr);
        grid-template-areas:
          "profile   profile"
          "currently currently"
          "skills    skills"
          "github    linkedin"
          "email     calendly";
      }

      .bc-profile { justify-content: flex-start; }
      .profile-name { font-size: 1.3rem; }
    }
  </style>
</head>
<body>
  <div class="bento">

    <!-- Profile -->
    <div class="bc bc-profile">
      <img src="${AVATAR_URL}" alt="${NAME}" class="profile-photo" />
      <h1 class="profile-name">${NAME}</h1>
      <p class="profile-motto">${SUBTITLE}</p>
      <p class="profile-bio">${BIO}</p>
      <div class="profile-footer">
        <p class="profile-location">${LOCATION}</p>
        <div class="social-links">${socialLinksHtml}</div>
      </div>
    </div>

    <!-- Currently card — optional, renders if CURRENTLY is set -->
    ${currentlyCard}

    <!-- Dynamic link cards from LINKS config -->
    ${linkCards}

  </div>
  <footer>${footerHtml}</footer>
  <script>
    // Email obfuscated — decoded from base64 only at click time, never in the DOM
    function handleEmailClick(e) {
      e.preventDefault();
      window.location.href = 'mailto:' + atob('${btoa(email)}');
    }
  </script>
</body>
</html>`;
}


// -----------------------------------------------------------------------------
// SKILLS PAGE RENDERER
// -----------------------------------------------------------------------------

function skillsPage() {
  // Build each skill category as a section with pill tags
  // Render only if SKILLS array is populated
  const sections = SKILLS.length > 0 ? SKILLS.map(({ category, items }) => `
    <section class="section">
      <h2 class="section-heading">${category}</h2>
      <div class="tags">
        ${items.map(item => `<span class="tag">${item}</span>`).join("")}
      </div>
    </section>`
  ).join("") : "";

  const certItems = CERTS.map(c => `<li class="cert">${c}</li>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <title>Skills — ${NAME}</title>
  <style>
    ${buildSharedStyles()}

    body { align-items: flex-start; }

    .page {
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2.5rem;
    }

    .back {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.875rem;
      color: ${THEME.textMuted};
      transition: color 0.15s;
    }

    .back:hover { color: ${THEME.textMuted}; }

    .section { display: flex; flex-direction: column; gap: 0.75rem; }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag {
      padding: 0.35rem 0.85rem;
      background: ${THEME.bgCard};
      border: 1px solid ${THEME.border};
      border-radius: 999px;
      font-size: 0.85rem;
      color: ${THEME.textTag};
      white-space: nowrap;
    }

    .certs-section { display: flex; flex-direction: column; gap: 0.75rem; }

    .cert-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .cert {
      font-size: 0.9rem;
      color: ${THEME.textTag};
      padding-left: 1rem;
      position: relative;
    }

    .cert::before {
      content: "›";
      position: absolute;
      left: 0;
      color: ${THEME.accent};
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="page-top">
      <a href="/" class="back">← Back</a>
      ${pageHeader()}
      <nav class="page-toggle">
        <a href="/skills" class="toggle-btn active">🛠️ Skills</a>
        <a href="/resume" class="toggle-btn">📄 Resume</a>
      </nav>
    </div>
    ${sections}
    ${CERTS.length > 0 ? `
    <div class="certs-section">
      <h2 class="section-heading">Certifications</h2>
      <ul class="cert-list">${certItems}</ul>
    </div>
    ` : ""}
  </div>
  <footer>${FOOTER_TEXT}</footer>
</body>
</html>`;
}


// -----------------------------------------------------------------------------
// RESUME PAGE RENDERER
// -----------------------------------------------------------------------------

function resumePage() {
  // Work experience — collapsible via <details>, starts closed
  const expHtml = EXPERIENCE.length > 0 ? EXPERIENCE.map(({ company, title, dates, bullets }) => `
    <details class="job">
      <summary class="job-summary">
        <div class="job-summary-inner">
          <span class="chevron">›</span>
          <div class="job-summary-text">
            <h3 class="company">${company}</h3>
            <p class="job-title">${title}</p>
          </div>
          <span class="dates">${dates}</span>
        </div>
      </summary>
      <ul class="bullets">
        ${bullets.map(({ label, detail }) => `
        <li><span class="bullet-label">${label}:</span> ${detail}</li>`).join("")}
      </ul>
    </details>`).join("") : "";

  // Community involvement — collapsible like experience
  const communityHtml = COMMUNITY.length > 0 ? COMMUNITY.map(({ org, role, dates, detail }) => `
    <details class="job">
      <summary class="job-summary">
        <div class="job-summary-inner">
          <span class="chevron">›</span>
          <div class="job-summary-text">
            <h3 class="company">${org}</h3>
            <p class="job-title">${role}</p>
          </div>
          <span class="dates">${dates}</span>
        </div>
      </summary>
      <p class="community-detail">${detail}</p>
    </details>`).join("") : "";

  // Education from config
  const educationHtml = EDUCATION.length > 0 ? EDUCATION.map(({ school, degree, dates }) => `
    <details class="job">
      <summary class="job-summary">
        <div class="job-summary-inner">
          <span class="chevron">›</span>
          <div class="job-summary-text">
            <h3 class="company">${school}</h3>
            <p class="edu-degree">${degree}</p>
          </div>
          <span class="dates">${dates}</span>
        </div>
      </summary>
    </details>`).join("") : "";

  const certHtml = CERTS.map(c => `<span class="tag">${c}</span>`).join("");

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="icon" href="/favicon.ico">
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <title>Resume — ${NAME}</title>
  <style>
    ${buildSharedStyles()}

    body { align-items: flex-start; }

    .page {
      width: 100%;
      max-width: 720px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 3rem;
    }

    .back {
      display: inline-flex;
      align-items: center;
      gap: 0.4rem;
      font-size: 0.875rem;
      color: ${THEME.textMuted};
      transition: color 0.15s;
    }
    .back:hover { color: ${THEME.textMuted}; }

    /* Section = one block (Experience, Education, etc.) */
    .section { display: flex; flex-direction: column; gap: 1.5rem; }

    /* Resume section headings get an underline to separate from job entries */
    .section-heading {
      padding-bottom: 0.5rem;
      border-bottom: 1px solid ${THEME.borderFaint};
    }

    .section-heading-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid ${THEME.borderFaint};
      padding-bottom: 0.5rem;
    }

    /* Override bottom border on heading inside the row since row handles it */
    .section-heading-row .section-heading {
      border-bottom: none;
      padding-bottom: 0;
    }

    .toggle-all {
      background: none;
      border: 1px solid ${THEME.border};
      border-radius: 999px;
      color: ${THEME.textMuted};
      font-size: 0.75rem;
      font-weight: 500;
      padding: 0.25rem 0.75rem;
      cursor: pointer;
      transition: border-color 0.15s, color 0.15s;
    }

    .toggle-all:hover {
      border-color: ${THEME.accent};
      color: ${THEME.textMid};
    }

    /* Job = collapsible <details> block */
    .job { border-bottom: 1px solid ${THEME.bgToggle}; }

    .job-summary {
      list-style: none;
      cursor: pointer;
      padding: 0.75rem 0;
      user-select: none;
    }

    .job-summary::-webkit-details-marker { display: none; }

    .job-summary-inner {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
    }

    .job-summary-text { flex: 1; }

    .chevron {
      font-size: 1rem;
      color: ${THEME.accent};
      display: inline-block;
      transform: rotate(0deg);
      transition: transform 0.2s;
      line-height: 1.6;
      flex-shrink: 0;
    }

    details[open] .chevron { transform: rotate(90deg); }

    .company {
      font-size: 1rem;
      font-weight: 700;
      color: ${THEME.textCard};
    }

    .job-title {
      font-size: 0.875rem;
      color: ${THEME.textMuted};
      font-style: italic;
    }

    .dates {
      font-size: 0.85rem;
      color: ${THEME.textMuted};
      white-space: nowrap;
    }

    .bullets { margin-bottom: 0.75rem; }

    .bullets {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.45rem;
      padding-left: 0;
    }

    .bullets li {
      font-size: 0.875rem;
      color: ${THEME.textTag};
      line-height: 1.6;
      padding-left: 1rem;
      position: relative;
    }

    .bullets li::before {
      content: "›";
      position: absolute;
      left: 0;
      color: ${THEME.accent};
    }

    .bullet-label {
      color: ${THEME.textMid};
      font-weight: 600;
    }

    .community-detail {
      font-size: 0.875rem;
      color: ${THEME.textTag};
      line-height: 1.6;
      padding-left: 1rem;
    }

    .edu-block { display: flex; flex-direction: column; gap: 0.3rem; }

    .edu-degree {
      font-size: 0.875rem;
      color: ${THEME.textMuted};
      font-style: italic;
    }

    .edu-notes {
      list-style: none;
      padding-left: 1rem;
      margin-top: 0.25rem;
    }

    .edu-notes li {
      font-size: 0.8rem;
      color: ${THEME.textMuted};
      position: relative;
      padding-left: 0;
    }

    .edu-notes li::before {
      content: "› ";
      color: ${THEME.accent};
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .tag {
      padding: 0.35rem 0.85rem;
      background: ${THEME.bgCard};
      border: 1px solid ${THEME.border};
      border-radius: 999px;
      font-size: 0.8rem;
      color: ${THEME.textTag};
    }
  </style>
</head>
<body>
  <div class="page">
    <div class="page-top">
      <a href="/" class="back">← Back</a>
      ${pageHeader()}
      <nav class="page-toggle">
        <a href="/skills" class="toggle-btn">🛠️ Skills</a>
        <a href="/resume" class="toggle-btn active">📄 Resume</a>
      </nav>
    </div>

    ${EXPERIENCE.length > 0 ? `
    <div class="section">
      <div class="section-heading-row">
        <h2 class="section-heading">Experience</h2>
        <button class="toggle-all" id="exp-toggle" onclick="toggleAll(this)">Show All</button>
      </div>
      ${expHtml}
    </div>
    ` : ""}

    ${EDUCATION.length > 0 ? `
    <div class="section">
      <h2 class="section-heading">Education</h2>
      ${educationHtml}
    </div>
    ` : ""}

    ${CERTS.length > 0 ? `
    <div class="section">
      <h2 class="section-heading">Certifications</h2>
      <div class="tags">${certHtml}</div>
    </div>
    ` : ""}

    ${COMMUNITY.length > 0 ? `
    <div class="section">
      <h2 class="section-heading">Community Involvement</h2>
      ${communityHtml}
    </div>
    ` : ""}
  </div>
  <footer>${FOOTER_TEXT}</footer>
  <script>
    function toggleAll(btn) {
      var jobs = document.querySelectorAll('details.job');
      var anyOpen = Array.from(jobs).some(function(d) { return d.open; });
      jobs.forEach(function(d) { d.open = !anyOpen; });
      btn.textContent = anyOpen ? 'Show All' : 'Hide All';
    }
  </script>
</body>
</html>`;
}


// -----------------------------------------------------------------------------
// ROUTER — Maps URL paths to page renderers
// Add new pages here: check the path, return a new Response with the HTML.
// -----------------------------------------------------------------------------

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/$/, "") || "/";

    const isSkills = path === "/skills";
    const isResume = path === "/resume";

    return new Response(isResume ? resumePage() : isSkills ? skillsPage() : homePage(env), {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        "Cache-Control": "public, max-age=3600",
      },
    });
  },
};

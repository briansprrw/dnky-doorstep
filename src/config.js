// =============================================================================
// briansprrw.com — Configuration
// Edit this file to customize your site. All data, colors, and text go here.
// Do not edit src/index.js — it contains only rendering logic.
// =============================================================================

// =============================================================================
// Identity & Profile
// =============================================================================

export const NAME = "Brian Sparrow";
export const JOB = ""; // optional — shown below name if set
export const BIO = "Technology leader focused on Microsoft 365, modern workplace strategy, and enterprise transformation. Experience spans complex legacy environments with significant technical debt. Works across consulting and in-house roles to modernize workplace platforms and improve IT delivery at scale.";
export const MOTTO = "Built for complexity. Allergic to the status quo.";
export const SUBTITLE = "M365 & Endpoint Strategy ∙ IT Carve-Out Specialist ∙ Challenging Convention ∙ Fortune 100 Complexity";
export const EMAIL = "your@email.com"; // replace with yours, or use env.EMAIL for deployment
export const AVATAR_URL = "/me.jpeg"; // served from /public — replace with your photo
export const LOCATION = "Milwaukee, WI";
export const FOOTER_TEXT = "dnky-doorstep.com";

// =============================================================================
// Navigation Links (home bento cards)
// Each link becomes a card on the home page. Use "email" as url to trigger mailto obfuscation.
// =============================================================================

export const SOCIAL_LINKS = [
  { label: "GitHub", url: "https://github.com/briansprrw", logo: "/github-logo.svg" },
  { label: "LinkedIn", url: "https://linkedin.com/in/briansparrow", logo: "/linkedin-logo.svg" },
  { label: "Email", url: "email", logo: "/mail-logo.svg" },
  { label: "Calendly", url: "https://calendly.com/briansprrw/30min", logo: "/calendly-logo.svg" },
];

export const LINKS = [
  { label: "Skills", url: "/skills", emoji: "🛠️" },
];

// =============================================================================
// Currently (home page "Currently" bento card)
// Set to null to hide this card entirely
// =============================================================================

export const CURRENTLY = {
  title: "Staff Engineer, Workplace Technology",
  company: "NBCUniversal",
  dates: "Sept 2024 – Present",
  description: "Leading enterprise Modern Workplace delivery and M&A carve-out execution at Fortune 100 scale.",
};

// =============================================================================
// Skills (skills page + home bento featured pills)
// =============================================================================

export const SKILLS = [
  {
    category: "Endpoint Management",
    items: ["Intune", "Windows Autopilot", "Jamf Pro", "Windows 365", "Apple Business Manager", "Co-Management", "SCCM / ConfigMgr", "Device Lifecycle Management", "Endpoint Hardening", "Compliance Policy", "Patch Management", "macOS Management", "Mobile Device Management", "CIS Benchmarks", "PowerShell Desired State Configuration (DSC)"],
  },
  {
    category: "Identity & Security",
    items: ["Microsoft Entra ID", "Zero Trust", "Conditional Access", "Multi-Factor Authentication (MFA)", "FIDO2 / Passwordless", "Windows Hello for Business", "Defender for Endpoint", "Active Directory", "Azure AD SSO", "Active Directory Federation Services (ADFS)", "BitLocker", "DigiCert / PKI", "SOX Compliance"],
  },
  {
    category: "Collaboration & Productivity",
    items: ["Microsoft 365", "Microsoft Teams", "Exchange Online", "SharePoint Online", "OneDrive", "M365 Governance", "Tenant Configuration & Hardening", "Microsoft Purview", "Purview DLP & AIP", "eDiscovery", "Teams Telephony", "Teams Rooms", "Google Workspace", "AudioCodes Session Border Controller (SBC)", "Smartsheet", "Lucidchart"],
  },
  {
    category: "Development & Automation",
    items: ["PowerShell", "Power Automate", "Power Platform", "Azure Automations", "REST APIs", "PowerApps", "JavaScript", "Node.js", "SQL", "Confluence", "Jira", "Linear", "Tesseract OCR"],
  },
  {
    category: "AI & Copilot",
    items: ["GitHub Copilot", "Microsoft Copilot", "Claude Code", "Azure OpenAI", "ChatGPT"],
  },
  {
    category: "Migration Tooling",
    items: ["ShareGate", "MigrationWiz", "Quest On Demand Migration"],
  },
  {
    category: "Infrastructure & Platforms",
    items: ["Azure", "Azure Virtual Desktop", "VMware", "VDI / Horizon", "AWS", "3CX PBX"],
  },
  {
    category: "Analytics & Reporting",
    items: ["Microsoft Graph API", "Power BI", "Power Query", "Nexthink", "Jamf API"],
  },
];

// Featured skills shown as pills on the home bento card
export const FEATURED_SKILLS = ["Microsoft 365", "Intune", "Jamf Pro", "Windows Autopilot", "Microsoft Entra ID", "Zero Trust", "Conditional Access", "M&A Carve-Outs", "PowerShell", "GitHub Copilot"];

// Certifications (empty array hides the section entirely)
export const CERTS = [
  "ITIL v4 Foundation (2021)",
  "Microsoft 365 Certified: Administrator Expert (2024)",
  "Microsoft 365 Certified: Endpoint Administrator Associate (2024)",
  "Microsoft: Get Licensing Ready Master (2024)",
];

// =============================================================================
// Experience (resume page, collapsible)
// Empty array hides the section entirely
// =============================================================================

export const EXPERIENCE = [
  {
    company: "NBCUniversal",
    title: "Staff Engineer, Workplace Technology",
    dates: "Sept 2024 – Present",
    bullets: [
      { label: "Enterprise Workplace Delivery", detail: "Led execution of enterprise Modern Workplace initiatives across Microsoft 365, endpoint management, and collaboration platforms, focusing on delivery quality, risk management, and long-term operability in a large, globally distributed organization." },
      { label: "Carve-Out Execution (Versant)", detail: "Served as the technical lead for the Modern Workplace scope of a major corporate carve-out, delivering separation and day-one readiness of core workplace services for ~5,000 employees as part of a newly standalone, multi-billion-dollar business." },
      { label: "Platform & Operating Model Design", detail: "Designed and implemented the device lifecycle, management, and compliance operating model used to transition workplace services into steady-state operations post-separation." },
      { label: "Technical Decision-Making", detail: "Made and drove core architectural decisions across identity, Microsoft 365, and device platforms, resolving cross-team dependencies and execution blockers during high-pressure delivery windows." },
      { label: "Enterprise Direction & Planning", detail: "Applied lessons from large-scale delivery and the Versant carve-out to inform future workplace platform direction, operating model evolution, and modernization sequencing across NBCUniversal." },
    ],
  },
  {
    company: "Concurrency",
    title: "Technical Architect, Modern Work (Contractor)",
    dates: "June 2024 – Sept 2024",
    bullets: [
      { label: "Transformation Delivery", detail: "Led Microsoft 365, Exchange, and SharePoint transformations, improving licensing posture, security, and productivity outcomes for client organizations." },
      { label: "Platform Strategy", detail: "Established roadmaps for modern workplace platforms, aligning delivery plans to business priorities." },
      { label: "Hands-On Technical Leadership", detail: "Designed and deployed Intune-based device management solutions, integrating with existing client infrastructure to support scalable operations." },
    ],
  },
  {
    company: "West Monroe",
    title: "Architect, Enterprise Technology",
    dates: "June 2022 – May 2024",
    bullets: [
      { label: "Client-Facing Transformation & Opportunity Wins", detail: "Served as technical lead on enterprise transformation pursuits, directly supporting opportunities won totaling $3.5M in 2023 and $4M+ in Q1 2024." },
      { label: "Program Execution", detail: "Led global teams delivering large-scale Microsoft 365 migrations and modernization programs." },
      { label: "Architecture & Advisory Role", detail: "Guided clients and internal teams on tenant design, security posture, collaboration strategy, and modern management." },
    ],
  },
  {
    company: "Johnson Financial Group",
    title: "Senior Engineer, IT",
    dates: "Mar 2020 – June 2022",
    bullets: [
      { label: "Senior Technical Ownership", detail: "Served as lead engineer for identity, collaboration, and workplace platforms, operating as the primary escalation point for complex issues impacting security and reliability." },
      { label: "Identity & Platform Modernization", detail: "Owned ADFS-to-Entra ID migrations and Office 365 adoption, including SSO integrations and endpoint onboarding." },
      { label: "Execution at Scale", detail: "Led full-scale Office 365 migrations across Azure AD, Teams, OneDrive, and Intune with JAMF integration, supporting secure enterprise-wide adoption." },
    ],
  },
  {
    company: "Grede Holdings",
    title: "Systems Analyst → Project Manager → Senior Engineer → Senior Manager",
    dates: "2013 – 2020",
    bullets: [
      { label: "Progressive Leadership & Scope Growth", detail: "Promoted through four roles in seven years, culminating as Interim Director responsible for a $6–8M infrastructure budget and a team of 18 across infrastructure, ops, and end-user computing." },
      { label: "Operational & Financial Impact", detail: "Led vendor strategy, contract negotiations, and cost-reduction initiatives that reduced infrastructure OpEx by more than 30% while maintaining service reliability." },
      { label: "Enterprise Platform Modernization", detail: "Directed multi-year modernization efforts across collaboration, identity, and core infrastructure platforms, improving security posture, scalability, and operational consistency." },
    ],
  },
];

// =============================================================================
// Community / Volunteer Involvement
// Empty array hides the section entirely
// =============================================================================

export const COMMUNITY = [
  {
    org: "Milwaukee Pride",
    role: "Technology Manager",
    dates: "2013 – Present",
    detail: "Oversee technology for an annual festival serving 45,000 guests and 500 volunteers, including IT/AV sourcing and Microsoft 365 tenant governance.",
  },
  {
    org: "JRs Pups 'N Stuff Animal Rescue",
    role: "Technical Advisor",
    dates: "2016 – 2020",
    detail: "Provided end-to-end IT advisory support, including Microsoft 365, legacy AD, procurement, and process automation.",
  },
];

// =============================================================================
// Education
// Empty array hides the section entirely
// =============================================================================

export const EDUCATION = [
  {
    school: "Milwaukee School of Engineering",
    degree: "BS, Business Management + Computer Science",
    dates: "2005 – 2010",
  },
];

// =============================================================================
// Theme — All colors used on the site
// Swap out colors to customize the visual appearance
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
  accent: "#6b42b8",        // primary accent — headings, hover, arrows
};

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
export const BIO = "Enterprise technology leader driving modern workplace strategy, collaboration platform delivery, and M&A execution at scale. Brings deep hands-on expertise across Microsoft 365 and Google Workspace to complex legacy environments, working across consulting and in-house roles to transform IT delivery and build lasting operational foundations.";
export const MOTTO = "Built for complexity. Allergic to the status quo.";
export const SUBTITLE = "Modern Workplace Leader ∙ IT Carve-Out Specialist\nChallenging Convention ∙ Fortune 100 Complexity";
export const EMAIL = "your@email.com"; // replace with yours, or use env.EMAIL for deployment
export const AVATAR_URL = "/me.jpeg"; // served from /public — replace with your photo
export const LOCATION = "Milwaukee, WI";
export const FOOTER_TEXT = "dnky.us/doorstep";

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
// Projects (projects page + home bento card)
// Empty array hides the section entirely
// =============================================================================

export const PROJECTS = [
  {
    title: "Endpoint Configuration as Code",
    subtitle: "Internal PowerShell Module",
    description: "Designed and developed a PowerShell-based infrastructure-as-code system for endpoint management, wrapping a commercial patch-management platform's REST API. Applied Microsoft-style cmdlet conventions to provide a declarative, version-controlled interface for automation, reporting, and endpoint lifecycle operations.",
    shortDesc: "Terraform-like endpoint automation",
    tags: ["PowerShell", "REST APIs", "Infrastructure as Code", "Patch Management"],
  },
  {
    title: "Dnky Doorstep",
    subtitle: "Personal Website Template",
    description: "Designed and built a fast, configurable personal website template on Cloudflare Workers. Centralized profile, skills, résumé, projects, links, and visual theming in a single configuration file without requiring a database or traditional build pipeline.",
    shortDesc: "Config-driven personal website",
    tags: ["JavaScript", "Cloudflare Workers", "HTML/CSS", "Config-driven"],
  },
  {
    title: "Dashboard",
    subtitle: "Task Management System",
    description: "Rebuilding a long-running personal task-management system as a secure, multi-user Cloudflare application. Designed the product architecture, authentication, role-based authorization, private-content boundaries, testing strategy, and milestone-driven implementation process.",
    shortDesc: "Multi-user task management app",
    tags: ["Node.js", "Cloudflare", "Authentication", "RBAC", "Product Design"],
  },
  {
    title: "PrideFest Community Artist Wishlist",
    subtitle: "Mobile Voting Application",
    description: "Designed and built a mobile-first application for collecting and ranking artist suggestions from the PrideFest community. Supports authenticated voting, moderated submissions, duplicate merging, audit history, data exports, and a security-focused Cloudflare architecture.",
    shortDesc: "Mobile voting application",
    tags: ["Mobile-first", "Cloudflare", "Authentication", "Data Export", "Security"],
  },
];

// =============================================================================
// Currently (home page "Currently" bento card)
// Set to null to hide this card entirely
// =============================================================================

export const CURRENTLY = {
  title: "Staff Engineer, Workplace Technology",
  company: "NBCUniversal",
  dates: "Sept 2024 – Present",
  description: "Leading workplace platform strategy, endpoint modernization, and carve-out execution at Fortune 100 scale",
};

// =============================================================================
// Skills (skills page + home bento featured pills)
// =============================================================================

export const SKILLS = [
  {
    category: "Endpoint Management",
    items: ["Intune", "Jamf Pro", "Windows Autopilot", "SCCM / ConfigMgr", "Co-Management", "Device Lifecycle Management", "Endpoint Hardening", "Compliance Policy", "Patch Management", "macOS Management", "Mobile Device Management", "Windows 365", "Apple Business Manager", "CIS Benchmarks", "PowerShell Desired State Configuration (DSC)"],
  },
  {
    category: "Identity & Security",
    items: ["Microsoft Entra ID", "Active Directory", "Zero Trust", "Conditional Access", "Multi-Factor Authentication (MFA)", "Azure AD SSO", "Privileged Identity Management (PIM)", "Azure RBAC", "Active Directory Federation Services (ADFS)", "Defender for Endpoint", "Google Cloud Identity", "FIDO2 / Passwordless", "Windows Hello for Business", "BitLocker", "DigiCert / PKI", "SOX Compliance", "SCIM", "SAML"],
  },
  {
    category: "Collaboration & Productivity",
    items: ["Microsoft 365", "Google Workspace", "Microsoft Teams", "Exchange Online", "SharePoint Online", "OneDrive", "M365 Governance", "Tenant Configuration & Hardening", "Microsoft Purview", "Purview DLP & AIP", "eDiscovery", "Google Vault", "Teams Telephony", "Teams Rooms", "Adobe Admin Console", "AudioCodes Session Border Controller (SBC)", "Smartsheet", "Lucidchart", "Slack"],
  },
  {
    category: "Development & Automation",
    items: ["PowerShell", "REST APIs", "Power Automate", "Azure Automation / Runbooks", "Power Platform", "Google Workspace APIs", "Google Directory API", "Google Apps Script", "JavaScript", "Node.js", "PowerApps", "SQL", "Google Sheets API", "Google OAuth", "Adobe User Management API (UMAPI)", "Confluence", "Jira", "Linear", "Tesseract OCR", "Microsoft Graph API"],
  },
  {
    category: "AI & Copilot",
    items: ["Microsoft Copilot", "GitHub Copilot", "Azure OpenAI", "Claude Code", "ChatGPT"],
  },
  {
    category: "Migration Tooling",
    items: ["MigrationWiz", "ShareGate", "Quest On Demand Migration", "Google Workspace Migrate"],
  },
  {
    category: "Infrastructure & Platforms",
    items: ["Azure", "Azure Virtual Desktop", "AWS", "VMware", "VDI / Horizon", "3CX PBX"],
  },
  {
    category: "Analytics & Reporting",
    items: ["Power BI", "Power Query", "Nexthink", "Jamf API"],
  },
];

// Featured skills shown as pills on the home bento card
export const FEATURED_SKILLS = ["Microsoft 365", "Google Workspace", "Intune", "Jamf Pro", "Microsoft Entra ID", "Zero Trust", "Conditional Access", "M&A Carve-Outs", "PowerShell", "REST APIs"];

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
      { label: "Enterprise Workplace Delivery", detail: "Leads transformational Modern Workplace initiatives across Microsoft 365, Google Workspace, endpoint management, and collaboration platforms, balancing hands-on delivery with platform strategy and business impact across a large, globally distributed organization." },
      { label: "Carve-Out Execution (Versant)", detail: "Served as technical lead for the Modern Workplace scope of a major corporate carve-out, designing and delivering the device lifecycle, compliance, and operating model that enabled day-one readiness for ~5,000 employees at a newly standalone, multi-billion-dollar business." },
      { label: "Technical Decision-Making", detail: "Makes and drives core architectural decisions across identity, Microsoft 365, and device platforms, resolving cross-team dependencies and execution blockers during high-pressure delivery windows." },
      { label: "Platform Automation & Governance", detail: "Builds and maintains PowerShell automation against Microsoft Graph API to enforce tenant configuration, automate provisioning workflows, and surface compliance drift across identity and collaboration platforms, extending governance beyond what admin consoles expose." },
      { label: "Cross-Functional Stakeholder Engagement", detail: "Works directly with Cyber, business stakeholders, and technical teams across the organization to align workplace platform decisions with security requirements, business priorities, and operational needs." },
    ],
  },
  {
    company: "Concurrency",
    title: "Technical Architect, Modern Work (Contractor)",
    dates: "June 2024 – Sept 2024",
    bullets: [
      { label: "Transformation Delivery", detail: "Led Microsoft 365, Exchange, and SharePoint transformations, improving licensing posture, security, and productivity outcomes for client organizations." },
      { label: "Platform Strategy", detail: "Established roadmaps for modern workplace platforms, aligning delivery plans to business priorities." },
      { label: "Hands-On Technical Leadership", detail: "Designed and deployed Intune-based device management solutions and built PowerShell automation against Microsoft Graph API to streamline provisioning and configuration management for client environments." },
    ],
  },
  {
    company: "West Monroe",
    title: "Architect, Enterprise Technology",
    dates: "June 2022 – May 2024",
    bullets: [
      { label: "Client-Facing Transformation & Opportunity Wins", detail: "Served as technical lead on enterprise transformation pursuits, directly supporting opportunities won totaling $3.5M in 2023 and $4M+ in Q1 2024." },
      { label: "Program Execution", detail: "Led global teams delivering large-scale Microsoft 365 and Google Workspace migrations and modernization programs, including tenant architecture, data migration, and identity configuration across multiple enterprise clients." },
      { label: "Architecture & Standards", detail: "Guided clients on tenant design, security posture, and collaboration governance, including authoring information protection standards, DLP policy frameworks, and data classification models across Microsoft 365 and Google Workspace environments." },
    ],
  },
  {
    company: "Johnson Financial Group",
    title: "Senior Engineer, IT",
    dates: "Mar 2020 – June 2022",
    bullets: [
      { label: "Senior Technical Ownership", detail: "Served as lead engineer for identity, collaboration, and workplace platforms, operating as the primary escalation point for complex issues impacting security and reliability." },
      { label: "Identity & Platform Modernization", detail: "Owned ADFS-to-Entra ID migration and Office 365 adoption, configuring SSO federation and SCIM provisioning for enterprise application onboarding including Slack, and managing endpoint onboarding across the identity boundary." },
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
    detail: "Oversee technology for an annual festival serving 45,000 guests and 500 volunteers, including IT/AV sourcing, Google Workspace ownership, and a greenfield Microsoft 365 tenant buildout.",
  },
  {
    org: "JRs Pups 'N Stuff Animal Rescue",
    role: "Technical Advisor",
    dates: "2016 – 2020",
    detail: "Provided end-to-end IT advisory support, managed Google Workspace, legacy AD, procurement, and process automation.",
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

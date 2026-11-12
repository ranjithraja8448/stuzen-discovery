export interface SectionMeta {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  questionRange: string;
  iconName: string;
  questionCount: number;
}

export const SECTIONS: SectionMeta[] = [
  {
    id: 's01',
    number: '01',
    title: 'Client & Business Details',
    subtitle: 'Core organization identity, executive contacts, and operational footprint',
    questionRange: 'Q01–Q07',
    iconName: 'Building2',
    questionCount: 7,
  },
  {
    id: 's02',
    number: '02',
    title: 'Project Goals & Audience',
    subtitle: 'Commercial targets, core conversion actions, and problem statement',
    questionRange: 'Q08–Q11',
    iconName: 'Target',
    questionCount: 4,
  },
  {
    id: 's03',
    number: '03',
    title: 'Website Type & Page Structure',
    subtitle: 'Information architecture, page manifest, and content readiness',
    questionRange: 'Q12–Q16',
    iconName: 'LayoutGrid',
    questionCount: 5,
  },
  {
    id: 's04',
    number: '04',
    title: 'Design & Brand Direction',
    subtitle: 'Visual identity, design aesthetics, benchmark references, and linguistics',
    questionRange: 'Q17–Q21',
    iconName: 'Palette',
    questionCount: 5,
  },
  {
    id: 's05',
    number: '05',
    title: 'Features & Functionality',
    subtitle: '22-point feature matrix, custom workflows, and administrative roles',
    questionRange: 'Q22–Q25',
    iconName: 'Cpu',
    questionCount: 4,
  },
  {
    id: 's06',
    number: '06',
    title: 'WhatsApp, Integrations & Automation',
    subtitle: 'Omnichannel messaging, payment gateway, CRM, and webhook automations',
    questionRange: 'Q26–Q29',
    iconName: 'Zap',
    questionCount: 4,
  },
  {
    id: 's07',
    number: '07',
    title: 'Technical & Operational',
    subtitle: 'Domain DNS, cloud hosting, enterprise email, and security protocols',
    questionRange: 'Q30–Q34',
    iconName: 'ShieldCheck',
    questionCount: 5,
  },
  {
    id: 's08',
    number: '08',
    title: 'SEO, Analytics & Marketing',
    subtitle: 'Organic search strategy, event tracking telemetry, and acquisition channels',
    questionRange: 'Q35–Q38',
    iconName: 'BarChart3',
    questionCount: 4,
  },
  {
    id: 's09',
    number: '09',
    title: 'Timeline, Budget & Support',
    subtitle: 'Delivery urgency, commercial investment range, and SLA warranty',
    questionRange: 'Q39–Q43',
    iconName: 'CalendarClock',
    questionCount: 5,
  },
  {
    id: 's10',
    number: '10',
    title: 'Final Notes, Materials & Internal Summary',
    subtitle: 'Critical success factors, asset handover checklist, proposal breakdown, and sign-off',
    questionRange: 'Q44–Q45 + A–F',
    iconName: 'FileSignature',
    questionCount: 8,
  },
];

// Q8 Main Purposes
export const PURPOSE_OPTIONS = [
  { id: 'bookings', label: 'Accept Bookings & Appointments', desc: 'Calendar scheduling, slot selection, and instant confirmation', icon: 'Calendar' },
  { id: 'leads', label: 'Generate Enquiries & High-Ticket Leads', desc: 'Conversion funnels, qualified intake forms, and fast response triggers', icon: 'TrendingUp' },
  { id: 'showcase', label: 'Showcase Company & Services', desc: 'Corporate capabilities, project case studies, and brand reputation', icon: 'Briefcase' },
  { id: 'ecommerce', label: 'Sell Products Online', desc: 'Digital store, cart, payment gateway, and inventory synchronization', icon: 'ShoppingBag' },
  { id: 'portal', label: 'Customer / Member Portal', desc: 'Authenticated dashboard, private docs, account history, and ticketing', icon: 'Lock' },
  { id: 'credibility', label: 'Build Brand Credibility', desc: 'High-authority positioning for investors, enterprise buyers, and partners', icon: 'Award' },
  { id: 'content', label: 'Publish Information & Content', desc: 'Thought leadership, research publications, news, and knowledge base', icon: 'BookOpen' },
  { id: 'other', label: 'Other Custom Purpose', desc: 'Specific bespoke commercial or technical objective', icon: 'Sparkles' },
];

// Q10 5-Second Primary Actions
export const PRIMARY_ACTIONS = [
  { id: 'whatsapp', label: 'Send Direct WhatsApp Enquiry', icon: 'MessageCircle' },
  { id: 'call', label: 'Click to Call Directly', icon: 'PhoneCall' },
  { id: 'form', label: 'Submit Detailed Request Form', icon: 'FileText' },
  { id: 'book', label: 'Book Consultation / Meeting', icon: 'Calendar' },
  { id: 'buy', label: 'Browse Products & Purchase', icon: 'ShoppingCart' },
  { id: 'catalog', label: 'Download Brochure / Case Studies', icon: 'Download' },
  { id: 'portfolio', label: 'Explore Interactive Portfolio', icon: 'Eye' },
];

// Q12 Website Types
export const WEBSITE_TYPES = [
  { id: 'corporate', label: 'Business / Corporate', desc: 'Professional authority for established firms, B2B companies, & agencies', icon: 'Building' },
  { id: 'service', label: 'Service-Based Business', desc: 'Lead generation and service offerings for consultancies, clinics, & trades', icon: 'Wrench' },
  { id: 'portfolio', label: 'Creative / Architecture Portfolio', desc: 'Visual storytelling, rich media galleries, and project breakdowns', icon: 'FolderKanban' },
  { id: 'landing', label: 'High-Conversion Landing Page', desc: 'Focused single-page or multi-variant funnel for paid ad campaigns', icon: 'Rocket' },
  { id: 'ecommerce', label: 'E-commerce & D2C Store', desc: 'Online catalog, shopping cart, payment gateway, and shipping rules', icon: 'ShoppingBag' },
  { id: 'portal', label: 'Web Application / Client Portal', desc: 'Complex SaaS, user accounts, role-based workflows, and database records', icon: 'Database' },
  { id: 'booking', label: 'Booking & Reservation Platform', desc: 'Real-time schedule availability, deposits, and automated reminders', icon: 'CalendarCheck' },
  { id: 'blog', label: 'Editorial / Media / News Publication', desc: 'Content-heavy portal with categories, search, newsletter, & contributors', icon: 'Newspaper' },
];

// Q13 Required Pages
export const PAGE_OPTIONS = [
  { id: 'home', label: 'Home Page', category: 'Core' },
  { id: 'about', label: 'About Us / Company Story', category: 'Core' },
  { id: 'services_main', label: 'Our Services (Main Overview)', category: 'Core' },
  { id: 'services_detail', label: 'Service Detail Pages (Individual)', category: 'Core' },
  { id: 'products_main', label: 'Products / Shop Catalog', category: 'Commerce' },
  { id: 'products_detail', label: 'Product Detail Pages (Individual SKU)', category: 'Commerce' },
  { id: 'portfolio', label: 'Portfolio / Case Studies', category: 'Showcase' },
  { id: 'testimonials', label: 'Client Testimonials / Reviews', category: 'Showcase' },
  { id: 'pricing', label: 'Pricing / Plans / Packages', category: 'Conversion' },
  { id: 'faq', label: 'FAQ (Frequently Asked Questions)', category: 'Support' },
  { id: 'gallery', label: 'Photo / Video Gallery', category: 'Showcase' },
  { id: 'blog', label: 'Blog / Insights / Articles', category: 'Content' },
  { id: 'contact', label: 'Contact Us & Location Map', category: 'Conversion' },
  { id: 'careers', label: 'Careers / Job Openings', category: 'Company' },
  { id: 'portal_dash', label: 'Customer Login / User Dashboard', category: 'Application' },
  { id: 'legal', label: 'Privacy Policy & Terms of Service', category: 'Legal' },
];

// Q17 Brand Readiness
export const BRAND_READINESS_CHIPS = [
  { id: 'logo_ready', label: 'Vector / HD Logo Ready' },
  { id: 'colors_ready', label: 'Brand Color Palette Established' },
  { id: 'fonts_ready', label: 'Typography / Fonts Defined' },
  { id: 'guidelines_doc', label: 'Brand Guidelines PDF Available' },
  { id: 'need_branding', label: 'Need Stuzen Brand Identity Studio' },
];

// Q18 Visual Styles
export const VISUAL_STYLES = [
  { id: 'minimal', label: 'Minimal & Ultra-Clean', desc: 'Generous whitespace, refined typography, subtle micro-interactions', icon: 'Minimize2' },
  { id: 'modern', label: 'Modern & Executive Premium', desc: 'Dark obsidian or sleek alabaster, glassmorphic accents, SaaS elegance', icon: 'Sparkles' },
  { id: 'corporate', label: 'Corporate & Trusted Authority', desc: 'Structured grids, authoritative blues/greys, enterprise stability', icon: 'Shield' },
  { id: 'creative', label: 'Creative & Vibrant', desc: 'Dynamic palettes, expressive layout breaking, animated transitions', icon: 'Palette' },
  { id: 'luxury', label: 'Luxury & Timeless Sophistication', desc: 'Editorial serif accents, muted metallics, high-fashion restraint', icon: 'Crown' },
  { id: 'futuristic', label: 'Bold & Tech Futuristic', desc: 'Cyber neon accents, glowing lines, dark mode priority, spatial depth', icon: 'Cpu' },
  { id: 'reference_based', label: 'Matched to Benchmark References', desc: 'Faithful to curated competitor benchmarks supplied below', icon: 'Compass' },
  { id: 'stuzen_recommend', label: 'Stuzen Creative Team Recommendation', desc: 'Full creative license entrusted to Stuzen design architects', icon: 'Wand2' },
];

// Q22 Features 22-Matrix
export const FEATURE_MATRIX_ITEMS = [
  { id: 'contact_form', label: 'Contact / Multi-step Enquiry Form', icon: 'Mail', tier: 'Core' },
  { id: 'click_to_call', label: 'Click-to-Call Quick Actions', icon: 'Phone', tier: 'Core' },
  { id: 'whatsapp_button', label: 'WhatsApp Floating Concierge', icon: 'MessageCircle', tier: 'Core' },
  { id: 'live_chat', label: 'Live Chat / AI Support Agent', icon: 'Bot', tier: 'Growth' },
  { id: 'search_filters', label: 'Live Search & Multi-facet Filters', icon: 'Search', tier: 'Growth' },
  { id: 'media_gallery', label: 'Interactive Image & Video Showcase', icon: 'Image', tier: 'Core' },
  { id: 'cart_checkout', label: 'Shopping Cart & Frictionless Checkout', icon: 'ShoppingCart', tier: 'Commerce' },
  { id: 'payment_gateway', label: 'Online Payment Gateway Integration', icon: 'CreditCard', tier: 'Commerce' },
  { id: 'inventory_mgmt', label: 'Product & Real-time Stock Sync', icon: 'Boxes', tier: 'Commerce' },
  { id: 'email_notifications', label: 'Automated HTML Email Notifications', icon: 'BellRing', tier: 'Automation' },
  { id: 'analytics_reports', label: 'Executive Analytics & KPI Dashboard', icon: 'BarChart2', tier: 'Growth' },
  { id: 'maps_location', label: 'Interactive Google Maps & Directions', icon: 'MapPin', tier: 'Core' },
  { id: 'auth_dashboard', label: 'Client Login / Member Portal', icon: 'UserCheck', tier: 'Custom Software' },
  { id: 'admin_dashboard', label: 'Dedicated CMS / Admin Control Panel', icon: 'Sliders', tier: 'Custom Software' },
  { id: 'blog_cms', label: 'Dynamic Blog / Resource CMS Engine', icon: 'PenTool', tier: 'Core' },
  { id: 'booking_system', label: 'Real-time Booking & Calendar System', icon: 'CalendarDays', tier: 'Automation' },
  { id: 'order_tracking', label: 'Live Order Status & Shipment Tracking', icon: 'PackageSearch', tier: 'Commerce' },
  { id: 'rbac_permissions', label: 'Role-Based Access Control (RBAC)', icon: 'ShieldAlert', tier: 'Custom Software' },
  { id: 'sms_notifications', label: 'SMS & OTP Verification Gateway', icon: 'Smartphone', tier: 'Automation' },
  { id: 'file_transfer', label: 'Secure File Upload / Download Vault', icon: 'HardDriveDownload', tier: 'Custom Software' },
  { id: 'multilingual', label: 'Multi-Language i18n Localization', icon: 'Globe2', tier: 'Growth' },
  { id: 'custom_api', label: 'Custom 3rd-Party REST/GraphQL API', icon: 'Workflow', tier: 'Custom Software' },
];

// Q26 WhatsApp capabilities
export const WHATSAPP_CAPABILITIES = [
  { id: 'click_chat', label: 'Simple Click-to-Chat Button', desc: 'Directs visitor directly into chat with pre-set brand phone number' },
  { id: 'prefilled', label: 'Contextual Pre-filled Enquiry Message', desc: 'Includes page URL, service chosen, or product name automatically' },
  { id: 'human_handover', label: 'Smart Human Agent Handover', desc: 'Routes conversations to available sales/support team reps' },
  { id: 'order_notifications', label: 'Order & Booking Updates via WhatsApp', desc: 'Instant confirmations and tracking sent straight to customer WhatsApp' },
  { id: 'lead_to_staff', label: 'Instant Lead Notification to Staff WhatsApp', desc: 'Sales managers receive instant buzz whenever a form is submitted' },
  { id: 'approved_replies', label: 'Approved Meta Business Quick Replies', desc: 'Interactive buttons and automated FAQ menu flow' },
  { id: 'cloud_api', label: 'Official WhatsApp Business Platform (Cloud API)', desc: 'Enterprise high-volume messaging with verified green check' },
  { id: 'not_needed', label: 'WhatsApp Integration Not Required', desc: 'No WhatsApp messaging needed for this phase' },
];

// Q27 Existing tools
export const EXISTING_TOOLS_CHIPS = [
  { id: 'crm', label: 'CRM (HubSpot, Salesforce, Zoho, LeadSquared)' },
  { id: 'billing', label: 'Billing / Invoicing (QuickBooks, Tally, Zoho Books)' },
  { id: 'erp', label: 'ERP & Inventory Management' },
  { id: 'sheets', label: 'Google Sheets / Airtable Database' },
  { id: 'email_mkt', label: 'Email Marketing (Mailchimp, Klaviyo, Brevo)' },
  { id: 'calendly', label: 'Scheduling (Calendly, Cal.com, Acuity)' },
  { id: 'pos', label: 'Physical Retail POS System' },
];

// Q28 Payment gateways (Indian Rupee Focus)
export const PAYMENT_GATEWAY_OPTIONS = [
  { id: 'razorpay', label: 'Razorpay (India UPI, Cards, Netbanking & EMI)' },
  { id: 'cashfree', label: 'Cashfree Payments (UPI, Autopay & Cards)' },
  { id: 'stripe', label: 'Stripe India (Credit Cards & Global Currency)' },
  { id: 'instamojo', label: 'Instamojo Payment Gateway' },
  { id: 'upi_qr', label: 'Direct Dynamic UPI QR Code & Bank Wire' },
  { id: 'none', label: 'No Online Payments Required' },
];

// Q30 Domain Status
export const DOMAIN_OPTIONS = [
  { id: 'already_owned', label: 'Domain Already Owned & Active', desc: 'Client has registrar credentials (GoDaddy, Namecheap, Cloudflare, etc.)' },
  { id: 'need_stuzen', label: 'Need Stuzen to Advise & Purchase', desc: 'Stuzen will secure the perfect .in / .com / .io brand domain' },
  { id: 'transfer_required', label: 'Domain Transfer Required', desc: 'Domain owned but needs DNS migration to Stuzen management' },
];

// Q31 Hosting Status
export const HOSTING_OPTIONS = [
  { id: 'stuzen_cloud', label: 'Stuzen Managed High-Speed Edge Hosting (Recommended)', desc: 'Global CDN, 99.99% uptime, auto-SSL, and zero server maintenance headache' },
  { id: 'client_server', label: 'Deploy to Client Existing Cloud / VPS', desc: 'Client provides AWS, GCP, Azure, DigitalOcean, or cPanel credentials' },
  { id: 'undecided', label: 'Need Stuzen to Evaluate Architecture', desc: 'Determine based on database, traffic projections, and compliance' },
];

// Q34 Security & Protocols
export const SECURITY_ITEMS = [
  { id: 'ssl', label: 'Enterprise SSL / TLS Encryption' },
  { id: 'backups', label: 'Daily Automated Cloud Backups' },
  { id: 'ddos', label: 'Cloudflare DDoS Mitigation & WAF' },
  { id: 'gdpr', label: 'GDPR / Cookie Consent & DPDP India Compliance' },
  { id: '2fa', label: 'Two-Factor Authentication (2FA) for Admins' },
  { id: 'uptime', label: '99.9% Uptime SLA Monitoring' },
];

// Q35 SEO Tiers
export const SEO_TIERS = [
  { id: 'basic', label: 'Foundation Technical SEO (Included)', desc: 'Clean semantic markup, meta tags, OpenGraph, XML sitemap, robot.txt, & Core Web Vitals speed optimization' },
  { id: 'ongoing', label: 'Ongoing Growth SEO Retainer', desc: 'Continuous keyword targeting, monthly blog velocity, backlink outreach, & search ranking telemetry' },
  { id: 'discuss', label: 'Audit Existing Site & Recommend Strategy', desc: 'Review current rankings, crawl errors, and organic traffic before deciding' },
];

// Q37 Analytics Tracking
export const ANALYTICS_OPTIONS = [
  { id: 'ga4', label: 'Google Analytics 4 (GA4)' },
  { id: 'gsc', label: 'Google Search Console (GSC)' },
  { id: 'meta_pixel', label: 'Meta (Facebook/Instagram) Pixel & CAPI' },
  { id: 'clarity', label: 'Microsoft Clarity / Hotjar Heatmaps' },
  { id: 'conversion_api', label: 'Server-Side Conversion API' },
  { id: 'linkedin_tag', label: 'LinkedIn Insight Tag' },
];

// Q41 Budget Tiers (PURE INDIAN RUPEES / ZERO USD)
export const BUDGET_TIERS = [
  {
    id: 'starter',
    label: 'Essential Growth',
    range: '₹25,000 – ₹60,000',
    desc: 'High-speed modern business presence, responsive design, core SEO & lead capture',
    icon: 'IndianRupee',
  },
  {
    id: 'business',
    label: 'Professional SaaS / E-Commerce',
    range: '₹60,000 – ₹1.5 Lakhs',
    desc: 'Bespoke custom UI, CMS engine, online store, payment gateway & WhatsApp integration',
    icon: 'IndianRupee',
  },
  {
    id: 'custom_eng',
    label: 'Enterprise Web Application',
    range: '₹1.5 Lakhs – ₹3.5 Lakhs',
    desc: 'Custom database architecture, multi-role dashboards, automation workflows & APIs',
    icon: 'IndianRupee',
  },
  {
    id: 'flagship',
    label: 'Flagship Digital Transformation',
    range: '₹3.5 Lakhs+',
    desc: 'Complete enterprise software ecosystem, multi-tenant cloud architecture & dedicated SLA',
    icon: 'IndianRupee',
  },
];

// Q42 Support Care Tiers
export const SUPPORT_TIERS = [
  { id: 'monthly_retainer', label: 'Stuzen Priority Care (Monthly Retainer)', desc: 'Continuous uptime monitoring, security patching, monthly content updates, & priority engineering support' },
  { id: 'on_demand', label: 'On-Demand Hourly Support', desc: 'Ad-hoc updates, feature sprints, and maintenance as needed at standard agency hourly rate' },
  { id: 'training_handover', label: 'Complete Handover with Training Only', desc: 'Full video walkthroughs and documentation for client team self-management with 30-day bug warranty' },
  { id: 'discuss_later', label: 'Discuss Post-Launch Support Later', desc: 'Evaluate during pre-launch staging review' },
];

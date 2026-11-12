import { DiscoveryFormData, InternalProjectSummary } from '../types/discovery';
import { WEBSITE_TYPES, PAGE_OPTIONS, FEATURE_MATRIX_ITEMS } from '../data/discoveryQuestions';

export function generateInternalSummaryFromAnswers(data: DiscoveryFormData): InternalProjectSummary {
  const websiteTypeObj = WEBSITE_TYPES.find(w => w.id === data.s03_structure.websiteType);
  const typeLabel = websiteTypeObj ? websiteTypeObj.label : (data.s03_structure.otherWebsiteType || 'Custom Bespoke Platform');

  // Selected pages labels
  const pageLabels = data.s03_structure.requiredPages.map(pageId => {
    const p = PAGE_OPTIONS.find(item => item.id === pageId);
    return p ? p.label : pageId;
  });

  // Selected features
  const featureLabels = data.s05_features.selectedFeatures.map(featId => {
    const f = FEATURE_MATRIX_ITEMS.find(item => item.id === featId);
    return f ? f.label : featId;
  });

  // Tech Architecture recommendation based on features & type
  let techArch = 'Stuzen High-Performance Architecture: React 19 / TypeScript on Vite + Tailwind CSS, deployed on Stuzen Managed High-Speed Edge Cloud CDN.';
  if (data.s05_features.selectedFeatures.includes('cart_checkout') || data.s05_features.selectedFeatures.includes('payment_gateway')) {
    techArch += ' Headless E-commerce with secure Indian Payment Gateway (Razorpay / Cashfree UPI & Cards) and instant webhook reconciliation.';
  }
  if (data.s05_features.selectedFeatures.includes('auth_dashboard') || data.s05_features.selectedFeatures.includes('rbac_permissions')) {
    techArch += ' PostgreSQL / Supabase serverless database layer with JWT session auth and Role-Based Access Control (RBAC).';
  }
  if (data.s06_whatsapp.whatsappCapabilities.includes('cloud_api') || data.s06_whatsapp.whatsappCapabilities.includes('lead_to_staff')) {
    techArch += ' Automated Official WhatsApp Cloud API webhook receiver for instantaneous multi-channel lead dispatches.';
  }

  // Agreed Pages & Key Features Summary
  const pagesSummary = `${pageLabels.length} Core Pages (${pageLabels.slice(0, 5).join(', ')}${pageLabels.length > 5 ? ` + ${pageLabels.length - 5} more` : ''})`;
  const featuresSummary = `${featureLabels.length} Active System Modules (${featureLabels.slice(0, 6).join(', ')}${featureLabels.length > 6 ? ` + ${featureLabels.length - 6} more` : ''})`;
  const agreedPagesFeatures = `${pagesSummary} with ${featuresSummary}. Special Workflow: ${data.s05_features.specialWorkflowDetails || 'Standard interactive lead capture & responsive multi-device design.'}`;

  // Integrations & Recurring Costs (Pure INR / Zero USD)
  const integrations: string[] = [];
  if (data.s06_whatsapp.whatsappCapabilities.length > 0 && !data.s06_whatsapp.whatsappCapabilities.includes('not_needed')) {
    integrations.push('WhatsApp Cloud API (~₹0.40/conversation as per Meta India tariffs)');
  }
  if (data.s06_whatsapp.paymentGatewayStatus && data.s06_whatsapp.paymentGatewayStatus !== 'none' && !data.s06_whatsapp.paymentGatewayStatus.includes('No Online')) {
    integrations.push(`Payment Gateway (${data.s06_whatsapp.preferredPaymentGateway || 'Razorpay / Cashfree Standard ~2% MDR'})`);
  }
  if (data.s07_technical.hostingStatus === 'stuzen_cloud') {
    integrations.push('Stuzen Edge Cloud CDN, SSL & Automated Daily Backups (₹2,500 – ₹4,500/month)');
  }
  if (data.s08_seo.analyticsTracking.length > 0) {
    integrations.push(`Analytics Telemetry (${data.s08_seo.analyticsTracking.join(', ')})`);
  }
  const integrationsText = integrations.length > 0
    ? integrations.join('; ') + '.'
    : 'No paid 3rd-party recurring integrations required for initial phase.';

  // Exclusions / Phase 2
  const exclusions = 'Phase 2 Enhancements: Mobile native apps (iOS/Android), advanced multi-region ERP integrations, automated AI voice calling agent, and custom warehouse logistics tracking.';

  // Estimated delivery milestones
  const timeline = data.s09_timeline.timelineSpeed || 'Standard 4–6 weeks sprint';
  const deliveryMilestones = `Estimated Timeline: ${timeline} (Target Launch: ${data.s09_timeline.targetLaunchDate || 'TBD'}).\n• Sprint 1 (Days 1–7): Architectural discovery blueprint, wireframes, and brand asset review.\n• Sprint 2 (Days 8–18): High-fidelity interactive UI design in Figma & design sign-off.\n• Sprint 3 (Days 19–30): Core React engineering, component library, and API/backend integration.\n• Sprint 4 (Days 31–38): End-to-end QA testing, speed optimization, SEO audit, and production launch cutover.`;

  // Quotation & payment milestones (Pure Indian Rupees / INR)
  let quotation = 'Commercial Structure: 40% initial commitment deposit upon discovery agreement sign-off, 40% upon staging milestone approval, and 20% upon final production DNS launch.';
  
  const pageCount = data.s03_structure.requiredPages.length;
  const featureCount = data.s05_features.selectedFeatures.length;

  if (data.s09_timeline.budgetTier === 'starter') {
    quotation = 'Commercial Tier: Essential Growth (₹25,000 – ₹60,000). Payment Schedule: 50% advance upon contract kick-off, 50% upon final production deployment.';
  } else if (data.s09_timeline.budgetTier === 'business') {
    quotation = 'Commercial Tier: Professional SaaS / E-Commerce (₹60,000 – ₹1.5 Lakhs). Payment Schedule: 40% advance sprint deposit, 40% staging review approval, 20% upon final production DNS release.';
  } else if (data.s09_timeline.budgetTier === 'custom_eng') {
    quotation = 'Commercial Tier: Enterprise Web Application (₹1.5 Lakhs – ₹3.5 Lakhs). Payment Schedule: 35% advance sprint kick-off, 35% mid-sprint functional demo, 30% final security audit & deployment.';
  } else if (data.s09_timeline.budgetTier === 'flagship') {
    quotation = 'Commercial Tier: Flagship Digital Transformation (₹3.5 Lakhs+). Payment Schedule: 30% contract advance, 30% milestone review, 20% security compliance audit, 20% production DNS release.';
  } else {
    // Dynamic fallback based on pages & features
    if (pageCount > 10 || featureCount > 10) {
      quotation = 'Estimated Commercial Estimate: ₹1.5 Lakhs – ₹2.5 Lakhs based on custom scope. Payment Schedule: 40% advance, 40% staging demo, 20% deployment.';
    } else {
      quotation = 'Estimated Commercial Estimate: ₹50,000 – ₹1.2 Lakhs based on standard scope. Payment Schedule: 50% advance, 50% deployment.';
    }
  }

  return {
    recommendedArchitecture: techArch,
    agreedPagesFeatures: agreedPagesFeatures,
    integrationsAndRecurringCosts: integrationsText,
    exclusionsPhase2: exclusions,
    deliveryMilestones: deliveryMilestones,
    quotationPaymentTerms: quotation,
  };
}

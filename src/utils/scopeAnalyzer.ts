import { DiscoveryFormData } from '../types/discovery';
import { BUDGET_TIERS } from '../data/discoveryQuestions';

export interface SectionProgress {
  sectionId: string;
  answeredCount: number;
  totalCount: number;
  percentage: number;
}

export interface ScopeAnalysis {
  totalAnswered: number;
  totalQuestions: number;
  overallPercentage: number;
  sectionProgress: Record<string, SectionProgress>;
  pageCount: number;
  featureCount: number;
  complexityTier: 'Low Complexity' | 'Standard Pro' | 'High Enterprise' | 'Flagship Scale';
  complexityScore: number;
  recommendedStack: string[];
  estimatedWeeks: string;
  estimatedPriceRange: string;
  estimatedMinINR: number;
  estimatedMaxINR: number;
}

export function analyzeScope(data: DiscoveryFormData): ScopeAnalysis {
  let totalAnswered = 0;
  const totalQuestions = 45;
  const sectionProgress: Record<string, SectionProgress> = {};

  // Section 01: 7 questions
  let s01Count = 0;
  if (data.s01_client.contactName.trim()) s01Count++;
  if (data.s01_client.businessName.trim()) s01Count++;
  if (data.s01_client.industry.trim()) s01Count++;
  if (data.s01_client.phoneWhatsapp.trim() || data.s01_client.email.trim()) s01Count++;
  if (data.s01_client.websiteUrl.trim() || data.s01_client.socialLinks.trim()) s01Count++;
  if (data.s01_client.businessDescription.trim()) s01Count++;
  if (data.s01_client.mainDecisionMaker.trim()) s01Count++;
  sectionProgress['s01'] = { sectionId: 's01', answeredCount: s01Count, totalCount: 7, percentage: Math.round((s01Count / 7) * 100) };
  totalAnswered += s01Count;

  // Section 02: 4 questions
  let s02Count = 0;
  if (data.s02_goals.purposes.length > 0) s02Count++;
  if (data.s02_goals.targetAudience.trim()) s02Count++;
  if (data.s02_goals.primaryAction.length > 0) s02Count++;
  if (data.s02_goals.businessProblemToSolve.trim()) s02Count++;
  sectionProgress['s02'] = { sectionId: 's02', answeredCount: s02Count, totalCount: 4, percentage: Math.round((s02Count / 4) * 100) };
  totalAnswered += s02Count;

  // Section 03: 5 questions
  let s03Count = 0;
  if (data.s03_structure.websiteType) s03Count++;
  if (data.s03_structure.requiredPages.length > 0) s03Count++;
  if (data.s03_structure.contentReadiness.trim()) s03Count++;
  if (data.s03_structure.contentProvider.trim()) s03Count++;
  if (data.s03_structure.replacementDetails.trim()) s03Count++;
  sectionProgress['s03'] = { sectionId: 's03', answeredCount: s03Count, totalCount: 5, percentage: Math.round((s03Count / 5) * 100) };
  totalAnswered += s03Count;

  // Section 04: 5 questions
  let s04Count = 0;
  if (data.s04_design.brandReadiness.length > 0) s04Count++;
  if (data.s04_design.visualStyles.length > 0) s04Count++;
  if (data.s04_design.referenceWebsites.some(r => r.url.trim())) s04Count++;
  if (data.s04_design.stylesToAvoid.trim()) s04Count++;
  if (data.s04_design.isMultiLanguage !== undefined) s04Count++;
  sectionProgress['s04'] = { sectionId: 's04', answeredCount: s04Count, totalCount: 5, percentage: Math.round((s04Count / 5) * 100) };
  totalAnswered += s04Count;

  // Section 05: 4 questions
  let s05Count = 0;
  if (data.s05_features.selectedFeatures.length > 0) s05Count++;
  if (data.s05_features.specialWorkflowDetails.trim()) s05Count++;
  if (data.s05_features.adminAccessRoles.length > 0) s05Count++;
  if (data.s05_features.postLaunchCmsPreference.trim()) s05Count++;
  sectionProgress['s05'] = { sectionId: 's05', answeredCount: s05Count, totalCount: 4, percentage: Math.round((s05Count / 4) * 100) };
  totalAnswered += s05Count;

  // Section 06: 4 questions
  let s06Count = 0;
  if (data.s06_whatsapp.whatsappCapabilities.length > 0) s06Count++;
  if (data.s06_whatsapp.existingBusinessTools.length > 0 || data.s06_whatsapp.existingToolsDetails?.trim()) s06Count++;
  if (data.s06_whatsapp.paymentGatewayStatus.trim()) s06Count++;
  if (data.s06_whatsapp.otherAutomations.trim()) s06Count++;
  sectionProgress['s06'] = { sectionId: 's06', answeredCount: s06Count, totalCount: 4, percentage: Math.round((s06Count / 4) * 100) };
  totalAnswered += s06Count;

  // Section 07: 5 questions
  let s07Count = 0;
  if (data.s07_technical.domainStatus.trim()) s07Count++;
  if (data.s07_technical.hostingStatus.trim()) s07Count++;
  if (data.s07_technical.businessEmailNeed.trim()) s07Count++;
  if (data.s07_technical.migrationDetails.trim()) s07Count++;
  if (data.s07_technical.securityUptimeRequirements.length > 0) s07Count++;
  sectionProgress['s07'] = { sectionId: 's07', answeredCount: s07Count, totalCount: 5, percentage: Math.round((s07Count / 5) * 100) };
  totalAnswered += s07Count;

  // Section 08: 4 questions
  let s08Count = 0;
  if (data.s08_seo.seoTier.trim()) s08Count++;
  if (data.s08_seo.targetLocationsAndKeywords.trim()) s08Count++;
  if (data.s08_seo.analyticsTracking.length > 0) s08Count++;
  if (data.s08_seo.paidAdsPlans.length > 0) s08Count++;
  sectionProgress['s08'] = { sectionId: 's08', answeredCount: s08Count, totalCount: 4, percentage: Math.round((s08Count / 4) * 100) };
  totalAnswered += s08Count;

  // Section 09: 5 questions
  let s09Count = 0;
  if (data.s09_timeline.targetLaunchDate.trim() || data.s09_timeline.timelineSpeed.trim()) s09Count++;
  if (data.s09_timeline.deadlineReason.trim()) s09Count++;
  if (data.s09_timeline.budgetTier.trim()) s09Count++;
  if (data.s09_timeline.supportCareTier.trim()) s09Count++;
  if (data.s09_timeline.finalApprover.trim()) s09Count++;
  sectionProgress['s09'] = { sectionId: 's09', answeredCount: s09Count, totalCount: 5, percentage: Math.round((s09Count / 5) * 100) };
  totalAnswered += s09Count;

  // Section 10: 2 questions (Q44, Q45)
  let s10Count = 0;
  if (data.s10_final.mostImportantSuccessFactor.trim()) s10Count++;
  if (data.s10_final.unaddressedConcerns.trim()) s10Count++;
  sectionProgress['s10'] = { sectionId: 's10', answeredCount: s10Count, totalCount: 2, percentage: Math.round((s10Count / 2) * 100) };
  totalAnswered += s10Count;

  const pageCount = data.s03_structure.requiredPages.length;
  const featureCount = data.s05_features.selectedFeatures.length;

  // Calculate complexity
  let complexityScore = pageCount * 2 + featureCount * 4;
  if (data.s05_features.selectedFeatures.includes('cart_checkout')) complexityScore += 15;
  if (data.s05_features.selectedFeatures.includes('auth_dashboard')) complexityScore += 18;
  if (data.s05_features.selectedFeatures.includes('booking_system')) complexityScore += 14;
  if (data.s05_features.selectedFeatures.includes('rbac_permissions')) complexityScore += 12;
  if (data.s04_design.isMultiLanguage) complexityScore += 10;

  let complexityTier: 'Low Complexity' | 'Standard Pro' | 'High Enterprise' | 'Flagship Scale' = 'Low Complexity';
  let estimatedWeeks = '2–3 weeks';

  if (complexityScore >= 85) {
    complexityTier = 'Flagship Scale';
    estimatedWeeks = '8–12 weeks';
  } else if (complexityScore >= 55) {
    complexityTier = 'High Enterprise';
    estimatedWeeks = '5–8 weeks';
  } else if (complexityScore >= 28) {
    complexityTier = 'Standard Pro';
    estimatedWeeks = '3–5 weeks';
  }

  // Dynamic INR Calculation
  let estimatedMinINR = 25000;
  let estimatedMaxINR = 60000;

  if (data.s09_timeline.budgetTier) {
    const selectedTier = BUDGET_TIERS.find(b => b.id === data.s09_timeline.budgetTier);
    if (selectedTier) {
      if (selectedTier.id === 'starter') {
        estimatedMinINR = 25000;
        estimatedMaxINR = 60000;
      } else if (selectedTier.id === 'business') {
        estimatedMinINR = 60000;
        estimatedMaxINR = 150000;
      } else if (selectedTier.id === 'custom_eng') {
        estimatedMinINR = 150000;
        estimatedMaxINR = 350000;
      } else if (selectedTier.id === 'flagship') {
        estimatedMinINR = 350000;
        estimatedMaxINR = 650000;
      }
    }
  } else {
    // Computed based on complexity
    if (complexityTier === 'Flagship Scale') {
      estimatedMinINR = 350000;
      estimatedMaxINR = 600000;
    } else if (complexityTier === 'High Enterprise') {
      estimatedMinINR = 150000;
      estimatedMaxINR = 350000;
    } else if (complexityTier === 'Standard Pro') {
      estimatedMinINR = 60000;
      estimatedMaxINR = 150000;
    } else {
      estimatedMinINR = 25000;
      estimatedMaxINR = 60000;
    }
  }

  const formatINR = (val: number) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(val % 100000 === 0 ? 0 : 1)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const estimatedPriceRange = `${formatINR(estimatedMinINR)} – ${formatINR(estimatedMaxINR)}`;

  // Recommended Tech Stack
  const recommendedStack: string[] = ['React 19', 'TypeScript', 'Tailwind CSS'];
  if (complexityScore >= 55 || data.s05_features.selectedFeatures.includes('auth_dashboard')) {
    recommendedStack.push('Next.js App Router', 'PostgreSQL / Supabase');
  } else {
    recommendedStack.push('Vite SPA / Edge Cloud');
  }

  if (data.s05_features.selectedFeatures.includes('payment_gateway')) {
    recommendedStack.push('Razorpay / Cashfree');
  }

  if (data.s06_whatsapp.whatsappCapabilities.some(c => c !== 'not_needed')) {
    recommendedStack.push('WhatsApp Cloud API');
  }

  if (data.s08_seo.analyticsTracking.length > 0) {
    recommendedStack.push('GA4 Telemetry');
  }

  recommendedStack.push('Edge CDN Global');

  const overallPercentage = Math.round((totalAnswered / totalQuestions) * 100);

  return {
    totalAnswered,
    totalQuestions,
    overallPercentage: Math.min(overallPercentage, 100),
    sectionProgress,
    pageCount,
    featureCount,
    complexityTier,
    complexityScore,
    recommendedStack,
    estimatedWeeks,
    estimatedPriceRange,
    estimatedMinINR,
    estimatedMaxINR,
  };
}

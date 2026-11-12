export type MeetingMode = 'In person' | 'Phone' | 'Video call';

export interface MeetingMetadata {
  interviewDate: string;
  meetingMode: MeetingMode;
  stuzenRepresentative: string;
  clientAttendees: string;
  meetingLocationOrLink?: string;
}

export interface ClientDetails {
  contactName: string;
  contactDesignation: string;
  businessName: string;
  industry: string;
  phoneWhatsapp: string;
  email: string;
  websiteUrl: string;
  socialLinks: string;
  businessDescription: string;
  primaryLocation: string;
  mainDecisionMaker: string;
}

export interface ProjectGoals {
  purposes: string[]; // Q8
  otherPurpose?: string;
  targetAudience: string; // Q9
  primaryAction: string[]; // Q10
  otherPrimaryAction?: string;
  businessProblemToSolve: string; // Q11
}

export interface WebsiteTypeStructure {
  websiteType: string; // Q12
  otherWebsiteType?: string;
  requiredPages: string[]; // Q13
  otherRequiredPages?: string;
  contentReadiness: string; // Q14
  contentProvider: string; // Q15
  replacementDetails: string; // Q16
}

export interface DesignBrandDirection {
  brandReadiness: string[]; // Q17
  visualStyles: string[]; // Q18
  otherVisualStyle?: string;
  referenceWebsites: {
    url: string;
    notes: string;
  }[]; // Q19
  stylesToAvoid: string; // Q20
  isMultiLanguage: boolean; // Q21
  languagesList: string;
}

export interface FeaturesMatrix {
  selectedFeatures: string[]; // Q22
  otherFeatureDetails?: string;
  specialWorkflowDetails: string; // Q23
  adminAccessRoles: string[]; // Q24
  postLaunchCmsPreference: string; // Q25
}

export interface WhatsAppIntegrations {
  whatsappCapabilities: string[]; // Q26
  whatsappNumber?: string;
  existingBusinessTools: string[]; // Q27
  existingToolsDetails?: string;
  paymentGatewayStatus: string; // Q28
  preferredPaymentGateway?: string;
  otherAutomations: string; // Q29
}

export interface TechnicalOperational {
  domainStatus: string; // Q30
  domainName?: string;
  hostingStatus: string; // Q31
  hostingProvider?: string;
  businessEmailNeed: string; // Q32
  migrationDetails: string; // Q33
  securityUptimeRequirements: string[]; // Q34
}

export interface SEOAnalyticsMarketing {
  seoTier: string; // Q35
  targetLocationsAndKeywords: string; // Q36
  analyticsTracking: string[]; // Q37
  paidAdsPlans: string[]; // Q38
}

export interface TimelineBudgetSupport {
  targetLaunchDate: string; // Q39
  timelineSpeed: string;
  deadlineReason: string; // Q40
  budgetTier: string; // Q41
  supportCareTier: string; // Q42
  finalApprover: string; // Q43
}

export interface MaterialsReceived {
  logo: boolean;
  brandGuidelines: boolean;
  textContent: boolean;
  imagesVideos: boolean;
  productCatalogue: boolean;
  existingCredentials: boolean;
  domainHostingAccess: boolean;
  referenceSites: boolean;
  otherMaterials?: string;
}

export interface InternalProjectSummary {
  recommendedArchitecture: string; // A
  agreedPagesFeatures: string; // B
  integrationsAndRecurringCosts: string; // C
  exclusionsPhase2: string; // D
  deliveryMilestones: string; // E
  quotationPaymentTerms: string; // F
}

export interface DiscoverySignOff {
  clientRepName: string;
  clientRepTitle: string;
  clientSignDate: string;
  stuzenRepName: string;
  stuzenSignDate: string;
  isAgreed: boolean;
}

export interface DiscoveryFormData {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: 'Draft' | 'Completed' | 'In Review' | 'Approved';
  meeting: MeetingMetadata;
  // 10 Sections
  s01_client: ClientDetails;
  s02_goals: ProjectGoals;
  s03_structure: WebsiteTypeStructure;
  s04_design: DesignBrandDirection;
  s05_features: FeaturesMatrix;
  s06_whatsapp: WhatsAppIntegrations;
  s07_technical: TechnicalOperational;
  s08_seo: SEOAnalyticsMarketing;
  s09_timeline: TimelineBudgetSupport;
  s10_final: {
    mostImportantSuccessFactor: string; // Q44
    unaddressedConcerns: string; // Q45
    materialsReceived: MaterialsReceived;
    internalSummary: InternalProjectSummary;
    signOff: DiscoverySignOff;
  };
}


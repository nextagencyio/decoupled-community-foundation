// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Grant
export interface DrupalGrant extends DrupalNode {
  grantType?: DrupalTerm[]
  fundingAmount?: string
  deadline?: {
    timestamp: number
  }
  eligibilityCriteria?: {
    processed: string
  }
  focusAreas?: DrupalTerm[]
  applicationUrl?: string
}

export interface GrantsData {
  nodeGrants: {
    nodes: DrupalGrant[]
  }
}

// Focus Area
export interface DrupalFocusArea extends DrupalNode {
  iconName?: string
  investmentTotal?: string
  grantsAwarded?: string
  keyOutcomes?: string[]
}

export interface FocusAreasData {
  nodeFocusAreas: {
    nodes: DrupalFocusArea[]
  }
}

// Foundation Event
export interface DrupalEvent extends DrupalNode {
  eventDate?: {
    timestamp: number
  }
  endDate?: {
    timestamp: number
  }
  location?: string
  eventCategory?: DrupalTerm[]
  registrationUrl?: string
  ticketPrice?: string
}

export interface EventsData {
  nodeEvents: {
    nodes: DrupalEvent[]
  }
}

// News
export interface DrupalNews extends DrupalNode {
  newsCategory?: DrupalTerm[]
  publishDate?: {
    timestamp: number
  }
  author?: string
  summary?: {
    processed: string
  }
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'

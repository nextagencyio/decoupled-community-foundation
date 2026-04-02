import { getClient } from '@/lib/drupal-client'
import HomepageRenderer from './components/HomepageRenderer'
import SetupGuide from './components/SetupGuide'
import ContentSetupGuide from './components/ContentSetupGuide'
import { Metadata } from 'next'
import { checkConfiguration } from '../lib/config-check'
import { GET_HOMEPAGE_DATA, GET_FEATURED_GRANTS } from '@/lib/queries'
import { DrupalGrant } from '@/lib/types'

// Enable ISR with 1 hour revalidation
export const revalidate = 3600
export const dynamic = 'force-dynamic'


export async function generateMetadata(): Promise<Metadata> {
  const title = 'Evergreen Community Foundation - Growing Stronger Together'
  const description = 'Evergreen Community Foundation connects generosity with opportunity through strategic grantmaking, donor services, and community leadership.'

  return {
    title,
    description,
    keywords: ['Community Foundation', 'Grants', 'Philanthropy', 'Donor Services', 'Nonprofit Support', 'Charitable Giving'],
    openGraph: {
      title,
      description,
      type: 'website',
      locale: 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

export default async function Home() {
  // Check if the app is properly configured
  const configStatus = checkConfiguration()

  if (!configStatus.isConfigured) {
    return <SetupGuide missingVars={configStatus.missingVars} />
  }

  const client = getClient()
  const data = await client.raw(GET_HOMEPAGE_DATA)
  const homepageContent = data?.nodeHomepages?.nodes?.[0] || null

  // Fetch featured grants server-side to avoid client-side Apollo issues
  let featuredGrants: DrupalGrant[] = []
  try {
    const grantsData = await client.raw(GET_FEATURED_GRANTS)
    featuredGrants = grantsData?.nodeGrants?.nodes || []
  } catch (error) {
    console.error('Error fetching featured grants:', error)
  }

  // Check if connected but no content exists - show content import guide
  if (!homepageContent) {
    const drupalBaseUrl = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL
    return <ContentSetupGuide drupalBaseUrl={drupalBaseUrl} />
  }

  return <HomepageRenderer homepageContent={homepageContent} featuredGrants={featuredGrants} />
}

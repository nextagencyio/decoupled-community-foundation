'use client'

import { useQuery } from '@apollo/client'
import { GET_FEATURED_GRANTS } from '@/lib/queries'
import { DrupalGrant } from '@/lib/types'
import Link from 'next/link'
import ResponsiveImage from './ResponsiveImage'
import { ArrowRight } from 'lucide-react'

export default function FeaturedGrants() {
  const { data, loading } = useQuery(GET_FEATURED_GRANTS)
  const grants: DrupalGrant[] = data?.nodeGrants?.nodes || []

  if (loading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">Our Grants</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="animate-pulse flex rounded-xl overflow-hidden bg-gray-100 h-48" />
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (grants.length === 0) return null

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-2">Our Grants</h2>
            <p className="text-lg text-gray-600">Explore how we invest in our community&apos;s future.</p>
          </div>
          <Link
            href="/grants"
            className="hidden md:inline-flex items-center text-primary-700 font-semibold hover:text-primary-900 transition-colors"
          >
            View all
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {grants.slice(0, 4).map((grant) => (
            <Link
              key={grant.id}
              href={grant.path || '#'}
              className="group flex flex-row rounded-xl overflow-hidden bg-white border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-1/3 min-h-[200px] bg-gradient-to-br from-primary-800 to-primary-900">
                {(grant as any).image?.url ? (
                  <ResponsiveImage
                    src={(grant as any).image.url}
                    alt={(grant as any).image.alt || grant.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    variations={(grant as any).image.variations}
                    targetWidth={300}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-4xl font-bold text-white/30">{grant.title?.charAt(0)}</div>
                  </div>
                )}
              </div>
              <div className="flex-1 p-6 flex flex-col justify-center">
                {(grant as any).fundingAmount && (
                  <p className="text-sm text-primary-600 font-medium mb-1">{(grant as any).fundingAmount}</p>
                )}
                <h3 className="font-display text-lg font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                  {grant.title}
                </h3>
                <div className="flex items-center text-primary-700 font-medium text-sm group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link
            href="/grants"
            className="inline-flex items-center text-primary-700 font-semibold hover:text-primary-900"
          >
            View all grants
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}

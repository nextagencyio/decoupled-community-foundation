'use client'

import { Heart, Users, Globe, TrendingUp, Award, Handshake } from 'lucide-react'

const reasons = [
  {
    icon: Heart,
    title: 'Community First',
    description: 'Every grant and program is designed with our community\'s well-being at the center of every decision.',
  },
  {
    icon: Users,
    title: 'Inclusive Giving',
    description: 'We connect donors of all levels with causes that matter, making philanthropy accessible to everyone.',
  },
  {
    icon: Globe,
    title: 'Regional Impact',
    description: 'Our grants reach communities across the region, creating lasting positive change where it\'s needed most.',
  },
  {
    icon: TrendingUp,
    title: 'Measurable Growth',
    description: 'We track and report on every dollar invested, ensuring transparency and accountability in all programs.',
  },
  {
    icon: Award,
    title: 'Trusted Stewardship',
    description: 'Over two decades of responsible fund management with nationally recognized governance standards.',
  },
  {
    icon: Handshake,
    title: 'Strong Partnerships',
    description: 'We collaborate with 450+ nonprofits, civic leaders, and volunteers to amplify collective impact.',
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Why Choose Evergreen Community Foundation
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine deep community roots with strategic vision to deliver transformative impact.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>
                <h3 className="font-display text-xl font-bold text-primary-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

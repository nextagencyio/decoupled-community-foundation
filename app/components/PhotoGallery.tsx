'use client'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80&fit=crop',
    alt: 'Volunteers at community event',
  },
  {
    src: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80&fit=crop',
    alt: 'Community garden project',
  },
  {
    src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80&fit=crop',
    alt: 'Youth education program',
  },
  {
    src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80&fit=crop',
    alt: 'Community gathering',
  },
]

export default function PhotoGallery() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Our Community in Action
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how our grants and programs are making a difference across the region.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {photos.map((photo, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl group aspect-square">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-900/0 group-hover:bg-primary-900/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

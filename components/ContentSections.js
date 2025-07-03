import { motion } from 'framer-motion'
import Image from 'next/image'

const donationCategories = [
  {
    title: 'Monthly Food Pack',
    image: 'https://www.alqudrat.org.uk/wp-content/uploads/elementor/thumbs/vecteezy_generative-ai-stack-hemp-sacks-of-rice-or-coffee_28115714-scaled-r2vw5f3x69d7ht6u1rgmsogabwbv28c1mqm1qp3lt8.webp',
    link: 'https://www.alqudrat.org.uk/monthly-food-pack/',
  },
  {
    title: 'Disable Person Help',
    image: 'https://www.alqudrat.org.uk/wp-content/uploads/elementor/thumbs/chair-moving-people-with-limited-mobility-modern-terminals-ensuring-accessibility_166373-5900-r2n3hs07zg47anszy7dn9c7hzrpnmojozr1lqfgnjg.jpg',
    link: 'http://alqudrat.org.uk/disable-person-help/',
  },
  {
    title: 'Building a Mosque',
    image: 'https://www.alqudrat.org.uk/wp-content/uploads/elementor/thumbs/view-3d-islamic-mosque_23-2151112620-r2n3kip9x1vb5ptmxw1h15awd8772wfidbjl4hebe4.webp',
    link: 'https://www.alqudrat.org.uk/build-a-masjid/',
  },
  {
    title: 'Sadaat',
    image: 'https://www.alqudrat.org.uk/wp-content/uploads/elementor/thumbs/mosque-building-architecture-with-eery-weather_23-2150999879-r2n4knlwnrc5i1bzxid4w10uii36zzw0o6flbftg6k.webp',
    link: 'https://www.alqudrat.org.uk/sadaat-projects/',
  },
  {
    title: 'Zakat',
    image: 'https://www.alqudrat.org.uk/wp-content/uploads/elementor/thumbs/photorealistic-money-with-chest_23-2151027600-r2n4uqflxt4tzioz2v74mhgrt8evj5weq290k8vhgs.jpg',
    link: 'https://www.alqudrat.org.uk/zakat/',
  },
  {
    title: 'Water Pump',
    image: 'https://www.alqudrat.org.uk/wp-content/uploads/elementor/thumbs/realistic-water-drop-with-ecosystem_23-2151196384-r2n4x9lycqln9p0jaglxucghflxh9sydelj4434ap8.jpg',
    link: 'https://www.alqudrat.org.uk/water-pump/',
  },
]

export default function ContentSections() {
  return (
    <section className="container mx-auto px-4 py-12">
      <motion.h2
        className="text-3xl font-bold text-center mb-10 text-green-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        Share and Receive More
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {donationCategories.map(({ title, image, link }) => (
          <motion.a
            key={title}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative h-48 w-full">
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h3 className="text-xl font-semibold text-center p-4 bg-white">{title}</h3>
          </motion.a>
        ))}
      </div>
    </section>
  )
}

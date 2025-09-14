import Head from 'next/head'
import Layout from '../components/Layout'
import { ROUTES } from '../components/Layout'

export default function Projects() {
  const projects = [
    { title: 'OM Ganesh',
      description: 'Om-Ganesh Certification: A value-based trust promise.',
      link: 'https://om-ganesh.netlify.app',
      image: '/images/Logo-Om-Ganesh.jpeg'
    },

    { title: 'Urban Planning Portfolio',
      description: 'My portfolio during my studies.',
      link: '#',
      image: '/images/urban-planning-symbolism.jpg'
    },
  ]

  return (
    <Layout>
      <Head><title>{ROUTES.PROJECTS.name} | Human Potential Is Big</title></Head>
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8">Projects</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <a key={proj.title} href={proj.link} target="_blank" rel="noopener noreferrer" className="block p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transform hover:scale-105 transition">
            <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover"/>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{proj.title}</h2>
              <p className="text-gray-600">{proj.description}</p>
            </div>
          </a>
        ))}
      </div>
    </Layout>
  )
}
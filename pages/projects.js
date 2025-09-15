import Head from 'next/head'
import Layout from '../components/Layout'
import { ROUTES } from '../components/Layout'
import VisionModule from "../components/VisionModule";

export default function Projects() {
  const projects = [
    { title: 'Om Ganesh', 
      description: 'Om-Ganesh: A quality-based trust certificate.',
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

      <section className="flex flex-wrap justify-center gap-24 mt-12 mb-20">
        {projects.map((module) => (
          <VisionModule
            key={module.link}
            title={module.title}
            description={module.description}
            imageSrc={module.image}
            link={module.link}
            newTab={true}
          />
        ))}
      </section>


    {/**
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
    */}
    </Layout>
  )
}
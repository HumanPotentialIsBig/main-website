import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <Head><title>About | Human Potential Is Big</title></Head>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8">About</h1>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-4">
          <span className="italic">Human Potential Is Big</span> is my personal platform to share visions, missions, and ideas with the world. It explores what humans can achieve, individually and in community, through creativity, urban design and art.
        </p>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
          From my studies in Urban Planning at the Technical University of Vienna to projects like OM Ganesh, this space collects and publishes thoughts that inspire me and hopefullly others.
        </p>
      </div>
    </Layout>
  )
}
import Head from 'next/head'
import Layout from '../components/Layout'
import { ROUTES  } from '../components/Layout'
import TextBubble from "../components/TextBubble";

export default function About() {
  return (
    <Layout>
      <Head><title>{ROUTES.ABOUT.name} | Human Potential Is Big</title></Head>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8">About Me</h1>

        {/** 
        <TextBubble
          title={""}
          description={
          <>
            <span className="italic">Human Potential Is Big</span> is my personal platform for sharing visions and ideas with the world. It explores what humans <span className='italic'>could</span>
            achieve within parts of society. By thinking boldly <span className='italic'>yet</span> peacefully, people can shape truly magical worlds.
            It reflects on the incredible things humans can achieve and might accomplish within society.
            < br></br>
            I'm Cien, a young dreamer of exciting futures. From my studies in Urban Planning at the Technical University of Vienna to projects like OM Ganesh,
            this space collects and publishes thoughts that inspire me and hopefullly others too.
          </>}
        />
        */}
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700 mb-4">
          <span className="italic">Human Potential Is Big</span> is my personal platform for sharing visions and ideas with the world. It reflects on the incredible things humans could achieve and might accomplish within society. By thinking boldly <span className='italic'>yet</span> peacefully, people can shape truly magical worlds.
        </p>
        <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
          I'm Cien, a young dreamer of possible futures. From my studies in Urban Planning at the Technical University of Vienna to projects like OM Ganesh,
          I share ideas that naturally draw me in and might spark some inspiration for anyone who visits this space.
        </p>
      </div>

      {/** Video */}
      <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-lg max-w-sm mx-auto">
        <video
          src="/me_talking_intro.MP4"
          controls
          className="w-full rounded-2xl shadow-lg"
        />
      </div>
    </Layout>
  )
}
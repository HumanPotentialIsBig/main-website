import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'
import { ROUTES } from '../components/Layout'
import VisionModule from "../components/VisionModule";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { theme } from "../theme";


// --- Utility to Fetch Posts ---
export async function getStaticProps() {
  const postsDir = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDir)

  const posts = files.map((filename) => {
    const slug = filename.replace('.mdx', '')
    const markdown = fs.readFileSync(path.join(postsDir, filename), 'utf-8')
    const { data: frontmatter } = matter(markdown)

    return { slug, frontmatter }
  })

  return { props: { posts } }
}

// --- Home Page ---
export default function Home({ posts }) {

  // The different dive-in vision modules
  const visionModules = [
        {
          title: "Vision: Forest-City",
          description: "Interconnected hubs of societies living with(in) nature, using organic material to build cities and societies.",
          imageSrc: "/images/forest-city/forest city in contrast with normal city.jpeg",
          link: "/vision-parts/possible-future-vision",
          image_center: "object-center",
          buttonExists: true,
          buttonTitle: "Explore the Vision"
        },
        {
          title: "Das Potenzial in 100 Jahren",
          description: (
            <span>
              Im Verlauf eines Menschenlebens kann und wird sich die Welt zwangsläufig verändern...<br /><span className='font-bold'>1925 <ArrowRightIcon className="inline w-4 h-4 mx-1" /> 2025 <ArrowRightIcon className="inline w-4 h-4 mx-1" /> 2125 ?</span>
            </span>
          ),
          imageSrc: "/images/das_potenzial_von_100_jahren.jpeg",
          link: "/vision-parts/100-year-potential",
          image_center: "object-top"
        },
        {
          title: "Haltung zur Zukunft: Aussicht 2080",
          description: "Krisen kommen. Fällt man in ein passives Nichts-Tun oder trägt man aktiv zu einer positiven Zukunft bei?",
          imageSrc: "/images/zugang_zu_zukunft.jpeg",
          link: "/vision-parts/zukunftshaltung",
          image_center: "object-top"
        }
      ];

  return (
    
    <Layout>
      <Head>
        <title>Human Potential Is Big</title>
      </Head>
      
      <section className="text-center py-10">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ fontFamily: theme.fonts.body, fontWeight: 600 }}>
          Human Potential Is Big
        </h1>
        {/* <h1 classname="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent">Human Potential Is Big</h1> */}

        {/* small header elaboration */}  
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto">
          We know we're not living up to our potential....<br className='mb-2'></br><span className="italic font-bold text-xl md:text-2xl bg-white rounded-lg bg-opacity-60 px-3 py-1 mt-2 mb-3">»But what if we did?«</span> <br className='mb-2'></br>
          Here, I explore that question by shining light on visions, ideas, and projects that delve deep into the human potential.
        </p>

        {/** Vision Cards */}
        <section className="flex flex-wrap justify-center gap-24 mt-12 mb-20">
          {visionModules.map((module) => (
            <VisionModule
              key={module.link}
              title={module.title}
              description={module.description}
              imageSrc={module.imageSrc}
              link={module.link}
              image_center={module.image_center}
              buttonExists={module.buttonExists}
              buttonTitle={module.buttonTitle}
            />
          ))}
        </section>
        
      </section>


      {/** Getting the latest posts */}
      {/**
      <section className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Latest Ideas</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.slice(0, 2).map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transition-transform transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{post.frontmatter.title}</h3>
              <p className="text-gray-600">{post.frontmatter.excerpt}</p>
            </Link>
          ))}
        </div>
      </section>
       */}

       
    </Layout>
  )
}

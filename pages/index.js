import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/Layout'


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
  return (
    <Layout>
      <Head>
        <title>Human Potential Is Big</title>
      </Head>
      {/* style={{ backgroundImage: "url('/images/Human-Potential-Tree-Symbolism.jpeg')" }}*/}
      <section className="text-center py-20">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
          Human Potential Is Big
        </h1>
        {/* <h1 classname="text-5xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent">Human Potential Is Big</h1> */}

        {/* small header elaboration */}  
        <p className="text-lg md:text-xl  max-w-3xl mx-auto">
          A living platform of visions, ideas, and projects exploring human potential.</p>

        {/* Button */}
        <div className="mt-8">
          <Link href="/blog" className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl shadow hover:bg-yellow-500 transition">
          Explore Ideas</Link>
        </div>
      </section>

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
    </Layout>
  )
}

// --- About Page ---
export function About() {
  return (
    <Layout>
      <Head>
        <title>About | Human Potential Is Big</title>
      </Head>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-400">About</h1>
        <p className="text-gray-700 leading-relaxed text-lg">
          Human Potential Is Big is my personal platform to share visions, missions, and ideas with the world. It explores what humans can achieve, individually and together, through creativity, urban design, philosophy, and art. From my studies in Urban Planning to projects like OM Ganesh, this space collects and publishes thoughts that inspire me and others.
        </p>
      </div>
    </Layout>
  )
}

// --- Projects Page ---
export function Projects() {
  const projects = [
    { title: 'OM Ganesh', description: 'A spiritual-artistic exploration project.', link: 'https://om-ganesh.netlify.app' },
    { title: 'Urban Planning Portfolio', description: 'My portfolio during my studies.', link: '#' },
  ]

  return (
    <Layout>
      <Head>
        <title>Projects | Human Potential Is Big</title>
      </Head>
      <h1 className="text-4xl font-extrabold mb-8 text-center text-yellow-400">Projects</h1>
    </Layout>
  )
}

// --- Blog Index ---
export function BlogIndex({ posts }) {
  return (
    <Layout>
      <Head>
        <title>Blog | Human Potential Is Big</title>
      </Head>
      <h1 className="text-4xl font-extrabold mb-8 text-center text-yellow-400">Ideas & Visions</h1>
      <div className="space-y-8">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-8 rounded-2xl shadow-lg bg-white hover:shadow-2xl transform hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">{post.frontmatter.title}</h2>
            <p className="text-gray-600">{post.frontmatter.excerpt}</p>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
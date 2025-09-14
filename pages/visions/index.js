import Head from 'next/head'
import Layout from '../../components/Layout'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'
import { ROUTES } from '../../components/Layout'

export default function BlogIndex({ posts }) {
  return (
    <Layout>
      <Head><title>{ROUTES.BLOG.name} | Human Potential Is Big</title></Head>
      <h1 className="text-3xl md:text-5xl font-extrabold mb-8">{ROUTES.BLOG.name}s & Ideas</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-6 rounded-2xl shadow bg-white hover:shadow-lg transition">
            <h2 className="text-2xl font-semibold mb-2">{post.frontmatter.title}</h2>
            <p className="text-gray-600">{post.frontmatter.excerpt}</p>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

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
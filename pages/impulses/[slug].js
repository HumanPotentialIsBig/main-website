import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'
import Layout from '../../components/Layout'
import TextBubble from '../../components/TextBubble'

export default function BlogPost({ frontmatter, content }) {
  return (
      <Layout>
        <TextBubble  title={frontmatter.title}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }} />
        </TextBubble>     
    </Layout>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), 'posts'))
  const paths = files.map((filename) => ({ params: { slug: filename.replace('.mdx', '') } }))
  return { paths, fallback: false }
}

export async function getStaticProps({ params: { slug } }) {
  const markdown = fs.readFileSync(path.join(process.cwd(), 'posts', slug + '.mdx'), 'utf-8')
  const { data: frontmatter, content } = matter(markdown)
  return { props: { frontmatter, content } }
}
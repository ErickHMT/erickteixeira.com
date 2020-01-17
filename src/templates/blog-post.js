import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function Post({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <Link to="/">Voltar</Link>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`

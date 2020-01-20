import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"

export default function Post({ data }) {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <Link to="/" style={{ marginBottom: "20px" }}>
        &#60;&#60; Voltar
      </Link>
      <h2>{post.frontmatter.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
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

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import Tag from "../components/Tag"

export default function Post({ data }) {
  const { markdownRemark: post } = data

  // path, title, description, date, tags

  return (
    <Layout>
      <div style={{ marginBottom: "20px" }}>
        <Link to="/">&#60;&#60; Voltar</Link>

        <div style={{ float: "right" }}>
          {post.frontmatter.tags.map(item => (
            <Tag key={item} tag={item} />
          ))}
        </div>
      </div>

      <h1 style={{ fontSize: "3rem" }}>{post.frontmatter.title}</h1>
      <h3>{post.frontmatter.description}</h3>

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
        description
        date
        tags
      }
    }
  }
`

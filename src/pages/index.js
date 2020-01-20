import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Post from "../components/Post"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div style={{ textAlign: "center" }}>
      <h1 style={{ margin: "0 0 13px 0" }}>Hi people</h1>
      <p>Let's build something great.</p>
    </div>

    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {data.allMarkdownRemark.edges.map(post => (
      <Post
        key={post.node.id}
        path={post.node.frontmatter.path}
        title={post.node.frontmatter.title}
        description={post.node.frontmatter.description}
      />
    ))}
  </Layout>
)

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(limit: 10) {
      edges {
        node {
          id
          frontmatter {
            title
            path
            description
          }
        }
      }
    }
  }
`

export default IndexPage

import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import Head from '../components/Head'

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const sections = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Head title="About" />
        <h1>About Me</h1>

        {sections.map(({ node }, index) => {
          const title = node.frontmatter.title || node.fields.slug
          const img =
            node.frontmatter.heroImage &&
            node.frontmatter.heroImage.childImageSharp.fluid
          return (
            <div key={`section-${index}`}>
              <h3>{title}</h3>
              {img && <Image fluid={img} alt={title} />}
              <div dangerouslySetInnerHTML={{ __html: node.html }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { slug: { regex: "/about/" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            order
            title
          }
          html
        }
      }
    }
  }
`

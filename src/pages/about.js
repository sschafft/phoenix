import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import Head from '../components/Head'

class About extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const sections = data.allMarkdownRemark.edges.node

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Head
          title="About"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
         <h3>About</h3>


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
    allMarkdownRemark(filter: {fields: {slug: {regex: "/about/"}}} ){
      edges {
        node {
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`

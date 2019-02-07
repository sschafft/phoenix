import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import PostList from '../components/PostList'
import Head from '../components/Head'

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Head
          title="Me"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`

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
          title="Porfolio"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <h3> Some recent work:</h3>
        <ul>
          <li> <a href="https://gateway.academy" target="_blank">Gateway Academy</a></li>
          <li> <a href="https://bivee.co" target="_blank">Bivee</a></li>
          <li> <a href="https://tela.app" target="_blank">Tela</a></li>
        </ul>

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

import React from 'react'
import { graphql } from 'gatsby'
import { rhythm, scale } from '../utils/typography'
import Layout from '../components/Layout'
import Head from '../components/Head'
import panda from '../../content/assets/sad-panda.gif'

console.log(panda)

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Head title="404: Not Found" />
        <img
          src={panda}
          alt="Sad Panda"
          style={{
            marginRight: rhythm(2),
            marginBottom: 0,
            maxWidth: 90,
            borderRadius: `100%`,
            float: `left`,
          }}
        />
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    avatar: file(absolutePath: { regex: "/panda/" }) {
      absolutePath
    }
  }
`

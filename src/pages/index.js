import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Head from '../components/Head'
import ListItem from '../components/ListItem'
import { rhythm, scale } from '../utils/typography'
import styled from 'styled-components'

const SubTitle = styled.h4`
  color: hsla(0, 0%, 0%, 0.6);
  margin-bottom: ${rhythm(1)};
  font-size: ${rhythm(1)};
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;

  :before,
  :after {
    content: '';
    border-top: 1px solid hsla(0, 0%, 0%, 0.2);
    margin: 0 20px 0 0;
    flex: 1 0 20px;
  }

  :after {
    margin: 0 0 0 20px;
  }
`

class SiteIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const projects = data.projects.edges
    const products = data.products.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <Head
          title="Porfolio"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />

        <SubTitle>Some recent work</SubTitle>

        {projects.map(({ node }, index) => {
          return (
            <ListItem
              title={node.frontmatter.title}
              link={node.frontmatter.link}
              meta={node.frontmatter.meta}
              blurb={node.frontmatter.blurb}
              key={`project-${index}`}
            />
          )
        })}
      </Layout>
    )
  }
}

export default SiteIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    projects: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/projects/" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
            blurb
            meta {
              label
              data
              git
            }
          }
        }
      }
    }
    products: allMarkdownRemark(
      filter: { fields: { slug: { regex: "/products/" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          frontmatter {
            title
            link
            blurb
            meta {
              label
              data
              git
            }
          }
        }
      }
    }
  }
`

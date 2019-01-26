import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

function PostListItems() {
  return (
    <StaticQuery
      query={PostQuery}
      render={data => {
        const posts = data.allMarkdownRemark.edges
        return (
          posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const type = node.fields.slug.split('/')[1]
          const img = node.frontmatter.heroImage.childImageSharp.fluid
            return (
              <div key={node.id} className="col-md-4 col-sm-6 masonry__item" data-masonry-filter={type}>
                  <a href="#">
                      <div className="portfolio-item portfolio-item-1 text-center">
                          <Image
                            fluid={img}
                            alt={title}
                          />
                          <h5>{title}</h5>
                          <span>
                              <em>{type}</em>
                          </span>
                      </div>
                  </a>
              </div>
            )
          })
        )
      }}
    />
  )
}

const PostQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            heroImage {
              childImageSharp {
                fluid(maxWidth: 100, maxHeight: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PostListItems

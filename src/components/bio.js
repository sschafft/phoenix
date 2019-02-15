import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { rhythm, scale } from '../utils/typography'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, byline } = data.site.siteMetadata
        return (
          <section
            style={{
              display: `flex`,
              marginBottom: rhythm(1.5),
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              critical={true}
              fadeIn={false}
              style={{
                marginRight: rhythm(2),
                marginBottom: 0,
                minWidth: 150,
                borderRadius: `100%`,
              }}
              imgStyle={{
                marginRight: rhythm(2),
                marginBottom: 0,
                minWidth: 150,
                borderRadius: `100%`,
              }}
            />
            <div>
              <h1>{author}</h1>
              <p>{byline}</p>
              <Link style={{ boxShadow: `none` }} to="/about">
                <h5>Learn more about me →</h5>
              </Link>
            </div>
          </section>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        byline
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio

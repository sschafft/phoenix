import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import Image from 'gatsby-image'

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social, byline } = data.site.siteMetadata
        return (
          <section className="features features-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <h3>{author}</h3>
                            <p className="lead">{byline}</p>
                            <div className="feature">
                              <Link style={{ boxShadow: `none` }} to="/about">
                                <h5>Learn more about me →</h5>
                              </Link>
                            </div>
                        </div>
                        <div className="col-lg-5 col-md-5 col-sm-12">
                          <Image
                            fixed={data.avatar.childImageSharp.fixed}
                            alt={author}
                            style={{
                              marginBottom: 0,
                              borderRadius: `100%`,
                            }}
                            imgStyle={{
                              borderRadius: `50%`,
                            }}
                          />
                        </div>
                    </div>
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
        fixed(width: 300, height: 300) {
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

import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

function Footer() {
  return (
    <StaticQuery
      query={FooterQuery}
      render={data => {
        const { author, social, byline, email } = data.site.siteMetadata
        return (
          <footer className="footer-2 text-center-xs bg--white">
            <div className="container">
              <div className="row">
                <div className="col-sm-8">
                  <ul className="footer__navigation">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Terms</a>
                    </li>
                    <li>
                      <a href="#">Careers</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
                <div className="col-sm-4 text-right text-center-xs">
                  <ul className="social-list">
                    <li>
                      <a href={`https://twitter.com/${social.twitter}`}><i className="socicon-twitter" target="_blank"></i></a>
                    </li>
                    <li>
                      <a href={`https://github.com/${social.github}`}><i className="socicon-github" target="_blank"></i></a>
                    </li>
                    <li>
                      <a href={`https://www.linkedin.com/in/${social.linkedin}`}><i className="socicon-linkedin" target="_blank"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <a className="type--underline" href={`mailto:${email}`}>{email}</a>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-8">
                  <div className="footer__lower">
                    <span className="type--fine-print">© Copyright {new Date().getFullYear()} - All Rights Reserved</span>
                    <span className="type--fine-print text-right"
                      style={{
                        marginLeft: 20,
                      }}
                    >Made with ♥️ in Denver</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="footer__lower">

                  </div>
                </div>
              </div>
            </div>
          </footer>
        )
      }}
    />
  )
}

const FooterQuery = graphql`
  query FooterQuery {
    site {
      siteMetadata {
        byline
        email
        author
        social {
          twitter
          github
          linkedin
        }
      }
    }
  }
`

export default Footer

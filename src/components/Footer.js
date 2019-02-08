import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'
import { rhythm, scale, gray } from '../utils/typography'
import styled from "styled-components"

const FooterLink = styled.a`
  color: hsla(0,0%,0%,0.8);
`
const FooterLinks = styled.ul`
  font-size: ${rhythm(.6)};
  list-style-type: none;
  margin: ${rhythm(1)} 0px ${rhythm(1)} 0px;

  li {
    display: inline;
    margin-left: ${rhythm(.5)};
    border-left: ${rhythm(.01)} solid hsla(0,0%,0%,0.95);
    padding-left: ${rhythm(.5)};
  }

  li:first-child {
    content: '';
    margin: 0px;
    padding: 0px;
    border: none;
  }
`
const FooterCopyright = styled.div`
  display: inline-block;
  font-size: ${rhythm(.5)};
  color: hsla(0,0%,0%,0.5);
`

function Footer() {
  return (
    <StaticQuery
      query={FooterQuery}
      render={data => {
        const { author, social, byline, email } = data.site.siteMetadata
        return (
          <footer>
            <FooterLinks>
              <li>
                <FooterLink href={`https://twitter.com/${social.twitter}`} target="_blank">Twitter</FooterLink>
              </li>
              <li>
                <FooterLink href={`https://github.com/${social.github}`} target="_blank">Github</FooterLink>
              </li>
              <li>
                <FooterLink href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank">LinkedIn</FooterLink>
              </li>
              <li>
                <FooterLink href="/resume.pdf" target="_blank">Resume</FooterLink>
              </li>
              <li>
                <FooterLink href={`mailto:${email}`}>Email</FooterLink>
              </li>
            </FooterLinks>

            <FooterCopyright>
              <span>© Copyright {new Date().getFullYear()} - All Rights Reserved</span>
                <span
                  style={{
                    marginLeft: 20,
                  }}
                >Made with ♥️ in Denver</span>
              </FooterCopyright>

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

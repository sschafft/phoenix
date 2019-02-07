import React from 'react'
import { Link } from 'gatsby'
import Bio from './Bio'
import Footer from './Footer'
import { rhythm, scale } from '../utils/typography'


class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <Bio />
      )
    } else {
      header = (
        <h5
          style={{
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/`}
          >
            ← back
          </Link>
        </h5>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(26),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout

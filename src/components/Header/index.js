import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./styles.scss"
const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1
        style={{
          fontSize: "1.5rem",
          display: "inline",
          margin: "0",
          width: "200px",
        }}
      >
        <Link to="/" style={{ color: "#FFF" }}>
          {siteTitle}
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="nav-item" to="/about">
            Sobre
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/contact">
            Contato
          </Link>
        </li>
        <li>
          <a className="nav-item" href="http://artstation.com/erickhmt">
            Artstation
          </a>
        </li>
        <li>
          <a className="nav-item" href="http://github.com/erickhmt">
            Github
          </a>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

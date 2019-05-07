import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"
import { FaGlasses } from "react-icons/fa"
//import { redirectTo } from "@reach/router";

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>

    <Link to="/">
      <div className={headerStyles.logo}>
          <FaGlasses size="2rem"/>
      </div>
    </Link>

    <div className={headerStyles.links}>
      <ul>
        <li>About Me </li>
        <li>Projects</li>
        <li>Resume</li>
        <li>Contact</li>
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

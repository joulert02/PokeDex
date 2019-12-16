import PropTypes from "prop-types"
import React from "react"
import PokeballImage from "../../images/pokeball.png"
import './header.scss';

const Header = ({ siteTitle }) => {
  return (
    <header>
      <div>
        <figure>
          <img src={PokeballImage} alt="pokeball" />
        </figure>
        <h1> {siteTitle} </h1>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

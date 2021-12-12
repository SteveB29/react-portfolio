import React from "react";
import Navigation from "../Navigation";

function Header(props) {
  const {
    setCurrentCategory
  } = props

  return (
    <header>
        <h1>Steve Bendrick</h1>
        <Navigation
          setCurrentCategory={setCurrentCategory}
        />
    </header>
  )
}

export default Header;
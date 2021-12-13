import React from "react";

function Navigation(props) {
  const {
    setCurrentCategory,
    currentCategory
  } = props

  const navCategories = [
    {
      display: 'About Me',
      comp: 'About'
    },
    {
      display: 'Work',
      comp: 'Project'
    },
    {
      display: 'Contact Me',
      comp: 'Contact'
    },
    {
      display: 'Resume',
      comp: 'Resume'
    }
  ]

  return (
    <header>
      <h1>Steve Bendrick</h1>
      <nav>
        <ul>
          {navCategories.map(cat => (
            <li key={cat.comp}>
              <button
              className={`${cat.comp === currentCategory && 'navActive'}`}
              onClick={() => setCurrentCategory(cat.comp)}>
                {cat.display}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation;
import React from "react";

function Navigation(props) {
  const {
    setCurrentCategory
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
    <nav>
      <ul>
        {navCategories.map(cat => (
          <li>
            <button onClick={() => setCurrentCategory(cat.comp)}>{cat.display}</button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation;
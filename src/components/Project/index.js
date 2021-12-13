import React from "react";

function Project() {
  // primary application that will be spotlighted at the top
  const primaryProject = {
    name: 'MovieFoodie',
    languages: 'HTML/CSS/JS',
    link: 'https://michellewehr.github.io/MovieFoodie/',
    image: '/images/movie-foodie.jpg'
  }

  // project array to map into the secondary applications div
  const secondaryProjects = [
    {
      name: 'PepWeb',
      languages: 'HTML/CSS/Node/JavaScript',
      link: 'https://glacial-plains-14244.herokuapp.com/',
      image: '/images/PepWeb.png',
      align: 'left'
    },
    {
      name: 'Run-Buddy',
      languages: 'HTML / CSS',
      link: 'https://steveb29.github.io/run-buddy/',
      image: '/images/run-buddy-screenshot.jpg',
      align: 'right'
    },
    {
      name: 'Weather report',
      languages: 'HTML/CSS/JavaScript',
      link: 'https://steveb29.github.io/weather-dashboard/',
      image: '/images/weather-dashboard.png',
      align: 'left'
    },
    {
      name: 'Workday Scheduler',
      languages: 'JavaScript',
      link: 'https://steveb29.github.io/work-day-scheduler/',
      image: '/images/day-scheduler.png',
      align: 'right'
    },
    {
      name: 'Regex Gist',
      languages: 'MD',
      link: 'https://gist.github.com/SteveB29/b4109f656c16394c2a077eb3cff7b393',
      image: '/images/regex-gist.png',
      align: 'left'
    },
    {
      name: 'Offline Expense Tracker',
      languages: 'JavaScript',
      link: 'https://lit-castle-17417.herokuapp.com/',
      image: '/images/travel-expenses.PNG',
      align: 'right'
    }
  ]

  return (
    <section id="work" className="work">

      <div className="applications">

        <a href={primaryProject.link}
        target="_blank" rel="noreferrer noopener" className="primary-application"
        style={{ backgroundImage: `url(${primaryProject.image})` }}>
          <div className="app-tag">
            <h2>{primaryProject.name}</h2>
            <p>{primaryProject.languages}</p>
          </div>
        </a>

        <div className="secondary-block">
          {secondaryProjects.map(project => (
            <a href={project.link} target="_blank" rel="noreferrer noopener"
            className={`secondary-application float-${project.align}`}
            style={{ backgroundImage: `url(${project.image})` }}
            key={project.name}>
              <div className="app-tag">
                <h2>{project.name}</h2>
                <p>{project.languages}</p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Project;
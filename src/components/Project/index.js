import React from "react";

function Project() {
  // primary application that will be spotlighted at the top
  const primaryProject = {
    name: 'MovieFoodie',
    languages: 'HTML/CSS/JS',
    link: 'https://michellewehr.github.io/MovieFoodie/',
    image: '/images/movie-foodie.jpg',
    github: 'https://github.com/michellewehr/MovieFoodie'
  }

  // project array to map into the secondary applications div
  const secondaryProjects = [
    {
      name: 'PepWeb',
      languages: 'HTML/CSS/Node/JavaScript',
      link: 'https://glacial-plains-14244.herokuapp.com/',
      image: '/images/PepWeb.png',
      align: 'left',
      github: 'https://github.com/JessicaLDaley/PepWeb'
    },
    {
      name: 'Run-Buddy',
      languages: 'HTML / CSS',
      link: 'https://steveb29.github.io/run-buddy/',
      image: '/images/run-buddy-screenshot.jpg',
      align: 'right',
      github: 'https://github.com/SteveB29/run-buddy'
    },
    {
      name: 'Weather report',
      languages: 'HTML/CSS/JavaScript',
      link: 'https://steveb29.github.io/weather-dashboard/',
      image: '/images/weather-dashboard.png',
      align: 'left',
      github: 'https://github.com/SteveB29/weather-dashboard'
    },
    {
      name: 'Workday Scheduler',
      languages: 'JavaScript',
      link: 'https://steveb29.github.io/work-day-scheduler/',
      image: '/images/day-scheduler.png',
      align: 'right',
      github: 'https://github.com/SteveB29/work-day-scheduler'
    },
    {
      name: 'Regex Gist',
      languages: 'MD',
      link: 'https://gist.github.com/SteveB29/b4109f656c16394c2a077eb3cff7b393',
      image: '/images/regex-gist.png',
      align: 'left',
      github: 'https://gist.github.com/SteveB29/b4109f656c16394c2a077eb3cff7b393'
    },
    {
      name: 'Offline Expense Tracker',
      languages: 'JavaScript',
      link: 'https://lit-castle-17417.herokuapp.com/',
      image: '/images/travel-expenses.PNG',
      align: 'right',
      github: 'https://github.com/SteveB29/offline-travel-expenses'
    }
  ]

  return (
    <section id="work" className="work">

      <div className="applications">

        <div className="primary-application"
        style={{ backgroundImage: `url(${primaryProject.image})` }}>
          <div className="app-tag">
            <a className="app-link" href={primaryProject.link} target="_blank" rel="noreferrer noopener">{primaryProject.name}</a>
            <p>{primaryProject.languages}</p>
            <a className="app-github" href={primaryProject.github} target="_blank"  rel="noreferrer noopener">GitHub Repo</a>
          </div>
        </div>

        <div className="secondary-block">
          {secondaryProjects.map(project => (
            <div className={`secondary-application float-${project.align}`}
            style={{ backgroundImage: `url(${project.image})` }}
            key={project.name}>
              <div className="app-tag">
                <a className="app-link" href={project.link} target="_blank" rel="noreferrer noopener">{project.name}</a>
                <p>{project.languages}</p>
                <a className="app-github" href={project.github} target="_blank"  rel="noreferrer noopener">GitHub Repo</a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Project;
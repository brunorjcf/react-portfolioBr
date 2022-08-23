import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/bg5.jpg'
import IMG2 from '../../assets/img3.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'

// Estes são os sites dos projetos

const data = [
  {
    id: 1,
    imagem: IMG1,
    title: 'Projeto Relógio Digital',  
    github: 'https://brunorjcf.github.io/Projeto_Relogio.Digital/',
    linkedin: 'https://www.linkedin.com/in/bruno-santos-cf/'
  },
  {
    id: 2,
    imagem: IMG2,
    title: 'Projeto Front-End',
    github: 'https://brunorjcf.github.io/FrontEndProject/',
    linkedin: 'https://www.linkedin.com/in/bruno-santos-cf/'
  },
  {
    id: 3,
    imagem: IMG3,
    title: 'Projeto 3',
    github: 'https://github.com/brunorjcf/Projeto_Relogio.Digital',
    linkedin: 'https://www.linkedin.com/in/bruno-santos-cf/'
  },
  {
    id: 4,
    imagem: IMG4,
    title: 'Projeto Academia',
    github: 'https://github.com/brunorjcf/Projeto_Relogio.Digital',
    linkedin: 'https://www.linkedin.com/in/bruno-santos-cf/'
  },
  {
    id: 5,
    imagem: IMG5,
    title: 'Projeto React',
    github: 'https://github.com/brunorjcf/Projeto_Relogio.Digital',
    linkedin: 'https://www.linkedin.com/in/bruno-santos-cf/'
  },
]

const portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Meus Projetos Recentes</h5>
      <h2>portfolio</h2>

      <div className="container container__portfolio">
        { 
          data.map(({id, imagem, title, github, linkedin}) => {
            return (
              <article key={id} className="item__portfolio">
                <div className="item__imagem-portfolio">
                  <img src={imagem} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="item__portfolio-cta">
                  <a href={github} className="btn">Github</a>
                  <a href={linkedin} className="btn btn-primary">Linkedin</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio
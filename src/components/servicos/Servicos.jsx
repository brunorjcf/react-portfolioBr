import React from 'react'
import './servicos.css'
import {BiCheck} from 'react-icons/bi'

const servicos = () => {
  return (
    <section id="servicos">
      <h5>Meus Serviços</h5>
      <h2>Serviços(Skills)</h2>

      <div className="container container__servicos">

      <article className="servico">
          <div className="head__servico">
            <h3>Desenvolvimento Web</h3>
          </div>

            <ul className="lista__servico">
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Lógica de Programação</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>HTML5</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>CSS</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>JavaScript</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>MySQL</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Testes de Software</p>
              </li>
            </ul>
            {/* FIM DO DESENVOLVIMENTO WEB */}
        </article>

        <article className="servico">
          <div className="head__servico">
            <h3>UI/UX Design</h3>
          </div>

            <ul className="lista__servico">
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Photoshop</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Usabilidade e design responsivo</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Organização de Informações</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Agilidade</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Software de design e design visual</p>
              </li>
            </ul>
            {/* FIM DA UI/UX DESIGN */}
        </article>

        <article className="servico">
          <div className="head__servico">
            <h3>Desenvolvimento Back-End</h3>
          </div>

            <ul className="lista__servico">
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Elaboração e Agilidade no Desenvolvimento Back-end</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Segurança e Prevenção em Sites com Back-end</p>
              </li>
              <li>
                <BiCheck className="lista__servico-icon" />
                <p>Domíno PHP, Laravel, MySQL, MongoDB e PostgreSQL a nível Júnior</p>
              </li>
            </ul>
            {/* FIM DA SEGURANÇA DA INFORMAÇÃO */}
        </article>
      </div>
    </section>
  )
} 

export default servicos
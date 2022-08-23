import React from 'react'
import './experiencia.css'
import {FaHtml5} from 'react-icons/fa'
import {FaCss3Alt} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import {GrReactjs} from 'react-icons/gr'
import {BsPatchCheckFill} from 'react-icons/bs' 


const experiencia = () => { 
  return (
    <section id="experiencia">
      <h5>Minhas Skills</h5>
      <h2>Minhas Experiências</h2>

      <div className="container container__experiencia">
        <div className="fronted__experience">
          <h3>Desenvolvimento Front-End</h3>
          <div className="content__experiencia">
            <article className="detalhes__experiencia">
              <FaHtml5 className="detalhes__experiencia-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="detalhes__experiencia">
              <FaCss3Alt className="detalhes__experiencia-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="detalhes__experiencia">
              <SiJavascript className="detalhes__experiencia-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="detalhes__experiencia">
              <FaBootstrap className="detalhes__experiencia-icon"/>
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="detalhes__experiencia">
              <GrReactjs className="detalhes__experiencia-icon"/>
              <div>
                <h4>React</h4>
                <small className="text-light">Básico para Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        {/* Fim do FRONT-END */}

        <div className="backend__experiencia">
        <h3>Desenvolvimento Back-End</h3>
          <div className="content__experiencia">
            <article className="detalhes__experiencia">
              <BsPatchCheckFill className="detalhes__experiencia-icon"/>
              <div>
                <h4>PHP</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="detalhes__experiencia">
              <BsPatchCheckFill className="detalhes__experiencia-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
            <article className="detalhes__experiencia">
              <BsPatchCheckFill className="detalhes__experiencia-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Báscio</small>
              </div>
            </article>
            <article className="detalhes__experiencia">
              <BsPatchCheckFill className="detalhes__experiencia-icon"/>
              <div>
                <h4>Laravel</h4>
                <small className="text-light">Báscio</small>
              </div>
            </article>
            <article className="detalhes__experiencia">
              <BsPatchCheckFill className="detalhes__experiencia-icon"/>
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Básico</small>
              </div>
            </article>
          </div>
        </div>
        {/* Fim do BACK-END */}

      </div>
    </section>
  )
}

export default experiencia 
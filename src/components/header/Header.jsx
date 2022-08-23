import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/br7.jpg'
import HeaderSociais from './HeaderSociais'

const Header = () => { 
  return (
    <header>
      <div class="container header__container">
        <h5>Seja Bem-vido(a) ao meu Portfolio, me chamoo</h5>
        <h1>Bruno Santos</h1>
        <h5 className="text-light">Full Stack Developer Jr / Segurança da Informação Jr</h5>
        <CTA />
        <HeaderSociais />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contato" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">B-Tech</a>
    
      <ul className="meuslinks">
        <li><a href="#"></a>Home</li>
        <li><a href="#sobre"></a>Sobre</li>
        <li><a href="#experiencia"></a>Experiência</li>
        <li><a href="#servicos"></a>Serviços</li>
        <li><a href="#portfolio"></a>Portfolio</li>
        <li><a href="#contato"></a>Contato</li>
      </ul>

      <div className="sociais__footer">
        <a href="https://www.facebook.com/bruno.s.santos.RJ"><BsFacebook/></a>
        <a href="https://www.instagram.com/bruno.santosrj/"><BsInstagram/></a>
        <a href="https://www.linkedin.com/in/bruno-santos-cf/"><FaLinkedin/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; B-Tech. Todos os direitos reservados.</small>
      </div>
    </footer> 
  )
}

export default Footer
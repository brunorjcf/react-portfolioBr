import React from 'react'
import './sobre.css'
import ME from '../../assets/img2.jpg'
import {FaAward} from 'react-icons/fa'
import {RiUserSearchFill} from 'react-icons/ri'
import {VscFolderLibrary} from 'react-icons/vsc'

const sobre = () => {
  return (
    <section id='sobre'>
      <h5>Conheça</h5>
      <h2>Sobre Mim</h2>

      <div className="container container__sobre">
        <div className="sobre__mim">
          <div className="imagem__sobre-mim">
            <img src={ME} alt="Imagem Sobre" />
          </div>
        </div>

        <div className="content__sobre">
          <div className="cartoes__sobre">
            <article className="cartao__sobre">
              <FaAward className="icone__sobre" />
              <h5>Experiência</h5>
              <small>Mais de 3 Anos de Experiência com Programação</small>
            </article>

            <article className="cartao__sobre">
              <RiUserSearchFill className="icone__sobre"/>
              <h5>Em Busca!</h5>
              <small>Estou em Busca do Meu Primeiro Emprego com Programação
                     Ou Segurança Web Júnior.
              </small>
            </article>

            <article className="cartao__sobre">
              <VscFolderLibrary className="icone__sobre"/>
              <h5>Formação(2018 até 2020)</h5>
              <small>Análise e Desenvolvimento de Sistemas</small>
              <h5>MBA(2020 até 2021)</h5>
              <small>Segurança da Informação</small>
            </article>
          </div>

          <p>
            Sou desenvolvedor front end e back end com mais de três anos de
            Experiência com programação nível Júnior. Apaixonado por tecnologias, atuo no desenvolvimento
            de sites e administração em banco de dados MySQL, forte capacidade
            criativa e analítica. Ótima adaptação em equipes com atenção aos detalhes.
          </p>

          <a href="#contato" className="btn btn-primary">Vamos Bater um Papo!</a>
        </div>
      </div>
    </section>
  )
}

export default sobre
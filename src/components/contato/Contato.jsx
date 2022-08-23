import React from 'react'
import './contato.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import {FiPhoneIncoming} from 'react-icons/fi'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contato = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fk04b9z', 'template_n9c3pv6', form.current, 'JCl7TTIdo6Rtlcbuc')
      
    e.target.reset()
  };

  return (
    <section id='contato'>
        <h5>Entre em Contato</h5>
        <h2>Me Convide <FiPhoneIncoming/></h2>

        <div className="container container__contato">
          <div className="opcoes__contato">
            <article className="opcao__contato">
              <MdOutlineEmail className="opcao__contato-icon"/>
              <h4>Email</h4>
              <h5>brunorjcf@gmail.com</h5>
              <a href="mailto:brunorjcf@gmail.com">Enviar Mensagem</a>
            </article>
            <article className="opcao__contato">
              <RiMessengerLine className="opcao__contato-icon"/>
              <h4>Messenger</h4>
              <h5>Bruno Analista Júnior</h5>
              <a href="https://m.me/bruno.s.santos.RJ/">Enviar Mensagem</a>
            </article>
            <article className="opcao__contato">
              <BsWhatsapp className="opcao__contato-icon"/>
              <h4>WhatsApp</h4>
              <h5>55+(22) 99916-0608</h5>
              <a href="https://api.whatsapp.com/send?phone=+233557233888">Enviar Mensagem</a>
            </article>
            {/* FIM DA OPÇÕES CONTATO */}
            
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Seu Nome Completo" required />
              <input type="email" name="email" placeholder="Seu Email" required />
              <textarea name="message" rows="7" placeholder="Sua Mensagem" required ></textarea>
              <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
            </form>
            
          </div>
        </div>
    </section>
  )
}

export default Contato
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'

const HeaderSociais = () => {
  return (
    <div className='header__sociais'>
        <a href="https://www.linkedin.com/in/bruno-santos-cf/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/brunorjcf" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/bruno.s.santos.RJ" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSociais
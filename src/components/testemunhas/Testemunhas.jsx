import React from 'react'
import './testemunhas.css'
import AVTR1 from '../../assets/bg6.jpg'
import AVTR2 from '../../assets/bg7.jpg'
import AVTR3 from '../../assets/img2.jpg'

// importe do Swiper core e sesu modulos requeridos
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Importe Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: AVTR1,
    nome: 'Felipe Rodrigues',
    review: 'Meu primo Bruno Santos é uma pessoa muito empenhada no faz e se entrega com paixão no que faz, ele é uma pessoa com atenção aos detalhes e perfeccionaista.'
  },
  {
    avatar: AVTR2,
    nome: 'Douglas Soares',
    review: 'O Bruno sempre foi um cara datalhista desde quando eu o conheci, ele se empenha com vontade e atenção as coisas.'
  },
  {
    avatar: AVTR3,
    nome: 'Fulano',
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },
]

const Testemunhas = () => {
  return (
    <section id='testemunhas'>
      <h5>Review from clients</h5>
      <h2>Testemunhas</h2>

      <Swiper className="container container__testemunhas"
        // install of Swiper modules
        modules={[ Pagination ]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, nome, review}, index) => {
            return(
              <SwiperSlide key={index} className="testemunha">
                <div className="avatar__cliente">
                  <img src={avatar} />
                </div>
                <h5 className="nome__cliente">{nome}</h5>
                  <small className="review__cliente">{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testemunhas
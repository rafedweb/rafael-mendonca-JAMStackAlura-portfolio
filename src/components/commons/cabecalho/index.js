import React from 'react';
import { Logo } from './logo';
import { WrapperCabecalho } from './styles/wrapperCabecalho';

const links = [ 
  {
    texto: 'Home',
    url: '/',
  },
  {
    texto: 'Sobre min',
    url: '/sobre',
  },
  {
    texto: 'Contato',
    url: '/contato',
  },
]

export default function Cabecalho() {
  return (
    <nav>
      <WrapperCabecalho.Esquerda>
          <Logo />
      </WrapperCabecalho.Esquerda>     
      <WrapperCabecalho.Centro>
      {links.map(function (link) {
          return (
            <li key={link.url}>             
                {link.texto}              
            </li>
          )
        })}
      </WrapperCabecalho.Centro>
    </nav>
  )
}
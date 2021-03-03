import React from 'react';
import Text from '../../../foundation/Text';
import { WrapperCabecalho } from '../styles/wrapperCabecalho';

const links = [ 
  {
    texto: 'Sobre min',
    url: '/sobre',
  },
  {
    texto: 'Contato',
    url: '/contato',
  },
]

export default function Navbar() {
  return (    
      
<WrapperCabecalho.NavBar>
{links.map(function (link) {
    return (
      <li key={link.url}>
        <Text variant="smallestException" tag="a" href={link.url}>
          {link.texto}
        </Text>
      </li>
    )
  })}
</WrapperCabecalho.NavBar> 
         
  )
}

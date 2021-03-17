import React from 'react';
import { Logo } from './logo';
import Navbar from './navbar';
import { WrapperCabecalho } from './styles/wrapperCabecalho';


export default function Cabecalho() {
  return ( 
    <WrapperCabecalho>
      <WrapperCabecalho.Esquerda>
       <a href="/"><Logo /></a> 
      </WrapperCabecalho.Esquerda>     
      <WrapperCabecalho.Direita>
          <Navbar />
      </WrapperCabecalho.Direita>
    </WrapperCabecalho>     
  )
}
import React from 'react';
import { WrapperRodape } from './styles/WrapperRodape';



export default function Rodape(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <WrapperRodape {...props}>    
     <WrapperRodape.Centro>    
      <a href="https://twitter.com/carifu">
               <img
                  alt="Icone do Twitter "
                  style={{ display: 'block', margin: 14, verticalAlign: 'middle', width: 32, borderRadius: 32/ 2, backgroundColor: '#fff'}}
                  src= "/images/twitter.png"
                />
      </a>
      <a href="https://github.com/rafedweb"> 
               <img
                  alt="Icone do GitHub "
                  style={{ display: 'block', margin: 14, verticalAlign: 'middle', width: 32, borderRadius: 32/ 2, backgroundColor: '#fff'}}
                  src= "/images/gitHub.png"
                /> 
      </a>        
      <a href="https://www.linkedin.com/in/rafael-mendon%C3%A7a-31437340/">
      <img
                  alt="Icone do linkedIn "
                  style={{ display: 'block', margin: 14, verticalAlign: 'middle', width: 32, borderRadius: 32/ 2, backgroundColor: '#fff'}}
                  src= "/images/linkedIn.png"
                /> 
        </a>            
       </WrapperRodape.Centro>    
    </WrapperRodape>
  );
} 
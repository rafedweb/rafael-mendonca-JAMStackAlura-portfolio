import React from 'react';
import styled from 'styled-components'
import { Grid } from '../../foundation/Grid';
import Text from '../../foundation/Text';
import {CircuitoBackgroud} from '../circuito-backgroud'


const WrapperCapa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250;
    height: 100vh; /* Note a medida */ 
    padding: 0; 
    .img-backgroud{
      align-items: 'center';
      height: 600;
    }   
             
`

export default function Capa() {
  return (    
         <WrapperCapa> 
            <Grid.Container > 
            <Grid.Col
                  value={{ xs: 12, md: 10 }}
                  offset={{ xs: 0, md: 1 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                 > 
                
              </Grid.Col>
                <Grid.Col
                  value={{ xs: 12, md: 10 }}
                  offset={{ xs: 0, md: 1 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                 > 
                   <Text
                      variant="titleXS"
                      tag="h1"
                      color="tertiary.light"
                     // textAlign="right"
                       textAlign={{
                       xs: 'center',
                       md: 'center',
                      }}
                    >
                      Rafael Mendonça
                  </Text>
                  <Text
                    variant="paragraph2"
                    tag="p"
                    color="tertiary.light"
                    textAlign={{
                    xs: 'center',
                    md: 'center',
                    }}
                  >
                     Portfolio
                 </Text>        
              </Grid.Col> 
              <Grid.Col
                 value={{ xs: 12, md: 10 }}
                 offset={{ xs: 0, md: 1 }}
                  display="flex"
                  alignItems="flex-end"                  
                  flexDirection="column"
                 > 
                 <div> 
                   <CircuitoBackgroud />                   
                 </div>
                 </Grid.Col>      
           </Grid.Container>         
         </WrapperCapa>    
  )
}

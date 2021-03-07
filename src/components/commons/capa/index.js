import React from 'react';
import styled from 'styled-components'
import { Grid } from '../../foundation/Grid';
import Text from '../../foundation/Text';


const Title = styled.h1`
  font-size: 90px;
  color: ${({ theme }) => theme.colors.primary};
`
const WrapperCapa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250;
    height: 100vh; /* Note a medida */   
    h1{
      font-size: 90;
    }      
`

export default function Capa() {
  return (    
         <WrapperCapa> 
            <Grid.Container
               
             >  
        <Grid.Col> 
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
      </Grid.Container>         
      </WrapperCapa>    
  )
}

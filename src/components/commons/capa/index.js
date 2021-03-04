import React from 'react';
import styled from 'styled-components'
import { Grid } from '../../foundation/Grid';
import Text from '../../foundation/Text';


const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`
const WrapperCapa = styled.div`
    width: 250;
    height: 100vh; /* Note a medida */         
`

export default function Capa() {
  return (    
         <WrapperCapa> 
            <Grid.Container
                marginTop={{
                             xs: '32px',
                             md: '75px',
                           }}
             >  
       
            <Text
              variant="title"
              tag="h1"
              color="tertiary.main"
              // textAlign="right"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Rafael Mendonça
            </Text>
            <Text
              variant="paragraph1"
              tag="p"
              color="tertiary.light"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Portfolio
            </Text>        
                
      </Grid.Container>         
      </WrapperCapa>    
  )
}

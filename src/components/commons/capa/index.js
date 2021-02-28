import React from 'react';
import styled from 'styled-components'
import { Box } from '../../foundation/Box';
import { Grid } from '../../foundation/Grid';
import Text from '../../foundation/Text';
import Cabecalho from '../cabecalho';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export default function Capa() {
  return (    
    <Box
    flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="column"
      justifyContent="space-between"
      backgroundImage="url(/images/bubbles.svg)"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
      >               
         <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
        <Grid.Col
            value={{ xs: 12, md: 5 }}
            offset={{ xs: 0, md: 1 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
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
              Olá, Sou Rafael Mendonça.
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
              Sou web software engineer, apaixonado por criar softwares excelentes que melhoram a vida das pessoas ao meu redor.
            </Text>          
          </Grid.Col>
          <Grid.Col
            value={{
              xs: 12,
              md: 6,
            }}
          >
            <img
              alt="Imagem de Rafael de Mendonça "
              style={{ display: 'block', margin: 'auto', verticalAlign: 'middle', width: 400, borderRadius: 400/ 2 }}
              src= "/images/avatar.jpg"
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container> 
      <Cabecalho />       
    </Box>         
  )
}

import React from 'react';
import Text from '../../foundation/Text';
import { Grid } from '../../foundation/Grid';
import { Box } from '../../foundation/Box';
import Card from '../projeto';


export default function WrapperProjetos(){
    return (
        <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"       
      >  
        <Grid.Container
          marginTop={{
            xs: '-10px',
            md: '-10px',
          }}
        >
           <Grid.Row          
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="row"
            textAlign={{
              xs: 'center',
              md: 'center',
            }}>       
           <Text
                variant="title"
                tag="h1"
                color="tertiary.main"
                 textAlign="center"
                textAlign={{
                  xs: 'center',
                  md: 'center',
                }}
              >
                Meus Projetos
              </Text>       
          </Grid.Row>
          <Grid.Row>             
              <Card 
              position="absolute"
              flexDirection= "column-reverse"             
              height="510px"         
              width="30%"             
              img="/images/sobre.jpg"
              content="">
              </Card>
              <Card 
                position="absolute"
                flexDirection= "column-reverse"              
                height="510px"            
                width="30%"               
                img ="/images/bubbles.svg"
                content=""/>                
              <Card 
                position="absolute"
                flexDirection= "column-reverse"               
                height="510px"             
                width="30%"                
                img="/images/avatar.jpg"
                content=""/>
          </Grid.Row>
          <Grid.Row>       
          <Card 
              position="inherit"
              flexDirection= "row"             
              height="320px"         
              width="95%"            
              img="/images/bubbles.svg"
              content= "Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments."
              />        
          </Grid.Row>
        </Grid.Container>
      </Box>
    )
}
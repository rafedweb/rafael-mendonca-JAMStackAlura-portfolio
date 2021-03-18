import React from 'react';
import Text from '../../foundation/Text';
import { Grid } from '../../foundation/Grid';
import { Box } from '../../foundation/Box';
import Card from '../card';


export default function WrapperProjetos(){
    return (
        <Box
        flex="1"
        display="flex"
        flexWrap="wrap"
        flexDirection="column"
        justifyContent="space-between"       
      >  
        <Grid.Container >
           <>       
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
          </>
          <Grid.Row>             
              <Card 
              order="3" 
              order={{
                xs: '4',
                sm: '4',
              }}             
              flexGrow="1"
              flexShrink="0"
              position="absolute"
              flexDirection= "column-reverse"             
              height="510px"         
              width="30%"             
              img="/images/bubbles.svg"
              content="">
              </Card>
              <Card 
                order="initial"                
                order={{
                  xs: '4',
                  sm: '4',
                  md: 'initial',
                  lg: 'initial', 
                  xl: 'initial', 
                }}               
                flexGrow="1"
                flexShrink="0"
                position="absolute"
                flexDirection= "column-reverse"              
                height="510px"            
                width="30%"               
                img ="/images/sobre.jpg"
                content=""/>                
              <Card 
                order="2"                
                order={{
                  xs: '2',
                  sm: '2',
                  md: '2',
                  lg: '2', 
                  xl: '2', 
                }} 
                order="3"
                order={{
                  xs: '3',
                  sm: '3',
                  md: '3',
                  lg: '3', 
                  xl: '3', 
                }}                
                flexGrow="1"
                flexShrink="0"
                position="absolute"
                flexDirection= "column-reverse"               
                height="510px"             
                width="30%"                
                img="/images/avatar.jpg"
                content=""/>
          <Card  
              order="4"
              order={{
                xs: 'initial',
                sm: 'initial',
                md: '4',
                lg: '4', 
                xl: '4', 
              }}             
              flexGrow="10"
              flexShrink="0"
              position="inherit"
              flexDirection= "row"             
              height="320px !important"         
              width="95%"            
              img="/images/bubbles.svg"
              content= "Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments."
              />        
          </Grid.Row>
         
        </Grid.Container>
      </Box>
    )
}
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
              width="30%"          
              backgroundImage="url(/images/bubbles.svg)"
              backgroundRepeat="no-repeat"
              backgroundPosition="center">
              </Card>
              <Card              
                width="30%"            
                backgroundImage="url(/images/bubbles.svg)"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"/>
              <Card               
                width="30%"             
                backgroundImage="url(/images/bubbles.svg)"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"/>
          </Grid.Row>
          <Grid.Row>       
          <Card             
              width="100%"         
              backgroundImage="url(/images/bubbles.svg)"
              backgroudnRepeat="no-repeat"
              backgroundPosition="center"
              />        
          </Grid.Row>
        </Grid.Container>
      </Box>
    )
}
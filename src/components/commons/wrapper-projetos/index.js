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
        <Grid.Container
          marginTop={{
            xs: '0px',
            md: '1px',
          }}
        >
           <Grid.Row>       
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
                Meus Projetos
              </Text>       
          </Grid.Row>
          <Grid.Row>             
              <Card />
              <Card />
              <Card />
          </Grid.Row>
          <Grid.Row>       
              <Card />          
          </Grid.Row>
        </Grid.Container>
      </Box>
    )
}
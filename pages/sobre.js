import React from 'react'
import Cabecalho from '../src/components/commons/cabecalho'
import Rodape from '../src/components/commons/rodape'
import { Box } from '../src/components/foundation/Box'
import { Grid } from '../src/components/foundation/Grid'
import Text from '../src/components/foundation/Text'

export default function PageSobre(){
    return(
        <Box
        flex="1"
          display="flex"
          flexWrap="wrap"
          flexDirection="column"
          justifyContent="space-between"         
          >    
          <Cabecalho />            
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
                  Sobre mim
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
                  Sou um Desenvolvedor de software com quase 10 anos de experiência na construção e manutenção dos mais diversos tipos de aplicações Web, Mobile e mais recentemente Desktop.
Tenho contribuido ao longo de minha carreira com projetos em empresas publicas e privadas de diferentes setores como; setor financeiro, telecomunicações, industria e saúde.
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
                  src= "/images/sobre.jpg"
                />
              </Grid.Col>
            </Grid.Row>
          </Grid.Container> 
          <Rodape />       
        </Box>  
    )
}
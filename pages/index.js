import styled from 'styled-components'
import Cabecalho from '../src/components/commons/cabecalho'
import Capa from '../src/components/commons/capa'
import Rodape from '../src/components/commons/rodape'
import WrapperProjetos from '../src/components/commons/wrapper-projetos'
import { Box } from '../src/components/foundation/Box'
import { Grid } from '../src/components/foundation/Grid'

export default function Home() {
  return (
    <>
    <Capa />   
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
      <WrapperProjetos />
     
    </Grid.Container>
    <Rodape />
  </Box>  
    </>
        )
}

import React from 'react';
import styled, {css} from 'styled-components'
import { Grid } from '../../foundation/Grid';
import Text from '../../foundation/Text';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

const WrapperCapa = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 250;
    height: 93vh; /* Note a medida */ 
    padding: 0;
    background-image: url(/images/Programming.svg);   
    background-repeat: no-repeat;
    background-position: bottom right;
    background-size: 12em;
    ${breakpointsMedia({
      xm: css`
          background-size: 10em;
        `,
     sm: css`
          background-size: 15em;
        `,
     md: css`
         background-size: 25em;
        `,
     lg: css`
          background-size: 30em;
         `,
     xl: css`
          background-size: 35em;
        `,
    })}             
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
                    marginTop="-48px"
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
               
                 </Grid.Col>      
           </Grid.Container>         
         </WrapperCapa>    
  )
}

import styled, {css} from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const Card = styled.div`
  position: relative;
  display:flex;  
  //flex-direction: column-reverse;
  margin: 0.4em 0.4em;
  border: 1px solid #E9C46A;
  overflow: hidden; 
  //${propToStyle('order')}  
  ${propToStyle('flexDirection')}  
  ${propToStyle('height')}  
  ${propToStyle('width')}
  ${propToStyle('flexShrink')}
  ${propToStyle('flexGrow')}
  ${breakpointsMedia({
  xs: css`
      width: 100%; 
    `,
  sm: css`
      width: 100%; 
    `,
  md: css`
      width: 30%;     
    `,
  lg: css`
      width: 30%; 
    `,
  xl: css`
      width: 30%;
    `,
})}
  box-shadow: rgba(6, 33, 63, 0.129412) 0px 1px 2px 0px;

&:hover,
&:focus img{top:30%;opacity: 0.5;}

.card-body{
  position: inherit;
  //${propToStyle('position')} 
  width: 100%;
  height: 100%;  
}
.card-img{
  position: absolute;  
  width: 100%;
  height: 85%;
  overflow: hidden;
}
.card-img img {   
  width: 100%;
  height: 100%; 
}
.card-Title{
  //position: absolute; 
  ${propToStyle('position')} 
  width: 100%;
  height: 15%;
  background: #FFF; 
}
.Card  .overlay{
  position: absolute; 
  left: 0px;
  width: 100%;
  height: 80%;
  background: #FFF; 
}
&:hover,
&:focus .overlay{bottom:0px;}

 .overlay .line{width: 100%; text-align: left;line-height: 50px; padding:0em 1em;}
 .overlay .content{text-align: left;padding: 1em;}  
`;

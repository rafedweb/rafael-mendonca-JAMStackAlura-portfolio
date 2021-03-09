import styled, { css } from 'styled-components';


export  const WrapperCircuitoBackgroud = styled.div`
max-width: 500px;
min-width: 600px;
max-height: 500px;
min-width: 600px;
z-index: -10;
width: 100%; 
  position: absolute; 
  transform: translate(-50%, -50%); 
  .path {
  animation: draw 14s infinite;
  animation-timing-function: linear;
}

.path-2 {
  animation: draw 14s infinite;
  animation-delay: 1s;
  animation-timing-function: linear;
}

@keyframes draw {
  0% {
  }
  100% {
    stroke-dashoffset: 0;
    stroke-opacity: 1;
  }
}
`;

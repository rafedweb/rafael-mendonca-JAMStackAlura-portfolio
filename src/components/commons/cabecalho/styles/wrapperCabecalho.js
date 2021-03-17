import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../../theme/utils/breakpointsMedia'

export  const WrapperCabecalho = styled.nav`
  position: sticky;
  top: 0;
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; 
  padding-left: 28px;
  padding-right: 28px;
  border-top: 2px solid #E9C46A;
  background-color: #FFF8E6;   
  max-height: 67px;
`;

WrapperCabecalho.Esquerda = styled.div`
  padding: 0;  
  margin: 0;
  order: 1;
  width: 50%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    text-align: center;
    display: block;
    font-size: 28;
    text-decoration: none;
    background-color: #E9C46A;
    color: #fff;
    transition: 200ms ease-in-out;  
    padding-right: 50;
    &:hover,
    &:focus {
      font-weight: 500;
      color: #fff;      
    }
  }
`;

WrapperCabecalho.Direita = styled.div`  
  display: flex;
  flex: 1;
  order: 2;  
  justify-content: space-around; 
`;

WrapperCabecalho.NavBar = styled.div`     
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around; 
  flex: max-content;
   li {    
    line-height: 0.1;
  }
  li a {    
    text-decoration: none;
    color: #000000;
    transition: 200ms ease-in-out; 
    font-size: 28px;
    text-transform: capitalize;
    &:hover,
    &:focus {
      font-weight: 500;
      color: #88989E;      
    }
  }
`;
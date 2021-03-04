import styled, { css } from 'styled-components';


export  const WrapperCabecalho = styled.nav`
  font-family: 'Rubik', sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap; 
  padding-left: 28px;
  padding-right: 28px;
  border-top: 2px solid #E9C46A;
  background-color: #FFF8E6;
`;

WrapperCabecalho.Esquerda = styled.div`
  padding: 0;  
  margin: 0;
  order: 1;
  width: 50%;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: right;
  a {
    text-align: center;
    display: block;
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
  padding: 0;
  margin: 0;
  display: flex;
  flex: 1;
  order: 2;
  justify-content: space-between;
`;

WrapperCabecalho.NavBar = styled.div`
  padding: 0;
  padding-right: 10%;
  margin: 0;   
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;  
    padding-right: 50;
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;      
    }
  }
`;
import styled from 'styled-components';

export const WrapperRodape = styled.footer`
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center; 
  background-color: #FFF8E6;
  line-height: 4.3;
  margin-top: 40px;
`;

WrapperRodape.Centro = styled.div` 
  margin-left: 14;
  margin-right: 14;  
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #E9C46A;
  height: 100%;
  a {
    text-align: center;
    display: block;
    text-decoration: none;
    color: #88989E;
    transition: 200ms ease-in-out;  
    &:hover,
    &:focus {
      font-weight: 500;
      color: #070C0E;
      
    }
  }
`;
import React from 'react';
import styled, { css } from 'styled-components';


const LogoStyle = styled.div`  
  padding: 10; 
  margin: 10;  
  width: 100%; 
  display: flex; 
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

export function Logo() {
  return (
    <LogoStyle>
<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="70.000000pt" height="49.000000pt" viewBox="0 0 121.000000 70.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,70.000000) scale(0.100000,-0.100000)"
fill="#ffff" stroke="none">
<path d="M170 601 c-5 -11 -10 -63 -10 -115 0 -82 -3 -98 -20 -114 -19 -18
-19 -18 0 -35 17 -15 20 -30 20 -113 0 -113 8 -134 53 -134 l32 1 -32 14 -33
14 0 98 c0 68 -4 105 -14 119 -12 17 -12 22 0 39 10 13 14 49 14 117 l0 99 33
14 32 14 -32 1 c-22 0 -36 -6 -43 -19z"/>
<path d="M1008 605 l32 -14 0 -98 c0 -68 4 -105 14 -119 12 -17 12 -22 0 -39
-10 -13 -14 -49 -14 -117 l0 -99 -32 -14 -33 -14 32 -1 c45 0 53 21 53 134 0
82 3 98 20 114 19 18 19 18 0 35 -17 15 -20 30 -20 113 0 113 -8 134 -53 134
l-32 -1 33 -14z"/>
<path d="M410 489 c-32 -13 -68 -47 -86 -81 -16 -32 -20 -208 -4 -208 6 0 10
38 10 93 0 72 4 99 19 123 17 28 73 64 100 64 6 0 11 5 11 10 0 12 -17 12 -50
-1z"/>
<path d="M573 486 c-50 -23 -63 -60 -63 -180 0 -147 18 -144 22 5 3 118 4 121
31 145 37 31 81 31 112 -1 24 -23 25 -30 25 -139 0 -66 4 -117 10 -121 6 -4
10 36 10 114 l0 119 31 26 c40 34 74 33 110 -3 29 -29 29 -31 29 -140 0 -62 4
-112 10 -116 6 -4 10 36 10 112 0 130 -7 151 -60 178 -41 21 -62 19 -105 -11
l-38 -25 -21 20 c-29 28 -74 34 -113 17z"/>
</g>
</svg>
</LogoStyle>
  );
}
import React from 'react';
import styled, { css } from 'styled-components';


const WrapperCard = styled.div` 
  position: relative;
  display:inline-block;
  width: 30%;
  height: 400px;
  margin: 3em 1em;
  border: 1px solid #E9C46A;
  overflow: hidden;  
  background-image: 'url(/images/bubbles.svg)';
  background-Repeat: 'no-repeat';
  background-Position: 'center';
  box-shadow: rgba(6, 33, 63, 0.129412) 0px 1px 2px 0px;
  -moz-transition: 0.5s; -o-transition: 0.5s; -webkit-transition: 0.5s; transition: 0.5s;
img{
  position: absolute;
  top:50%;
  left:50%;
  -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); -o-transform: translate(-50%, -50%); transform: translate(-50%,-50%);
  -moz-transition: 0.5s; -o-transition: 0.5s; -webkit-transition: 0.5s;transition: 0.5s;
}
&:hover,
&:focus img{top:30%;opacity: 0.5;}

.Card .overlay{
  position: absolute;
  bottom:calc(-80% + 50px);
  left: 0px;
  width: 100%;
  height: 80%;
  background: #FFF;
  -moz-transition: 0.5s; -o-transition: 0.5s; -webkit-transition: 0.5s; transition: 0.5s;
}
&:hover,
&:focus .overlay{bottom:0px;}

 .overlay .line{width: 100%; text-align: left;line-height: 50px; padding:0em 1em;}
 .overlay .content{text-align: left;padding: 1em;}       
`
WrapperCard.Img

export default function Card(){
    return (
        <WrapperCard>
            <img src="/images/bubbles.svg"/>
            <div class="overlay">
               <div class="line"><h2 class="title">Card Title</h2></div>
               <div class="content">
                  <p>Bringing unlocked me an striking ye perceive. Mr by wound hours oh happy. Me in resolution pianoforte continuing we. Most my no spot felt by no. He he in forfeited furniture sweetness he arranging. Me tedious so to behaved written account ferrars moments. </p>
                </div>
            </div>     
        </WrapperCard>
    )
}
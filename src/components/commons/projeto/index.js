import React from 'react';
import styled, { css } from 'styled-components';
import {Card} from '../../foundation/card'

export default function Projeto(props){  
    return (      
      <Card              
      width={props.width}
      height={props.height} 
      flexDirection ={props.flexDirection} 
      position ={props.position}       
      >
        <div className="card-body">
          <div className="card-img">
            <img src={props.img}/>
          </div>           
        </div>
        <div className="card-Title">
            <h2 className="title">Project Report</h2>
               <div>
                  <p>{props.content}</p>
              </div>
        </div>              
        </Card>
    )
}
import React from 'react';
import { Image, } from "semantic-ui-react"

const Choice = ({choose}) => (
  <div style={{display: "flex"}}>
  <Image src='/images/wireframe/image.png' size='small' alt="rack" onClick={ () => choose("Rock")}/>
  <Image src='/images/wireframe/image.png' size='small' alt="pauper" onClick={ () => choose("Paper")}/>
  <Image src='/images/wireframe/image.png' size='small' alt="scizzors" onClick={ () => choose("Scissors")}/>
  </div>
)

export default Choice;

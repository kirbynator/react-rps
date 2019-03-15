import React from 'react';
import { Table, } from "semantic-ui-react"
const Display = ({game}) =>{
  return(
    <Table.Row>
        <Table.Cell>{game.P1}</Table.Cell>
        <Table.Cell>{game.result}</Table.Cell>
        <Table.Cell>{game.P2}</Table.Cell>
  </Table.Row>)}

export default Display;
    
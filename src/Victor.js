import React, { Component } from 'react';
import { Table, } from "semantic-ui-react"
import Display from "./Display"
class Victor extends Component {
  state = {rps:[{id:69, P1: "Rock", P2: "Water", result: "P2 Wins!!!",}]}
  
  getId = () => Math.floor((1 + Math.random()) * 10000);

  componentDidUpdate(prevProps, prevState){
    if (this.prevState === prevState) {
      debugger
      let game = {id: this.getId(), P1: this.props.choices.p1, P2: this.props.choices.p2, result: this.compare(),};
      this.setState({ rps: [game, ...this.state.rps,], });
    }
  }
  
    
  compare = () => {
  
return ""

    
  }
render(){
  return(
    <div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>{this.props.choices.p1}</Table.HeaderCell>
          <Table.HeaderCell>Result</Table.HeaderCell>
          <Table.HeaderCell>P2</Table.HeaderCell>
        </Table.Row>
      </Table.Header>{
          this.state.rps.map( game =>(
          <Display key={game.id} game={{...game}}/> ))}
      </Table>
      </div>
  )
}
}
export default Victor;
import React, { Component } from 'react';
import Choice from "./Choice"
import Display from "./Display"
import './App.css';
import { Container, Table } from "semantic-ui-react"

class App extends Component {
  state = { p1: "x", p2: "y", history: []}
 
  comp(){
    var arr = ["Rock", "Paper", "Scissors", ];
    this.setState({p2: arr[Math.floor(Math.random() * arr.length)]})
    this.renderResults()
  }

  getId = () => Math.floor((1 + Math.random()) * 10000);

  compare = () => {
    if (this.state.p1 === this.state.p2) {
      return "Tie!"
     
    
    }
    else if (
      (this.state.p1 === "Rock" && this.state.p2 === "Scissors") ||
      (this.state.p1 === "Paper" && this.state.p2 === "Rock") ||
      (this.state.p1 === "Scissors" && this.state.p2 === "Paper")
    ) {
      return "P1 wins!"
      
    }
    else {
      return "P2 Wins!"
    }
  }

  renderResults = () => {
    let game = { id: this.getId(), P1: this.state.p1, P2: this.state.p2, result: this.compare(),};
    this.setState({ history: [game, ...this.state.history] });
  }

  choose = (c) =>{
   this.setState({p1: c})
   this.comp()
  }

  render() {
    return (
      <Container>
        <Choice choose={this.choose} />
        <div>
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>P1</Table.HeaderCell>
          <Table.HeaderCell>Result</Table.HeaderCell>
          <Table.HeaderCell>P2</Table.HeaderCell>
        </Table.Row>
      </Table.Header>{
          this.state.history.map( game =>(
          <Display key={game.id} game={{...game}}/> ))}
      </Table>
      </div>
      </Container>
    );
  }
}

export default App;

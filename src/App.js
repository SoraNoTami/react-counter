import './App.css';
import React from 'react';
import { Counter } from './components/Counter.jsx'

function firstTry(){
    // if(this.state.count < 0){
    // let countForMoins = this.state.count;
    // countForMoins--
    // this.setState({ count: countForMoins })
    // }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      button: 'moins',
      button2: 'plus',
    };
  }


  decrementCount = () => {
    // console.log(this.state.count)
    // console.log(0)
    // {firstTry}
    let countForMoins = this.state.count;
    countForMoins--
    this.setState({ count: countForMoins })
  }
  incrementCount = () => {
    let countForPlus = this.state.count;
    countForPlus++
    this.setState({ count: countForPlus })
  }

  render() {
    return (
      <div>
        <h1>Counter</h1>
        <Counter nom={this.state.button} nom2={this.state.button2} num={this.state.count} decrement={this.decrementCount} increment={this.incrementCount}/>
      </div>
    )
  }
}


export default App;

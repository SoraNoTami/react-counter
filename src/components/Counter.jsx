import React from "react";

export class Counter extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>
                <h2>{this.props.num}</h2>
                <button id={this.props.nom} onClick={this.props.decrement}>-</button>
                <button id={this.props.nom2} onClick={this.props.increment}>+</button>
            </div>
        )
    }
    
}
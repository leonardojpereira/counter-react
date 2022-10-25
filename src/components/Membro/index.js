import React, { Component } from 'react';
import './Membro.css';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }

        this.aumentar = this.aumentar.bind(this);

        this.diminuir = this.diminuir.bind(this);
    }

    aumentar() {
        this.setState( {contador: this.state.contador += 1} );
    }

    diminuir() {
        this.setState( {contador: this.state.contador -= 1} );
    }

    render() {

        if (this.state.contador < 0) {
            alert('Ops, valor menor que 0 :/')
            this.state.contador = 0;
        }

        return (
            <div className='counter'>
                <span className='icon'>⌚</span>
                <h1>Contador</h1>
                <div className='container-btn'>
                    <button className='btn red' onClick={this.diminuir}>-</button>
                    <span>{this.state.contador}</span>
                    <button className='btn green' onClick={this.aumentar}>+</button>
                </div>
            </div>
        );
    }

}

export default Membro;
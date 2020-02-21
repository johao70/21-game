import React, { Component } from 'react';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartasJuez: [],
      cartasUser: [],
    }
    this.pedirCarta = this.pedirCarta.bind(this);
  }

  componentDidMount() {
    this.jugar()
  }

  jugar() {
    fetch('http://localhost:4000/server/crear')
    .then(res => res.json())
    .then(data => {
      fetch('http://localhost:4000/server/mezclar')
      .then(res => res.json())
      .then(data => {
        this.setState({ cartasJuez: data });
      })
    })
  }

  pedirCarta(){
    fetch(`http://localhost:4000/server/pedir`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'aplication/json'
      }
    })
    .then(res => res.json())
    .then(data => {
      this.setState({cartasJuez: data[1]})
      this.setState({cartasUser: data[0]})
    });
  }

  render() {
    return (
      <div className="w-2/3 mx-auto -400">
        <div className="bg-white  shadow-md rounded my-6">
          <div className="bg-white">
            <div>
              <h2>Cartas</h2>
            </div>
          </div>
          <div className="bg-white" >
            {
              this.state.cartasUser.map(item => 
                <div className="bg-black">
                  <h2 className="text-white">{`${item.rotulo} ${item.palo}`}</h2>
                </div>
              )
            }
          </div>
          <button className="uppercase bg-grey-lightest font-bold uppercase text-sm" onClick={ this.pedirCarta }>
            Jugar
          </button>
        </div>
      </div>
    )
  }
}

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
              this.state.cartasUser.map( element =>
                <div className="w-64 cursor-pointer border b-gray-400 rounded flex flex-col justify-center items-center text-center p-6 bg-white">
                  <div className="text-md font-bold text-gray-900 flex justify-between w-full">
                    <span className="uppercase">{ element.rotulo }</span>
                  </div>
                  <div className="text-md font-bold text-gray-900 flex justify-between w-full">
                    <span className="uppercase">{ element.palo.nombre }</span>
                  </div>
                  
                  <div className="w-32 h-32 flex items-center justify-center">
      
                  </div>
      
                  <p className="text-gray-700 mb-2">{ element.imagen }</p>
                  
                  <div className="text-3xl font-bold text-gray-900 mb-6">
                    
                  </div>
      
                  <div className="text-md font-bold text-gray-900 flex justify-between w-full">
                    <div className="flex items-center text-gray-700 px-2">
                      
                    </div>
                    <div className="flex items-center text-gray-700 px-2">
                      <span className="uppercase">{ element.palo.nombre }</span>
                    </div>
                  </div>
      
                  <div className="text-md font-bold text-gray-900 flex justify-between w-full">
                    <div className="flex items-center text-gray-700 px-2">
                      
                    </div>
                    <div className="flex items-center text-gray-700 px-2">
                      <span className="uppercase">{ element.rotulo }</span>
                    </div>
                  </div>
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

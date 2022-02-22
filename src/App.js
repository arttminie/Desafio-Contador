import React, { Component } from 'react';

export default class Contador extends Component {

   state = {
      contar : 0
   };

    adicionar = () => {
    let {contar} = this.state
      if (contar != 10) {
         this.setState({
            contar : contar + 1
        }) 
      }
    }


    remover = () => {
       let {contar} = this.state
       if(contar != 0){
         this.setState({
            contar : contar - 1
         })
       }
    }

   render () {
       return(
           <div>
              <h1>React App Contador</h1>
              <h2>{this.state.contar}</h2>
              <button onClick = {this.adicionar}>+</button>
              <button onClick = {this.remover}>-</button>
           </div>
       )
   }

}
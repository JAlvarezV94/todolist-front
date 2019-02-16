import React, { Component } from 'react';
import ListContainer from './todo-list/containers/list-container';

class App extends Component {
  render() {

    const tasks = [
      {title: "Besis de fresis", isChecked: true},
      {title: "Limpiar y eso", isChecked: false},
      {title: "Subir esto a github", isChecked: false},
      {title: "Hacer una buena app :)", isChecked: false},
      {title: "Pasar los elementos de lista a tamaño movil con media query", isChecked: false},
      {title: "Hacer un estilo propio para el scrollbar", isChecked: false},
      {title: "Hacer el menú de editar", isChecked: false},
      {title: "Crear las funciones de borrar y editar", isChecked: false},
    ];

    return (
      <div className = "app-container">
          <ListContainer tasks = {tasks}/>
      </div>
    );
  }
}

export default App;

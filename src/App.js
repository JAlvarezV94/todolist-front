import React, { Component } from 'react';
import ListContainer from './todo-list/containers/list-container';
import NewTask from './todo-list/components/new-task';

class App extends Component {

  constructor(){
    super();
    this.whatToRender = this.whatToRender.bind(this);
    this.onAddTaskClicked = this.onAddTaskClicked.bind(this);
    this.state = {
      toShow: 0, //0-> listContainer 1-> new task
    }
  }

  whatToRender(){
    if(this.state.toShow === 0)
      return <ListContainer/>;
    else
      return <NewTask/>;
  }

  onAddTaskClicked(){
    this.setState({toShow: 1});
  }

  render() {

    return (
      <div className = "app-container">
            <button className = "tdl-button-ok" onClick={this.onAddTaskClicked}>
                new task!
            </button>
            {
              this.whatToRender()
            }
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ListContainer from './todo-list/containers/list-container';
import NavBar from './todo-list/containers/navbar';
import NewTask from './todo-list/components/new-task';
import DeleteDialog from './todo-list/components/delete-dialog';

class App extends Component {

  constructor(){
    super();
    this.whatToRender = this.whatToRender.bind(this);
    this.onAddTaskClicked = this.onAddTaskClicked.bind(this);
    this.onBackClicked = this.onBackClicked.bind(this);
    this.onSubmitControlled = this.onSubmitControlled.bind(this);
    this.onDeleteClicked = this.onDeleteClicked.bind(this);
    this.state = {
      idToDelete: -1,//This is always -1 until the user click on delete a task
      taskName: '',
      toShow: 0, //0-> listContainer 1-> new task
      displayDelete: 'none', //show the modal dialog to delete a task (none o flex)
    }
  }

  whatToRender(){
    if(this.state.toShow === 0)
      return <ListContainer onDelete = {this.onDeleteClicked}/>;
    else
      return <NewTask onBack = {this.onBackClicked} onSubmit = {this.onSubmitControlled}/>;
  }

  onSubmitControlled(event){
    alert('holi');
    var data = JSON.stringify({
      name: `${event.target.taskName.value}`,
      priority: event.target.taskPriority.value,
      endDate: `${event.target.endDate.value}`
    });

    alert(data);
    
    fetch('http://localhost:8080/task/newtask',{
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: data
    })
    .then(function(response){
      console.log(response);
    })
  }

  onAddTaskClicked(){
    this.setState({toShow: 1});
  }

  onBackClicked(){
    this.setState({toShow: 0});
  }

  onDeleteClicked(id, name){
    this.setState({
      displayDelete: 'flex', 
      idToDelete: id,
      taskName: name,
    });    
  }

  render() {

    return (
      <div className = "app-container">
        <DeleteDialog display={this.state.displayDelete} id={this.state.idToDelete} name={this.state.taskName}/>
        <NavBar onPlusClick = {this.onAddTaskClicked}/>
        {
          this.whatToRender()
        }
      </div>
    );
  }
}

export default App;

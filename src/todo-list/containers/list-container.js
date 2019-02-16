import React, {Component} from 'react';
import ListElement from '../components/list-element';
import '../../styles.css';

class ListContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            screenToShow: 0 //0-> list, 1-> Edit, 2-> Delete
        }

        this.whatToShow = this.whatToShow.bind(this);
        this.onEditClicked = this.onEditClicked.bind(this);
    }

    whatToShow(){
        switch(this.state.screenToShow){
            case 0:
                break;
            case 1:
                break;
            case 2:
                break;
            default:
                console.log('This action is not allowed here');
        }
    }

    showListScreen(){
        
    }
    onEditClicked(selectedTask) {
        
    }

    render(){

        const tasks = this.props.tasks;
        return(
            <div className = "list-container">
                {
                    tasks.map(task => {
                        if(!task.isChecked)
                            return <ListElement title = {task.title}/>
                        else
                            return false;
                    })
                }
            </div>
        );
    }
}

export default ListContainer;
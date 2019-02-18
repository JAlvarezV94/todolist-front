import React, {Component} from 'react';
import ListElement from '../components/list-element';
import '../../styles.css';

class ListContainer extends Component{

    constructor(props){
        super(props);
        this.state = {
            tasks: []
        }
    }


    componentDidMount(){
        fetch('http://localhost:8080/task/list')
            .then((response) => {
                return response.json();
            })
            .catch((error) => {
                console.log(error);
            })
            .then((json) => {
                this.setState({tasks: json});
            });
    }


    render(){

        return(
            <div className = "list-container">
                {
                    this.state.tasks.map(task => {
                        if(!task.is_done)
                            return <ListElement title = {task.name}/>
                        else
                            return false;
                    })
                }
            </div>
        );
    }
}

export default ListContainer;